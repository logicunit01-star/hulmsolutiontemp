/**
 * Content dates for crawlers (Article dateModified, WebPage lastReviewed, sitemap <lastmod>, RSS).
 *
 * Rule: bump a date ONLY when the visible content of that page changes in a meaningful way
 * (new/rewritten sections, facts, FAQs). Do not bump for layout, styling or tracking changes —
 * Google ignores lastmod values that change without real content changes.
 *
 * - BLOG_CONTENT_UPDATED: posts whose text was revised on the new site. Their dateModified becomes
 *   the later of this date and the live WordPress modified date. datePublished always stays the
 *   original live publish date.
 * - BLOG_LAST_REVIEWED: date the editorial team last reviewed each post (WebPage.lastReviewed).
 * - PAGE_CONTENT_UPDATED: non-blog pages whose copy changed after the site release date.
 */

/** 2 Oct 2026: keyword/readability pass, FAQ and year fixes. */
const KEYWORD_PASS = "2026-10-02T12:00:00+05:00";

export const BLOG_CONTENT_UPDATED: Record<string, string> = {
  "what-is-pos": KEYWORD_PASS,
  "what-is-pos-debit-meaning": KEYWORD_PASS,
  "what-is-a-pos-purchase": KEYWORD_PASS,
  "what-is-pos-skills-understand-pos-skill-meaning": KEYWORD_PASS,
  "what-is-a-pos-person-meaning-and-responsibilities": KEYWORD_PASS,
  "pos-reconciliation": KEYWORD_PASS,
  "cloud-pos-software-for-retail-stores": KEYWORD_PASS,
  "what-is-pos-experience-12-tips-to-satisfy-your-customers": KEYWORD_PASS,
  "what-is-point-of-sale-transaction": KEYWORD_PASS,
  "how-does-pos-machine-work": KEYWORD_PASS,
  "best-free-pos-software-and-system": KEYWORD_PASS,
  "best-point-of-sale-system-for-small-business-in-pakistan": KEYWORD_PASS,
  "best-pos-system-for-retail": KEYWORD_PASS,
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
