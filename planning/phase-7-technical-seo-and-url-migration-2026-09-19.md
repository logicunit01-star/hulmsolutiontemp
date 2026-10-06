# Phase 7 — Technical SEO and URL migration

Date: 19 September 2026  
Last verified: 24 September 2026
Status: Development complete; staging/pre-production validation remains

## Scope

This phase compared URLs exposed by the current `hulmsolutions.com` site with the rebuilt Next.js route set, then implemented the technical SEO foundation needed before launch.

## Production URL evidence

The live homepage currently links to these important route families:

- Core: `/`, `/about/`, `/contact/`, `/pricing/`, `/features/`, `/integration/`
- Product capabilities: `/order-management/`, `/purchase-orders/`, `/inventory-management/`, `/vendors-management/`, `/customer-management/`, `/reporting-module/`, `/logistics-management-software/`, `/mobile-pos/`, `/cattle-management-software/`, `/website/`
- Industries: `/industries/` plus twelve industry detail pages
- Compliance and regions: `/fbr-integrated-pos-pakistan/`, `/zatca/`, `/pos-software-ksa`, `/pos-software-qatar/`, `/pos-software-uae/`, `/pos-software-usa/`
- Editorial: `/blogs/`, `/blog/{slug}` and `/pos-case-studies/`
- Legal: `/privacy-policy/` and `/terms-and-conditions/`

The live site also exposes duplicate or outdated routes for the same intent:

- `/industries/bakery/` and `/industries/bakery-pos-system/`
- `/industries/salon-spa/` and `/industries/salon-pos/`
- `/blogs/` and `/blog/{slug}` versus the rebuild's `/insights` family
- `/pos-case-studies/` versus the rebuild's `/case-studies` family
- `/point-of-sale-2/` as a duplicate homepage-like URL

## Canonical route decisions

| Content family | Canonical destination |
| --- | --- |
| Product overview | `/apps` |
| Industry index | `/industries` |
| Bakery | `/industries/bakery-pos-system` |
| Salon / spa | `/industries/salon-pos` |
| Restaurant | `/industries/restaurant-pos` |
| Editorial index | `/blogs` |
| Editorial article | `/blog/{slug}` |
| Case studies | `/pos-case-studies` and `/pos-case-studies/{slug}` |
| Editorial author | `/author/hulm-solutions-editorial-team` |

## Implemented

### Redirect preservation

Permanent redirects were added for:

- `/blog` → `/blogs`
- `/insights` → `/blogs`
- `/insights/:slug*` → `/blog/:slug*`
- `/case-studies` → `/pos-case-studies`
- `/case-studies/:slug*` → `/pos-case-studies/:slug*`
- `/industries/bakery` → `/industries/bakery-pos-system`
- `/industries/salon-spa` → `/industries/salon-pos`
- `/industries/restaurant` → `/industries/restaurant-pos`
- `/point-of-sale-2` → `/`
- legacy author aliases → `/author/hulm-solutions-editorial-team`

The existing `/apps/{module}` permanent redirects remain in place for older nested capability URLs.

### Canonicals

Self-referencing canonical metadata was added to:

- Homepage, product overview, pricing and industry index
- Every industry detail page
- Every capability page
- Compliance and regional pages
- Blog index and all blog articles on the established production URL family
- Case-study index and every case study on the established production URL family
- Privacy policy and terms and conditions
- About, contact, features, integrations and the canonical author page

### Sitemap and robots

- Sitemap contains canonical URLs only, including the restored legal and article routes.
- Redirecting and duplicate URLs are excluded.
- Included route families: core pages, capabilities, industries, compliance, regions, case studies, insights and canonical author.
- `robots.txt` allows the public site, disallows API and Next.js internals, and declares the production host and sitemap.
- Removed build-time `lastModified: now` values that would falsely tell crawlers every page changed on every deployment.

### Structured data

Site-wide JSON-LD now describes:

- `Organization` for Hulm Solutions
- `WebSite` linked to the organization as publisher

The JSON is serialized safely and was parsed successfully from the rendered homepage.

### Internal linking

- Editorial UI links now point directly to `/blogs` and `/blog/{slug}`.
- Case-study UI links now point directly to `/pos-case-studies` and `/pos-case-studies/{slug}`.
- Imported article HTML normalizes old absolute blog links at render time so users and crawlers avoid unnecessary redirect hops.

### Restored launch-critical content

- `/privacy-policy` returns `200` with a self-canonical and the current approved policy content.
- `/terms-and-conditions` returns `200` with a self-canonical and the current approved terms content.
- `/blog/what-is-pos` returns `200` on its established URL with the retained metadata, publication dates and topic intent.
- The restored article uses server-rendered semantic sections, a real comparison table, Article structured data and FAQ structured data supported by visible content.

## Verification results

- `npm run build`: passed with 100 statically generated/SSG pages.
- `npm run lint`: passed with zero errors; 32 non-blocking legacy warnings remain.
- Redirect checks: `/blog`, `/insights`, `/insights/what-is-pos` and `/case-studies` return one-hop `308 Permanent Redirect` responses to their intended canonical URLs.
- Runtime checks: `/blogs`, `/blog/what-is-pos`, `/pos-case-studies`, `/privacy-policy` and `/terms-and-conditions` return `200` with self-canonicals.
- Sitemap checks: restored legal/article URLs are present; `/insights` and the noncanonical `/case-studies` family are absent.
- Article checks: Article and FAQ structured data, publication/modified dates and an HTML table are present in the rendered response.
- Structured data: valid JSON parsing; types found were `Organization` and `WebSite`.
- CommonJS capture/scrape utilities are now excluded from application linting; application type errors and unescaped JSX entities found by the full lint pass were corrected.

## Remaining pre-production gates

The three former content blockers are resolved. The remaining gates depend on production data or owner confirmation rather than page development:

1. Reconcile the URL matrix with Google Search Console, GA4 conversions and backlink exports.
2. Confirm pricing, trial duration, support promises, FBR wording and customer evidence with the product owner.
3. Run the complete crawl against the final staging deployment and resolve any remaining historical URL mismatches.
4. Verify analytics, Search Console ownership, form/trial/phone/WhatsApp conversions and consent behavior.
5. Capture the GEO/LLM prompt baseline and verify production crawler/CDN access.
6. Prepare the final production deployment and rollback procedure. Netlify remains staging only.

## Launch sequence

1. Complete the data and product-owner gates above.
2. Run the complete pre-launch crawl against the final staging deployment URL.
3. Verify response codes, canonical targets, sitemap URLs, metadata, forms, analytics and structured data in that environment.
4. Point the production domain only after the crawl has no unintended 404s or redirect chains and a rollback build is ready.
5. Submit the production sitemap in Google Search Console and monitor indexing, redirects, traffic and leads after launch.

