const puppeteer = require('puppeteer-core');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  const videoPath = 'C:/Users/logic-unit/.gemini/antigravity/brain/3d5f53fe-2f85-43ab-8e43-a9b8202b4fc2/.user_uploaded/media_1794575804167_87d96c86.webm';
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  const colors = await page.evaluate(() => {
    const v = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(v, 0, 0);
    const getPixel = (x, y) => {
      const p = ctx.getImageData(x, y, 1, 1).data;
      return `rgb(${p[0]}, ${p[1]}, ${p[2]})`;
    };
    return {
      topLeft: getPixel(10, 10),
      topRight: getPixel(v.videoWidth - 10, 10),
      bottomLeft: getPixel(10, v.videoHeight - 10),
      bottomRight: getPixel(v.videoWidth - 10, v.videoHeight - 10),
      topCenter: getPixel(Math.floor(v.videoWidth / 2), 10),
      bottomCenter: getPixel(Math.floor(v.videoWidth / 2), v.videoHeight - 10)
    };
  });
  console.log('Border colors:', colors);
  await browser.close();
}
test().catch(console.error);
