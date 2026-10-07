const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  const h1 = await page.$('h1');
  const section = await page.evaluateHandle(el => el.closest('section'), h1);
  await section.screenshot({ path: 'scratch_hero_1280.png' });
  console.log('Saved scratch_hero_1280.png successfully');

  await browser.close();
}

main().catch(console.error);
