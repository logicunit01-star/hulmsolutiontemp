"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

export function LahorePageTracker() {
  useEffect(() => {
    // 1. Track pricing_view when the pricing section enters the viewport
    const pricingEl = document.getElementById("pricing-section");
    let hasTrackedPricing = false;

    let observer: IntersectionObserver | null = null;
    if (pricingEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTrackedPricing) {
              hasTrackedPricing = true;
              track("pricing_view", {
                section: "lahore_pricing",
                page_path: window.location.pathname,
              });
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(pricingEl);
    }

    // 2. Track FAQ accordion opens
    const handleToggle = (e: Event) => {
      const target = e.target as HTMLDetailsElement | null;
      if (target && target.tagName === "DETAILS" && target.open) {
        const questionEl = target.querySelector("summary h3");
        const question = questionEl?.textContent?.trim() || "FAQ Question";
        track("faq_open", {
          question,
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("toggle", handleToggle, true);

    // 3. Delegate trial_click and whatsapp_click for Lahore page specifically
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const location = anchor.getAttribute("data-track-location") || "lahore_page";
      const label = (anchor.textContent || "").trim().slice(0, 80);

      if (/app\.hulmsolutions\.com\/Register/i.test(href)) {
        track("trial_click", {
          label,
          location,
          page_path: window.location.pathname,
        });
      } else if (href.includes("wa.me/")) {
        track("whatsapp_click", {
          label,
          location,
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      if (observer && pricingEl) {
        observer.unobserve(pricingEl);
      }
      document.removeEventListener("toggle", handleToggle, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
