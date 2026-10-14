#!/usr/bin/env node
/**
 * Tell Bing / Yandex (IndexNow) that URLs changed, so they recrawl quickly.
 * Usage after a production deploy:
 *   node scripts/indexnow.mjs            -> submits every URL in the live sitemap
 *   node scripts/indexnow.mjs /pricing/  -> submits only the given paths
 * The key file public/<KEY>.txt must stay deployed at the site root.
 */
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");
const KEY = "1daa091d01958d2310349672388baf5b";

async function sitemapUrls() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p}`)) : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URL(s)`);
