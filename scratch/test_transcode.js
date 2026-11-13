const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function transcode() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const videoPath = 'C:/Users/logic-unit/Desktop/hulm pos version/hulmsolutions/public/videos/hulm-pos-hero.webm';
  await page.goto('file:///' + videoPath.replace(/\\/g, '/'));
  await page.waitForSelector('video');

  console.log('Starting transcode...');
  const base64Data = await page.evaluate(async () => {
    const v = document.querySelector('video');
    v.pause();
    v.currentTime = 0;
    await new Promise(r => v.onseeked = r);

    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');

    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9',
      videoBitsPerSecond: 1000000 // 1 Mbps for 720p 10s = ~1.2 MB
    });

    const chunks = [];
    recorder.ondataavailable = e => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    const donePromise = new Promise(resolve => {
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(blob);
      };
    });

    recorder.start(100);
    v.play();

    let lastDraw = 0;
    const draw = () => {
      if (v.ended || v.paused) return;
      ctx.drawImage(v, 0, 0, 1280, 720);
      requestAnimationFrame(draw);
    };
    draw();

    await new Promise(r => v.onended = r);
    recorder.stop();

    return donePromise;
  });

  fs.writeFileSync('public/videos/hulm-pos-hero-720p.webm', base64Data, 'base64');
  console.log('Finished transcode. File size:', fs.statSync('public/videos/hulm-pos-hero-720p.webm').size);
  await browser.close();
}

transcode().catch(console.error);
