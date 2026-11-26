# Analytics & Conversion Tracking (`TRACKING.md`)
**Routes:** `/pos-software-lahore/` and `/pos-software-karachi/`  
**Container:** Google Tag Manager (`GTM-TMMQ565S`)  
**Data Layer Object:** `window.dataLayer`

---

## 1. Lahore Route Event Reference (`/pos-software-lahore/`)

| Event Name | Trigger Condition | Source Component | Payload Parameters |
| :--- | :--- | :--- | :--- |
| `trial_click` | Visitor clicks any "Start free trial" button or signup link pointing to `app.hulmsolutions.com/Register` | `LahorePageTracker` | `{ event: "trial_click", label: string, location: string, page_path: "/pos-software-lahore/" }` |
| `whatsapp_click` | Visitor clicks any WhatsApp link (`https://wa.me/...`) | `LahorePageTracker` | `{ event: "whatsapp_click", label: string, location: string, page_path: "/pos-software-lahore/" }` |
| `demo_form_start` | Visitor focuses on any field in the Lahore demo request form | `lahore-demo-form.tsx` | `{ event: "demo_form_start", form: "lahore_demo_form", page_path: "/pos-software-lahore/" }` |
| `demo_form_submit` | Visitor submits the 3-field Lahore demo request form | `lahore-demo-form.tsx` | `{ event: "demo_form_submit", form: "lahore_demo_form", business_type: string, page_path: "/pos-software-lahore/" }` |
| `generate_lead` | Lead API endpoint `/api/lead/` confirms successful reception | `submit-lead.ts` | `{ event: "generate_lead", form: "demo", industry: string, status: number }` |
| `lead_error` | Lead API returns an error or network request fails | `submit-lead.ts` | `{ event: "lead_error", form: "demo", status: number \| "network" }` |
| `faq_open` | Visitor toggles open any FAQ `<details>` accordion item | `LahorePageTracker` | `{ event: "faq_open", question: string, page_path: "/pos-software-lahore/" }` |
| `pricing_view` | Pricing card section enters 20% of the viewport (fired once per session) | `LahorePageTracker` | `{ event: "pricing_view", section: "lahore_pricing", page_path: "/pos-software-lahore/" }` |

---

## 2. Karachi Route Event Reference (`/pos-software-karachi/`)

| Event Name | Trigger Condition | Source Component | Payload Parameters |
| :--- | :--- | :--- | :--- |
| `trial_click` | Visitor clicks any "Start free trial" button pointing to `app.hulmsolutions.com/Register` | `KarachiPageTracker` | `{ event: "trial_click", label: string, location: string, page_path: "/pos-software-karachi/" }` |
| `whatsapp_click` | Visitor clicks any WhatsApp link | `KarachiPageTracker` | `{ event: "whatsapp_click", label: string, location: string, page_path: "/pos-software-karachi/" }` |
| `demo_form_start` | Visitor focuses or interacts with the first field in Karachi demo form | `karachi-demo-form.tsx` | `{ event: "demo_form_start", form: "karachi_demo_form", page_path: "/pos-software-karachi/" }` |
| `demo_form_submit` | Visitor submits the Karachi demo request form | `karachi-demo-form.tsx` | `{ event: "demo_form_submit", form: "karachi_demo_form", business_type: string, page_path: "/pos-software-karachi/" }` |
| `faq_open` | Visitor toggles open any FAQ accordion item | `KarachiPageTracker` | `{ event: "faq_open", question: string, page_path: "/pos-software-karachi/" }` |
| `pricing_view` | Pricing card section enters 20% of the viewport | `KarachiPageTracker` | `{ event: "pricing_view", section: "karachi_pricing", page_path: "/pos-software-karachi/" }` |

---

## 3. UTM & Attribution Capture

Attribution parameters are captured upon initial session landing and preserved in `sessionStorage` via `captureAttribution()` in `src/lib/track.ts`.

Captured keys:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `fbclid`
- `landing_page`
- `referrer`

When any signup link to `app.hulmsolutions.com/Register` is clicked, `decorateSignupUrl()` automatically appends the current page path (`src=/pos-software-lahore/`) along with the captured UTM query parameters to guarantee end-to-end attribution in the billing application.
