const path = require('path');
const fs = require('fs');
const sharp = require(path.join(process.cwd(), 'node_modules', 'sharp'));

const outDir = path.join(process.cwd(), 'public', 'images', 'uploads', '2026', '11');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateAllCrispVisuals() {
  console.log('Generating crisp, high-DPI visuals with Segoe UI / Arial fonts...');

  // =========================================================================
  // 1. THREE BRANCHES SPREADSHEET DILEMMA (Flagged by user!)
  // =========================================================================
  {
    const outPath = path.join(outDir, 'three-branches-disconnected-spreadsheets-whatsapp.webp');
    const svg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f2a26" flood-opacity="0.07"/>
    </filter>
    <linearGradient id="excelKarachi" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#107C41"/>
      <stop offset="100%" stop-color="#0B5A2F"/>
    </linearGradient>
    <linearGradient id="excelLahore" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0F2A26"/>
      <stop offset="100%" stop-color="#167c70"/>
    </linearGradient>
    <linearGradient id="excelIslamabad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#0F2A26"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Top Badge & Header -->
  <g transform="translate(620, 35)" text-anchor="middle">
    <rect x="-110" y="0" width="220" height="28" rx="14" fill="#167c70" fill-opacity="0.12"/>
    <text x="0" y="19" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#167c70" letter-spacing="1.2">DISCONNECTED RETAIL DATA</text>
    
    <text x="0" y="65" font-family="Segoe UI, Arial" font-size="30" font-weight="bold" fill="#0F2A26">The Multi-Branch Spreadsheet Dilemma</text>
    <text x="0" y="95" font-family="Segoe UI, Arial" font-size="16" fill="#4B5563">Three physical locations &#8226; Three separate Excel sheets &#8226; Manual WhatsApp reporting</text>
  </g>

  <!-- ================= CARD 1: KARACHI ================= -->
  <g transform="translate(45, 155)" filter="url(#cardShadow)">
    <rect width="360" height="425" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 342 0 Q 360 0 360 18 L 360 56 L 0 56 Z" fill="url(#excelKarachi)"/>
    <circle cx="24" cy="28" r="5" fill="#EF4444"/>
    <circle cx="38" cy="28" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="28" r="5" fill="#10B981"/>
    
    <text x="75" y="34" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#FFFFFF">Karachi_Branch.xlsx</text>
    <rect x="290" y="16" width="54" height="24" rx="6" fill="#FFFFFF" fill-opacity="0.2"/>
    <text x="317" y="32" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">OFFLINE</text>

    <!-- Spreadsheet Grid Header -->
    <g transform="translate(16, 72)">
      <rect width="328" height="34" rx="8" fill="#F3F4F6"/>
      <text x="14" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">ITEM</text>
      <text x="180" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">RECORDED</text>
      <text x="272" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">ACTUAL</text>
    </g>

    <!-- Row 1 -->
    <g transform="translate(16, 114)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Wireless KB</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">35 pcs</text>
      <rect x="256" y="10" width="62" height="24" rx="6" fill="#FEE2E2"/>
      <text x="287" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#DC2626" text-anchor="middle">30 pcs</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(16, 166)">
      <rect width="328" height="44" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Denim Jeans</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">45 pcs</text>
      <text x="287" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#10B981" text-anchor="middle">45 pcs</text>
    </g>

    <!-- Row 3 -->
    <g transform="translate(16, 218)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Running Shoes</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">12 prs</text>
      <text x="287" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#10B981" text-anchor="middle">12 prs</text>
    </g>

    <!-- Conflict Alert Banner -->
    <g transform="translate(16, 280)">
      <rect width="328" height="74" rx="12" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <circle cx="26" cy="26" r="12" fill="#EF4444"/>
      <text x="26" y="31" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
      <text x="46" y="24" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#991B1B">Unrecorded Sale Mismatch</text>
      <text x="46" y="44" font-family="Segoe UI, Arial" font-size="12" fill="#B91C1C">5 Keyboards sold at cash counter</text>
      <text x="46" y="60" font-family="Segoe UI, Arial" font-size="12" font-weight="600" fill="#DC2626">Spreadsheet still shows 35 instead of 30</text>
    </g>

    <!-- Branch Status Footnote -->
    <g transform="translate(16, 368)">
      <rect width="328" height="42" rx="10" fill="#F3F4F6"/>
      <text x="14" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#4B5563">Report Status:</text>
      <text x="110" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#D97706">Unsent WhatsApp photo</text>
    </g>
  </g>

  <!-- ================= CARD 2: LAHORE ================= -->
  <g transform="translate(440, 155)" filter="url(#cardShadow)">
    <rect width="360" height="425" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 342 0 Q 360 0 360 18 L 360 56 L 0 56 Z" fill="url(#excelLahore)"/>
    <circle cx="24" cy="28" r="5" fill="#EF4444"/>
    <circle cx="38" cy="28" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="28" r="5" fill="#10B981"/>
    
    <text x="75" y="34" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#FFFFFF">Lahore_Branch.xlsx</text>
    <rect x="290" y="16" width="54" height="24" rx="6" fill="#FFFFFF" fill-opacity="0.2"/>
    <text x="317" y="32" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">OFFLINE</text>

    <!-- Spreadsheet Grid Header -->
    <g transform="translate(16, 72)">
      <rect width="328" height="34" rx="8" fill="#F3F4F6"/>
      <text x="14" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">ITEM</text>
      <text x="180" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">RECORDED</text>
      <text x="272" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">ACTUAL</text>
    </g>

    <!-- Row 1 -->
    <g transform="translate(16, 114)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Wireless KB</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">20 pcs</text>
      <text x="287" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#10B981" text-anchor="middle">20 pcs</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(16, 166)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Denim Jeans</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">20 pcs</text>
      <rect x="256" y="10" width="62" height="24" rx="6" fill="#FEE2E2"/>
      <text x="287" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#DC2626" text-anchor="middle">10 pcs</text>
    </g>

    <!-- Row 3 -->
    <g transform="translate(16, 218)">
      <rect width="328" height="44" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Cotton Shirts</text>
      <text x="180" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">0 pcs</text>
      <rect x="256" y="10" width="62" height="24" rx="6" fill="#FEE2E2"/>
      <text x="287" y="26" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#DC2626" text-anchor="middle">STOCKOUT</text>
    </g>

    <!-- Conflict Alert Banner -->
    <g transform="translate(16, 280)">
      <rect width="328" height="74" rx="12" fill="#FFFBEB" stroke="#FCD34D" stroke-width="1.5"/>
      <circle cx="26" cy="26" r="12" fill="#F59E0B"/>
      <text x="26" y="31" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">!</text>
      <text x="46" y="24" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#92400E">Unverified Stock Transfer</text>
      <text x="46" y="44" font-family="Segoe UI, Arial" font-size="12" fill="#B45309">10 Jeans shipped to Karachi</text>
      <text x="46" y="60" font-family="Segoe UI, Arial" font-size="12" font-weight="600" fill="#D97706">No transfer receipt, inventory not updated</text>
    </g>

    <!-- Branch Status Footnote -->
    <g transform="translate(16, 368)">
      <rect width="328" height="42" rx="10" fill="#F3F4F6"/>
      <text x="14" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#4B5563">Report Status:</text>
      <text x="110" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#2563EB">Sent via WhatsApp 11:30 PM</text>
    </g>
  </g>

  <!-- ================= CARD 3: ISLAMABAD ================= -->
  <g transform="translate(835, 155)" filter="url(#cardShadow)">
    <rect width="360" height="425" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 342 0 Q 360 0 360 18 L 360 56 L 0 56 Z" fill="url(#excelIslamabad)"/>
    <circle cx="24" cy="28" r="5" fill="#EF4444"/>
    <circle cx="38" cy="28" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="28" r="5" fill="#10B981"/>
    
    <text x="75" y="34" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#FFFFFF">Islamabad_Branch.xlsx</text>
    <rect x="290" y="16" width="54" height="24" rx="6" fill="#FFFFFF" fill-opacity="0.2"/>
    <text x="317" y="32" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">OFFLINE</text>

    <!-- Spreadsheet Grid Header -->
    <g transform="translate(16, 72)">
      <rect width="328" height="34" rx="8" fill="#F3F4F6"/>
      <text x="14" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">ITEM</text>
      <text x="170" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">LIST PRICE</text>
      <text x="268" y="22" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#374151">BRANCH</text>
    </g>

    <!-- Row 1 -->
    <g transform="translate(16, 114)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Sneakers</text>
      <text x="170" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#10B981">Rs. 2,200</text>
      <rect x="250" y="10" width="70" height="24" rx="6" fill="#FEE2E2"/>
      <text x="285" y="26" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#DC2626" text-anchor="middle">Rs. 2,000</text>
    </g>

    <!-- Row 2 -->
    <g transform="translate(16, 166)">
      <rect width="328" height="44" rx="8" fill="#F9FAFB" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Wireless KB</text>
      <text x="170" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">15 pcs</text>
      <text x="285" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#10B981" text-anchor="middle">15 pcs</text>
    </g>

    <!-- Row 3 -->
    <g transform="translate(16, 218)">
      <rect width="328" height="44" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <text x="14" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#111827">Daily Closing</text>
      <text x="170" y="27" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#4B5563">Rs. 45,000</text>
      <rect x="250" y="10" width="70" height="24" rx="6" fill="#FEF3C7"/>
      <text x="285" y="26" font-family="Segoe UI, Arial" font-size="11" font-weight="bold" fill="#D97706" text-anchor="middle">PENDING</text>
    </g>

    <!-- Conflict Alert Banner -->
    <g transform="translate(16, 280)">
      <rect width="328" height="74" rx="12" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <circle cx="26" cy="26" r="12" fill="#EF4444"/>
      <text x="26" y="31" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
      <text x="46" y="24" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#991B1B">Outdated Price Discrepancy</text>
      <text x="46" y="44" font-family="Segoe UI, Arial" font-size="12" fill="#B91C1C">Head office raised price to Rs. 2,200</text>
      <text x="46" y="60" font-family="Segoe UI, Arial" font-size="12" font-weight="600" fill="#DC2626">Islamabad still selling at Rs. 2,000</text>
    </g>

    <!-- Branch Status Footnote -->
    <g transform="translate(16, 368)">
      <rect width="328" height="42" rx="10" fill="#F3F4F6"/>
      <text x="14" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#4B5563">Report Status:</text>
      <text x="110" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#DC2626">Delayed by 3 hours</text>
    </g>
  </g>

  <!-- ================= BOTTOM: DISCONNECTED WHATSAPP BOTTLENECK ================= -->
  <g transform="translate(45, 605)" filter="url(#cardShadow)">
    <rect width="1150" height="120" rx="18" fill="#FFFFFF" stroke="#25D366" stroke-width="2"/>
    
    <!-- WhatsApp Icon Circle -->
    <circle cx="65" cy="60" r="34" fill="#25D366"/>
    <path d="M 52 48 C 45 55 45 66 52 73 C 58 80 69 80 76 73 C 83 66 83 55 76 48 C 69 41 58 41 52 48 Z M 71 67 C 69 69 66 70 63 69 C 60 68 56 64 55 61 C 54 58 55 55 57 53 C 58 52 59 52 60 54 L 62 57 C 62 58 62 58 61 59 L 60 60 C 61 62 62 63 64 64 L 65 63 C 66 62 66 62 67 62 L 70 64 C 72 65 72 66 71 67 Z" fill="#FFFFFF"/>
    
    <!-- Content Text -->
    <g transform="translate(120, 30)">
      <rect x="0" y="0" width="280" height="24" rx="12" fill="#25D366" fill-opacity="0.15"/>
      <text x="14" y="16" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#075E54" letter-spacing="0.5">THE MANUAL REPORTING BOTTLENECK</text>
      
      <text x="0" y="46" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Managers Send Nightly WhatsApp Photos &amp; Separate Spreadsheets</text>
      <text x="0" y="70" font-family="Segoe UI, Arial" font-size="14" fill="#4B5563">Business owners spend 2+ hours every evening manually combining disconnected files, catching missed sales, and fixing calculation errors.</text>
    </g>

    <!-- Red Alert Badge on Right -->
    <g transform="translate(970, 32)">
      <rect width="155" height="56" rx="12" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <text x="77" y="25" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#991B1B" text-anchor="middle">DAILY TIME LOST</text>
      <text x="77" y="46" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#DC2626" text-anchor="middle">2 - 3 Hours</text>
    </g>
  </g>
</svg>
`;
    await sharp(Buffer.from(svg), { density: 160 })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('1. Generated crisp Spreadsheets Dilemma Visual ->', outPath);
  }

  // =========================================================================
  // 2. BEFORE AND AFTER COMPARISON
  // =========================================================================
  {
    const outPath = path.join(outDir, 'before-after-spreadsheets-vs-hulmpos-dashboard.webp');
    const svg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="baShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0f2a26" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Header -->
  <g transform="translate(620, 35)" text-anchor="middle">
    <rect x="-95" y="0" width="190" height="28" rx="14" fill="#0F2A26" fill-opacity="0.1"/>
    <text x="0" y="19" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26" letter-spacing="1.2">SYSTEM COMPARISON</text>
    <text x="0" y="65" font-family="Segoe UI, Arial" font-size="30" font-weight="bold" fill="#0F2A26">Retail Branch Management: Before vs After</text>
    <text x="0" y="95" font-family="Segoe UI, Arial" font-size="16" fill="#4B5563">Comparing manual spreadsheet chaos with centralized cloud POS operations</text>
  </g>

  <!-- LEFT: BEFORE (SPREADSHEETS) -->
  <g transform="translate(45, 145)" filter="url(#baShadow)">
    <rect width="560" height="575" rx="20" fill="#FFFFFF" stroke="#FCA5A5" stroke-width="2"/>
    
    <!-- Top banner -->
    <path d="M 0 20 Q 0 0 20 0 L 540 0 Q 560 0 560 20 L 560 65 L 0 65 Z" fill="#FEE2E2"/>
    <circle cx="35" cy="32" r="14" fill="#EF4444"/>
    <text x="35" y="38" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
    <text x="62" y="38" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#991B1B">BEFORE: 3 Disconnected Excel Spreadsheets</text>

    <!-- Disconnected files chip -->
    <g transform="translate(24, 85)">
      <rect width="512" height="48" rx="10" fill="#F9FAFB" stroke="#E5E7EB"/>
      <text x="20" y="30" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#4B5563">&#8226; Karachi.xlsx &#160;&#160;&#8226; Lahore.xlsx &#160;&#160;&#8226; Islamabad.xlsx</text>
    </g>

    <!-- Pain Point 1 -->
    <g transform="translate(24, 150)">
      <rect width="512" height="85" rx="12" fill="#FEF2F2" stroke="#FECACA"/>
      <circle cx="28" cy="28" r="10" fill="#EF4444"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#991B1B">Stock Discrepancies &amp; Ghost Inventory</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">Items sold at counter are not updated on sheets. Customers</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">arrive at store only to find items are out of stock.</text>
    </g>

    <!-- Pain Point 2 -->
    <g transform="translate(24, 250)">
      <rect width="512" height="85" rx="12" fill="#FEF2F2" stroke="#FECACA"/>
      <circle cx="28" cy="28" r="10" fill="#EF4444"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#991B1B">Delayed Nightly WhatsApp Reports</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">Managers send register photos late at night. Owner manually</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">copies figures into master sheet for 2+ hours daily.</text>
    </g>

    <!-- Pain Point 3 -->
    <g transform="translate(24, 350)">
      <rect width="512" height="85" rx="12" fill="#FEF2F2" stroke="#FECACA"/>
      <circle cx="28" cy="28" r="10" fill="#EF4444"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2715;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#991B1B">Pricing &amp; Transfer Confusion</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">Head office changes a price, but individual stores continue</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#7F1D1D">selling at old prices without sync or verified slips.</text>
    </g>

    <!-- Bottom summary -->
    <g transform="translate(24, 455)">
      <rect width="512" height="95" rx="14" fill="#FEE2E2"/>
      <text x="24" y="34" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#991B1B">OUTCOME FOR THE RETAIL OWNER:</text>
      <text x="24" y="60" font-family="Segoe UI, Arial" font-size="15" font-weight="bold" fill="#7F1D1D">Blind spots across locations &#8226; Lost sales &#8226; Admin exhaustion</text>
      <text x="24" y="80" font-family="Segoe UI, Arial" font-size="13" fill="#991B1B">Zero real-time data to make confident restocking decisions.</text>
    </g>
  </g>

  <!-- RIGHT: AFTER (HULMPOS) -->
  <g transform="translate(635, 145)" filter="url(#baShadow)">
    <rect width="560" height="575" rx="20" fill="#FFFFFF" stroke="#167c70" stroke-width="2"/>
    
    <!-- Top banner -->
    <path d="M 0 20 Q 0 0 20 0 L 540 0 Q 560 0 560 20 L 560 65 L 0 65 Z" fill="#0F2A26"/>
    <circle cx="35" cy="32" r="14" fill="#7AE582"/>
    <text x="35" y="38" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#0F2A26" text-anchor="middle">&#x2713;</text>
    <text x="62" y="38" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#7AE582">AFTER: One Connected HulmPOS Cloud Platform</text>

    <!-- Connected cloud chip -->
    <g transform="translate(24, 85)">
      <rect width="512" height="48" rx="10" fill="#F0FDF4" stroke="#BBF7D0"/>
      <text x="20" y="30" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#166534">&#x2713; All 3 Branches Live on One Shared Cloud Database</text>
    </g>

    <!-- Advantage 1 -->
    <g transform="translate(24, 150)">
      <rect width="512" height="85" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <circle cx="28" cy="28" r="10" fill="#10B981"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2713;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#065F46">Live Multi-Branch Inventory Tracking</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#166534">Every checkout instantly reduces stock in real time. Know</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#166534">exact on-shelf quantity across Karachi, Lahore &amp; Islamabad.</text>
    </g>

    <!-- Advantage 2 -->
    <g transform="translate(24, 250)">
      <rect width="512" height="85" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <circle cx="28" cy="28" r="10" fill="#10B981"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2713;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#065F46">Instant Consolidated Sales Reports</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#166534">No waiting for WhatsApp files. Open phone or laptop and view</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#166534">real-time revenue, gross margins, and top items in 1 click.</text>
    </g>

    <!-- Advantage 3 -->
    <g transform="translate(24, 350)">
      <rect width="512" height="85" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <circle cx="28" cy="28" r="10" fill="#10B981"/>
      <text x="28" y="33" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">&#x2713;</text>
      <text x="48" y="32" font-family="Segoe UI, Arial" font-size="16" font-weight="bold" fill="#065F46">Centralized Pricing &amp; Stock Transfers</text>
      <text x="48" y="55" font-family="Segoe UI, Arial" font-size="13" fill="#166534">Update price once to reflect everywhere. Inter-branch stock</text>
      <text x="48" y="73" font-family="Segoe UI, Arial" font-size="13" fill="#166534">movements tracked via verified barcode dispatch &amp; receiving slips.</text>
    </g>

    <!-- Bottom summary -->
    <g transform="translate(24, 455)">
      <rect width="512" height="95" rx="14" fill="#D1FAE5"/>
      <text x="24" y="34" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#065F46">OUTCOME FOR THE RETAIL OWNER:</text>
      <text x="24" y="60" font-family="Segoe UI, Arial" font-size="15" font-weight="bold" fill="#047857">100% Visibility &#8226; 2 Hours Saved Daily &#8226; Faster Growth</text>
      <text x="24" y="80" font-family="Segoe UI, Arial" font-size="13" fill="#065F46">Zero manual file merging. Focus on scaling your retail business.</text>
    </g>
  </g>
</svg>
`;
    await sharp(Buffer.from(svg), { density: 160 })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('2. Generated crisp Before-After Comparison ->', outPath);
  }

  // =========================================================================
  // 3. INTER-BRANCH STOCK TRANSFER DIAGRAM
  // =========================================================================
  {
    const outPath = path.join(outDir, 'retail-stock-transfer-diagram-lahore-karachi.webp');
    const svg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="trfShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f2a26" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Header -->
  <g transform="translate(620, 35)" text-anchor="middle">
    <rect x="-120" y="0" width="240" height="28" rx="14" fill="#167c70" fill-opacity="0.12"/>
    <text x="0" y="19" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#167c70" letter-spacing="1.2">MULTI-BRANCH INVENTORY</text>
    <text x="0" y="65" font-family="Segoe UI, Arial" font-size="30" font-weight="bold" fill="#0F2A26">Inter-Branch Stock Transfer Workflow</text>
    <text x="0" y="95" font-family="Segoe UI, Arial" font-size="16" fill="#4B5563">Illustrative Example: Moving 10 Wireless Keyboards from Lahore to Karachi</text>
  </g>

  <!-- ================= LEFT: LAHORE (SENDER) ================= -->
  <g transform="translate(50, 150)" filter="url(#trfShadow)">
    <rect width="360" height="490" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    
    <!-- Header -->
    <path d="M 0 20 Q 0 0 20 0 L 340 0 Q 360 0 360 20 L 360 65 L 0 65 Z" fill="#0F2A26"/>
    <text x="24" y="40" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF">Lahore Branch (Sender)</text>
    <rect x="250" y="20" width="90" height="26" rx="13" fill="#7AE582"/>
    <text x="295" y="37" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26" text-anchor="middle">EXCESS STOCK</text>

    <!-- Initial Stock -->
    <g transform="translate(24, 90)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">Initial Stock on Hand:</text>
      <text x="0" y="62" font-family="Segoe UI, Arial" font-size="44" font-weight="bold" fill="#0F2A26">40 Units</text>
    </g>

    <!-- Transfer Action Card -->
    <g transform="translate(24, 185)">
      <rect width="312" height="75" rx="14" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="1.5"/>
      <text x="20" y="32" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#991B1B">TRANSFER OUT:</text>
      <text x="20" y="58" font-family="Segoe UI, Arial" font-size="22" font-weight="bold" fill="#DC2626">&#8722; 10 Units Dispatched</text>
    </g>

    <line x1="24" y1="285" x2="336" y2="285" stroke="#E5E7EB" stroke-width="1.5"/>

    <!-- Final Stock -->
    <g transform="translate(24, 305)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">Verified Remaining Stock:</text>
      <text x="0" y="60" font-family="Segoe UI, Arial" font-size="40" font-weight="bold" fill="#167c70">30 Units</text>
    </g>

    <!-- Status pill -->
    <g transform="translate(24, 400)">
      <rect width="312" height="60" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <text x="16" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#166534">&#x2713; Auto-Deducted in Lahore POS</text>
      <text x="16" y="46" font-family="Segoe UI, Arial" font-size="12" fill="#15803D">Dispatch slip #TRF-4028 generated</text>
    </g>
  </g>

  <!-- ================= CENTER: DISPATCH IN TRANSIT ================= -->
  <g transform="translate(450, 210)" filter="url(#trfShadow)">
    <rect width="340" height="370" rx="20" fill="#0F2A26"/>
    
    <!-- Center badge -->
    <rect x="70" y="24" width="200" height="28" rx="14" fill="#7AE582"/>
    <text x="170" y="43" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26" text-anchor="middle" letter-spacing="1">VERIFIED DISPATCH SLIP</text>

    <!-- Arrow animation symbol -->
    <g transform="translate(170, 110)" text-anchor="middle">
      <circle cx="0" cy="0" r="34" fill="#167c70"/>
      <text x="0" y="10" font-family="Segoe UI, Arial" font-size="28" font-weight="bold" fill="#FFFFFF">&#8594;</text>
    </g>

    <text x="170" y="180" font-family="Segoe UI, Arial" font-size="26" font-weight="bold" fill="#FFFFFF" text-anchor="middle">10 Units in Transit</text>
    <text x="170" y="206" font-family="Segoe UI, Arial" font-size="14" fill="#7AE582" text-anchor="middle">Wireless Keyboard (SKU: WKB-01)</text>

    <g transform="translate(30, 235)">
      <rect width="280" height="105" rx="12" fill="#FFFFFF" fill-opacity="0.08" stroke="#167c70"/>
      <text x="16" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#E4E2DA">&#8226; Sender: Lahore Store #2</text>
      <text x="16" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#E4E2DA">&#8226; Destination: Karachi Store #1</text>
      <text x="16" y="74" font-family="Segoe UI, Arial" font-size="13" font-weight="600" fill="#E4E2DA">&#8226; Carrier: Inter-City Courier</text>
      <text x="16" y="96" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#7AE582">&#x2713; Barcode Scanned &amp; Logged</text>
    </g>
  </g>

  <!-- ================= RIGHT: KARACHI (RECEIVER) ================= -->
  <g transform="translate(830, 150)" filter="url(#trfShadow)">
    <rect width="360" height="490" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    
    <!-- Header -->
    <path d="M 0 20 Q 0 0 20 0 L 340 0 Q 360 0 360 20 L 360 65 L 0 65 Z" fill="#167c70"/>
    <text x="24" y="40" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF">Karachi Branch (Receiver)</text>
    <rect x="250" y="20" width="90" height="26" rx="13" fill="#FEE2E2"/>
    <text x="295" y="37" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#DC2626" text-anchor="middle">LOW STOCK!</text>

    <!-- Initial Stock -->
    <g transform="translate(24, 90)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">Initial Stock on Hand:</text>
      <text x="0" y="62" font-family="Segoe UI, Arial" font-size="44" font-weight="bold" fill="#DC2626">3 Units (Alert)</text>
    </g>

    <!-- Transfer Action Card -->
    <g transform="translate(24, 185)">
      <rect width="312" height="75" rx="14" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5"/>
      <text x="20" y="32" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#166534">TRANSFER IN:</text>
      <text x="20" y="58" font-family="Segoe UI, Arial" font-size="22" font-weight="bold" fill="#10B981">&#43; 10 Units Received</text>
    </g>

    <line x1="24" y1="285" x2="336" y2="285" stroke="#E5E7EB" stroke-width="1.5"/>

    <!-- Final Stock -->
    <g transform="translate(24, 305)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">Replenished Final Stock:</text>
      <text x="0" y="60" font-family="Segoe UI, Arial" font-size="40" font-weight="bold" fill="#0F2A26">13 Units</text>
    </g>

    <!-- Status pill -->
    <g transform="translate(24, 400)">
      <rect width="312" height="60" rx="12" fill="#F0FDF4" stroke="#BBF7D0"/>
      <text x="16" y="26" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#166534">&#x2713; Auto-Added to Karachi Stock</text>
      <text x="16" y="46" font-family="Segoe UI, Arial" font-size="12" fill="#15803D">Verified by receiving barcode scan</text>
    </g>
  </g>

  <!-- Footnote -->
  <text x="620" y="700" font-family="Segoe UI, Arial" font-size="13" font-style="italic" fill="#6B7280" text-anchor="middle">*Illustrative transfer workflow supported by HulmPOS multi-branch inventory tracking with zero manual spreadsheet copying.</text>
</svg>
`;
    await sharp(Buffer.from(svg), { density: 160 })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('3. Generated crisp Stock Transfer Workflow ->', outPath);
  }

  // =========================================================================
  // 4. BRANCH-WISE SALES COMPARISON CHART
  // =========================================================================
  {
    const outPath = path.join(outDir, 'branch-wise-sales-comparison-chart.webp');
    const svg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="chartShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0f2a26" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Header -->
  <g transform="translate(620, 35)" text-anchor="middle">
    <rect x="-115" y="0" width="230" height="28" rx="14" fill="#167c70" fill-opacity="0.12"/>
    <text x="0" y="19" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#167c70" letter-spacing="1.2">MULTI-BRANCH ANALYTICS</text>
    <text x="0" y="65" font-family="Segoe UI, Arial" font-size="30" font-weight="bold" fill="#0F2A26">Branch-Wise Sales Performance Comparison</text>
    <text x="0" y="95" font-family="Segoe UI, Arial" font-size="16" fill="#4B5563">Illustrative Monthly Revenue Breakdown (Total: Rs. 2,900,000)</text>
  </g>

  <!-- Main Comparison Card -->
  <g transform="translate(60, 145)" filter="url(#chartShadow)">
    <rect width="1120" height="420" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>

    <!-- Branch 1: Karachi -->
    <g transform="translate(45, 40)">
      <div xmlns="http://www.w3.org/1999/xhtml"></div>
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Karachi Branch</text>
      <text x="160" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">&#8226; Flagship Store &#8226; 41.4% of total sales</text>
      <text x="1030" y="18" font-family="Segoe UI, Arial" font-size="22" font-weight="bold" fill="#0F2A26" text-anchor="end">Rs. 1,200,000</text>
      
      <!-- Progress Bar Track -->
      <rect x="0" y="32" width="1030" height="42" rx="10" fill="#F3F4F6"/>
      <!-- Progress Bar Fill -->
      <rect x="0" y="32" width="850" height="42" rx="10" fill="#0F2A26"/>
      <text x="24" y="58" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#7AE582">1,420 Transactions &#8226; Avg Ticket: Rs. 845</text>
    </g>

    <!-- Branch 2: Lahore -->
    <g transform="translate(45, 160)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Lahore Branch</text>
      <text x="150" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">&#8226; Commercial Hub &#8226; 32.8% of total sales</text>
      <text x="1030" y="18" font-family="Segoe UI, Arial" font-size="22" font-weight="bold" fill="#0F2A26" text-anchor="end">Rs. 950,000</text>
      
      <!-- Progress Bar Track -->
      <rect x="0" y="32" width="1030" height="42" rx="10" fill="#F3F4F6"/>
      <!-- Progress Bar Fill -->
      <rect x="0" y="32" width="675" height="42" rx="10" fill="#167c70"/>
      <text x="24" y="58" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#FFFFFF">1,150 Transactions &#8226; Avg Ticket: Rs. 826</text>
    </g>

    <!-- Branch 3: Islamabad -->
    <g transform="translate(45, 280)">
      <text x="0" y="18" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Islamabad Branch</text>
      <text x="175" y="18" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="#6B7280">&#8226; Boutique Outlet &#8226; 25.8% of total sales</text>
      <text x="1030" y="18" font-family="Segoe UI, Arial" font-size="22" font-weight="bold" fill="#0F2A26" text-anchor="end">Rs. 750,000</text>
      
      <!-- Progress Bar Track -->
      <rect x="0" y="32" width="1030" height="42" rx="10" fill="#F3F4F6"/>
      <!-- Progress Bar Fill -->
      <rect x="0" y="32" width="530" height="42" rx="10" fill="#25A18E"/>
      <text x="24" y="58" font-family="Segoe UI, Arial" font-size="14" font-weight="bold" fill="#FFFFFF">890 Transactions &#8226; Avg Ticket: Rs. 842</text>
    </g>
  </g>

  <!-- Bottom Metric Summary Cards -->
  <g transform="translate(60, 595)">
    <!-- Metric 1 -->
    <g transform="translate(0, 0)">
      <rect width="350" height="110" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <text x="24" y="36" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#6B7280" letter-spacing="0.5">TOTAL MONTHLY SALES</text>
      <text x="24" y="74" font-family="Segoe UI, Arial" font-size="28" font-weight="bold" fill="#0F2A26">Rs. 2,900,000</text>
      <text x="24" y="96" font-family="Segoe UI, Arial" font-size="12" fill="#10B981">&#x2713; All 3 branches combined</text>
    </g>

    <!-- Metric 2 -->
    <g transform="translate(385, 0)">
      <rect width="350" height="110" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <text x="24" y="36" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#6B7280" letter-spacing="0.5">CONNECTED BRANCHES</text>
      <text x="24" y="74" font-family="Segoe UI, Arial" font-size="28" font-weight="bold" fill="#167c70">3 Outlets Live</text>
      <text x="24" y="96" font-family="Segoe UI, Arial" font-size="12" fill="#167c70">&#8226; Karachi &#8226; Lahore &#8226; Islamabad</text>
    </g>

    <!-- Metric 3 -->
    <g transform="translate(770, 0)">
      <rect width="350" height="110" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <text x="24" y="36" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#6B7280" letter-spacing="0.5">TIME TO CONSOLIDATE</text>
      <text x="24" y="74" font-family="Segoe UI, Arial" font-size="28" font-weight="bold" fill="#10B981">Instant (1-Click)</text>
      <text x="24" y="96" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">Replaces 2+ hours daily Excel work</text>
    </g>
  </g>
</svg>
`;
    await sharp(Buffer.from(svg), { density: 160 })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('4. Generated crisp Branch-Wise Comparison Chart ->', outPath);
  }

  // =========================================================================
  // 5. SEVEN STEPS INFOGRAPHIC
  // =========================================================================
  {
    const outPath = path.join(outDir, 'seven-steps-multi-branch-retail-organization.webp');
    const svg = `
<svg width="1240" height="840" viewBox="0 0 1240 840" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="stepShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f2a26" flood-opacity="0.07"/>
    </filter>
  </defs>

  <rect width="1240" height="840" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="836" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Header -->
  <g transform="translate(620, 40)" text-anchor="middle">
    <rect x="-110" y="0" width="220" height="28" rx="14" fill="#167c70" fill-opacity="0.12"/>
    <text x="0" y="19" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#167c70" letter-spacing="1.2">IMPLEMENTATION ROADMAP</text>
    <text x="0" y="68" font-family="Segoe UI, Arial" font-size="32" font-weight="bold" fill="#0F2A26">How to Organize Multiple Retail Branches in 7 Steps</text>
    <text x="0" y="100" font-family="Segoe UI, Arial" font-size="16" fill="#4B5563">A practical roadmap to move from disconnected spreadsheets to connected POS operations</text>
  </g>

  <!-- ================= TOP ROW: STEPS 1 TO 4 ================= -->
  <!-- Step 1 -->
  <g transform="translate(45, 160)" filter="url(#stepShadow)">
    <rect width="265" height="295" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">STANDARDIZE</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Master Catalogue</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="13" fill="#4B5563">Create unified item names, SKUs, categories, barcodes, and standard selling prices across every branch.</text>
    
    <rect x="20" y="215" width="225" height="58" rx="10" fill="#F9FAFB"/>
    <text x="32" y="240" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26">&#x2713; Eliminates duplicates</text>
    <text x="32" y="258" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; One barcode, all branches</text>
  </g>

  <!-- Step 2 -->
  <g transform="translate(340, 160)" filter="url(#stepShadow)">
    <rect width="265" height="295" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">2</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">SEGMENT</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Branch Stock</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="13" fill="#4B5563">Maintain separate on-hand stock records for individual locations under one master account.</text>
    
    <rect x="20" y="215" width="225" height="58" rx="10" fill="#F9FAFB"/>
    <text x="32" y="240" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26">&#x2713; Location-specific</text>
    <text x="32" y="258" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Know where stock sits</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(635, 160)" filter="url(#stepShadow)">
    <rect width="265" height="295" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">AUTOMATE</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Record Every Sale</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="13" fill="#4B5563">Ring up all sales through the POS checkout screen so inventory automatically decreases in real time.</text>
    
    <rect x="20" y="215" width="225" height="58" rx="10" fill="#F9FAFB"/>
    <text x="32" y="240" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26">&#x2713; No manual log entry</text>
    <text x="32" y="258" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; 0 unrecorded transactions</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(930, 160)" filter="url(#stepShadow)">
    <rect width="265" height="295" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">COORDINATE</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26">Stock Transfers</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="13" fill="#4B5563">Document inter-branch movements with formal dispatch slips and receiving barcode confirmations.</text>
    
    <rect x="20" y="215" width="225" height="58" rx="10" fill="#F9FAFB"/>
    <text x="32" y="240" font-family="Segoe UI, Arial" font-size="12" font-weight="bold" fill="#0F2A26">&#x2713; Eliminates lost goods</text>
    <text x="32" y="258" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Two-way verification</text>
  </g>

  <!-- ================= BOTTOM ROW: STEPS 5 TO 7 ================= -->
  <!-- Step 5 -->
  <g transform="translate(45, 485)" filter="url(#stepShadow)">
    <rect width="360" height="305" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">5</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">DISCIPLINE</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="20" font-weight="bold" fill="#0F2A26">Standardize Daily Closing</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="14" fill="#4B5563">Establish the exact same end-of-day register closing and cash reconciliation process across every location.</text>
    
    <rect x="20" y="200" width="320" height="85" rx="12" fill="#F9FAFB"/>
    <text x="32" y="228" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#0F2A26">&#x2713; Reconcile cash drawers</text>
    <text x="32" y="248" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Catch cash discrepancies immediately</text>
    <text x="32" y="268" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Review returned merchandise on the spot</text>
  </g>

  <!-- Step 6 -->
  <g transform="translate(440, 485)" filter="url(#stepShadow)">
    <rect width="360" height="305" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <circle cx="45" cy="45" r="22" fill="#0F2A26"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">6</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#167c70" letter-spacing="0.5">ANALYZE</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="20" font-weight="bold" fill="#0F2A26">Review Sales Reports</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="14" fill="#4B5563">Compare sales and business activity across branches regularly to optimize purchasing and inventory distribution.</text>
    
    <rect x="20" y="200" width="320" height="85" rx="12" fill="#F9FAFB"/>
    <text x="32" y="228" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#0F2A26">&#x2713; Compare revenue &amp; margins</text>
    <text x="32" y="248" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Spot top sellers vs slow-moving SKUs</text>
    <text x="32" y="268" font-family="Segoe UI, Arial" font-size="12" fill="#6B7280">&#8226; Reorder based on real data, not hunches</text>
  </g>

  <!-- Step 7 (HERO FEATURED STEP) -->
  <g transform="translate(835, 485)" filter="url(#stepShadow)">
    <rect width="360" height="305" rx="18" fill="#0F2A26"/>
    <circle cx="45" cy="45" r="22" fill="#7AE582"/>
    <text x="45" y="52" font-family="Segoe UI, Arial" font-size="18" font-weight="bold" fill="#0F2A26" text-anchor="middle">7</text>
    <text x="80" y="50" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#7AE582" letter-spacing="0.5">TRANSFORM</text>
    
    <text x="24" y="105" font-family="Segoe UI, Arial" font-size="20" font-weight="bold" fill="#FFFFFF">Use One Connected POS</text>
    <text x="24" y="135" font-family="Segoe UI, Arial" font-size="14" fill="#E4E2DA">Replace disconnected spreadsheets with HulmPOS centralized cloud platform starting at PKR 2,500/mo.</text>
    
    <rect x="20" y="200" width="320" height="85" rx="12" fill="#FFFFFF" fill-opacity="0.1" stroke="#167c70"/>
    <text x="32" y="228" font-family="Segoe UI, Arial" font-size="13" font-weight="bold" fill="#7AE582">&#x2713; All operations unified</text>
    <text x="32" y="248" font-family="Segoe UI, Arial" font-size="12" fill="#FFFFFF">&#8226; 14-day free trial, no card needed</text>
    <text x="32" y="268" font-family="Segoe UI, Arial" font-size="12" fill="#7AE582">&#8226; Cloud access on phone, tablet &amp; PC</text>
  </g>
</svg>
`;
    await sharp(Buffer.from(svg), { density: 160 })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log('5. Generated crisp 7-Steps Roadmap ->', outPath);
  }

  console.log('ALL 5 CRISP HIGH-DPI VISUALS GENERATED SUCCESSFULLY!');
}

generateAllCrispVisuals().catch(console.error);
