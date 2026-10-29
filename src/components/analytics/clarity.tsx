"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Defers Microsoft Clarity session recording script until first user interaction or idle callback,
 * eliminating render-blocking third-party JS and CPU long-tasks on initial load.
 * Does not load on localhost to avoid polluting session recordings.
 */
export function MicrosoftClarity({ projectId = "xuytzeeevo" }: { projectId?: string }) {
  useEffect(() => {
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.endsWith(".local"));
    if (isLocal || !projectId) return;
    let loaded = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const loadClarity = () => {
      if (loaded) return;
      loaded = true;

      INTERACTION_EVENTS.forEach((e) => {
        window.removeEventListener(e, loadClarity);
      });
      if (timer) clearTimeout(timer);

      // Official Clarity snippet
      (function (c: any, l: Document, a: string, r: string, i: string) {
        c[a] =
          c[a] ||
          function (...args: unknown[]) {
            (c[a].q = c[a].q || []).push(args);
          };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        y?.parentNode?.insertBefore(t, y);
      })(window, document, "clarity", "script", projectId);
    };

    const INTERACTION_EVENTS = ["scroll", "pointermove", "touchstart", "click", "keydown"] as const;

    INTERACTION_EVENTS.forEach((e) => {
      window.addEventListener(e, loadClarity, { passive: true, once: true });
    });

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(loadClarity, { timeout: 4000 });
      } else {
        timer = setTimeout(loadClarity, 4000);
      }
    }

    return () => {
      INTERACTION_EVENTS.forEach((e) => {
        window.removeEventListener(e, loadClarity);
      });
      if (timer) clearTimeout(timer);
    };
  }, [projectId]);

  return null;
}
