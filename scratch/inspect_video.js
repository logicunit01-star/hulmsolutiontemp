const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const videoPath = 'C:/Users/logic-unit/.gemini/antigravity/brain/3d5f53fe-2f85-43ab-8e43-a9b8202b4fc2/.user_uploaded/media_1794575804167_87d96c86.webm';
  const fileUrl = 'file:///' + videoPath.replace(/\\/g, '/');

  await page.goto(fileUrl);
  await page.waitForSelector('video');

  const meta = await page.evaluate(async () => {
    const v = document.querySelector('video');
    return {
      duration: v.duration,
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight,
      currentSrc: v.currentSrc
    };
  });
  console.log('Video metadata:', meta);

  // Seek to 0.1s and capture poster
  await page.evaluate(async () => {
    const v = document.querySelector('video');
    v.currentTime = 0.1;
    await new Promise(r => v.onseeked = r);
  });

  const posterPath = path.resolve('scratch/video_poster.webp');
  // Use canvas to export clean webp/jpg poster of exact video dimensions
  await page.evaluate(() => {
    const v = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/webp', 0.85);
  }).then(dataUrl => {
    const base64Data = dataUrl.replace(/^data:image\/webp;base64,/, "");
    fs.writeFileSync(posterPath, base64Data, 'base64');
    console.log('Saved poster to', posterPath);
  });

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
