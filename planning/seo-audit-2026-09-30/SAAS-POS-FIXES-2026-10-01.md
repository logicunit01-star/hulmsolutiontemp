# SaaS POS fixes implemented (1 Oct 2026)

These fixes follow from `SAAS-POS-GAP-AUDIT.md`. The code is in the repo. Blog post pages (`/blog/*`) and their data files are untouched; a rendered-content check confirms this.

The shared bottom-of-page CTA block also appears on `/blogs/`, so its wording changed there too ("Join growing businesses" instead of "Join 500+ businesses"). The blog listing itself is unchanged.

## 1. Before go-live: configure these (15 minutes)

| Setting (Netlify → Environment variables) | Why |
|---|---|
| `LEAD_WEBHOOK_URL` **or** `RESEND_API_KEY` + `SALES_EMAIL` (+ `LEAD_FROM_EMAIL`) | Where form leads go: a Zapier/Make/n8n/Google Apps Script/CRM webhook, or email through Resend. With neither set, forms show a "send on WhatsApp" fallback pre-filled with the visitor's details, so no lead is lost silently. |
| `NEXT_PUBLIC_BOOKING_URL` (optional) | A Calendly, Cal.com or Google booking link. Adds "Pick a time" to `/book-a-demo/` and the thank-you page. |
| `NEXT_PUBLIC_GTM_ID` | Already defaults to `GTM-TMMQ565S`. |

In GTM, create GA4 event tags (mark the first four as conversions) for these `dataLayer` events:

| Event | When it fires | Main params |
|---|---|---|
| `generate_lead` | A lead is accepted by `/api/lead/` | `form` (contact / demo / final_cta), `industry`, `plan` |
| `generate_lead_confirmed` | The thank-you page is viewed | `type` |
| `trial_start_click` | Any click to `app.hulmsolutions.com/Register` | `label`, `location`, `plan`, `page_path` |
| `demo_cta_click` | Any click to `/book-a-demo/` | `label`, `location` |
| `whatsapp_click`, `phone_click`, `email_click`, `sign_in_click` | Contact clicks | `location` |
| `pricing_plan_select` | A plan button is clicked on `/pricing/` | `plan` |
| `video_play` | The demo video is played | `video_id` |
| `lead_error` | A form submission failed | `form`, `status` |

The GTM loader still imports jQuery before GTM, because a GTM tag may depend on `$`. Check the container, and if no tag needs jQuery, load GTM with `next/script` and remove the dependency.

**Signup app:** every signup link now carries `src` (source page), `plan` (from pricing) and first-touch `utm_*` parameters. The final CTA form also passes `name`, `business`, `phone`, `email` and `industry`. Ask the app team to read these, so they can pre-fill signup, pre-select the plan and store the source.

## 2. What changed

**Lead capture (was broken):**
- New `/api/lead/` endpoint: validation, a honeypot field, delivery via webhook or email, and a 503 fallback when nothing is configured.
- `/contact/` form now works. It also shows the address (the same one already on the privacy and terms pages), click-to-call and email links, WhatsApp and "Book a free demo" buttons, and links to About and customer stories.
- The final CTA form (on about 40 pages) now saves the lead first, then continues to signup with the details and source attached.
- New `/book-a-demo/` page: form, a "what you'll see" list, how it works, 5 FAQs with schema, and industry links. It is in the sitemap.
- Every "Book a demo" / "Talk to sales" / "Talk to the Hulm team" CTA now goes to `/book-a-demo/`: header, footer, mobile nav, all 10 module pages, all 12 industry pages, features, pricing and the industries hub.
- The thank-you page adapts to demo or contact, fires the confirmation event, and offers WhatsApp, the free trial and next reads.
- A floating WhatsApp button on every page, with a message pre-filled with the current page.

**Tracking:** `src/lib/track.ts` plus one site-wide click listener (`SiteTracking`) cover every CTA without per-button code. First-touch UTMs are stored for the session. Pricing plan buttons carry `?plan=starter|growth|business`; Enterprise goes to `/book-a-demo/?plan=enterprise`.

**Claims made accurate:**
- Removed or reworded:
  - "PCI DSS, 256-bit, tokenized payments, 2FA"
  - "Android and iOS", "offline mode", "5-minute setup", "$0 hardware"
  - "24/7 Dedicated Support", "Certified & Tested"
  - "Join 500+ businesses", "hundreds of businesses"
  - "Compatible with All Devices & OS", "Unlimited SKUs", "Zero Stockouts", "Advanced Enterprise Security"
- The rewrites use the site's existing "confirmed during setup" voice.
- The review badge now computes its rating and count from the 9 real Google reviews shown (5.0 from 9, instead of "10+").
- The fake-review dataset (`src/lib/google-reviews.ts`) was emptied, and `/api/google-reviews` now returns 410. Both files can be deleted.

**Product proof:**
- 10 real product screenshots were optimised to WebP (14–50 KB each) in `public/images/product/`.
- They appear in a "See it in Hulm" block on:
  - features;
  - 7 module pages (not logistics, cattle or ecommerce, which have no usable screenshots yet);
  - all 12 industry pages;
  - the 4 country pages.
- The restaurant and cafe pages show the real restaurant screens: dashboard, tables, menu orders and ingredients.
- The demo video "How to use All-in-One HulmPOS Software" is on the homepage and features page, through a click-to-load player (no YouTube weight until play).
- A customer-story card (quote, top result, link) was added to 11 industry pages, 6 module pages and the Qatar page, each matched to the closest case study.
- Module pages show plan availability (e.g. "Included from the Growth plan"), taken from the pricing matrix, with a link to pricing.

**Buying-criteria content:**
- Features page FAQs now cover internet outages, payment methods and go-live time, all worded carefully.
- The restaurant page has a PRA/SRB/KPRA FAQ.

**Navigation and internal links:**
- Desktop header now has real dropdowns:
  - Product: all 11 apps plus Integrations and All apps
  - Industries: all 12
  - FBR Compliance: FBR and ZATCA
  - Resources: Blog, Customer stories, What is POS?, Book a demo, About, Contact
- The mobile menu uses the same data.
- Footer now lists all 12 modules, all 12 industries, ZATCA, Integrations and Book a demo.
- Social links are unified (LinkedIn `hulm-solutions`, Instagram `hulmsolutions1101`).
- The integration page's 6 "Learn More" anchors became descriptive, and each card links to its real page.
- ZATCA is now linked from the KSA, UAE and Qatar pages and from integration.
- About is linked from the contact and case-studies pages.
- New `scripts/link-audit.mjs` crawls all 60 URLs.

**Link audit (final):**
- 0 broken links, 0 generic anchors, 0 key pages missing from navigation.
- 1 redirecting link: blog posts link to `/author/hulm-solutions-editorial-team/`, which redirects to `/author/`. It lives in the frozen blog content, so it was left alone.
- `/author/` and `/terms-and-conditions/` have no body links; they are linked from the header, footer or blogs, which is fine.

**Content proofread:**
- "HULM" normalised to "Hulm" in page copy (93 instances).
- Fixed "Read the The Laptop Store".
- Fixed the country FAQs that began "Yes, It speeds up…" and one run-on answer.
- About page labels no longer repeat their headings.
- Contact copy no longer says "support team in Lahore", which contradicted the published Karachi address.
- The final CTA bullets on the USA/UAE/KSA/Qatar and ZATCA pages no longer promise FBR invoicing.
- The country review heading no longer says "Pakistani Businesses".
- `/apps/` now has full metadata, CollectionPage and FAQPage schema, and all FAQ answers in the HTML.

**Technical:**
- Contrast fixes:
  - Small teal text and primary buttons use `#167c70` (AA contrast).
  - Footer grey text and several low-contrast labels were darkened.
- Accessibility fixes:
  - Star ratings have `role="img"`.
  - Slider dots meet the 24 px target size.
  - Final CTA form labels are linked to their inputs.
  - Module hero heading order is fixed.
- Security headers added: HSTS (1 year, no preload), nosniff, Referrer-Policy, X-Frame-Options and Permissions-Policy; `X-Powered-By` is removed.
- Sitemaps now have `<lastmod>` and include `/apps/` and `/book-a-demo/`.
- A CSS-only mobile overflow guard: wide tables in legacy blog posts scroll inside the article, and the page itself no longer scrolls sideways. This fixed 5 blog posts without touching their HTML.
- Organization schema now has `PostalAddress` and `ContactPoint`.

## 3. Verification

| Check | Result |
|---|---|
| `seo-site-scan.mjs` (44 live non-blog URLs) | 44/44 clean |
| Page configs (home, pricing, FBR, features, industries) | 71/71, 42/42, 40/40, 43/43, 56/56 |
| `link-audit.mjs` | 0 broken, 0 generic anchors, all key pages in navigation |
| Blog guard (rendered `<main>`, title, description and canonical of all 13 blog posts) | Unchanged |
| Mobile overflow at 390 px, all 60 URLs | None |
| End-to-end: contact form, demo form, final CTA, plan link | Leads delivered to the webhook with UTM attribution. Redirects to thank-you or signup work. Events fire. The WhatsApp fallback works when delivery is not configured. |
| Lighthouse (mobile, local build) | Home: performance 96, accessibility 99. Book a demo: 87 / 100. Inventory: accessibility 100. |

## 4. Still open (needs business input or a later sprint)

1. Answered on 1 Oct:
   - There is no app-store app. Mobile POS copy now says Hulm runs in the web browser with nothing to download, and the schema says "Web".
   - There is no offline mode. Every page that mentioned offline behaviour now says plainly that Hulm needs an internet connection and suggests a mobile hotspot as backup: mobile POS, features, the FBR page and the legacy bakery FAQ.
   - All 12 client logos are real. They now show as a logo strip on the homepage, pricing, book-a-demo and the 4 country pages.

   - No Foodpanda integration. The restaurant page now answers "Does Hulm integrate with Foodpanda?" with "Not at the moment" and explains how delivery orders and riders are handled. A legacy cafe line about "online delivery platforms" was reworded.
   - Any hardware integrates easily. The features, homepage and retail FAQs now say Hulm works with standard receipt printers, barcode scanners, cash drawers and label printers, instead of "supported/compatible, confirm first".
   - No international pricing. This site is for Pakistan; other countries will get a separate domain later. By decision, the USA, KSA, UAE, Qatar and ZATCA pages stay as they are (live, linked, ranking) for now. When the new domain launches, 301-redirect each page to its new equivalent.

   - No published support hours: none are stated anywhere on the site.
   - No customer count: removed "Join hundreds of…" from About. Other copy uses "growing businesses" with no number.
   - Payment gateways are still being decided:
     - The Integration page card is now "Payment Gateway Integrations (Coming Soon)", and its FAQ says gateways are planned.
     - The ecommerce store no longer claims JazzCash and EasyPaisa are built in; it now lists COD and bank transfer.
     - The features and mobile FAQs say gateways are not available yet.
     - Recording cash, card, wallet and bank payments at checkout is still described.
   - Refund, annual billing and cancellation policy will come later. "Cancel anytime" was removed from the sign-up form until the policy is published.

   Still open: a security/PCI statement (if any) and the refund, cancellation and annual-billing policy pages.
2. Pages still to create once the answers exist: `/pos-hardware/`, `/security/`, refund and cancellation policy, cookie policy with a consent banner.
3. Screenshots for logistics, cattle and ecommerce. Add app-store links to Mobile POS if a store app launches later.
4. Comparison and alternatives pages, Pakistani city pages (Karachi, Lahore, Islamabad) and a partner programme page (P2). International items (`hreflang`, local pricing, Arabic ZATCA) move to the future international domain.
5. Delete the retired `src/lib/google-reviews.ts`, `src/app/api/google-reviews/` and unused `content/pages/mobile-pos.ts` / `content/pages/fbr.ts` files, and tidy the scrape files and screenshots in the repo root.
6. Consider CI: build, `seo-site-scan`, `link-audit` and Lighthouse CI on each push.
