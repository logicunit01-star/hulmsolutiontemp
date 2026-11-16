import * as cheerio from "cheerio";

const pages = [
  { name: "Pakistan", path: "/" },
  { name: "USA", path: "/pos-software-usa/" },
  { name: "Saudi Arabia", path: "/pos-software-ksa/" },
  { name: "UAE", path: "/pos-software-uae/" },
  { name: "Qatar", path: "/pos-software-qatar/" },
];

async function checkHreflang() {
  console.log("=== HREFLANG RECIPROCITY CHECK ===\n");
  const results = {};

  for (const page of pages) {
    const res = await fetch(`http://localhost:3000${page.path}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    const canonical = $('link[rel="canonical"]').attr("href");
    const alternates = [];
    $('link[rel="alternate"]').each((_, el) => {
      const hreflang = $(el).attr("hreflang");
      const href = $(el).attr("href");
      const type = $(el).attr("type");
      if (hreflang) {
        alternates.push({ hreflang, href });
      }
    });

    results[page.path] = {
      name: page.name,
      canonical,
      alternates,
    };
  }

  for (const page of pages) {
    const data = results[page.path];
    console.log(`Page: ${data.name} (${page.path})`);
    console.log(`  Canonical: ${data.canonical}`);
    console.log(`  Hreflang count: ${data.alternates.length}`);
    for (const alt of data.alternates) {
      console.log(`    hreflang="${alt.hreflang}" href="${alt.href}"`);
    }
    console.log("");
  }

  console.log("--- Reciprocity Analysis ---");
  // Check if every page lists the exact same set of hreflang mappings
  const expectedLanguages = ["en-PK", "en-US", "en-SA", "en-AE", "en-QA", "x-default"];
  let allReciprocal = true;

  const baseline = results["/"].alternates.reduce((acc, curr) => {
    acc[curr.hreflang] = curr.href;
    return acc;
  }, {});

  console.log("Baseline hreflang mappings (from /):", baseline);

  for (const page of pages) {
    const data = results[page.path];
    const map = data.alternates.reduce((acc, curr) => {
      acc[curr.hreflang] = curr.href;
      return acc;
    }, {});

    for (const lang of expectedLanguages) {
      if (!map[lang]) {
        console.error(`ISSUE on ${page.name} (${page.path}): Missing hreflang for '${lang}'`);
        allReciprocal = false;
      } else if (map[lang] !== baseline[lang]) {
        console.error(`ISSUE on ${page.name} (${page.path}): Mismatch for '${lang}'! Expected '${baseline[lang]}', got '${map[lang]}'`);
        allReciprocal = false;
      }
    }

    // Check self-referencing hreflang
    // For Pakistan: en-PK and x-default should point to /
    // For US: en-US should point to /pos-software-usa/
    // For KSA: en-SA should point to /pos-software-ksa/
    // For UAE: en-AE should point to /pos-software-uae/
    // For Qatar: en-QA should point to /pos-software-qatar/
    const langKeyMap = {
      "/": "en-PK",
      "/pos-software-usa/": "en-US",
      "/pos-software-ksa/": "en-SA",
      "/pos-software-uae/": "en-AE",
      "/pos-software-qatar/": "en-QA",
    };
    const selfLang = langKeyMap[page.path];
    if (map[selfLang] !== data.canonical) {
      console.error(`ISSUE on ${page.name}: Self-referencing hreflang '${selfLang}' (${map[selfLang]}) does not match canonical (${data.canonical})`);
      allReciprocal = false;
    }
  }

  if (allReciprocal) {
    console.log("\n✓ All hreflang tags exist, are 100% reciprocal across all 5 pages, and self-referential!");
  } else {
    console.log("\n✗ Reciprocity issues found!");
  }
}

checkHreflang();
