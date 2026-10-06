# Phase 3 — Product information architecture

Date: 2026-09-19  
Status: Implemented and locally verified  
Branch: `refactor/pos-focused-positioning`

## Objective

Replace the old Apps catalogue with a clear Product overview. Hulm should be presented as one connected POS platform with capabilities around the sale, rather than a collection of unrelated applications or a generic ERP suite.

## Product hierarchy

### Core product

1. POS and billing.
2. Inventory management.
3. Purchasing and vendors.
4. Customer management.
5. Order management.
6. Reporting and insights.

### Product extensions

1. Mobile POS.
2. Online store.
3. Integrations.

Cattle and logistics remain available at their existing direct URLs, but they are not promoted through the primary Product discovery journey.

## Product page journey

1. Connected POS product promise.
2. Sale-to-insight workflow.
3. Six core capability cards linking to canonical feature pages.
4. Real Hulm product screens.
5. Three optional product extensions.
6. Qualified FBR integration guidance.
7. Product architecture FAQs.
8. Trial and product-demo call to action.

## Duplicate route consolidation

The historical `/apps/[app]` pages duplicated the direct feature routes. They now issue permanent redirects:

| Historical route | Canonical destination |
| --- | --- |
| `/apps/purchase-orders` | `/purchase-orders/` |
| `/apps/vendors-management` | `/vendors-management/` |
| `/apps/customer-management` | `/customer-management/` |
| `/apps/order-management` | `/order-management/` |
| `/apps/inventory-management` | `/inventory-management/` |
| `/apps/reporting-module` | `/reporting-module/` |
| `/apps/mobile-pos` | `/mobile-pos/` |
| `/apps/website` | `/website/` |
| `/apps/cattle-management-software` | `/cattle-management-software/` |
| `/apps/logistics-management-software` | `/logistics-management-software/` |

Unknown `/apps/[app]` slugs return a 404 response.

## Shared product-template cleanup

- Renamed the breadcrumb from Apps to Product.
- Replaced “Business Suite” and “All-in-One Suite” labels with connected Hulm POS language.
- Removed the universal “100% compliant” and “under 5 minutes” status labels from the shared capability template.
- Removed the logistics customer review from the shared POS review carousel.
- Kept existing direct feature, cattle and logistics pages intact for later content review.

## Files changed

- `content/pages/product.ts`
- `src/app/apps/page.tsx`
- `src/app/apps/[app]/page.tsx`
- `src/components/apps/app-template.tsx`
- `src/components/home/GoogleReviewsSection.tsx`

## Verification

- Targeted ESLint: passed.
- Next.js production build: passed, including TypeScript and 89 generated pages.
- Desktop browser check at 1440 × 1000: passed.
- Mobile browser check at 390 × 844: passed.
- Horizontal overflow: none.
- Browser console errors: none.
- Permanent redirects: verified with HTTP 308 responses.
- Invalid historical app route: verified with HTTP 404.
- Local Product preview left running at `http://localhost:3100/apps`.

## Deferred to later phases

- Full rewrite of individual capability-page copy.
- Pricing-page restructuring.
- Industry-page prioritisation and cleanup.
- Technical SEO, schema, sitemap and canonical audit.
- Analytics and conversion-event implementation.

