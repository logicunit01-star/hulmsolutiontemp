const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function scrape(url, filename) {
  console.log(`Scraping ${url}...`);
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Check if it redirected to home or threw 404
    if (response.status() === 404) {
      console.log(`404 Not Found: ${url}`);
      fs.writeFileSync(filename, "404 NOT FOUND");
      return;
    }

    const text = await page.evaluate(() => {
      const elementsToRemove = document.querySelectorAll('script, style, noscript, iframe, svg, img, nav, header, footer');
      elementsToRemove.forEach(el => el.remove());
      
      const results = [];
      const selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span', 'a', 'label'];
      
      document.querySelectorAll(selectors.join(', ')).forEach(el => {
        const text = el.innerText.trim();
        if (text && text.length > 5) {
          results.push(text);
        }
      });
      
      return Array.from(new Set(results)).join('\n');
    });
    
    fs.writeFileSync(filename, text);
    console.log(`Saved to ${filename}`);
  } catch (e) {
    console.error(`Failed to scrape ${url}:`, e);
  } finally {
    await browser.close();
  }
}

async function run() {
  await scrape('https://hulmsolutions.com/contact/', 'real-contact-scrape.txt');
  await scrape('https://hulmsolutions.com/about/', 'real-about-scrape.txt');
}

run();
