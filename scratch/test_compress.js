const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function testCompress() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  
  const videoPath = 'C:/Users/logic-unit/Desktop/hulm pos version/hulmsolutions/public/videos/hulm-pos-hero.webm';
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  await page.waitForSelector('video');

  const result = await page.evaluate(async () => {
    const v = document.querySelector('video');
    
    // Test MediaRecorder support
    const types = [
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm'
    ];
    const supported = types.filter(t => MediaRecorder.isTypeSupported(t));
    return { supported };
  });
  console.log('Supported recorder types:', result);
  await browser.close();
}

testCompress().catch(console.error);
