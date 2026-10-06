# Phase 6 — Priority Industry Page Standardisation

Date: 2026-09-19  
Status: Complete locally; not committed, pushed or deployed

## Objective

Standardise the six priority industry pages around credible POS outcomes, remove exaggerated or unverifiable claims, and give prospects a consistent path from workflow fit to rollout discussion.

## Priority pages completed

- `/industries/retail-store`
- `/industries/restaurant-pos`
- `/industries/pharmacy-store`
- `/industries/bakery-pos-system`
- `/industries/salon-pos`
- `/industries/clothing-store`

## Content model

Each priority page now follows the same decision journey:

1. Industry-specific POS outcome and real photography.
2. Concise workflow overview.
3. Common operational friction and the relevant Hulm workflow response.
4. Capabilities to discuss during configuration.
5. Common business setups.
6. FBR integration guidance where relevant.
7. Suitable business types and expected operational outcomes.
8. Setup questions that clarify scope before purchase.
9. Related priority-industry paths.
10. A rollout-focused conversion step.

## Claim and language changes

- Removed absolute speed claims such as “sub-second” and “lightning-fast”.
- Removed blanket compliance language such as “100% compliant”.
- Removed unsupported replacement claims such as replacing an accountant.
- Removed alarmist language such as “zero data” and “built for the chaos”.
- Replaced “best POS” phrasing with workflow-specific descriptions.
- Reframed capabilities as configurable or available where plan, hardware, data or implementation scope matters.
- Added explicit confirmation language for FBR inclusion, device compatibility, catalogue migration and branch requirements.
- Added a pharmacy boundary explaining that the page covers POS and inventory, not clinical or prescribing software.

## Page-specific focus

| Industry | Primary workflow focus |
| --- | --- |
| Retail | Checkout, products, purchasing, exchanges and branch stock |
| Restaurant | Menu, order capture, tables, kitchen tickets and shift reporting |
| Pharmacy | Products, batches, expiry dates, purchasing and counter billing |
| Bakery | Counter sales, product availability and advance orders |
| Salon / Spa | Appointments, service billing, retail products and customer history |
| Clothing | Size and colour variants, barcodes, exchanges and branch stock |

## Technical implementation

- Added `src/content/pages/priorityIndustriesData.ts` as the curated content source for the six priority routes.
- Rebuilt the shared dynamic industry template at `src/app/industries/[industry]/page.tsx`.
- Merged curated priority content over the legacy dataset without deleting or changing any existing slugs.
- Preserved static generation for all 12 industry routes.
- Kept the existing Hulm typography, colour system, buttons, cards, FAQ component and industry photography.

## Verification

- ESLint passed for the shared template and priority content source.
- Production build passed with TypeScript and all 89 static pages generated.
- `git diff --check` passed.
- Confirmed unique title, metadata and H1 content for all six priority routes.
- Confirmed no horizontal overflow on all six priority routes at desktop width.
- Confirmed no horizontal overflow at the 390 × 844 mobile breakpoint.
- Confirmed the following removed phrases do not appear on the priority pages: “100%”, “sub-second”, “lightning-fast”, “replace your accountant”, “zero data”, “built for the chaos” and “best POS”.

## Intentionally deferred

- Claim-by-claim rewrite of the six secondary industry pages.
- Technical SEO work including schema, canonical rules and sitemap review.
- Analytics events for industry selection, trial clicks and contact conversions.
- Commit, push and production deployment.

## Recommended next phase

Phase 7: technical SEO and structured-data review across the new homepage, product, pricing and industry journeys.
