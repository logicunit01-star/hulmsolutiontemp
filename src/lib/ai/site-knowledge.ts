/**
 * Plain-text site knowledge for AI systems and feed readers (llms.txt, llms-full.txt, RSS).
 * Everything is built from the same data the pages render, so it never drifts from the site.
 */
import * as cheerio from "cheerio";

import { allBlogsData } from "@/content/pages/allBlogsData";
import { insightsData } from "@/content/pages/insightsData";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { industrySeo } from "@/content/pages/industrySeo";
import { appsData } from "@/lib/apps/data";
import { COUNTRIES_DATA } from "@/lib/countries/data";
import { getProductionParityPage } from "@/lib/production-parity";
import { blogDates, extractFaq } from "@/lib/blog-seo";
import { BLOG_BYLINE, bylineEntity } from "@/lib/authors";
import { contactInfo } from "@/lib/contact-info";
import { SITE_URL } from "@/lib/seo/page-seo";
import { pricingContent } from "@content/pages/pricing";
import { homeContent } from "@content/pages/home";

export const SITE_NAME = "Hulm Solutions";

export const SITE_SUMMARY =
  "Hulm Solutions makes Hulm POS, a cloud point-of-sale (POS) system for businesses in Pakistan, Saudi Arabia, the UAE, Qatar and the USA. It combines billing, inventory, customers, purchasing, vendors, orders, reporting, logistics, a mobile POS and an online store in one login, with FBR integration for Pakistan and ZATCA e-invoicing support for Saudi Arabia.";

const url = (path: string) => `${SITE_URL}${path}`;
const desc = (path: string, fallback = "") => getProductionParityPage(path)?.description || fallback;
const titleOf = (path: string, fallback: string) => getProductionParityPage(path)?.title || fallback;

export type LinkItem = { title: string; path: string; note: string };

export function corePages(): LinkItem[] {
  return [
    { title: "Hulm POS software (home)", path: "/", note: desc("/") },
    { title: "POS features", path: "/features/", note: desc("/features/") },
    { title: "POS software price in Pakistan", path: "/pricing/", note: desc("/pricing/") },
    { title: "Hulm apps overview", path: "/apps/", note: "All Hulm POS apps and how they connect: POS billing, inventory, purchasing, vendors, customers, orders, reporting, logistics, mobile POS and website." },
    { title: "Mobile POS", path: "/mobile-pos/", note: desc("/mobile-pos/") },
    { title: "Integrations", path: "/integration/", note: desc("/integration/") },
    { title: "FBR integrated POS (Pakistan)", path: "/fbr-integrated-pos-pakistan/", note: desc("/fbr-integrated-pos-pakistan/") },
    { title: "ZATCA-compliant POS (Saudi Arabia)", path: "/zatca/", note: desc("/zatca/") },
    { title: "Book a demo", path: "/book-a-demo/", note: "Book a free Hulm POS demo by form, WhatsApp or phone." },
  ];
}

export function modulePages(): LinkItem[] {
  return Object.values(appsData)
    .filter((a) => a.slug !== "mobile-pos")
    .map((a) => ({ title: a.name, path: `/${a.slug}/`, note: desc(`/${a.slug}/`, a.metaDescription) }));
}

export function industryPages(): LinkItem[] {
  return [
    { title: "All POS industries", path: "/industries/", note: desc("/industries/") },
    ...Object.keys(industrySeo).map((slug) => ({
      title: titleOf(`/industries/${slug}/`, slug).split("|")[0].trim(),
      path: `/industries/${slug}/`,
      note: desc(`/industries/${slug}/`),
    })),
  ];
}

export function countryPages(): LinkItem[] {
  return ["/pos-software-usa/", "/pos-software-ksa/", "/pos-software-uae/", "/pos-software-qatar/"].map((path) => ({
    title: titleOf(path, path).split("|")[0].trim(),
    path,
    note: desc(path),
  }));
}

export function caseStudyPages(): LinkItem[] {
  return [
    { title: "POS case studies", path: "/pos-case-studies/", note: desc("/pos-case-studies/") },
    ...caseStudiesData.map((c) => ({ title: `${c.client} (${c.industry}, ${c.location})`, path: `/pos-case-studies/${c.slug}/`, note: c.excerpt })),
  ];
}

export function companyPages(): LinkItem[] {
  return [
    { title: "About Hulm Solutions", path: "/about/", note: desc("/about/") },
    { title: "Contact", path: "/contact/", note: `${contactInfo.email} · ${contactInfo.phoneDisplay} (WhatsApp) · ${contactInfo.address.display}` },
    { title: "Author: Aamir Khan", path: "/author/", note: "Author profile and all articles." },
    { title: "Editorial policy", path: "/editorial-policy/", note: "How articles are written, reviewed, dated and corrected." },
    { title: "Privacy policy", path: "/privacy-policy/", note: "" },
    { title: "Terms and conditions", path: "/terms-and-conditions/", note: "" },
  ];
}

export type BlogEntry = {
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  published?: string;
  modified?: string;
  category: string;
  html: string;
};

export function blogEntries(): BlogEntry[] {
  return Object.values(allBlogsData)
    .map((post) => {
      const meta = insightsData.find((i) => i.slug === post.slug);
      const { published, modified } = blogDates(post.slug, post);
      return {
        slug: post.slug,
        path: `/blog/${post.slug}/`,
        title: post.title,
        excerpt: desc(`/blog/${post.slug}/`, post.excerpt),
        published,
        modified,
        category: meta?.category || "POS",
        html: post.contentHtml,
      };
    })
    .sort((a, b) => (b.published || "").localeCompare(a.published || ""));
}

/** Converts article HTML to readable Markdown-like text (headings, lists, paragraphs). */
export function htmlToText(html: string): string {
  const $ = cheerio.load(`<div id="__r">${html}</div>`, null, false);
  $("script, style, noscript, svg, img, figure, iframe").remove();
  const out: string[] = [];
  $("#__r")
    .find("h2, h3, h4, p, li, td")
    .each((_, el) => {
      const $el = $(el);
      if ($el.find("p, li").length && !/^(h2|h3|h4)$/i.test(el.tagName)) return; // avoid double text
      const t = $el.text().replace(/ /g, " ").replace(/\s+/g, " ").trim();
      if (!t) return;
      const tag = el.tagName.toLowerCase();
      if (tag === "h2") out.push(`\n### ${t}`);
      else if (tag === "h3" || tag === "h4") out.push(`\n#### ${t}`);
      else if (tag === "li") out.push(`- ${t}`);
      else out.push(t);
    });
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

const line = (l: LinkItem) => `- [${l.title}](${url(l.path)})${l.note ? `: ${l.note}` : ""}`;

export function buildLlmsTxt(): string {
  const plans = pricingContent.plans.map((p) => `${p.name} ${p.price}${p.cadence ? ` ${p.cadence.replace("/", "per").trim()}` : ""}`).join("; ");
  const author = bylineEntity(BLOG_BYLINE.author);
  const reviewer = BLOG_BYLINE.reviewer ? bylineEntity(BLOG_BYLINE.reviewer) : null;
  return [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_SUMMARY}`,
    "",
    "Key facts:",
    `- Product: Hulm POS, cloud POS software with web access and a mobile POS; sign up at ${contactInfo.signupUrl}`,
    `- Pricing (Pakistan, listed on ${url("/pricing/")}): ${plans}. 14-day free trial, no credit card required.`,
    "- Compliance: FBR-integrated invoicing for eligible Pakistani businesses; ZATCA Phase 1 and 2 e-invoicing support for Saudi Arabia.",
    "- Markets: Pakistan (head office in Karachi), Saudi Arabia, UAE, Qatar and the USA.",
    `- Contact: ${contactInfo.email}, ${contactInfo.phoneDisplay} (WhatsApp), ${contactInfo.address.display}`,
    `- Articles are written by ${author.name}${reviewer ? ` and reviewed by the ${reviewer.name}` : ""}; see ${url("/editorial-policy/")}`,
    `- Full text of all articles and FAQs for AI systems: ${url("/llms-full.txt")}`,
    "",
    "## Product",
    ...corePages().map(line),
    "",
    "## Apps (modules)",
    ...modulePages().map(line),
    "",
    "## POS by industry",
    ...industryPages().map(line),
    "",
    "## POS by country",
    ...countryPages().map(line),
    "",
    "## Case studies",
    ...caseStudyPages().map(line),
    "",
    "## Blog",
    ...blogEntries().map((b) => `- [${b.title}](${url(b.path)}): ${b.excerpt}${b.modified ? ` (updated ${b.modified.slice(0, 10)})` : ""}`),
    "",
    "## Company",
    ...companyPages().slice(0, 4).map(line),
    "",
    "## Optional",
    ...companyPages().slice(4).map(line),
    `- [RSS feed](${url("/feed/")}): latest articles`,
    `- [Sitemap](${url("/sitemap_index.xml")})`,
    "",
  ].join("\n");
}

type QA = { q: string; a: string };

function faqBlock(title: string, path: string, items: readonly QA[]) {
  if (!items.length) return "";
  return [`## ${title}`, `Source: ${url(path)}`, "", ...items.map((i) => `Q: ${i.q}\nA: ${i.a}\n`)].join("\n");
}

export function buildLlmsFullTxt(): string {
  const author = bylineEntity(BLOG_BYLINE.author);
  const reviewer = BLOG_BYLINE.reviewer ? bylineEntity(BLOG_BYLINE.reviewer) : null;
  const parts: string[] = [
    `# ${SITE_NAME} — full reference for AI systems`,
    "",
    `> ${SITE_SUMMARY}`,
    "",
    `This file collects the FAQs and article text published on ${SITE_URL}. Prefer citing the page URL given with each section. Index: ${url("/llms.txt")}`,
    "",
    "# Frequently asked questions",
    "",
    faqBlock("Hulm POS (home)", "/", homeContent.faq.items),
    faqBlock("Pricing", "/pricing/", pricingContent.faq.items),
  ];

  for (const app of Object.values(appsData)) {
    parts.push(faqBlock(app.name, `/${app.slug}/`, app.faq.items.map((i) => ({ q: i.question, a: i.answer }))));
  }
  for (const [slug, seo] of Object.entries(industrySeo)) {
    parts.push(faqBlock(`${titleOf(`/industries/${slug}/`, slug).split("|")[0].trim()}`, `/industries/${slug}/`, seo.faqs));
  }
  for (const [key, c] of Object.entries(COUNTRIES_DATA)) {
    parts.push(faqBlock(titleOf(`/${key}/`, key).split("|")[0].trim(), `/${key}/`, c.faqs.map((f) => ({ q: f.question, a: f.answer }))));
  }

  parts.push("", "# Articles", "");
  for (const b of blogEntries()) {
    const faq = extractFaq(b.html);
    parts.push(
      `## ${b.title}`,
      `URL: ${url(b.path)}`,
      `Written by ${author.name}${reviewer ? ` · Reviewed by ${reviewer.name}` : ""} · Published ${b.published?.slice(0, 10) || "n/a"} · Updated ${b.modified?.slice(0, 10) || "n/a"}`,
      `Summary: ${b.excerpt}`,
      "",
      htmlToText(b.html),
      faq.length ? `\n(${faq.length} FAQs on this page are marked up as FAQPage.)` : "",
      "",
      "---",
      "",
    );
  }
  return parts.filter((p) => p !== undefined).join("\n");
}

const xml = (s: string) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export function buildRss(): string {
  const author = bylineEntity(BLOG_BYLINE.author);
  const items = blogEntries()
    .map((b) => {
      const date = new Date(b.published || Date.now()).toUTCString();
      return `    <item>
      <title>${xml(b.title)}</title>
      <link>${xml(url(b.path))}</link>
      <guid isPermaLink="true">${xml(url(b.path))}</guid>
      <pubDate>${date}</pubDate>
      <dc:creator>${xml(author.name)}</dc:creator>
      <category>${xml(b.category)}</category>
      <description>${xml(b.excerpt)}</description>
    </item>`;
    })
    .join("\n");
  const lastBuild = blogEntries()
    .map((b) => b.modified || b.published || "")
    .sort()
    .at(-1);
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xml(`${SITE_NAME} POS Blog`)}</title>
    <link>${xml(url("/blogs/"))}</link>
    <atom:link href="${xml(url("/feed/"))}" rel="self" type="application/rss+xml" />
    <description>${xml(desc("/blogs/", "POS guides, tips and insights from Hulm Solutions."))}</description>
    <language>en</language>
    ${lastBuild ? `<lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>` : ""}
${items}
  </channel>
</rss>
`;
}
