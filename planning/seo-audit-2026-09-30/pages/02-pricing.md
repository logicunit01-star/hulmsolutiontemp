# Page 2 of 58: Pricing `/pricing/`

**Status:** fixed on 30 Sep 2026. `scripts/seo-page-check.mjs pricing` passes 83/83.
**Files:** `src/app/pricing/page.tsx`, `content/pages/pricing.ts`, plus the new shared components `src/components/seo/faq-details.tsx` and `src/components/home/review-grid.tsx`

## Before → after

| Signal | Live WordPress | Local before | Local after |
|---|---|---|---|
| Title | Hulm POS Software Price in Pakistan \| Hulm Solutions | same (from snapshot) | same ✅ |
| Description | Explore Hulm POS software price in Pakistan… | same | same ✅ |
| H1 | Simple Pricing for Every Business | "Choose the level of control your business needs" ❌ | **Simple Pricing for Every Business** ✅ (the local line is now the sub-heading) |
| Words (duplicates removed) | ~920 (the live page repeats its plan cards 5×) | 612 | **1,327** |
| Live H2s kept | 7 | 0 | **7/7** (Quick Feature Comparison, Add-ons & Onboarding Charges, Why Choose Hulm Solutions?, FAQ, Customer Success Stories, Start Running Your Business Smarter Today, plus the Plans heading) |
| Body internal links | 1 (sign-up) | 2 | **19** (home, features, FBR, 7 modules, integrations, 4 industries, cattle, case studies, free-POS blog, contact) |
| FAQs | 4 | 6 (only the open answer was in the HTML) | **8**, all answers in the HTML, FAQPage schema matches |
| Reviews | 10 Google reviews | none | **10** (the same real reviews) |
| Schema | WebPage, Breadcrumb | FAQPage only | WebPage, BreadcrumbList, SoftwareApplication with 3 PKR monthly Offers, FAQPage |
| og:image | – | missing | hero image ✅ |

## Keyword coverage (live → after)

| Term | Live | After | Term | Live | After |
|---|---|---|---|---|---|
| POS software price in Pakistan | 0 (title only) | 1 | FBR | 11 | 13 |
| Tier-1 | 2 | 4 | FBR integration | 6 | 9 |
| pricing | 4 | 10 | PKR | 9 | 17 |
| inventory | 11 | 11 | CRM | 3 | 3 |
| order management | 3 | 4 | reporting / analytics | 5 / 3 | 5 / 3 |
| logistics | 3 | 6 | API | 4 | 4 |
| free trial | 5 | 11 | branch | 12 | 17 |
| Hulm Solutions / Hulm POS | 4 / 3 | 4 / 9 | retail / restaurant | 5 / 3 | 6 / 4 |

## Restored from live
- The H1 and the lead line "Run your sales, inventory, customers, and operations from one platform. No hidden fees. Start free for 14 days."
- Plan audiences: "Best for small shops and startups", "For growing businesses handling vendors and multiple staff", "The complete suite for multi-branch operations", "For franchises and large retail chains"
- "Native FBR integration (Tier-1)", "Logistics tracking" on the Business plan, "Starting at" before each price, the "Most Popular" badge, and "Contact us for pricing"
- "Quick Feature Comparison" (now 14 rows; feature names link to their module pages)
- "Add-ons & Onboarding Charges" with the live line "Build your perfect suite. Only pay for what you need."
- "Why Choose Hulm Solutions?" (5 points)
- The live FAQs: setup fees, FBR in price, own hardware, switch plans
- "Customer Success Stories" (10 reviews) and the "Start Running Your Business Smarter Today" CTA

## New local content kept
- The sub-heading "Choose the level of control your business needs", the proof chips, the plan summaries and capacity lines, the pricing disclaimer, the "Match the plan to today's workflow" 3-step guidance, and the FAQs on taxes and adding users/branches.

## Added (not on either version)
- An intro sentence: "Hulm POS software price in Pakistan starts at PKR 2,500 per month". It puts the title keyword in the body once.
- An "Is there free POS software in Pakistan?" FAQ that links to `/blog/best-free-pos-software-and-system/`
- A "POS pricing that fits your industry" strip. It replaces the live page's broken pricing-calculator shortcode (`[advanced_pricing_calculator]` rendered as raw text on live) and its FMCG / Healthcare / Logistics / Restaurant / Live Stock tabs.
- A visible breadcrumb (Home / Pricing)

## Wording kept cautious (please confirm)
- "Certified FBR compliance (POS)" → "FBR-compliant POS invoicing with Tier-1 FBR integration". Keep "Certified" only if you hold a certificate you can show.
- Enterprise: "Unlimited Users & Branches" and "SLA Guarantee" stay as the local "Tailored users and branches" and "Service-level agreement (SLA) options". Say if you want the live wording back.
