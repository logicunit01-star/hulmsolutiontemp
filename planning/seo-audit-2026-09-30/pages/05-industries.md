# Page 5 of 58: Industries hub `/industries/`

**Status:** fixed on 30 Sep 2026. `scripts/seo-page-check.mjs industries` passes 68/68.
**Files:** `src/app/industries/page.tsx`, `content/pages/industries.ts`

## Before → after

| Signal | Live WordPress | Local before | Local after |
|---|---|---|---|
| Title / description | POS Software for All (Point of Sale) POS Industries | from snapshot ✅ | unchanged ✅ |
| H1 | HulmPOS Software for All POS Industries | "A POS setup shaped around the way your business sells" ❌ | **live H1** ✅ (the local line is now the sub-heading) |
| Words (duplicates removed) | 916 | 565 | **1,382** |
| Live H2s | 5 (Hulm POS Industries, Industries We Serve, Innovative Solutions for Every Industry, Customer Success Stories, FAQ) | 0 | **5/5**, plus the local FBR and "More POS Solutions" sections |
| "POS for …" card headings | 12 | 0 (plain names such as "Retail stores") | **12**, with the live descriptions and the local highlights |
| Industry links | 12, but 3 pointed at redirecting URLs (`/industries/bakery/`, `/salon-spa/`, `/restaurant/`) | 12 | **12 in the overview chips + 12 in the cards**, all pointing at the final URLs |
| Other internal links | 0 | 2 | features, inventory, reporting, FBR, pricing, integrations, case studies, `/blog/what-is-pos/` |
| FAQ | 4 | 5 (only the open answer in the HTML) | **9** (live 4 + local 5), all answers in the HTML |
| Reviews | 10 | none | 10 real Google reviews |
| Schema | WebPage, Breadcrumb, ImageObject | none | CollectionPage, BreadcrumbList, ItemList (12 industries), FAQPage |
| og:image | hulm-industries-1.png | missing | live image ✅ |

## Keyword coverage (live → after)
POS system 22→23 · POS systems 12→12 · POS software 4→4 · POS for 12→22 · industries 5→6 · industry 5→12 · retail 10→13 · restaurant 7→9 · pharmacy 4→6 · bakery 5→8 · salon 4→6 · cafe 4→5 · jewellery / electric / furniture / toy / manufacturing 3→3 each · inventory 15→19 · customer 15→24 · streamline 8→8 · hospitality 2→2 · health care 1→1. Every term is at or above live except "ERP" (1→0), which is off-topic for this page (it came from the live CTA "dream ERP").

## Restored from live
- The H1 and the lead sentence
- "Hulm POS Industries" with its paragraph and the 12-industry list (now linked chips)
- "Industries We Serve" with all 12 "POS for …" cards and their live descriptions
- "Innovative Solutions for Every Industry"
- "Customer Success Stories"
- The 4 live FAQs, including "What is a POS system?", which now links to `/blog/what-is-pos/`
- The "Start for free" and "Connect with sales team" CTAs

## New local content kept
The sub-heading, proof chips, the 4-image hero grid, the highlights on each priority card, the "core stays simple" foundation cards (now linking to features, inventory and reporting), the FBR block, and the 5 local FAQs.

## Changes to confirm
- The final CTA heading "Ready to build your team's **dream ERP**?" is now "…dream **POS system**?", because this page is about POS. Say if you want the original back.
- The FAQ "Is customer support available?" now says "Pakistan-based customer support over WhatsApp and phone", in line with the homepage wording that was approved.
- The FAQ "Does every setup include FBR integration?" now says FBR integration is available for every industry setup, in line with the approved pricing page.
