"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: ReactNode[];
  gridClassName?: string;
  itemClassName?: string;
  ariaLabel?: string;
}

export function MobileCarousel({
  children,
  gridClassName = "sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6",
  itemClassName = "w-[85vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none",
  ariaLabel = "Carousel",
}: MobileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const total = children.length;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const childWidth = el.firstElementChild?.clientWidth || clientWidth;
    const newIndex = Math.min(
      Math.max(0, Math.round(scrollLeft / (childWidth + 16))),
      total - 1
    );
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [total]);

  const scrollTo = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const childWidth = el.firstElementChild?.clientWidth || 300;
    const scrollAmount = direction === "left" ? -(childWidth + 16) : childWidth + 16;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const childWidth = el.firstElementChild?.clientWidth || 300;
    el.scrollTo({ left: index * (childWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Mobile controls & indicator header (hidden on desktop) */}
      <div className="flex sm:hidden items-center justify-between px-1 mb-3">
        <span className="text-xs font-medium text-zinc-500">
          Showing {activeIndex + 1} of {total} (Swipe to explore)
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            aria-label="Previous card"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E2DA] bg-white text-zinc-700 shadow-2xs disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            aria-label="Next card"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E2DA] bg-white text-zinc-700 shadow-2xs disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Container: Horizontal snap on mobile, Grid on sm+ */}
      <div
        ref={scrollRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={`flex sm:block overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible scrollbar-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#167c70] ${gridClassName}`}
      >
        {children.map((child, idx) => (
          <div key={idx} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>

      {/* Mobile pagination dots (hidden on desktop) */}
      <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              activeIndex === idx
                ? "w-6 bg-[#167c70]"
                : "w-2 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
