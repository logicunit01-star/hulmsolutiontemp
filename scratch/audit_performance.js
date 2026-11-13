const puppeteer = require('puppeteer-core');

async function auditPerformance() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Track network requests
  let initialBytes = 0;
  let videoBytes = 0;
  let posterBytes = 0;
  const requests = [];

  const client = await page.target().createCDPSession();
  await client.send('Network.enable');

  client.on('Network.loadingFinished', (event) => {
    requests.push(event);
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Evaluate performance metrics
  const metrics = await page.evaluate(async () => {
    return new Promise((resolve) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcpEntry = entries[entries.length - 1];
        
        const nav = performance.getEntriesByType('navigation')[0];
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(p => p.name === 'first-contentful-paint')?.startTime;

        // Check CLS
        let clsValue = 0;
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) {
            if (!e.hadRecentInput) clsValue += e.value;
          }
        }).observe({ type: 'layout-shift', buffered: true });

        setTimeout(() => {
          resolve({
            fcp: Math.round(fcp || 0),
            lcp: Math.round(lcpEntry ? lcpEntry.startTime : 0),
            lcpElement: lcpEntry?.element?.tagName || 'UNKNOWN',
            domContentLoaded: Math.round(nav ? nav.domContentLoadedEventEnd : 0),
            cls: clsValue
          });
        }, 500);
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // Fallback if observer already fired
      setTimeout(() => {
        resolve({ note: 'timed out waiting for observer' });
      }, 3000);
    });
  });

  console.log('Performance Metrics:', metrics);
  await browser.close();
}

auditPerformance().catch(console.error);
