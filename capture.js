const puppeteer = require('puppeteer-core');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    console.log('Capturing About...');
    await page.goto('https://hulmsolutions.com/about-us/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: 'about-screenshot.jpg', fullPage: true });

    console.log('Capturing Contact...');
    await page.goto('https://hulmsolutions.com/contact-us/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: 'contact-screenshot.jpg', fullPage: true });
    
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
    console.log('Done.');
  }
}

capture();
