"use client";

import { useEffect } from "react";

export function LegacyContentEnhancer() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".production-parity-page");
    if (!root) return;

    const cleanups: Array<() => void> = [];

    root.querySelectorAll<HTMLDetailsElement>("details.e-n-accordion-item").forEach((details) => {
      const summary = details.querySelector<HTMLElement>("summary");
      if (!summary) return;

      const sync = () => {
        if (details.open) {
          details.parentElement?.querySelectorAll<HTMLDetailsElement>("details.e-n-accordion-item[open]").forEach((sibling) => {
            if (sibling !== details) sibling.open = false;
          });
        }
        summary.setAttribute("aria-expanded", String(details.open));
        summary.tabIndex = 0;
      };
      sync();
      details.addEventListener("toggle", sync);
      cleanups.push(() => details.removeEventListener("toggle", sync));
    });

    root.querySelectorAll<HTMLElement>(".swiper:not(.swiper-initialized)").forEach((carousel) => {
      carousel.tabIndex = 0;
      carousel.setAttribute("aria-live", "polite");
    });

    root.querySelectorAll<HTMLElement>(".elementor-swiper-button-prev, .elementor-swiper-button-next").forEach((button) => {
      const onClick = () => {
        const carousel = button.closest(".elementor-widget")?.querySelector<HTMLElement>(".swiper");
        if (!carousel) return;
        const direction = button.classList.contains("elementor-swiper-button-prev") ? -1 : 1;
        carousel.scrollBy({ left: direction * carousel.clientWidth, behavior: "smooth" });
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onClick();
      };
      button.tabIndex = 0;
      button.setAttribute("role", "button");
      button.addEventListener("click", onClick);
      button.addEventListener("keydown", onKeyDown);
      cleanups.push(() => {
        button.removeEventListener("click", onClick);
        button.removeEventListener("keydown", onKeyDown);
      });
    });

    root.querySelectorAll<HTMLElement>(".ff-form-loading").forEach((element) => {
      element.classList.remove("ff-form-loading");
    });
    root.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[aria-required='true']").forEach((field) => {
      field.required = true;
    });

    root.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
      const hideBrokenImage = () => {
        const container = image.closest<HTMLElement>(".slider-item") || image;
        container.hidden = true;
        container.setAttribute("aria-hidden", "true");
      };
      if (image.complete && image.naturalWidth === 0) hideBrokenImage();
      image.addEventListener("error", hideBrokenImage);
      cleanups.push(() => image.removeEventListener("error", hideBrokenImage));
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
