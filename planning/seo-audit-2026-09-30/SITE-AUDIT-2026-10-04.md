# Hulm site audit: local rebuild vs live hulmsolutions.com (4 Oct 2026)

## How this was measured

- **What was tested:** the local production build, matching the code in your folder as of 4 Oct.
- **Pages:** 69 URLs crawled. That is every URL in the sitemaps, all 58 live WordPress URLs, the thank-you page and the 2 draft pages.
- **"Live" figures:** taken from the live snapshot in `src/content/productionParityData.json`, refreshed 2 Oct. It holds each page's title, description, main HTML and schema.
- **Live speed was not measured.** This test environment blocks hulmsolutions.com and the PageSpeed API. To get a like-for-like number, run https://pagespeed.web.dev on the live homepage and pricing page and compare them with section 7.
- **Scripts:** `.guard/fullaudit.mjs`, `.guard/kwcmp.mjs`, `scripts/seo-site-scan.mjs`, `scripts/link-audit.mjs`, Playwright form and mobile tests, and Lighthouse 12 (mobile).

## Scorecard

| Area | Weight | Score | Headline |
|---|---|---|---|
| Technical SEO | 20% | **92** | All URLs return 200, canonicals and sitemaps are complete. Four new pages have meta lengths over the limits. |
| Site structure | 10% | **94** | Every page is within 2 clicks of the homepage, there are no orphans, and every page is in the nav or footer. |
| Content & keywords vs live | 25% | **85** | All 44 live titles and descriptions are kept exactly. Keywords appear in more headings than live. 20 of 146 tracked terms run below 70% of live density. |
| Internal linking | 15% | **90** | 0 broken links, 0 generic anchors. Average of 18.7 links from other pages' content. The country and city pages are the least linked. |
| Breadcrumbs | 5% | **75** | Breadcrumb schema is on every indexable page except /blogs/. A visible breadcrumb shows on only 25 of 69 pages. |
| Functionality | 10% | **95** | The forms deliver leads with UTM tracking, the thank-you page and events work, the mobile menu works, the 404 page returns a real 404, and no page scrolls sideways. |
| Speed & Lighthouse | 15% | **92** | Mobile performance averages 92 across 19 pages. Accessibility 99, SEO 100. The customer-story pages are the slowest (LCP 5.0 s). |
| **Overall site score** | | **90 / 100** | Ready to launch once the blockers below are dealt with. |

## Before launch (blockers, outside the code)

1. **Lead delivery:** in Netlify, set `LEAD_WEBHOOK_URL` or `RESEND_API_KEY` + `SALES_EMAIL`. Without them, the forms fall back to WhatsApp only.
2. **CI workflow:** copy `planning/seo-audit-2026-09-30/ci-workflow.yml` to `.github/workflows/ci.yml`.
3. **Delete unused files:**
   - `src/lib/google-reviews.ts`
   - `src/app/api/google-reviews/`
   - `content/pages/mobile-pos.ts`
   - `content/pages/fbr.ts`
   - `src/components/industries/industries-form.tsx`
   - `src/components/home/DashboardCarousel.tsx`
   - the large images in `public/wp-content/uploads/`
4. **Speed baseline:** run PageSpeed Insights on the live site now. That gives a "before" number to compare against after launch.

---

## 1. Technical SEO: 92

| Check | Result |
|---|---|
| HTTP status | All 69 URLs return 200. None returns a 404 or 5xx. |
| Legacy URLs | All 58 live WordPress URLs still exist at the same path with a trailing slash. Old forms redirect with a 308: `/pricing` → `/pricing/`, `/blog/` → `/blogs/`, `/industries/restaurant/` → `/industries/restaurant-pos/`, `/case-studies/*` → `/pos-case-studies/*`, `/wp-content/uploads/*` → `/images/uploads/*`, `/author/hulm-solutions-editorial-team/` → `/author/`. |
| Titles and meta descriptions | All 44 live non-blog pages keep their live title and description exactly. No duplicate titles or descriptions anywhere. |
| Canonical tags | All 69 point to the page's own URL (`https://hulmsolutions.com/...`). |
| Indexing | Only the thank-you page and the 2 draft policy pages are noindex, which is correct. |
| Sitemaps | `sitemap_index.xml` (posts + pages) and `sitemap.xml` each list the same 66 URLs. Every indexable page is included, and every entry has a lastmod date. |
| robots.txt | Allows all crawlers and blocks `/api/`. AI search crawlers are explicitly allowed, Bytespider is blocked, and both sitemaps are declared. |
| hreflang | Present on the homepage and the 4 country pages, all pointing at each other, with the homepage as `x-default`. |
| Structured data | Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication, FAQPage, Article (blogs), Service, CollectionPage, ItemList, AboutPage, ContactPage, ProfilePage/Person, Place. The number of FAQs in the schema matches the FAQs shown on the page (site scan 44/44). |
| Social tags | Open Graph and Twitter tags are on every page except `/blogs/`, which has no `og:image`. |
| Security headers | HSTS, nosniff, Referrer-Policy, X-Frame-Options and Permissions-Policy are set. `X-Powered-By` is removed. |
| Extras | `/feed/`, `/llms.txt`, `/llms-full.txt`, `/.well-known/security.txt` and a web manifest are all served. |

**Issues:**

- **Titles over 60 characters:**
  - New pages, which I should shorten:
    - `/pos-hardware/` (61)
    - `/pos-software-islamabad/` (62)
  - Kept exactly as on the live site, so leave them:
    - `/industries/retail-store/` (61)
    - `/inventory-management/` (62)
    - 2 blog posts (62 and 66)
- **Descriptions over 160 characters, all on new pages:**
  - `/pos-hardware/` (176)
  - `/pos-software-karachi/` (178)
  - `/pos-software-lahore/` (167)
  - `/pos-software-islamabad/` (168)
- **`/blogs/` has no `og:image`.** Shares of the blog index won't show a preview image.
- **36 pages have images without `width`/`height` attributes.** No layout shift was measured (CLS 0.000 on every page), so this is low priority.

## 2. Site structure: 94

- **Click depth:**
  - 48 pages are 1 click from the homepage, through the header dropdowns and footer.
  - 17 are 2 clicks away: the 13 blog posts, 5 customer stories and the author page.
  - None is deeper. The thank-you and draft pages are intentionally not linked.
- **Clean URLs:** everything is lowercase, uses hyphens and ends with a trailing slash. The live URLs are kept exactly.
- **Hubs:**
  - Product (`/apps/`) → 12 apps
  - Industries (`/industries/`) → 12 industries
  - FBR / ZATCA
  - Customers (`/pos-case-studies/`) → 5 stories
  - Resources (`/blogs/`) → 13 posts
  - Pakistan cities (Karachi, Lahore, Islamabad) and 4 country pages
- **Structural notes:**
  - The 4 international country pages sit on this Pakistan site by your decision. Plan 301 redirects for them when the international domain launches.
  - `/blog/` and `/blogs/` both exist; `/blog/` redirects to `/blogs/`. That's fine.

## 3. Content & keywords vs live: 85

**Kept exactly:**
- The title, description and canonical of all 44 live non-blog pages.
- All 13 blog posts, unchanged since the 2 Oct baseline. That baseline includes the 2 Oct pass's switch to local image paths and the live site's new "2026" title.

**Volume:** across the 36 pages tracked, the local copy is 37,061 words against 41,596 live (89%). This is the benchmark design: shorter pages with the keywords concentrated in headings.

**Heading placement:**
- Tracked keywords appear in the title, H1 and H2s far more often locally: a weighted placement score of 1,245 against 819 live.
- Only one H1 keyword was lost: "pos system" in the salon H1. The salon H1 does keep "salon POS".

**Terms below 70% of live density** (local count / live count):

| Page | Term | Local / live |
|---|---|---|
| USA | pos software / pos system / point of sale | 10/17, 7/12, 11/18 |
| KSA | pos software / pos system / point of sale | 13/21, 8/24, 10/14 |
| Qatar | pos software / pos system / point of sale | 8/14, 14/27, 9/13 |
| UAE | pos system / point of sale | 9/16, 8/14 |
| Mobile POS | mobile pos / pos system | 15/26, 6/16 |
| Order management | order management | 28/42 |
| Logistics | logistics | 19/35 |
| Ecommerce (`/website/`) | online store | 1/5 (live has it in 2 H2s) |
| Customer management | crm | 5/7 |
| Salon | pos system | 5/17, and it is no longer in the H1 |
| FBR | tax | 8/10 |

**Above 4.5% density (watch):**
- salon 5.3%
- furniture 5.0%
- order 5.4% (live is also 5.4%)
- customer 4.7%
- "pos" on the FBR page 5.0%

These come from short pages with many headings. None reads as stuffed, but don't add more mentions to these pages.

**Content quality:** a sweep of all non-blog pages finds no unsupported claims (no fake ratings, "24/7 support", percentage promises, offline mode or app-store claims). Thin pages are only `/editorial-policy/` (legal) and `/thank-you/` (noindex), which is expected.

## 4. Internal linking: 90

| Metric | Result |
|---|---|
| Broken internal links | 0 (66 URLs crawled) |
| Redirecting internal links | 0 in page bodies. The frozen blog content links to `/author/hulm-solutions-editorial-team/`, which redirects. |
| Orphan pages | 0 |
| Generic anchors ("learn more", "click here") | 0 |
| Pages missing from the nav or footer | 0 |
| Average links from other pages' content, per page | 18.7 |
| Average outbound links per page | 49.7, including header and footer |

**Best linked** (links from other pages' content):

| Page | Links |
|---|---|
| Homepage | 46 |
| `/pricing/` | 42 |
| Retail | 41 |
| Restaurant | 39 |
| Inventory | 39 |

Anchors are keyword-rich and varied. For example, restaurant gets "restaurant pos", "restaurant pos system" and "explore restaurant pos system".

**Least linked** (links from other pages' content):

| Page | Links |
|---|---|
| `/cookie-policy/` | 1 |
| USA | 3 |
| Karachi | 3 |
| Lahore | 3 |
| Islamabad | 3 |
| KSA | 4 |
| UAE | 4 |
| Qatar | 4 |
| ZATCA | 4 |
| About | 4 |

The 3 city pages should get links from the homepage FAQ, the pricing FAQ and the matching industry pages. For example, Karachi from restaurant (Farhan Caterers) and from electric store (Real Tech).

## 5. Breadcrumbs: 75

| | Local | Live |
|---|---|---|
| BreadcrumbList schema | 65 of 69 pages. Missing on `/blogs/`, the thank-you page and the 2 drafts. | 58 of 58 |
| Visible breadcrumb trail | 25 pages: 13 blog posts and 12 industry pages | 14 pages: blog posts and `/blogs/` |

**Gaps:**
- `/blogs/` lost both its visible breadcrumb and its BreadcrumbList schema compared with live.
- These have schema but no visible trail:
  - the 12 module pages
  - the 4 country pages and 3 city pages
  - the 5 customer stories
  - pricing, features, FBR, hardware

Adding a visible "Home › Product › Inventory management" trail would match the schema and help users. Google prefers breadcrumbs that are visible.

## 6. Functionality: 95

| Test | Result |
|---|---|
| Contact form | Lead posted to the webhook with UTM, landing page and source → `/thank-you/?type=contact`. Fires `generate_lead` and `generate_lead_confirmed`. |
| Demo form | Lead with industry → `/thank-you/?type=demo` |
| Final CTA form (about 40 pages) | Lead saved → sign-up with name, business, phone, email, `src` and UTMs |
| Pricing plan buttons | `?plan=growth` carried through. Fires `trial_start_click` and `pricing_plan_select`. |
| No delivery configured | Falls back to a pre-filled WhatsApp message (tested 1 Oct) |
| Mobile menu (390 px) | Opens, 10 visible links |
| 404 | A real 404 status with a "Page not found" page |
| Horizontal scroll at 390 px | None on all 69 pages |
| Missing files | None, once the local test copy had the images from your folder |
| Console errors | None from the site. Lighthouse logged only the GTM script, which this test environment blocks. |

The remaining 5 points are not code issues. They are lead delivery, which needs the Netlify variables, and the two draft policy pages, which need your answers.

## 7. Speed & Lighthouse: 92

Lighthouse 12, mobile, local production build, one run per page:

| Page | Perf | A11y | Best pr. | SEO | LCP | TBT | Weight |
|---|---|---|---|---|---|---|---|
| Homepage | 88 | 100 | 96* | 100 | 3.0 s | 296 ms | 370 KB |
| Pricing | 95 | 100 | 96* | 100 | 2.5 s | 185 ms | 284 KB |
| Features | 95 | 100 | 96* | 100 | 2.5 s | 174 ms | 505 KB |
| FBR | 92 | 100 | 96* | 100 | 3.2 s | 117 ms | 457 KB |
| Industries hub | 95 | 100 | 96* | 100 | 2.8 s | 68 ms | 409 KB |
| Restaurant | 94 | 100 | 96* | 100 | 2.2 s | 240 ms | 375 KB |
| Retail | 98 | 100 | 96* | 100 | 2.3 s | 91 ms | 368 KB |
| Inventory | 88 | 100 | 96* | 100 | 3.5 s | 203 ms | 531 KB |
| Mobile POS | 88 | 100 | 96* | 100 | 3.2 s | 239 ms | 525 KB |
| UAE | 90 | 100 | 96* | 100 | 3.4 s | 126 ms | 474 KB |
| Karachi | 96 | 100 | 96* | 100 | 2.4 s | 162 ms | 459 KB |
| POS hardware | 99 | 100 | 96* | 100 | 2.0 s | 85 ms | 446 KB |
| About | 89 | 100 | 96* | 100 | 3.7 s | 98 ms | 589 KB |
| Contact | 98 | 100 | 96* | 100 | 2.1 s | 128 ms | 462 KB |
| Book a demo | 98 | 100 | 96* | 100 | 2.4 s | 61 ms | 269 KB |
| Blog index | 88 | 93 | 96* | 100 | 3.8 s | 134 ms | 1,169 KB |
| Blog: what is POS | 91 | 100 | 96* | 100 | 3.0 s | 185 ms | 1,132 KB |
| Customer stories hub | 80 | 100 | 96* | 100 | 5.0 s | 147 ms | 1,032 KB |
| Farhan Caterers story | 85 | 95 | 96* | 100 | 3.6 s | 247 ms | 1,032 KB |
| **Average** | **92** | **99** | **96*** | **100** | **3.0 s** | **157 ms** | |

\* The only best-practice failure was GTM failing to load because this test environment blocks it. On the real host, expect 100.

CLS was 0.000 on every page.

**What to fix:**
1. **Customer-story images:** these are unoptimised JPGs: cupcake-queen 219 KB, real-tech 110 KB, farhan 103 KB. Converting them to WebP at display size saves about 370 KB and brings LCP on the stories hub under 3 s.
2. **Accessibility on the customer stories:** grey 11 px labels (`text-gray-400`) fail contrast, and one `h4` follows an `h2` directly.
3. **Accessibility on the blog index (frozen):** `#209f8f` badges have low contrast (2.9–3.3:1), and a round arrow link has no accessible name. These are styling and label fixes only, not content changes, but `/blogs/` is in the frozen set, so I need your OK.
4. **jQuery:** about 21 KB of unused jQuery remains. Remove it if no GTM tag uses `$` or `jQuery`.

## 8. Recommended next fixes, in priority order

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1 | Shorten 2 new titles and 4 new descriptions | 10 min | Snippets not cut off |
| 2 | Convert customer-story images to WebP, fix their contrast and heading order | 30 min | LCP 5.0 → ~3 s, accessibility to 100 |
| 3 | Visible breadcrumbs on module, country, city, customer-story and core pages | 1 h | Matches the schema, better navigation |
| 4 | Restore "pos system" in the salon H1. Add "online store" H2s on `/website/`. Lift "mobile pos" and "point of sale" mentions on mobile POS and the 4 country pages. | 1 h | Closes the main keyword gaps against live |
| 5 | Link the city pages from the homepage and pricing FAQs and from the matching industry pages | 20 min | Pages with 3 links get 6–8 |
| 6 | `/blogs/`: add `og:image` and BreadcrumbList schema. Fix contrast and the link label (needs your OK, frozen page). | 20 min | Parity with live, accessibility |
| 7 | Remove jQuery if GTM doesn't need it | 10 min | About 21 KB less JS per page |
