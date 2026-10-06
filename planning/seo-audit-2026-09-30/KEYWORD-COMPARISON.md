# Keyword comparison: local rebuild vs live hulmsolutions.com (2 Oct 2026)

**How this was measured.** For each page, the script counts keyword phrases in the visible `<main>` text of the local build and of the live WordPress snapshot (`productionParityData.json`). Header, footer, scripts and styles are excluded. It also records where each phrase appears: **T** = title tag, **H1**, **H2×n** = the number of H2/H3 headings containing it. Script: `.guard/kwcmp.mjs`. Blog and insights pages are excluded because they are byte-for-byte copies.

**Caveats.**
- Counts are substring matches, so "pos" also matches words like "position", and "spa" also matches "space".
- Read the short head terms as rough indicators. The multi-word phrases are exact.

## Summary

- **Title tags:** all 36 pages keep the live title exactly.
- **H1 keywords:** every keyword in a live H1 is also in the local H1, with three exceptions: salon "salon pos", restaurant "point of sale" and pricing "pricing" (see Losses).
- **Headings:** local pages put the primary keyword in more H2s than live on almost every page. This is the strongest relevance signal after the title and H1.
- **Raw counts:** local pages are shorter (benchmark design), so raw counts are often lower.
- **Density:** the share of words that are keywords is usually equal to or higher than live.

### Losses to fix (local is clearly under live)

| Page | Gap |
|---|---|
| `/industries/salon-pos/` | "salon pos" appears 5 times locally vs 17 live. **Missing from the H1** (live has it in the H1 and 5 H2s). Biggest single gap. |
| `/industries/restaurant-pos/` | "point of sale" is in the live H1 and an H2; locally it is only in the title. |
| `/pos-software-uae/`, `-ksa/`, `-qatar/`, `-usa/` | "pos software", "pos system" and "point of sale" run at about half of live density (e.g. USA "point of sale" 5 vs 18; UAE "dubai" 2 vs 9). These pages target several phrase variants, and the live pages repeat all of them. |
| `/pricing/` | "pricing" is in the live H1; the local H1 says "price". It is still in 2 H2s and the title. |
| `/inventory-management/` | "inventory management" 23 vs 43 (1.7% vs 2.8%). |
| `/order-management/` | "order management" 25 vs 42 (1.9% vs 3.3%). |
| `/logistics-management-software/` | "logistics" 16 vs 35; live has it in 13 headings, local in 4. |
| `/industries/` | "pos system" 3 vs 27. Live repeats "<industry> POS system" in every card; local cards use the industry names only. |
| `/` homepage | "pakistan" 11 vs 46. It is still in the title, H1 and 3 H2s, so this is acceptable, but 3–4 more natural mentions would help. |
| `/industries/bakery-pos-system/` | "recipe" 0 vs 4 (a long-tail term, bakery recipe costing). |
| `/industries/pharmacy-store/` | "medicine" is in 2 live H2s and none locally. |

### Possible over-optimisation (watch, but within normal range)

Short pages with many headings push head-term density above live:

| Term | Local | Live |
|---|---|---|
| salon | 5.3% | 3.4% |
| furniture | 5.0% | 2.4% |
| toy | 4.9% | 3.5% |
| order | 5.0% | 5.4% |
| customer | 4.7% | 3.3% |
| cafe | 4.3% | 3.1% |
| manufactur | 4.0% | 2.0% |

Exact-match phrases above 2%:

- "furniture store" 2.4%
- "electric store" 2.4%
- "jewelry pos" 2.1%
- "purchase order" 2.9%

None of these read as stuffed in context: most of the mentions are in headings and FAQ questions. Two easy fixes:

- **Furniture and electric pages:** swap 2–3 body mentions for variants ("furniture showroom", "electronics shop") rather than adding more.
- **Salon page:** the fix for "salon pos" also lowers raw "salon" density by moving it into phrases.

### Gains (local now covers terms live did not)

- **Pricing:** "plan" and "price" are now in the H1 and H2s.
- **ZATCA:** "e-invoicing" 8 vs 1, "saudi" 7 vs 0.
- **Integration:** "fbr" 12 vs 0.
- **Customer management:** "customer management" 5 vs 0, "loyalty" 9 vs 1.
- **Reporting:** "sales report" now appears in H2s.
- **Pharmacy:** "pharmacy pos" 8 vs 1, now in the H1.
- **Retail:** "retail pos" 10 vs 4.
- **Contact and case-studies hub:** these went from thin pages (70 and 205 words) to full pages.

## Core pages

| Page (words local / live) | Keyword | Count local / live | Per 100 words local / live | Where it appears, local | Where it appears, live |
|---|---|---|---|---|---|
| `/` (881 / 2761) | pos software | 10 / 8 | 1.14 / 0.29 | T H1 H2×4 | T H1 |
|  | pos system | 5 / 5 | 0.57 / 0.18 | H2×3 | H2×2 |
|  | point of sale | 2 / 2 | 0.23 / 0.07 | T | T |
|  | pakistan | 11 / 46 | 1.25 / 1.67 | T H1 H2×3 | T H1 H2×2 |
|  | fbr | 15 / 24 | 1.7 / 0.87 | H2×2 | H2×1 |
|  | inventory | 11 / 12 | 1.25 / 0.43 | H2×2 | H2×2 |
|  | retail | 5 / 11 | 0.57 / 0.4 | H2×1 | body only |
|  | restaurant | 5 / 9 | 0.57 / 0.33 | H2×1 | body only |
| `/pricing/` (698 / 1457) | pricing | 8 / 8 | 1.15 / 0.55 | H2×2 | H1 |
|  | pos software | 5 / 3 | 0.72 / 0.21 | T H1 H2×1 | T |
|  | pos system | 3 / 1 | 0.43 / 0.07 | H2×1 | body only |
|  | price | 10 / 1 | 1.43 / 0.07 | T H1 H2×3 | T |
|  | pakistan | 5 / 4 | 0.72 / 0.27 | T H1 H2×1 | T |
|  | plan | 19 / 3 | 2.72 / 0.21 | H1 H2×4 | body only |
| `/fbr-integrated-pos-pakistan/` (1012 / 537) | fbr integrated pos | 5 / 2 | 0.49 / 0.37 | T H1 H2×1 | T H1 |
|  | fbr | 39 / 19 | 3.85 / 3.54 | T H1 H2×10 | T H1 H2×6 |
|  | pos | 47 / 18 | 4.64 / 3.35 | T H1 H2×12 | T H1 H2×6 |
|  | pakistan | 14 / 7 | 1.38 / 1.3 | T H1 H2×2 | T H1 H2×1 |
|  | invoice | 14 / 9 | 1.38 / 1.68 | body only | body only |
|  | tax | 8 / 10 | 0.79 / 1.86 | H2×2 | body only |
| `/features/` (1058 / 1121) | features | 11 / 8 | 1.04 / 0.71 | T H1 H2×8 | T H1 H2×1 |
|  | pos software | 7 / 3 | 0.66 / 0.27 | T H2×1 | T |
|  | pos system | 5 / 3 | 0.47 / 0.27 | H1 H2×1 | H1 |
|  | inventory | 17 / 16 | 1.61 / 1.43 | H2×1 | H2×3 |
|  | reports | 1 / 2 | 0.09 / 0.18 | body only | body only |
| `/industries/` (648 / 1121) | industries | 5 / 5 | 0.77 / 0.45 | T H1 H2×4 | T H1 H2×2 |
|  | pos software | 2 / 4 | 0.31 / 0.36 | T H1 | T H1 |
|  | pos system | 3 / 27 | 0.46 / 2.41 | H2×2 | body only |
|  | retail | 6 / 10 | 0.93 / 0.89 | H2×1 | H2×1 |
|  | restaurant | 5 / 7 | 0.77 / 0.62 | H2×1 | H2×1 |

## Industry pages

| Page (words local / live) | Keyword | Count local / live | Per 100 words local / live | Where it appears, local | Where it appears, live |
|---|---|---|---|---|---|
| `/industries/retail-store/` (824 / 1064) | retail pos | 10 / 4 | 1.21 / 0.38 | T H2×6 | T |
|  | pos system | 8 / 2 | 0.97 / 0.19 | T H1 H2×5 | T H1 H2×1 |
|  | pos software | 2 / 3 | 0.24 / 0.28 | body only | body only |
|  | retail | 26 / 12 | 3.16 / 1.13 | T H1 H2×13 | T H1 H2×2 |
|  | inventory | 9 / 13 | 1.09 / 1.22 | H2×1 | body only |
| `/industries/restaurant-pos/` (833 / 1420) | restaurant pos | 9 / 12 | 1.08 / 0.85 | T H1 H2×6 | T H1 |
|  | point of sale | 3 / 5 | 0.36 / 0.35 | T | T H1 H2×1 |
|  | pos system | 4 / 6 | 0.48 / 0.42 | H2×4 | H2×1 |
|  | restaurant | 27 / 26 | 3.24 / 1.83 | T H1 H2×15 | T H1 H2×2 |
|  | kitchen | 8 / 8 | 0.96 / 0.56 | H2×2 | body only |
| `/industries/pharmacy-store/` (744 / 1013) | pharmacy pos | 8 / 1 | 1.08 / 0.1 | H1 H2×5 | H2×1 |
|  | pos system | 6 / 3 | 0.81 / 0.3 | H1 H2×4 | H2×2 |
|  | pharmacy | 28 / 8 | 3.76 / 0.79 | T H1 H2×17 | T H1 H2×3 |
|  | medicine | 4 / 8 | 0.54 / 0.79 | body only | H2×2 |
|  | expiry | 17 / 3 | 2.28 / 0.3 | H1 H2×4 | body only |
| `/industries/bakery-pos-system/` (747 / 1159) | bakery pos | 10 / 14 | 1.34 / 1.21 | T H1 H2×6 | T H1 H2×5 |
|  | pos system | 6 / 12 | 0.8 / 1.04 | T H1 H2×5 | T H1 H2×3 |
|  | bakery | 27 / 29 | 3.61 / 2.5 | T H1 H2×15 | T H1 H2×5 |
|  | recipe | 0 / 4 | 0 / 0.35 | body only | body only |
| `/industries/salon-pos/` (641 / 1397) | salon pos | 5 / 17 | 0.78 / 1.22 | T H2×2 | T H1 H2×5 |
|  | pos system | 5 / 17 | 0.78 / 1.22 | H2×4 | H1 H2×3 |
|  | salon | 34 / 48 | 5.3 / 3.44 | T H1 H2×18 | T H1 H2×10 |
|  | spa | 12 / 21 | 1.87 / 1.5 | T H1 H2×3 | T H1 H2×4 |
|  | appointment | 11 / 4 | 1.72 / 0.29 | H1 H2×2 | body only |
| `/industries/clothing-store/` (749 / 917) | clothing store | 10 / 11 | 1.34 / 1.2 | T H1 H2×6 | T H1 H2×2 |
|  | pos system | 4 / 3 | 0.53 / 0.33 | T H1 H2×3 | T H1 H2×1 |
|  | clothing | 16 / 17 | 2.14 / 1.85 | T H1 H2×11 | T H1 H2×2 |
|  | size | 9 / 1 | 1.2 / 0.11 | H1 H2×1 | body only |
| `/industries/cafe/` (671 / 1296) | cafe pos | 12 / 14 | 1.79 / 1.08 | T H1 H2×7 | T H1 H2×3 |
|  | pos system | 11 / 18 | 1.64 / 1.39 | T H1 H2×5 | T H1 H2×2 |
|  | cafe | 29 / 40 | 4.32 / 3.09 | T H1 H2×11 | T H1 H2×7 |
|  | menu | 3 / 3 | 0.45 / 0.23 | H2×1 | H2×1 |
| `/industries/jewellery-shop/` (619 / 1248) | jewelry pos | 13 / 11 | 2.1 / 0.88 | T H1 H2×10 | T H1 H2×5 |
|  | jewellery | 1 / 2 | 0.16 / 0.16 | body only | H2×1 |
|  | jewelry | 23 / 21 | 3.72 / 1.68 | T H1 H2×12 | T H1 H2×7 |
|  | gold | 3 / 0 | 0.48 / 0 | body only | body only |
| `/industries/electric-store/` (586 / 1011) | electric store | 14 / 13 | 2.39 / 1.29 | T H1 H2×8 | T H1 H2×2 |
|  | pos system | 5 / 3 | 0.85 / 0.3 | T H1 H2×4 | T H1 H2×1 |
|  | electric | 21 / 20 | 3.58 / 1.98 | T H1 H2×9 | T H1 H2×3 |
|  | warranty | 5 / 1 | 0.85 / 0.1 | body only | body only |
| `/industries/furniture-store/` (541 / 916) | furniture store | 13 / 9 | 2.4 / 0.98 | T H1 H2×8 | T H1 H2×2 |
|  | pos system | 6 / 3 | 1.11 / 0.33 | T H1 H2×4 | T H1 H2×1 |
|  | furniture | 27 / 22 | 4.99 / 2.4 | T H1 H2×8 | T H1 H2×3 |
| `/industries/toys-store/` (680 / 1313) | toy store pos | 13 / 12 | 1.91 / 0.91 | T H1 H2×8 | T H1 H2×4 |
|  | pos system | 10 / 11 | 1.47 / 0.84 | T H1 H2×5 | T H1 H2×1 |
|  | toy | 33 / 46 | 4.85 / 3.5 | T H1 H2×10 | T H1 H2×8 |
| `/industries/manufacturing-industries/` (570 / 882) | manufacturing | 19 / 14 | 3.33 / 1.59 | H1 H2×9 | H1 H2×2 |
|  | manufactur | 23 / 18 | 4.04 / 2.04 | T H1 H2×10 | T H1 H2×3 |
|  | pos system | 8 / 3 | 1.4 / 0.34 | T H1 H2×4 | T H1 |
|  | raw material | 2 / 0 | 0.35 / 0 | body only | body only |

## Module pages

| Page (words local / live) | Keyword | Count local / live | Per 100 words local / live | Where it appears, local | Where it appears, live |
|---|---|---|---|---|---|
| `/mobile-pos/` (1427 / 1721) | mobile pos | 21 / 26 | 1.47 / 1.51 | T H1 H2×10 | T H1 H2×7 |
|  | pos system | 7 / 16 | 0.49 / 0.93 | T H1 H2×4 | T H1 H2×4 |
|  | mobile | 37 / 33 | 2.59 / 1.92 | T H1 H2×12 | T H1 H2×8 |
| `/inventory-management/` (1327 / 1551) | inventory management | 23 / 43 | 1.73 / 2.77 | T H1 H2×10 | T H1 H2×5 |
|  | inventory | 44 / 69 | 3.32 / 4.45 | T H1 H2×12 | T H1 H2×7 |
|  | stock | 35 / 26 | 2.64 / 1.68 | H2×3 | body only |
| `/purchase-orders/` (1427 / 1309) | purchase order | 41 / 33 | 2.87 / 2.52 | T H1 H2×17 | T H1 H2×5 |
|  | vendor | 4 / 1 | 0.28 / 0.08 | body only | H2×1 |
|  | supplier | 16 / 14 | 1.12 / 1.07 | H2×1 | body only |
| `/customer-management/` (1226 / 947) | customer management | 5 / 0 | 0.41 / 0 | H2×1 | body only |
|  | crm | 5 / 7 | 0.41 / 0.74 | H2×1 | H2×1 |
|  | customer | 57 / 31 | 4.65 / 3.27 | T H1 H2×11 | T H1 H2×7 |
|  | loyalty | 9 / 1 | 0.73 / 0.11 | H2×1 | body only |
| `/order-management/` (1308 / 1284) | order management | 25 / 42 | 1.91 / 3.27 | T H1 H2×10 | T H1 H2×7 |
|  | order | 65 / 69 | 4.97 / 5.37 | T H1 H2×15 | T H1 H2×9 |
| `/vendors-management/` (1271 / 915) | vendor management | 12 / 10 | 0.94 / 1.09 | T H1 H2×6 | T H1 H2×4 |
|  | vendor | 31 / 20 | 2.44 / 2.19 | T H1 H2×8 | T H1 H2×6 |
|  | supplier | 22 / 4 | 1.73 / 0.44 | T H2×3 | T |
| `/reporting-module/` (1249 / 879) | reporting | 21 / 15 | 1.68 / 1.71 | T H1 H2×6 | T H1 H2×6 |
|  | report | 34 / 21 | 2.72 / 2.39 | T H1 H2×11 | T H1 H2×7 |
|  | sales report | 3 / 0 | 0.24 / 0 | H2×2 | body only |
| `/logistics-management-software/` (1056 / 1099) | logistics management | 8 / 12 | 0.76 / 1.09 | T H1 H2×3 | T H1 H2×4 |
|  | logistics | 16 / 35 | 1.52 / 3.18 | T H1 H2×4 | T H1 H2×13 |
|  | delivery | 14 / 9 | 1.33 / 0.82 | H2×2 | H2×2 |
| `/cattle-management-software/` (1203 / 1013) | cattle management | 6 / 3 | 0.5 / 0.3 | T H1 H2×2 | T H1 |
|  | cattle | 8 / 4 | 0.67 / 0.39 | T H1 H2×2 | T H1 |
|  | dairy | 4 / 1 | 0.33 / 0.1 | body only | body only |
| `/website/` (1197 / 1517) | ecommerce | 6 / 1 | 0.5 / 0.07 | T H1 H2×1 | T H1 |
|  | online store | 3 / 5 | 0.25 / 0.33 | H1 H2×1 | H2×2 |
|  | website | 10 / 15 | 0.84 / 0.99 | H2×1 | H2×3 |
| `/integration/` (831 / 471) | integration | 25 / 20 | 3.01 / 4.25 | T H1 H2×10 | T H1 H2×13 |
|  | pos | 33 / 12 | 3.97 / 2.55 | T H1 H2×6 | T H1 H2×1 |
|  | fbr | 12 / 0 | 1.44 / 0 | H2×2 | body only |

## Country and ZATCA pages

| Page (words local / live) | Keyword | Count local / live | Per 100 words local / live | Where it appears, local | Where it appears, live |
|---|---|---|---|---|---|
| `/pos-software-uae/` (1510 / 1745) | pos software | 11 / 21 | 0.73 / 1.2 | T H1 H2×4 | T H1 H2×4 |
|  | pos system | 9 / 16 | 0.6 / 0.92 | H2×6 | H2×2 |
|  | point of sale | 4 / 14 | 0.26 / 0.8 | T H2×1 | T H2×2 |
|  | uae | 13 / 27 | 0.86 / 1.55 | T H1 H2×6 | T H1 H2×6 |
|  | dubai | 2 / 9 | 0.13 / 0.52 | T | T |
| `/pos-software-ksa/` (1487 / 1722) | pos software | 10 / 21 | 0.67 / 1.22 | H1 H2×4 | H1 H2×3 |
|  | pos system | 9 / 24 | 0.61 / 1.39 | H2×6 | H2×2 |
|  | point of sale | 5 / 14 | 0.34 / 0.81 | T H1 H2×1 | T H1 H2×2 |
|  | ksa | 8 / 12 | 0.54 / 0.7 | T H1 H2×5 | T H1 H2×3 |
|  | saudi | 16 / 22 | 1.08 / 1.28 | T H1 H2×3 | T H1 H2×3 |
|  | zatca | 8 / 4 | 0.54 / 0.23 | H2×1 | H2×2 |
| `/pos-software-qatar/` (1536 / 1680) | pos software | 9 / 14 | 0.59 / 0.83 | H2×4 | H2×3 |
|  | pos system | 10 / 27 | 0.65 / 1.61 | T H1 H2×6 | T H1 H2×2 |
|  | point of sale | 5 / 13 | 0.33 / 0.77 | T H1 H2×1 | T H1 H2×2 |
|  | qatar | 30 / 30 | 1.95 / 1.79 | T H1 H2×9 | T H1 H2×5 |
|  | doha | 1 / 0 | 0.07 / 0 | body only | body only |
| `/pos-software-usa/` (1479 / 1588) | pos software | 8 / 17 | 0.54 / 1.07 | H2×4 | H2×2 |
|  | pos system | 9 / 12 | 0.61 / 0.76 | H2×6 | H2×1 |
|  | point of sale | 5 / 18 | 0.34 / 1.13 | T H1 H2×1 | T H1 H2×3 |
|  | usa | 10 / 13 | 0.68 / 0.82 | T H1 H2×5 | T H1 H2×2 |
| `/zatca/` (880 / 382) | zatca | 19 / 14 | 2.16 / 3.66 | T H1 H2×7 | T H1 H2×2 |
|  | e-invoicing | 8 / 1 | 0.91 / 0.26 | T H2×3 | T |
|  | saudi | 7 / 0 | 0.8 / 0 | H1 H2×1 | body only |
|  | pos | 26 / 4 | 2.95 / 1.05 | T H1 H2×4 | T H1 |

## Company pages

| Page (words local / live) | Keyword | Count local / live | Per 100 words local / live | Where it appears, local | Where it appears, live |
|---|---|---|---|---|---|
| `/about/` (867 / 865) | hulm | 23 / 14 | 2.65 / 1.62 | T H2×2 | T |
|  | pos | 29 / 20 | 3.34 / 2.31 | H2×1 | body only |
|  | about | 3 / 2 | 0.35 / 0.23 | T H1 | T H1 |
| `/contact/` (557 / 70) | contact | 1 / 1 | 0.18 / 1.43 | T | T |
|  | hulm | 18 / 1 | 3.23 / 1.43 | T H2×2 | T |
|  | pos | 15 / 1 | 2.69 / 1.43 | body only | body only |
| `/pos-case-studies/` (1076 / 205) | case stud | 6 / 1 | 0.56 / 0.49 | T H1 | T H1 |
|  | pos | 34 / 12 | 3.16 / 5.85 | T H1 H2×6 | T H1 |
|  | hulm | 23 / 3 | 2.14 / 1.46 | T H1 H2×2 | T |
