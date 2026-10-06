const fs = require('fs');
const nav = fs.readFileSync('src/lib/navigation.ts', 'utf8');
const links = [...nav.matchAll(/href:\s*"([^"]+)"/g)].map(m => m[1]);
const routes = fs.readdirSync('src/app', {withFileTypes: true}).filter(d => d.isDirectory()).map(d => d.name);
console.log('NAV LINKS:\n', [...new Set(links)].join('\n'));
console.log('\nAPP ROUTES:\n', routes.join('\n'));
