# Hulm Solutions — WordPress → Next.js SEO Migration Audit

**Date:** 30 September 2026
**Live site audited:** https://hulmsolutions.com (WordPress + Elementor + Yoast/RankMath)
**Local build audited:** `hulmsolutions/` (Next.js 16.3.4, React 19, App Router, `trailingSlash: true`)
**Method:** Production build of the local repo (`next build && next start`), full crawl of all 58 live sitemap URLs on both sides, compared with the live WordPress HTML captured in `src/content/productionParityData.json` (captured 27 Sep 2026), plus live sitemap/robots checks.

> **Snapshot note:** Page files were being changed while this audit ran (≈ 12:20–12:35 PKT). The numbers reflect the code at that moment, when every page except `/author/` had moved from the WordPress snapshot to React templates.

Evidence files next to this report:

| File | What it contains |
|---|---|
| `page-comparison.csv` | For each of the 58 URLs: live vs local title, description, H1, word count, internal links, schema |
| `keyword-retention.csv` | 94 URL × keyword checks: mentions, and whether the keyword is still in the title/H1 |
| `internal-link-plan.csv` | 50 link rules (sitewide, money page ↔ blog, blog ↔ blog) |
| `missing-wp-assets.txt` | 7 `/wp-content/` files referenced in code but missing from `public/wp-content` |
| `CODEX_PROMPTS.md` | 14 Codex prompts, in order, each with acceptance checks |

---

## 1. Executive summary

The React build **keeps every URL** (58/58 return 200 with self-referencing canonicals), and robots, the sitemaps and the Search Console verification token are carried over correctly. That part of the migration is sound.

The risk is in **what the pages now say and how they link**. Moving pages from the WordPress snapshot to redesigned React templates has changed many of the signals Google ranks them on today:

| Signal | Result | Risk |
|---|---|---|
| URLs kept (200 + self-canonical) | **58 / 58** | ✅ |
| `<title>` changed | **36 / 58** | 🔴 |
| Meta description changed | **36 / 58** materially (41 counting punctuation-only changes) | 🟠 |
| H1 changed | **21 / 58** | 🔴 |
| Body copy cut by ≥ 20 % | **19 pages** (all 12 industry pages, home, features, pricing, industries hub, inventory, mobile POS, `/blog/what-is-pos/`) | 🔴 |
| Primary keyword lost from title | **21** URL-keyword pairs | 🔴 |
| Primary keyword lost from H1 | **16** pairs | 🔴 |
| Pages with **zero** internal links (orphans) | **6** — `/cattle-management-software/`, `/logistics-management-software/`, `/order-management/`, `/website/`, `/zatca/`, `/author/` | 🔴 |
| Pages that lost in-body internal links | **40 / 58** | 🟠 |
| Internal links that trigger a 308 redirect | **111** (all inside blog posts) | 🟠 |
| BreadcrumbList / WebPage / Person schema | Lost on **all 58** | 🟠 |
| Blog titles rewritten (e.g. `- Hulm Insights` suffix) | **13 / 13** posts | 🔴 |
| Blog meta descriptions cut off at 250 characters | **9** posts | 🟠 |
| `og:image` missing | **~40** pages | 🟡 |

**Bottom line:** launching today would likely cost rankings on the commercial "POS for [industry]" pages, `/features/`, `/pricing/`, `/industries/` and the pillar post `/blog/what-is-pos/`. Every item below can be fixed without giving up the new POS-focused design. The rule is: **new layout, same ranking signals.**

---

## 2. What is already right (keep it)

- **Same URLs and trailing-slash policy** as WordPress (`trailingSlash: true`), so there is no site-wide redirect.
- **Self-referencing absolute canonicals** on every page.
- **Legacy sitemap paths kept:** `/sitemap_index.xml`, `/page-sitemap.xml` (45), `/post-sitemap.xml` (13), plus `/sitemap.xml` (59). Search Console's existing sitemap submissions keep working.
- **robots.txt** keeps the WordPress rules and explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). There is one serious exception: see P0-6.
- **Search Console token** `eja9u_sG9…` and **GTM** `GTM-TMMQ565S` are both present.
- **Pages are static (SSG)**, so all content is in the initial HTML. This is good for Google and for AI answer engines.
- **Old slugs redirect** (`/industries/bakery/`, `/industries/salon-spa/`, `/industries/restaurant/`, `/point-of-sale-2/`, `/insights/*`, `/case-studies/*`, laptop case study).
- `/thank-you/` is `noindex, nofollow`.
- The **`/wp-content/` mirror is 99 % complete** (805 of 812 referenced files are present), so indexed image URLs keep resolving.
- **One H1 per page**, no duplicate titles or descriptions.
- Homepage title, description and H1 ("Best POS Software in Pakistan") are identical to live.

---

## 3. Gaps, ranked

### P0: fix before DNS cutover

**P0-1 · Six pages are orphaned; sitewide navigation was cut back.**
The live header "Apps" menu has 17 links and the live footer lists all 12 industries, 9 apps, ZATCA/FBR and 5 locations. On every page this gives each product and industry page roughly 60 inlinks. The new header has 6 product links and no industry list; the footer has 5 industries.
- Inlinks now **0**: cattle-management-software, logistics-management-software, order-management, website, zatca, author.
- Now only **6–7 inlinks** (was ~60): cafe, toys-store, jewellery-shop, electric-store, furniture-store, manufacturing-industries, clothing-store.
- Now **1 inlink**: mobile-pos, vendors-management.

**P0-2 · Titles and H1s on ranked commercial pages were rewritten into marketing copy.**
Examples (live → local):
- `/industries/bakery-pos-system/`: "Bakery POS System & Software | POS System for Bakery" → "Bakery POS Software for Counter & Advance Orders | Hulm". H1 → "Keep counter sales and advance bakery orders in one workflow". "bakery pos system" appears 9 times → **0**.
- `/industries/salon-pos/`: "salon pos" 17 → **0**. `/industries/restaurant-pos/`: "restaurant pos" 12 → **1**.
- `/industries/retail-store/`: "Best POS Systems for Retail Stores | Get Retail POS Free Demo" → "Retail POS Software for Stores & Branches | Hulm".
- `/features/`: "Hulm POS Software Features for Retail & Restaurants & More!" → "POS & Billing Features - Hulm Solutions" (1,132 → 705 words).
- `/pricing/`: "Hulm POS Software Price in Pakistan" → "Hulm POS Pricing | Plans from PKR 2,500" (1,460 → 612 words).
- `/industries/`: "POS Software for All (Point of Sale) POS Industries" → "POS Software by Industry | Retail, Restaurant & More | Hulm".
- `/integration/`: H1 "Hulm POS integration for retail, restaurants, Shopify & more!" → "Connect Your World".
- `/pos-case-studies/`: "POS Case Studies | Real Business Results with Hulm" → "Case Studies - Hulm Solutions".
- Many other titles now have "- Hulm", "| Hulm Solutions" or "- Hulm CRM" appended, which pushes several past 60 characters.

All 21 title losses and 16 H1 losses are listed in `keyword-retention.csv`.

**P0-3 · Industry and money pages lost 40–65 % of their content.**
Industry pages went from ~900–1,450 words to ~380–620. The biggest losses are cafe (1,321 → 478), salon (1,447 → 503), restaurant (1,429 → 581), jewellery (1,288 → 472), toys (1,347 → 515) and electric (1,028 → 399). The homepage lost its comparison table, benefits list, "Why choose Hulm" section, 3-step onboarding, the 10-module grid (including Cattle, Logistics and Mobile POS) and 6 of 12 industries. Keyword mentions dropped on 44 of 94 checks.

**P0-4 · Every blog post's title changed, and 2 posts had their content rewritten.**
- 11 posts use `${post.title} - Hulm Insights` (the H1, not the SEO title). Example: "What is POS debit meaning (Debit Card POS Explained)" → "What is POS Debit Meaning & Debit Card POS Transaction? - Hulm Insights" (71 characters). `best-pos-system-for-retail` gets "- Hulm Solutions" appended.
- Descriptions now come from `excerpt`, cut at 250 characters (9 posts), or are 22–30 characters long (2 posts).
- `/blog/what-is-pos/` (pillar post) is a rewrite: 2,406 → 1,669 words, **15 of 24 internal links gone**, in-article images removed. `/blog/best-pos-system-for-retail/` was also rewritten (2,124 → 1,740 words) and has **no Article schema**.

**P0-5 · Redirect hops.**
- 111 internal links inside blog bodies point to URLs without a trailing slash, because `insights/[slug]/page.tsx` strips the slash with `.replace(/href="(\/[^"#?]+)\/"/g, 'href="$1"')`. Each one costs a 308 hop.
- `next.config.ts` redirect destinations have no trailing slash, so `/industries/bakery/` → `/industries/bakery-pos-system` → `/industries/bakery-pos-system/` is **two hops**. The same happens for `/blog/`, `/insights/*`, `/case-studies/*`, salon-spa and restaurant.
- The blog byline links to `/author/hulm-solutions-editorial-team`, which redirects to `/author/`.

**P0-6 · `robots.ts` blocks `/_next/`.**
`Disallow: /_next/` stops Googlebot from fetching the site's CSS/JS chunks (`/_next/static/*`) and every `next/image` URL (`/_next/image?...`). Google then renders pages without styles (hurting its mobile-usability assessment) and cannot index optimised images. WordPress never blocked its assets. Remove this line. Also add `CCBot` back; live robots.txt allows it.

### P1: fix at launch or in the first week

**P1-1 · Structured data regressed.** WordPress output `WebPage`, `BreadcrumbList`, `ImageObject`, `Person` (author) and `FAQPage` graphs. Local pages output only `Organization` + `WebSite` (plus `Article` on 12 posts and `FAQPage`/`SoftwareApplication` on the homepage). There is no BreadcrumbList anywhere, even though industry pages and posts show visual breadcrumbs. Blog authors changed from `Person` "Aamir Khan" (the live `/author/` H1) to `Organization` "Hulm Editorial Team", which weakens E-E-A-T.

**P1-2 · Blog internal linking is weaker.** WordPress showed a sitewide "latest posts" block (≈5 links per post). The new "Related Articles" block always shows the **same first three posts** from `insightsData`, not posts on the same topic. `/author/` is no longer linked from posts.

**P1-3 · Case studies lost 3–5 contextual links each** to `/pricing/`, `/fbr-integrated-pos-pakistan/`, `/reporting-module/`, the matching industry page and `/order-management/`. Their H1s dropped the "Case Study:" prefix.

**P1-4 · Country pages** (`/pos-software-uae|ksa|qatar|usa/`) kept their titles but local terms were cut: "uae" 27 → 7, "dubai" 9 → 2, "pos system qatar" 8 → 2, "pos software in usa" 3 → 0. They have no `hreflang` (acceptable, but see P2-3).

**P1-5 · Missing `og:image`** on about 40 pages (home, all apps, industries hub, countries, pricing, blogs index). Live pages had one. This affects link previews on WhatsApp, LinkedIn and Facebook, which matter for B2B leads in Pakistan.

**P1-6 · Seven missing assets** in `public/wp-content` (list in `missing-wp-assets.txt`): `Hulm-Products.png`, `Pakistan-Map.png`, 4 Elementor CSS files and the WPO JSON file.

**P1-7 · Internal FAQs were trimmed** (e.g. restaurant ~20 → 6 items, bakery ~14 → 6), and React pages other than home have no `FAQPage` JSON-LD. Google no longer shows FAQ rich results for most commercial sites, but AI answer engines use these Q&As heavily, and the questions match real query variants.

### P2: after launch

1. The Google Tag Manager script waits for a dynamic `import("jquery")` after hydration. This delays tracking, and jQuery adds about 30 KB. Load GTM with `next/script strategy="afterInteractive"` and remove jQuery once the legacy custom tag is fixed in GTM.
2. Root `metadata.title.default` is "Hulm Solutions - Making Every Sale Seamless" and `openGraph.title.default` is "Hulm Solutions". Both are fine as fallbacks, but every page should set its own title (they do today).
3. Add `hreflang` only if you publish region-specific variants. For now, keep each country page self-canonical with `inLanguage: en` and `areaServed` in the schema.
4. The `meta keywords` tag on contact, about and industries does nothing for Google. It is harmless, but you can remove it.
5. `/apps/` is a new URL. Give it a unique title and description (done) and make sure it does not compete with `/features/` for "POS features".
6. Tidy typos inherited from WordPress only where the keyword is unaffected: "Vission" was corrected (fine); "Rrestaurant" in the integration title can be fixed.

---

## 4. Keyword preservation map (keep these per URL)

These are the terms each live page ranks on, taken from its live title, H1 and body copy. **Before launch, check them against a 16-month Google Search Console "Queries × Pages" export.** This audit could not access Search Console.

| URL | Primary keyword (must stay in title + H1 + first 100 words) | Supporting terms (keep in H2s/body) |
|---|---|---|
| `/` | best POS software in Pakistan | POS software, point of sale systems in Pakistan, POS system for small business, FBR compliant POS |
| `/features/` | POS software features | POS system features, retail and restaurant POS features |
| `/pricing/` | POS software price in Pakistan | POS pricing, PKR 2,500/month, free trial |
| `/industries/` | POS software for all industries | point of sale industries |
| `/fbr-integrated-pos-pakistan/` | FBR integrated POS software in Pakistan | FBR POS, FBR invoicing, QR invoice |
| `/mobile-pos/` | best mobile POS system | mobile POS software, POS on phone/tablet |
| `/inventory-management/` | POS inventory management software | inventory control software, cloud-based inventory management |
| `/purchase-orders/` | purchase order management software | purchase order, PO software |
| `/customer-management/` | customer relationship management system | CRM for retail |
| `/order-management/` | order management system | order management software |
| `/vendors-management/` | vendor management system | supplier management |
| `/reporting-module/` | reporting & analytics module | POS reports, POS insights |
| `/logistics-management-software/` | logistics management software | fleet tracking |
| `/cattle-management-software/` | cattle management software | farm/dairy management |
| `/website/` | one-click ecommerce store | online store from inventory |
| `/integration/` | POS integration | restaurant and retail POS integrations, Shopify |
| `/zatca/` | ZATCA-compliant POS software | e-invoicing KSA, FATOORA |
| `/pos-software-ksa/` | point of sale software in Saudi Arabia | POS in KSA |
| `/pos-software-uae/` | point of sale software in UAE | best POS software Dubai |
| `/pos-software-qatar/` | point of sale in Qatar | POS system Qatar, cloud POS Qatar |
| `/pos-software-usa/` | best point of sale software in USA | POS software USA |
| `/industries/retail-store/` | POS systems for retail stores | retail store POS system, retail POS free demo |
| `/industries/restaurant-pos/` | restaurant POS software | restaurant point of sale, best restaurant POS |
| `/industries/pharmacy-store/` | pharmacy point of sale (POS) system | pharmacy POS |
| `/industries/bakery-pos-system/` | bakery POS system | POS system for bakery, bakery POS software |
| `/industries/salon-pos/` | salon & spa POS software | salon POS system, hair/beauty/nail salon POS |
| `/industries/clothing-store/` | POS system for clothing store in Pakistan | clothing store POS |
| `/industries/cafe/` | cafe POS system | cafe point of sale, best cafe POS |
| `/industries/jewellery-shop/` | jewelry POS system | POS system for jewelry store |
| `/industries/electric-store/` | POS system for electric store in Pakistan | electric store POS |
| `/industries/furniture-store/` | POS system for furniture store in Pakistan | furniture store POS |
| `/industries/toys-store/` | toy store POS system | POS for toy store in Pakistan |
| `/industries/manufacturing-industries/` | POS system for manufacturing industries in Pakistan | manufacturing POS |
| `/blog/what-is-pos/` | what is a POS system / what does POS mean | how to use POS |
| `/blog/what-is-pos-debit-meaning/` | POS debit meaning | debit card POS |
| `/blog/what-is-a-pos-purchase/` | what is a POS purchase | POS purchase meaning |
| `/blog/what-is-point-of-sale-transaction/` | point of sale transaction | POS transaction meaning, types |
| `/blog/pos-reconciliation/` | POS reconciliation | reconciliation steps |
| `/blog/best-pos-system-for-retail/` | best POS system for retail stores | retail POS 2026 |
| `/blog/best-point-of-sale-system-for-small-business-in-pakistan/` | best POS system for small business in Pakistan | — |
| `/blog/best-free-pos-software-and-system/` | best free POS software in Pakistan | free POS system |
| `/blog/cloud-pos-software-for-retail-stores/` | cloud POS software for retail stores | retail cloud POS |
| `/blog/how-does-pos-machine-work/` | how does a POS machine work | — |
| `/blog/what-is-pos-skills-understand-pos-skill-meaning/` | POS skills meaning | — |
| `/blog/what-is-a-pos-person-meaning-and-responsibilities/` | POS person meaning | responsibilities |
| `/blog/what-is-pos-experience-12-tips-to-satisfy-your-customers/` | POS experience | improve POS experience |

**Rule for Codex:** the live `title` and `description` for every URL are already stored in `src/content/productionParityData.json → pages[path].title / .description`. Use them as the source of truth; do not rewrite them.

---

## 5. Technical SEO checklist (target state)

| Area | Target | Current local |
|---|---|---|
| Status codes | 58 legacy URLs → 200; legacy aliases → **one** 301/308 hop to the slash URL | 200 ✅, aliases take 2 hops ❌ |
| Canonical | Absolute, self-referencing, trailing slash | ✅ |
| Internal links | Always `/path/` (trailing slash), never a redirected URL | 111 hops ❌ |
| Robots meta | `index, follow, max-image-preview:large, max-snippet:-1` on indexable pages | Missing on React pages (defaults are fine; add for parity) 🟡 |
| Sitemaps | `sitemap_index.xml` → page + post sitemaps with `<lastmod>`; `/sitemap.xml` | No `<lastmod>` 🟡 |
| Schema | Organization, WebSite, WebPage, BreadcrumbList on all pages; SoftwareApplication (home, pricing, features); Article + Person (posts); FAQPage where FAQs are visible; LocalBusiness/areaServed (country pages) | Partial ❌ |
| OG/Twitter | `og:image` 1200×630 on every page | ~40 missing ❌ |
| Images | `alt` on every content image; `next/image` with width/height; keep `/wp-content/uploads/*` URLs | 24 blog images without alt ❌ |
| robots.txt | Never block `/_next/` (CSS, JS, image optimiser) | Blocked ❌ |
| Performance | No WordPress CSS on React pages; GTM via `next/script`; LCP image `priority` | Mostly done; GTM/jQuery 🟡 |
| 404 | Branded 404 with links to home, pricing, industries, blog | ✅ |
| Security headers | HSTS, X-Content-Type-Options, Referrer-Policy (Netlify `_headers`) | Not verified 🟡 |

---

## 6. Internal linking architecture

```
                     ┌──────────── Home: "best POS software in Pakistan" ────────────┐
                     │                                                              │
   Pricing ── FBR POS ── Features ── Mobile POS          Industries hub (12 industry pages)
      │          │          │           │                   │
   Apps/modules (inventory, purchase, vendor, customer, order, reporting, logistics, cattle, website)
      │                                                     │
   Country hubs (USA, KSA+ZATCA, UAE, Qatar)          Case studies ↔ matching industry page
      │
   Blog clusters ──► money pages (2–4 contextual links per post, keyword anchors)
     • Basics: what-is-pos (pillar), how-does-pos-machine-work, cloud-pos
     • Transactions: pos-transaction, pos-purchase, pos-debit, pos-reconciliation
     • Buying: small-business-pakistan, best-free-pos, best-pos-for-retail
     • People/CX: pos-skills, pos-person, pos-experience
```

Rules:
1. The header mega-menu and footer list **every** product page, **all 12** industries, all 4 country pages, ZATCA and FBR.
2. Every industry page links to 3–4 relevant modules, `/pricing/`, `/fbr-integrated-pos-pakistan/` (for Pakistan) and 1–2 blog posts.
3. Every blog post keeps **all of its original in-body links** (from the WordPress HTML), plus: a breadcrumb (Home › Blog › Post), 3 **topic-matched** related posts, and a byline linking to `/author/`.
4. Every case study links to its industry page, `/pricing/` and the modules it mentions.
5. Anchors describe the target ("bakery POS system", not "click here").

`internal-link-plan.csv` lists all 50 concrete rules.

---

## 7. Blog migration spec ("same content, same internal links")

For each of the 13 posts:
- **Title / description:** the exact live values from `productionParityData.json`.
- **H1:** the live H1 (already matches on 11 posts).
- **Body:** the live WordPress article HTML. Keep every heading, image (with alt), table, FAQ and link. Only clean up:
  - Absolute `https://hulmsolutions.com/...` links → root-relative `/.../` (**keep the trailing slash**).
  - TOC links rewritten as `/#anchor` → `#anchor`.
  - Heading `id`s must match the TOC anchors (currently one broken on `best-pos-system-for-retail`: `#integrating-pos-tools`).
- **Restore the WordPress versions of `/blog/what-is-pos/` and `/blog/best-pos-system-for-retail/`** in place of the rewrites. Any new material can be added as extra sections without removing the original.
- **Dates:** keep `datePublished` / `dateModified` from WordPress. Do not bump `dateModified` unless the content actually changes.
- **Schema:** `BlogPosting` + `Person` author (Aamir Khan → `/author/`) + `BreadcrumbList` + `FAQPage` when the post has a visible FAQ.
- **Blog index `/blogs/`:** keep the live title "Latest Insights & Trends | Hulm Solutions POS Blog" and the H1 "Insight That Drives Impact" (or put that keyword phrase in the H1), and list all 13 posts with excerpts.

---

## 8. Launch & monitoring plan

1. **Before cutover:** run Codex prompts 1–13. Then run prompt 14 (the automated parity test) and require 0 failures.
2. **Search Console exports:** export 16 months of Queries × Pages and the Links report. Confirm that every URL with clicks is in the map in section 4.
3. **Cutover:** keep WordPress on a backup host for 30 days. Submit `sitemap_index.xml` in Search Console. Use URL Inspection → "Request indexing" on the 20 highest-traffic URLs.
4. **Monitor days 1–28:** Search Console Pages report (look for new "Not found", "Redirect" and "Duplicate" entries), average position for the 30 primary keywords above, GA4 organic landing-page sessions and trial sign-ups. A drop of more than 20 % in clicks on a URL for 7 days means comparing that page against `productionParityData.json` and restoring what is missing.
5. **Keep the snapshot** (`productionParityData.json`) in the repo as the SEO baseline even after all pages are React.
