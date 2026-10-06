# Hulm Solutions production-readiness and launch plan

**Prepared:** 25 September 2026  
**Scope:** React/Next.js marketing website on Netlify staging  
**Staging:** <https://stalwart-toffee-39860f.netlify.app>  
**Production:** <https://hulmsolutions.com>  
**Production status:** Unchanged. This document does not authorize a DNS or production cutover.

## 1. Current readiness summary

The rebuilt site is functionally complete on staging and preserves the existing SEO content and route set. The remaining work before production is operational: approve business claims, validate analytics and conversions, capture a recoverable production backup, and execute a controlled domain cutover with monitoring.

| Control | Status | Evidence / action |
|---|---|---|
| Existing indexed URLs | Ready in code | 58 production sitemap URLs compared with 59 staging sitemap URLs; 57 paths match after trailing-slash normalization, and `/author/` now redirects to the canonical author page. |
| Historical linked case study | Ready in code | `/pos-case-studies/laptop-store-pos-system-karachi` redirects to `/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store`. |
| Canonicals and sitemap | Ready on staging | The Next.js site uses one canonical convention without trailing slashes. `/sitemap.xml` contains the current canonical pages. |
| Search Console ownership | Ready in code; verify after deploy | Existing Google verification token is restored in root metadata. |
| Google Tag Manager | Ready in code; account validation required | Existing container `GTM-TMMQ565S` is restored globally. Trigger, GA4, and conversion behavior must be tested in the Google accounts. |
| Pricing, certification, support and customer claims | Owner approval required | See section 4. These claims must be verified against current commercial and legal evidence before cutover. |
| Rollback path | Defined | See sections 6 and 7. WordPress must remain recoverable and online during the observation period. |

### Verified staging release

- Git commit: `445bd1d` (`prepare production SEO and tracking safeguards`)
- Lint: passed with zero errors.
- Production build: passed; 100 routes generated.
- Public staging crawl: all 58 production sitemap URLs reached a final `200` response.
- Staging sitemap: 59 canonical URLs.
- Historical redirects: `/author/` and `/pos-case-studies/laptop-store-pos-system-karachi/` reached their intended canonical pages.
- Rendered metadata: GTM container and Google Search Console verification token were both present on public staging.

## 2. URL and SEO preservation

### Reconciliation result

- Production WordPress sitemap: 58 unique URLs from `sitemap_index.xml`, `post-sitemap.xml`, and `page-sitemap.xml`.
- Staging Next.js sitemap: 59 canonical URLs.
- Normalized overlap: 57 of 58 production sitemap paths already resolve to the same staging content.
- Added historical redirect: `/author/` to `/author/hulm-solutions-editorial-team`.
- Added historical case-study redirect: `/pos-case-studies/laptop-store-pos-system-karachi` to `/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store`.
- New canonical routes are `/apps` and `/author/hulm-solutions-editorial-team`.

### Trailing-slash policy

WordPress currently publishes trailing-slash URLs. The Next.js build publishes the equivalent canonical URLs without a trailing slash. Netlify/Next.js therefore performs one permanent redirect from the old slash URL to the no-slash canonical URL. This is a controlled canonical migration, not a content or keyword removal.

Do not introduce a second canonical variation. Internal links, sitemap URLs, canonical tags, and structured data should continue to use the no-slash URL after launch.

### Known legacy links

| URL | Decision |
|---|---|
| `/order-management/%20%20` | This is a malformed link on the current WordPress site. Do not preserve or reproduce it. Correct internal links must point to `/order-management`. |
| `/author/aamir-khan/` | Existing legacy alias redirects to the canonical editorial-team page. Two hops are acceptable for the old alias, but the canonical URL must be used internally. |
| `/industries/bakery/` | Legacy alias resolves to `/industries/bakery-pos-system`. |
| `/industries/salon-spa/` | Legacy alias resolves to `/industries/salon-pos`. |
| `/industries/restaurant/` | Legacy alias resolves to `/industries/restaurant-pos`. |

### SEO/GEO preservation rules

1. Do not delete or rename an established route without a tested permanent redirect to the closest equivalent page.
2. Preserve each page's topic, search intent, useful body copy, title, description, headings, canonical tag, structured data, and internal-link context.
3. Do not mass-redirect retired informational pages to the home page.
4. Keep all sitemap destinations indexable and returning `200` after their expected redirect.
5. Keep robots, canonical tags, sitemap URLs, Open Graph URLs, and schema URLs on `https://hulmsolutions.com` in production.
6. Continue maintaining clear answer-first content, descriptive headings, entity references, FAQs where useful, author identity, and sourceable factual claims for GEO/LLM visibility.
7. Monitor both rankings and lead outcomes; preserved URLs alone do not prove equivalent search performance.

## 3. Analytics and Search Console controls

The previous production identifiers have been restored in code:

- Google Tag Manager: `GTM-TMMQ565S`
- Google Search Console verification token: `eja9u_sG9QlN7Hwff1OOVI1tP9koIfOzBF-XbvrzNEI`

Before cutover:

- Confirm the GTM container is published, not only saved as a workspace draft.
- Use Tag Assistant on staging and verify page-view events across client-side navigation.
- Confirm GA4 receives the intended hostname and that staging visits are excluded or clearly separated.
- Test every important conversion: registration click, WhatsApp click, phone click, demo/contact action, pricing CTA, and downloadable checklist.
- Record the current production GA4 and GTM behavior so the new implementation can be compared event-for-event.
- Do not create a second Search Console property unnecessarily; the existing domain/URL-prefix property remains relevant when the domain stays the same.

After cutover:

- Inspect `/sitemap.xml` on the production domain and submit it in Search Console.
- Request indexing only for the highest-priority pages if required; do not request every URL manually.
- Inspect Coverage/Pages, Core Web Vitals, Enhancements, manual actions, and security issues.
- Compare organic sessions, clicks, impressions, indexed pages, conversions, and branded/non-branded queries against the pre-launch baseline.

## 4. Business-claim approval gate

These statements are present across the site and can affect customer trust, advertising compliance, legal exposure, and AI-generated answers. The business owner must confirm them before production. Evidence should be stored with an owner and review date.

| Category | Claims requiring confirmation | Approval |
|---|---|---|
| Trial and pricing | 14-day free trial; no credit card; Starter PKR 2,500/month; Growth PKR 5,500/month; Business PKR 11,000/month; included users/branches; add-on and service prices. | Pending owner confirmation |
| FBR | “FBR Tier-1 Certified,” native/direct integration, real-time reporting/invoicing, and statements about applicable business obligations. | Pending compliance evidence |
| Saudi/ZATCA | “ZATCA Phase 1 & 2 Approved/Certified,” FATOORA integration, and Saudi compliance wording. | Pending compliance evidence |
| Regional certification | “Gulf Regional Certified,” “North America Certified,” and “Middle East Certified.” | Pending evidence or removal/rewording |
| Support and onboarding | 24/7 or seven-days-per-week support, same-day setup, five-minute setup, two-week hypercare, migration and training commitments. | Pending operations confirmation |
| Product capability | Offline operation, Android/mobile support, payment methods, WhatsApp/SMS promotions, loyalty, API, website creation, batch/expiry, multi-branch, and hardware requirements. | Pending product confirmation |
| Customers and outcomes | Customer names, testimonials, case studies, “hundreds of businesses,” precise uplift/savings metrics, and “only platform in Pakistan” statements. | Pending evidence and customer permission |

The inconsistent 15-day trial references found in migrated content have been corrected to 14 days to match the dominant current offer. This does not replace owner approval of the offer itself.

## 5. Infrastructure snapshot to preserve

Snapshot observed on 25 September 2026:

- Authoritative DNS: `addyson.ns.cloudflare.com`, `quincy.ns.cloudflare.com`
- Apex proxied addresses: `104.21.29.177`, `172.67.149.145`
- `www` currently resolves through Cloudflare to the same addresses.
- Observed DNS TTL: approximately 300 seconds.
- Cloudflare currently serves production with HSTS and dynamic caching behavior.

Mail records must not be changed during website cutover:

| Priority | MX destination |
|---:|---|
| 5 | `mx1-hosting.jellyfish.systems` |
| 10 | `mx2-hosting.jellyfish.systems` |
| 20 | `mx3-hosting.jellyfish.systems` |

Before any DNS change, export the complete DNS zone and capture Cloudflare redirects, transforms, cache rules, SSL/TLS mode, WAF rules, and page rules. Website cutover should modify only the confirmed apex/`www` web records required by Netlify.

## 6. Pre-cutover checklist

- [ ] Business owner approves or revises every claim category in section 4.
- [x] Final staging build passes lint and production build.
- [x] All 58 historical sitemap URLs end at a relevant `200` page through the expected redirect chain.
- [x] Sitemap, robots, canonicals, structured data, social metadata, and the preserved PDF are verified on staging.
- [ ] GTM/GA4 and conversion events are validated with account access.
- [ ] Search Console baseline is exported: queries, pages, countries, devices, indexing, and sitemap state.
- [ ] Analytics baseline is exported: organic sessions, landing pages, conversions, and referral sources.
- [ ] WordPress database, `wp-content`, configuration, and web-server rules are backed up and restoration-tested.
- [ ] Existing DNS zone and Cloudflare configuration are exported.
- [ ] Final Git commit, Netlify deploy ID, environment variables, Node version, and build command are recorded. Git commit is recorded above; remaining Netlify runtime details still need to be captured from the project settings.
- [ ] Netlify custom domains, TLS certificate, primary-domain preference, and redirects are configured before traffic moves.
- [ ] A low-risk cutover window and responsible operator are agreed.

## 7. Cutover, smoke test, and rollback

### Cutover sequence

1. Freeze production content changes or record all changes made after the final content comparison.
2. Run the final staging crawl and conversion test.
3. Attach `hulmsolutions.com` and `www.hulmsolutions.com` to the verified Netlify site and confirm Netlify's required DNS values.
4. Change only the website DNS records in Cloudflare. Leave nameservers, MX, SPF, DKIM, DMARC, and mail-related records untouched.
5. Confirm TLS, preferred hostname, apex/`www` behavior, cache behavior, and the production `NEXT_PUBLIC_SITE_URL`.
6. Purge only the required Cloudflare cache after the new origin is confirmed.

### Smoke checks at T+5, T+15, and T+60 minutes

- Home, pricing, features, contact, registration, and top organic landing pages.
- All historical sitemap URLs and important legacy redirects.
- `/sitemap.xml`, `/robots.txt`, canonical tags, metadata, schema, and the checklist PDF.
- Registration, WhatsApp, phone, demo/contact, and pricing CTAs.
- GTM loading, GA4 realtime/debug events, and conversions.
- Server errors, client errors, mixed content, TLS, layout, mobile navigation, and Core Web Vitals signals.

### Rollback triggers

Rollback is warranted for a sustained production-impacting condition such as:

- TLS/domain failure or widespread `5xx` responses.
- Important organic landing pages returning `404` or redirecting to unrelated content.
- Registration/contact/primary CTA failure.
- Missing analytics/conversion tracking that cannot be corrected quickly and safely.
- Material rendering or navigation failure across common devices.

### Rollback action

1. Restore the previously captured Cloudflare apex/`www` web records to the WordPress origin.
2. Purge the affected Cloudflare cache and verify the old site is serving again.
3. Keep the Netlify deploy available for diagnosis; do not delete it or rewrite history.
4. Record the incident, affected URLs/events, timestamps, and remediation before rescheduling.
5. Keep WordPress and its database unchanged and recoverable throughout the initial observation period.

## 8. Post-launch monitoring

Monitor daily for the first seven days, then weekly through at least day 30:

- Search Console indexing, sitemap processing, crawl errors, canonical selection, clicks and impressions.
- Analytics organic landing pages and lead conversions.
- Netlify `4xx`/`5xx` logs and key redirect behavior.
- Page speed/Core Web Vitals for the home page and top organic templates.
- Brand and high-value non-brand keyword movement.
- AI-search/LLM referral traffic and a repeatable brand mention test set where available.

Small fluctuations are normal after a platform migration. Investigate sustained declines by URL and query before changing content or redirects.

## 9. Go-live decision

Development can be considered complete after the automated checks and staging deployment pass. Production remains **not approved for cutover** until:

1. the claims table is signed off,
2. analytics/conversions are verified with account access,
3. backups and DNS/Cloudflare exports are captured, and
4. the final go-live checklist is explicitly approved.
