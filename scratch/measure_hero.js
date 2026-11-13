const puppeteer = require('puppeteer-core');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const heroStats = await page.evaluate(() => {
    const leftCol = document.querySelector('section .grid > div:first-child');
    const rightCol = document.querySelector('section .grid > div:nth-child(2)');
    const leftRect = leftCol ? leftCol.getBoundingClientRect() : null;
    const rightRect = rightCol ? rightCol.getBoundingClientRect() : null;
    return { leftRect, rightRect };
  });
  console.log('Hero dimensions:', heroStats);

  await page.screenshot({ path: 'scratch/current_homepage_hero.jpg' });
  await browser.close();
}

main().catch(console.error);
