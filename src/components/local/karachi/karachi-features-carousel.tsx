"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface FeatureCardItem {
  readonly title: string;
  readonly desc: string;
  readonly image: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

interface KarachiFeaturesCarouselProps {
  items: readonly FeatureCardItem[];
}

export function KarachiFeaturesCarousel({ items }: KarachiFeaturesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const container = scrollRef.current;
    const cardEl = container.children[clamped] as HTMLElement | undefined;
    if (cardEl) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();
      const targetScrollLeft =
        container.scrollLeft +
        (cardRect.left - containerRect.left) -
        container.clientWidth / 2 +
        cardEl.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
      setActiveIndex(clamped);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closest = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(scrollCenter - childCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closest = idx;
      }
    });

    if (closest !== activeIndex) {
      setActiveIndex(closest);
    }
  };

  return (
    <div>
      {/* Mobile Swipe Notice */}
      <div className="sm:hidden flex items-center justify-between mb-3 px-1 text-xs text-zinc-500">
        <span className="font-semibold text-[#167c70] inline-flex items-center gap-1.5">
          <span>👈 Swipe horizontally</span>
        </span>
        <span className="text-[11px] font-mono text-zinc-400">
          {activeIndex + 1} of {items.length} features
        </span>
      </div>

      {/* Track: Carousel on mobile (< sm), 2-col on tablet (sm:), 4-col on desktop (lg:) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex sm:grid gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-4 touch-pan-x"
      >
        {items.map((f, idx) => (
          <div
            key={f.title}
            className="w-[85vw] max-w-[320px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center group flex flex-col overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-2xs hover:shadow-sm transition-all"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
              <Image
                src={f.image}
                alt={f.alt}
                width={f.width}
                height={f.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 85vw, (min-width: 1024px) 280px, (min-width: 640px) 50vw, calc(100vw - 32px)"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-[#0F2A26]">{f.title}</h4>
                <span className="sm:hidden text-[10px] font-bold text-zinc-400">
                  #{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed flex-1">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Navigation Controls */}
      <div className="sm:hidden mt-4 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous feature"
          className="h-10 w-10 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to feature ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-[#167c70]"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-zinc-500">
            Swipe to see all features
          </span>
        </div>

        <button
          type="button"
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label="Next feature"
          className="h-10 w-10 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
