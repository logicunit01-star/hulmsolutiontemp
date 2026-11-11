const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('.next/server/app/blogs.html', 'utf8'));

console.log('H2s on /blogs/:');
$('h2').slice(0, 5).each((i, el) => console.log(`  [${i+1}] ${$(el).text().trim()}`));
