"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  ReceiptText,
  Users,
  Package,
  Tags,
  Warehouse,
  AlertTriangle,
  ArrowDownUp,
  Printer,
  ShieldCheck,
  Check,
  RotateCw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface CapabilityItem {
  readonly title: string;
  readonly description: string;
}

export interface ModuleItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly capabilities: readonly CapabilityItem[];
}

interface ComprehensiveFeaturesExplorerProps {
  eyebrow?: string;
  heading: string;
  description: string;
  modules: readonly ModuleItem[];
}

const moduleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "smart-pos-dashboard": LayoutDashboard,
  "sales-history": ReceiptText,
  "customer-management": Users,
  "product-management": Package,
  "category-management": Tags,
  "inventory-management": Warehouse,
  "low-stock-alerts": AlertTriangle,
  "data-import-export": ArrowDownUp,
  "hardware-compatibility": Printer,
  "staff-roles": ShieldCheck,
};

const shortLabels: Record<string, string> = {
  "smart-pos-dashboard": "Dashboard",
  "sales-history": "Sales History",
  "customer-management": "Customers",
  "product-management": "Products",
  "category-management": "Categories",
  "inventory-management": "Inventory",
  "low-stock-alerts": "Stock Alerts",
  "data-import-export": "Import/Export",
  "hardware-compatibility": "Hardware",
  "staff-roles": "Staff Roles",
};

export function ComprehensiveFeaturesExplorer({
  eyebrow = "Core Modules",
  heading,
  description,
  modules,
}: ComprehensiveFeaturesExplorerProps) {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToCard = (index: number) => {
    if (index < 0 || index >= modules.length) return;
    setActiveMobileIndex(index);
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardEl = container.children[index] as HTMLElement | undefined;
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
    const gap = 16;
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex >= 0 && newIndex < modules.length && newIndex !== activeMobileIndex) {
      setActiveMobileIndex(newIndex);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (pillsRef.current) {
      const container = pillsRef.current;
      const activePill = container.children[activeMobileIndex] as HTMLElement | undefined;
      if (activePill) {
        const containerRect = container.getBoundingClientRect();
        const pillRect = activePill.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (pillRect.left - containerRect.left) -
          container.clientWidth / 2 +
          activePill.clientWidth / 2;
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [activeMobileIndex]);

  const renderCard = (module: ModuleItem, idx: number) => {
    const Icon = moduleIcons[module.id] || LayoutDashboard;
    const isFlipped = !!flippedCards[idx];
    const num = String(idx + 1).padStart(2, "0");

    return (
      <div
        key={module.id}
        onClick={() => toggleCard(idx)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleCard(idx);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${module.title}. Click or tap to flip and view capabilities.`}
        className={`group perspective-1000 relative h-[290px] sm:h-[300px] w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#167c70] rounded-2xl select-none ${
          isFlipped ? "is-flipped" : ""
        }`}
      >
        <div className="card-flip-inner relative h-full w-full">
          {/* FRONT FACE */}
          <div className="backface-hidden absolute inset-0 flex h-full w-full flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-white p-5 shadow-xs transition-all duration-300 group-hover:border-[#167c70]/40 group-hover:shadow-md">
            {/* Top: Icon + Number Badge */}
            <div className="flex items-start justify-between gap-2.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#167c70]/10 text-[#167c70] transition-colors duration-300 group-hover:bg-[#167c70] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-bold text-[#167c70] bg-[#167c70]/8 px-2.5 py-0.5 rounded-full border border-[#167c70]/15 shrink-0">
                {num}
              </span>
            </div>

            {/* Middle: Title & Summary */}
            <div className="my-auto py-2">
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0F2A26] leading-snug group-hover:text-[#167c70] transition-colors duration-300">
                {module.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed line-clamp-3">
                {module.description}
              </p>
            </div>

            {/* Bottom: Flip Hint */}
            <div className="pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-medium text-zinc-400">
              <span className="text-[#167c70] font-semibold flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#25A18E]" />
                {module.capabilities.length} Features
              </span>
              <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-[#167c70] transition-colors">
                <span className="hidden sm:inline">Hover to flip</span>
                <span className="sm:hidden">Tap to flip</span>
                <RotateCw className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="backface-hidden card-face-back absolute inset-0 flex h-full w-full flex-col justify-between rounded-2xl border border-[#167c70]/50 bg-gradient-to-br from-[#0F2A26] via-[#10302B] to-[#143B35] text-white p-4.5 shadow-xl">
            {/* Top: Title + Number */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <Icon className="h-4 w-4 text-[#7AE582] shrink-0" />
                <h4 className="text-[13px] font-bold text-white truncate leading-tight">
                  {module.title}
                </h4>
              </div>
              <span className="font-mono text-[10px] font-bold text-[#7AE582] bg-[#7AE582]/15 px-1.5 py-0.5 rounded border border-[#7AE582]/30 shrink-0">
                {num}
              </span>
            </div>

            {/* Middle: Capabilities List with clean scroll */}
            <div className="my-auto py-2 space-y-2 overflow-y-auto max-h-[185px] scrollbar-none pr-1">
              {module.capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-1.5 text-[11.5px] leading-snug">
                  <div className="h-3.5 w-3.5 rounded-full bg-[#7AE582]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-2.5 w-2.5 text-[#7AE582] stroke-[3]" />
                  </div>
                  <div className="text-zinc-200">
                    <strong className="text-white font-semibold">{cap.title}:</strong>{" "}
                    <span className="text-zinc-300">{cap.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom: Flip Back Hint */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px] text-zinc-400 shrink-0">
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
    <div className="w-full">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 mb-2.5 text-xs font-semibold text-[#167c70]">
          <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]">
          {heading}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
          {description}
        </p>
        <p className="mt-2 text-xs text-zinc-500 font-medium hidden sm:block">
          Hover over any card to flip and explore detailed capabilities
        </p>
      </div>

      {/* MOBILE & TABLET: Horizontal Swipe Carousel with Pill Jump */}
      <div className="lg:hidden">
        {/* Module Pills Selector */}
        <div
          ref={pillsRef}
          className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {modules.map((m, idx) => {
            const isActive = activeMobileIndex === idx;
            const short = shortLabels[m.id] || m.title;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
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
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{short}</span>
              </button>
            );
          })}
        </div>

        {/* Swipeable Track */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0"
        >
          {modules.map((module, idx) => (
            <div
              key={module.id}
              className="w-[85vw] max-w-[340px] sm:w-[320px] shrink-0 snap-center"
            >
              {renderCard(module, idx)}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
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
            <div className="flex items-center gap-1">
              {modules.map((_, idx) => (
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
              {activeMobileIndex + 1} of {modules.length} • Tap card to view details
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollToCard(activeMobileIndex + 1)}
            disabled={activeMobileIndex === modules.length - 1}
            aria-label="Next feature module"
            className="h-8 w-8 rounded-full border border-[#E4E2DA] bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP: 2x5 Grid (1024px and up) */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {modules.map((module, idx) => renderCard(module, idx))}
      </div>

      {/* Accessible listing for SEO crawlers & screen readers */}
      <div className="sr-only">
        {modules.map((m) => (
          <section key={m.id}>
            <h3>{m.title}</h3>
            <p>{m.description}</p>
            <ul>
              {m.capabilities.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}:</strong> {c.description}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
