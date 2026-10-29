"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Loads the GTM container on first user interaction or when the browser is idle,
 * preventing 300+ KiB of third-party JavaScript from competing with initial paint
 * and blocking the main thread during LCP/FCP.
 * The dataLayer exists from the start, so events pushed earlier are queued and
 * processed once GTM loads.
 * Does not load on localhost to avoid polluting GA4 Realtime.
 */
export function GoogleTagManager({ id }: { id: string }) {
  useEffect(() => {
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.endsWith(".local"));
    if (isLocal || !id) return;
    let loaded = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    window.dataLayer = window.dataLayer || [];
    const startedAt = Date.now();

    const loadGTM = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners and fallback timer
      INTERACTION_EVENTS.forEach((e) => {
        window.removeEventListener(e, loadGTM);
      });
      if (timer) clearTimeout(timer);

      window.dataLayer.push({ "gtm.start": startedAt, event: "gtm.js" });

      const script = document.createElement("script");
      script.id = "google-tag-manager";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
      document.head.appendChild(script);
    };

    const INTERACTION_EVENTS = ["scroll", "pointermove", "touchstart", "click", "keydown"] as const;

    // Load immediately upon any user engagement
    INTERACTION_EVENTS.forEach((e) => {
      window.addEventListener(e, loadGTM, { passive: true, once: true });
    });

    // Fallback: load after 4 seconds of idle so analytics are never lost
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(loadGTM, { timeout: 4000 });
      } else {
        timer = setTimeout(loadGTM, 4000);
      }
    }

    return () => {
      INTERACTION_EVENTS.forEach((e) => {
        window.removeEventListener(e, loadGTM);
      });
      if (timer) clearTimeout(timer);
    };
  }, [id]);

  return null;
}
