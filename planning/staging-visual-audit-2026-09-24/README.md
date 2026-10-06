# Staging visual and responsive audit

Date: 24 September 2026  
Environment: `https://stalwart-toffee-39860f.netlify.app` (staging only)  
Viewports: desktop `1536 × 673`; mobile `390 × 844`

## Journey health

| Step | Health | Evidence and outcome |
| --- | --- | --- |
| Global desktop navigation | ✅ Healthy | Utility bar, logo, primary navigation, sign-in, demo and trial actions are visible and ordered logically. The initially blank header capture was a browser-capture timing artifact; DOM geometry and the repeat capture confirmed the header is rendered normally. |
| Homepage hero | ✅ Healthy | Clear POS positioning, strong CTA hierarchy, readable proof points and a useful product screenshot. No horizontal overflow at the mobile breakpoint. |
| Insights index | ✅ Healthy | One clear H1, descriptive introduction and prominent featured content. The generous hero spacing is consistent with the current design system and does not block the featured article. |
| Long-form article | ✅ Healthy after fix | Desktop table of contents and article hierarchy are clear. Mobile article metadata no longer leaves separator bullets stranded on a separate line. |
| Mobile navigation | ✅ Healthy | Full-screen drawer exposes all primary destinations, region selector, sign-in, trial and demo actions. It uses a labelled dialog, labelled controls, focus placement and focus trapping. |
| Page landmarks | ✅ Healthy after fix | A semantic check found nested `<main>` landmarks on seven page/template families. Inner layout wrappers were changed to neutral `<div>` elements so every page now inherits one primary landmark from the root layout. |

## Strengths

- The POS-first message is immediately visible on desktop and mobile.
- Navigation labels match the simplified information architecture.
- CTA treatment is consistent across the header, hero and mobile drawer.
- The article template supports scanning with breadcrumbs, category, author, date, read time, image and table of contents.
- Representative pages contain one H1, no missing image alt attributes and no unnamed buttons in the browser checks.
- Homepage and article samples showed no horizontal overflow at `390px`.

## UX and accessibility risks

- The insights and features heroes use intentionally generous vertical spacing. This is acceptable at desktop size, but it can be tightened later if engagement data shows visitors are not reaching the first content card.
- Several content templates still use plain `<img>` elements. This does not block launch, but moving high-priority images to `next/image` is a future performance improvement.
- The Netlify badge overlaps the lower-right corner of staging captures. It is a hosting preview control, not part of the application interface.

## Evidence

- `04-home-header-recheck.png` — homepage desktop, confirmed header and hero
- `05-insights-desktop.png` — insights index desktop
- `06-article-desktop.png` — long-form article desktop
- `07-home-mobile.png` — homepage mobile
- `08-article-mobile.png` — article mobile after the separator and landmark fixes were deployed
- `09-mobile-menu.png` — mobile navigation drawer

## Evidence limits

- This is a representative browser audit, not a screenshot of all 100 generated routes.
- It does not include physical iOS/Android devices, Safari-specific behavior, form submission, authenticated application screens or production analytics.
- SEO route, canonical and internal-link verification is recorded separately in the development completion status.

No production deployment was performed during this audit.
