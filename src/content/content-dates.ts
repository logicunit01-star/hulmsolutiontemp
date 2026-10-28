/**
 * Content dates for crawlers (Article dateModified, WebPage lastReviewed, sitemap <lastmod>, RSS).
 *
 * Rule: bump a date ONLY when the visible content of that page changes in a meaningful way
 * (new/rewritten sections, facts, FAQs). Do not bump for layout, styling or tracking changes —
 * Google ignores lastmod values that change without real content changes.
 *
 * - BLOG_CONTENT_UPDATED: posts whose text was revised on the new site. Their dateModified becomes
 *   the date specified. datePublished always stays the original live publish date.
 * - BLOG_LAST_REVIEWED: date the editorial team last reviewed each post (WebPage.lastReviewed).
 * - PAGE_CONTENT_UPDATED: non-blog pages whose copy changed after the site release date.
 */

const KEYWORD_PASS = "2026-10-02T12:00:00+05:00";

export const BLOG_CONTENT_UPDATED: Record<string, string> = {
  "what-is-pos": "2024-12-18T12:00:00+05:00",
  "best-point-of-sale-system-for-small-business-in-pakistan": "2024-12-30T12:00:00+05:00",
  "best-free-pos-software-and-system": "2025-01-16T12:00:00+05:00",
  "how-does-pos-machine-work": "2025-01-23T12:00:00+05:00",
  "what-is-point-of-sale-transaction": "2025-02-07T12:00:00+05:00",
  "cloud-pos-software-for-retail-stores": "2026-10-28T12:00:00+05:00",
  "what-is-pos-experience-12-tips-to-satisfy-your-customers": "2025-02-11T12:00:00+05:00",
  "pos-reconciliation": "2025-02-28T12:00:00+05:00",
  "what-is-a-pos-person-meaning-and-responsibilities": "2025-03-07T12:00:00+05:00",
  "what-is-pos-skills-understand-pos-skill-meaning": "2025-03-28T12:00:00+05:00",
  "what-is-a-pos-purchase": "2025-04-14T12:00:00+05:00",
  "best-pos-system-for-retail": "2026-10-28T12:00:00+05:00",
  "what-is-pos-debit-meaning": "2025-07-24T12:00:00+05:00",
};

/** Every post was reviewed by the editorial team in the 2 Oct 2026 pass. */
export const BLOG_LAST_REVIEWED_DEFAULT = KEYWORD_PASS;
export const BLOG_LAST_REVIEWED: Record<string, string> = {};

export const PAGE_CONTENT_UPDATED: Record<string, string> = Object.fromEntries(
  [
    "/features/",
    "/pricing/",
    "/integration/",
    "/mobile-pos/",
    "/fbr-integrated-pos-pakistan/",
    "/zatca/",
    "/about/",
    "/contact/",
    "/author/",
    "/inventory-management/",
    "/vendors-management/",
    "/customer-management/",
    "/order-management/",
    "/reporting-module/",
    "/logistics-management-software/",
    "/cattle-management-software/",
    "/website/",
    "/industries/",
    "/industries/bakery-pos-system/",
    "/industries/cafe/",
    "/industries/clothing-store/",
    "/industries/electric-store/",
    "/industries/furniture-store/",
    "/industries/jewellery-shop/",
    "/industries/manufacturing-industries/",
    "/industries/pharmacy-store/",
    "/industries/retail-store/",
    "/industries/salon-pos/",
    "/industries/toys-store/",
    "/pos-software-usa/",
    "/pos-software-ksa/",
    "/pos-software-uae/",
    "/pos-software-qatar/",
    "/pos-case-studies/",
    "/editorial-policy/",
  ].map((route) => [route, KEYWORD_PASS]),
);
