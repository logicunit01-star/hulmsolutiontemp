const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('.next/server/app/index.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== PRELOADS ===');
$('link[rel="preload"]').each((i, el) => {
  console.log({
    as: $(el).attr('as'),
    href: $(el).attr('href'),
    imageSrcset: $(el).attr('imagesrcset'),
    imageSizes: $(el).attr('imagesizes')
  });
});

console.log('\n=== IMAGES ON HOMEPAGE ===');
$('img').each((i, el) => {
  console.log({
    src: $(el).attr('src'),
    sizes: $(el).attr('sizes'),
    loading: $(el).attr('loading'),
    srcset: $(el).attr('srcset') ? $(el).attr('srcset').slice(0, 120) + '...' : undefined,
    width: $(el).attr('width'),
    height: $(el).attr('height')
  });
});
