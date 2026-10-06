# Phase 1 — Shared POS-focused navigation

**Date:** 19 September 2026  
**Branch:** `refactor/pos-focused-positioning`  
**Status:** Implemented and locally verified

## Scope completed

- Renamed the user-facing **Apps** entry to **Product** while preserving the `/apps/` route.
- Replaced the primary navigation with Product, Industries, FBR Compliance, Pricing, Customers and Resources.
- Added a mobile Product submenu for POS, inventory, purchasing, customers, orders and reporting.
- Changed application utility language from “Go to apps” to **Sign in**.
- Changed the primary conversion label from “Get Started” to **Start free trial**.
- Added **Book a demo** as the secondary conversion route.
- Made Pakistan the default region for general Pakistan-facing pages.
- Reduced Global Editions from a dominant mobile block to a compact expandable region control.
- Rebuilt the footer around Product, Industries, Resources and Company.
- Removed cattle and standalone logistics links from the shared header/footer discovery journey.
- Preserved all cattle, logistics and regional URLs.
- Removed unverified shared-footer claims for 99.99% uptime, government approval and a zero-penalty guarantee.
- Corrected header social destinations to Hulm's actual profiles already used by the existing footer.

## Mobile navigation behavior

- The drawer uses dialog semantics and identifies its accessible title.
- Background main/footer content becomes inert while the drawer is open.
- Body scrolling is locked while open.
- Keyboard focus moves to the close button.
- Tab and Shift+Tab remain within the drawer.
- Escape closes the drawer.
- Focus returns to the menu trigger after closing.
- Product and region disclosures expose their expanded state and controlled content.
- The logo uses Next.js image handling instead of a raw `<img>` element.

## Verification

- Targeted ESLint for all five changed source files: **Pass**
- Production build: **Pass**
- TypeScript validation: **Pass**
- Static generation: **89/89 outputs**
- Desktop visual check at 1440 × 1000: **Pass**
- Mobile visual check at 390 × 844: **Pass**
- Mobile Product submenu check: **Pass**
- Escape-to-close and focus restoration check: **Pass**
- Desktop and mobile footer layout check: **Pass**

## Intentionally deferred

The homepage still contains its existing ERP-style hero, cattle/logistics modules, broad “business suite” language and current conversion copy. Those belong to Phase 2 and were intentionally not mixed into the shared-navigation implementation.

The `/apps/` page and Pricing page also retain their current content until their dedicated phases.
