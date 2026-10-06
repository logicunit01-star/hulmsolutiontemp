const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function scrape(url, filename) {
  console.log(`Scraping ${url}...`);
  // Launch the local Chrome installation directly
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  
  const page = await browser.newPage();
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Extract visible text
    const text = await page.evaluate(() => {
      // Remove scripts, styles, etc
      const elementsToRemove = document.querySelectorAll('script, style, noscript, iframe, svg, img');
      elementsToRemove.forEach(el => el.remove());
      
      const results = [];
      const selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span', 'a'];
      
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
  await scrape('https://hulmsolutions.com/about-us/', 'about-us-scrape.txt');
  await scrape('https://hulmsolutions.com/pricing/', 'pricing-scrape.txt');
  await scrape('https://hulmsolutions.com/contact-us/', 'contact-us-scrape.txt');
}

run();
