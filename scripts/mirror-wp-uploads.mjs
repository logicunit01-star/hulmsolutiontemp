#!/usr/bin/env node
/**
 * Mirror every WordPress media file the Next.js site still references into public/wp-content/uploads/.
 *
 * Why: blog posts, case studies and og:images point at https://hulmsolutions.com/wp-content/uploads/...
 * Once hulmsolutions.com serves this Next.js app instead of WordPress, those URLs only keep working if
 * the same files exist at public/wp-content/uploads/... (Next serves /public at the site root), so no
 * URL in the content needs to change.
 *
 * Run ONCE while the WordPress site is still live:   node scripts/mirror-wp-uploads.mjs
 * Re-running is safe: files that already exist are skipped. Add --dry to only list the URLs.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DRY = process.argv.includes("--dry");
const SCAN_DIRS = ["src", "content"];
const URL_RE = /https:\/\/hulmsolutions\.com\/wp-content\/uploads\/[^"'\s)\\<>]+/g;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx?|jsx?|json|css|mdx?)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const urls = new Set();
for (const dir of SCAN_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const text = fs.readFileSync(file, "utf8");
    if (file.endsWith("productionParityData.json")) {
      // Only the og:images from the live snapshot are still used; its mainHtml is reference data.
      const pages = JSON.parse(text).pages || {};
      for (const page of Object.values(pages)) if (page.openGraphImage) urls.add(page.openGraphImage);
      continue;
    }
    for (const m of text.matchAll(URL_RE)) urls.add(m[0].replace(/&quot;.*$/, "").replace(/[.,;]+$/, ""));
  }
}

const list = [...urls].sort();
console.log(`${list.length} WordPress upload URLs referenced`);
if (DRY) {
  list.forEach((u) => console.log(u));
  process.exit(0);
}

let saved = 0, skipped = 0, failed = 0;
for (const url of list) {
  const rel = decodeURIComponent(new URL(url).pathname); // /wp-content/uploads/...
  const dest = path.join(ROOT, "public", rel);
  if (fs.existsSync(dest)) { skipped++; continue; }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    saved++;
    console.log(`saved  ${rel}`);
  } catch (err) {
    failed++;
    console.warn(`FAILED ${url} (${err.message})`);
  }
}
console.log(`\nDone: ${saved} saved, ${skipped} already present, ${failed} failed.`);
