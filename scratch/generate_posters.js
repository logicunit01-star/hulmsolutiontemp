const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function makePoster() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const videoPath = path.resolve('public/videos/hulm-pos-hero.webm');
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  await page.waitForSelector('video');
  
  await page.evaluate(async () => {
    const v = document.querySelector('video');
    // Seek to a clear initial frame (0.1s or 0.2s where all icons are displayed clearly)
    v.currentTime = 0.2;
    await new Promise(r => v.onseeked = r);
  });

  // Export 1920x1080 webp (quality 0.85)
  const webpData = await page.evaluate(() => {
    const v = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(v, 0, 0);
    return canvas.toDataURL('image/webp', 0.85);
  });
  fs.writeFileSync('public/images/home/hero-video-poster.webp', webpData.replace(/^data:image\/webp;base64,/, ''), 'base64');
  console.log('Saved hero-video-poster.webp');

  // Export jpg as well
  const jpgData = await page.evaluate(() => {
    const v = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(v, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
  });
  fs.writeFileSync('public/images/home/hero-video-poster.jpg', jpgData.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
  console.log('Saved hero-video-poster.jpg');

  await browser.close();
}

makePoster().catch(console.error);
