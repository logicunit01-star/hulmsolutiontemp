# Codex prompts: SEO-safe migration of hulmsolutions.com to Next.js

How to use:
1. Copy this folder (`planning/seo-audit-2026-09-30/`) into the repo. It is already there if you are reading this inside the repo.
2. Run the prompts **in order**, one Codex task per prompt. Prompt 1 builds the test that every later prompt must pass.
3. After each prompt, run `npm run build && npm run seo:check`, then commit.

Paste this **context block** at the top of every prompt (or add it to `AGENTS.md` once):

```
CONTEXT (read first)
- Repo: Next.js 16 App Router site replacing the WordPress site https://hulmsolutions.com. Read node_modules/next/dist/docs before using unfamiliar APIs (see AGENTS.md).
- next.config.ts uses trailingSlash: true. Every internal URL MUST end with "/" (e.g. "/pricing/"), except files and anchors.
- SEO SOURCE OF TRUTH: src/content/productionParityData.json → pages["/path/"] holds the LIVE WordPress title, description, canonical, openGraphImage, publishedTime, modifiedTime, schemas[] and mainHtml (the live page body HTML). Never invent or "improve" a title/description/H1 that exists there unless the prompt says so.
- Audit evidence: planning/seo-audit-2026-09-30/ (SEO-MIGRATION-AUDIT.md, page-comparison.csv, keyword-retention.csv, internal-link-plan.csv).
- Keep the new React/Tailwind design system. Port COPY and LINKS into the React templates/data files; do NOT inject raw Elementor HTML into React pages (the blog body is the one exception, see Prompt 9).
- Do not change any public URL. Do not add pages to the sitemap that are not in productionParityData.json, except /apps/.
- Pakistani English spelling is fine; keep the brand name "Hulm" / "HULM POS".
```

---

## Prompt 1: Build an automated SEO parity check (the guard rail)

```
Goal: create a script that fails the build if any legacy URL loses its SEO signals compared with the live WordPress snapshot.

Create scripts/seo-parity-check.mjs and add "seo:check": "node scripts/seo-parity-check.mjs" to package.json.

The script must:
1. Start (or reuse, if BASE_URL is set) a production server: `next start -p 3999` after `next build`.
2. Load src/content/productionParityData.json and, for EVERY key in pages (58 URLs), fetch http://localhost:3999{path} WITHOUT following redirects.
3. Parse the HTML with cheerio (already a dependency) and check:
   a. status === 200
   b. <title> === pages[path].title (exact, after HTML-entity decode and whitespace trim)
   c. meta[name=description] === pages[path].description (exact, same normalisation)
   d. link[rel=canonical] === "https://hulmsolutions.com" + path
   e. exactly one <h1>; its text contains the primary keyword for that URL. Read the primary keywords from planning/seo-audit-2026-09-30/keyword-retention.csv (first keyword row per URL) and match case-insensitively; "&" and "and" are equivalent.
   f. word count of <main> (excluding script/style/nav/header/footer) >= 0.9 × word count of pages[path].mainHtml. Report the ratio.
   g. every internal link found in pages[path].mainHtml (href starting with "/" or "https://hulmsolutions.com/", excluding "#..." anchors, wp-content files, app.hulmsolutions.com) is present somewhere in the rendered page (compare with the trailing slash normalised).
   h. JSON-LD contains @type BreadcrumbList and WebPage (or a WebPage subtype); blog paths (/blog/...) also contain BlogPosting or Article with author @type Person.
   i. meta[property="og:image"] exists and is absolute.
4. Crawl every page and collect ALL internal <a href>. Fail if any href: has no trailing slash (ignore files, anchors, query strings and external URLs), returns anything other than 200, or points to a URL that redirects.
5. Build an inlink count per legacy URL (count distinct source pages). Fail if any legacy URL has fewer than 3 inlinks.
6. For each redirect in next.config.ts, request the source and assert exactly ONE hop that lands on a 200 URL ending in "/".
7. Print a table (url | check | expected | actual), write planning/seo-audit-2026-09-30/parity-report.json, and exit 1 on any failure. Support --only=<path-prefix> to run a subset.

Do NOT change any page in this task. Run it once and commit the failing report. The failures are the to-do list for the next prompts.
Acceptance: `npm run seo:check` runs end to end and reports failures in categories b, c, e, f, g, h, i and 4–6 (expected at this stage).
```

---

## Prompt 2: One metadata helper; restore every live title and description

```
Goal: every legacy URL outputs the exact live title, description, canonical, robots and OG tags from productionParityData.json.

1. Create src/lib/seo/metadata.ts exporting:
   buildMetadata(path: string, overrides?: Partial<Metadata>): Metadata
   - path is normalised to "/x/y/" form.
   - Reads pages[path] from src/content/productionParityData.json.
   - title: { absolute: page.title }  (no suffix, no template)
   - description: page.description
   - alternates.canonical: path (with trailing slash)
   - robots: index/follow + googleBot { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }, parsed from page.robots
   - openGraph: type "article" for /blog/*, otherwise "website"; title/description from openGraphTitle/Description or title/description; url: path; images: [page.openGraphImage || "/images/home/hero-image-hulm.webp"]; siteName "Hulm Solutions"; locale "en_PK"; for articles add publishedTime/modifiedTime.
   - twitter: { card: "summary_large_image", title, description, images }
   - For paths not in the snapshot (e.g. /apps/, /thank-you/) the page passes explicit values via overrides.
2. Replace the metadata export in EVERY route under src/app (static pages, industries/[industry], blog/[slug], pos-case-studies/[slug], pos-software-*, zatca, fbr, apps, about, contact, features, pricing, integration, privacy, terms, blogs, pos-case-studies, author) with buildMetadata(route). Remove the per-page hard-coded titles and descriptions, the metaTitle/metaDescription use in industriesData/priorityIndustriesData/lib/apps/data.ts, the `${post.title} - Hulm Insights` pattern in src/app/insights/[slug]/page.tsx and the "- Hulm Solutions" suffix for best-pos-system-for-retail.
3. Remove the `keywords` meta field from about/contact/industries (Google ignores it).
4. In src/app/layout.tsx keep metadataBase, verification and icons; set title.default to the homepage live title.

Acceptance: `npm run seo:check` shows 0 failures for checks b, c and d on all 58 URLs. Examples: /industries/bakery-pos-system/ title = "Bakery POS System & Software | POS System for Bakery"; /blog/what-is-pos-debit-meaning/ title = "What is POS debit meaning (Debit Card POS Explained)"; /pricing/ title = "Hulm POS Software Price in Pakistan | Hulm Solutions".
```

---

## Prompt 3: Trailing slashes and single-hop redirects

```
Goal: no internal link or legacy alias costs more than one redirect hop.

1. next.config.ts → redirects(): every destination must end with "/" (e.g. "/industries/bakery-pos-system/", "/blogs/", "/blog/:slug*/" handled so "/insights/what-is-pos" → "/blog/what-is-pos/" in ONE hop, "/pos-case-studies/:slug*/"). Keep permanent: true. Change /author/* aliases to "/author/".
2. Add legacy WordPress aliases that may have backlinks or indexed variants, each 1 hop, permanent:
   /feed/ and /blog/feed/ → /blogs/ ; /blog/:slug/amp/ → /blog/:slug/ ; /category/:path* → /blogs/ ; /tag/:path* → /blogs/ ; /page/:n/ → /blogs/ ; /home/ → / ; /author/aamir-khan/ → /author/ ; /industries/bakery/ and /industries/salon-spa/ (already present; fix the destinations).
   Do NOT redirect unknown URLs to the homepage. They must 404.
3. src/app/insights/[slug]/page.tsx: delete the `.replace(/href="(\/[^"#?]+)\/"/g, 'href="$1"')` step. Replace it with a normaliser that ADDS a trailing slash to root-relative internal paths without a file extension, anchor or query (e.g. /features → /features/, /features#x → /features/#x).
4. Normalise every internal href to a trailing slash in: src/lib/navigation.ts, src/components/layout/footer.tsx, header.tsx, mobile-nav.tsx, region-selector.tsx, not-found.tsx, all components under src/components/**, and all content/data files (content/pages/*.ts, src/content/pages/*.ts, src/lib/**/data.ts). Write a small util `withSlash(href)` in src/lib/utils.ts and use it where hrefs are built dynamically (e.g. `/industries/${slug}/`, `/blog/${slug}/`).
5. Blog byline and Article schema author URL: link to "/author/" (the live, indexed author page), not /author/hulm-solutions-editorial-team.
6. src/app/robots.ts: remove "/_next/" from disallow now. It is a P0 bug: it blocks Googlebot from CSS/JS and /_next/image. Add "CCBot" to the AI allow list.

Acceptance: `npm run seo:check` checks 4 and 6 pass (0 hrefs without a slash; every redirect is exactly 1 hop to a 200 page ending in "/"). `curl -sI localhost:3999/industries/bakery/` returns a single 308 to /industries/bakery-pos-system/.
```

---

## Prompt 4: Restore sitewide navigation and footer links (fixes the 6 orphans)

```
Goal: every product, industry, country and compliance page is linked from the header and/or footer on every page, as on live WordPress.

1. src/lib/navigation.ts: restructure mainNav:
   - "Product" (mega menu, 2 columns):
     Core POS: POS & Billing (/features/), Mobile POS (/mobile-pos/), Ecommerce Store (/website/), Integrations (/integration/), All apps (/apps/)
     Operations: Inventory Management (/inventory-management/), Purchase Orders (/purchase-orders/), Vendor Management (/vendors-management/), Customer Management (/customer-management/), Order Management (/order-management/), Reporting & Analytics (/reporting-module/), Logistics Management (/logistics-management-software/), Cattle Management (/cattle-management-software/)
   - "Industries" (mega menu, all 12): Retail Store POS, Restaurant POS, Pharmacy POS, Bakery POS, Salon & Spa POS, Clothing Store POS, Cafe POS, Jewellery Shop POS, Electric Store POS, Furniture Store POS, Toy Store POS, Manufacturing POS, plus "All industries" (/industries/). Use the exact live slugs: retail-store, restaurant-pos, pharmacy-store, bakery-pos-system, salon-pos, clothing-store, cafe, jewellery-shop, electric-store, furniture-store, toys-store, manufacturing-industries.
   - "FBR Compliance" (/fbr-integrated-pos-pakistan/), "Pricing" (/pricing/), "Customers" (/pos-case-studies/), "Resources" → Blog (/blogs/), Case Studies (/pos-case-studies/), About (/about/)
2. Update src/components/layout/header.tsx (desktop dropdowns must be server-rendered <a> links in the HTML, not injected only on hover by JS) and src/components/navigation/mobile-nav.tsx (same list, accordion).
3. src/components/layout/footer.tsx: columns
   Industries (all 12, anchor "<Name> POS System") | Apps (9 modules + Mobile POS + Ecommerce Store) | Integrations (ZATCA Invoicing Integration → /zatca/, FBR Invoicing Integration → /fbr-integrated-pos-pakistan/, POS Integrations → /integration/) | Locations (Pakistan → /, United States → /pos-software-usa/, Saudi Arabia → /pos-software-ksa/, UAE → /pos-software-uae/, Qatar → /pos-software-qatar/) | Company (About, Contact, Pricing, Features, Blog, Case Studies, Our editorial team → /author/, Privacy Policy, Terms & Conditions).
   Keep the FBR and ZATCA badge images linking to /fbr-integrated-pos-pakistan/ and /zatca/.
4. Keep everything accessible (aria-expanded, focus management), and make sure the menu does not shift layout (CLS).

Acceptance: `npm run seo:check` check 5 passes (every legacy URL has ≥3 inlinks; the product/industry/country pages should now have ~60). The HTML of / contains links to /cattle-management-software/, /logistics-management-software/, /order-management/, /website/, /zatca/ and /author/.
```

---

## Prompt 5: Homepage content parity (keep the new design, restore ranking sections)

```
Goal: bring the homepage back to ≥90% of the live word count and restore every live section that carries keywords, using the new design components.

Source: productionParityData.json → pages["/"].mainHtml. Extract the copy with cheerio in a one-off script, then paste it into content/pages/home.ts as structured data. Do not render raw HTML.

Keep the current hero (H1 "Best POS Software in Pakistan") and add or restore these live sections with their live H2s (light wording tweaks are fine, but keep the keyword phrases):
1. "Start with POS Grow into a Complete business suite" + hero paragraph mentioning "point of sale systems in Pakistan" and "POS system for small business".
2. "One Login. Everything Your Business Runs On." — the full 10-module grid (POS & Billing, Inventory Management, Purchase Orders, Vendor Management, Customer Management, Order Management, Reporting & Analytics, Logistics Management, Mobile POS, Cattle Management). Each card links to its page (trailing slash).
3. "Powerful POS Dashboard with Easy to Use Interface" (the existing carousel can hold it).
4. "Benefits of Hulm POS System" — full live benefit list.
5. "FBR Compliance We Handle It For You" (keep the link to /fbr-integrated-pos-pakistan/).
6. "Why Pakistani Businesses Choose Hulm Over Every Other Option" — restore the comparison TABLE (Hulm vs typical local POS vs global providers vs basic software, 8 rows) as a semantic <table> with <caption>, <th scope>. src/components/home/comparison-table.tsx already exists; use it.
7. "Why Choose Hulm POS System?" + "Key Points For Choosing Hulm POS" bullets.
8. "Industries We Serve" — ALL 12 industries (currently 6), each linking to its page.
9. "Live on Hulm in Under 5 Minutes" — the 3 steps.
10. Testimonials "Pakistani Businesses Run on Hulm…" and the trust logos.
11. "Frequently Asked Questions" — all 8 live questions with full answers, rendered as <details>/<summary> so answers are in the HTML, plus FAQPage JSON-LD built from the same array.
12. Final CTA "Your Competitors Already Have a System. You Can Too For Free." (14-day free trial, no credit card).
Also add two contextual links: "what is a POS system" → /blog/what-is-pos/ and "POS system for small business in Pakistan" → /blog/best-point-of-sale-system-for-small-business-in-pakistan/.

Acceptance: `npm run seo:check --only=/` passes checks e, f and g. "best pos software in pakistan" appears ≥4 times and "point of sale" ≥2 times in <main>. Lighthouse mobile performance stays ≥ 85 (lazy-load images below the fold).
```

---

## Prompt 6: The 12 industry pages (biggest ranking risk)

```
Goal: each /industries/{slug}/ page gets back its live keyword-bearing H1, the full depth of its live content and its live internal links, inside the new industry template.

Files: src/app/industries/[industry]/page.tsx, src/content/pages/industriesData.ts, src/content/pages/priorityIndustriesData.ts.

For EACH of the 12 slugs (retail-store, restaurant-pos, pharmacy-store, bakery-pos-system, salon-pos, clothing-store, cafe, jewellery-shop, electric-store, furniture-store, toys-store, manufacturing-industries):
1. H1 = the live H1 from productionParityData.json pages["/industries/{slug}/"].mainHtml, e.g.:
   bakery → "HULM Bakery POS System The Secret Ingredient to Your Bakery's Success" (acceptable shorter form: "Bakery POS System — The Secret Ingredient to Your Bakery's Success")
   salon → "Salon & Spa POS | Salon POS System and Software"
   restaurant → "Restaurant POS Software — The Complete Point of Sale System for Pakistani Restaurants"
   retail → "Retail Store POS System"; pharmacy → "Pharmacy Point of Sale (POS) Systems"; clothing → "Clothing Store POS System"; cafe → "Cafe POS System Best POS for Cafe Management"; jewellery → "Best Jewelry POS System & Software"; electric → "Electric Store POS System"; furniture → "Best POS System For Furniture Store"; toys → "Toy Store POS System & Software in Pakistan"; manufacturing → "Manufacturing Industry POS System".
   The current benefit-led lines ("Keep counter sales and advance bakery orders in one workflow") become the hero SUB-headline under the H1.
2. Port EVERY live H2/H3 section and its paragraphs/bullets into the data object (overview, problems, features, benefits, how-it-works, why-Hulm, FAQs). Keep the live wording where it contains the primary keyword (see keyword-retention.csv). The target is ≥90% of the live word count. Live counts: retail 1071, restaurant 1429, pharmacy 1021, bakery 1166, salon 1447, clothing 933, cafe 1321, jewellery 1288, electric 1028, furniture 933, toys 1347, manufacturing 898.
3. Restore ALL live FAQs (e.g. restaurant ~10, bakery ~7) as <details> + FAQPage JSON-LD.
4. Internal links (trailing slash): restore every link in the live mainHtml, e.g. restaurant → /inventory-management/, /logistics-management-software/, /pricing/; retail → /customer-management/; pharmacy → /logistics-management-software/; toys → /inventory-management/. Add the rules for industry pages in internal-link-plan.csv (retail → /blog/best-pos-system-for-retail/ and /blog/cloud-pos-software-for-retail-stores/; cafe → /blog/what-is-pos-experience-12-tips-to-satisfy-your-customers/). Every industry page also links to /pricing/ and (for Pakistan) /fbr-integrated-pos-pakistan/.
5. The live pages had an in-page contact form anchor (#contactbakery, #industryretail, …). Keep an element with that same id on the lead form section so old anchor links still land on the form.
6. Replace the "Other industries" block (currently 4 items) with links to all 11 other industries.
7. Visible breadcrumb Home › Industries › {Name} is already there; add the matching BreadcrumbList JSON-LD (Prompt 10 provides the helper; if it doesn't exist yet, create a local one).
8. Image alt text: "{Industry} POS system by Hulm" style, not generic.

Acceptance: `npm run seo:check --only=/industries/` passes e, f and g for all 12 plus /industries/. keyword-retention.csv terms: "bakery pos system" ≥6, "salon pos" ≥10, "restaurant pos" ≥8, "cafe pos" ≥10 mentions.
```

---

## Prompt 7: Features, pricing, industries hub, integration and app/module pages

```
Goal: restore content depth and keywords on the commercial hubs and module pages.

A. /features/ (src/app/features/page.tsx): H1 "Complete POS System Features for Modern Businesses". Port every live section from pages["/features/"].mainHtml (1,132 words live vs 705 now), keep the 6 new feature cards, and add links to each module page plus "/blog/what-is-pos/" ("point of sale system") and "/blog/how-does-pos-machine-work/".
B. /pricing/ (src/app/pricing/page.tsx): H1 must contain "Pricing" (live: "Simple Pricing for Every Business"; acceptable: "Simple POS Software Pricing for Every Business in Pakistan"). Restore the live plan table, the feature comparison, "PKR 2,500/month" wording, all 8 FAQs and the free-trial copy (1,460 → ≥1,300 words). Add a SoftwareApplication + Offer JSON-LD with priceCurrency PKR (only prices that are visible on the page). Link to /fbr-integrated-pos-pakistan/ and /blog/best-free-pos-software-and-system/.
C. /industries/ (src/app/industries/page.tsx + content/pages/industries.ts): H1 "HulmPOS Software for All POS Industries" (or "POS Software for All Industries"). Restore the live intro and the per-industry descriptions for all 12 (1,121 → ≥1,000 words); each card links to its page.
D. /integration/ (src/app/integration/page.tsx): H1 "Hulm POS integration for retail, restaurants, Shopify & more!" Keep "Connect Your World" as the eyebrow/sub-headline. Restore the live integration list text.
E. Module pages rendered by src/components/apps/app-template.tsx with src/lib/apps/data.ts (inventory-management, purchase-orders, customer-management, order-management, vendors-management, reporting-module, logistics-management-software, cattle-management-software, website, mobile-pos):
   - H1 = the live H1 (e.g. inventory: "Cloud Based Inventory Management Software"; order: "Best Order Management Software - Hulm Solutions"; purchase: "Purchase Order Management Software - PO Software by Hulm"; mobile POS: "Best Mobile POS System for Modern Business").
   - Restore sections and FAQs so the word count is ≥90% of live (inventory 1,577, mobile POS 1,729 are currently short). Restore "inventory management software" (live 23 mentions, now 6) and "order management system/software" mentions naturally.
   - Keep the in-page form anchors (#contactinventory, #POcontact, #OMcontact, #contactcustomer, #contactvendor, #contactreport).
   - Cross-link related modules (inventory ↔ purchase-orders ↔ vendors-management; customer-management ↔ order-management; reporting-module ↔ /blog/pos-reconciliation/).
F. /apps/ (new hub): unique title "Hulm POS Apps | Inventory, Purchasing, CRM & More" and a description; link every module. Do not reuse the /features/ H1.

Acceptance: `npm run seo:check` passes e, f and g for all of these URLs.
```

---

## Prompt 8: Country pages, FBR, ZATCA and case studies

```
A. Country pages (src/components/country/country-template.tsx, src/lib/countries/data.ts) for /pos-software-usa|ksa|uae|qatar/:
   - Keep the live H1s (KSA "Best Point of Sale in Saudi Arabia | POS Software in KSA"; Qatar "Point of Sale in Qatar | Cloud POS System Qatar"; UAE "Restaurant, Retail, Grocery & Salon POS Software in UAE"; USA "Best Point of Sale (POS) Software in USA").
   - Restore local-intent wording from the live mainHtml. Current drops: "uae" 27→7, "dubai" 9→2, "pos system qatar" 8→2, "pos software in usa" 3→0. Include the cities, currency, VAT/ZATCA/tax wording and local support details that live had.
   - Add JSON-LD: Organization areaServed = the country; SoftwareApplication with offers in the local currency ONLY if prices are shown; BreadcrumbList.
   - KSA links to /zatca/; all country pages link to /pricing/, /features/ and the top 4 industries.
B. /fbr-integrated-pos-pakistan/ and /zatca/ (compliance-template.tsx): keep the live H1s ("Best FBR Integrated POS Software in Pakistan"; "ZATCA-Compliant POS Solution"). Make sure "FBR integrated POS" and "FBR POS" appear naturally (live 2 and 8 mentions; now 1 and 2). FBR links to /pricing/, /industries/retail-store/ and /blog/best-point-of-sale-system-for-small-business-in-pakistan/.
C. Case studies (src/app/case-studies/[slug]/page.tsx and src/content/pages/caseStudiesData.ts), served at /pos-case-studies/{slug}/:
   - H1 = the live H1 including the "Case Study:" prefix (e.g. "Case Study: Cupcake Queen managed Three Branches with Hulm POS").
   - Restore the 3–5 live in-body links per study (pricing, fbr-integrated-pos-pakistan, reporting-module, order-management, the matching industry page: cupcake → /industries/bakery-pos-system/, laptop store and real tech → /industries/retail-store/ + /industries/electric-store/, Elate → /industries/pharmacy-store/, Farhan → /industries/restaurant-pos/).
   - /pos-case-studies/ index: H1 "POS case studies"; title/description come from buildMetadata.
   - JSON-LD: Article (about the client) + BreadcrumbList.

Acceptance: `npm run seo:check --only=/pos-` and `--only=/zatca/ --only=/fbr` pass.
```

---

## Prompt 9: Blog: same content, same internal links, better linking

```
Goal: all 13 /blog/{slug}/ posts render the LIVE WordPress article content with every heading, image, table, FAQ and internal link, inside the new blog layout.

Files: src/app/insights/[slug]/page.tsx (re-exported by src/app/blog/[slug]/page.tsx), src/content/pages/allBlogsData.ts, src/content/pages/blogs/what-is-pos.ts, src/content/pages/blogs/best-pos-system-for-retail.ts, src/components/blog/blog-detail.tsx, src/content/pages/insightsData.ts.

1. Create scripts/extract-blog-content.mjs that, for each /blog/* key in productionParityData.json, uses cheerio on mainHtml to extract ONLY the article body (the Elementor post-content / theme-post-content widget; exclude header, sidebar "recent posts", author box, comments, share buttons and footer CTA). Then:
   - converts absolute https://hulmsolutions.com/... links to root-relative, keeping the trailing slash (no slash on /wp-content/ files)
   - rewrites TOC links "/#anchor" → "#anchor"
   - makes sure every h2/h3 has an id that matches the TOC anchors (slugify the heading text when the id is missing)
   - keeps <img> src (wp-content URLs), and adds alt = the image title or nearest heading when alt is empty
   - strips Elementor wrapper divs/classes and inline styles, keeping semantic tags (h2–h4, p, ul, ol, li, table, thead, tbody, tr, th, td, img, figure, figcaption, a, strong, em, blockquote)
   - extracts the FAQ block into faq: [{question, answer}]
   - writes src/content/pages/blogs/generated/{slug}.json with { contentHtml, tocItems, faq, heroImage, heroAlt, publishedTime, modifiedTime, h1 }.
2. Point allBlogsData at those generated files for ALL 13 posts, including what-is-pos and best-pos-system-for-retail. Their custom rewrites must be replaced by the WordPress content. Keep the rewrite files under content/pages/blogs/_drafts/ for later content refreshes, and do not import them.
3. Render H1 from the generated h1. Title and description come from buildMetadata (Prompt 2). Show the published and updated dates from WordPress (visible "Updated {modifiedTime}").
4. Byline: "By Aamir Khan" (the live /author/ Person), linking to /author/, with a small author box at the end of the post (image, 2-line bio, LinkedIn).
5. Related Articles: replace `insightsData.slice(0,3)` with topic clusters:
   basics: what-is-pos, how-does-pos-machine-work, cloud-pos-software-for-retail-stores
   transactions: what-is-point-of-sale-transaction, what-is-a-pos-purchase, what-is-pos-debit-meaning, pos-reconciliation
   buying: best-point-of-sale-system-for-small-business-in-pakistan, best-free-pos-software-and-system, best-pos-system-for-retail
   people: what-is-pos-skills-understand-pos-skill-meaning, what-is-a-pos-person-meaning-and-responsibilities, what-is-pos-experience-12-tips-to-satisfy-your-customers
   Show 3 posts from the same cluster (fill from the adjacent cluster if needed). Also add a "Latest posts" list of 5 in the sidebar under the TOC (this replaces the WordPress sidebar links that were lost).
6. Add a "Solutions mentioned in this article" box after the body with 2–4 money-page links, from internal-link-plan.csv (e.g. pos-reconciliation → /reporting-module/; best-pos-system-for-retail → /industries/retail-store/, /pricing/; small-business-pakistan → /, /fbr-integrated-pos-pakistan/, /pricing/).
7. Visible breadcrumb "Home › Blog › {title}": change the "Insights" label to "Blog" and link it to /blogs/.
8. /blogs/ index: H1 "Insight That Drives Impact", with the intro containing "POS blog" / "latest insights and trends". List all 13 posts (title, excerpt, date, image with alt, link with trailing slash).
9. Fix the broken TOC anchor on best-pos-system-for-retail (#integrating-pos-tools).

Acceptance: `npm run seo:check --only=/blog/` passes f and g for all 13 posts (word count ≥90% and every live internal link present; /blog/what-is-pos/ must include all 24 live internal links). No internal link lacks a slash, and there are no images without alt.
```

---

## Prompt 10: Structured data system

```
Goal: restore, and improve on, the Yoast/RankMath schema graph on every page.

1. Create src/components/seo/json-ld.tsx (<JsonLd data={...} /> rendering <script type="application/ld+json"> with "<" escaped) and src/lib/seo/schema.ts with builders:
   organization() — @id https://hulmsolutions.com/#organization, name, url, logo (ImageObject /images/logo/logo.png with width/height), email, telephone "+92-339-111-9259", address (Pakistan, from the contact page), sameAs [LinkedIn, Instagram, YouTube, Facebook, Trustpilot, Product Hunt]
   website() — @id /#website, publisher → organization, inLanguage "en"
   webPage(path, {title, description, type?: "WebPage"|"AboutPage"|"ContactPage"|"CollectionPage"|"FAQPage"}) — @id {url}#webpage, isPartOf /#website, breadcrumb → {url}#breadcrumb, primaryImageOfPage, datePublished/dateModified from productionParityData
   breadcrumbs(path, items[]) — BreadcrumbList @id {url}#breadcrumb
   softwareApplication({offers?}) — name "Hulm POS", applicationCategory "BusinessApplication", operatingSystem "Web, Android, iOS", offers only when prices are visible, aggregateRating ONLY if the reviews are shown on the same page and are genuine
   blogPosting(post) — headline, description, image, datePublished, dateModified, author → person(), publisher → organization, mainEntityOfPage, inLanguage "en"
   person() — @id https://hulmsolutions.com/author/#person, name "Aamir Khan", url /author/, image, sameAs [LinkedIn]
   faqPage(faq[]) — ONLY from FAQs that are visible on the page
2. Emit organization + website once in layout.tsx (already there; switch to the builders). On every page emit webPage + breadcrumbs. Add softwareApplication on /, /features/, /pricing/, /mobile-pos/ and the country pages; blogPosting + person on /blog/*; faqPage wherever a visible FAQ exists; CollectionPage on /blogs/, /industries/, /pos-case-studies/, /apps/; ProfilePage + person on /author/.
3. Combine each page's nodes in one @graph script.
4. Remove the raw WordPress schemas[] output from production-parity-page.tsx (only /author/ still uses it). Rebuild /author/ as a React page (H1 "Aamir Khan", bio, list of his 13 posts with links) with buildMetadata("/author/").

Acceptance: `npm run seo:check` check h passes on all URLs. Google Rich Results Test (run it on the staging URL) reports valid Breadcrumb, Article, FAQ and Software App items with 0 errors.
```

---

## Prompt 11: OG images, robots meta, sitemaps with lastmod

```
1. OG images: when productionParityData has openGraphImage, use it. Otherwise add app/opengraph-image.tsx (root default) and a route-level opengraph-image.tsx for /industries/[industry], /blog/[slug] and the country pages that generates a 1200×630 branded image (title + Hulm logo) with next/og. Add twitter:image.
2. robots meta: buildMetadata already emits index/follow + max-image-preview:large. Confirm /thank-you/ stays noindex,nofollow and /api/* is not linked.
3. Sitemaps (src/app/sitemap.ts, src/lib/legacy-sitemaps.ts): add <lastmod> from productionParityData.modifiedTime (or the content file's updatedAt), keep trailing-slash <loc>s, add <image:image> for the hero image of each page and post (xmlns:image). Add /apps/ and /author/ to page-sitemap.xml. Exclude /thank-you/.
4. robots.ts: REMOVE "/_next/" from disallow. It blocks Googlebot from CSS/JS chunks and from /_next/image, which breaks rendering and image indexing. Keep /wp-admin/, /wp-includes/ and /api/. Add "CCBot" to the AI-crawler allow group (live robots.txt allows it). Keep the sitemap_index.xml and sitemap.xml lines. Add a seo:check assertion that robots.txt does not disallow /_next/.
5. Add public/_headers (Netlify): Strict-Transport-Security max-age=31536000; includeSubDomains; preload, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, and long cache for /_next/static/* and /wp-content/uploads/*.

Acceptance: check i passes; `curl localhost:3999/page-sitemap.xml` shows lastmod on every URL; `curl -I localhost:3999/wp-content/uploads/2025/07/Types-of-POS-Debit-Transactions.webp` returns 200 with a cache header.
```

---

## Prompt 12: Contextual internal links from the link plan

```
Goal: implement every row of planning/seo-audit-2026-09-30/internal-link-plan.csv that previous prompts have not already done.

1. Parse the CSV. For each row whose source is a page (not SITEWIDE), add the link inside that page's body copy in the data file, on a natural phrase that uses the given anchor text. Put no more than one link to the same target per page and none inside headings.
2. Add a tiny build-time test (in seo-parity-check.mjs or a new scripts/link-plan-check.mjs) that fails if any CSV row's link is missing from the rendered source page.
3. Every page that mentions a module or industry by name for the first time should link it (first mention only).

Acceptance: link-plan-check reports 50/50 rules satisfied and seo:check passes.
```

---

## Prompt 13: Assets, images and performance hygiene

```
1. Copy these 7 missing files from the live WordPress server (or remove the references if they are unused) into public/wp-content/ at the same paths:
   /wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css
   /wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css
   /wp-content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css
   /wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css
   /wp-content/uploads/2024/03/Hulm-Products.png
   /wp-content/uploads/2024/03/Pakistan-Map.png
   /wp-content/uploads/wpo/wpo-plugins-tables-list.json (or drop it from robots.ts; it is not needed)
   Once no React page loads WordPress stylesheets, delete the Elementor/Astra CSS from public/wp-content, but KEEP every /wp-content/uploads/* image (they are indexed in Google Images and used in the blog content).
2. Run scripts/audit-production-assets.mjs and make it fail on any referenced /wp-content/* file that is missing.
3. Replace <img> with next/image (width/height, sizes, priority only on the LCP image) in industry, app, blog-card and case-study templates. Keep the original wp-content src so image URLs don't change.
4. Every content image must have descriptive alt text (currently 24 blog images have none).
5. GTM: replace src/components/analytics/google-tag-manager.tsx with next/script (strategy "afterInteractive") that injects the standard GTM snippet for GTM-TMMQ565S, and keep the <noscript> iframe. Remove the jquery dependency. If a GTM custom-HTML tag needs jQuery, fix it inside GTM instead.
6. Add a Lighthouse CI config (lighthouserc.json) for /, /pricing/, /industries/retail-store/ and /blog/what-is-pos/ with budgets: performance ≥ 85 on mobile, SEO = 100, accessibility ≥ 95, CLS < 0.1, LCP < 2.5 s.

Acceptance: audit-production-assets exits 0; Lighthouse budgets pass; `npm ls jquery` shows nothing.
```

---

## Prompt 14: Final pre-launch gate

```
Run and fix until all pass:
1. npm run lint && npm run build
2. npm run seo:check → 0 failures across all 58 legacy URLs + /apps/
3. link-plan-check → 50/50
4. audit-production-assets → 0 missing
5. Lighthouse CI budgets pass
6. Produce planning/seo-audit-2026-09-30/launch-signoff.md with: a table of all 58 URLs (title ✓, description ✓, H1 keyword ✓, words live→new, inlinks, schema types), the redirect map with hop counts, and a list of any intentional differences from WordPress, each with a one-line justification.
Do not deploy; stop after writing the sign-off file.
```

---

### After launch (manual, not Codex)
- Search Console: submit `/sitemap_index.xml`, and request indexing for the top 20 URLs.
- Compare Search Console clicks and position per URL weekly for 4 weeks against the pre-launch export. Any URL down more than 20 % for 7 days → diff it against `productionParityData.json` and restore what is missing.
- Keep WordPress restorable for 30 days.
