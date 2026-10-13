import fs from "node:fs";
import * as cheerio from "cheerio";

const LIVE_BASE = "https://hulmsolutions.com";
const STAGING_BASE = "https://hulmsolutiontemp.vercel.app";

const parityData = JSON.parse(fs.readFileSync("src/content/productionParityData.json", "utf-8"));
const pages = parityData.pages;
const paths = Object.keys(pages);

async function fetchSafe(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
      },
      redirect: "manual"
    });
    const headers = Object.fromEntries(res.headers.entries());
    let text = "";
    if (res.status === 200) {
      text = await res.text();
    }
    return { status: res.status, headers, text, location: headers["location"] };
  } catch (err) {
    return { status: 0, error: err.message };
  }
}

function parseMeta(html) {
  if (!html) return null;
  const $ = cheerio.load(html);
  
  const title = $("title").text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim() || "";
  const robots = $('meta[name="robots"]').attr("content")?.trim() || "";
  const googlebot = $('meta[name="googlebot"]').attr("content")?.trim() || "";
  const canonical = $('link[rel="canonical"]').attr("href")?.trim() || "";
  
  const ogTitle = $('meta[property="og:title"]').attr("content")?.trim() || "";
  const ogDesc = $('meta[property="og:description"]').attr("content")?.trim() || "";
  const ogUrl = $('meta[property="og:url"]').attr("content")?.trim() || "";
  const ogImage = $('meta[property="og:image"]').attr("content")?.trim() || "";
  const ogSiteName = $('meta[property="og:site_name"]').attr("content")?.trim() || "";
  
  const twTitle = $('meta[name="twitter:title"]').attr("content")?.trim() || "";
  const twDesc = $('meta[name="twitter:description"]').attr("content")?.trim() || "";
  const twImage = $('meta[name="twitter:image"]').attr("content")?.trim() || "";
  const twCard = $('meta[name="twitter:card"]').attr("content")?.trim() || "";

  // Schema types
  const schemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const data = JSON.parse($(el).html());
      const getTypes = (obj) => {
        if (!obj) return [];
        if (Array.isArray(obj)) return obj.flatMap(getTypes);
        if (typeof obj === "object") {
          let t = obj["@type"] ? [obj["@type"]].flat() : [];
          for (let k in obj) {
            if (typeof obj[k] === "object") t.push(...getTypes(obj[k]));
          }
          return t;
        }
        return [];
      };
      schemas.push(...getTypes(data));
    } catch {}
  });

  const h1s = $("h1").map((_, el) => $(el).text().trim()).get();

  const internalLinks = [];
  const vercelDomainLinks = [];
  const liveDomainLinks = [];
  const otherExternalLinks = [];
  
  $("a[href]").each((_, el) => {
    const h = $(el).attr("href");
    if (!h || h.startsWith("#") || h.startsWith("javascript:") || h.startsWith("tel:") || h.startsWith("mailto:")) return;
    if (h.startsWith("https://hulmsolutions.com")) {
      liveDomainLinks.push(h);
    } else if (h.startsWith("https://hulmsolutiontemp.vercel.app")) {
      vercelDomainLinks.push(h);
    } else if (h.startsWith("/")) {
      internalLinks.push(h);
    } else {
      otherExternalLinks.push(h);
    }
  });

  const images = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src") || "";
    const alt = $(el).attr("alt");
    images.push({ src, alt });
  });

  return {
    title,
    description,
    robots,
    googlebot,
    canonical,
    og: { title: ogTitle, desc: ogDesc, url: ogUrl, image: ogImage, siteName: ogSiteName },
    twitter: { title: twTitle, desc: twDesc, image: twImage, card: twCard },
    schemas: [...new Set(schemas)],
    h1s,
    internalLinksCount: internalLinks.length,
    liveDomainLinksCount: liveDomainLinks.length,
    liveDomainLinks: [...new Set(liveDomainLinks)],
    vercelDomainLinksCount: vercelDomainLinks.length,
    otherExternalLinksCount: otherExternalLinks.length,
    imagesCount: images.length,
    missingAltCount: images.filter(i => !i.alt).length
  };
}

async function main() {
  console.log(`Auditing ${paths.length} parity paths...`);
  const results = [];
  
  // Test batches
  for (let i = 0; i < paths.length; i += 5) {
    const batch = paths.slice(i, i + 5);
    const batchRes = await Promise.all(batch.map(async (p) => {
      const [liveRes, stagRes] = await Promise.all([
        fetchSafe(`${LIVE_BASE}${p}`),
        fetchSafe(`${STAGING_BASE}${p}`)
      ]);
      const liveMeta = parseMeta(liveRes.text);
      const stagMeta = parseMeta(stagRes.text);
      return {
        path: p,
        liveStatus: liveRes.status,
        liveLocation: liveRes.location,
        liveXRobots: liveRes.headers?.["x-robots-tag"] || null,
        stagStatus: stagRes.status,
        stagLocation: stagRes.location,
        stagXRobots: stagRes.headers?.["x-robots-tag"] || null,
        liveMeta,
        stagMeta
      };
    }));
    results.push(...batchRes);
    process.stdout.write(`Processed ${results.length}/${paths.length}\r`);
  }

  fs.writeFileSync("scratch/audit_results.json", JSON.stringify(results, null, 2));
  console.log("\nWrote audit_results.json");

  // Summary analysis
  let titleMatches = 0;
  let titleDifferences = [];
  let descMatches = 0;
  let descDifferences = [];
  let stagMissingDesc = [];
  let canonicalAnalysis = {
    matchesExpectedLive: 0,
    hasStagingDomain: 0,
    missing: 0,
    differences: []
  };
  let robotsDirectives = new Set();
  let xRobotsDirectives = new Set();
  let statusCodes = { live: {}, stag: {} };
  let stagingPagesWithLiveUrls = [];
  let stagingPagesWithVercelUrls = [];
  let ogDifferences = [];
  let schemaDifferences = [];

  for (const r of results) {
    statusCodes.live[r.liveStatus] = (statusCodes.live[r.liveStatus] || 0) + 1;
    statusCodes.stag[r.stagStatus] = (statusCodes.stag[r.stagStatus] || 0) + 1;

    if (r.stagXRobots) xRobotsDirectives.add(r.stagXRobots);
    if (r.stagMeta?.robots) robotsDirectives.add(r.stagMeta.robots);

    if (r.stagStatus === 200 && r.stagMeta) {
      // Check description
      if (!r.stagMeta.description) {
        stagMissingDesc.push(r.path);
      }
      
      // Compare with live
      if (r.liveStatus === 200 && r.liveMeta) {
        if (r.liveMeta.title === r.stagMeta.title) {
          titleMatches++;
        } else {
          titleDifferences.push({
            path: r.path,
            live: r.liveMeta.title,
            staging: r.stagMeta.title
          });
        }

        if (r.liveMeta.description === r.stagMeta.description) {
          descMatches++;
        } else {
          descDifferences.push({
            path: r.path,
            live: r.liveMeta.description,
            staging: r.stagMeta.description
          });
        }
      }

      // Canonical check
      const expectedCanonical = `https://hulmsolutions.com${r.path}`;
      if (r.stagMeta.canonical === expectedCanonical) {
        canonicalAnalysis.matchesExpectedLive++;
      } else if (!r.stagMeta.canonical) {
        canonicalAnalysis.missing++;
      } else {
        canonicalAnalysis.differences.push({
          path: r.path,
          actual: r.stagMeta.canonical,
          expected: expectedCanonical
        });
      }

      if (r.stagMeta.liveDomainLinksCount > 0) {
        stagingPagesWithLiveUrls.push({
          path: r.path,
          count: r.stagMeta.liveDomainLinksCount,
          links: r.stagMeta.liveDomainLinks
        });
      }

      if (r.stagMeta.vercelDomainLinksCount > 0) {
        stagingPagesWithVercelUrls.push({
          path: r.path,
          count: r.stagMeta.vercelDomainLinksCount
        });
      }
    }
  }

  console.log("\n=== AUDIT SUMMARY ===");
  console.log("Status Codes Live:", statusCodes.live);
  console.log("Status Codes Staging:", statusCodes.stag);
  console.log("Staging Robots meta values:", [...robotsDirectives]);
  console.log("Staging X-Robots-Tag values:", [...xRobotsDirectives]);
  console.log(`Title Matches: ${titleMatches}/${results.length}, Differences: ${titleDifferences.length}`);
  console.log(`Description Matches: ${descMatches}/${results.length}, Differences: ${descDifferences.length}`);
  console.log(`Missing Descriptions on Staging: ${stagMissingDesc.length}`);
  console.log("Canonical Analysis:", {
    matchesExpectedLive: canonicalAnalysis.matchesExpectedLive,
    missing: canonicalAnalysis.missing,
    differencesCount: canonicalAnalysis.differences.length
  });
  console.log(`Staging Pages with Hardcoded Live URLs: ${stagingPagesWithLiveUrls.length}`);
  if (stagingPagesWithLiveUrls.length > 0) {
    console.log("Sample pages with hardcoded live URLs:", stagingPagesWithLiveUrls.slice(0, 3));
  }
  if (titleDifferences.length > 0) {
    console.log("Sample title differences:", titleDifferences.slice(0, 3));
  }
  if (descDifferences.length > 0) {
    console.log("Sample desc differences:", descDifferences.slice(0, 3));
  }
  if (canonicalAnalysis.differences.length > 0) {
    console.log("Canonical differences:", canonicalAnalysis.differences.slice(0, 5));
  }
}

main();
