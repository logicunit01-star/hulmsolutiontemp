#!/usr/bin/env node
// Sitewide SEO overlay scan (non-blog pages). Server must be running.
//   BASE_URL=http://localhost:3100 node scripts/seo-site-scan.mjs [--all] [path...]
// Reports, per live URL: status, title/description = live, canonical, og:image, H1, word count
// (local vs live), FAQ answers in HTML vs FAQPage schema, schema types, internal hrefs without
// a trailing slash and images without alt. Blog and insights URLs are skipped (kept as-is).
import fs from "node:fs";
import * as cheerio from "cheerio";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const pages = JSON.parse(fs.readFileSync(new URL("../src/content/productionParityData.json", import.meta.url))).pages;
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const norm = (s) => (s || "").replace(/\s+/g, " ").trim();
const paths = (args.length ? args : Object.keys(pages)).filter((p) => !/^\/(blog|blogs|insights)\//.test(p));
let bad = 0;
for (const path of paths) {
  const live = pages[path];
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = await res.text();
  const $ = cheerio.load(html);
  const main = $("main").first().clone();
  main.find("script,style,noscript,svg").remove();
  const words = norm(main.text()).split(" ").length;
  const nodes = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const walk = (x) => {
      if (Array.isArray(x)) return x.forEach(walk);
      if (x && typeof x === "object") { if (x["@type"]) nodes.push(x); Object.values(x).forEach(walk); }
    };
    try { walk(JSON.parse($(el).html())); } catch {}
  });
  const types = [...new Set(nodes.flatMap((n) => [].concat(n["@type"])))].filter((t) => !["ListItem", "Question", "Answer", "ImageObject", "Offer", "PostalAddress", "ContactPoint"].includes(t));
  const faq = nodes.find((n) => n["@type"] === "FAQPage");
  const noSlash = [...new Set($("a[href]").map((_, el) => $(el).attr("href")).get()
    .filter((h) => h.startsWith("/") && !h.startsWith("//") && !/[#?]/.test(h) && !/\.[a-z0-9]{2,5}$/i.test(h) && !h.endsWith("/")))];
  const issues = [];
  if (res.status !== 200) issues.push(`status ${res.status}`);
  if (norm($("title").text()) !== norm(live.title)) issues.push(`title≠live ("${norm($("title").text())}")`);
  if (norm($('meta[name="description"]').attr("content")) !== norm(live.description)) issues.push("desc≠live");
  if ($('link[rel="canonical"]').attr("href") !== `https://hulmsolutions.com${path}`) issues.push(`canonical ${$('link[rel="canonical"]').attr("href")}`);
  if (!/^https:\/\//.test($('meta[property="og:image"]').attr("content") || "")) issues.push("no og:image");
  if ($("main").length !== 1) issues.push(`${$("main").length} <main>`);
  if (main.find("h1").length !== 1) issues.push(`${main.find("h1").length} H1`);
  const vis = main.find("details").length;
  const liveFaq = /frequently asked questions/i.test(live.mainHtml);
  if (!faq && (vis || liveFaq)) issues.push("no FAQPage");
  else if (faq && faq.mainEntity.length !== vis) issues.push(`FAQ schema ${faq.mainEntity.length}/html ${vis}`);
  if (!types.includes("BreadcrumbList")) issues.push("no BreadcrumbList");
  if (noSlash.length) issues.push(`noSlash: ${noSlash.slice(0, 6).join(" ")}${noSlash.length > 6 ? "…" : ""}`);
  const noAlt = main.find("img").filter((_, el) => !$(el).attr("alt")).length;
  if (noAlt) issues.push(`${noAlt} img no alt`);
  if (issues.length) bad++;
  console.log(`${issues.length ? "✗" : "✓"} ${path}  words ${words}/${norm(cheerio.load(live.mainHtml).text()).split(" ").length}  H1 "${norm(main.find("h1").first().text()).slice(0, 70)}"  [${types.join(",")}]`);
  if (issues.length) console.log("    " + issues.join(" | "));
}
console.log(`\n${paths.length - bad}/${paths.length} pages clean`);
if (process.argv.includes("--strict") && bad) process.exit(1);
