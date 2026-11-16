const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

async function convert() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();

  const files = [
    {
      in: path.join(__dirname, '../public/images/home/dashboard/retail-pos-overview.png'),
      out: path.join(__dirname, '../public/images/home/dashboard/retail-pos-overview.webp'),
      w: 1024,
      h: 647
    },
    {
      in: path.join(__dirname, '../public/images/home/dashboard/restaurant-pos-overview-diagram.png'),
      out: path.join(__dirname, '../public/images/home/dashboard/restaurant-pos-overview-diagram.webp'),
      w: 1024,
      h: 639
    },
    {
      in: path.join(__dirname, '../public/images/home/dashboard/pharmacy-pos-overview.png'),
      out: path.join(__dirname, '../public/images/home/dashboard/pharmacy-pos-overview.webp'),
      w: 1024,
      h: 650
    }
  ];

  for (const item of files) {
    const dataUrl = 'data:image/png;base64,' + fs.readFileSync(item.in).toString('base64');
    await page.setViewport({ width: item.w, height: item.h, deviceScaleFactor: 1 });
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;overflow:hidden;"><img src="${dataUrl}" style="width:${item.w}px;height:${item.h}px;display:block;"></body></html>`);
    await page.screenshot({
      path: item.out,
      type: 'webp',
      quality: 85
    });
    console.log('Converted', item.out, 'size:', fs.statSync(item.out).size);
  }

  await browser.close();
}

convert().catch(console.error);
