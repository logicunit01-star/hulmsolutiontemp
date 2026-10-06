import re
import sys

def extract_text(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Remove script and style tags
    html = re.sub(r'<script.*?>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style.*?>.*?</style>', '', html, flags=re.DOTALL)
    
    # Find all header and paragraph text
    tags = re.findall(r'<(h[1-6]|p|li|span|a)[^>]*>(.*?)</\1>', html, flags=re.DOTALL)
    
    # Clean up tags and extra whitespace inside text
    results = []
    for tag, text in tags:
        clean_text = re.sub(r'<[^>]+>', ' ', text)
        clean_text = ' '.join(clean_text.split()).strip()
        if len(clean_text) > 10:
            results.append(clean_text)
            
    # Deduplicate
    seen = set()
    dedup = []
    for text in results:
        if text not in seen:
            seen.add(text)
            dedup.append(text)
            
    return '\n'.join(dedup)

def main():
    contact = extract_text(r"C:\Users\logic-unit\.gemini\antigravity\brain\d520328f-fc8f-4751-9a49-c7e8908e1ef8\.system_generated\steps\227\content.md")
    pricing = extract_text(r"C:\Users\logic-unit\.gemini\antigravity\brain\d520328f-fc8f-4751-9a49-c7e8908e1ef8\.system_generated\steps\231\content.md")
    
    with open("contact-clean.txt", "w", encoding="utf-8") as f:
        f.write(contact)
        
    with open("pricing-clean.txt", "w", encoding="utf-8") as f:
        f.write(pricing)
        
    print("Done extracting to contact-clean.txt and pricing-clean.txt")

if __name__ == '__main__':
    main()
