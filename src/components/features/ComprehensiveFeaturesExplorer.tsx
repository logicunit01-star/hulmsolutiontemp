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
  "smart-pos-dashboard": "POS",
  "sales-history": "Sales",
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
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

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
          pillRect.width / 2;
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [activeMobileIndex]);

  const renderCard = (module: ModuleItem, idx: number, isDesktop = false) => {
    const Icon = moduleIcons[module.id] || LayoutDashboard;
    const num = String(idx + 1).padStart(2, "0");

    return (
      <article
        key={module.id}
        className={`group lift flex flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-7 shadow-xs hover:border-[#167c70]/40 hover:shadow-md transition-all duration-300 h-full w-full ${
          isDesktop && idx === 9 ? "lg:col-start-2" : ""
        }`}
      >
        <div>
          {/* Top: Signature Icon + Module Number */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F6F2] text-[#167c70] transition-colors duration-300 group-hover:bg-[#167c70] group-hover:text-white">
              <Icon className="h-6 w-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-[#167c70] bg-[#167c70]/8 px-2.5 py-0.5 rounded-full border border-[#167c70]/15">
              {num}
            </span>
          </div>

          {/* Module Title & Overview Description */}
          <h3 className="mt-4 text-lg font-bold text-[#0F2A26] leading-snug group-hover:text-[#167c70] transition-colors duration-300">
            {module.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {module.description}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-[#E4E2DA]/70" />

          {/* All Capabilities Displayed Directly on Front */}
          <ul className="space-y-1.5">
            {module.capabilities.map((cap) => (
              <li
                key={cap.title}
                className="group/item flex items-start gap-2.5 rounded-lg px-2 py-1 -mx-2 text-xs leading-snug transition-colors duration-150 hover:bg-[#F7F6F2]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#167c70]/12 text-[#167c70] transition-colors duration-200 group-hover/item:bg-[#167c70] group-hover/item:text-white">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </span>
                <span className="text-zinc-700">
                  <strong className="font-bold text-[#0F2A26] transition-colors group-hover/item:text-[#167c70]">
                    {cap.title}:
                  </strong>{" "}
                  <span className="text-zinc-600 font-normal">{cap.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 mb-3 text-xs font-semibold text-[#167c70]">
          <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl text-balance">
          {heading}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* MOBILE & TABLET SLIDER (< 1024px) */}
      <div className="lg:hidden">
        {/* Module Quick-Jump Pills */}
        <div
          ref={pillsRef}
          className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {modules.map((module, idx) => {
            const isActive = activeMobileIndex === idx;
            const num = String(idx + 1).padStart(2, "0");
            const label = shortLabels[module.id] || module.title.split(" ")[0];
            return (
              <button
                key={module.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#167c70] text-white shadow-xs"
                    : "bg-white text-zinc-600 border border-[#E4E2DA] hover:border-[#167c70]/40"
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-[#7AE582]" : "text-[#167c70]"
                  }`}
                >
                  {num}
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Swipeable Track with Snap */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0"
        >
          {modules.map((module, idx) => (
            <div
              key={module.id}
              className="w-[86vw] max-w-[340px] sm:w-[340px] shrink-0 snap-center flex"
            >
              {renderCard(module, idx, false)}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="mt-2 flex items-center justify-between px-1">
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
              {modules.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to module ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileIndex === idx
                      ? "w-5 bg-[#167c70]"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-zinc-500">
              {activeMobileIndex + 1} of {modules.length} • Swipe to explore
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

      {/* DESKTOP 3-3-3-1 GRID (>= 1024px) */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {modules.map((module, idx) => renderCard(module, idx, true))}
      </div>
    </div>
  );
}
