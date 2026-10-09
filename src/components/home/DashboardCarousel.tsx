"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DashboardScreen {
  readonly title?: string;
  readonly description?: string;
  readonly image: string;
  readonly badge?: string;
}

interface DashboardCarouselProps {
  screens?: readonly DashboardScreen[];
  slides?: readonly DashboardScreen[];
}

interface NormalizedScreen {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export function DashboardCarousel({ screens, slides }: DashboardCarouselProps) {
  const items: NormalizedScreen[] = (screens || slides || []).map((s, i) => ({
    title: s.title || `Screen ${i + 1}`,
    description: s.description || "Real screens from the Hulm POS workspace.",
    image: s.image,
    badge: s.badge,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (advances every 6s unless hovered)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, total]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative w-full max-w-[1280px] mx-auto focus:outline-none select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="POS Dashboard Preview Carousel"
    >
      {/* Soft ambient glow behind expanded showcase */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-3xl bg-gradient-to-tr from-[#167c70]/12 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
      />

      {/* Main Showcase Window Frame */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#E4E2DA] bg-white shadow-[0_25px_70px_-15px_rgba(15,42,38,0.14)]">
        {/* Carousel Image Track Area - Edge-to-Edge for Maximum Image Size */}
        <div
          className="relative overflow-hidden bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((screen, idx) => (
              <div
                key={screen.title + idx}
                className="w-full shrink-0 flex items-center justify-center bg-white"
              >
                <div className="relative w-full overflow-hidden bg-white">
                  <Image
                    src={screen.image}
                    alt={`Hulm POS screen: ${screen.title}`}
                    width={1280}
                    height={620}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 96vw, 1280px"
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="h-auto w-full object-contain select-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Prev Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous dashboard slide"
            className="absolute left-2.5 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#0F2A26] hover:text-[#167c70] border border-[#E4E2DA] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#167c70]/40 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next dashboard slide"
            className="absolute right-2.5 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#0F2A26] hover:text-[#167c70] border border-[#E4E2DA] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#167c70]/40 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>
        </div>

        {/* Synchronized Screen Details Card & Indicators */}
        <div className="border-t border-[#E4E2DA] bg-white px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#edf7f5] px-2.5 py-1 text-xs font-bold text-[#167c70]">
                Screen 0{currentIndex + 1}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0F2A26] truncate">
                {items[currentIndex]?.title}
              </h3>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-zinc-600 line-clamp-2 sm:line-clamp-none">
              {items[currentIndex]?.description}
            </p>
          </div>

          {/* Pagination Dots & Numeric Counter */}
          <div className="flex items-center gap-3 shrink-0 self-center sm:self-auto">
            <div className="flex items-center gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === i
                      ? "w-7 h-2.5 bg-[#167c70] shadow-xs"
                      : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono font-semibold text-zinc-500 ml-1">
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Accessible listing for SEO crawlers and screen readers */}
      <div className="sr-only">
        {items.map((screen) => (
          <article key={screen.title}>
            <h4>{screen.title}</h4>
            <p>{screen.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
