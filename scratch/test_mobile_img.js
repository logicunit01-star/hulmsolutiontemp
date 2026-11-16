const puppeteer = require('puppeteer-core');

async function testMobile() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  const imageRequests = [];
  page.on('request', req => {
    if (req.resourceType() === 'image') {
      imageRequests.push(req.url());
    }
  });

  try {
    await page.goto('http://localhost:3200', { waitUntil: 'networkidle2', timeout: 15000 });
  } catch (e) {
    console.error('Goto error:', e.message);
  }

  console.log('Total image requests:', imageRequests.length);
  imageRequests.forEach(url => console.log(url));

  // Check the DOM images
  const domImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      currentSrc: img.currentSrc,
      src: img.src,
      sizes: img.sizes,
      naturalWidth: img.naturalWidth,
      clientWidth: img.clientWidth
    }));
  });

  console.log('\nDOM Images rendered:');
  domImages.forEach(img => {
    console.log({
      currentSrc: img.currentSrc?.slice(0, 100),
      src: img.src?.slice(0, 80),
      sizes: img.sizes,
      naturalWidth: img.naturalWidth,
      clientWidth: img.clientWidth
    });
  });

  await browser.close();
}

testMobile().catch(console.error);
