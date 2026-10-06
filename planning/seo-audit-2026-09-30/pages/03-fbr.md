# Page 3 of 58: FBR Integrated POS `/fbr-integrated-pos-pakistan/`

**Status:** fixed on 30 Sep 2026. `scripts/seo-page-check.mjs fbr` passes 69/69.
**Files:** `src/app/fbr-integrated-pos-pakistan/page.tsx` (now a dedicated page), `content/pages/fbr.ts` (new). `compliance-template.tsx` is untouched and is still used by `/zatca/`.

## Before → after

| Signal | Live WordPress | Local before | Local after |
|---|---|---|---|
| Title / description | FBR Integrated POS Software in Pakistan \| Hulm POS | hard-coded copy of live | taken from the live snapshot ✅ |
| H1 | Best FBR Integrated POS Software in Pakistan | same | same ✅ |
| Words | 557 | 945 | **1,212** |
| Live H2s | 7 | 0 of 7 (Technical Specifications, Four Steps, FAQ…) | **7/7**, plus the local sections |
| Body internal links | 0 | 0 | **20** (home, pricing, features, integrations, ecommerce store, ZATCA, 3 modules, 11 industries, small-business blog) |
| FAQ | none | 4 (only the open answer in the HTML) | **6**, all answers in the HTML |
| Schema | WebPage, Breadcrumb | FAQPage | WebPage, BreadcrumbList, Service (areaServed Pakistan), HowTo (7 invoicing steps), FAQPage |
| og:image | – | missing | ✅ |

## Keyword coverage (live → after)

| Term | Live | After | Term | Live | After |
|---|---|---|---|---|---|
| FBR integrated POS | 2 | 3 | FBR POS | 8 | 16 |
| FBR POS integration | 4 | 6 | FBR (total) | 19 (3.4 %) | 46 (3.8 %) |
| Tier-1 | 0 | 6 | QR code | 2 | 6 |
| invoice | 9 | 21 | sales tax | 2 | 4 |
| tax calculations | 5 | 5 | Pakistan | 7 | 13 |
| Shopify / WooCommerce / Magento / OpenCart | 1 each | 1 each | SRB / PRA / KPRA / IRIS | 0 | ✓ (local addition) |

FBR density is kept close to the live level (3.8 % vs 3.4 %). The check fails above 55 mentions to prevent stuffing.

## Restored from live (all 7 H2s)
FBR POS Integration in Pakistan (both paragraphs plus the 5 "why retailers trust Hulm" points) · Benefits of Hulm Solutions FBR POS (6) · Our FBR POS Integration Services (11 store types, each now linking to its industry page) · Who Should Integrate FBR POS (the 5 Tier-1 criteria) · E-Commerce FBR POS Integration (the 6 platforms) · How FBR POS Invoicing Works (7 steps) · Your Competitors Already Have a System. Do You? · the "Getting FBR notices?" lead and the "Start for free / Talk to sales" CTAs

## New local content kept
The "Connect eligible sales…" description, the proof chips, the "What the FBR integration can support" section (4 capabilities, including SRB/PRA/BRA/KPRA), the 4 setup steps (IRIS portal, POS ID, tax mapping), and the 4 careful FAQs (Tier-1, QR receipts, internet down, provincial authorities).

## Added
Two FAQs: "Is FBR integration included in Hulm POS pricing?" (links to /pricing/) and "Which POS is best for a small business in Pakistan that needs FBR integration?" (links to the blog). Also a "Explore Hulm POS" link strip and a visible breadcrumb.

## Claims softened (please confirm)
| Live wording | Now |
|---|---|
| "our **certified** team provides free FBR POS integration" | "Hulm's implementation team provides free FBR POS integration support" |
| "Proven Track Record: Our system runs with great success in **millions of retail outlets** all over Pakistan" | replaced by "Built for Pakistani retail: designed around the way marts, restaurants, pharmacies and multi-branch retailers in Pakistan actually sell." The "millions of outlets" figure cannot be backed up and is risky to keep. |
| "Easy Tax Filing: **Automatically create sales tax returns**" | "Easier tax filing: sales tax reports are ready when you need them…" Restore the original only if Hulm actually files or prepares returns. |
| "Avoid fines and penalties" | "Reduce the risk of fines and penalties" |
| E-commerce list (Shopify, WooCommerce, Magento, OpenCart, Zen Cart) | kept as on live. **Please confirm** these integrations exist today. |
| Tier-1 criteria list | kept, with a note: "Rules can change. Confirm… with FBR or a qualified tax adviser." |
