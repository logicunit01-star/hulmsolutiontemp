const puppeteer = require('puppeteer-core');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    console.log('Capturing Pricing (/pricing/)...');
    await page.goto('https://hulmsolutions.com/pricing/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait a few seconds for images/styles to load
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({ path: 'pricing-actual-screenshot.jpg', fullPage: true });
    
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    console.log('Done.');
  }
}

capture();
