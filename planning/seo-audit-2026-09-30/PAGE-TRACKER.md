# Page-by-page tracker (58 legacy URLs)

**Updated 30 Sep 2026 (evening).** Every non-blog page now uses the SEO overlay method (`SEO-OVERLAY-METHOD.md`): benchmark (staging) layout and copy, plus the live title and meta description, a keyword H1, keyword H2s, FAQ answers in the HTML with FAQPage schema, WebPage and BreadcrumbList schema, an og:image, and internal-link chips. Blog, blogs and insights pages are kept byte-for-byte, as the user asked.

Checking: `BASE_URL=http://localhost:3100 node scripts/seo-site-scan.mjs` checks all 44 non-blog URLs; the last run passed 44/44. Pages 1–5 also pass their per-page configs (`scripts/seo-page-configs/*.json`).

Word counts are live→local, measured inside `<main>`. Local pages are deliberately at benchmark length rather than WordPress length.

| # | URL | Title | H1 | Words live→local | Body links lost | Method | Status | QA |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` | ✅ live | ✅ keyword H1 | 2761→856 | 0 | ✅ overlay | ✅ scan clean (config check passes) | ⬜ team review |
| 2 | `/pricing/` | ✅ live | ✅ keyword H1 | 1457→693 | 0 | ✅ overlay | ✅ scan clean (config check passes) | ⬜ team review |
| 3 | `/fbr-integrated-pos-pakistan/` | ✅ live | ✅ keyword H1 | 537→1013 | 0 | ✅ overlay | ✅ scan clean (config check passes) | ⬜ team review |
| 4 | `/features/` | ✅ live | ✅ keyword H1 | 1121→885 | 0 | ✅ overlay | ✅ scan clean (config check passes) | ⬜ team review |
| 5 | `/industries/` | ✅ live | ✅ keyword H1 | 1121→650 | 0 | ✅ overlay | ✅ scan clean (config check passes) | ⬜ team review |
| 6 | `/industries/retail-store/` | ✅ live | ✅ keyword H1 | 1064→714 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 7 | `/industries/restaurant-pos/` | ✅ live | ✅ keyword H1 | 1420→663 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 8 | `/industries/pharmacy-store/` | ✅ live | ✅ keyword H1 | 1013→633 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 9 | `/industries/bakery-pos-system/` | ✅ live | ✅ keyword H1 | 1159→640 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 10 | `/industries/salon-pos/` | ✅ live | ✅ keyword H1 | 1397→591 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 11 | `/industries/clothing-store/` | ✅ live | ✅ keyword H1 | 917→639 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 12 | `/industries/cafe/` | ✅ live | ✅ keyword H1 | 1296→564 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 13 | `/industries/jewellery-shop/` | ✅ live | ✅ keyword H1 | 1248→505 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 14 | `/industries/electric-store/` | ✅ live | ✅ keyword H1 | 1011→471 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 15 | `/industries/furniture-store/` | ✅ live | ✅ keyword H1 | 916→425 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 16 | `/industries/toys-store/` | ✅ live | ✅ keyword H1 | 1313→568 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 17 | `/industries/manufacturing-industries/` | ✅ live | ✅ keyword H1 | 882→457 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 18 | `/mobile-pos/` | ✅ live | ✅ keyword H1 | 1721→1299 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 19 | `/inventory-management/` | ✅ live | ✅ keyword H1 | 1551→1227 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 20 | `/purchase-orders/` | ✅ live | ✅ keyword H1 | 1309→1336 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 21 | `/customer-management/` | ✅ live | ✅ keyword H1 | 947→1134 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 22 | `/order-management/` | ✅ live | ✅ keyword H1 | 1284→1210 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 23 | `/vendors-management/` | ✅ live | ✅ keyword H1 | 915→1180 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 24 | `/reporting-module/` | ✅ live | ✅ keyword H1 | 879→1146 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 25 | `/logistics-management-software/` | ✅ live | ✅ keyword H1 | 1099→1059 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 26 | `/cattle-management-software/` | ✅ live | ✅ keyword H1 | 1013→1211 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 27 | `/website/` | ✅ live | ✅ keyword H1 | 1517→1196 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 28 | `/integration/` | ✅ live | ✅ keyword H1 | 471→824 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 29 | `/pos-software-uae/` | ✅ live | ✅ keyword H1 | 1745→1453 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 30 | `/pos-software-ksa/` | ✅ live | ✅ keyword H1 | 1722→1432 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 31 | `/zatca/` | ✅ live | ✅ keyword H1 | 382→902 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 32 | `/pos-software-qatar/` | ✅ live | ✅ keyword H1 | 1680→1418 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 33 | `/pos-software-usa/` | ✅ live | ✅ keyword H1 | 1588→1424 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 34 | `/blog/what-is-pos/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 35 | `/blog/best-pos-system-for-retail/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 36 | `/blog/best-point-of-sale-system-for-small-business-in-pakistan/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 37 | `/blog/what-is-pos-debit-meaning/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 38 | `/blog/what-is-a-pos-purchase/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 39 | `/blog/what-is-point-of-sale-transaction/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 40 | `/blog/pos-reconciliation/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 41 | `/blog/best-free-pos-software-and-system/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 42 | `/blog/cloud-pos-software-for-retail-stores/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 43 | `/blog/how-does-pos-machine-work/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 44 | `/blog/what-is-pos-skills-understand-pos-skill-meaning/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 45 | `/blog/what-is-a-pos-person-meaning-and-responsibilities/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 46 | `/blog/what-is-pos-experience-12-tips-to-satisfy-your-customers/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 47 | `/blogs/` | kept as-is | kept as-is | unchanged | – | – | 🔒 kept byte-to-byte (user decision) | – |
| 48 | `/pos-case-studies/` | ✅ live | ✅ keyword H1 | 205→1078 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 49 | `/pos-case-studies/cupcake-queen-bakery-pos-qatar/` | ✅ live | ✅ keyword H1 | 835→1092 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 50 | `/pos-case-studies/farhan-caterers-pos-karachi/` | ✅ live | ✅ keyword H1 | 763→1073 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 51 | `/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store/` | ✅ live | ✅ keyword H1 | 707→1158 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 52 | `/pos-case-studies/implementing-pos-systems-for-medical-euquipment-industry/` | ✅ live | ✅ keyword H1 | 627→1044 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 53 | `/pos-case-studies/real-tech-pos-system-karachi/` | ✅ live | ✅ keyword H1 | 632→1028 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 54 | `/about/` | ✅ live | ✅ keyword H1 | 865→885 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 55 | `/contact/` | ✅ live | ✅ keyword H1 | 70→519 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 56 | `/author/` | ✅ live | ✅ keyword H1 | 512→524 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 57 | `/privacy-policy/` | ✅ live | ✅ keyword H1 | 480→405 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |
| 58 | `/terms-and-conditions/` | ✅ live | ✅ keyword H1 | 550→421 | 0 | ✅ overlay | ✅ scan clean | ⬜ team review |

Notes:
- The industry pages were the thinnest (−40–65% vs live). They now carry the live title and description, a keyword H1, keyword H2s, 6–8 keyword FAQs and chips linking every industry and module. They remain shorter than WordPress by design (benchmark length). If rankings dip on a specific industry, deepen that page first.
- Sitewide items fixed in this pass:
  - `robots.ts` no longer disallows `/_next/`.
  - Non-blog redirect destinations in `next.config.ts` now end in `/` (one hop).
  - Every non-blog page gets og/twitter images through `seoMetadata()`.
- Still open:
  - `FinalCtaForm` does not submit leads.
  - Header/footer links to the 6 orphan pages.
  - Blog/insights redirects and blog trailing-slash behaviour are untouched, because blogs are frozen.
