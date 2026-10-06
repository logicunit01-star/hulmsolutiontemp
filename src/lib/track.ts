/**
 * Analytics helpers (GTM dataLayer). Events queue in window.dataLayer even before GTM loads.
 * Event names (configure matching GA4 tags / conversions in GTM):
 *   cta_click, trial_start_click, demo_cta_click, whatsapp_click, phone_click, email_click,
 *   pricing_plan_select, generate_lead, lead_error, generate_lead_confirmed, video_play
 */
export type TrackParams = Record<string, string | number | boolean | undefined | null>;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
const ATTR_KEY = "hulm_attribution";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export function track(event: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | "landing_page" | "referrer", string>>;

/** Store first-touch UTM parameters, landing page and referrer for this browser session. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const existing = sessionStorage.getItem(ATTR_KEY);
    const url = new URL(window.location.href);
    const fromUrl: Attribution = {};
    for (const key of UTM_KEYS) {
      const value = url.searchParams.get(key);
      if (value) fromUrl[key] = value.slice(0, 120);
    }
    if (existing && !Object.keys(fromUrl).length) return;
    const data: Attribution = {
      ...fromUrl,
      landing_page: url.pathname,
      referrer: document.referrer ? new URL(document.referrer).hostname : "",
    };
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data));
  } catch {
    /* storage blocked: attribution is best-effort */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) || "{}") as Attribution;
  } catch {
    return {};
  }
}

const SIGNUP_HOST = "app.hulmsolutions.com";

/** Adds src (current page), plan and first-touch UTM parameters to a signup URL. */
export function decorateSignupUrl(href: string, extra: Record<string, string | undefined> = {}) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.hostname !== SIGNUP_HOST) return href;
    const attribution = getAttribution();
    if (!url.searchParams.has("src")) url.searchParams.set("src", window.location.pathname);
    for (const key of UTM_KEYS) {
      const value = attribution[key];
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    for (const [key, value] of Object.entries(extra)) if (value) url.searchParams.set(key, value);
    return url.toString();
  } catch {
    return href;
  }
}
