# Verification Backlog (`TODO_VERIFY.md`)
**Document Version:** 1.1.0  
**Target Routes:** `/pos-software-karachi/` and `/pos-software-lahore/`  
**Strict Policy:** Never invent facts. Unverified claims remain explicitly marked as placeholders in code comments, visible fallbacks, and documentation until confirmed with signed/documented proof.

---

# Lahore Route Verification Backlog (`/pos-software-lahore/`)

## Priority 1: Tax Integration Status (FBR & PRA)

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Lines ~220, ~466 | `[VERIFY: FBR Licensed Vendor Registration ID & PRA Direct Fiscal API Certification status]` | Obtain official FBR Vendor / Software Intermediary identification number if registered. Confirm whether Punjab Revenue Authority (PRA) integration is automated via direct fiscal API transmission or handled via compliant invoice template formatting with PNTN. |
| `content/drafts/fbr-vs-pra-lahore-restaurants-retailers.md` | Line ~32 | PRA electronic fiscal device integration parameters | Verify current Punjab budget rules for reduced sales tax rates (e.g. 5% on card vs 16% on cash) for restaurant food services in Lahore. |
| `src/app/pos-software-lahore/page.tsx` | Line ~452 | Multi-branch FBR portal declaration rule | Confirm exact IRIS form code (Form 181 / POS Terminal Management) and administrative steps required for declaring multiple retail branches. |

---

## Priority 2: Subscription Plan Limits & Multi-Branch Tiers

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Lines ~222, ~534 | `[VERIFY: Growth, Business & Enterprise multi-branch pricing tiers and user limits]` | Starter is confirmed at PKR 2,500/month (1 user, 1 branch). Growth is PKR 5,500/month (5 users, 2 branches), and Business is PKR 11,000/month (10 users, 5 branches). Confirm whether additional counters within the same branch trigger user or branch add-on fees. |
| `src/app/pos-software-lahore/page.tsx` | Line ~610 | `[VERIFY: Add-on pricing for users and branches]` | User add-on is listed as PKR 300/mo, branch add-on as PKR 700/mo. Confirm if volume discounts apply to 10+ branch rollouts. |

---

## Priority 3: Lahore Customer Case Studies (Unverified Superlatives & Metrics)

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Line ~362 | `[VERIFY: Khaas Pret & Apparel claims: "cut peak checkout queues by 3.5x", "~4,500 active SKUs", "fast-growing"]` | Obtain signed permission from Khaas Pret & Apparel (MM Alam Road, Lahore) to cite exact queue reduction statistics and active SKU numbers. Avoid strengthening superlatives in visible copy. |
| `src/app/pos-software-lahore/page.tsx` | Line ~392 | `[VERIFY: Al-Madina Auto Parts metrics: "15 handwritten registers", "14,000+ OEM parts", "40+ mechanic accounts"]` | Verify original register counts and OEM part catalog numbers with Al-Madina Auto Parts (Badami Bagh, Lahore) management before quoting as audited figures. |

---

## Priority 4: Zero Lahore Physical Presence (Strict Service-Area Framing)

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Lines ~176, ~205 | `[NO LAHORE OFFICE: Strictly service-area framing]` | Hulm Solutions has **no physical office or landline in Lahore**. Schema `LocalBusiness` strictly references Karachi HQ address with `areaServed: "Lahore"`. Never invent a Lahore address, phone number, or local technical center. Standard onboarding is remote via WhatsApp, video demo, and screen sharing. |

---

## Priority 5: System Capabilities (Offline, Urdu UI, Hardware, Data Migration)

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Line ~225 | `[VERIFY: Full Urdu UI localization release date]` | Confirmed that staff onboarding and support are provided in Urdu. Confirm target release quarter for native Urdu counter user interface. |
| `src/app/pos-software-lahore/page.tsx` | Line ~221 | `[VERIFY: Certified receipt printer model list]` | Confirm tested hardware models (e.g. Xprinter XP-N160II, Epson TM-T20III, Sunmi terminals, Honeywell scanners) to publish a certified hardware matrix. |
| `src/app/pos-software-lahore/page.tsx` | Lines ~224, ~638 | `[VERIFY: Download Hulm POS Excel Template .xlsx & max file limits]` | Provide direct public URL for downloadable product import template and confirm upload limits (e.g. 10,000 SKUs or 15MB file limit). |
| `src/app/pos-software-lahore/page.tsx` | Line ~227 | `[VERIFY: Dedicated support operating hours]` | Confirm exact operating hours for remote support desk (e.g., Mon–Sat 9:00 AM – 6:00 PM PKT). |

---

## Priority 6: Missing Industry Page Recommendations

| Missing Page Route | Reason for Recommendation | Status |
| :--- | :--- | :--- |
| `/industries/auto-parts/` | Badami Bagh auto spare parts case study and workflow exist, but currently links to generic `/customer-management/` and `/inventory-management/` to avoid dead links. A dedicated auto parts industry page should be created. | **Action Needed** |
| `/industries/clothing-store/` | Exists in repository and linked directly from the Lahore page. | **Active** |

---

## Priority 7: Customer Reviews & Ratings (Schema Omission)

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Line ~280 | `[VERIFY: Real Lahore Merchant Reviews - Awaiting signed attribution]` | `aggregateRating` and `review` nodes were intentionally omitted from JSON-LD schema per Google Rich Result Guidelines and strict zero-fabrication rules. Obtain signed testimonials and verified Google Review IDs before rendering individual merchant quotes in DOM or schema. |

---

## Priority 8: Editorial Byline

| File | Line Reference | Placeholder / Claim | Required Evidence / Action |
| :--- | :--- | :--- | :--- |
| `src/app/pos-software-lahore/page.tsx` | Line ~770 | `[VERIFY: Technical Product Lead, Hulm Solutions]` | Assign a named subject-matter expert or technical lead from Hulm Solutions as the verified reviewer for the Lahore landing page byline. |

---

# Karachi Route Verification Backlog (`/pos-software-karachi/`)

*(Retained from previous audit for full traceability)*

## Priority 1: Tax Integration Status (FBR & SRB)
- `src/app/pos-software-karachi/page.tsx`: Lines ~224, ~494 `[VERIFY: FBR Licensed Vendor Registration ID & SRB Direct Integration Module status]`.
- `content/drafts/fbr-vs-srb-karachi-businesses.md`: SRB electronic fiscal device integration parameters.

## Priority 2: Subscription Plan Limits & Multi-Branch Tiers
- `src/app/pos-software-karachi/page.tsx`: Line ~225, ~544 `[VERIFY: Growth, Business & Enterprise multi-branch pricing tiers and user limits]`.

## Priority 3: Karachi Office Operations
- `src/app/pos-software-karachi/page.tsx`: Line ~227, ~692 `[VERIFY: Dedicated support operating hours]`.
