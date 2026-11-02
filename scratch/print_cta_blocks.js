const fs = require('fs');
const content = fs.readFileSync('src/content/pages/allBlogsData.ts', 'utf8');

// Find all occurrences with surrounding 200 chars
const regex = /(<div[^>]*wp-block-buttons[\s\S]*?<\/div>[\s\S]*?<\/div>|<a[^>]*wp-block-buttons-is-layout-flex[\s\S]*?<\/a>|<div[^>]*has-ast-global-color-6[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/gi;

let m;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  count++;
  console.log(`=== BLOCK ${count} ===`);
  console.log(m[0].slice(0, 300));
}
console.log('Total found:', count);
