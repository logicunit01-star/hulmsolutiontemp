# Phase 0 baseline — Hulm POS-focused website repositioning

**Date:** 19 September 2026  
**Status:** Complete  
**Scope:** Repository protection, build verification, technical inventory and pre-change baseline only. No user-facing website content or design was changed.

## 1. Repository baseline

| Item | Baseline |
|---|---|
| Repository | `https://github.com/logicunit01-star/hulmsolutions.git` |
| Starting branch | `main` |
| Starting commit | `e940c0ee026604c21b155feae1ef366463c64d78` |
| Remote `main` at verification | `e940c0ee026604c21b155feae1ef366463c64d78` |
| Working branch | `refactor/pos-focused-positioning` |
| Framework | Next.js 16.3.4 / React 19.2.8 / TypeScript / Tailwind CSS 4 |
| Lockfile | `package-lock.json` |
| Environment files present | None |
| Local Vercel linkage present | No `.vercel` directory |

The working branch was created directly from the verified remote `main` commit. Application source remained unchanged during Phase 0.

## 2. Dependency baseline

Dependencies were installed with `npm ci`, using the committed lockfile.

Result:

- 500 packages installed.
- 501 packages audited by npm during installation.
- npm reported 3 high-severity vulnerabilities.
- No automatic audit fix was applied because `npm audit fix --force` could introduce breaking changes.
- `node_modules` is ignored by Git.

The dependency vulnerabilities should be reviewed separately from the repositioning work so dependency upgrades do not obscure product and design changes.

## 3. Production build baseline

Command: `npm run build`

**Result: Pass**

- Next.js compilation completed successfully.
- TypeScript validation completed successfully.
- Static generation completed successfully.
- 89 static/SSG outputs were generated.
- One API route was detected.

Build warning:

> Next.js detected a lockfile outside the repository and recommended explicitly configuring `turbopack.root`.

This warning does not currently block production builds. It should be resolved during technical cleanup to make build-root selection deterministic across machines.

## 4. Lint baseline

Command: `npm run lint`

**Result: Fail — pre-existing baseline debt**

- 106 total findings
- 50 errors
- 56 warnings

Main categories:

1. CommonJS `require()` usage in repository capture/scraping/test utilities.
2. Explicit `any` types across page content and templates.
3. Unescaped apostrophes and quotation marks in JSX.
4. Unused imports and assigned values.
5. Direct `<img>` usage instead of Next.js image optimization.

High-impact application files with existing lint errors include:

- `src/app/page.tsx`
- `src/app/apps/page.tsx`
- `src/app/pricing/page.tsx`
- `src/app/about/page.tsx`
- `src/app/case-studies/page.tsx`
- `src/app/case-studies/[slug]/page.tsx`
- `src/app/api/google-reviews/route.ts`
- shared app, industry and form templates

These findings existed before the repositioning changes. Future implementation should avoid increasing the count and should fix touched-file errors where practical. A separate cleanup batch is recommended for repository-wide lint compliance.

## 5. Route inventory

The repository contains 34 `page.tsx` components and generates 89 static/SSG outputs.

### Core marketing routes

- `/`
- `/about`
- `/contact`
- `/pricing`
- `/apps`
- `/features`
- `/integration`
- `/industries`
- `/case-studies`
- `/insights`
- `/blog`

### POS and operations routes

- `/inventory-management`
- `/purchase-orders`
- `/vendors-management`
- `/customer-management`
- `/order-management`
- `/reporting-module`
- `/mobile-pos`
- `/website`

### Routes to detach from the primary Hulm journey

- `/cattle-management-software`
- `/logistics-management-software`
- `/apps/cattle-management-software`
- `/apps/logistics-management-software`

These routes will remain accessible during the first implementation. Phase 1 removes their navigation and promotional exposure without deleting or redirecting them.

### Country and compliance routes

- `/fbr-integrated-pos-pakistan`
- `/pos-software-ksa`
- `/zatca`
- `/pos-software-uae`
- `/pos-software-qatar`
- `/pos-software-usa`

### Dynamic route families

- `/apps/[app]`
- `/industries/[industry]`
- `/case-studies/[slug]`
- `/insights/[slug]`
- `/blog/[slug]`
- `/author/[author]`

### Technical routes

- `/api/google-reviews`
- `/robots.txt`
- `/sitemap.xml`
- `/icon.png`
- `/apple-icon.png`

The repository currently exposes both `/insights/[slug]` and `/blog/[slug]` for article content. Canonical behavior and duplication should be verified during the SEO phase.

## 6. Environment and external-service inventory

No `.env` file is currently present. The source references these environment variables:

| Variable | Purpose | Current fallback |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, sitemap and robots output | `https://hulmsolutions.com` |
| `GOOGLE_PLACES_API_KEY` | Live Google Places review sync | Static verified review dataset |
| `GOOGLE_PLACE_ID` | Google Business Profile identifier | Static verified review dataset |

External destinations embedded in the site include:

- Trial/registration: `https://app.hulmsolutions.com/Register`
- Application sign-in: `https://app.hulmsolutions.com/`
- WhatsApp: `https://wa.me/923391119259`
- Telephone: `+92 339 1119259`
- Email: `info@hulmsolutions.com`

The homepage final CTA form currently redirects users to the registration application rather than submitting a marketing lead to an internal API.

## 7. Metadata and SEO baseline

- Global metadata is defined in `src/app/layout.tsx`.
- Homepage metadata is sourced from `content/pages/home.ts`.
- Pricing metadata is sourced from `content/pages/pricing.ts`.
- Apps/Product metadata is currently defined directly in `src/app/apps/page.tsx`.
- Several route families generate metadata dynamically from content data.
- `robots.ts` and `sitemap.ts` use `NEXT_PUBLIC_SITE_URL` with the production-domain fallback.
- Existing cattle, logistics, country and duplicate blog/insights routes are included in the current discoverable site architecture and require explicit SEO disposition decisions before redirects or removal.

## 8. Conversion baseline

The current primary conversion destinations are consistent in most application pages:

- Start trial → `https://app.hulmsolutions.com/Register`
- Sign in / go to apps → `https://app.hulmsolutions.com/`
- Talk to the team → WhatsApp number `+92 339 1119259`

However, copy varies between 14-day and 15-day trial language in the wider content set. Pricing, offer duration and claims must be centralized before production launch.

## 9. Visual baseline

The current Vercel staging website was verified against the checked-out source before Phase 0. Browser captures are stored outside the application repository so they do not increase the deployment bundle:

`C:\Users\Aamir Khan\Downloads\Hulm Marketing SEO\todo\hulm-staging-audit-2026-09-18\`

Baseline captures:

1. `01-homepage-top.png`
2. `02-homepage-suite.png`
3. `03-homepage-unrelated-modules.png`
4. `04-homepage-footer.png`
5. `05-apps-page.png`
6. `06-pricing-page.png`
7. `07-homepage-mobile.png`
8. `08-mobile-menu.png`

These cover the homepage, Apps page, Pricing page, desktop layout, mobile hero and mobile navigation.

## 10. Phase 0 exit criteria

- [x] Correct source repository confirmed against staging.
- [x] Remote `main` and local starting commit confirmed identical.
- [x] Protected working branch created.
- [x] Locked dependencies installed.
- [x] Existing production build verified.
- [x] Existing lint condition recorded.
- [x] Routes and dynamic route families inventoried.
- [x] Environment requirements inventoried.
- [x] External conversion destinations inventoried.
- [x] Metadata and SEO ownership points recorded.
- [x] Visual staging baseline linked.
- [x] No user-facing source changes made.

## 11. Phase 1 entry scope

The next approved implementation batch should be limited to shared discovery and navigation:

1. Change the user-facing “Apps” label to “Product.”
2. Introduce the POS-focused primary navigation hierarchy.
3. Simplify the desktop header and mobile drawer.
4. Reduce the prominence of Global Editions.
5. Remove cattle and standalone logistics from shared navigation and footer only.
6. Preserve all existing cattle/logistics URLs.
7. Keep trial, sign-in and WhatsApp destinations functional.
8. Validate build, changed-file lint behavior and desktop/mobile navigation before moving to the homepage rewrite.
