# Phase 2 — POS-focused homepage

Date: 2026-09-19  
Status: Implemented and locally verified  
Branch: `refactor/pos-focused-positioning`

## Objective

Rebuild the homepage around one clear positioning statement: Hulm is a cloud POS platform that connects sales, inventory and daily operations for growing businesses. The page should help a visitor understand the product, confirm its fit and choose a next step without navigating through unrelated applications.

## Homepage journey

1. POS-focused hero with free-trial and WhatsApp-demo actions.
2. Three recognisable operational problems.
3. Four connected outcomes: sell, stock, operate and grow.
4. Carefully qualified FBR integration section.
5. Six priority industries.
6. Real Hulm product screens.
7. Existing customer review excerpts, excluding logistics-related proof.
8. Starting-price preview.
9. Six purchase-oriented FAQs.
10. Final free-trial and demo call to action.

## Positioning decisions

- Replaced the generic “complete business suite” opening with a direct Hulm POS promise.
- Removed cattle management and logistics from the homepage discovery journey.
- Removed broad competitor comparisons, award strips, inflated onboarding claims and unsupported market-leading language.
- Kept FBR wording conditional and setup-oriented instead of presenting a universal compliance guarantee.
- Used the current PKR 2,500 starting price and 14-day trial already present in the project content.
- Sent trial actions to `https://app.hulmsolutions.com/Register` and demo actions to the existing WhatsApp number.
- Preserved all legacy application routes; this phase changes homepage discovery, not product availability.

## Product and industry proof

The page uses existing project assets rather than fabricated UI:

- Create sales order screen.
- Product catalogue screen.
- Customer directory screen.
- Existing retail, restaurant, pharmacy, bakery, salon and clothing industry photography.
- Existing customer review excerpts for retail and restaurant use cases.

## Files changed

- `content/pages/home.ts`
- `src/app/page.tsx`

Shared navigation and footer changes from Phase 1 remain in the same working branch.

## Verification

- Targeted ESLint: passed.
- Next.js production build: passed, including TypeScript and static generation of 89 pages.
- Desktop browser check at 1440 × 1000: passed.
- Mobile browser check at 390 × 844: passed.
- Horizontal overflow: none at either tested breakpoint.
- Browser console errors: none.
- Trial, product, FBR, pricing and industry destinations checked against generated routes.
- Local preview left running at `http://localhost:3100/`.

## Deferred to later phases

- Product/apps information architecture and route consolidation.
- Detailed feature-page copy and claim review.
- Pricing-page restructuring.
- Industry-page prioritisation and content cleanup.
- Site-wide metadata, schema and technical SEO review.
- Analytics and conversion-event implementation.

