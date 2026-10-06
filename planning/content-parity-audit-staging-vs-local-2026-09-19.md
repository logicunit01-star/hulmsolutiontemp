# Content Parity Audit — Vercel Staging vs Local Build

Date: 2026-09-19  
Sources compared:

- Vercel staging: `https://hulmsolutions-silk.vercel.app/`
- Local build: `http://localhost:3100/`

Status: Audit complete; no code changed during this audit

## Audit scope

The audit compared the ten completed page journeys:

1. Homepage
2. Product overview
3. Pricing
4. Industries index
5. Retail
6. Restaurant
7. Pharmacy
8. Bakery
9. Salon / Spa
10. Clothing

For each route, the audit inspected the rendered desktop page, title, meta description, H1, H2/H3 structure, main-page word count, calls to action, forms and prominent capability claims. A representative industry route was also checked for responsive reflow.

## Overall verdict

The local build preserves the core commercial meaning of the staging site while improving focus, scanability and claim safety. The new structure is suitable as the primary content direction.

Technical SEO should not start quite yet. A short product-owner validation pass is needed for specific capabilities that were claimed on staging but intentionally softened or omitted locally. Once those answers are recorded, the confirmed capabilities can be restored where appropriate and the content can be frozen for indexing.

## Comparison method

Each staging element was classified as:

- **Retained:** same commercial meaning remains.
- **Rewritten:** meaning remains but wording or hierarchy changed.
- **Intentionally removed:** redundant, distracting, unsupported or outside the POS-led journey.
- **Needs confirmation:** potentially valuable capability that should return only if the product currently supports it.

## Page-by-page findings

| Step | Page | General health | What the local page preserves | Intentional changes | Items to confirm before content freeze |
| --- | --- | --- | --- | --- | --- |
| 1 | Homepage `/` | Strong | POS, inventory, purchasing, customers, reporting, FBR availability, industries, product screens, selected reviews, starting price and FAQ | Reduced approximately 2,192 words to 698; removed ERP-first language, competitor comparison, guarantees, broad module catalogue, repeated reviews and embedded lead form | Restore a short “how setup works” section without time guarantees? Retain the existing demo video if the YouTube URL and video are still current? |
| 2 | Product `/apps` | Strong | POS, inventory, purchasing, vendors, customers, orders, reporting, product screens, mobile POS, online store and integrations | Reduced approximately 2,183 words to 655; moved logistics and cattle away from the primary journey; removed ratings, setup-speed claims and repeated conversion form | Confirm that logistics, cattle and website modules should remain accessible only through their existing direct URLs rather than the primary product grid |
| 3 | Pricing `/pricing` | Strong, one commercial dependency | Four tiers, PKR 2,500 / 5,500 / 11,000 pricing, enterprise contact route, users, branches, comparison, add-ons, onboarding charges, trial and FAQ | Replaced segment tabs with a clearer capacity/workflow comparison; removed repeated reviews and lead form; changed enterprise “unlimited” to “tailored” | Confirm billing cadence, tax treatment, add-on cadence, exact plan inclusions and whether enterprise users/branches are truly unlimited or quoted per deployment |
| 4 | Industries `/industries` | Strong | All 12 existing industry destinations, primary CTA, FBR path and industry-specific discovery | Six priority industries now lead; secondary industries remain discoverable; removed unsupported speed, universal compliance, offline and hardware claims | Confirm whether offline mode and specific hardware compatibility should be documented elsewhere after testing |
| 5 | Retail | Strong, capability confirmation needed | Barcode billing, variants, purchasing, exchanges, customers, branches and FBR availability | Removed sub-second checkout, instant setup, 100% compliance and accountant-replacement claims | Confirm one-click barcode generation, receipt-printer/scanner compatibility, stock transfers and automatic QR-coded FBR receipt behaviour |
| 6 | Restaurant | Strong, capability confirmation needed | Menu setup, counter/table orders, kitchen tickets, bill handling, ingredient visibility, shifts, branches and FBR availability | Removed “complete”/“best” language, zero-audit claims and delivery-commission messaging | Confirm digital floor plans, KOT station routing, split bills, delivery-platform workflows and provincial tax integrations |
| 7 | Pharmacy | Strong, important product boundary added | Products, batches, expiry dates, barcode billing, pack/unit setup, suppliers, branches and FBR availability | Removed clinical-sounding automation and universal compliance claims; explicitly states the page is not clinical/prescribing software | Confirm automatic expiry alerts, generic-salt search/substitution, inter-branch stock transfers and medicine-delivery workflows |
| 8 | Bakery | Strong, capability confirmation needed | Counter billing, advance orders, product availability, batch/expiry records, customers, reporting, branches and FBR availability | Replaced success/speed claims with daily workflow language | Confirm weighing-scale integration, recipe/ingredient depletion, production batches and payment-terminal support |
| 9 | Salon / Spa | Strong, capability confirmation needed | Appointments, service billing, customer history, retail stock, staff activity and branches | Removed “manage your entire salon” and automatic commission claims | Confirm automated commissions/tips, colour-formula cards, memberships/packages and online booking behaviour |
| 10 | Clothing | Strong, capability confirmation needed | Size/colour variants, barcode billing, product setup, exchanges, branch stock and customer history | Removed “ultimate/advanced” language and checkout-speed optimisation claim | Confirm garment-tag printing, one-click barcode generation and exact inter-branch stock-transfer workflow |

## Content retained across the new journey

The local build still communicates the staging site’s strongest defensible themes:

- Hulm starts with POS and connects sales to stock.
- Purchasing, vendors, customers, orders and reporting are part of the wider product.
- Multi-branch options are available.
- FBR integration is available for eligible/configured deployments.
- The product supports industry-specific workflows.
- A 14-day trial and entry price of PKR 2,500 per month are presented.
- Existing industry URLs remain accessible.

## Content intentionally not carried forward

The following staging patterns should remain excluded unless documentary evidence is supplied:

- “Best POS” and “only platform” superiority claims.
- “100% compliant”, “zero penalty” and “zero audit anxiety” guarantees.
- “Sub-second”, “under five minutes” and similar performance/setup promises.
- “Replace your accountant” and avoided-accountant-fee claims.
- “500+ businesses”, ratings and accreditation badges without current source evidence.
- “99.99% uptime” and enterprise-security claims without a published service/security basis.
- Generic reviews shown on every industry page regardless of the reviewer’s business type.

## High-value staging content that may be worth restoring

These are useful ideas, but should be restored only after validation:

1. **A short onboarding explanation.** The live site explains account creation and module selection, but its timing claims should be removed.
2. **The product demo video.** Useful if the linked YouTube video accurately reflects the current product.
3. **Verified industry-specific proof.** A small number of relevant reviews or case studies would strengthen priority industry pages more than a repeated generic carousel.
4. **Capability-level detail.** Barcode generation, KOT routing, expiry alerts, weighing scales and salon commissions can add strong search and conversion value when genuinely supported.

## Global navigation and footer comparison

### Improved locally

- “Apps” became the clearer “Product”.
- FBR Compliance is now a top-level decision path.
- “Customers” and “Resources” group related content more cleanly.
- Social links use the actual Hulm profiles rather than generic platform homepages.
- The local region selector defaults to Pakistan, matching the current Pakistan-led content. Staging displayed Saudi Arabia while serving Pakistan copy.

### Missing or unresolved locally

- Staging links to Privacy Policy and Terms & Conditions; the local build currently exposes neither route in the generated route list nor footer.
- The live footer links “Bakery & Sweets” to `/industries/bakery`, while the preserved working route is `/industries/bakery-pos-system`. This should be handled during the URL/redirect audit.
- The local footer intentionally exposes fewer product/industry links. This improves focus but increases the importance of sitemap and internal-link validation.

## Conversion-path comparison

Staging repeats a five-field lead form on many pages. The local build instead uses trial, contact and WhatsApp demo paths.

This is a deliberate simplification, not an accidental omission. Before launch, confirm which conversion should be primary:

- Trial registration for self-serve prospects.
- Contact/demo for higher-intent or complex setups.
- WhatsApp for Pakistan sales conversations.

If an on-site lead form is restored, it should be one reusable form with clear privacy language and analytics—not repeated indiscriminately on every page.

## Accessibility and UX observations

### Confirmed from rendered pages

- The local pages use one clear H1 and a more consistent heading hierarchy.
- Breadcrumbs and descriptive industry images improve orientation.
- The shorter pages reduce repeated content and decision fatigue.
- Primary and secondary calls to action remain visually distinct.
- The representative industry template reflows without horizontal overflow in the existing responsive checks.

### Risks requiring later testing

- Screenshot review cannot establish keyboard access, focus visibility, screen-reader announcements or full WCAG compliance.
- FAQ accordion states need keyboard and assistive-technology testing.
- Text and button contrast should be measured programmatically during final accessibility QA.
- External-link behaviour and focus order should be checked after final content changes.

## Product-owner confirmation checklist

Record **Yes**, **No**, or **Available with conditions** for each item before technical SEO:

- Barcode generation and label printing
- Supported barcode scanners and receipt printers
- Stock transfer between branches
- Restaurant digital floor plans
- KOT printer/station routing
- Split billing
- Delivery-platform or delivery-order workflows
- Provincial restaurant tax integration
- Pharmacy expiry alerts
- Pharmacy generic-salt search/substitution
- Pharmacy delivery workflows
- Weighing-scale integration
- Bakery recipe/ingredient depletion
- Salon commissions and tips
- Salon colour-formula cards
- Salon memberships/packages
- Online appointment booking
- Payment-terminal integrations
- Offline operating behaviour
- Exact FBR registration/setup support
- Exact FBR invoice/QR behaviour
- Current plan billing cadence and taxes
- Enterprise user and branch limits
- Current demo-video URL
- Privacy Policy and Terms & Conditions source text

## Recommended sequence from here

1. Complete the product-owner confirmation checklist.
2. Make one final content correction pass using only confirmed capabilities.
3. Freeze page copy and metadata.
4. Audit production `hulmsolutions.com` URLs, indexable pages and backlinks/internal links.
5. Implement technical SEO: canonicals, redirects, sitemap, robots, structured data, metadata and link cleanup.

## Evidence limits

This was a rendered-page content and UX comparison. It did not validate product behaviour inside the Hulm application, legal/compliance status, analytics, search-console data, backlinks, production indexing or full accessibility conformance. Those require separate evidence and are intentionally deferred.
