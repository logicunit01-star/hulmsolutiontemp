"use client";

import { useEffect } from "react";

export function BlogCarouselEnhancer() {
  useEffect(() => {
    const containers = Array.from(
      document.querySelectorAll<HTMLElement>(".industry-carousel-container, [data-carousel-container]")
    );

    containers.forEach((container) => {
      const track = container.querySelector<HTMLElement>('[data-carousel="mobile"], .industry-carousel-track');
      if (!track) return;

      const cards = Array.from(track.children) as HTMLElement[];
      const dots = Array.from(container.querySelectorAll<HTMLElement>(".carousel-dot"));
      const prevBtn = container.querySelector<HTMLButtonElement>(".carousel-prev-btn");
      const nextBtn = container.querySelector<HTMLButtonElement>(".carousel-next-btn");
      const hint = container.querySelector<HTMLElement>(".carousel-hint");

      if (cards.length === 0) return;

      const updateActive = () => {
        const scrollLeft = track.scrollLeft;
        const cardWidth = cards[0].offsetWidth;
        const gap = 16;
        const activeIndex = Math.min(
          cards.length - 1,
          Math.max(0, Math.round(scrollLeft / (cardWidth + gap)))
        );

        dots.forEach((dot, idx) => {
          if (idx === activeIndex) {
            dot.classList.add("w-5", "bg-[#167c70]");
            dot.classList.remove("w-1.5", "bg-zinc-300");
          } else {
            dot.classList.remove("w-5", "bg-[#167c70]");
            dot.classList.add("w-1.5", "bg-zinc-300");
          }
        });

        if (prevBtn) {
          prevBtn.disabled = activeIndex === 0;
          prevBtn.style.opacity = activeIndex === 0 ? "0.35" : "1";
        }
        if (nextBtn) {
          nextBtn.disabled = activeIndex === cards.length - 1;
          nextBtn.style.opacity = activeIndex === cards.length - 1 ? "0.35" : "1";
        }
        if (hint) {
          hint.textContent = `${activeIndex + 1} of ${cards.length} • Swipe to explore`;
        }
      };

      const scrollToCard = (index: number) => {
        const targetCard = cards[index];
        if (!targetCard) return;
        const targetLeft = targetCard.offsetLeft - track.offsetLeft - 16;
        track.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
      };

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          const scrollLeft = track.scrollLeft;
          const cardWidth = cards[0].offsetWidth;
          const gap = 16;
          const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
          scrollToCard(Math.max(0, currentIndex - 1));
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          const scrollLeft = track.scrollLeft;
          const cardWidth = cards[0].offsetWidth;
          const gap = 16;
          const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
          scrollToCard(Math.min(cards.length - 1, currentIndex + 1));
        });
      }

      dots.forEach((dot, idx) => {
        dot.style.cursor = "pointer";
        dot.addEventListener("click", () => scrollToCard(idx));
      });

      track.addEventListener("scroll", updateActive, { passive: true });
      updateActive();
    });
  }, []);

  return null;
}
