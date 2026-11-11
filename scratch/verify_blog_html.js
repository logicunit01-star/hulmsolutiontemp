const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('.next/server/app/blog/restaurant-food-cost-calculator.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- SEO & METADATA ---');
console.log('Title:', $('title').text());
console.log('Title length:', $('title').text().length);
console.log('Meta Description:', $('meta[name="description"]').attr('content'));
console.log('Meta Description length:', ($('meta[name="description"]').attr('content') || '').length);
console.log('Canonical:', $('link[rel="canonical"]').attr('href'));

console.log('\n--- HEADINGS ---');
console.log('H1 count:', $('h1').length);
$('h1').each((i, el) => console.log(`  H1 [${i+1}]:`, $(el).text().trim()));

console.log('H2 count:', $('h2').length);
$('h2').each((i, el) => console.log(`  H2 [${i+1}]:`, $(el).text().trim()));

console.log('\n--- IMAGES ---');
$('img').each((i, el) => {
  const src = $(el).attr('src');
  const alt = $(el).attr('alt');
  if (src && (src.includes('restaurant') || src.includes('biryani'))) {
    console.log(`  Image: ${src}`);
    console.log(`    Alt: ${alt}`);
  }
});

console.log('\n--- SCHEMAS ---');
$('script[type="application/ld+json"]').each((i, el) => {
  try {
    const json = JSON.parse($(el).text());
    if (json['@graph']) {
      console.log('  @graph types:', json['@graph'].map(g => g['@type']));
      const faqNode = json['@graph'].find(g => Array.isArray(g['@type']) ? g['@type'].includes('FAQPage') : g['@type'] === 'FAQPage');
      if (faqNode && faqNode.mainEntity) {
        console.log('  FAQ count in schema:', faqNode.mainEntity.length);
      }
    } else {
      console.log('  Single schema type:', json['@type']);
    }
  } catch(e) {
    console.log('  Schema parse error:', e.message);
  }
});

console.log('\n--- INTERNAL LINKS ---');
const relevantLinks = [];
$('a').each((i, el) => {
  const href = $(el).attr('href');
  if (href && (href.includes('restaurant-pos') || href === '/' || href.includes('hulmsolutions.com') || href.includes('Register'))) {
    relevantLinks.push({ href, text: $(el).text().trim() });
  }
});
console.log('Relevant links count:', relevantLinks.length);
relevantLinks.slice(0, 8).forEach(l => console.log(`  ${l.href} -> "${l.text}"`));
