const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function testPadding() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const b64 = fs.readFileSync('public/images/home/hero-video-poster.webp').toString('base64');
  const imgUrl = 'data:image/webp;base64,' + b64;

  // Let's test 3 options:
  // Option 1: border border-transparent, object-cover (fills the entire card height, zero top/bottom padding!)
  // Option 2: border border-transparent, object-contain with scale-110 (scaled up to minimize padding)
  // Option 3: border border-transparent, seamless card (no border, soft shadow or no shadow, tight fit)
  
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        .bg-grid-fade {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        }
      </style>
    </head>
    <body class="bg-white p-8 space-y-12">
      
      <!-- Option 1: border-transparent, object-cover (fills entire height, zero top/bottom padding) -->
      <div>
        <h2 class="text-lg font-bold mb-3">Option 1: border-transparent, object-cover (zero vertical padding, video fills container)</h2>
        <div class="max-w-[1280px] mx-auto grid grid-cols-12 gap-12 items-stretch border p-4">
          <div class="col-span-6 flex flex-col justify-between py-1">
            <h1 class="text-[44px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium">Start 14-Day Free Trial</button>
            </div>
            <div class="mt-6 flex gap-6 text-sm text-zinc-600">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
            </div>
          </div>

          <div class="col-span-6 h-full flex flex-col justify-center">
            <div class="relative w-full h-full overflow-hidden rounded-2xl border border-transparent bg-white shadow-[0_15px_35px_-10px_rgba(21,40,37,0.12)]">
              <img src="${imgUrl}" class="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <!-- Option 2: border-transparent, scale-[1.08] object-contain (reduces padding by 80% without any clipping) -->
      <div>
        <h2 class="text-lg font-bold mb-3">Option 2: border-transparent, scale-[1.12] object-contain</h2>
        <div class="max-w-[1280px] mx-auto grid grid-cols-12 gap-12 items-stretch border p-4">
          <div class="col-span-6 flex flex-col justify-between py-1">
            <h1 class="text-[44px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium">Start 14-Day Free Trial</button>
            </div>
            <div class="mt-6 flex gap-6 text-sm text-zinc-600">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
            </div>
          </div>

          <div class="col-span-6 h-full flex flex-col justify-center">
            <div class="relative w-full h-full overflow-hidden rounded-2xl border border-transparent bg-white shadow-[0_15px_35px_-10px_rgba(21,40,37,0.12)] flex items-center justify-center">
              <img src="${imgUrl}" class="w-full h-full object-contain scale-[1.12] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      <!-- Option 3: border-transparent, shadow-none, seamlessly floating -->
      <div>
        <h2 class="text-lg font-bold mb-3">Option 3: border-transparent, shadow-none, seamless</h2>
        <div class="max-w-[1280px] mx-auto grid grid-cols-12 gap-12 items-stretch border p-4">
          <div class="col-span-6 flex flex-col justify-between py-1">
            <h1 class="text-[44px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium">Start 14-Day Free Trial</button>
            </div>
            <div class="mt-6 flex gap-6 text-sm text-zinc-600">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
            </div>
          </div>

          <div class="col-span-6 h-full flex flex-col justify-center">
            <div class="relative w-full h-full overflow-hidden rounded-2xl border border-transparent flex items-center justify-center">
              <img src="${imgUrl}" class="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

    </body>
    </html>
  `;

  await page.setContent(testHtml);
  await page.screenshot({ path: 'scratch/test_padding_options.jpg', fullPage: true });
  await browser.close();
  console.log('Saved test_padding_options.jpg');
}

testPadding().catch(console.error);
