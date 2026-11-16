import fs from 'node:fs';

const paths = [
  'apps/page.tsx',
  'editorial-policy/page.tsx',
  'pos-hardware/page.tsx',
  'pos-software-karachi/page.tsx',
  'pos-software-lahore/page.tsx',
  'pos-software-islamabad/page.tsx',
  'cookie-policy/page.tsx'
];

for (const p of paths) {
  const content = fs.readFileSync('./src/app/' + p, 'utf8');
  const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/);
  const robotsMatch = content.match(/robots:\s*\{([^}]+)\}/);
  console.log(p, 'canonical:', canonicalMatch ? canonicalMatch[1] : 'not found in file', 'robots:', robotsMatch ? robotsMatch[1].replace(/\s+/g, ' ') : 'default');
}
