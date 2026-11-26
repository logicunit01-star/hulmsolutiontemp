"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface IndustryCardItem {
  readonly title: string;
  readonly desc: string;
  readonly href: string;
  readonly anchorText: string;
  readonly image: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

interface KarachiIndustriesCarouselProps {
  items: readonly IndustryCardItem[];
}

export function KarachiIndustriesCarousel({ items }: KarachiIndustriesCarouselProps) {
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
          <span>👈 Swipe industries</span>
        </span>
        <span className="text-[11px] font-mono text-zinc-400">
          {activeIndex + 1} of {items.length} sectors
        </span>
      </div>

      {/* Track: Carousel on mobile (< sm), 2-col on tablet (sm:), 3-col on desktop (lg:) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex sm:grid gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 touch-pan-x"
      >
        {items.map((ind, idx) => (
          <article
            key={ind.title}
            className="w-[85vw] max-w-[330px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center group flex flex-col overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-2xs hover:shadow-sm transition-all"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
              <Image
                src={ind.image}
                alt={ind.alt}
                width={ind.width}
                height={ind.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 85vw, (min-width: 1024px) 360px, (min-width: 640px) 50vw, calc(100vw - 32px)"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#0F2A26]">{ind.title}</h3>
                <span className="sm:hidden text-[10px] font-bold text-zinc-400">
                  #{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed flex-1">
                {ind.desc}
              </p>
              <Link
                href={ind.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#105f56]"
              >
                {ind.anchorText} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile Navigation Controls */}
      <div className="sm:hidden mt-4 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous sector"
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
                aria-label={`Go to sector ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-[#167c70]"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-zinc-500">
            Swipe to see all sectors
          </span>
        </div>

        <button
          type="button"
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label="Next sector"
          className="h-10 w-10 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
