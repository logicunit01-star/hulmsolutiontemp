# SEO overlay method: benchmark design + live keywords (replaces the "restore live content" approach)

**Decided:** 30 Sep 2026
**Design and copy benchmark:** https://stalwart-toffee-39860f.netlify.app/ (the staging build)
**SEO source:** live hulmsolutions.com, via `src/content/productionParityData.json`

## What changed
Pages 1–5 were first fixed by bringing back the live WordPress sections and copy. That kept the keywords, but it bloated the pages and undid the new design. The new rule: **keep the benchmark page (its structure, sections, length and voice) and add a thin SEO layer on top.** Do not copy WordPress text.

## The SEO layer, per page

| Signal | Rule |
|---|---|
| `<title>` + meta description | **Exactly as live** (these carry the current rankings). Read them from the snapshot or copy them verbatim. |
| URL + canonical | Same as live, with a trailing slash. |
| H1 | Benchmark-style sentence that **contains the primary keyword**. Example: "Best POS Software in Pakistan to run sales, stock and every branch". |
| First paragraph | Mentions the primary keyword or a close variant once, naturally. |
| H2s | Keep the benchmark sections. Reword 2–4 H2s so each carries one secondary keyword (e.g. "Replace Excel, WhatsApp and paper with one **POS system**"). Do not bring back old H2s wholesale. |
| Body copy | Benchmark voice and length. Swap generic words for keyword terms where it reads naturally ("platform" → "point of sale system", "stock" → "real-time inventory"). |
| Industry / module coverage | Six feature cards as in the benchmark, plus **one compact row of link chips** for the rest (e.g. Mobile POS, Logistics, Cattle; Cafes, Jewellery…). This keeps every internal link and keyword with no extra sections. |
| FAQ | 6–8 short Q&As that match the live search questions ("What is the best POS software in Pakistan?", "How much does POS software cost in Pakistan?"). Every answer must be in the HTML (`FaqDetails`), with matching FAQPage schema. |
| Internal links | Every product and industry page linked at least once, plus 1–2 relevant blog posts. Trailing slash on all of them. |
| Images | Descriptive alt text containing the page topic. |
| Schema | WebPage + BreadcrumbList + page-type node (SoftwareApplication / Service / CollectionPage) + FAQPage. |
| Word count | Roughly the benchmark length (the homepage is ~850 words). Not the WordPress length. |
| Keyword density | Each term inside a **min/max band**: present where it matters, capped to prevent stuffing (the `maxKeyword` setting in the page config). |

## Checking
`BASE_URL=http://localhost:3100 node scripts/seo-page-check.mjs <page>` with `scripts/seo-page-configs/<page>.json`.
The check covers the title and description (= live), the H1 keyword, the min/max keyword bands, required links, schema, FAQ answers in the HTML, trailing slashes and alt text. It does **not** require the old WordPress H2s or word counts any more.

## Status
- **All 44 non-blog URLs now use this method** (30 Sep 2026). `scripts/seo-site-scan.mjs` passes 44/44. The details are in `OVERLAY-PASS-2026-09-30.md` and `PAGE-TRACKER.md`.
- Blog, blogs and insights pages are **kept byte-for-byte**, at the user's request.
- Shared helpers:
  - `seoMetadata()` and `pageJsonLd()` in `src/lib/seo/page-seo.ts`
  - `LinkChips`
  - `FaqDetails`
