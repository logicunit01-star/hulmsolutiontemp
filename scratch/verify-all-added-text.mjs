import * as cheerio from "cheerio";

async function checkAllAddedText() {
  const res = await fetch("http://localhost:3000/");
  const html = await res.text();
  const $ = cheerio.load(html);
  const bodyText = $("body").text().replace(/\s+/g, " ");

  const checks = [
    // 1. Working tree home.ts FAQ additions
    "Does Hulm POS have a pharmacy edition?",
    "Does Hulm POS support restaurants?",
    "Does Hulm POS work on mobile?",
    "counter billing, packs and units, distributor ledgers",
    "tables, a kitchen board, menu management, recipes",
    "Mobile POS module is built for billing on a mobile device",

    // 2. Working tree BenefitsSection additions
    "Three editions in one login:",
    "restaurant, retail and pharmacy",
    "Customer and vendor ledgers",
    "for credit-based trade",
    "Full purchasing flow:",
    "purchase order, GRN, return note, vendor payment",
    "Packs, units of measure",
    "and price lists",
    "Reports",
    "product profit, sales vs purchase and cash in vs cash out",
    "FBR-integrated invoices",
    "with QR codes",
    "Hulm POS combines billing, stock, purchasing, ledgers and reporting in one cloud system.",

    // 3. Working tree PosFeaturesSection additions
    "Pharmacy",
    "Medical & Pharmacy",
    "Counter dispensing, pack-to-unit conversions & distributor ledger tracking.",
    "Batch #RX-409 · Expiry 2027",
    "Rx Dispensed",
    "Counter billing",
    "Packs and units",
    "Distributor ledgers",
    "GRN",
    "Goods return note",
    "Vendor payments",
    "6 pharmacy tools",
    "Pharmacy Ready",
    "9 purpose-built operational modules",

    // 4. Commit ce2ef55 additions
    "POS software price in Pakistan",
    "Hulm POS at a glance",
    "Multi-branch ready",
    "Sindh Revenue Board",
    "Punjab Revenue Authority",
    "Balochistan Revenue Authority"
  ];

  console.log("=== SERVER-RENDERED HTML TEXT AUDIT ===");
  let failed = 0;
  for (const c of checks) {
    const presentInHtml = html.includes(c) || html.includes(c.replace(/&/g, "&amp;"));
    const presentInText = bodyText.includes(c);
    if (presentInHtml || presentInText) {
      console.log(`✓ [SSR CONFIRMED]: "${c}"`);
    } else {
      console.error(`✗ [NOT FOUND IN SSR]: "${c}"`);
      failed++;
    }
  }

  if (failed === 0) {
    console.log(`\n✓ SUCCESS: All ${checks.length} added text items are confirmed present in server-rendered HTML!`);
  } else {
    console.error(`\n✗ FAILED: ${failed} items were not found in server-rendered HTML.`);
  }
}

checkAllAddedText();
