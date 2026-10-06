const fs = require('fs');

function extractText(filename) {
    let html = fs.readFileSync(filename, 'utf-8');
    
    // Remove script and style tags completely
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Find paragraphs and headers
    const regex = /<(h[1-6]|p|li|span|a)[^>]*>(.*?)<\/\1>/gis;
    let match;
    const results = [];
    
    while ((match = regex.exec(html)) !== null) {
        let text = match[2];
        text = text.replace(/<[^>]+>/g, ' '); // remove inner tags
        text = text.replace(/\s+/g, ' ').trim(); // normalize whitespace
        if (text.length > 10) {
            results.push(text);
        }
    }
    
    // Deduplicate
    const unique = [...new Set(results)];
    return unique.join('\n');
}

const contactText = extractText(String.raw`C:\Users\logic-unit\.gemini\antigravity\brain\d520328f-fc8f-4751-9a49-c7e8908e1ef8\.system_generated\steps\227\content.md`);
const pricingText = extractText(String.raw`C:\Users\logic-unit\.gemini\antigravity\brain\d520328f-fc8f-4751-9a49-c7e8908e1ef8\.system_generated\steps\231\content.md`);

fs.writeFileSync('contact-clean.txt', contactText);
fs.writeFileSync('pricing-clean.txt', pricingText);

console.log("Done");
