import fs from "node:fs/promises";
import { load } from "cheerio";

const PROD = "https://hulmsolutions.com";
const OUTPUT = new URL("../src/content/productionParityData.json", import.meta.url);
const USER_AGENT = "Mozilla/5.0 (compatible; HulmMigrationSnapshot/1.0)";

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: { "user-agent": USER_AGENT, accept: "text/html,application/xml" },
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return { finalUrl: response.url, text: await response.text() };
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }
  throw lastError;
}

function normalizedPath(value) {
  const pathname = new URL(value, PROD).pathname.replace(/\/{2,}/g, "/");
  return pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
}

async function productionUrls() {
  const index = await fetchText(`${PROD}/sitemap_index.xml`);
  const index$ = load(index.text, { xmlMode: true });
  const children = index$("sitemap > loc").map((_, element) => index$(element).text().trim()).get();
  const urls = [];
  for (const child of children) {
    const sitemap = await fetchText(child);
    const sitemap$ = load(sitemap.text, { xmlMode: true });
    urls.push(...sitemap$("url > loc").map((_, element) => sitemap$(element).text().trim()).get());
  }
  return [...new Set(urls)].sort();
}

function rewriteInternalUrl(value) {
  if (!value) return value;
  try {
    const url = new URL(value, PROD);
    if (url.hostname.replace(/^www\./, "") !== "hulmsolutions.com") return value;
    let cleanPath = url.pathname.replace(/(?:%20|\s)+\/?$/gi, "/").replace(/\/{2,}/g, "/");
    if (cleanPath !== "/" && !cleanPath.endsWith("/") && !cleanPath.split("/").at(-1)?.includes(".")) cleanPath += "/";
    const canonicalAliases = new Map([
      ["/industries/bakery/", "/industries/bakery-pos-system/"],
      ["/industries/salon-spa/", "/industries/salon-pos/"],
      ["/industries/restaurant/", "/industries/restaurant-pos/"],
      ["/author/aamir-khan/", "/author/"],
      ["/author/hulm-editorial-team/", "/author/"],
      ["/author/hulm-team/", "/author/"],
      ["/author/hulm-solutions-editorial-team/", "/author/"],
      ["/pos-case-studies/laptop-store-pos-system-karachi/", "/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store/"],
    ]);
    return `${canonicalAliases.get(cleanPath) || cleanPath}${url.search}${url.hash}`;
  } catch {
    return value;
  }
}

function extractPage(sourceUrl, finalUrl, html) {
  const $ = load(html, { decodeEntities: false });
  const main = $("main, #content, .site-content, article").first();
  if (!main.length) throw new Error(`No content root found for ${sourceUrl}`);

  main.find("script,noscript,template").remove();
  main.find("*").each((_, element) => {
    const node = $(element);
    for (const attribute of Object.keys(element.attribs || {})) {
      if (/^on/i.test(attribute)) node.removeAttr(attribute);
    }
  });
  main.find("a[href]").each((_, element) => {
    const node = $(element);
    node.attr("href", rewriteInternalUrl(node.attr("href")));
  });
  if (normalizedPath(sourceUrl) === "/") {
    main.find("a").each((_, element) => {
      const node = $(element);
      const label = node.text().replace(/\s+/g, " ").trim();
      if (label.includes("Start 14 Days Free Trail")) {
        node.attr("href", "https://app.hulmsolutions.com/Register");
      }
      if (label.includes("Watch Demo Video")) {
        node.attr("href", "https://www.youtube.com/watch?v=Fd6X_TPX9EA");
      }
    });
    main.find(":contains('Start 14 Days Free Trail')").contents().each((_, node) => {
      if (node.type === "text" && node.data?.includes("Start 14 Days Free Trail")) {
        node.data = node.data.replaceAll("Start 14 Days Free Trail", "Start 14 Days Free Trial");
      }
    });
  }
  main.find("form[action]").each((_, element) => {
    const node = $(element);
    node.attr("action", rewriteInternalUrl(node.attr("action")));
  });
  main.find("form").each((_, element) => {
    const node = $(element);
    const formId = node.attr("data-form_id") || node.attr("id") || "lead";
    const formName = `hulm-${String(formId).replace(/[^a-z0-9_-]+/gi, "-").toLowerCase()}`;
    node.attr("name", formName);
    node.attr("method", "POST");
    node.attr("action", "/thank-you/");
    node.attr("data-netlify", "true");
    node.attr("netlify-honeypot", "bot-field");
    node.prepend(`<input type="hidden" name="form-name" value="${formName}"><p hidden><label>Do not fill this out: <input name="bot-field"></label></p>`);
  });

  const schemas = $("script[type='application/ld+json']")
    .map((_, element) => $(element).html()?.trim() || "")
    .get()
    .filter(Boolean);

  const stylesheets = $("link[rel~='stylesheet'][href]")
    .map((_, element) => rewriteInternalUrl($(element).attr("href")))
    .get()
    .filter(Boolean);

  return {
    path: normalizedPath(sourceUrl),
    sourceUrl,
    finalUrl,
    title: $("title").first().text().replace(/\s+/g, " ").trim(),
    description: ($("meta[name='description']").attr("content") || "").replace(/\s+/g, " ").trim(),
    robots: ($("meta[name='robots']").attr("content") || "").trim(),
    canonical: $("link[rel='canonical']").attr("href") || sourceUrl,
    openGraphTitle: $("meta[property='og:title']").attr("content") || "",
    openGraphDescription: $("meta[property='og:description']").attr("content") || "",
    openGraphImage: $("meta[property='og:image']").attr("content") || "",
    publishedTime: $("meta[property='article:published_time']").attr("content") || "",
    modifiedTime: $("meta[property='article:modified_time']").attr("content") || "",
    bodyClass: $("body").attr("class") || "",
    stylesheets: [...new Set(stylesheets)],
    mainHtml: (main.html() || "").trim(),
    schemas,
  };
}

const urls = await productionUrls();
const pages = {};

for (let index = 0; index < urls.length; index += 1) {
  const sourceUrl = urls[index];
  const response = await fetchText(sourceUrl);
  const page = extractPage(sourceUrl, response.finalUrl, response.text);
  pages[page.path] = page;
  console.log(`[${index + 1}/${urls.length}] ${page.path}`);
}

const snapshot = {
  source: PROD,
  capturedAt: new Date().toISOString(),
  pageCount: Object.keys(pages).length,
  pages,
};

await fs.writeFile(OUTPUT, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
console.log(`Saved ${snapshot.pageCount} pages to ${OUTPUT.pathname}`);
