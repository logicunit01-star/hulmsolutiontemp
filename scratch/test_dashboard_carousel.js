const path = require('path');
const puppeteer = require(path.join(process.cwd(), 'node_modules', 'puppeteer-core'));

async function testDashboardCarousel() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  const secDesktop = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(x => x.textContent.includes('Powerful POS Dashboard with Easy to Use Interface'));
    return h2 ? h2.closest('section') : null;
  });

  if (secDesktop) {
    await secDesktop.asElement().scrollIntoView();
    await new Promise(r => setTimeout(r, 1000));
    await secDesktop.asElement().screenshot({
      path: 'C:\\Users\\logic-unit\\.gemini\\antigravity\\brain\\d520328f-fc8f-4751-9a49-c7e8908e1ef8\\scratch\\dashboard_carousel_desktop_slide1.png'
    });
    console.log('Saved slide 1 screenshot');

    // Click next button
    const nextBtn = await page.$('button[aria-label="Next dashboard slide"]');
    if (nextBtn) {
      await nextBtn.click();
      await new Promise(r => setTimeout(r, 800));
      await secDesktop.asElement().screenshot({
        path: 'C:\\Users\\logic-unit\\.gemini\\antigravity\\brain\\d520328f-fc8f-4751-9a49-c7e8908e1ef8\\scratch\\dashboard_carousel_desktop_slide2.png'
      });
      console.log('Saved slide 2 screenshot');
    }
  }

  // Mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  const secMobile = await page.evaluateHandle(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(x => x.textContent.includes('Powerful POS Dashboard with Easy to Use Interface'));
    return h2 ? h2.closest('section') : null;
  });

  if (secMobile) {
    await secMobile.asElement().scrollIntoView();
    await new Promise(r => setTimeout(r, 1000));
    await secMobile.asElement().screenshot({
      path: 'C:\\Users\\logic-unit\\.gemini\\antigravity\\brain\\d520328f-fc8f-4751-9a49-c7e8908e1ef8\\scratch\\dashboard_carousel_mobile.png'
    });
    console.log('Saved mobile screenshot');
  }

  await browser.close();
}

testDashboardCarousel().catch(console.error);
