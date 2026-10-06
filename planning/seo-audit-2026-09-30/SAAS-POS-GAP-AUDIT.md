# Hulm local site: SaaS POS gap audit

> **Update, 1 Oct 2026:** most P0 and P1 items are now implemented. See `SAAS-POS-FIXES-2026-10-01.md` for what changed, what the team must configure (lead delivery, GTM events) and what still needs business answers.


**Date:** 30 Sep 2026.

**What was audited:**
- The local Next.js build, all 44 non-blog pages plus `/apps/`, `/thank-you/` and the 404 page.
- The code in `src/`, `content/` and `public/`.
- Lighthouse on three templates.
- Two Pakistani competitors as a benchmark: CornPOS and Granet Pro.

**The question:** does this site do the job a SaaS POS marketing site has to do? That job is to get a Pakistani (and GCC/US) business owner to trust the product, understand the price, see it working, and start a trial or book a demo, and then to measure that.

SEO parity is covered separately in `OVERLAY-PASS-2026-09-30.md`, and the site is now in good shape there. This audit is about the **business gaps**.

---

## 1. Verdict

The site is well built, fast on most templates, and strong on SEO structure and FBR messaging. As a **sales tool it has three launch-blocking breaks and a large "show, don't tell" gap:**

1. **The demo and contact funnel is broken.**
   - The "Book a demo" button in the header goes to `/contact/`, and that form does nothing: `onSubmit={(e) => e.preventDefault()}`.
   - The lead form at the bottom of almost every page (`FinalCtaForm`) collects name, business, phone, email and industry, then **throws them away** and redirects to the signup app. The prospect has to type everything again.
   - Result: no demo request, contact message or partial signup is ever captured.
2. **Nothing is measured.**
   - GTM loads, but no event is ever pushed: no `dataLayer` call on CTA clicks, form submits, WhatsApp clicks or plan selection.
   - `/thank-you/` exists, but nothing sends users there.
   - Every plan button links to the same bare `…/Register`, with no plan or UTM parameters.
   - You cannot currently tell which page, plan or campaign produces trials.
3. **Unverifiable claims are live in visible copy and in FAQ schema.** "PCI DSS compliance, 256-bit encryption, tokenized payments", "Android and iOS", "offline mode", "5-minute setup", "24/7 dedicated support", "500+ businesses", "Gulf Regional Certified & Tested" and "100% Secure". None of these has a supporting page. Some (PCI DSS, "certified") create legal exposure if they aren't literally true.
4. **The product is barely shown.**
   - Only 3 product screenshots are used on the whole site, all on the homepage.
   - The 10 module pages, 12 industry pages, features, pricing and country pages show **zero product UI**; their only images are review avatars.
   - There is no demo video. Live WordPress embeds one on the homepage, and competitors have them.
   - Real screenshots (restaurant dashboard, table management, inventory, mobile POS, logistics) are already in your folder under `public/wp-content/uploads/…` and are unused.

The rest are important but not blocking: POS buying criteria that Pakistani buyers ask about first (offline, hardware, payments, delivery apps, onboarding time), pricing-page mechanics, international pages that still read as Pakistan-only, missing support and trust pages, and a slow homepage.

---

## 2. Scorecard

| Area | Score | Main gap |
|---|---|---|
| SEO structure (titles, H1s, schema, links) | 9/10 | Done in the overlay pass. Sitemap lacks `lastmod`. |
| Positioning and messaging (Pakistan, FBR) | 8/10 | Strong. International pages still say "Pakistani businesses". |
| **Lead capture and funnel** | **2/10** | Contact form does nothing, lead form discards data, demo CTA leads to the dead form. |
| **Analytics and attribution** | **2/10** | GTM with no events, no plan or UTM passing, thank-you page unused. |
| **Product proof (screens, video, demo)** | **3/10** | No UI on 37 of 44 pages, no video, no interactive demo. |
| Social proof | 5/10 | 10 real Google reviews and 5 case studies. 12 client logos are unused. Rating shows 5.0 in one place and 4.9 in another. Industry pages don't link their matching case study. |
| Pricing page | 6/10 | Clear plans and add-ons. No annual option, no plan pre-select, PKR only, no refund/cancel terms, module pages don't say which plan includes them. |
| POS buying-criteria coverage | 4/10 | Offline, hardware, payments (JazzCash/Easypaisa/Raast), delivery apps (Foodpanda), onboarding time and data export are thin or missing. |
| Trust, security and legal | 3/10 | Big security claims with no security page. No refund, cancellation or cookie policy. No office address. Social links disagree. |
| Support and self-serve | 2/10 | No help centre, docs, video tutorials, status page, changelog or support hours. |
| Information architecture | 6/10 | Header "Product" menu lists 6 of 11 modules. Resources means blog only. No compare/alternatives pages, city pages or partner programme. |
| International (USA, KSA, UAE, Qatar) | 4/10 | No local pricing, no hreflang, no Arabic, Pakistan-centric review and CTA copy. |
| Performance and accessibility | 7/10 | Pricing 98 and industry pages 96, but homepage performance 57 (LCP 4.9 s, TBT 910 ms). Brand teal fails contrast on small text. |
| Code and ops hygiene | 5/10 | Unused fake-review API, jQuery loaded only for GTM, no security headers, no tests or CI, scrape files and screenshots in the repo root. |

---

## 3. Findings in detail

Priority key:
- **P0** = fix before switching DNS
- **P1** = first 30 days
- **P2** = 30–90 days

### A. Lead capture and funnel (P0)

| # | Finding | Evidence | Fix |
|---|---|---|---|
| A1 | The contact form does nothing | `src/components/pages/contact/contact-form.tsx:81` has `onSubmit={(e) => e.preventDefault()}`. The inputs have no `name` attributes and there is no handler. One field is labelled "Numeric Field" in `content/pages/contact.ts`, and renders as "Phone Number". | Post to a server action or route handler that emails sales and writes to the CRM or a sheet. Add validation, spam protection (honeypot or Turnstile), a success state, and a redirect to `/thank-you/`. |
| A2 | The lead form discards its data | `src/components/home/FinalCtaForm.tsx:24–27`: `handleSubmit` redirects to `app.hulmsolutions.com/Register` and never sends `formData`. This form appears on about 40 pages. | Save the lead first, then redirect with prefill parameters (`?name=&phone=&email=&business=&industry=`) if the app supports them. Otherwise just "Continue to create your workspace". The phone number alone makes WhatsApp follow-up possible. |
| A3 | "Book a demo" leads to the dead form | The header link goes to `/contact/`. | Add a `/book-a-demo/` page: short form plus a calendar embed (Calendly, Cal.com or Google booking page), with WhatsApp as a fallback. CornPOS and Granet both make demo booking a first-class page. |
| A4 | No confirmation or next step | `/thank-you/` is `noindex` and unused. | Send both forms there. Add "what happens next" (call within X hours), WhatsApp, and a calendar link. Fire the conversion event there. |
| A5 | WhatsApp is the real channel but untracked | 1–4 `wa.me` links per page with a static message. | Pre-fill the message per page ("Hi, I'm interested in Restaurant POS"). Add `utm`-style context. Track clicks. Add one floating WhatsApp button on mobile. |

### B. Analytics and attribution (P0)

| # | Finding | Evidence | Fix |
|---|---|---|---|
| B1 | No conversion events | `src/components/analytics/google-tag-manager.tsx` only pushes `gtm.js`. There are no other `dataLayer.push` calls anywhere in the codebase. | Add a `track(event, params)` helper. Fire `cta_click` (location, label, plan), `generate_lead` (form, industry), `whatsapp_click`, `trial_start_click`, `demo_booked`, `pricing_plan_select` and `faq_open`. |
| B2 | Plan and campaign are lost at signup | All 7 plan and CTA links on `/pricing/` are the bare `https://app.hulmsolutions.com/Register`. | Append `?plan=starter|growth|business&src=<page>` and pass UTMs through. Agree the parameter names with the app team so signup can pre-select the plan and store the source. |
| B3 | GTM needs jQuery | GTM is loaded only after `import("jquery")`, which adds a dependency and delays tracking. | Load GTM with `next/script` (`afterInteractive`). Keep jQuery only if a GTM tag truly needs it, and confirm that inside GTM. |
| B4 | No consent handling | There is no cookie banner or policy. | GCC (UAE PDPL, KSA PDPL) and US visitors make a basic consent banner and cookie policy advisable. Use Google Consent Mode v2 defaults. |

### C. Claims that need proof or removal (P0)

Each of these is visible on the page and, for the FAQs, also sits in FAQPage schema, so Google may quote it. For each one, either confirm it with the product team and back it with a page, or rewrite it in the cautious "confirmed during setup" voice already used elsewhere on the site.

| Claim | Where |
|---|---|
| "bank-level encryption (256-bit SSL/TLS), PCI DSS compliance, tokenized payments" | `src/lib/apps/data.ts:1424` (mobile POS FAQ) |
| "PCI compliance, encryption, 2FA" | `src/lib/countries/data.ts` FAQs (4 country pages) |
| "works on both Android and iOS" | `apps/data.ts:1428`, `content/pages/mobile-pos.ts:167`. The site's own schema says "Web, Android". |
| "offline mode", "5-minute setup", "zero hardware costs" | `apps/data.ts:1420` |
| "24/7 Dedicated Support" / "24/7 Support" | `countries/data.ts` (×4), `apps/data.ts:845, 993`, `content/pages/about.ts:34` |
| "Gulf Regional Certified & Tested" | `countries/data.ts:327`, `484`, `641` |
| "Join 500+ businesses" | `src/components/home/final-cta.tsx:80`, on every page |
| "5.0 ★, 10+ Verified Customer Reviews" vs `rating: 4.9, total_reviews: 9` | `GoogleReviewsSection.tsx:202–228` vs `src/lib/google-reviews.ts`. Pick the real current Google figure and use it everywhere. |
| "100% Secure", "100% savings", "24/7 Sync" | `content/pages/mobile-pos.ts:82, 85, 152`. This file isn't imported by any route; check it and delete it if so. |
| Fabricated review data | `src/lib/google-reviews.ts` holds invented reviewers ("Muhammad Usman", "Dr. Ayesha Tariq"…) marked `verified: true`, with a fake `placeid`. `/api/google-reviews` serves them. No page uses the route today, but it is public. Delete it, or wire it to the real Places API with no invented fallback. |

### D. Product proof (P1, the biggest conversion lever)

| # | Finding | Fix |
|---|---|---|
| D1 | Every product and industry page (37 of 44) has no product screenshots. The live WordPress pages had them: the restaurant page had dashboard, table-management and order-management screens. | Add a "See it in Hulm" block to `AppTemplate` and the `[industry]` template: a hero screenshot plus 2–3 captioned screens. The assets are already in your folder: `public/wp-content/uploads/2026/01/Hulm-Restaurant-POS-{Dashboard,Table-Management,Order-Management,Inventory-Management}.png`, `2026/02/Hulm-POS-Dashboard.webp`, `2026/02/Hulm-POS-inventory-management.webp`, `2026/02/hulm-solutions-sales-order-management.webp`, `2025/10/purchase-order-management-software.webp`, `2026/01/logistics-management-software-dashboard.webp`, `2026/03/Mobile-POS.webp`, `2026/04/realtime-inventory-sync.png`. Move them to `public/images/product/`, convert them to WebP, and add descriptive alt text. |
| D2 | No video anywhere. Live had a YouTube demo (`Fd6X_TPX9EA`) on the homepage. | Add a lite YouTube embed (click-to-load facade, so it doesn't hurt LCP) to the homepage, features and restaurant/retail pages. Aim for 60–90 s per industry. Granet Pro advertises a 90-second walkthrough. |
| D3 | No self-serve demo | Offer a "Try the demo store" login or an interactive click-through (Arcade, Storylane) for owners who won't book a call. |
| D4 | The Mobile POS page has no app-store links | Link the Google Play (and App Store, if it exists) listing, with badges. CornPOS links both. If there is no store app, say "runs in the browser on Android" and remove the app claims. |

### E. Social proof (P1)

| # | Finding | Fix |
|---|---|---|
| E1 | 12 client logos sit in `public/images/home/trusted-clients/`, and `TrustedBy` isn't rendered anywhere. | **Confirm each one is a real, consenting Hulm customer.** Names like McGraw and Melicks look like template placeholders. Show only the verified ones, as a logo strip on the homepage and pricing page. |
| E2 | Industry pages don't link their matching case study (bakery → Cupcake Queen, retail → Laptop Store / Real Tech, catering → Farhan, medical → Elate). They only link the case-study index. | Add a `caseStudySlug` to each industry's data and render a case-study card with a quote. |
| E3 | Reviews sit in the same carousel on every page, with a "Pakistani Businesses Run on Hulm" heading even on the USA, UAE, KSA and Qatar pages. | Make the heading a prop and localise it. Tag reviews by industry and show matching ones on industry pages. |
| E4 | Case studies are strong in narrative but light on hard numbers. | Add 2–3 metric tiles per case study (time saved, stock-count accuracy, FBR filing time) where the customer agrees. |

### F. POS buying criteria Pakistani buyers ask first (P1)

These are the questions a shop or restaurant owner asks on the demo call. Each needs a clear, truthful answer on the site, usually a feature-page section plus an FAQ.

| Topic | Current coverage | Needed |
|---|---|---|
| **Offline / load-shedding** | Mentioned on 4 pages, inconsistently ("offline mode" on mobile POS; "connectivity planning" on FBR) | One honest statement on features, pricing and FAQ: what works offline, how sync works, and FBR behaviour offline. Granet leads with "bills through outages". |
| **Hardware** | Printers and scanners mentioned on 11 pages; no list, no prices | A `/pos-hardware/` page: compatible printers, scanners, cash drawers, tablets, and whether Hulm sells bundles. Include a "What hardware do I need?" FAQ on pricing. |
| **Payments** | JazzCash/Easypaisa named once (integration page) | A payments section: cash, card terminals, JazzCash, Easypaisa, Raast QR (if supported), split payments. |
| **Delivery aggregators** | Foodpanda: 0 mentions | For restaurants: say whether Foodpanda (or similar) orders flow into Hulm. If they don't, say so. |
| **Provincial tax (PRA/SRB/KPRA)** | Present on the FBR page | Surface it on the restaurant and cafe pages (restaurants are PRA/SRB-taxed, not only FBR). |
| **Go-live time and migration** | "Data migration PKR 10,000" on pricing; no timeline | "Live in X days": the setup steps, who imports products, training. Granet says "24–48h, done for you". |
| **Data ownership, backup, export** | "backup" 1 mention, "export" 0 | A short security and data section: where data is hosted, backups, and export to Excel/CSV on cancellation. |
| **Urdu / language** | 0 | If the app has Urdu (or Arabic for KSA), say so; it's a real differentiator. If not, skip it. |
| **Multi-branch control** | Good | — |

### G. Pricing page (P1)

| # | Gap | Fix |
|---|---|---|
| G1 | Monthly only | Add an annual toggle with a discount, if finance agrees. It's standard SaaS practice and improves cash flow. |
| G2 | No plan pre-select or attribution | See B2. |
| G3 | PKR only; international pages link to it | Show USD/SAR/AED/QAR prices on the country pages, or a currency switch on `/pricing/`. Otherwise say "pricing for your region on request". |
| G4 | No cancellation or refund terms | Add "No contract, cancel anytime" (if true) and a refund/cancellation policy page. Granet leads with "No contracts". |
| G5 | Module pages don't say which plan includes them | Add a small "Included in: Growth, Business" badge from the plan matrix to `AppTemplate`. |
| G6 | Hardware and total cost of ownership are silent | Add an FAQ: "Total first-month cost with hardware?" |
| G7 | No social proof on pricing | Add the logo strip and 2 short reviews near the plans. |

### H. Trust, security and legal (P1)

- **Security / trust page** (`/security/`): hosting, encryption in transit and at rest, backups, access roles, uptime history. This is where the security claims should live, and only the true ones.
- **Legal pages:** refund and cancellation policy, cookie policy, and optionally a DPA for GCC enterprise buyers.
- **Company facts:**
  - The contact page and Organization schema have **no office address** and no business hours. Google Maps lists Gulistan-e-Johar, Karachi. Add the address, hours, a map and `PostalAddress` schema. This also helps local SEO.
- **Social links:**
  - `src/lib/navigation.ts` links LinkedIn `hulmsolutions` and Instagram `hulmsolutions`.
  - The footer and schema link `hulm-solutions` and `hulmsolutions1101`.
  - Use one set everywhere.
- **Company proof:** registration (SECP/NTN), ISO or partner badges if real. CornPOS shows ISO 9001.

### I. Support and self-serve (P2)

| Missing | Why it matters for SaaS POS |
|---|---|
| Help centre or knowledge base | Owners check "is there help at 10 pm on a Saturday?". It also brings long-tail SEO traffic ("how to print FBR invoice", "add product variants"). |
| Video tutorials (YouTube playlist) | The YouTube channel is linked in the footer, but no tutorials are surfaced on the site. |
| Support hours and SLA by plan | Pricing lists "Email support" and "Priority WhatsApp support" but no hours or response times. |
| Status page | Standard for cloud POS; builds trust about uptime. |
| Changelog / "What's new" | Shows an active product; useful for retention and SEO. |

### J. Information architecture and growth pages (P2)

- **Header "Product" menu** lists only 6 modules. Mobile POS, Logistics, Cattle, Website (ecommerce) and Integrations are reachable only through chips and the footer. Add them to the menu, grouped as Sell / Operate / Grow / Integrations.
- **Resources** points only to `/blogs/`. Make it a menu: Blog, Case studies, Help centre, Videos, FBR guide.
- **Comparison and alternatives pages** (`/compare/hulm-vs-cornpos/` etc. and `/alternatives/`): high-intent keywords. Granet Pro already has pages comparing itself with CornPOS, Oscar POS, Dineplan and CISePOS, so competitors are capturing that traffic.
- **City landing pages** (Karachi, Lahore, Islamabad…): competitors run them. Build them only with real local proof (customers, support), not thin copies.
- **Partner / reseller programme page:** POS in Pakistan sells heavily through hardware dealers and accountants.
- **FBR guide hub:** a pillar page such as "FBR POS integration guide 2026", backed by the blog. It becomes more valuable once the blog freeze lifts.

### K. International pages (P2)

- No `hreflang`. Add `en-PK`, `en-US`, `en-SA`, `en-AE`, `en-QA` alternates plus `x-default` across the home page and the country pages.
- There's no local pricing (see G3), and the reviews heading and final CTA ("across Pakistan") appear on every country page.
- There is no Arabic. For KSA/ZATCA especially, even an Arabic version of the ZATCA page would signal seriousness.
- There is no local phone or WhatsApp number per region. If support is from Pakistan, say "support hours in GST/AST".

### L. Performance, accessibility and technical (P1–P2)

| # | Finding | Evidence | Fix |
|---|---|---|---|
| L1 | Homepage performance 57 | Lighthouse (mobile, local): LCP 4.9 s (hero paragraph), TBT 910 ms, 13 long tasks, one 229 KB JS chunk. Pricing scores 98 and retail 96. | Find which client component ships the big chunk (review carousel, dashboard carousel). Make the homepage sections server components, lazy-load the carousels, and preload the Outfit font. Re-test on the Netlify URL, because local numbers run slow. |
| L2 | Brand teal `#209f8f` fails contrast for small text on white | Lighthouse color-contrast: eyebrows (`text-[#209f8f]` uppercase `text-sm`) and the primary button (white on teal). | Use `#167c70` (already in the palette) for small text and button backgrounds. Keep `#209f8f` for large display text and icons. |
| L3 | `aria-label` on a plain `div` (star ratings) | `aria-prohibited-attr` | Add `role="img"`. |
| L4 | No security headers; `X-Powered-By: Next.js` exposed | No `headers()` in `next.config.ts`, no `netlify.toml` or `_headers` | Add HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors, and `poweredByHeader: false`. |
| L5 | Sitemaps are a frozen legacy list with no `lastmod` | `src/lib/legacy-sitemaps.ts` lists only snapshot paths | Generate from the route list, add `lastmod`, and include `/apps/` and any new pages (hardware, security, compare…). |
| L6 | Repo hygiene | Around 30 scrape files, `.jpg` screenshots and capture scripts in the repo root; `puppeteer-core` and `cheerio` shipped as dependencies | Move them to `/scratch` or delete them. Move `cheerio` to devDependencies if it's only used by scripts. |
| L7 | No automated checks | No tests, no CI; the SEO checks are run by hand | Add a GitHub Action: `next build`, `seo-site-scan.mjs`, Lighthouse CI on 3 URLs, and a link check. |
| L8 | ~~Device `next.config.ts` changed after the last commit~~ **False alarm:** the timestamp was from the overlay commit itself. | — | — |

---

## 4. Competitive benchmark (Pakistan)

| Element | **Hulm (local)** | CornPOS | Granet Pro |
|---|---|---|---|
| Prices on site | ✅ PKR 2,500 / 5,500 / 11,000 | ❌ (pricing page only) | ✅ PKR 2,999 / 5,999 / 9,999 |
| "No contract / cancel anytime" | ❌ | – | ✅ |
| Demo booking | ⚠️ dead form | ✅ dedicated page | ✅ + WhatsApp |
| Demo video | ❌ | ✅ YouTube | ✅ 90-s walkthrough |
| App-store links | ❌ | ✅ iOS + Android | ⚠️ mentioned |
| Offline messaging | ⚠️ inconsistent | ✅ | ✅ headline claim |
| Hardware page or offer | ❌ | ✅ | ⚠️ FAQ |
| Client logos | ❌ (files unused) | ✅ 10+ brands | ✅ 10+ brands |
| FBR + provincial tax | ✅ strong | ✅ FBR/SRB/PRA/KPRA | ✅ PRA/SRB |
| Done-for-you onboarding claim | ⚠️ | – | ✅ "24–48 h, we build your menu" |
| Comparison pages | ❌ | – | ✅ vs 4 competitors |
| City pages | ❌ | ✅ | ✅ |
| Physical address | ❌ | – | ✅ Lahore |
| Multi-country pages | ✅ USA/KSA/UAE/Qatar | – | – |
| Industry breadth | ✅ 12 industries + modules | Restaurant-led | Restaurant-led |

**Where Hulm wins:** breadth (retail plus restaurant plus modules), FBR depth, GCC pages, and visible PKR pricing.

**Where it loses:** showing the product, demo booking, logos, offline and hardware answers, and comparison content.

---

## 5. Roadmap

**Before DNS switch (P0, about 1 week of dev):**
- A1–A5: working contact form, lead capture, a book-a-demo page, the thank-you flow, tracked WhatsApp links.
- B1–B3: event tracking, plan and UTM parameters, GTM through `next/script`.
- C: every claim confirmed or rewritten; the fake-review API deleted; one rating figure.

**First 30 days (P1):**
- D1–D4: screenshots in the templates, demo video, app links.
- E1–E2: verified logos, industry → case-study links.
- F: offline, hardware, payments, go-live and data sections, plus `/pos-hardware/`.
- G1–G7: pricing upgrades.
- H: `/security/`, refund and cookie policies, address, one set of social links.
- L1–L4: homepage performance, contrast, headers.

**30–90 days (P2):**
- I: help centre, tutorials, status page, changelog.
- J: navigation, compare/alternatives pages, city pages (only with real proof), partner page, FBR hub.
- K: hreflang, local pricing, Arabic ZATCA page.
- L5–L7: sitemap, repo hygiene, CI.

---

## 6. Questions only the business can answer

These are needed before writing copy. Where the answer is "no", the copy should say so rather than imply it.

1. Is the app PCI DSS certified, or does it just use a PCI-compliant payment processor? Is there 2FA?
2. Is there a native iOS app, and an Android app on Play Store? What are the store links?
3. What exactly works offline, and how does FBR invoicing behave offline?
4. Real support hours per plan, and a response-time target.
5. Real customer count ("500+"?) and the current Google rating and review count.
6. Which of the 12 logos in `trusted-clients/` are real, consenting customers?
7. Hardware: does Hulm sell or bundle it? Which printer and scanner models are certified?
8. Payments: JazzCash, Easypaisa, Raast, card terminals — which are live integrations?
9. Foodpanda or other delivery-app integration?
10. Annual billing, a refund policy, "cancel anytime"?
11. Does the signup app accept `plan`, `utm_*` and prefill parameters?
12. The office address to publish, and where data is hosted.
13. International pricing (USD, SAR, AED, QAR), or quote-only?

---

## 7. Codex prompts (P0 and top P1)

Run them in order. Every prompt must keep the blog, blogs and insights files unchanged, and must end by running `BASE_URL=http://localhost:3000 node scripts/seo-site-scan.mjs`, which must pass 44/44.

**Prompt 1: Lead capture API.**
- Create `src/app/api/lead/route.ts` (POST).
- Validate `{ name, businessName?, phone, email?, industry?, message?, source, page, utm? }`. Require a phone matching `^\+?\d[\d\s-]{8,}$`.
- Drop submissions where the honeypot field `company_website` is filled.
- Forward the lead to `process.env.LEAD_WEBHOOK_URL` (Zapier, Make or CRM) and email `process.env.SALES_EMAIL` through Resend if `RESEND_API_KEY` is set.
- Return `{ ok: true }`. Never log PII.
- Add `.env.example` entries.

**Prompt 2: Wire the forms.**
- In `src/components/pages/contact/contact-form.tsx`:
  - Give every input a `name`.
  - Replace the "Numeric Field" label with "Phone Number".
  - Submit to `/api/lead` with `source: "contact"`, show loading and error states, and on success go to `/thank-you/?type=contact`.
- In `src/components/home/FinalCtaForm.tsx`:
  - POST the form data to `/api/lead` with `source: "final_cta"` and `page: location.pathname`.
  - Then redirect to `https://app.hulmsolutions.com/Register?src=<page>&plan=<plan if present>` plus the pass-through `utm_*` parameters from `sessionStorage`.
  - If the POST fails, still redirect, but fire a `lead_error` event.
- Add a hidden honeypot to both forms.

**Prompt 3: Tracking.**
- Create `src/lib/track.ts` exporting `track(event: string, params: Record<string, unknown>)`, which pushes to `window.dataLayer`.
- Capture `utm_*` from the landing URL into `sessionStorage`.
- Fire `cta_click` on every link to app.hulmsolutions.com (params: `location`, `label`, `plan`), `whatsapp_click` on `wa.me` links and `generate_lead` on a successful `/api/lead`.
- Fire `pricing_plan_select` on the pricing plan buttons.
- Use one delegated click listener in a client component mounted in `layout.tsx`, not per-button edits.
- Replace the jQuery-based GTM loader with `next/script` `strategy="afterInteractive"`. Remove the jquery dependency if nothing else imports it.
- On `/thank-you/`, fire `generate_lead_confirmed` with `type`.

**Prompt 4: Plan parameters.**
- In `content/pages/pricing.ts`, set each plan's CTA to `https://app.hulmsolutions.com/Register?plan=<starter|growth|business>&src=pricing`. Enterprise goes to `/book-a-demo/?plan=enterprise`.

**Prompt 5: Book-a-demo page.**
- Create `src/app/book-a-demo/page.tsx` in the benchmark design:
  - H1 "Book a free Hulm POS demo".
  - A 3-point "what you'll see" list.
  - The lead form (`source: "demo"`) and, if `NEXT_PUBLIC_BOOKING_URL` is set, an embedded booking calendar.
  - A WhatsApp fallback, 3 FAQs using `FaqDetails`, and `pageJsonLd`.
- Point the header "Book a demo" link and all "Book a Demo" / "Talk to Sales" CTAs there.
- Add the page to `sitemap.ts`, with metadata written for the page (no live equivalent).

**Prompt 6: Claims clean-up.**
- Apply the answers from section 6. Until then:
  - Rewrite PCI/2FA/256-bit/iOS/offline/5-minute/zero-hardware/24-7/"Certified & Tested"/"100%" statements into the "confirmed during setup" voice.
  - Change "Join 500+ businesses" to "Join growing businesses".
  - Delete `src/lib/google-reviews.ts` and `src/app/api/google-reviews/`.
  - Set one rating figure in `GoogleReviewsSection` from a constant.
- Files: `src/lib/apps/data.ts`, `src/lib/countries/data.ts`, `content/pages/about.ts`, `src/components/home/final-cta.tsx`, `src/components/home/GoogleReviewsSection.tsx`.
- Delete `content/pages/mobile-pos.ts` if no route imports it.

**Prompt 7: Product screenshots.**
- Copy the listed images from `public/wp-content/uploads/…` to `public/images/product/` as WebP (≤1600 px wide).
- Add `screens?: { src, alt, caption }[]` to `AppDetailData` and `IndustryData`, and render a "See it in Hulm POS" section after the hero in `AppTemplate` and `[industry]/page.tsx` using `next/image`.
- Map the screens:

| Page(s) | Screens |
|---|---|
| Restaurant, cafe | 4 restaurant screens |
| Inventory | `Hulm-POS-inventory-management`, `realtime-inventory-sync` |
| Orders | `hulm-solutions-sales-order-management` |
| Purchase orders | `purchase-order-management-software` |
| Logistics | `logistics-management-software-dashboard` |
| Mobile POS | `Mobile-POS` |
| Features, retail | `Hulm-POS-Dashboard` |

- Alt text must name the page topic.

**Prompt 8: Video.**
- Create `src/components/seo/lite-youtube.tsx`: a click-to-load facade with a poster image and a `VideoObject` JSON-LD prop.
- Add video `Fd6X_TPX9EA` to the homepage product section and the features page.

**Prompt 9: Social proof.**
- Render `TrustedBy` on the homepage and pricing page, using only the logos listed in a new `content/data/clients.ts` whose `verified: true` entries are filled in by the team.
- Add `caseStudySlug` to the industry data (bakery → `cupcake-queen-bakery-pos-qatar`, retail and electric → `implementing-a-pos-system-for-retail-the-laptop-store` and `real-tech-pos-system-karachi`, restaurant → `farhan-caterers-pos-karachi`, pharmacy and manufacturing → `implementing-pos-systems-for-medical-euquipment-industry`), and render a case-study card on the industry page.
- Make the `GoogleReviewsSection` heading a prop; on country pages use "Businesses run on Hulm. Here is what they say".

**Prompt 10: Contrast, headers, homepage performance.**
- Replace `text-[#209f8f]` on text smaller than 18 px with `text-[#167c70]`, and the default Button background with `#167c70` (hover `#125f57`).
- Add `role="img"` to the star-rating containers.
- In `next.config.ts`, set `poweredByHeader: false` and add `headers()`: HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` and `X-Frame-Options: SAMEORIGIN`.
- On the homepage, make the review and dashboard carousels load with `next/dynamic` (`ssr: true`, but hydrate on visibility), and verify the Lighthouse mobile performance score is 85 or higher on the Netlify preview.

**Prompt 11: Missing trust pages.**
- Create `/security/`, `/refund-policy/` and `/cookie-policy/` using `LegalPage`, with placeholder sections marked `TODO(team)`.
- Create `/pos-hardware/` in the benchmark design, with a compatible-hardware table taken from `content/data/hardware.ts`.
- Add all four to the footer and the sitemap.
- Add the office address and hours to the contact page and a `PostalAddress` to the Organization schema in `layout.tsx`.
- Unify the social links in `navigation.ts`, the footer and the schema.
