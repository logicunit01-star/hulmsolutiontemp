# Overlay pass across all non-blog pages (30 Sep 2026)

This pass keeps the benchmark (staging) design and copy and adds the live SEO layer (see `SEO-OVERLAY-METHOD.md`). Blog, blogs and insights pages and their data files were not touched; a before/after hash check of their rendered `<main>` confirms this.

## Shared kit (new files)
- `src/lib/seo/page-seo.ts`:
  - `seoMetadata(route)` sets the live title and description, a self canonical with a trailing slash, and og/twitter images.
  - `pageJsonLd(...)` builds the WebPage + BreadcrumbList + page node + FAQPage graph.
  - `softwareNode()` returns the SoftwareApplication node.
- `src/lib/seo/site-links.ts`: link sets for products, industries and countries, with keyword anchors.
- `src/components/seo/link-chips.tsx`: compact internal-link chip rows.
- `src/components/seo/json-ld.tsx`: renders a JSON-LD script tag.
- `src/content/pages/industrySeo.ts`: the keyword layer for the 12 industry pages (H1, intro, H2 overrides, FAQs).
- `scripts/seo-site-scan.mjs`: sitewide check. The last run passed 44/44.

## Templates changed (one change covers many URLs)
- `[industry]` covers 12 pages.
- `AppTemplate` covers 10 module pages.
- `CountryTemplate` covers 4 pages. Its H2s now say USA / UAE / KSA, and the FAQ answers that repeated themselves ("… Ans: …") were cleaned up.
- `ComplianceTemplate` covers FBR and ZATCA. Its FAQs moved to the data file, with keyword H2s added.
- The case-study template covers 5 pages. It uses the live H1s, and its section headings changed from h3 to h2.
- `LegalPage` covers privacy and terms (schema only).

Changes on these templates:
- Every FAQ now renders all answers in the HTML (`FaqDetails`) and has matching FAQPage schema.
- All internal hrefs end with `/`.

## H1 on every non-blog page (please review)
| URL | H1 |
|---|---|
| `/` | Best POS Software in Pakistan to run sales, stock and every branch |
| `/about/` | About Us |
| `/author/` | Hulm Editorial Team |
| `/cattle-management-software/` | Best Cattle Management Software to Simplify Your Farm Operations |
| `/contact/` | Run your business smarter, faster, better. |
| `/customer-management/` | Streamline Your Business with Hulm Customer Relationship Management |
| `/fbr-integrated-pos-pakistan/` | Best FBR Integrated POS Software in Pakistan |
| `/features/` | Complete POS System Features for Modern Businesses |
| `/industries/` | POS software for all industries, shaped around the way you sell |
| `/industries/bakery-pos-system/` | Bakery POS system for counter sales and advance orders in one workflow |
| `/industries/cafe/` | Cafe POS system: the best POS for cafe management |
| `/industries/clothing-store/` | Clothing store POS system that keeps every size, colour and sale conne |
| `/industries/electric-store/` | Electric store POS system for serial numbers, warranties and stock |
| `/industries/furniture-store/` | Best POS system for furniture stores and showrooms |
| `/industries/jewellery-shop/` | Best Jewelry POS System & Software |
| `/industries/manufacturing-industries/` | Manufacturing industry POS system for sales, materials and finished go |
| `/industries/pharmacy-store/` | Pharmacy POS system that keeps billing close to batch and expiry |
| `/industries/restaurant-pos/` | Restaurant POS software that moves every order from table to billing |
| `/industries/retail-store/` | Retail store POS system that keeps checkout and stock in the same view |
| `/industries/salon-pos/` | Salon & spa POS that brings appointments, billing and products to one  |
| `/industries/toys-store/` | Toy Store POS System & Software in Pakistan |
| `/integration/` | Hulm POS integration for retail, restaurants, Shopify & more |
| `/inventory-management/` | Cloud Based Inventory Management Software |
| `/logistics-management-software/` | Logistics Management Software - Complete Operational Control |
| `/mobile-pos/` | Best Mobile POS System for Modern Business |
| `/order-management/` | Best Order Management Software - Hulm Solutions |
| `/pos-case-studies/` | POS case studies: real results from Hulm customers |
| `/pos-case-studies/cupcake-queen-bakery-pos-qatar/` | Case Study: Cupcake Queen managed Three Branches with Hulm POS |
| `/pos-case-studies/farhan-caterers-pos-karachi/` | Case Study: Hulm POS Makes Management Easy for Farhan Caterers |
| `/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store/` | Case Study: Retail POS Software for The Laptop Store |
| `/pos-case-studies/implementing-pos-systems-for-medical-euquipment-industry/` | Case Study: Implementing POS Systems for Elate CC Pvt Ltd |
| `/pos-case-studies/real-tech-pos-system-karachi/` | Case Study: Retail POS Systems for Real Tech System |
| `/pos-software-ksa/` | Best Point of Sale in Saudi Arabia | POS Software in KSA |
| `/pos-software-qatar/` | Point of Sale in Qatar | Cloud POS System Qatar |
| `/pos-software-uae/` | Restaurant, Retail, Grocery & Salon POS Software in UAE |
| `/pos-software-usa/` | Best Point of Sale (POS) Software in USA |
| `/pricing/` | POS software price in Pakistan: simple plans for every business |
| `/privacy-policy/` | Privacy Policy |
| `/purchase-orders/` | Purchase Order Management Software - PO Software by Hulm |
| `/reporting-module/` | Streamline Your Business with Hulm Reporting Module |
| `/terms-and-conditions/` | Terms and Conditions |
| `/vendors-management/` | Streamline Your Business with Hulm Vendor Management System |
| `/website/` | One-Tap Ecommerce - Turn Inventory into an Online Store |
| `/zatca/` | ZATCA-Compliant POS Solution for Saudi Arabia |

## Wording for the team to confirm
- Industries hub FAQ: "FBR integration is available for every industry setup in Pakistan." Same wording as the approved pricing page.
- Pricing FAQ: "FBR integration is available with every plan."
- About page: the live copy still says "24/7 Support". Confirm this, or change it to the support hours you actually offer.
- Integration page: the new cards "Inventory & CRM, Built In" and "API & Custom Integrations" use the pricing-page facts (API integrations on the Business plan; API access add-on). The descriptions keep the cautious "confirmed during setup" wording already on the device.
- Industry FAQs quote "from PKR 2,500 per month" (the Starter plan).

## Sitewide
- `robots.ts`: removed the `/_next/` disallow, so Google can load CSS and JS.
- `next.config.ts`: non-blog redirect destinations now end with `/`, so each redirect is one hop. Blog and insights redirects are unchanged.
- `/author/` keeps the device version of the page (editorial team). It adds og:image and breadcrumb schema.

## Open
- The lead form (`FinalCtaForm`) does not submit anywhere.
- Header and footer links for the orphan pages are still missing.
- `content/pages/fbr.ts` is no longer imported (FBR is back on `ComplianceTemplate`), so it can be deleted.
