# Phase 5 — Industry Prioritisation

Date: 2026-09-19  
Status: Complete locally; not committed, pushed or deployed

## Objective

Simplify the industry journey around Hulm's strongest POS use cases while preserving every existing industry URL and keeping secondary workflows discoverable.

## Approved positioning applied

- Lead with the business workflow rather than claiming to be a solution for every industry.
- Prioritise retail stores, restaurants, pharmacies, bakeries, salons and clothing stores.
- Keep cafes, furniture stores, toy stores, jewellery shops, electrical stores and manufacturing as secondary paths.
- Present the industry setup as an adaptation of one connected POS and inventory foundation.
- Keep FBR integration visible as an available capability without making blanket certification or inclusion claims.

## Changes completed

### Industry index

- Rebuilt `/industries` with a POS-led hero and real industry photography.
- Added a six-industry primary selection path with concise workflow summaries and relevant capability cues.
- Added a shared-foundation section covering sales, inventory and reporting.
- Retained the remaining six industries in a clearly separated secondary section.
- Added a contextual FBR integration section, industry-specific FAQ and focused closing CTA.
- Removed the equal-weight filter grid, generic reviews block and unsupported numeric/compliance claims from the index.
- Moved page copy and metadata into `content/pages/industries.ts` for easier maintenance.

### Shared industry-detail template

- Preserved all 12 current industry slugs and static routes.
- Prioritised the strongest POS use cases in the “other industries” recommendations.
- Removed the generic Google reviews block and unverified impact-stat section from every industry detail page.
- Replaced “verticals” language with clearer industry language.
- Reframed the compliance badge as “FBR Integration Support”.

## Route preservation

The following URLs remain available:

- `/industries/retail-store`
- `/industries/restaurant-pos`
- `/industries/pharmacy-store`
- `/industries/bakery-pos-system`
- `/industries/salon-pos`
- `/industries/clothing-store`
- `/industries/cafe`
- `/industries/furniture-store`
- `/industries/toys-store`
- `/industries/jewellery-shop`
- `/industries/electric-store`
- `/industries/manufacturing-industries`

## Verification

- ESLint passed for the new industry index, content source and shared detail template.
- Production build passed with TypeScript and all 89 static pages generated.
- `git diff --check` passed.
- Desktop check: 1440 × 1000, no horizontal overflow.
- Mobile check: 390 × 844, no horizontal overflow.
- Confirmed all 12 industry destinations are linked from the index.
- Confirmed `/industries/retail-store` renders and recommends restaurant, pharmacy, bakery and salon routes.
- Confirmed removed index claims no longer appear: “12+ Verticals”, “100% Compliant”, “< 3 Seconds” and “dream ERP”.
- Confirmed the generic review section is absent from the shared detail template.

## Intentionally deferred

- Line-by-line claim review of every individual industry page.
- Technical SEO work including structured data, canonical rules and sitemap review.
- Analytics event design and conversion measurement.
- Commit, push and production deployment.

## Recommended next phase

Phase 6: review and standardise the individual capability and industry-detail page claims, beginning with the six priority industries.
