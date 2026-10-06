"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Boxes,
  Users,
  Layers,
  Receipt,
  Tags,
} from "lucide-react";

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

  const getScreenIcon = (index: number) => {
    switch (index) {
      case 0:
        return ShoppingCart;
      case 1:
        return Receipt;
      case 2:
        return Boxes;
      case 3:
        return Tags;
      case 4:
        return Users;
      default:
        return Layers;
    }
  };

  const getMockUrl = (index: number) => {
    switch (index) {
      case 0:
        return "app.hulmsolutions.com / orders / new";
      case 1:
        return "app.hulmsolutions.com / pos / register";
      case 2:
        return "app.hulmsolutions.com / products / catalog";
      case 3:
        return "app.hulmsolutions.com / categories / list";
      case 4:
        return "app.hulmsolutions.com / customers / directory";
      default:
        return "app.hulmsolutions.com / dashboard";
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative max-w-5xl mx-auto focus:outline-none select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="POS Dashboard Preview Carousel"
    >
      {/* Interactive Feature Tabs */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        role="tablist"
        aria-label="Dashboard screen tabs"
      >
        {items.map((screen, idx) => {
          const isActive = currentIndex === idx;
          const Icon = getScreenIcon(idx);
          return (
            <button
              key={screen.title + idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`group relative flex items-center gap-2 sm:gap-2.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#0F2A26] text-white shadow-md shadow-[#0F2A26]/20 ring-2 ring-[#7AE582]/60 scale-[1.02]"
                  : "bg-white text-zinc-700 hover:text-[#167c70] hover:bg-[#edf7f5] border border-[#E4E2DA] shadow-xs"
              }`}
              aria-label={`View ${screen.title} slide`}
              aria-selected={isActive}
              role="tab"
            >
              <span
                className={`grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full transition-colors ${
                  isActive
                    ? "bg-[#7AE582] text-[#0F2A26]"
                    : "bg-zinc-100 text-zinc-500 group-hover:bg-[#167c70]/10 group-hover:text-[#167c70]"
                }`}
              >
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <span className="tracking-tight">{screen.title}</span>
              {isActive && (
                <span className="hidden sm:inline-flex h-1.5 w-1.5 rounded-full bg-[#7AE582] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Showcase Window Frame */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#E4E2DA] bg-white shadow-[0_20px_60px_-15px_rgba(15,42,38,0.12)]">
        {/* Mock App/Browser Window Header Bar */}
        <div className="flex items-center justify-between border-b border-[#E4E2DA]/80 bg-[#FAF9F5] px-4 py-3 sm:px-5">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/30" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/30" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/30" />
          </div>

          {/* Browser Path / URL Bar */}
          <div className="flex items-center gap-1.5 rounded-md border border-[#E4E2DA] bg-white px-2.5 py-1 text-[11px] sm:text-xs font-mono text-zinc-600 max-w-[200px] sm:max-w-md truncate shadow-2xs">
            <span className="text-[#167c70] font-semibold hidden sm:inline">https://</span>
            <span className="truncate">{getMockUrl(currentIndex)}</span>
          </div>

          {/* Live Indicator / Counter */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#167c70]">
            <span className="h-2 w-2 rounded-full bg-[#25a18e] animate-ping" />
            <span className="hidden md:inline">Interactive Demo</span>
            <span className="font-mono text-[11px] sm:text-xs text-zinc-500">
              {currentIndex + 1}/{total}
            </span>
          </div>
        </div>

        {/* Carousel Image Track Area */}
        <div
          className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] to-[#edf4f2]"
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
                className="w-full shrink-0 p-2 sm:p-4 md:p-6 flex items-center justify-center"
              >
                <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl border border-[#E4E2DA] bg-white shadow-sm">
                  <Image
                    src={screen.image}
                    alt={`Hulm POS screen: ${screen.title}`}
                    width={1197}
                    height={688}
                    sizes="(max-width: 1024px) 100vw, 1100px"
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#0F2A26] hover:text-[#167c70] border border-[#E4E2DA] shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#167c70]/40 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next dashboard slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#0F2A26] hover:text-[#167c70] border border-[#E4E2DA] shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#167c70]/40 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Synchronized Screen Details Card & Indicators */}
        <div className="border-t border-[#E4E2DA] bg-white px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#edf7f5] px-2 py-0.5 text-xs font-bold text-[#167c70]">
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
