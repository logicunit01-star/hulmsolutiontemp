#!/usr/bin/env node
// Generic per-page SEO parity check against the live WordPress snapshot.
// Usage (server running via `next start -p 3100`):
//   BASE_URL=http://localhost:3100 node scripts/seo-page-check.mjs pricing
// Config: scripts/seo-page-configs/<name>.json
//   { path, h1, minWords, maxWords, requiredH2[], keywords{term:min}, maxKeyword{term:max},
//     requiredLinks[], schemaTypes[] }
import fs from "node:fs";
import * as cheerio from "cheerio";

const name = process.argv[2];
if (!name) {
  console.error("Usage: node scripts/seo-page-check.mjs <config-name>");
  process.exit(2);
}
const cfg = JSON.parse(fs.readFileSync(new URL(`./seo-page-configs/${name}.json`, import.meta.url)));
const BASE = process.env.BASE_URL || "http://localhost:3100";
const pages = JSON.parse(fs.readFileSync(new URL("../src/content/productionParityData.json", import.meta.url))).pages;
const live = pages[cfg.path];
if (!live) throw new Error(`No live snapshot for ${cfg.path}`);

const res = await fetch(`${BASE}${cfg.path}`, { redirect: "manual" });
const html = await res.text();
const $ = cheerio.load(html);
const results = [];
const check = (label, ok, detail = "") => results.push({ label, ok, detail });
const norm = (s) => (s || "").replace(/\s+/g, " ").trim();

check("status 200", res.status === 200, String(res.status));
check("title = live", norm($("title").text()) === norm(live.title), $("title").text());
check("meta description = live", norm($('meta[name="description"]').attr("content")) === norm(live.description));
check("canonical self", $('link[rel="canonical"]').attr("href") === `https://hulmsolutions.com${cfg.path}`, $('link[rel="canonical"]').attr("href"));
check("og:image absolute", /^https:\/\//.test($('meta[property="og:image"]').attr("content") || ""));
check("single <main>", $("main").length === 1, `found ${$("main").length}`);

const main = $("main").first().clone();
main.find("script,style,noscript,svg").remove();
const h1 = main.find("h1");
check(`one H1 = "${cfg.h1}"`, h1.length === 1 && norm(h1.text()).toLowerCase() === cfg.h1.toLowerCase(), norm(h1.text()));

const text = norm(main.text()).toLowerCase().replace(/’/g, "'");
const words = text.split(" ").length;
check(`words ${cfg.minWords}–${cfg.maxWords}`, words >= cfg.minWords && words <= cfg.maxWords, `${words}`);

const h2s = main.find("h2").map((_, el) => norm($(el).text()).toLowerCase()).get();
for (const h of cfg.requiredH2 || []) check(`H2: ${h}`, h2s.includes(h.toLowerCase()));

const count = (k) => text.split(k.toLowerCase()).length - 1;
for (const [k, min] of Object.entries(cfg.keywords || {})) check(`"${k}" ≥ ${min}`, count(k) >= min, `${count(k)}`);
for (const [k, max] of Object.entries(cfg.maxKeyword || {})) check(`"${k}" ≤ ${max} (no stuffing)`, count(k) <= max, `${count(k)}`);

const hrefs = new Set(main.find("a[href]").map((_, el) => $(el).attr("href")).get());
for (const l of cfg.requiredLinks || []) check(`link ${l}`, hrefs.has(l));
const noSlash = $("a[href]")
  .map((_, el) => $(el).attr("href"))
  .get()
  .filter((h) => h.startsWith("/") && !h.startsWith("//") && !/[#?]/.test(h) && !/\.[a-z0-9]{2,5}$/i.test(h) && !h.endsWith("/"));
check("internal hrefs end with /", noSlash.length === 0, noSlash.join(", "));

const nodes = [];
$('script[type="application/ld+json"]').each((_, el) => {
  const data = JSON.parse($(el).html());
  const walk = (x) => {
    if (Array.isArray(x)) return x.forEach(walk);
    if (x && typeof x === "object") {
      if (x["@type"]) nodes.push(x);
      Object.values(x).forEach(walk);
    }
  };
  walk(data);
});
const types = new Set(nodes.flatMap((n) => [].concat(n["@type"])));
for (const t of cfg.schemaTypes || []) check(`schema ${t}`, types.has(t));
const faqNode = nodes.find((n) => n["@type"] === "FAQPage");
const visibleFaq = main.find("details").length;
if (faqNode || visibleFaq) {
  check("FAQ schema = visible FAQs", faqNode && faqNode.mainEntity.length === visibleFaq, `schema ${faqNode?.mainEntity?.length} / visible ${visibleFaq}`);
}
check("every <img> has alt", main.find("img").filter((_, el) => $(el).attr("alt") === undefined).length === 0);

const failed = results.filter((r) => !r.ok);
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.label}${r.detail ? `  (${r.detail})` : ""}`);
console.log(`\n${cfg.path}: ${results.length - failed.length}/${results.length} checks passed. Words: ${words}.`);
process.exit(failed.length ? 1 : 0);
