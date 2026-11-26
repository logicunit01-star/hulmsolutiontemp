# SEO Changelog (`SEO_CHANGELOG.md`)
**Route:** `/pos-software-karachi/`  
**Git Branch:** `seo/pos-karachi-overhaul`  
**Date:** November 2026  
**Status:** Completed & Validated

---

## Summary of Major Changes

The `/pos-software-karachi/` landing page was rebuilt to establish ranking dominance for Karachi POS terms (`pos software karachi`, `pos system in karachi`, `point of sale in karachi`, `pos in karachi`), qualify for Google AI Overviews and LLM citations (ChatGPT, Perplexity, Gemini, Copilot), and boost conversion rates without making any unverified claims.

---

## Task-by-Task Implementation Mapping

### 1. On-Page SEO
- **Title Tag:** Updated to `POS Software in Karachi from PKR 2,500/mo | Hulm POS` (52 characters).
- **Meta Description:** Set to `Cloud POS system in Karachi for retail, restaurants and pharmacies: billing, inventory, Udhaar Khata and multi-branch. 14-day free trial, no card. WhatsApp support.` (155 characters).
- **Canonical:** Kept self-referencing `/pos-software-karachi/`.
- **OpenGraph & Twitter:** Synced titles, descriptions, and images. Locale set to `en_PK`.
- **Headings Structure:**
  - One semantic H1: `POS Software in Karachi for Retail, Restaurants & Pharmacies`.
  - Sub-H1 Answer-First Paragraph: Exactly 55 words naturally including "POS software in Karachi", "POS system in Karachi", and "point of sale in Karachi" once each, along with starting price (PKR 2,500/mo), 14-day free trial (no card), Karachi address (C-27, Block 14, Gulistan-e-Johar), and support contacts.
  - 9 Keyword/Question-Led H2s matching the required outline:
    1. `Hulm POS at a glance`
    2. `What does a POS system in Karachi include?`
    3. `How much does POS software cost in Karachi?`
    4. `POS for retail, restaurants, pharmacies and clothing stores in Karachi`
    5. `FBR and SRB integrated POS for Karachi businesses`
    6. `How to switch POS software without losing data`
    7. `Multi-branch POS for Karachi`
    8. `Local setup and support in Karachi`
    9. `Frequently asked questions`
  - Naturally used "POS in Karachi" in section 11 body copy.
- **Industry Anchors:** Linked industry cards to `/industries/*` with exact descriptive anchors (`Retail POS software in Karachi`, `Restaurant POS software in Karachi`, `Pharmacy POS software in Karachi`, etc.).
- **Image Audit & Neutral Alt Text:**
  - Copied multi-branch diagram to `/images/uploads/2026/11/retail-stock-transfer-diagram-karachi.webp` to eliminate "Lahore" from file names and alt tags on this page.
  - Rewrote alt texts across industry images to be factual descriptions of checkout counters without asserting unverified customer claims.

---

### 2. Structured Data (JSON-LD)
Created a single unified `@graph` containing 6 interconnected nodes:
1. `Organization`: Hulm Solutions profile with social links (`sameAs`: LinkedIn, Instagram, YouTube), website, and Pakistani customer support contact point.
2. `LocalBusiness`: Karachi office profile with verified street address (C-27, Block 14, Gulistan-e-Johar), phone, email, and `areaServed` set to Karachi. Omitted opening hours until confirmed.
3. `SoftwareApplication`: Hulm POS with Web Browser operating system, BusinessApplication category, and Offer node of PKR 2,500/month.
4. `WebPage`: Canonical URL, dateModified (`2026-11-20`), and `about` topics.
5. `BreadcrumbList`: Two-step breadcrumb (Home > POS software in Karachi).
6. `FAQPage`: 14 FAQs matching visible page text verbatim.
- **Strict Compliance:** Omitted `aggregateRating` and `review` to prevent schema spam penalties since customer reviews are pending verification.

---

### 3. Content and Sections (Exact Sequence)
1. **Hero Section:** H1, answer-first block, price callout, 2 primary CTAs, trust strip with `[VERIFY]` slots, and hero screenshot with `priority` and `fetchPriority="high"`.
2. **At a Glance Table & Checklist:** HTML table with 9 parameters in horizontal scroll wrapper, plus a 7-point "How to Choose POS Software in Karachi" criteria box designed for AI extraction.
3. **Manual vs Hulm POS:** 10-row comparison table resolving common counter friction points with an illustrative before/after graphic.
4. **Features Grid:** 8 feature cards with existing product screenshots.
5. **Industries Grid:** 6 sector cards with exact-match anchor text to `/industries/*`.
6. **FBR & SRB Compliance:** Balanced explanation of federal FBR rules (goods) and Sindh SRB rules (services), with a neutral fallback and license placeholder.
7. **Pricing Section:** Starter tier at PKR 2,500/mo with real inclusions, explicit tax and hardware exclusions, and `[VERIFY]` placeholders for higher tiers.
8. **Migration Steps:** 5-step zero-downtime migration checklist with Excel template slot.
9. **Social Proof:** Karachi case study card (Farhan Caterers POS in Karachi) linking to `/pos-case-studies/farhan-caterers-pos-karachi/`, with placeholder slot for verified customer testimonials.
10. **Local Section:** Lazy-loaded Google Maps embed for Gulistan-e-Johar, contact items, commercial area list, and clarification that standard onboarding is remote for speed.
11. **Lead Form:** Rebuilt 3-field visible form with optional expandable step and country toggle.
12. **FAQ Accordion:** 14 questions with answers (46–53 words each) server-rendered in HTML via `<details>`.
13. **Final CTA Band:** H2, price callout, CTAs, visible byline linking to `/editorial-policy/`, and "Related guides" block.

---

### 4. Design & UX (Mobile-First)
- Maintained Hulm brand colors: `#0F2A26`, `#167c70`, `#FAF9F5`, `#E4E2DA`, `#25D366`.
- Tables placed in dedicated horizontal overflow wrappers (`overflow-x-auto`) to eliminate mobile layout breaks.
- Sticky mobile bottom bar preserved via `<StickyMobileCta />` with 44px tap targets and padding protection.
- Accessible `<details>` accordions with keyboard navigation and visible focus rings.

---

### 5. Performance & Technical Optimization
- Hero image loaded with `priority` and `fetchPriority="high"`.
- Non-critical images set to `loading="lazy"`.
- Google Maps embed uses native `loading="lazy"`.
- Zero render-blocking heavy chart dependencies (lightweight pure-CSS bars with illustrative data notice).

---

### 6. GEO / AEO Strategy
- Standardized NAP (Name, Address, Phone) across page copy, LocalBusiness schema, and contact cards.
- Factual, quotable "at a glance" tables and bulleted criteria for direct LLM citation.
- Updated `/llms.txt` with enriched factual summary.

---

### 7. Tracking & Analytics
- Implemented `KarachiPageTracker` to capture `pricing_view`, `faq_open`, `trial_click`, and `whatsapp_click`.
- Rebuilt `KarachiDemoForm` to capture `demo_form_start` and `demo_form_submit`.
- Documented in `TRACKING.md`.

---

### 8. Supporting Draft Content
Created 5 comprehensive draft markdown articles in `content/drafts/` with complete frontmatter, outlines, intros, and FAQs:
1. `pos-software-price-pakistan-2026.md`
2. `fbr-vs-srb-karachi-businesses.md`
3. `best-pos-software-pharmacies-karachi.md`
4. `how-to-switch-pos-software-without-losing-data.md`
5. `what-is-udhaar-khata-software.md`
