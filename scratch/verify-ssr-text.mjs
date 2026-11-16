const textsToConfirm = [
  // FAQ Additions
  "Does Hulm POS have a pharmacy edition?",
  "Does Hulm POS support restaurants?",
  "Does Hulm POS work on mobile?",
  "Hulm POS for pharmacies covers counter billing",
  "The restaurant edition includes tables, a kitchen board",
  "Hulm POS runs in any modern browser on phones, tablets and computers",

  // BenefitsSection Additions
  "Three editions in one login:",
  "restaurant, retail and pharmacy",
  "Customer and vendor ledgers",
  "for credit-based trade",
  "Full purchasing flow:",
  "purchase order, GRN, return note, vendor payment",
  "Packs, units of measure",
  "and price lists",
  "product profit, sales vs purchase and cash in vs cash out",
  "FBR-integrated invoices",
  "with QR codes",
  "Hulm POS combines billing, stock, purchasing, ledgers and reporting in one cloud system.",

  // PosFeaturesSection Additions
  "Pharmacy",
  "Medical & Pharmacy",
  "Counter dispensing, pack-to-unit conversions & distributor ledger tracking.",
  "Batch #RX-409",
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

  // DashboardTabs Additions
  "Retail POS",
  "Restaurant POS",
  "Pharmacy POS",
  "Live Counter Billing",
  "Kitchen & Dine-In Flow",
  "Batch & Dispensing Desk"
];

async function verifySSR() {
  console.log("Fetching http://localhost:3000/ (server-rendered HTML)...");
  const res = await fetch("http://localhost:3000/");
  const html = await res.text();
  console.log(`Received ${html.length} bytes of HTML.`);

  let missing = 0;
  for (const text of textsToConfirm) {
    if (html.includes(text)) {
      console.log(`✓ FOUND: "${text}"`);
    } else {
      console.error(`✗ MISSING: "${text}"`);
      missing++;
    }
  }

  if (missing === 0) {
    console.log(`\n✓ All ${textsToConfirm.length} text additions are present in the server-rendered HTML!`);
  } else {
    console.error(`\n✗ ${missing} text fragments missing from SSR!`);
  }
}

verifySSR();
