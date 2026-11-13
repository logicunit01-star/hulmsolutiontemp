const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function testLayout() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Test layout in HTML
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-[1280px] mx-auto">
        <h2 class="text-xl font-bold mb-4">Option A: object-cover (cropped) vs Option B: card container h-full with contain/proportional</h2>
        
        <!-- Grid matching height -->
        <div class="grid grid-cols-12 gap-12 items-stretch border p-6 rounded-xl">
          <!-- Left side -->
          <div class="col-span-6 flex flex-col justify-between">
            <h1 class="text-[44px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium">Start 14-Day Free Trial</button>
              <button class="border border-zinc-300 px-6 py-3 rounded-lg font-medium">Watch a Demo</button>
            </div>
            <div class="mt-6 flex gap-6 text-sm text-zinc-600 font-medium">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
              <span>✓ Easy switch</span>
            </div>
          </div>

          <!-- Right side: exact same height as left side -->
          <div class="col-span-6 h-full flex flex-col">
            <div class="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white flex items-center justify-center">
              <img src="file:///C:/Users/logic-unit/Desktop/hulm pos version/hulmsolutions/public/images/home/hero-video-poster.webp" 
                   class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(testHtml);
  await page.screenshot({ path: 'scratch/test_cover.jpg' });

  // Now let's test Option C: what if the columns are balanced or the container is styled with object-contain
  const testHtml2 = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-[1280px] mx-auto">
        <div class="grid grid-cols-12 gap-12 items-stretch border p-6 rounded-xl">
          <!-- Left side -->
          <div class="col-span-6 flex flex-col justify-between">
            <h1 class="text-[44px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-6 text-lg leading-8 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium">Start 14-Day Free Trial</button>
              <button class="border border-zinc-300 px-6 py-3 rounded-lg font-medium">Watch a Demo</button>
            </div>
            <div class="mt-6 flex gap-6 text-sm text-zinc-600 font-medium">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
              <span>✓ Easy switch</span>
            </div>
          </div>

          <!-- Right side: exact same height as left side with contain inside showcase frame -->
          <div class="col-span-6 h-full flex items-center justify-center">
            <div class="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white flex items-center justify-center p-2">
              <img src="file:///C:/Users/logic-unit/Desktop/hulm pos version/hulmsolutions/public/images/home/hero-video-poster.webp" 
                   class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(testHtml2);
  await page.screenshot({ path: 'scratch/test_contain_card.jpg' });

  // Option D: Seamless video without border card, where the video's height equals left height
  // To have 16:9 video height = 464px, width would be 464 * 16 / 9 = 825px.
  // In a 12-col grid, col-span-5 left, col-span-7 right (or col-span-5.5 / 6.5)
  const testHtml3 = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-[1280px] mx-auto">
        <div class="grid grid-cols-12 gap-8 items-center border p-6 rounded-xl">
          <!-- Left side (5 cols) -->
          <div class="col-span-5">
            <h1 class="text-[38px] font-bold leading-[1.18] text-[#0F2A26]">
              Best POS Software in Pakistan to run sales, stock and every branch
            </h1>
            <p class="mt-5 text-base leading-7 text-zinc-600">
              Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
            </p>
            <div class="mt-6 flex gap-3">
              <button class="bg-[#0F2A26] text-white px-5 py-2.5 rounded-lg font-medium text-sm">Start 14-Day Free Trial</button>
              <button class="border border-zinc-300 px-5 py-2.5 rounded-lg font-medium text-sm">Watch a Demo</button>
            </div>
            <div class="mt-5 flex gap-4 text-xs text-zinc-600 font-medium">
              <span>✓ Multi-branch</span>
              <span>✓ Free 14-day trial</span>
              <span>✓ Easy switch</span>
            </div>
          </div>

          <!-- Right side: 7 cols, video height naturally matches left height! -->
          <div class="col-span-7 flex items-center justify-center">
            <div class="relative w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white">
              <img src="file:///C:/Users/logic-unit/Desktop/hulm pos version/hulmsolutions/public/images/home/hero-video-poster.webp" 
                   class="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(testHtml3);
  await page.screenshot({ path: 'scratch/test_proportional_grid.jpg' });

  await browser.close();
}

testLayout().catch(console.error);
