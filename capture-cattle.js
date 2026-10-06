const puppeteer = require('puppeteer-core');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    console.log('Capturing Cattle Management (/cattle-management/)...');
    await page.goto('https://hulmsolutions.com/cattle-management/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait for videos or animations to load
    await new Promise(r => setTimeout(r, 6000));
    await page.screenshot({ path: 'cattle-actual-screenshot.jpg', fullPage: true });
    
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    console.log('Done.');
  }
}

capture();
