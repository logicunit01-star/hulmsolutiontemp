"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { captureAttribution, decorateSignupUrl, track } from "@/lib/track";

/**
 * One delegated click listener for the whole site (no per-button wiring):
 * - signup links (app.hulmsolutions.com/Register): fires trial_start_click and adds src, plan and UTM params
 * - sign-in, WhatsApp, phone, email and book-a-demo links: fire their own events
 * Location = nearest [data-track-location], else the nearest section heading, else header/footer.
 */
function locationOf(el: Element) {
  const tagged = el.closest("[data-track-location]");
  if (tagged) return tagged.getAttribute("data-track-location") || "";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section");
  const heading = section?.querySelector("h1, h2");
  return heading?.textContent?.trim().slice(0, 60) || "page";
}

export function SiteTracking() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    track("page_view_virtual", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const label = (anchor.textContent || anchor.getAttribute("aria-label") || "").trim().slice(0, 80);
      const location = locationOf(anchor);

      if (/app\.hulmsolutions\.com\/Register/i.test(href)) {
        const plan = anchor.dataset.plan || new URL(href, window.location.origin).searchParams.get("plan") || undefined;
        anchor.href = decorateSignupUrl(href);
        track("trial_start_click", { label, location, plan, page_path: window.location.pathname });
        if (plan) track("pricing_plan_select", { plan, location });
      } else if (/app\.hulmsolutions\.com\/?$/i.test(href)) {
        track("sign_in_click", { location });
      } else if (href.includes("wa.me/")) {
        track("whatsapp_click", { label, location, page_path: window.location.pathname });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { location });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { location });
      } else if (href.startsWith("/book-a-demo")) {
        track("demo_cta_click", { label, location, page_path: window.location.pathname });
      } else if (href.startsWith("/pricing")) {
        track("cta_click", { label, location, target: "pricing" });
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
