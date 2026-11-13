const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function check() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  const videoPath = 'C:/Users/logic-unit/.gemini/antigravity/brain/3d5f53fe-2f85-43ab-8e43-a9b8202b4fc2/.user_uploaded/media_1794578607975_5a5a8def.mp4';
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  await page.waitForSelector('video');

  const meta = await page.evaluate(() => {
    const v = document.querySelector('video');
    return {
      duration: v.duration,
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight
    };
  });
  console.log('MP4 metadata:', meta);

  // Capture a frame to see what it looks like
  await page.evaluate(async () => {
    const v = document.querySelector('video');
    v.currentTime = 0.5;
    await new Promise(r => v.onseeked = r);
  });

  const posterData = await page.evaluate(() => {
    const v = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(v, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
  });
  fs.writeFileSync('scratch/mp4_frame_0.5s.jpg', posterData.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
  console.log('Saved mp4_frame_0.5s.jpg');

  // Also export new poster webp
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
  console.log('Updated hero-video-poster.webp');

  await browser.close();
}

check().catch(console.error);
