# Hulm production-parity implementation report

**Completed:** 27 September 2026  
**Production authority:** <https://hulmsolutions.com>  
**Validated build:** local Next.js production build on port 3200  
**Production/DNS status:** unchanged; this work is not live yet.

## Outcome

The React migration now preserves the current production SEO surface for every URL in the live WordPress sitemap. The approved POS-focused navigation and `/apps/` overview remain, while the existing indexed page content, headings, metadata, authorship, dates and structured data are rendered from a captured production snapshot.

| Control | Final result |
|---|---:|
| Production sitemap URLs | 58 |
| Production URLs returning `200` in the new build | 58/58 |
| Exact normalized route retained | 58/58 |
| Canonical matches final route | 58/58 |
| Exact production title | 58/58 |
| Exact production meta description | 58/58 |
| Exact production H1 | 58/58 |
| Article author retained | 13/13 |
| Article published/modified dates retained | 13/13 |
| Internal destinations crawled | 247 |
| Broken internal destinations | 0 |
| Internal links passing through redirects | 0 |
| Production media/CSS references inventoried | 836 |
| Production references available | 836/836 |
| Mirrored references missing locally | 0 |

The new sitemap contains 59 URLs: the 58 production URLs plus the approved new `/apps/` product overview.

## What was preserved

- Production URL paths and trailing-slash convention.
- Page titles, meta descriptions, H1s and canonicals.
- Current production page body markup and document order for the 58 indexed routes, except the two apps intentionally excluded from the primary migration journey.
- Existing headings, explanatory copy, FAQ text, CTA labels and destinations inside the retained production page content.
- All 26 retained WordPress lead forms converted to Netlify form submissions, with a non-indexed `/thank-you/` confirmation route.
- JSON-LD blocks, including article and FAQ data present on production.
- Named article author plus actual `datePublished` and `dateModified` values for all 13 articles.
- Existing `og:title`, `og:description`, `og:image` and article time metadata.
- Production Elementor/Astra page styles required to render the retained markup.
- 836 referenced images, SVGs, stylesheets, fonts and supporting files at their existing `/wp-content/...` paths.
- The legacy discovery endpoints `sitemap_index.xml`, `post-sitemap.xml` and `page-sitemap.xml`, alongside the new `sitemap.xml`.
- Explicit crawl access for Google and major AI/answer-engine crawlers, while retaining the production Bytespider restriction.

## Intentional differences

1. The global header, footer and primary journey remain the approved POS-focused React experience.
2. `/apps/` is a new canonical overview page.
3. Cattle management and standalone logistics retain their URLs and exact production metadata, but keep their existing React pages and are not promoted in the primary navigation, as approved.
4. Internal links that previously used a redirect have been pointed directly to the same final canonical URL.
5. One malformed production link, `/order-management/%20%20`, was corrected to `/order-management/`.

## Evidence files

- `audit-summary.json` — machine-readable final totals.
- `page-comparison.csv` and `page-comparison.json` — all 58 route comparisons.
- `internal-link-checks.csv` — status and redirect behavior for all crawled internal destinations.
- `page-risk-register.csv` — the original heuristic register retained for traceability.
- `../production-asset-inventory-2026-09-27.json` — every mirrored production media/style dependency and the pages that use it.

The heuristic risk register still labels pages using heading/body vocabulary thresholds because the React header/footer differ from WordPress and the excluded apps intentionally retain their React bodies. The launch-critical checks above are the authoritative parity gate: route, status, canonical, title, description, H1, author/date, internal-link health and asset availability.

## Why this substantially reduces migration ranking risk

No developer can guarantee fixed rankings because Google updates, competitors and search demand remain outside the site’s control. This implementation removes the main migration-created failure modes:

1. Existing indexed URLs keep resolving to the same page rather than a 404 or unrelated redirect.
2. Titles, descriptions, H1s and core page content remain stable, so the platform changes without simultaneously changing the page topic.
3. Canonicals, trailing slashes and internal links use one convention, preventing duplicate signals and redirect chains.
4. Existing article authorship, publication history and structured data remain available to search and generative engines.
5. Media and stylesheet URLs stay valid after DNS leaves WordPress; the new site does not depend on the old server remaining online.
6. Legacy sitemap URLs continue to return XML, protecting existing Search Console submissions and crawler discovery.
7. Content is present in server-rendered HTML instead of requiring client-side JavaScript for indexing.

## Remaining production launch gates

These are operational checks, not missing page-development work:

1. Deploy this exact build to the Netlify staging site and rerun the same audit against its public URL.
2. Test the registration, WhatsApp, phone, email and all 26 Netlify form conversion paths on the public deploy, and confirm that submissions appear in the Netlify Forms dashboard.
3. Verify GA4/GTM, Search Console verification and conversion events on the public staging deployment.
4. Export Google Search Console page-query data and GA4 organic landing-page conversions as a measurement baseline. On-page keyword signals are preserved, but only Search Console can identify every query already generating impressions and clicks.
5. Confirm the final production environment variables, then perform DNS cutover with the WordPress backup and rollback procedure ready.
6. Monitor 404s, index coverage, sitemap processing, rankings, organic landing pages and conversions daily after launch.

## Launch decision

The local development phase passes the content/URL/metadata/internal-link/asset parity gate. Production cutover should wait only for the public Netlify re-audit, conversion/analytics validation, and rollback readiness.
