import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "cheerio";

const PROD = "https://hulmsolutions.com";
const STAGE = process.env.AUDIT_STAGE || "https://stalwart-toffee-39860f.netlify.app";
const STAGE_HOST = new URL(STAGE).hostname.replace(/^www\./, "");
const OUT = process.env.AUDIT_OUT ? path.resolve(process.env.AUDIT_OUT) : path.dirname(fileURLToPath(import.meta.url));
const UA = "Mozilla/5.0 (compatible; HulmMigrationAudit/1.0)";

const stop = new Set(`a an and are as at be been but by can could did do does for from had has have how i if in into is it its may more most no not of on or our should so than that the their them then there these they this to up us use used using was we were what when where which who why will with you your hulm hulmpos solutions pvt ltd`.split(/\s+/));
const ctaPattern = /\b(start|trial|demo|contact|whatsapp|call|register|sign up|pricing|download|get started|book|talk|buy|subscribe|try)\b/i;

function normPath(input) {
  const pathname = new URL(input, PROD).pathname.replace(/\/{2,}/g, "/");
  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}

function cleanText(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

function words(value = "") {
  return cleanText(value.toLowerCase()).match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) || [];
}

function meaningful(value = "") {
  return words(value).filter((word) => word.length > 2 && !stop.has(word));
}

function unique(values) {
  return [...new Set(values)];
}

function pct(n, d) {
  return d ? Math.round((n / d) * 1000) / 10 : 100;
}

function csvCell(value) {
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function toCsv(rows) {
  const headers = unique(rows.flatMap((row) => Object.keys(row)));
  return [headers.map(csvCell).join(","), ...rows.map((row) => headers.map((h) => csvCell(row[h])).join(","))].join("\n");
}

async function get(url, options = {}) {
  const response = await fetch(url, { redirect: options.redirect || "follow", headers: { "user-agent": UA } });
  return { response, text: await response.text() };
}

async function sitemapUrls() {
  const { text } = await get(`${PROD}/sitemap_index.xml`);
  const $ = load(text, { xmlMode: true });
  const children = $("sitemap > loc").map((_, el) => $(el).text().trim()).get();
  const urls = [];
  for (const child of children) {
    const childXml = await get(child);
    const child$ = load(childXml.text, { xmlMode: true });
    urls.push(...child$("url > loc").map((_, el) => child$(el).text().trim()).get());
  }
  return unique(urls).sort();
}

function extract(url, html) {
  const $ = load(html);
  const schema = [];
  let articleAuthor = "";
  let articlePublished = "";
  let articleModified = "";
  $("script[type='application/ld+json']").each((_, el) => {
    try {
      const data = JSON.parse($(el).text());
      const visit = (item) => {
        if (!item) return;
        if (Array.isArray(item)) return item.forEach(visit);
        if (typeof item !== "object") return;
        if (item["@type"]) {
          const types = Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]];
          schema.push(...types);
          if (types.some((type) => ["Article", "BlogPosting", "NewsArticle"].includes(type))) {
            const author = Array.isArray(item.author) ? item.author[0] : item.author;
            articleAuthor ||= author?.name || author?.["@id"] || (typeof author === "string" ? author : "");
            articlePublished ||= item.datePublished || "";
            articleModified ||= item.dateModified || "";
          }
        }
        if (item["@graph"]) visit(item["@graph"]);
      };
      visit(data);
    } catch { /* ignore invalid blocks but preserve absence in output */ }
  });
  $("script,style,noscript,svg").remove();
  const title = cleanText($("title").first().text());
  const description = cleanText($("meta[name='description']").attr("content") || "");
  const canonical = $("link[rel='canonical']").attr("href") || "";
  const h1 = cleanText($("h1").first().text());
  const headings = $("h1,h2,h3").map((_, el) => cleanText($(el).text())).get().filter(Boolean);
  const main = $("main").length ? $("main") : $("body");
  const body = cleanText(main.text());
  const links = $("a[href]").map((_, el) => {
    const href = $(el).attr("href") || "";
    const text = cleanText($(el).text() || $(el).attr("aria-label") || $(el).attr("title") || "");
    let absolute = "";
    try { absolute = new URL(href, url).href; } catch { /* ignore invalid URLs */ }
    return { text, href, absolute };
  }).get().filter((link) => link.absolute);
  const currentHost = new URL(url).hostname.replace(/^www\./, "");
  const internal = links.filter((link) => {
    const host = new URL(link.absolute).hostname.replace(/^www\./, "");
    return host === currentHost || host === "hulmsolutions.com" || host === STAGE_HOST;
  });
  const ctas = links.filter((link) => ctaPattern.test(`${link.text} ${link.href}`));
  return {
    title,
    description,
    canonical,
    h1,
    headings,
    body,
    links,
    internal,
    ctas,
    schema: unique(schema),
    robots: cleanText($("meta[name='robots']").attr("content") || ""),
    articleAuthor,
    articlePublished,
    articleModified,
  };
}

function coverage(source, target) {
  const sourceTerms = unique(meaningful(source));
  const targetTerms = new Set(meaningful(target));
  return { terms: sourceTerms, found: sourceTerms.filter((term) => targetTerms.has(term)), percent: pct(sourceTerms.filter((term) => targetTerms.has(term)).length, sourceTerms.length) };
}

async function mapLimit(items, limit, worker) {
  const result = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      result[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return result;
}

const prodUrls = await sitemapUrls();
await fs.mkdir(OUT, { recursive: true });
const stageSitemapFetch = await get(`${STAGE}/sitemap.xml`);
const stageSitemap$ = load(stageSitemapFetch.text, { xmlMode: true });
const stageUrls = unique(stageSitemap$("url > loc").map((_, el) => stageSitemap$(el).text().trim()).get()).sort();
const pages = await mapLimit(prodUrls, 6, async (prodUrl) => {
  const route = normPath(prodUrl);
  const stageUrl = `${STAGE}${route}`;
  const [prodFetch, stageFetch] = await Promise.all([get(prodUrl), get(stageUrl)]);
  const prod = extract(prodFetch.response.url, prodFetch.text);
  const stage = extract(stageFetch.response.url, stageFetch.text);
  const titleCoverage = coverage(prod.title, stage.title);
  const headingCoverage = coverage(prod.headings.join(" "), stage.headings.join(" "));
  const bodyCoverage = coverage(prod.body, stage.body);
  const prodInternal = unique(prod.internal.map((link) => normPath(link.absolute))).sort();
  const stageInternal = unique(stage.internal.map((link) => normPath(link.absolute))).sort();
  const prodCtas = unique(prod.ctas.map((link) => `${link.text} -> ${link.absolute}`));
  const stageCtas = unique(stage.ctas.map((link) => `${link.text} -> ${link.absolute}`));
  return {
    route,
    production_status: prodFetch.response.status,
    staging_status: stageFetch.response.status,
    staging_final_path: normPath(stageFetch.response.url),
    exact_route_retained: normPath(stageFetch.response.url) === route,
    production_title: prod.title,
    staging_title: stage.title,
    title_exact: prod.title === stage.title,
    title_term_coverage_pct: titleCoverage.percent,
    missing_title_terms: titleCoverage.terms.filter((term) => !titleCoverage.found.includes(term)),
    production_description: prod.description,
    staging_description: stage.description,
    description_exact: prod.description === stage.description,
    production_h1: prod.h1,
    staging_h1: stage.h1,
    h1_exact: prod.h1 === stage.h1,
    heading_term_coverage_pct: headingCoverage.percent,
    missing_heading_terms: headingCoverage.terms.filter((term) => !headingCoverage.found.includes(term)),
    production_words: words(prod.body).length,
    staging_words: words(stage.body).length,
    body_vocabulary_retention_pct: bodyCoverage.percent,
    production_canonical: prod.canonical,
    staging_canonical: stage.canonical,
    staging_canonical_path: stage.canonical ? normPath(stage.canonical) : "",
    canonical_matches_route: stage.canonical ? normPath(stage.canonical) === normPath(stageFetch.response.url) : false,
    production_schema: prod.schema,
    staging_schema: stage.schema,
    production_article_author: prod.articleAuthor,
    staging_article_author: stage.articleAuthor,
    production_date_published: prod.articlePublished,
    staging_date_published: stage.articlePublished,
    production_date_modified: prod.articleModified,
    staging_date_modified: stage.articleModified,
    production_ctas: prodCtas,
    staging_ctas: stageCtas,
    production_internal_links: prodInternal.length,
    staging_internal_links: stageInternal.length,
    production_internal_destinations: prodInternal,
    staging_internal_destinations: stageInternal,
    internal_destinations_retained_pct: pct(prodInternal.filter((item) => stageInternal.includes(item)).length, prodInternal.length),
    missing_production_internal_destinations: prodInternal.filter((item) => !stageInternal.includes(item)),
    new_staging_internal_destinations: stageInternal.filter((item) => !prodInternal.includes(item)),
    production_robots: prod.robots,
    staging_robots: stage.robots,
  };
});

const allStagePages = await mapLimit(stageUrls, 6, async (stageUrl) => {
  const result = await get(`${STAGE}${normPath(stageUrl)}`);
  const data = extract(result.response.url, result.text);
  return { route: normPath(result.response.url), links: data.internal.map((link) => link.absolute) };
});
const internalUrls = unique(allStagePages.flatMap((page) => page.links)).filter((url) => {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return host === "hulmsolutions.com" || host === STAGE_HOST;
});

const canonicalRoutes = unique(pages.map((page) => page.staging_final_path));
const allStageRoutes = unique(allStagePages.map((page) => page.route));
const graph = new Map(allStagePages.map((page) => [page.route, unique(page.links.map(normPath)).filter((route) => allStageRoutes.includes(route))]));
const inDegree = new Map(canonicalRoutes.map((route) => [route, 0]));
for (const destinations of graph.values()) {
  for (const destination of unique(destinations)) inDegree.set(destination, (inDegree.get(destination) || 0) + 1);
}
const depths = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const current = queue.shift();
  for (const destination of graph.get(current) || []) {
    if (!depths.has(destination)) {
      depths.set(destination, depths.get(current) + 1);
      queue.push(destination);
    }
  }
}
const linkChecks = await mapLimit(internalUrls, 8, async (prodDomainUrl) => {
  const route = normPath(prodDomainUrl);
  const linkedUrl = new URL(prodDomainUrl);
  const linkedPath = `${linkedUrl.pathname}${linkedUrl.search}`;
  const sourceRoutes = allStagePages.filter((page) => page.links.some((link) => normPath(link) === route)).map((page) => page.route);
  try {
    const direct = await fetch(`${STAGE}${linkedPath}`, { redirect: "manual", headers: { "user-agent": UA } });
    const followed = await fetch(`${STAGE}${linkedPath}`, { redirect: "follow", headers: { "user-agent": UA } });
    return {
      linked_route: route,
      linked_path: linkedPath,
      source_routes: sourceRoutes,
      direct_status: direct.status,
      redirect_location: direct.headers.get("location") || "",
      final_status: followed.status,
      final_path: normPath(followed.url),
      direct_to_canonical: direct.status === 200 && normPath(followed.url) === route,
    };
  } catch (error) {
    return { linked_route: route, source_routes: sourceRoutes, direct_status: "ERROR", redirect_location: "", final_status: "ERROR", final_path: "", direct_to_canonical: false, error: error.message };
  }
});

const summary = {
  generated_at: new Date().toISOString(),
  production: PROD,
  staging: STAGE,
  production_sitemap_pages: pages.length,
  staging_sitemap_pages: stageUrls.length,
  staging_final_200: pages.filter((p) => p.staging_status === 200).length,
  exact_routes_retained: pages.filter((p) => p.exact_route_retained).length,
  redirects_to_different_route: pages.filter((p) => !p.exact_route_retained).map((p) => ({ route: p.route, final: p.staging_final_path })),
  canonical_matches_final_route: pages.filter((p) => p.canonical_matches_route).length,
  exact_titles: pages.filter((p) => p.title_exact).length,
  exact_h1s: pages.filter((p) => p.h1_exact).length,
  exact_descriptions: pages.filter((p) => p.description_exact).length,
  pages_below_80_title_term_coverage: pages.filter((p) => p.title_term_coverage_pct < 80).map((p) => p.route),
  pages_below_70_heading_term_coverage: pages.filter((p) => p.heading_term_coverage_pct < 70).map((p) => p.route),
  pages_below_70_body_vocabulary_retention: pages.filter((p) => p.body_vocabulary_retention_pct < 70).map((p) => p.route),
  pages_with_fewer_words: pages.filter((p) => p.staging_words < p.production_words).map((p) => ({ route: p.route, production: p.production_words, staging: p.staging_words })),
  internal_link_routes_checked: linkChecks.length,
  internal_link_final_failures: linkChecks.filter((link) => link.final_status !== 200),
  internal_links_not_direct_to_canonical: linkChecks.filter((link) => !link.direct_to_canonical),
  canonical_routes_with_no_internal_inlinks: canonicalRoutes.filter((route) => route !== "/" && !(inDegree.get(route) || 0)),
  canonical_routes_unreachable_from_home: canonicalRoutes.filter((route) => !depths.has(route)),
  canonical_routes_deeper_than_three_clicks: canonicalRoutes.filter((route) => (depths.get(route) ?? 99) > 3),
  click_depth_by_route: Object.fromEntries(canonicalRoutes.map((route) => [route, depths.get(route) ?? null])),
};

const riskRows = pages.map((page) => {
  const wordRatio = pct(page.staging_words, page.production_words);
  const reasons = [];
  if (!page.exact_route_retained) reasons.push(`redirects to ${page.staging_final_path}`);
  if (page.title_term_coverage_pct < 80) reasons.push(`title term coverage ${page.title_term_coverage_pct}%`);
  if (!page.h1_exact) reasons.push("H1 changed");
  if (page.body_vocabulary_retention_pct < 70) reasons.push(`body vocabulary retention ${page.body_vocabulary_retention_pct}%`);
  if (wordRatio < 70) reasons.push(`word-count ratio ${wordRatio}%`);
  if (/Hulm Solutions.*Hulm Solutions/i.test(page.staging_title)) reasons.push("duplicate brand suffix in title");
  if (page.production_article_author && page.production_article_author !== page.staging_article_author) reasons.push("article author changed");
  if (page.production_date_modified && page.production_date_modified !== page.staging_date_modified) reasons.push("article modified date changed");
  if ((inDegree.get(page.staging_final_path) || 0) === 0 && page.staging_final_path !== "/") reasons.push("no internal inlinks from staging sitemap pages");
  if (page.production_schema.join("|") !== page.staging_schema.join("|")) reasons.push("schema type set changed");
  let risk = "LOW";
  if (
    page.route === "/" ||
    page.route === "/author" ||
    page.body_vocabulary_retention_pct < 35 ||
    wordRatio < 50 ||
    page.title_term_coverage_pct < 40 ||
    ((inDegree.get(page.staging_final_path) || 0) === 0 && page.staging_final_path !== "/")
  ) risk = "HIGH";
  else if (reasons.length) risk = "MEDIUM";
  return {
    route: page.route,
    risk,
    reasons,
    final_staging_path: page.staging_final_path,
    staging_status: page.staging_status,
    canonical_matches: page.canonical_matches_route,
    production_title: page.production_title,
    staging_title: page.staging_title,
    title_term_coverage_pct: page.title_term_coverage_pct,
    production_h1: page.production_h1,
    staging_h1: page.staging_h1,
    h1_exact: page.h1_exact,
    body_vocabulary_retention_pct: page.body_vocabulary_retention_pct,
    production_words: page.production_words,
    staging_words: page.staging_words,
    word_count_ratio_pct: wordRatio,
    production_cta_count: page.production_ctas.length,
    staging_cta_count: page.staging_ctas.length,
    staging_internal_inlinks: inDegree.get(page.staging_final_path) || 0,
    click_depth_from_home: depths.get(page.staging_final_path) ?? "unreachable",
    missing_title_terms: page.missing_title_terms,
    missing_heading_terms: page.missing_heading_terms,
    production_article_author: page.production_article_author,
    staging_article_author: page.staging_article_author,
    production_date_modified: page.production_date_modified,
    staging_date_modified: page.staging_date_modified,
  };
});

summary.risk_counts = Object.fromEntries(["HIGH", "MEDIUM", "LOW"].map((risk) => [risk, riskRows.filter((row) => row.risk === risk).length]));

await Promise.all([
  fs.writeFile(path.join(OUT, "page-comparison.csv"), toCsv(pages), "utf8"),
  fs.writeFile(path.join(OUT, "internal-link-checks.csv"), toCsv(linkChecks), "utf8"),
  fs.writeFile(path.join(OUT, "audit-summary.json"), JSON.stringify(summary, null, 2), "utf8"),
  fs.writeFile(path.join(OUT, "page-comparison.json"), JSON.stringify(pages, null, 2), "utf8"),
  fs.writeFile(path.join(OUT, "page-risk-register.csv"), toCsv(riskRows), "utf8"),
]);

console.log(JSON.stringify(summary, null, 2));
