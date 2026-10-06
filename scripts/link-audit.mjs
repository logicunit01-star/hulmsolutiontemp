#!/usr/bin/env node
// Internal-link audit. Server must be running.
//   BASE_URL=http://localhost:3100 node scripts/link-audit.mjs [--json out.json]
// Crawls every live URL (+ new pages), then reports: broken/redirecting internal links,
// body in-link counts (header/footer excluded), orphans, generic anchor text, and pages
// missing from the header/footer.
import fs from "node:fs";
import * as cheerio from "cheerio";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const SITE = "https://hulmsolutions.com";
const pages = JSON.parse(fs.readFileSync(new URL("../src/content/productionParityData.json", import.meta.url))).pages;
const extra = ["/book-a-demo/", "/apps/", "/editorial-policy/", "/pos-hardware/", "/pos-software-karachi/", "/pos-software-lahore/", "/pos-software-islamabad/", "/cookie-policy/"];
const seeds = [...new Set([...Object.keys(pages), ...extra])];
const norm = (href) => {
  if (!href) return null;
  let h = href.trim();
  if (h.startsWith(SITE)) h = h.slice(SITE.length) || "/";
  if (!h.startsWith("/") || h.startsWith("//")) return null;
  h = h.split("#")[0].split("?")[0];
  if (!h) return null;
  if (/\.[a-z0-9]{2,5}$/i.test(h)) return null;
  return h.endsWith("/") ? h : h + "/";
};
const GENERIC = /^(learn more|read more|click here|here|more|details|view|see more|explore)$/i;

const status = new Map();
const bodyIn = new Map();
const navTargets = new Set();
const generic = [];
const rawNoSlash = [];
const absInternal = new Map();
const outCount = new Map();

async function check(url) {
  if (status.has(url)) return status.get(url);
  const r = await fetch(BASE + url, { redirect: "manual" });
  const s = { code: r.status, location: r.headers.get("location") };
  status.set(url, s);
  return s;
}

for (const page of seeds) {
  const r = await fetch(BASE + page, { redirect: "manual" });
  if (r.status !== 200) { status.set(page, { code: r.status }); continue; }
  const $ = cheerio.load(await r.text());
  $("header a[href], footer a[href]").each((_, el) => { const u = norm($(el).attr("href")); if (u) navTargets.add(u); });
  const body = $("main").first();
  const seen = new Set();
  body.find("a[href]").each((_, el) => {
    const raw = $(el).attr("href");
    const u = norm(raw);
    if (!u) return;
    if (raw.startsWith(SITE)) absInternal.set(page, (absInternal.get(page) || 0) + 1);
    const text = $(el).text().replace(/\s+/g, " ").trim();
    if (GENERIC.test(text)) generic.push({ page, text, href: u });
    if (!seen.has(u) && u !== page) { seen.add(u); bodyIn.set(u, (bodyIn.get(u) || new Set()).add(page)); }
  });
  outCount.set(page, seen.size);
}
const allTargets = new Set([...bodyIn.keys(), ...navTargets]);
const broken = [], redirects = [];
for (const t of allTargets) {
  const s = await check(t);
  if (s.code >= 400) broken.push({ target: t, code: s.code, from: [...(bodyIn.get(t) || [])].slice(0, 5) });
  else if (s.code >= 300) redirects.push({ target: t, code: s.code, to: s.location, from: [...(bodyIn.get(t) || [])].slice(0, 5) });
}
const orphans = seeds.filter((p) => p !== "/" && !(bodyIn.get(p)?.size));
const weak = seeds.filter((p) => p !== "/" && (bodyIn.get(p)?.size || 0) > 0 && bodyIn.get(p).size < 3).map((p) => ({ page: p, inlinks: bodyIn.get(p).size, from: [...bodyIn.get(p)] }));
const notInNav = seeds.filter((p) => !navTargets.has(p) && !p.startsWith("/blog/") && !p.startsWith("/pos-case-studies/") && p !== "/author/");

const report = {
  pages: seeds.length,
  broken, redirects, orphans, weak,
  notInNav,
  genericAnchors: generic.length, genericSample: generic.slice(0, 15),
  absoluteInternalLinks: Object.fromEntries(absInternal),
  inlinks: Object.fromEntries([...seeds].map((p) => [p, bodyIn.get(p)?.size || 0]).sort((a, b) => a[1] - b[1])),
  outlinks: Object.fromEntries(outCount),
};
const out = process.argv.indexOf("--json");
if (out > 0) fs.writeFileSync(process.argv[out + 1], JSON.stringify(report, null, 2));
console.log(`pages ${report.pages} | broken ${broken.length} | redirecting ${redirects.length} | orphans ${orphans.length} | <3 in-links ${weak.length} | not in nav ${notInNav.length} | generic anchors ${generic.length}`);
for (const b of broken) console.log("BROKEN", b.code, b.target, "from", b.from.join(", "));
for (const r of redirects) console.log("REDIRECT", r.code, r.target, "->", r.to, "from", r.from.join(", "));
for (const o of orphans) console.log("ORPHAN", o);
for (const w of weak) console.log("WEAK", w.inlinks, w.page, "from", w.from.join(", "));
console.log("NOT IN NAV:", notInNav.join(" "));
for (const g of generic.slice(0, 15)) console.log("GENERIC", JSON.stringify(g.text), g.href, "on", g.page);
if (process.argv.includes("--strict") && (broken.length || generic.length)) process.exit(1);
