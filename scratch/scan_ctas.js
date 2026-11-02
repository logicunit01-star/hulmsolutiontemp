const fs = require('fs');
const content = fs.readFileSync('src/content/pages/allBlogsData.ts', 'utf8');

// Match any <a> tag in escaped string
const regex = /<a[\s\S]*?<\/a>/gi;
const matches = [...content.matchAll(regex)];

const ctaLinks = matches.filter(m => 
  m[0].includes('button') || 
  m[0].includes('Register') || 
  m[0].includes('wa.me') || 
  m[0].includes('app.hulmsolutions.com') ||
  m[0].includes('wp-block-buttons') ||
  m[0].includes('wp-element-button')
);

console.log('Total CTA button elements found in allBlogsData:', ctaLinks.length);

ctaLinks.forEach((m, idx) => {
  const hrefMatch = m[0].match(/href=\\?["']([^\\"']+)/i);
  const href = hrefMatch ? hrefMatch[1] : 'unknown';
  const text = m[0].replace(/<[^>]+>/g, '').replace(/\\n/g, ' ').trim().slice(0, 90);
  console.log(`${idx + 1}. [${href}] -> "${text}"`);
});
