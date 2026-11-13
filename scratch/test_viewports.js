const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function testViewports() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const b64 = fs.readFileSync('public/images/home/hero-video-poster.webp').toString('base64');
  const imgUrl = 'data:image/webp;base64,' + b64;

  const viewports = [
    { w: 1024, h: 768, name: '1024' },
    { w: 1280, h: 800, name: '1280' },
    { w: 1440, h: 900, name: '1440' },
    { w: 1920, h: 1080, name: '1920' },
    { w: 768, h: 1024, name: '768_tablet' },
    { w: 390, h: 844, name: '390_mobile' }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.w, height: vp.h });

    const html = `
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
          .mark-lime {
            background: linear-gradient(120deg, rgba(122,229,130,0.45) 0%, rgba(122,229,130,0.45) 100%);
            background-repeat: no-repeat;
            background-size: 100% 35%;
            background-position: 0 88%;
          }
        </style>
      </head>
      <body class="bg-white">
        <section class="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-24">
          <div aria-hidden="true" class="bg-grid-fade pointer-events-none absolute inset-0"></div>
          <div class="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
            <div class="relative grid gap-y-6 lg:gap-y-0 lg:grid-cols-12 lg:gap-12 xl:gap-14 lg:items-stretch">
              
              <!-- Left Column -->
              <div id="left-col" class="max-w-2xl lg:col-span-6 flex flex-col justify-center">
                <h1 class="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
                  Best POS Software in Pakistan to run sales, stock and <span class="mark-lime">every branch</span>
                </h1>
                <p class="mt-6 sm:mt-7 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-zinc-600">
                  Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.
                </p>

                <!-- Desktop CTA & Proof -->
                <div class="hidden lg:block mt-6 sm:mt-7">
                  <div class="flex flex-col gap-3 sm:flex-row">
                    <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-[#167c70] transition">
                      Start 14-Day Free Trial →
                    </button>
                    <button class="border border-zinc-200 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium text-base inline-flex items-center gap-2 hover:bg-zinc-50 transition">
                      <span class="text-[#167c70]">▶</span> Watch a Demo
                    </button>
                  </div>

                  <ul class="mt-6 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    <li class="flex items-center gap-2"><span class="text-[#167c70]">✓</span> Multi-branch</li>
                    <li class="flex items-center gap-2"><span class="text-[#167c70]">✓</span> Free 14-day trial</li>
                    <li class="flex items-center gap-2"><span class="text-[#167c70]">✓</span> Easy switch from old POS to HulmPOS</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column (Video) -->
              <div id="right-col" class="relative w-full max-w-xl mx-auto my-2 lg:my-0 lg:col-span-6 lg:max-w-none h-full flex flex-col justify-center">
                <div aria-hidden="true" class="pointer-events-none absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-xl sm:blur-2xl -z-10"></div>
                <div class="relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white p-1 sm:p-2 shadow-[0_15px_35px_-10px_rgba(21,40,37,0.18)] lg:shadow-[0_25px_60px_-15px_rgba(21,40,37,0.22)] flex items-center justify-center">
                  <img src="${imgUrl}" class="w-full h-full object-cover rounded-lg sm:rounded-xl" />
                </div>
              </div>

              <!-- Mobile CTA & Proof (< lg only) -->
              <div class="max-w-2xl lg:hidden">
                <div class="mt-2 sm:mt-4 flex flex-col gap-3 sm:flex-row">
                  <button class="bg-[#0F2A26] text-white px-6 py-3 rounded-lg font-medium text-base">
                    Start 14-Day Free Trial →
                  </button>
                  <button class="border border-zinc-200 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium text-base">
                    Watch a Demo
                  </button>
                </div>
                <ul class="hidden md:flex mt-6 flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <li>✓ Multi-branch</li>
                  <li>✓ Free 14-day trial</li>
                  <li>✓ Easy switch from old POS to HulmPOS</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </body>
      </html>
    `;

    await page.setContent(html);
    const measurements = await page.evaluate(() => {
      const left = document.getElementById('left-col');
      const right = document.getElementById('right-col');
      return {
        leftH: left ? left.offsetHeight : null,
        rightH: right ? right.offsetHeight : null
      };
    });
    console.log(`Viewport ${vp.name}:`, measurements);

    await page.screenshot({ path: `scratch/viewport_${vp.name}.jpg` });
    await page.close();
  }

  await browser.close();
}

testViewports().catch(console.error);
