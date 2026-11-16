const puppeteer = require('puppeteer-core');

async function verifyAllIssues() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto('http://localhost:3200', { waitUntil: 'networkidle2' });

  console.log('=== 1. VERIFY TAB CONTENT ===');
  // Check default tab (retail)
  const retailCaption = await page.$eval('#panel-retail p', el => el.textContent.trim());
  const retailFeatures = await page.$$eval('#panel-retail h5', els => els.map(e => e.textContent.trim()));
  console.log('Retail Caption:', retailCaption);
  console.log('Retail Features count:', retailFeatures.length);
  console.log('Retail Features:', retailFeatures);

  // Click pharmacy tab
  await page.click('#tab-pharmacy');
  await new Promise(r => setTimeout(r, 400));
  const pharmacyCaption = await page.$eval('#panel-pharmacy p', el => el.textContent.trim());
  const pharmacyFeatures = await page.$$eval('#panel-pharmacy h5', els => els.map(e => e.textContent.trim()));
  console.log('Pharmacy Caption:', pharmacyCaption);
  console.log('Pharmacy Features count:', pharmacyFeatures.length);
  console.log('Pharmacy Features:', pharmacyFeatures);

  // Click restaurant tab
  await page.click('#tab-restaurant');
  await new Promise(r => setTimeout(r, 400));
  const restaurantCaption = await page.$eval('#panel-restaurant p', el => el.textContent.trim());
  const restaurantFeatures = await page.$$eval('#panel-restaurant h5', els => els.map(e => e.textContent.trim()));
  console.log('Restaurant Caption:', restaurantCaption);
  console.log('Restaurant Features count:', restaurantFeatures.length);
  console.log('Restaurant Features:', restaurantFeatures);

  console.log('\n=== 2. VERIFY BENEFITS SECTION ===');
  const benefitsText = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const section = sections.find(s => s.textContent.includes('Benefits of Hulm POS System'));
    if (!section) return null;
    const cards = Array.from(section.querySelectorAll('.grid > div')).map(c => c.textContent.trim());
    return {
      text: section.textContent,
      cardCount: cards.length,
      cards: cards
    };
  });

  console.log('Benefits card count:', benefitsText?.cardCount);
  console.log('Benefits cards:');
  benefitsText?.cards.forEach((c, idx) => console.log(`  ${idx + 1}. ${c}`));
  console.log('Contains "Expense tracking"?:', /expense tracking/i.test(benefitsText?.text || ''));
  console.log('Contains "Employee scheduling"?:', /employee scheduling/i.test(benefitsText?.text || ''));

  console.log('\n=== 3. VERIFY IMAGE SIZES & SRCSET ===');
  const imgData = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      has1920: img.src.includes('w=1920') || (img.srcset && img.srcset.includes('1920w'))
    }));
  });

  const count1920 = imgData.filter(i => i.has1920).length;
  console.log('Total images checked:', imgData.length);
  console.log('Images containing w=1920 or 1920w:', count1920);

  // Scroll down to dashboard tabs and take screenshot
  await page.evaluate(() => {
    const el = document.getElementById('panel-restaurant');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/dashboard_tabs_after.jpg' });

  // Scroll down to benefits section and take screenshot
  await page.evaluate(() => {
    const h2s = Array.from(document.querySelectorAll('h2'));
    const h2 = h2s.find(h => h.textContent.includes('Benefits of Hulm POS'));
    if (h2) h2.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'scratch/benefits_section_after.jpg' });

  await browser.close();
}

verifyAllIssues().catch(console.error);
