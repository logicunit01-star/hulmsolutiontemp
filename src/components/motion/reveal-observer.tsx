"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades sections marked with data-reveal in as they scroll into view (once).
 * Content is only hidden after this script runs (html.js-reveal), so crawlers and visitors
 * without JavaScript always see it. CSS turns the effect off for prefers-reduced-motion.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => {
      // Anything already on screen at load shows immediately (no flash on the hero).
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-revealed");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
