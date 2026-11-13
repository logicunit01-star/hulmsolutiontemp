const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function captureFrames() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  const videoPath = 'C:/Users/logic-unit/.gemini/antigravity/brain/3d5f53fe-2f85-43ab-8e43-a9b8202b4fc2/.user_uploaded/media_1794575804167_87d96c86.webm';
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  await page.waitForSelector('video');

  for (const t of [0, 2, 5, 8]) {
    await page.evaluate(async (time) => {
      const v = document.querySelector('video');
      v.currentTime = time;
      await new Promise(r => v.onseeked = r);
    }, t);
    const dataUrl = await page.evaluate(() => {
      const v = document.querySelector('video');
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 360;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(v, 0, 0, 640, 360);
      return canvas.toDataURL('image/jpeg', 0.8);
    });
    fs.writeFileSync(`scratch/frame_${t}s.jpg`, dataUrl.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
  }
  await browser.close();
  console.log('Saved frames');
}
captureFrames().catch(console.error);
