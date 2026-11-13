const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  const b64 = fs.readFileSync('public/images/home/hero-video-poster.webp').toString('base64');
  const imgUrl = 'data:image/webp;base64,' + b64;
  
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white p-8">
      <div class="max-w-[1280px] mx-auto space-y-12">
        <!-- Option A: items-stretch, card h-full, object-cover -->
        <div>
          <h2 class="text-xl font-bold mb-2">Option A: items-stretch, card h-full, object-cover</h2>
          <div class="grid grid-cols-12 gap-12 items-stretch border p-6 rounded-xl">
            <div class="col-span-6 flex flex-col justify-between py-1">
              <div>
                <h1 class="text-[40px] font-bold leading-[1.18] text-[#0F2A26]">
                  Best POS Software in Pakistan to run sales, stock and every branch
                </h1>
                <p class="mt-6 text-lg leading-8 text-zinc-600">
                  Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
                </p>
              </div>
              <div>
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
            </div>
            <div class="col-span-6 h-full">
              <div class="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white">
                <img src="${imgUrl}" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- Option B: items-stretch, card h-full, object-contain -->
        <div>
          <h2 class="text-xl font-bold mb-2">Option B: items-stretch, card h-full, object-contain (full frame visible)</h2>
          <div class="grid grid-cols-12 gap-12 items-stretch border p-6 rounded-xl">
            <div class="col-span-6 flex flex-col justify-between py-1">
              <div>
                <h1 class="text-[40px] font-bold leading-[1.18] text-[#0F2A26]">
                  Best POS Software in Pakistan to run sales, stock and every branch
                </h1>
                <p class="mt-6 text-lg leading-8 text-zinc-600">
                  Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
                </p>
              </div>
              <div>
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
            </div>
            <div class="col-span-6 h-full">
              <div class="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white flex items-center justify-center p-2">
                <img src="${imgUrl}" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <!-- Option C: col-span-5 left, col-span-7 right with 16:9 proportional video -->
        <div>
          <h2 class="text-xl font-bold mb-2">Option C: col-span-5 left, col-span-7 right with 16:9 natural height</h2>
          <div class="grid grid-cols-12 gap-8 items-center border p-6 rounded-xl">
            <div class="col-span-5">
              <h1 class="text-[36px] font-bold leading-[1.18] text-[#0F2A26]">
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
            <div class="col-span-7">
              <div class="relative w-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xl bg-white">
                <img src="${imgUrl}" class="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(testHtml);
  await page.screenshot({ path: 'scratch/test_comparison_options.jpg', fullPage: true });
  await browser.close();
  console.log('Saved test_comparison_options.jpg');
}
test().catch(console.error);
