const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const outDir = path.join(process.cwd(), 'public', 'images', 'uploads', '2026', '11');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function renderSvgToWebp(svgString, filename, width = 1240, height = 760) {
  const filePath = path.join(outDir, filename);
  const buffer = Buffer.from(svgString);
  await sharp(buffer)
    .resize(width, height)
    .webp({ quality: 90, effort: 6 })
    .toFile(filePath);
  console.log(`Generated: ${filePath}`);
}

async function generateAllVisuals() {
  console.log('Generating high-quality food cost blog visuals...');

  // =========================================================================
  // 1. FORMULA INFOGRAPHIC (restaurant-food-cost-formula-infographic.webp)
  // =========================================================================
  const formulaSvg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0F2A26" flood-opacity="0.06"/>
    </filter>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0F2A26"/>
      <stop offset="100%" stop-color="#167C70"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Top Badge & Header -->
  <g transform="translate(620, 42)" text-anchor="middle">
    <rect x="-135" y="0" width="270" height="32" rx="16" fill="#167C70" fill-opacity="0.12"/>
    <text x="0" y="21" font-family="Segoe UI, -apple-system, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70" letter-spacing="1.2">RESTAURANT COSTING ESSENTIALS</text>
    <text x="0" y="70" font-family="Segoe UI, -apple-system, Arial, sans-serif" font-size="32" font-weight="800" fill="#0F2A26">The 3 Core Restaurant Food Cost Formulas</text>
    <text x="0" y="100" font-family="Segoe UI, -apple-system, Arial, sans-serif" font-size="16" fill="#52525B">Step-by-step mathematical model for accurate recipe costing and profitable menu pricing</text>
  </g>

  <!-- Step 1 Card: Recipe Cost -->
  <g transform="translate(60, 175)" filter="url(#shadow)">
    <rect width="345" height="420" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <rect x="24" y="24" width="48" height="48" rx="14" fill="#0F2A26" fill-opacity="0.08"/>
    <text x="48" y="55" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26" text-anchor="middle">1</text>
    
    <text x="24" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70" letter-spacing="1">STEP 1: RECIPE COST</text>
    <text x="24" y="136" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26">Cost Per Serving</text>
    <text x="24" y="165" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#71717A">Sum of all edible ingredient costs</text>

    <!-- Formula Box -->
    <rect x="20" y="195" width="305" height="95" rx="14" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
    <text x="172" y="235" font-family="Consolas, Monaco, monospace" font-size="15" font-weight="700" fill="#0F2A26" text-anchor="middle">Recipe Cost =</text>
    <text x="172" y="265" font-family="Consolas, Monaco, monospace" font-size="14" font-weight="700" fill="#167C70" text-anchor="middle">Sum of Ingredient Costs</text>

    <!-- Example Callout -->
    <g transform="translate(24, 315)">
      <text x="0" y="16" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#0F2A26">ILLUSTRATIVE EXAMPLE:</text>
      <text x="0" y="40" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Chicken (Rs. 78) + Rice (Rs. 30)</text>
      <text x="0" y="62" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">+ Oil, Spices, Dairy (Rs. 47)</text>
      <text x="0" y="90" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800" fill="#0F2A26">= Rs. 155 / serving</text>
    </g>
  </g>

  <!-- Arrow 1 -> 2 -->
  <g transform="translate(415, 370)">
    <circle cx="15" cy="0" r="16" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1.5"/>
    <path d="M 11 -6 L 19 0 L 11 6" fill="none" stroke="#167C70" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Step 2 Card: Food Cost % -->
  <g transform="translate(448, 175)" filter="url(#shadow)">
    <rect width="345" height="420" rx="20" fill="#FFFFFF" stroke="#167C70" stroke-width="2"/>
    <rect x="24" y="24" width="48" height="48" rx="14" fill="#167C70" fill-opacity="0.12"/>
    <text x="48" y="55" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#167C70" text-anchor="middle">2</text>
    
    <text x="24" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70" letter-spacing="1">STEP 2: COST RATIO</text>
    <text x="24" y="136" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26">Food Cost %</text>
    <text x="24" y="165" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#71717A">Share of selling price spent on food</text>

    <!-- Formula Box -->
    <rect x="20" y="195" width="305" height="95" rx="14" fill="#FAF9F5" stroke="#167C70" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="172" y="235" font-family="Consolas, Monaco, monospace" font-size="14" font-weight="700" fill="#0F2A26" text-anchor="middle">Food Cost % =</text>
    <text x="172" y="265" font-family="Consolas, Monaco, monospace" font-size="14" font-weight="700" fill="#167C70" text-anchor="middle">(Cost ÷ Selling Price) × 100</text>

    <!-- Example Callout -->
    <g transform="translate(24, 315)">
      <text x="0" y="16" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#0F2A26">CURRENT SELLING PRICE:</text>
      <text x="0" y="40" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Serving Cost: Rs. 155</text>
      <text x="0" y="62" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Selling Price: Rs. 450</text>
      <text x="0" y="90" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800" fill="#167C70">= (155 ÷ 450) × 100 = 34.4%</text>
    </g>
  </g>

  <!-- Arrow 2 -> 3 -->
  <g transform="translate(803, 370)">
    <circle cx="15" cy="0" r="16" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1.5"/>
    <path d="M 11 -6 L 19 0 L 11 6" fill="none" stroke="#167C70" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Step 3 Card: Menu Price -->
  <g transform="translate(835, 175)" filter="url(#shadow)">
    <rect width="345" height="420" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
    <rect x="24" y="24" width="48" height="48" rx="14" fill="#0F2A26" fill-opacity="0.08"/>
    <text x="48" y="55" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26" text-anchor="middle">3</text>
    
    <text x="24" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70" letter-spacing="1">STEP 3: PRICING TARGET</text>
    <text x="24" y="136" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26">Suggested Menu Price</text>
    <text x="24" y="165" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#71717A">Targeted price for profit margins</text>

    <!-- Formula Box -->
    <rect x="20" y="195" width="305" height="95" rx="14" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
    <text x="172" y="235" font-family="Consolas, Monaco, monospace" font-size="14" font-weight="700" fill="#0F2A26" text-anchor="middle">Menu Price =</text>
    <text x="172" y="265" font-family="Consolas, Monaco, monospace" font-size="14" font-weight="700" fill="#167C70" text-anchor="middle">Cost ÷ Target % (decimal)</text>

    <!-- Example Callout -->
    <g transform="translate(24, 315)">
      <text x="0" y="16" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#0F2A26">30% TARGET FOOD COST:</text>
      <text x="0" y="40" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Serving Cost: Rs. 155</text>
      <text x="0" y="62" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Target Ratio: 0.30</text>
      <text x="0" y="90" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800" fill="#0F2A26">= 155 ÷ 0.30 = Rs. 517</text>
    </g>
  </g>

  <!-- Bottom Banner Note -->
  <g transform="translate(60, 625)">
    <rect width="1120" height="90" rx="16" fill="#0F2A26"/>
    <g transform="translate(30, 26)">
      <circle cx="18" cy="18" r="16" fill="#7AE582"/>
      <path d="M 12 18 L 16 22 L 24 14" fill="none" stroke="#0F2A26" stroke-width="2.5" stroke-linecap="round"/>
      <text x="48" y="15" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Remember: Food Cost % is not Net Profit</text>
      <text x="48" y="38" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#D4D4D8">The remaining 70% gross contribution must cover rent, staff payroll, electricity, gas, delivery fees, packaging and taxes.</text>
    </g>
  </g>
</svg>
`;

  await renderSvgToWebp(formulaSvg, 'restaurant-food-cost-formula-infographic.webp');

  // =========================================================================
  // 2. BIRYANI COST BREAKDOWN (chicken-biryani-ingredient-cost-breakdown.webp)
  // =========================================================================
  const biryaniSvg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="bShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0F2A26" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Top Badge & Header -->
  <g transform="translate(60, 48)">
    <rect x="0" y="0" width="220" height="30" rx="15" fill="#167C70" fill-opacity="0.12"/>
    <text x="110" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#167C70" letter-spacing="1.2" text-anchor="middle">RECIPE COSTING EXAMPLE</text>
    
    <text x="0" y="68" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="800" fill="#0F2A26">Chicken Biryani: Ingredient Cost Breakdown</text>
    <text x="0" y="98" font-family="Segoe UI, Arial, sans-serif" font-size="15" fill="#52525B">Total Recipe Cost: <tspan font-weight="700" fill="#0F2A26">Rs. 155 per serving</tspan> &#8226; Illustrative PKR recipe costing breakdown</text>
  </g>

  <!-- Left: Horizontal Bar Chart -->
  <g transform="translate(60, 175)" filter="url(#bShadow)">
    <rect width="700" height="525" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>

    <text x="35" y="42" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700" fill="#0F2A26">Ingredient Cost Share (% of Rs. 155 total)</text>

    <!-- Bars Container: Max width 420px for 50.3% -> Rs 78 = 380px -->
    <!-- Scale: 78 / 155 * 740 = ~370px -->

    <!-- Item 1: Chicken (Rs. 78, 120g, 50.3%) -->
    <g transform="translate(35, 75)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="#0F2A26">Chicken (120 g)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="#167C70">Rs. 78</text>
      <rect x="270" y="3" width="310" height="24" rx="6" fill="#167C70"/>
      <text x="590" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70">50.3%</text>
    </g>

    <!-- Item 2: Rice (Rs. 30, 150g, 19.4%) -->
    <g transform="translate(35, 135)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="#0F2A26">Rice (150 g)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700" fill="#0F2A26">Rs. 30</text>
      <rect x="270" y="3" width="120" height="24" rx="6" fill="#0F2A26"/>
      <text x="400" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#0F2A26">19.4%</text>
    </g>

    <!-- Item 3: Cooking Oil (Rs. 12, 20ml, 7.7%) -->
    <g transform="translate(35, 195)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Cooking oil (20 ml)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Rs. 12</text>
      <rect x="270" y="3" width="48" height="24" rx="6" fill="#2A9D8F"/>
      <text x="328" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600" fill="#2A9D8F">7.7%</text>
    </g>

    <!-- Item 4: Spices & other (Rs. 12, 7.7%) -->
    <g transform="translate(35, 255)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Spices &amp; other</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Rs. 12</text>
      <rect x="270" y="3" width="48" height="24" rx="6" fill="#E76F51"/>
      <text x="328" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600" fill="#E76F51">7.7%</text>
    </g>

    <!-- Item 5: Yogurt (Rs. 9, 30g, 5.8%) -->
    <g transform="translate(35, 315)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Yogurt (30 g)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Rs. 9</text>
      <rect x="270" y="3" width="36" height="24" rx="6" fill="#457B9D"/>
      <text x="316" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600" fill="#457B9D">5.8%</text>
    </g>

    <!-- Item 6: Onions (Rs. 8, 40g, 5.2%) -->
    <g transform="translate(35, 375)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Onions (40 g)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Rs. 8</text>
      <rect x="270" y="3" width="32" height="24" rx="6" fill="#E9C46A"/>
      <text x="312" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600" fill="#D97706">5.2%</text>
    </g>

    <!-- Item 7: Tomatoes (Rs. 6, 30g, 3.9%) -->
    <g transform="translate(35, 435)">
      <text x="0" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Tomatoes (30 g)</text>
      <text x="210" y="18" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600" fill="#3F3F46">Rs. 6</text>
      <rect x="270" y="3" width="24" height="24" rx="6" fill="#E63946"/>
      <text x="304" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600" fill="#E63946">3.9%</text>
    </g>

    <!-- Footer inside chart -->
    <line x1="35" y1="480" x2="665" y2="480" stroke="#E4E2DA" stroke-width="1"/>
    <text x="35" y="505" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800" fill="#0F2A26">Total Recipe Ingredient Cost</text>
    <text x="665" y="505" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="800" fill="#167C70" text-anchor="end">Rs. 155 / serving</text>
  </g>

  <!-- Right: Strategic Financial Insights Cards -->
  <g transform="translate(785, 175)" filter="url(#bShadow)">
    <rect width="395" height="525" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>

    <g transform="translate(28, 30)">
      <text x="0" y="0" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="800" fill="#0F2A26">Pricing &amp; Margin Analysis</text>
      <text x="0" y="24" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#71717A">How selling price alters food cost ratio</text>
      
      <!-- Scenario A -->
      <rect x="0" y="42" width="339" height="120" rx="14" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="20" y="70" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#52525B">SCENARIO A: CURRENT PRICE</text>
      <text x="20" y="96" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="800" fill="#0F2A26">Rs. 450 Selling Price</text>
      <text x="20" y="122" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Food Cost: <tspan font-weight="700" fill="#E63946">34.4%</tspan> &#8226; Contribution: <tspan font-weight="700" fill="#0F2A26">Rs. 295</tspan></text>
      <text x="20" y="144" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#71717A">Higher food cost percentage</text>

      <!-- Scenario B -->
      <rect x="0" y="180" width="339" height="120" rx="14" fill="#167C70" fill-opacity="0.06" stroke="#167C70" stroke-width="1.5"/>
      <text x="20" y="208" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#167C70">SCENARIO B: TARGET 30% FOOD COST</text>
      <text x="20" y="234" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="800" fill="#0F2A26">Rs. 517 – Rs. 520 Price</text>
      <text x="20" y="260" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#3F3F46">Formula: 155 ÷ 0.30 = <tspan font-weight="700" fill="#167C70">Rs. 516.67</tspan></text>
      <text x="20" y="282" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#167C70" font-weight="600">+Rs. 67 additional gross contribution/dish</text>

      <!-- Important Notice Box -->
      <rect x="0" y="320" width="339" height="135" rx="14" fill="#0F2A26"/>
      <g transform="translate(18, 20)">
        <text x="0" y="0" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#7AE582">EDITORIAL &amp; QA NOTE</text>
        <text x="0" y="24" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#E4E4E7" line-height="1.5">Prices shown are illustrative values for</text>
        <text x="0" y="44" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#E4E4E7">demonstration purposes. Always use actual</text>
        <text x="0" y="64" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#E4E4E7">supplier invoices and edible yields for</text>
        <text x="0" y="84" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#E4E4E7">accurate kitchen costing.</text>
      </g>
    </g>
  </g>
</svg>
`;

  await renderSvgToWebp(biryaniSvg, 'chicken-biryani-ingredient-cost-breakdown.webp');

  // =========================================================================
  // 3. BURGER COMPARISON GRAPHIC (restaurant-menu-item-profitability-comparison.webp)
  // =========================================================================
  const comparisonSvg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0F2A26" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Top Badge & Header -->
  <g transform="translate(620, 42)" text-anchor="middle">
    <rect x="-160" y="0" width="320" height="32" rx="16" fill="#167C70" fill-opacity="0.12"/>
    <text x="0" y="21" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#167C70" letter-spacing="1.2">FOOD COST % VS. CONTRIBUTION MARGIN</text>
    <text x="0" y="70" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="800" fill="#0F2A26">Why a Higher Food Cost % Can Earn More Profit</text>
    <text x="0" y="100" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="#52525B">Comparing Chicken Burger vs. Beef Burger: Cash in bank vs. percentage ratios</text>
  </g>

  <!-- Card 1: Chicken Burger -->
  <g transform="translate(80, 160)" filter="url(#cShadow)">
    <rect width="510" height="430" rx="20" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>

    <g transform="translate(36, 32)">
      <!-- Badge -->
      <rect x="0" y="0" width="145" height="28" rx="14" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="72" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#52525B" text-anchor="middle">ITEM 1: HIGH RATIO</text>

      <text x="0" y="65" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="800" fill="#0F2A26">Chicken Burger</text>
      <text x="0" y="92" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#71717A">Standard casual menu item</text>

      <!-- Metrics Grid -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="210" height="75" rx="12" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
        <text x="18" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="#71717A">SELLING PRICE</text>
        <text x="18" y="56" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26">Rs. 500</text>

        <rect x="225" y="0" width="210" height="75" rx="12" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
        <text x="243" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="#71717A">INGREDIENT COST</text>
        <text x="243" y="56" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#E63946">Rs. 150</text>
      </g>

      <g transform="translate(0, 210)">
        <rect x="0" y="0" width="435" height="65" rx="12" fill="#167C70" fill-opacity="0.08" stroke="#167C70" stroke-width="1"/>
        <text x="20" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#167C70">FOOD COST PERCENTAGE</text>
        <text x="20" y="52" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="800" fill="#167C70">30.0% <tspan font-size="13" font-weight="600" fill="#52525B">(Looks lower &amp; healthier)</tspan></text>
      </g>

      <!-- Gross Contribution -->
      <g transform="translate(0, 290)">
        <rect x="0" y="0" width="435" height="85" rx="14" fill="#FAF9F5" stroke="#0F2A26" stroke-width="1.5"/>
        <text x="24" y="32" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#0F2A26">GROSS CONTRIBUTION AFTER INGREDIENTS</text>
        <text x="24" y="65" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" fill="#0F2A26">Rs. 350 <tspan font-size="14" font-weight="500" fill="#71717A">(Rs. 500 - Rs. 150)</tspan></text>
      </g>
    </g>
  </g>

  <!-- Card 2: Beef Burger -->
  <g transform="translate(650, 160)" filter="url(#cShadow)">
    <rect width="510" height="430" rx="20" fill="#FFFFFF" stroke="#167C70" stroke-width="2"/>

    <g transform="translate(36, 32)">
      <!-- Badge -->
      <rect x="0" y="0" width="165" height="28" rx="14" fill="#7AE582" fill-opacity="0.25"/>
      <text x="82" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#0F2A26" text-anchor="middle">&#9733; MORE CASH PROFIT</text>

      <text x="0" y="65" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="800" fill="#0F2A26">Beef Burger</text>
      <text x="0" y="92" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#71717A">Higher ticket item</text>

      <!-- Metrics Grid -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="210" height="75" rx="12" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
        <text x="18" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="#71717A">SELLING PRICE</text>
        <text x="18" y="56" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#0F2A26">Rs. 800</text>

        <rect x="225" y="0" width="210" height="75" rx="12" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
        <text x="243" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="#71717A">INGREDIENT COST</text>
        <text x="243" y="56" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="800" fill="#E63946">Rs. 280</text>
      </g>

      <g transform="translate(0, 210)">
        <rect x="0" y="0" width="435" height="65" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
        <text x="20" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#B45309">FOOD COST PERCENTAGE</text>
        <text x="20" y="52" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="800" fill="#92400E">35.0% <tspan font-size="13" font-weight="600" fill="#78350F">(Higher percentage!)</tspan></text>
      </g>

      <!-- Gross Contribution -->
      <g transform="translate(0, 290)">
        <rect x="0" y="0" width="435" height="85" rx="14" fill="#0F2A26"/>
        <text x="24" y="32" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#7AE582">GROSS CONTRIBUTION AFTER INGREDIENTS</text>
        <text x="24" y="65" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" fill="#FFFFFF">Rs. 520 <tspan font-size="16" font-weight="700" fill="#7AE582">(+Rs. 170 MORE CASH!)</tspan></text>
      </g>
    </g>
  </g>

  <!-- Bottom Takeaway Bar -->
  <g transform="translate(80, 615)">
    <rect width="1080" height="95" rx="18" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5" filter="url(#cShadow)"/>
    <g transform="translate(30, 24)">
      <circle cx="22" cy="22" r="20" fill="#167C70" fill-opacity="0.12"/>
      <text x="22" y="28" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="800" fill="#167C70" text-anchor="middle">💡</text>
      <text x="56" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800" fill="#0F2A26">Crucial Restaurant Management Lesson:</text>
      <text x="56" y="44" font-family="Segoe UI, Arial, sans-serif" font-size="13.5" fill="#4B5563">Percentages don't pay your electric bills &amp; salaries — cash rupees do. Evaluate both Food Cost % and Contribution Margin.</text>
    </g>
  </g>
</svg>
`;

  await renderSvgToWebp(comparisonSvg, 'restaurant-menu-item-profitability-comparison.webp');

  // =========================================================================
  // 4. MENU ENGINEERING MATRIX (restaurant-menu-engineering-matrix.webp)
  // =========================================================================
  const matrixSvg = `
<svg width="1240" height="760" viewBox="0 0 1240 760" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="mShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#0F2A26" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1240" height="760" rx="24" fill="#FAF9F5"/>
  <rect x="2" y="2" width="1236" height="756" rx="22" fill="none" stroke="#E4E2DA" stroke-width="2"/>

  <!-- Top Badge & Header -->
  <g transform="translate(620, 36)" text-anchor="middle">
    <rect x="-140" y="0" width="280" height="30" rx="15" fill="#167C70" fill-opacity="0.12"/>
    <text x="0" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#167C70" letter-spacing="1.2">PORTFOLIO OPTIMIZATION</text>
    <text x="0" y="66" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="800" fill="#0F2A26">The Restaurant Menu Engineering Matrix</text>
    <text x="0" y="94" font-family="Segoe UI, Arial, sans-serif" font-size="15" fill="#52525B">Analyze dishes by sales popularity (volume) vs. contribution margin (profit per item)</text>
  </g>

  <!-- Matrix Container -->
  <g transform="translate(140, 145)">
    <!-- Y-Axis Label (Popularity) -->
    <g transform="translate(-50, 240) rotate(-90)" text-anchor="middle">
      <text x="0" y="0" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="800" fill="#0F2A26" letter-spacing="1.5">POPULARITY (SALES VOLUME)</text>
      <text x="0" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#71717A">Low Volume &#8594; High Volume</text>
    </g>

    <!-- X-Axis Label (Contribution Margin) -->
    <g transform="translate(480, 520)" text-anchor="middle">
      <text x="0" y="0" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="800" fill="#0F2A26" letter-spacing="1.5">CONTRIBUTION MARGIN (PROFIT PER DISH)</text>
      <text x="0" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#71717A">Low Margin (Rupees) &#8594; High Margin (Rupees)</text>
    </g>

    <!-- Grid Area: 960 x 480 (Each Quadrant is 465 x 225) -->

    <!-- Quadrant 1: PLOWHORSES (Top Left: High Popularity, Low Margin) -->
    <g transform="translate(0, 0)" filter="url(#mShadow)">
      <rect width="465" height="225" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <rect x="20" y="20" width="135" height="26" rx="13" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="87" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="11" font-weight="700" fill="#52525B" text-anchor="middle">HIGH VOL / LOW MARGIN</text>

      <text x="20" y="80" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" fill="#0F2A26">🐎 PLOWHORSES</text>
      <text x="20" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#71717A">Customers love them, but gross margin is tight</text>

      <!-- Action Box -->
      <rect x="20" y="125" width="425" height="80" rx="10" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="35" y="148" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#0F2A26">RECOMMENDED ACTION:</text>
      <text x="35" y="170" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Test small price increases or slight portion adjustments</text>
      <text x="35" y="190" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Re-negotiate ingredient purchasing prices with vendors</text>
    </g>

    <!-- Quadrant 2: STARS (Top Right: High Popularity, High Margin) -->
    <g transform="translate(495, 0)" filter="url(#mShadow)">
      <rect width="465" height="225" rx="16" fill="#FFFFFF" stroke="#167C70" stroke-width="2"/>
      <rect x="20" y="20" width="145" height="26" rx="13" fill="#7AE582" fill-opacity="0.25"/>
      <text x="92" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="11" font-weight="700" fill="#0F2A26" text-anchor="middle">HIGH VOL / HIGH MARGIN</text>

      <text x="20" y="80" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" fill="#167C70">⭐ STARS</text>
      <text x="20" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#71717A">Your most profitable &amp; most ordered dishes</text>

      <!-- Action Box -->
      <rect x="20" y="125" width="425" height="80" rx="10" fill="#167C70" fill-opacity="0.06" stroke="#167C70" stroke-width="1"/>
      <text x="35" y="148" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#167C70">RECOMMENDED ACTION:</text>
      <text x="35" y="170" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#0F2A26">&#8226; Protect recipe consistency and ingredient quality</text>
      <text x="35" y="190" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#0F2A26">&#8226; Highlight prominently on menu &amp; POS quick-keys</text>
    </g>

    <!-- Quadrant 3: DOGS (Bottom Left: Low Popularity, Low Margin) -->
    <g transform="translate(0, 245)" filter="url(#mShadow)">
      <rect width="465" height="225" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <rect x="20" y="20" width="135" height="26" rx="13" fill="#FEE2E2" stroke="#FECACA" stroke-width="1"/>
      <text x="87" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="11" font-weight="700" fill="#991B1B" text-anchor="middle">LOW VOL / LOW MARGIN</text>

      <text x="20" y="80" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" fill="#991B1B">🐕 DOGS</text>
      <text x="20" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#71717A">Costly inventory holding with minimal return</text>

      <!-- Action Box -->
      <rect x="20" y="125" width="425" height="80" rx="10" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="35" y="148" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#991B1B">RECOMMENDED ACTION:</text>
      <text x="35" y="170" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Remove completely to reduce kitchen complexity &amp; spoilage</text>
      <text x="35" y="190" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Or revamp recipe and re-price if strategic necessity</text>
    </g>

    <!-- Quadrant 4: PUZZLES (Bottom Right: Low Popularity, High Margin) -->
    <g transform="translate(495, 245)" filter="url(#mShadow)">
      <rect width="465" height="225" rx="16" fill="#FFFFFF" stroke="#E4E2DA" stroke-width="1.5"/>
      <rect x="20" y="20" width="145" height="26" rx="13" fill="#FEF3C7" stroke="#FDE68A" stroke-width="1"/>
      <text x="92" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="11" font-weight="700" fill="#92400E" text-anchor="middle">LOW VOL / HIGH MARGIN</text>

      <text x="20" y="80" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" fill="#D97706">🧩 PUZZLES</text>
      <text x="20" y="106" font-family="Segoe UI, Arial, sans-serif" font-size="13" fill="#71717A">Highly profitable dishes that rarely get ordered</text>

      <!-- Action Box -->
      <rect x="20" y="125" width="425" height="80" rx="10" fill="#FAF9F5" stroke="#E4E2DA" stroke-width="1"/>
      <text x="35" y="148" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700" fill="#D97706">RECOMMENDED ACTION:</text>
      <text x="35" y="170" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Train servers to actively suggest and recommend this dish</text>
      <text x="35" y="190" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#3F3F46">&#8226; Relocate to top of menu or add appetizing photo</text>
    </g>
  </g>

  <!-- Bottom Mandatory Note -->
  <g transform="translate(140, 695)">
    <text x="480" y="20" font-family="Segoe UI, Arial, sans-serif" font-size="12.5" fill="#71717A" text-anchor="middle">
      <tspan font-weight="700" fill="#0F2A26">Crucial Note:</tspan> Menu engineering classification should be based on actual sales data and contribution margin from your POS reports, not assumptions.
    </text>
  </g>
</svg>
`;

  await renderSvgToWebp(matrixSvg, 'restaurant-menu-engineering-matrix.webp');

  console.log('All 4 crisp visuals successfully rendered to WebP!');
}

generateAllVisuals().catch(console.error);
