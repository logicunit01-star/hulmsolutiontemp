"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  History,
  Users,
  Package,
  FolderTree,
  Warehouse,
  BellRing,
  ArrowUpDown,
  Check,
  RotateCw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface FeatureItem {
  number: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  points: string[];
}

const features: FeatureItem[] = [
  {
    number: "01",
    shortLabel: "Dashboard",
    icon: LayoutDashboard,
    title: "Smart POS Dashboard",
    tagline: "Make checkout faster with a user-friendly POS dashboard.",
    points: [
      "Scan barcodes and search products by name.",
      "Filter products by category.",
      "Hold sales and resume them later.",
      "Manage opening and closing cash for each shift.",
    ],
  },
  {
    number: "02",
    shortLabel: "Sales History",
    icon: History,
    title: "Sales History Management",
    tagline: "Access sales records and manage transactions with ease.",
    points: [
      "Find orders by order ID.",
      "View today's sales and complete sales history.",
      "Process returns and automatically update stock.",
      "Reprint receipts and view order details.",
    ],
  },
  {
    number: "03",
    shortLabel: "Customers",
    icon: Users,
    title: "Customer Management",
    tagline: "Keep customer information organized and accessible.",
    points: [
      "Add and edit customer records.",
      "Search customers by name, ID, or email.",
      "Filter customer records for quick access.",
    ],
  },
  {
    number: "04",
    shortLabel: "Products",
    icon: Package,
    title: "Product Management",
    tagline: "Manage your product catalog from one place.",
    points: [
      "Add, search, and edit products.",
      "View all products in one dashboard.",
      "Manage active and draft products.",
      "Filter product records for quick access.",
    ],
  },
  {
    number: "05",
    shortLabel: "Categories",
    icon: FolderTree,
    title: "Category Management",
    tagline: "Organize products into categories for easier management.",
    points: [
      "Create product categories manually.",
      "Search product category.",
      "Filter categories by ID or name.",
    ],
  },
  {
    number: "06",
    shortLabel: "Inventory",
    icon: Warehouse,
    title: "Inventory Management",
    tagline: "Track stock levels and keep inventory records up to date.",
    points: [
      "Add stock or set product quantities directly.",
      "Monitor low-stock and out-of-stock items.",
      "View total inventory value.",
      "Review product inventory history.",
    ],
  },
  {
    number: "07",
    shortLabel: "Stock Alerts",
    icon: BellRing,
    title: "Low-Stock Alerts",
    tagline: "Identify stock shortages before they affect your sales.",
    points: [
      "View all inventory alerts.",
      "Identify low, critical, and out-of-stock products.",
      "Search products to find items needing attention.",
    ],
  },
  {
    number: "08",
    shortLabel: "Import & Export",
    icon: ArrowUpDown,
    title: "Data Import & Export",
    tagline: "Manage business data efficiently with simple import and export tools.",
    points: [
      "Import or export products, categories, and customers.",
      "Download templates to prepare your data.",
      "Upload files and validate their format before importing.",
    ],
  },
];

export function PosFeaturesSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToCard = (index: number) => {
    if (index < 0 || index >= features.length) return;
    setActiveMobileIndex(index);
    if (carouselRef.current) {
      const cardEl = carouselRef.current.children[index] as HTMLElement;
      if (cardEl) {
        cardEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const firstChild = container.children[0] as HTMLElement | undefined;
    if (!firstChild) return;

    const cardWidth = firstChild.offsetWidth;
    const gap = 14; // gap-3.5 = 14px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex >= 0 && newIndex < features.length && newIndex !== activeMobileIndex) {
      setActiveMobileIndex(newIndex);
    }
  };

  // Keep the active pill in view when mobile card changes
  useEffect(() => {
    if (pillsRef.current) {
      const activePill = pillsRef.current.children[activeMobileIndex] as HTMLElement | undefined;
      if (activePill) {
        activePill.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeMobileIndex]);

  const renderCard = (feature: FeatureItem, idx: number) => {
    const Icon = feature.icon;
    const isFlipped = !!flippedCards[idx];

    return (
      <div
        key={feature.number}
        onClick={() => toggleCard(idx)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleCard(idx);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${feature.title}. Click or tap to flip and view feature details.`}
        className={`group perspective-1000 relative h-[235px] sm:h-[225px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#167c70] rounded-xl select-none ${
          isFlipped ? "is-flipped" : ""
        }`}
      >
        <div className="card-flip-inner relative h-full w-full">
          {/* FRONT FACE */}
          <div className="backface-hidden absolute inset-0 flex h-full w-full flex-col justify-between rounded-xl border border-[#E4E2DA] bg-white p-4.5 shadow-2xs transition-all duration-300 group-hover:border-[#167c70]/40 group-hover:shadow-lg">
            {/* Top: Icon + Module Number */}
            <div className="flex items-start justify-between gap-2.5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#167c70]/10 text-[#167c70] transition-colors duration-300 group-hover:bg-[#167c70] group-hover:text-white">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <span className="font-mono text-xs font-semibold text-[#167c70] bg-[#167c70]/8 px-2.5 py-0.5 rounded-full border border-[#167c70]/15 shrink-0">
                {feature.number}
              </span>
            </div>

            {/* Middle: Title & Tagline */}
            <div className="my-auto py-1">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0F2A26] leading-tight group-hover:text-[#167c70] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-xs text-zinc-500 leading-snug line-clamp-2">
                {feature.tagline}
              </p>
            </div>

            {/* Bottom: Interactive Flip Hint */}
            <div className="pt-2.5 border-t border-zinc-100/90 flex items-center justify-between text-[11px] font-medium text-zinc-400">
              <span className="text-[#167c70] font-semibold flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#25A18E]" />
                {feature.points.length} Points
              </span>
              <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-[#167c70] transition-colors">
                <span className="hidden sm:inline">Hover to flip</span>
                <span className="sm:hidden">Tap to flip</span>
                <RotateCw className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="backface-hidden card-face-back absolute inset-0 flex h-full w-full flex-col justify-between rounded-xl border border-[#167c70]/50 bg-gradient-to-br from-[#0F2A26] via-[#10302B] to-[#143B35] text-white p-4 sm:p-4.5 shadow-xl">
            {/* Top: Title + Number */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5 min-w-0">
                <Icon className="h-3.5 w-3.5 text-[#7AE582] shrink-0" />
                <h4 className="text-[13px] font-bold text-white truncate leading-tight">
                  {feature.title}
                </h4>
              </div>
              <span className="font-mono text-[10px] font-bold text-[#7AE582] bg-[#7AE582]/15 px-1.5 py-0.5 rounded border border-[#7AE582]/30 shrink-0">
                {feature.number}
              </span>
            </div>

            {/* Middle: Checklist */}
            <ul className="space-y-1.5 my-auto py-1">
              {feature.points.map((point, pIdx) => (
                <li
                  key={pIdx}
                  className="flex items-start gap-1.5 text-xs text-zinc-200 leading-tight"
                >
                  <div className="h-3.5 w-3.5 rounded-full bg-[#7AE582]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-2.5 w-2.5 text-[#7AE582] stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom: Flip Back Hint */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px] text-zinc-400">
              <span className="text-[#7AE582]/80 font-medium">Hulm POS</span>
              <span className="inline-flex items-center gap-1 text-zinc-300 group-hover:text-white transition-colors">
                <span>Flip back</span>
                <RotateCw className="h-2.5 w-2.5 rotate-180" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section
      data-reveal
      className="relative overflow-hidden border-t border-zinc-200/70 bg-[#FAF9F5] py-10 sm:py-12 lg:py-16"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 mb-2.5 text-xs font-semibold text-[#167c70]">
            <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
            <span>Interactive Feature Modules</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[32px] lg:leading-[1.22]">
            Powerful POS Software Features for Your Business
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
            Manage sales, products, customers, and inventory from one easy-to-use POS software. Hulm POS simplifies daily operations and helps you keep your business organized.
          </p>
          <p className="mt-2 text-xs text-zinc-500 font-medium hidden sm:block">
            Hover over any card to flip and view key capabilities
          </p>
        </div>

        {/* MOBILE & TABLET VIEW: Compact horizontal swipe slider (Eliminates vertical scrolling!) */}
        <div className="lg:hidden">
          {/* Module Pills Selector (One-tap direct jump) */}
          <div
            ref={pillsRef}
            className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {features.map((feature, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <button
                  key={feature.number}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#167c70] text-white shadow-xs"
                      : "bg-white text-zinc-600 border border-[#E4E2DA] hover:bg-zinc-50"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#7AE582]" : "text-[#167c70]"
                    }`}
                  >
                    {feature.number}
                  </span>
                  <span>{feature.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Track with snap */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-3.5 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0"
          >
            {features.map((feature, idx) => (
              <div
                key={feature.number}
                className="w-[84vw] max-w-[330px] sm:w-[320px] shrink-0 snap-center"
              >
                {renderCard(feature, idx)}
              </div>
            ))}
          </div>

          {/* Mobile Bottom Navigation Bar */}
          <div className="mt-3 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => scrollToCard(activeMobileIndex - 1)}
              disabled={activeMobileIndex === 0}
              aria-label="Previous feature module"
              className="h-8 w-8 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center gap-1.5">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Go to feature ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeMobileIndex === idx
                        ? "w-5 bg-[#167c70]"
                        : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-medium text-zinc-500">
                {activeMobileIndex + 1} of {features.length} • Tap card to flip points
              </span>
            </div>

            <button
              type="button"
              onClick={() => scrollToCard(activeMobileIndex + 1)}
              disabled={activeMobileIndex === features.length - 1}
              aria-label="Next feature module"
              className="h-8 w-8 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW: Full 4x2 Grid (1024px and up) */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
          {features.map((feature, idx) => renderCard(feature, idx))}
        </div>
      </Container>
    </Section>
  );
}
