"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Loads jQuery (some GTM tags may rely on `$`) and then the GTM container, once the page has
 * finished loading and the main thread is idle, so neither competes with the first render.
 * The dataLayer exists from the start, so events pushed earlier are still sent once GTM loads.
 * If no tag in the container uses jQuery, drop the import and load GTM directly.
 */
export function GoogleTagManager({ id }: { id: string }) {
  useEffect(() => {
    let disposed = false;
    let script: HTMLScriptElement | undefined;
    window.dataLayer = window.dataLayer || [];
    const startedAt = Date.now();

    const load = () => {
      void import("jquery").then(({ default: jQuery }) => {
        if (disposed) return;
        window.$ = jQuery;
        window.jQuery = jQuery;
        window.dataLayer.push({ "gtm.start": startedAt, event: "gtm.js" });

        script = document.createElement("script");
        script.id = "google-tag-manager";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
        document.head.appendChild(script);
      });
    };

    const whenIdle = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(load, { timeout: 2000 });
      else setTimeout(load, 1);
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      disposed = true;
      window.removeEventListener("load", whenIdle);
      script?.remove();
    };
  }, [id]);

  return null;
}
