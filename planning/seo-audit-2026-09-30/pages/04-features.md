# Page 4 of 58: Features `/features/`

**Status:** fixed on 30 Sep 2026. `scripts/seo-page-check.mjs features` passes 71/71.
**Files:** `src/app/features/page.tsx`, `content/pages/features.ts` (new). The pricing cards come from `content/pages/pricing.ts`, so prices only need changing in one place.

## Before → after

| Signal | Live WordPress | Local before | Local after |
|---|---|---|---|
| Title / description | Hulm POS Software Features for Retail & Restaurants & More! | hard-coded copy | taken from the live snapshot ✅ |
| H1 | Complete POS System Features for Modern Businesses | "POS & Billing Features for Daily Sales" ❌ | **live H1** ✅ (the local line is now the sub-heading) |
| Words (duplicates removed) | 925 | ~390 | **1,261** |
| Live H2s | 7 | 0 | **8/8** (Features Tailored to Your Business, Retail, Restaurant, Service Business, Comprehensive Feature Set, Our Tailored POS Price Model, Seamless Integrations, Customer Success Stories) |
| Body internal links | 0 | 0 | **17** |
| FAQ | none | none | 4 (new), all answers in the HTML |
| Reviews | 10 | 9 (via the old carousel) | 10 real Google reviews |
| Schema | WebPage, Breadcrumb, ImageObject | none | WebPage, BreadcrumbList, SoftwareApplication (with featureList and an Offer), FAQPage |
| og:image | social.png | missing | live og image ✅ |

## Keyword coverage (live → after)
POS system 3→4 · POS software 3→7 · point of sale 1→3 · feature 9→25 · retail 7→12 · restaurant 4→11 · service business 2→4 · inventory 15→17 · customer 12→20 · sales 11→19 · checkout 3→8 · table / kitchen / delivery / recipe 1–2→3–4 · loyalty 3→4 · stock 6→6 · security 2→2 · pricing 5→5 · Pakistan 5→8 · integration 8→10 · analytics 3→5. Every term is at or above live.

## Restored from live
- The H1 and the intro ("Powerful point of sale software… retail stores, restaurants, and service businesses")
- The retail features (6) and restaurant features (6). They were tabs on live; they are now sections, so every feature is in the HTML.
- The four-part "Comprehensive Feature Set" (12 features)
- "Our Tailored POS Price Model" with 4 plan cards
- "Seamless Integrations" (the Shopify, Stripe, Google Analytics and Slack logos, plus WooCommerce and WhatsApp)
- "Customer Success Stories"

## Fixed live bugs
- The live **Service Business tab repeated the restaurant features**. It now lists real service-business features (appointments, service billing, visit history), taken from Hulm's own salon page.
- The live Restaurants tab reused the retail description. It now has its own.
- Typo "Quick checout" corrected.

## New local content kept
The sub-heading "POS & Billing Features for Daily Sales", the Pakistan-specific description, and the 6 "Core POS & Billing" cards.

## Added
- Links from each feature to its module page (inventory, reporting, customers, orders, purchase orders, logistics, mobile POS, FBR)
- Links to the retail, restaurant and salon industry pages
- 4 FAQs linking to `/blog/what-is-pos/`, `/blog/how-does-pos-machine-work/`, the FBR page and the restaurant page
- A breadcrumb

## Please confirm (product capability claims carried over from live)
| Claim | Change made |
|---|---|
| "Accept all payments, including cards, mobile wallets, and contactless" | now "Record cash, card, mobile wallet and contactless payments". Confirm card and wallet payments are supported. |
| "Integrates with **100+** popular business applications" | the number is removed. Keep it only if there is a list that backs it up. |
| "end-to-end encryption" | now "encrypted connections" |
| "Send targeted **email campaigns**, SMS promotions…" | email campaigns removed (only the SMS add-on appears on the pricing page). Restore it if the email feature exists. |
| Kitchen display system, split bills and tips, recipe management, table management, delivery integration | kept as on live. Please confirm each exists today. |
