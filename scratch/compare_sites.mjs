import * as cheerio from "cheerio";

const LIVE_BASE = "https://hulmsolutions.com";
const STAGING_BASE = "https://hulmsolutiontemp.vercel.app";

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      redirect: "manual"
    });
    const headers = Object.fromEntries(res.headers.entries());
    let body = "";
    if (res.status >= 200 && res.status < 400) {
      body = await res.text();
    }
    return { status: res.status, headers, body, url };
  } catch (err) {
    return { status: 0, error: err.message, url };
  }
}

function parseHead(html, baseUrl) {
  if (!html) return {};
  const $ = cheerio.load(html);
  
  const title = $("title").text().trim();
  const description = $('meta[name="description"]').attr("content") || $('meta[property="og:description"]').attr("content") || "";
  const metaRobots = $('meta[name="robots"]').attr("content") || "";
  const googlebot = $('meta[name="googlebot"]').attr("content") || "";
  const canonical = $('link[rel="canonical"]').attr("href") || "";
  
  const ogTitle = $('meta[property="og:title"]').attr("content") || "";
  const ogDesc = $('meta[property="og:description"]').attr("content") || "";
  const ogUrl = $('meta[property="og:url"]').attr("content") || "";
  const ogImage = $('meta[property="og:image"]').attr("content") || "";
  const ogSiteName = $('meta[property="og:site_name"]').attr("content") || "";
  
  const twitterCard = $('meta[name="twitter:card"]').attr("content") || "";
  const twitterTitle = $('meta[name="twitter:title"]').attr("content") || "";
  const twitterDesc = $('meta[name="twitter:description"]').attr("content") || "";
  const twitterImage = $('meta[name="twitter:image"]').attr("content") || "";

  // Schema types
  const schemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const data = JSON.parse($(el).html());
      schemas.push(data);
    } catch {}
  });

  // Links
  const internalLinks = [];
  const externalLinks = [];
  const liveDomainLinksOnStaging = [];
  
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    if (href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    
    if (href.startsWith("https://hulmsolutions.com")) {
      liveDomainLinksOnStaging.push(href);
    } else if (href.startsWith("/") || href.startsWith(baseUrl)) {
      internalLinks.push(href);
    } else {
      externalLinks.push(href);
    }
  });

  // Images
  const images = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src") || $(el).attr("data-src");
    const alt = $(el).attr("alt");
    if (src) images.push({ src, alt });
  });

  const h1s = $("h1").map((_, el) => $(el).text().trim()).get();

  return {
    title,
    description,
    metaRobots,
    googlebot,
    canonical,
    og: { title: ogTitle, desc: ogDesc, url: ogUrl, image: ogImage, siteName: ogSiteName },
    twitter: { card: twitterCard, title: twitterTitle, desc: twitterDesc, image: twitterImage },
    schemas: schemas.map(s => s["@type"] || (Array.isArray(s) ? "Array" : typeof s)),
    internalLinksCount: internalLinks.length,
    externalLinksCount: externalLinks.length,
    liveDomainLinksCount: liveDomainLinksOnStaging.length,
    liveDomainLinks: [...new Set(liveDomainLinksOnStaging)],
    sampleInternalLinks: [...new Set(internalLinks)].slice(0, 15),
    h1s,
    imagesCount: images.length,
    imagesWithoutAlt: images.filter(img => !img.alt).length
  };
}

async function run() {
  console.log("=== CHECKING ROBOTS.TXT ===");
  const liveRobots = await fetchPage(`${LIVE_BASE}/robots.txt`);
  const stagingRobots = await fetchPage(`${STAGING_BASE}/robots.txt`);
  
  console.log("Live robots.txt status:", liveRobots.status);
  console.log("Live robots.txt body:\n", liveRobots.body);
  console.log("---");
  console.log("Staging robots.txt status:", stagingRobots.status);
  console.log("Staging robots.txt body:\n", stagingRobots.body);
  
  console.log("\n=== CHECKING SITEMAP.XML ===");
  const liveSitemap = await fetchPage(`${LIVE_BASE}/sitemap.xml`);
  const stagingSitemap = await fetchPage(`${STAGING_BASE}/sitemap.xml`);
  console.log("Live sitemap status:", liveSitemap.status, "len:", liveSitemap.body?.length);
  console.log("Staging sitemap status:", stagingSitemap.status, "len:", stagingSitemap.body?.length);
  if (stagingSitemap.body?.length < 1000) {
    console.log("Staging sitemap snippet:\n", stagingSitemap.body);
  }

  console.log("\n=== CHECKING HOMEPAGE HEADERS ===");
  const liveHome = await fetchPage(`${LIVE_BASE}/`);
  const stagingHome = await fetchPage(`${STAGING_BASE}/`);
  
  console.log("Live home status:", liveHome.status, "x-robots-tag:", liveHome.headers["x-robots-tag"]);
  console.log("Staging home status:", stagingHome.status, "x-robots-tag:", stagingHome.headers["x-robots-tag"]);

  const liveParsed = parseHead(liveHome.body, LIVE_BASE);
  const stagingParsed = parseHead(stagingHome.body, STAGING_BASE);

  console.log("\n=== HOMEPAGE METADATA COMPARISON ===");
  console.log(JSON.stringify({
    title: { live: liveParsed.title, staging: stagingParsed.title },
    description: { live: liveParsed.description, staging: stagingParsed.description },
    metaRobots: { live: liveParsed.metaRobots, staging: stagingParsed.metaRobots },
    canonical: { live: liveParsed.canonical, staging: stagingParsed.canonical },
    og: { live: liveParsed.og, staging: stagingParsed.og },
    twitter: { live: liveParsed.twitter, staging: stagingParsed.twitter },
    schemas: { live: liveParsed.schemas, staging: stagingParsed.schemas },
    h1s: { live: liveParsed.h1s, staging: stagingParsed.h1s },
    stagingLiveDomainLinks: stagingParsed.liveDomainLinks
  }, null, 2));

  // Check some common subpages
  const pathsToCheck = [
    "/pos-system/",
    "/pricing/",
    "/about-us/",
    "/contact-us/",
    "/features/",
    "/retail-pos/",
    "/restaurant-pos/",
    "/grocery-pos/"
  ];

  console.log("\n=== CHECKING SUBPAGES ===");
  for (const p of pathsToCheck) {
    const l = await fetchPage(`${LIVE_BASE}${p}`);
    const s = await fetchPage(`${STAGING_BASE}${p}`);
    console.log(`Path: ${p} | Live: ${l.status} | Staging: ${s.status}`);
    if (s.status === 200) {
      const sp = parseHead(s.body, STAGING_BASE);
      const lp = parseHead(l.body, LIVE_BASE);
      console.log(`  Staging Title: ${sp.title}`);
      console.log(`  Staging Desc: ${sp.description?.slice(0, 80)}...`);
      console.log(`  Staging Robots: ${sp.metaRobots || 'none'} | Canonical: ${sp.canonical}`);
      console.log(`  Live Canonical: ${lp.canonical}`);
      if (sp.liveDomainLinks.length > 0) {
        console.log(`  Staging links pointing to live domain:`, sp.liveDomainLinks.slice(0, 3));
      }
    }
  }
}

run();
