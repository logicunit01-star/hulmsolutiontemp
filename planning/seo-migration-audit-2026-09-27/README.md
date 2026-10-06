# Hulm Solutions SEO migration audit

**Audit date:** 27 September 2026  
**Production:** <https://hulmsolutions.com>  
**Staging:** <https://stalwart-toffee-39860f.netlify.app>  
**Decision:** **HOLD production launch until the high-risk content and metadata items are corrected.**

## Scope and evidence

This audit compared every URL in the current production XML sitemaps against the corresponding public staging page. It checked status, final URL, canonical, title, description, H1, heading terms, body vocabulary, word count, schema types, CTAs, internal-link destinations and click depth. It also crawled every staging sitemap page and validated 220 unique internal destinations.

The full route-level evidence is in:

- `page-risk-register.csv` — concise risk classification and reason for all 58 production URLs.
- `page-comparison.csv` — full page-by-page metadata, content, CTA and internal-link comparison.
- `internal-link-checks.csv` — status and canonical behavior for every staging internal destination.
- `page-comparison.json` and `audit-summary.json` — machine-readable evidence.
- `01`–`08` PNG files — accepted production/staging screenshots for the home, pricing, article and retail templates.

Important limitation: this audit can identify the search terms currently signalled by titles, H1s, headings and body copy. It cannot identify **every query already producing impressions, clicks or leads** without a Google Search Console page-and-query export. That export is required before anyone can honestly claim that every performing keyword has been preserved.

## Executive result

| Area | Result | Launch implication |
|---|---:|---|
| Production sitemap URLs tested | 58 | Complete production route set audited. |
| Staging sitemap URLs | 59 | Two new canonical concepts exist: `/apps` and the editorial-team author page; `/author` is represented by a redirect. |
| Final staging `200` responses | 58/58 | Strong. No production sitemap page is missing. |
| Same normalized route | 57/58 | `/author` redirects to `/author/hulm-solutions-editorial-team`. |
| Canonical matches final staging URL | 58/58 | Strong. No canonical conflict found. |
| Exact titles | 0/58 | Unsafe to launch without query-level review; all titles changed during the platform change. |
| Exact H1s | 37/58 | 21 pages changed their primary topic heading. |
| Exact meta descriptions | 14/58 | 44 descriptions changed. Lower direct ranking impact, but CTR can change. |
| Average title-term retention | 76.6% | 21 pages retained less than 80% of production title vocabulary. |
| Average heading-term retention | 42.1% | Supporting topic coverage changed heavily. |
| Average body-vocabulary retention | 48.7% | This is the main content-parity risk. |
| Pages with staging word count below 60% of production | 17 | Home, pricing, features, `what-is-pos`, and most industry pages are materially shorter. |
| Staging internal destinations tested | 220 | 0 broken and 0 redirecting internal links. Strong. |
| Preserved pages with no internal inlink | 3 | `/cattle-management-software`, `/logistics-management-software`, and `/zatca` need crawlable internal links. |
| Risk register | 26 high, 32 medium, 0 low | The staging build is technically sound, but no audited production page is unchanged enough to be treated as low migration risk. |

## What is already safe

1. All 58 production sitemap pages have a relevant staging destination returning `200` after the intended redirect.
2. Every final page has a self-consistent canonical.
3. Staging internal links are clean: the crawl found no broken link and no internal link that first redirects.
4. All audited pages expose a free-trial CTA and a contact or WhatsApp path.
5. Core page content is present in the initial server HTML, so Google and simpler AI crawlers can read it without client-side rendering.
6. `robots.txt` allows crawling and points to the production-domain sitemap. The general allow rule covers AI bots, although production currently names the major AI crawlers explicitly.
7. The rebuilt templates have clearer hierarchy, larger touch targets and more consistent conversion choices than the current WordPress templates.

## High-risk findings

### 1. The homepage changed its search topic too much

The production title is `POS | Best POS Software | Point of Sale Systems in Pakistan`; staging uses `Hulm POS | Sales, Inventory & Multi-Branch Operations`. The production H1 `Best POS Software in Pakistan` changed to `Run sales, inventory and daily operations with Hulm POS`.

Measured retention:

- Title-term retention: 14.3%.
- Body-vocabulary retention: 19.2%.
- Word count: 2,726 to 614, a 77.5% reduction.

The new page is visually stronger and has clearer CTAs, but it weakens the exact relevance signals around “best POS software,” “point of sale systems,” and “Pakistan.” Keep the new design, but restore the proven primary-query language in the title, H1, opening answer block, relevant H2s, comparison content, FAQs and internal anchors.

### 2. The industry cluster was rewritten too aggressively

All 12 indexed industry detail pages are high risk. Body-vocabulary retention ranges from 11.6% to 34.3% for the weakest pages, and most staging versions contain roughly one-third to one-half of the production word count.

The greatest measured losses are:

| Route | Title terms retained | Body vocabulary retained | Words, production → staging |
|---|---:|---:|---:|
| `/industries/pharmacy-store` | 22.2% | 11.6% | 1,006 → 506 |
| `/industries/salon-pos` | 42.9% | 11.8% | 1,391 → 440 |
| `/industries/bakery-pos-system` | 75.0% | 12.3% | 1,148 → 523 |
| `/industries/restaurant-pos` | 50.0% | 12.5% | 1,405 → 514 |
| `/industries/clothing-store` | 50.0% | 12.7% | 913 → 510 |
| `/industries/retail-store` | 37.5% | 14.3% | 1,060 → 554 |

The fix is not to restore every sentence. Preserve the new layout and reintroduce the production query cluster, industry-specific problems, feature terminology, use cases, FAQ coverage and internal links as clean, fact-checked sections.

### 3. The `what-is-pos` article lost too much proven coverage

The H1 is retained, but body-vocabulary retention is only 28.7% and word count dropped from 2,709 to 1,614. Because this is a broad informational topic with many long-tail subqueries, a shorter rewrite can lose rankings even if it reads better.

Reconcile its missing subtopics against Search Console before launch. Restore only useful and accurate blocks, especially definitions, POS meaning variants, hardware/software, workflows, industry examples, comparisons, FAQs and contextual links.

### 4. Author and recency signals changed

Production identifies `Aamir khan` as the author of all 13 audited articles. Staging changes 12 to `Hulm Editorial Team`; one article has no author in its Article schema. Twelve staging Article schemas omit the production modified date, while the sampled `what-is-pos` page visibly shows an older publication date than the production update date.

This affects trust, authorship continuity and freshness. Before launch:

- Decide whether Aamir Khan remains the accountable author or whether a reviewed editorial-team migration is intended.
- Preserve real `datePublished` and `dateModified` values; never invent or backdate them.
- Keep a valid author profile and `Person` or `Organization` relationship in Article schema.
- Do not redirect a real named-author profile to a generic team page unless that editorial decision is deliberate and documented.

### 5. Every title changed, and 16 have a duplicated brand suffix

Sixteen staging titles include variants such as `... | Hulm Solutions | Hulm Solutions`. This wastes title space and can alter search-result presentation.

Fix the shared title template, then preserve the existing production title on pages with proven queries unless Search Console evidence supports a better version. Title changes, content changes, H1 changes and a platform migration should not all be introduced simultaneously on high-value pages.

### 6. Three preserved pages are orphaned in the staging crawl

These pages appear in the sitemap but receive no internal link from any staging sitemap page:

- `/cattle-management-software`
- `/logistics-management-software`
- `/zatca`

Add descriptive links from `/apps`, relevant product pages, regional pages, the footer or contextual body sections. A sitemap is not a substitute for internal linking.

### 7. Page-level structured data is not equivalent

Production exposes `WebPage`, `BreadcrumbList`, `Organization`, `WebSite` and template-specific schema. Staging consistently exposes `Organization` and `WebSite`; articles also expose `Article` and some `FAQPage` data. The schema type set differs on all 58 audited routes.

Add page-specific `WebPage` or the appropriate subtype, `BreadcrumbList`, `Person`/author relationships, complete `Article` dates, and valid `FAQPage` only where the visible FAQ content qualifies. Product/pricing pages should use accurate `Product` and `Offer` markup only after commercial claims are approved.

### 8. The URL paths are equivalent, but not byte-for-byte identical

Production WordPress uses trailing slashes. Staging canonicals omit them. Therefore most existing URLs will require one permanent redirect after launch. This is normally manageable, but it is not an exact-match migration.

For the lowest possible migration risk, choose one of these approaches before cutover:

1. Match the production trailing-slash convention in routes, sitemap, canonicals and internal links; or
2. Keep the no-slash convention and verify a single direct permanent redirect for every old URL, with no chains.

Do not mix conventions. `/author` is the only production sitemap route intentionally consolidated to a different path.

## CTA and journey review

All 58 pages retain both conversion routes:

- Registration: `https://app.hulmsolutions.com/Register`
- Contact/WhatsApp: a site contact route or `wa.me` destination

The staging homepage, pricing page and industry template present these choices more clearly above the fold. Before launch, verify GTM events for registration, WhatsApp, phone, contact and downloadable assets so improved CTA design does not break lead attribution.

Visible UX observations from the captured screens:

1. The staging hierarchy and CTA labels are clearer than production.
2. The staging mobile-width H1s are large but readable, and primary/secondary actions are easy to distinguish.
3. Breadcrumb text on staging is small and low contrast; test it against the intended accessibility target.
4. The Netlify badge overlaps lower-right content in staging screenshots. Ensure it is not present on the production domain.
5. The production pricing page leaves a large empty area before the plan selector at this viewport; staging brings the value proposition and CTA into view sooner.

Screenshot evidence cannot prove keyboard behavior, screen-reader output, contrast ratios or form error handling. Those need implementation-level testing.

## Keyword preservation method required before launch

The observable page audit is complete, but the query-level audit remains blocked by missing Search Console data. Export the last 16 months of:

- Performance → Search results → Pages and Queries.
- Preferably an export that preserves page-query pairs, country, device, clicks, impressions, CTR and position.
- Top organic landing pages and conversions from GA4 for the same period.

For every URL, build a preservation row containing:

| Field | Purpose |
|---|---|
| Existing URL and final URL | Prevents 404s and irrelevant redirects. |
| Primary query and supporting queries | Defines the real topic to retain. |
| Clicks, impressions, CTR and average position | Prioritises proven value instead of guessed keywords. |
| Production title, H1 and winning sections | Identifies the elements supporting the current result. |
| Staging title, H1 and matching sections | Shows whether the query is still answered. |
| Internal anchor sources | Preserves discovery and internal authority. |
| CTA and conversion event | Protects leads, not only traffic. |
| Decision and owner | Records retain, improve, merge or redirect approval. |

The `meta keywords` field is not a protection mechanism. Google does not use it for ranking. The material signals are intent match, useful content, title, H1, headings, entities, links, schema, authorship and user response.

## Why these controls reduce ranking loss

No migration process can guarantee unchanged rankings. Search results can move because competitors, algorithms, demand and the index itself change. This plan removes the preventable migration causes:

1. **Same domain and relevant URL destination:** existing backlinks and indexed signals continue to point to the same topic.
2. **Exact or single-hop URL handling:** crawlers do not encounter 404s, chains or blanket home-page redirects.
3. **Query-level content retention:** each page continues answering the queries that already earn impressions and clicks.
4. **Stable metadata and H1 on proven pages:** Google sees a platform change, not a simultaneous change of subject.
5. **Direct internal links:** authority and topical context keep flowing to every important page.
6. **Server-rendered content and complete schema:** search and AI crawlers can extract the core content and identify the page, author and offer.
7. **Preserved analytics and conversions:** traffic and leads can be compared immediately after launch.
8. **Backups, monitoring and rollback:** serious indexing, routing or conversion failures can be reversed quickly.

## Required remediation order

1. Obtain Search Console page-query data and classify the 58 routes by organic traffic, leads and backlinks.
2. Fix the duplicated title suffix and decide the trailing-slash convention.
3. Restore homepage query alignment while retaining the new layout and CTA design.
4. Reconcile all 12 industry pages and the `/industries` hub against their proven query clusters.
5. Reconcile `what-is-pos` and any other high-traffic article at the subtopic level.
6. Restore accurate authors, publish/modified dates and author schema.
7. Add internal links to cattle management, logistics management and ZATCA.
8. Complete page-specific schema and re-run the full crawl.
9. Validate GTM/GA4/Search Console and conversion events.
10. Approve cutover only when high-risk rows are cleared and the rollback package is ready.

## Captured audit steps

| Step | Screen | Health |
|---:|---|---|
| 1 | Production homepage | Search-focused but visually dense; strong existing keyword signals. |
| 2 | Staging homepage | Stronger conversion design; high SEO content-parity risk. |
| 3 | Production pricing | Commercial details preserved, but initial mobile-width view has excessive empty space. |
| 4 | Staging pricing | Clearer CTA and plan framing; title/H1/body topic set changed materially. |
| 5 | Production `what-is-pos` article | Strong keyword breadth, current named author and update signal. |
| 6 | Staging `what-is-pos` article | Cleaner reading experience; author/date and long-tail coverage require reconciliation. |
| 7 | Production retail page | Exact retail keyword targeting and direct CTAs; copy contains claims requiring review. |
| 8 | Staging retail page | Better hierarchy and cautious claims; large loss of existing retail topic vocabulary. |

## Launch gate

Do not switch `hulmsolutions.com` to the staging build yet. The route and crawl foundation is good, but content, metadata, authorship and internal-link parity need remediation and a Search Console query export is still required to validate the keywords that are actually generating rankings and leads.
