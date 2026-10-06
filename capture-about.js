const puppeteer = require('puppeteer-core');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    console.log('Capturing About (/about/)...');
    // We will not wait for networkidle2 as it might hang. Just wait for domcontentloaded
    await page.goto('https://hulmsolutions.com/about/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait a few seconds for images to load
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({ path: 'about-actual-screenshot.jpg', fullPage: true });
    
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    console.log('Done.');
  }
}

capture();
