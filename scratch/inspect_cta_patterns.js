const fs = require('fs');
const content = fs.readFileSync('src/content/pages/allBlogsData.ts', 'utf8');

// Find all occurrences of has-ast-global-color-6-background-color or wp-block-columns or buttons
const blocks = content.match(/<div[^>]*has-ast-global-color-6-background-color[\s\S]*?<\/div>\s*<\/div>/gi) || [];
console.log('Total has-ast-global-color-6 blocks:', blocks.length);

const animated = content.match(/animated-pos-button/g) || [];
console.log('Total animated-pos-button:', animated.length);

const flexButtons = content.match(/wp-block-buttons-is-layout-flex/g) || [];
console.log('Total wp-block-buttons-is-layout-flex:', flexButtons.length);
