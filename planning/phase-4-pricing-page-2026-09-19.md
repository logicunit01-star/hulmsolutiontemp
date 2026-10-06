# Phase 4 — Pricing-page restructuring

Date: 2026-09-19  
Status: Implemented and locally verified  
Branch: `refactor/pos-focused-positioning`

## Objective

Turn the pricing page into a clear buying decision for Hulm POS. Visitors should understand the starting price, the operational difference between plans, possible additional charges and when to contact sales.

## Pricing journey

1. Pricing promise and trial/demo actions.
2. Four plan cards based on business capacity and workflow complexity.
3. Side-by-side capability comparison.
4. Optional add-ons separated from onboarding services.
5. Three-step plan-selection guidance.
6. Pricing FAQs covering trial, setup, FBR, expansion, plan changes and taxes.
7. Final trial and pricing-walkthrough actions.

## Plan structure retained

| Plan | Listed price | Included capacity |
| --- | --- | --- |
| Starter | PKR 2,500/month | 1 user, 1 branch |
| Growth | PKR 5,500/month | 5 users, 2 branches |
| Business | PKR 11,000/month | 10 users, 5 branches |
| Enterprise | Custom pricing | Tailored users and branches |

These values already existed in the project pricing source and were preserved.

## Clarity improvements

- Removed the non-functional FMCG, Healthcare, Logistics, Restaurant and Live Stock pricing tabs.
- Removed logistics from the Business plan description.
- Replaced “Most Popular” with the editorial label “For growing teams.”
- Removed “no hidden fees” because optional add-ons and services are listed.
- Removed the unexplained “billed annually” line.
- Added a clear notice to confirm billing schedule, applicable taxes, optional services and the final payable amount before purchase.
- Separated standard account setup from optional data migration and dedicated training.
- Made Enterprise contact-led instead of sending every plan to registration.
- Replaced generic social proof with decision guidance and pricing-specific FAQs.

## Files changed

- `content/pages/pricing.ts`
- `src/app/pricing/page.tsx`

## Verification

- Targeted ESLint: passed.
- Next.js production build: passed, including TypeScript and 89 generated pages.
- Desktop browser check at 1440 × 1000: passed.
- Mobile browser check at 390 × 844: passed.
- Page-level horizontal overflow: none.
- Comparison table uses a contained horizontal scroller on smaller screens.
- Browser console errors: none.
- Trial actions point to the Hulm application registration page.
- Pricing and Enterprise consultation actions point to the contact page.
- Local preview left running at `http://localhost:3100/pricing`.

## Business confirmation still required

Before publishing, Hulm should confirm that all listed plan prices, capacities, add-on prices, optional service prices and trial terms are current. The page intentionally asks visitors to confirm taxes and billing schedule because those details were not consistently defined in the source.

## Deferred to later phases

- Industry-page prioritisation and content cleanup.
- Individual capability-page claim review.
- Technical SEO, schema, sitemap and canonical audit.
- Analytics and conversion-event implementation.

