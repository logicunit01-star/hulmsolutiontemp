const puppeteer = require('puppeteer-core');

async function checkSite() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const viewports = [
    { w: 1440, h: 900, name: 'desktop_1440' },
    { w: 1280, h: 800, name: 'desktop_1280' },
    { w: 1024, h: 768, name: 'desktop_1024' },
    { w: 768, h: 1024, name: 'tablet_768' },
    { w: 390, h: 844, name: 'mobile_390' }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.w, height: vp.h });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    // Wait 1.5s for idle callback and video play
    await new Promise(r => setTimeout(r, 1500));

    const data = await page.evaluate(() => {
      const h1 = document.querySelector('section h1');
      const leftCol = h1 ? h1.parentElement : null;
      const rightCol = leftCol ? leftCol.nextElementSibling : null;
      const video = document.querySelector('section video');
      const poster = document.querySelector('section img');

      return {
        left: leftCol ? { w: leftCol.offsetWidth, h: leftCol.offsetHeight } : null,
        right: rightCol ? { w: rightCol.offsetWidth, h: rightCol.offsetHeight } : null,
        videoPlaying: video ? (!video.paused && video.currentTime > 0) : false,
        videoSrc: video ? video.currentSrc : null,
        videoDimensions: video ? { w: video.videoWidth, h: video.videoHeight } : null
      };
    });

    console.log(`Viewport ${vp.name}:`, data);
    await page.screenshot({ path: `scratch/site_${vp.name}.jpg` });
    await page.close();
  }

  await browser.close();
}

checkSite().catch(console.error);
