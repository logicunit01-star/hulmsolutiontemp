"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface IndustryItem {
  readonly title: string;
  readonly href: string;
  readonly image: string;
  readonly alt: string;
  readonly description?: string;
}

interface HomeIndustriesCarouselProps {
  items: readonly IndustryItem[];
}

export function HomeIndustriesCarousel({ items }: HomeIndustriesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    const container = carouselRef.current;
    const cardEl = container.children[clampedIndex] as HTMLElement | undefined;
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
      setActiveMobileIndex(clampedIndex);
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeMobileIndex) {
      setActiveMobileIndex(closestIndex);
    }
  };

  return (
    <div className="mt-12">
      {/* UNIFIED Track: Swipeable Carousel on Mobile, 2-col on Tablet, 3-col on Desktop */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex sm:grid gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
      >
        {items.map((industry) => (
          <div
            key={industry.title}
            className="w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center flex flex-col"
          >
            <Link
              href={industry.href}
              className="group relative min-h-64 sm:min-h-72 h-full overflow-hidden rounded-2xl bg-[#0F2A26] flex flex-col justify-end"
            >
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 84vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26] via-[#0F2A26]/55 to-transparent" />
              <div className="relative z-10 flex items-end justify-between p-5 sm:p-6 text-white">
                <div className="pr-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {industry.title}
                  </h3>
                  {industry.description ? (
                    <p className="mt-1 text-xs sm:text-[13px] text-white/85 leading-snug font-normal">
                      {industry.description}
                    </p>
                  ) : null}
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 transition group-hover:bg-[#7AE582] group-hover:text-[#0F2A26]">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* MOBILE Navigation Controls */}
      <div className="sm:hidden mt-4 flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => scrollToCard(activeMobileIndex - 1)}
          disabled={activeMobileIndex === 0}
          aria-label="Previous industry"
          className="h-9 w-9 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex flex-col items-center gap-1.5">
          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to industry ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileIndex === idx
                    ? "w-6 bg-[#167c70]"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-zinc-500">
            {activeMobileIndex + 1} of {items.length} &bull; Swipe to explore
          </span>
        </div>

        <button
          type="button"
          onClick={() => scrollToCard(activeMobileIndex + 1)}
          disabled={activeMobileIndex === items.length - 1}
          aria-label="Next industry"
          className="h-9 w-9 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
