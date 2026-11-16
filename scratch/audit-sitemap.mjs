import * as cheerio from "cheerio";

async function auditSitemap() {
  const sitemapRes = await fetch("http://localhost:3000/sitemap.xml");
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  console.log(`Auditing ${urls.length} URLs from sitemap.xml...`);

  // Check for duplicates
  const seen = new Set();
  const duplicates = [];
  for (const u of urls) {
    if (seen.has(u)) duplicates.push(u);
    seen.add(u);
  }
  if (duplicates.length > 0) {
    console.error("Duplicate URLs found in sitemap:", duplicates);
  } else {
    console.log("✓ No duplicate URLs in sitemap");
  }

  const issues = [];
  const concurrency = 6;
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const i = index++;
      const url = urls[i];
      const path = new URL(url).pathname;
      const localUrl = `http://localhost:3000${path}`;
      try {
        const res = await fetch(localUrl, { redirect: "manual" });
        if (res.status !== 200) {
          issues.push({ url, issue: `HTTP status ${res.status}` });
          console.log(`[${i+1}/${urls.length}] ✗ ${path} -> HTTP ${res.status}`);
          continue;
        }
        const html = await res.text();
        const $ = cheerio.load(html);

        const canonical = $('link[rel="canonical"]').attr("href");
        const robots = $('meta[name="robots"]').attr("content");

        let hasIssue = false;
        if (!canonical) {
          issues.push({ url, issue: "Missing canonical tag" });
          hasIssue = true;
        } else if (canonical !== url) {
          issues.push({ url, issue: `Canonical mismatch: canonical is '${canonical}', sitemap has '${url}'` });
          hasIssue = true;
        }

        if (robots && robots.includes("noindex")) {
          issues.push({ url, issue: `Page is marked noindex: robots='${robots}'` });
          hasIssue = true;
        }

        if (hasIssue) {
          console.log(`[${i+1}/${urls.length}] ✗ ${path}`);
        } else {
          console.log(`[${i+1}/${urls.length}] ✓ ${path}`);
        }
      } catch (err) {
        issues.push({ url, issue: `Fetch failed: ${err.message}` });
        console.log(`[${i+1}/${urls.length}] ✗ ${path} -> error: ${err.message}`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  console.log("\n--- SITEMAP AUDIT SUMMARY ---");
  if (issues.length === 0) {
    console.log(`✓ All ${urls.length} sitemap URLs are status 200, canonical to themselves, and indexable!`);
  } else {
    console.error(`Found ${issues.length} issues:`);
    for (const item of issues) {
      console.error(`- ${item.url}: ${item.issue}`);
    }
  }
}

auditSitemap();
