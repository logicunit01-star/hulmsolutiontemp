# Page 1 of 58: Homepage `/`

**Compared:** live https://hulmsolutions.com/ (fetched 30 Sep 2026) vs. local `src/app/page.tsx` + `content/pages/home.ts` (built with `next build`, rendered HTML crawled)
**Decision basis:** the local design and its new content are the base. Every ranking signal from the live page is carried into it. Nothing from either side is dropped without a reason written here.

---

## 1. Verdict

| Signal | Live | Local now | Status |
|---|---|---|---|
| `<title>` | POS \| Best POS Software \| Point of Sale Systems in Pakistan | same | ✅ keep |
| Meta description | Discover POS system for small business \| best POS software & point of sale systems… | same | ✅ keep |
| H1 | Best POS Software in Pakistan | same | ✅ keep |
| Canonical | https://hulmsolutions.com/ | same | ✅ |
| Body words (duplicates removed) | **~2,300** | **815** | 🔴 −65 % |
| H2 sections | 14 | 10 | 🔴 7 live sections missing or renamed |
| Body internal links | 13 (FBR + 12 industries) | 13 (FBR, features, pricing, 3 modules, industries hub, 6 industries) | 🟠 6 industry links lost, 7 new links gained |
| Images | ~100 (badges, reviews, logos) | 15 | 🟠 |
| Schema | WebPage, BreadcrumbList, ImageObject, Organization, WebSite, FAQPage | Organization, WebSite, FAQPage, Product/SoftwareApplication + Offer | 🟠 WebPage + Breadcrumb missing; SoftwareApplication is a gain |
| og:image | hero-image-hulm.webp | **missing** | 🔴 |

The metadata is safe. The **body content** is where the homepage would lose rankings: 65 % of the copy, 7 sections, most secondary keywords and 6 industry links are gone.

A note on "keyword stuffing": the goal is to **match the live page's keyword coverage**, not to go beyond it. Google rewards the live page's current density; pushing well past it risks a spam signal. The targets in §4 are set at live levels.

---

## 2. Section-by-section map

Legend: ✅ kept · 🟠 weakened · 🔴 missing · 🆕 new local content to keep

| # | Live section (H2 / key heading) | Keywords it carries | Local equivalent | Status | Action |
|---|---|---|---|---|---|
| 1 | **H1** Best POS Software in Pakistan | best POS software in Pakistan | Same H1 | ✅ | Keep |
| 1a | **H2** "Start with POS Grow into a Complete business suite" + "Inventory, logistics, vendors, customers and more. One login. One platform." + paragraph "Most Pakistani retail and restaurant owners run their business across five disconnected tools… monthly panic before every FBR notice…" | business suite, Pakistani retail and restaurant, FBR, inventory, logistics, vendors | Local hero description "Sell faster, keep stock accurate…" (🆕) | 🔴 | Keep the local description. **Add** the live H2 as the hero sub-heading and the live "five disconnected tools" paragraph under it |
| 1b | Offer line "No credit card required · PKR 2,500/month · No hidden fees" + CTAs "Start 14 Days Free Trial" / "**Watch Demo Video**" (YouTube) | PKR 2,500, free trial, no credit card | Local CTAs "Start 14-Day Free Trial" / "Book a WhatsApp Demo" + proof chips (🆕) | 🟠 | Keep both local CTAs. **Add** the offer line and a third link "Watch demo video" → `https://www.youtube.com/watch?v=Fd6X_TPX9EA` |
| 2 | Trusted By: 8 badges (TheSaaSDir, CodeHype, SoftwareSuggest Top Trending, SaaSHub Approved, Highly Recommended, GoodFirms, Trustpilot, Product Hunt) | trust/E-E-A-T; **badge backlinks** | "Trusted by growing businesses in Pakistan": 5 badges | 🟠 | **Restore TheSaaSDir, CodeHype and SaaSHub badges with their original links.** Those directories often require the badge to keep the listing (and their backlink) |
| 3 | **H2** Still Managing Your Business on Excel, WhatsApp and Paper? — 4 cards: **FBR Stress**, **Invisible Stock Losses**, **No Control Across Branches**, **Customer Data You Cannot Use** | FBR, compliant invoice, real time stock, branches, customer record | Same H2 (🆕 intro line "one source of truth"); 3 cards: Slow and disconnected sales, Stock you cannot trust, No control across branches | 🟠 | Keep the H2 and intro. Use **4 cards** with the live titles and live copy. Fold "slow and disconnected sales" into the intro sentence |
| 4 | **H2** One Login. Everything Your Business Runs On. — 2 paragraphs ("Pakistan's most complete business operations platform for SMEs…", "Unlike standalone POS apps…") + **10 modules**, each with "What it does in plain words / Why it matters for Pakistani businesses" | POS & billing, inventory management, purchase orders, vendor management, customer management, order management, reporting & analytics, logistics management, **mobile POS**, **cattle management**, SMEs, real time | "Everything around every sale stays connected": 4 cards (POS, Inventory, Purchasing, Reporting) with bullets + links (🆕) | 🔴 | **Biggest gap.** Use the live H2 and 2 paragraphs, with the local "From counter to control room" as the eyebrow. Show **all 10 modules** with both live lines. Keep the local bullets on the 4 existing cards. **Every card links to its module page** (live had no links here, so this is a gain) |
| 5 | **H2** Powerful POS Dashboard with Easy to Use Interface + "Run everything from one simple dashboard in Hulm Point of Sale Software. This cloud based POS software…" | point of sale software, cloud based POS software, dashboard | "See how Hulm works behind every sale": 3 screens with captions (🆕) | 🟠 | Keep the local screens and captions. **Change the H2** to the live text and use the local H2 as the eyebrow. Add the live paragraph |
| 6 | **H2** Benefits of Hulm POS System — intro + 10 bullets (fast checkout, real-time inventory tracking, sales monitoring, expense tracking, employee scheduling, vendor relationships, digital invoicing, detailed reports, multiple locations, loyal customers) | benefits of POS system, real-time inventory tracking, digital invoicing | — | 🔴 | **Restore** as a 2-column checklist next to the image (alt "Benefits of Hulm POS System") |
| 7 | **H2** FBR Compliance We Handle It For You — 2 paragraphs + What we do / What you get (4) / What you avoid (4) + CTA "Get FBR Compliant POS — Free Setup Included" | FBR-compliant invoices, FBR registration, QR codes, penalties, audit | **H2 "FBR-Integrated POS Software for Pakistan"** (🆕, stronger keyword) + 4 bullets + CTA | 🟠 | **Keep the local H2** (it targets "FBR integrated POS"). Use "FBR Compliance — We Handle It For You" as the eyebrow. Restore the first live paragraph and the 3 columns (What we do / get / avoid). CTA: "Get FBR-Compliant POS — Free Setup Included" → `/fbr-integrated-pos-pakistan/` |
| 8 | **H2** Why Pakistani Businesses Choose Hulm Over Every Other Option + intro (Karachi, Lahore) + **comparison table** (7 rows × 4 competitors) | Pakistani businesses, Karachi, Lahore, FBR-compliant invoicing, mobile POS, cattle management, PKR, ZATCA | — (`components/home/comparison-table.tsx` exists but isn't used) | 🔴 | **Restore** as a semantic `<table>` with `<caption>`. Reuse `comparison-table.tsx` |
| 9 | **H2** Why Choose Hulm POS System? + paragraph + **H3** Key Points For Choosing Hulm POS (15 points) | Hulm POS, barcode scanners, cloud accessibility, FBR-compliant invoicing, multiple locations | — | 🔴 | **Restore.** Show the 15 points as compact chips. Rewrite the paragraph lightly ("indomitable magic wand" is weak copy), but keep "HULM Solutions POS", "retail shops, restaurants" and "scalability" |
| 10 | **H2** Industries We Serve + intro + **12 industries** (each linked) | customized POS system, 12 industry terms | "POS software built around the way you sell": 6 industries + "View all" (🆕) | 🟠 | H2 → "**Industries We Serve**", with the local H2 as the eyebrow. **Show all 12**, each linking to its page (restores 6 lost links: manufacturing, furniture, cafe, toys, jewellery, electric). Add the live intro sentence |
| 11 | **H2** Live on Hulm in Under 5 Minutes + "No IT team. No installation. No credit card." + 3 steps + demo video | free trial, no installation | Pricing block with 4 steps (🆕) | 🟠 | Restore the H2, the one-liner and 3 steps. Fix the live copy mismatch (live Step 2's text describes email verification and Step 3's describes app selection). Suggested: 1 Create your free account · 2 Verify and choose your apps · 3 Make your first sale in under a minute |
| 12 | **H2** Pakistani Businesses Run on Hulm — Here is What They Say + intro ("single-branch bakery in Lahore… multi-location retail chain in Karachi") + **10 Google reviews** | best POS software in Pakistan (said in 2 reviews), FBR integration, bakery, restaurant, retail, inventory | "What teams value after moving to Hulm": 3 trimmed quotes | 🔴 | H2 → live text, and add the intro. **Show all 10 reviews in full** from `content/data/google-reviews.json` via `GoogleReviewsSection` (already built). The reviews contain the head term twice, naturally. Keep the links to Trustpilot and Google reviews |
| 13 | **H2** Trusted solutions by businesses across the world + intro + client logos | streamline daily operations | — (`public/images/home/trusted-clients/*` exists but isn't rendered) | 🔴 | **Restore** the logo strip with alt = client name |
| 14 | (not on live) | PKR 2,500 per month, cloud access | 🆕 "Start with POS, then grow at your own pace": price card + steps + "See pricing" | 🆕 | **Keep**, and merge the steps into #11 so steps don't appear twice. Say "PKR 2,500 per month" in full |
| 15 | **H2** Frequently Asked Questions + intro + **8 Q&As** | best POS software in Pakistan, POS software cost in Pakistan, FBR compliant, mobile phone/tablet, multiple branches, industries, free trial, offline | "What to know before you start": 7 Q&As (answers shortened, and the "cost in Pakistan" and "industries" questions dropped/changed) + 🆕 "Do I need special POS hardware?" | 🟠 | H2 → "**Frequently Asked Questions**" (local H2 as the eyebrow). **9 questions**: the 8 live ones with their live wording + the local hardware question. Use the live answers, softened only where a claim can't be proven (see §5). FAQPage JSON-LD from the same array |
| 16 | **H2** Your Competitors Already Have a System. You Can Too For Free. + paragraph + **lead form** (name, phone, email, industry) | free trial, no setup fee | "Put your next sale at the centre of a better operation" + 2 CTAs (🆕) | 🟠 | **Use the live H2 and paragraph** (they convert and carry "free"). Keep the local CTAs, and restore the lead form (`components/home/FinalCtaForm.tsx` exists; list all 12 industries in its dropdown) |

---

## 3. New local content to keep (not on live)

These additions strengthen the page; keep them all:

1. Hero eyebrow "Cloud POS for growing businesses", the hero description and the 3 proof chips.
2. The "Book a WhatsApp Demo" CTA (a strong lead channel in Pakistan).
3. The H2 **"FBR-Integrated POS Software for Pakistan"**. It targets "FBR integrated POS", which live only had in the CTA.
4. Module-card bullets (Cloud-based POS, Real-time stock visibility, Multi-location inventory, Purchase orders, Vendor history, Branch comparison…).
5. Product screenshots with descriptive alt text ("Hulm POS screen: Create a sales order"…).
6. The pricing card "PKR 2,500 / month · Starting plan" and the "See pricing" link.
7. The FAQ "Do I need special POS hardware?".
8. `Product/SoftwareApplication` + `Offer` JSON-LD.
9. **New internal links** to `/features/`, `/inventory-management/`, `/purchase-orders/`, `/reporting-module/`, `/pricing/` and `/industries/`. Live didn't have these.
10. The more careful compliance wording. Keep it wherever it is more accurate; see §5.

---

## 4. Keyword coverage targets (body text, duplicates removed)

| Term | Live | Local now | **Target** |
|---|---|---|---|
| best POS software in Pakistan | 4 | 2 | **4–5** (H1, hero H2 area, FAQ Q+A, 1 review) |
| POS software (any) | 8 | 5 | **8–10** |
| point of sale | 2 | 0 | **2–3** (dashboard paragraph, "Unlike standalone POS apps… your point of sale") |
| POS system | 5 | 0 | **5** (Benefits H2, Why Choose H2, Industries intro, FAQ) |
| Pakistan / Pakistani | 34 / 25 | 6 / 1 | **30+ / 15+** ("Why it matters for Pakistani businesses" ×10 covers most of it) |
| FBR (total) | 23 | 12 | **20–24** |
| FBR-compliant / compliant invoice | 8 / 10 | 1 / 1 | **6–8 / 8** |
| FBR integrated | 3 | 5 | **5** (keep local gain) |
| inventory management | 3 | 1 | **3–4** |
| real-time / real time | 8 | 1 | **6–8** |
| mobile POS | 4 | 0 | **4** |
| cattle management | 3 | 0 | **3** |
| logistics | 4 | 0 | **4** |
| vendor / customer / order management | 2 / 1 / 1 | 0 / 0 / 0 | **2 / 2 / 2** |
| reporting / analytics | 3 / 2 | 7 / 0 | **7 / 2** |
| cloud (based POS) | 3 | 5 | **5** |
| PKR 2,500 | 4 | 1 | **3–4** |
| 14-day free trial / no credit card | 5 / 4 | 4 / 1 | **5 / 3** |
| SME / small business | 3 / 2 | 0 / 0 | **3 / 2** |
| retail / restaurant | 11 / 9 | 4 / 4 | **10 / 8** |
| each of the 12 industries | 2–6 each | 0–2 | **≥ 2 each** (grid label + alt/intro) |
| Karachi / Lahore | 2 / 2 | 0 / 0 | **2 / 2** |
| QR code / barcode / ZATCA | 2 / 1 / 1 | 0 | **2 / 1 / 1** |
| business suite | 3 | 0 | **3** |
| Hulm Solutions | 5 | 0 | **3–5** |
| **Total body words** | **~2,300** | **815** | **2,000–2,400** |

---

## 5. Claims the team must approve (keyword stays, wording becomes provable)

The local copy toned down several live claims, probably on purpose. You can keep the **keyword phrase** without the unprovable superlative:

| Live claim | Risk | Suggested wording (keeps the keyword) |
|---|---|---|
| "Hulm POS is consistently rated the top choice…" | Unverifiable | "Hulm POS is built for Pakistani SMEs that want the **best POS software in Pakistan** for FBR-compliant invoicing, real-time inventory and multi-branch control — at PKR 2,500 per month." |
| "the most affordable full-featured POS system available" | Comparative claim | "one of the most affordable full-featured POS systems in Pakistan" |
| "It serves 14 industries" (lists 12) | Inconsistent | "12+ industries" |
| "Pakistan's only business suite with a built-in cattle management module" | Needs proof | Keep it if true (it's a strong differentiator); otherwise "one of the few…" |
| "24/7 Support" (key points) | Needs proof | Keep only if you offer it |
| Comparison table: "Only platform in PK" / competitor ✓/✕ | Comparative | Keep the table with a footnote "Based on publicly listed features, Sept 2026" |
| "Can Hulm POS work offline?" — live answer | Live answer effectively says no | Keep the **question** (it matches real searches) with an accurate answer |

---

## 6. Internal links (target)

**Keep** (live): `/fbr-integrated-pos-pakistan/` + all 12 industries
`/industries/retail-store/` `/industries/restaurant-pos/` `/industries/pharmacy-store/` `/industries/bakery-pos-system/` `/industries/salon-pos/` `/industries/clothing-store/` `/industries/cafe/` `/industries/jewellery-shop/` `/industries/electric-store/` `/industries/furniture-store/` `/industries/toys-store/` `/industries/manufacturing-industries/`

**Keep** (new local): `/features/` `/pricing/` `/industries/` `/inventory-management/` `/purchase-orders/` `/reporting-module/`

**Add**: `/vendors-management/` `/customer-management/` `/order-management/` `/logistics-management-software/` `/mobile-pos/` `/cattle-management-software/` (from the 10-module grid) · `/blog/what-is-pos/` (anchor "what is a POS system", in the FAQ answer or Why Choose section) · `/blog/best-point-of-sale-system-for-small-business-in-pakistan/` (anchor "POS system for small business in Pakistan", comparison intro) · `/pos-case-studies/` (from the testimonials section) · `/zatca/` (the ZATCA row of the comparison table)

That makes **≈28 unique body links**, all with a trailing slash.

---

## 7. Technical items on this page

- [ ] `og:image` + `twitter:image` = `https://hulmsolutions.com/wp-content/uploads/2026/06/hero-image-hulm.webp` (1540×963; this is the live value)
- [ ] JSON-LD: add `WebPage` (`@id https://hulmsolutions.com/#webpage`) and `BreadcrumbList` (Home) to the existing Organization/WebSite/FAQPage/SoftwareApplication. Add `VideoObject` for the demo video if it's embedded
- [ ] FAQPage JSON-LD built from the **same** 9 items that are visible
- [ ] Remove `keywords` from the page metadata (it has no effect)
- [ ] Hero image `priority`; lazy-load everything below the fold. Reviews and logos must not shift layout (CLS < 0.1)
- [ ] All FAQ answers, module copy and reviews in the **server-rendered HTML** (no client-only rendering). Check with `curl localhost:3000/ | grep "Invisible Stock Losses"`
- [ ] All internal hrefs end in `/`

---

## 8. Target outline (final order)

1. Hero: H1 Best POS Software in Pakistan · H2 Start with POS, Grow into a Complete Business Suite · local description + live "five disconnected tools" paragraph · offer line · CTAs (Trial / WhatsApp demo / Watch demo video) · proof chips · hero screenshot
2. Trust badges (8, with original links)
3. H2 Still Managing Your Business on Excel, WhatsApp and Paper? (4 live cards)
4. H2 One Login. Everything Your Business Runs On. (2 paragraphs + 10 linked modules)
5. H2 Powerful POS Dashboard with Easy to Use Interface (local screens + live paragraph)
6. H2 Benefits of Hulm POS System (10 bullets)
7. H2 FBR-Integrated POS Software for Pakistan (eyebrow "FBR Compliance — We Handle It For You"; paragraph + do/get/avoid + CTA)
8. H2 Why Pakistani Businesses Choose Hulm Over Every Other Option (table)
9. H2 Why Choose Hulm POS System? (paragraph + 15 key points)
10. H2 Industries We Serve (12 linked cards)
11. H2 Live on Hulm in Under 5 Minutes (3 steps + local pricing card)
12. H2 Pakistani Businesses Run on Hulm — Here is What They Say (10 reviews)
13. H2 Trusted solutions by businesses across the world (logos)
14. H2 Frequently Asked Questions (9)
15. H2 Your Competitors Already Have a System. You Can Too For Free. (form + CTAs)

---

## 9. Codex prompt: homepage only

```
CONTEXT: Next.js 16 App Router; trailingSlash: true (every internal href ends with "/"). Live WordPress homepage copy is in src/content/productionParityData.json → pages["/"].mainHtml. Spec: planning/seo-audit-2026-09-30/pages/01-homepage.md (read all of it first). Keep the current React design system and all "new local content" listed in §3 of the spec.

TASK: Rebuild the homepage content so it carries every live ranking signal plus the new local content.

1. content/pages/home.ts: restructure to the 15-section outline in §8 of the spec. Copy the live text VERBATIM from mainHtml for: hero H2 + "five disconnected tools" paragraph, offer line, 4 problem cards, "One Login" 2 paragraphs + 10 modules (title, whatItDoes, whyItMatters, href), dashboard paragraph, 10 benefits, FBR paragraph + whatWeDo/whatYouGet/whatYouAvoid, comparison table rows, Why Choose paragraph + 15 key points, industries intro, 3 onboarding steps (use the corrected step copy in §2 row 11), testimonials intro, client-logos intro, 8 FAQ Q&As, final CTA H2 + paragraph. Apply ONLY the claim edits in §5. Fix obvious typos ("Trail" → "Trial", "Jewellry" → "Jewellery").
2. src/app/page.tsx: render the sections in the §8 order with the H2 texts exactly as listed (the local headings become eyebrows where §2 says so). Reuse existing components: comparison-table.tsx (semantic <table> + <caption>), GoogleReviewsSection (all 10 reviews from content/data/google-reviews.json, full text; the JSON has 22 entries with duplicates, so de-duplicate by name + text), trusted-by.tsx / public/images/home/trusted-clients/* (logo strip), FinalCtaForm.tsx (industry dropdown lists all 12), SiteFaqAccordion (answers in the SSR HTML).
3. Industries grid: 12 cards using public/images/industries/*.jpg, alt "<Industry> POS system", each linking to its live slug (retail-store, restaurant-pos, pharmacy-store, bakery-pos-system, salon-pos, clothing-store, cafe, jewellery-shop, electric-store, furniture-store, toys-store, manufacturing-industries).
4. Module grid: 10 cards linking to /features/, /inventory-management/, /purchase-orders/, /vendors-management/, /customer-management/, /order-management/, /reporting-module/, /logistics-management-software/, /mobile-pos/, /cattle-management-software/.
5. Add contextual links from §6: /blog/what-is-pos/, /blog/best-point-of-sale-system-for-small-business-in-pakistan/, /pos-case-studies/, /zatca/.
6. Trust strip: add TheSaaSDir, CodeHype and SaaSHub badges with the same image URLs and outbound links as live (read them from mainHtml).
7. Metadata: keep title, description and canonical unchanged; remove `keywords`; add openGraph.images and twitter.images = https://hulmsolutions.com/wp-content/uploads/2026/06/hero-image-hulm.webp.
8. JSON-LD: keep FAQPage (from the same 9 visible items) and SoftwareApplication/Offer; add WebPage (@id https://hulmsolutions.com/#webpage, isPartOf #website, about #organization, primaryImageOfPage) and BreadcrumbList (Home). Put everything in one @graph.
9. Performance: the hero image keeps priority; everything below the fold is lazy; no layout shift from the review/logo strips.

ACCEPTANCE (write scripts/check-home.mjs and run it against `next start`):
- <title>, meta description and H1 identical to live.
- <main> word count between 2,000 and 2,600.
- Keyword counts in <main> text meet the "Target" column in §4 of the spec (±1). Print a table.
- The 14 H2 texts listed in §8 are present (case-insensitive).
- All 28 internal links from §6 are present; 0 internal hrefs without a trailing slash.
- The FAQPage JSON-LD question count equals the visible FAQ count (9).
- `npm run build` passes; Lighthouse mobile performance ≥ 85, SEO = 100.
Do not touch any other page.
```

---

## 10. Sign-off checklist (team)

- [ ] Claims in §5 approved (cattle "only platform", 24/7 support, table footnote)
- [ ] Reviews: permission and accuracy confirmed (all 10 are real Google reviews)
- [ ] Codex output passes `check-home.mjs`
- [ ] Visual QA desktop and mobile
- [ ] **Next page: `/pricing/`** (order in `PAGE-TRACKER.md`)
