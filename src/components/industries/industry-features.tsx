"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import {
  BellRing,
  Boxes,
  Check,
  CheckCircle2,
  FileSpreadsheet,
  LayoutDashboard,
  Printer,
  Receipt,
  ShieldCheck,
  Sparkles,
  Tags,
  Users,
  Utensils,
  UtensilsCrossed,
  AlertCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  MonitorPlay,
} from "lucide-react";
import type { FeatureItem } from "@/content/pages/industriesData";

function getFeatureIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("dashboard") || t.includes("pos") || t.includes("billing")) return LayoutDashboard;
  if (t.includes("sales") || t.includes("order") || t.includes("history") || t.includes("bill") || t.includes("receipt")) return Receipt;
  if (t.includes("customer")) return Users;
  if (t.includes("product") || t.includes("category") || t.includes("variant") || t.includes("menu")) return Tags;
  if (t.includes("inventory") || t.includes("stock") || t.includes("ingredient")) return Boxes;
  if (t.includes("alert") || t.includes("low-stock")) return BellRing;
  if (t.includes("import") || t.includes("export") || t.includes("file")) return FileSpreadsheet;
  if (t.includes("hardware") || t.includes("printer") || t.includes("scanner")) return Printer;
  if (t.includes("staff") || t.includes("permission") || t.includes("access") || t.includes("user") || t.includes("role")) return ShieldCheck;
  if (t.includes("ticket") || t.includes("kitchen")) return UtensilsCrossed;
  if (t.includes("table")) return Utensils;
  return Sparkles;
}

function getFeatureTag(title: string) {
  const t = title.toLowerCase();
  if (t.includes("dashboard") || t.includes("billing")) return "COUNTER POS";
  if (t.includes("sales") || t.includes("history")) return "AUDIT TRAIL";
  if (t.includes("customer")) return "CRM & RECORDS";
  if (t.includes("product")) return "CATALOGUE";
  if (t.includes("category")) return "CATEGORIES";
  if (t.includes("inventory")) return "STOCK CONTROL";
  if (t.includes("alert")) return "STOCK ALERTS";
  if (t.includes("import")) return "CSV / EXCEL";
  if (t.includes("hardware")) return "HARDWARE SETUP";
  if (t.includes("staff") || t.includes("role")) return "ACCESS CONTROL";
  return "FEATURE";
}

function getCategoryGroup(badge?: string, title?: string): string {
  const b = (badge || "").toLowerCase();
  const t = (title || "").toLowerCase();
  if (
    b.includes("billing") ||
    b.includes("audit") ||
    b.includes("returns") ||
    b.includes("customer") ||
    t.includes("pos") ||
    t.includes("billing") ||
    t.includes("receipt") ||
    t.includes("customer")
  ) {
    return "Billing & Checkout";
  }
  if (
    b.includes("catalogue") ||
    b.includes("categor") ||
    b.includes("stock") ||
    b.includes("alert") ||
    t.includes("product") ||
    t.includes("category") ||
    t.includes("inventory") ||
    t.includes("stock")
  ) {
    return "Inventory & Stock";
  }
  return "Operations & Setup";
}

interface IndustryFeaturesProps {
  heading: string;
  introTitle?: string;
  description?: string;
  industryName: string;
  items: FeatureItem[];
}

export function IndustryFeatures({
  heading,
  introTitle,
  description,
  industryName,
  items,
}: IndustryFeaturesProps) {
  const hasImages = useMemo(() => items.some((it) => !!it.image), [items]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">(hasImages ? "spotlight" : "grid");

  const pillsScrollRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      set.add(getCategoryGroup(item.badge, item.title));
    });
    return Array.from(set);
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => getCategoryGroup(item.badge, item.title) === activeCategory);
  }, [items, activeCategory]);

  // Current active item for spotlight
  const currentItem = useMemo(() => {
    if (filteredItems.length === 0) return items[0];
    if (selectedFeatureIndex >= filteredItems.length) {
      return filteredItems[0];
    }
    return filteredItems[selectedFeatureIndex];
  }, [filteredItems, items, selectedFeatureIndex]);

  // Switch category and reset active index
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setSelectedFeatureIndex(0);
  };

  const handleNext = () => {
    setSelectedFeatureIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setSelectedFeatureIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextItem = filteredItems[(selectedFeatureIndex + 1) % filteredItems.length];

  // Auto-scroll the active pill into view when selected
  useEffect(() => {
    if (pillsScrollRef.current) {
      const container = pillsScrollRef.current;
      const activeEl = container.children[selectedFeatureIndex] as HTMLElement | undefined;
      if (activeEl) {
        const containerRect = container.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (activeRect.left - containerRect.left) -
          container.clientWidth / 2 +
          activeRect.width / 2;
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [selectedFeatureIndex]);

  const CurrentIcon = currentItem ? getFeatureIcon(currentItem.title) : Sparkles;

  return (
    <div className="w-full">
      {/* Streamlined Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#167c70]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Core Capabilities</span>
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
          {heading}
        </h2>
        {introTitle && (
          <p className="mt-2 text-sm font-semibold text-[#167c70]">
            {introTitle}
          </p>
        )}
        <p className="mt-2 text-xs sm:text-sm text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          From fast counter checkout to stock tracking and shift audits, explore practical tools designed for Pakistani retail shops.
        </p>
      </div>

      {/* Top Filter & View Controls */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#E4E2DA] pb-4">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
              activeCategory === "all"
                ? "bg-[#0F2A26] text-white shadow-xs"
                : "border border-[#E4E2DA] bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Features ({items.length})</span>
          </button>
          {categories.map((cat) => {
            const count = items.filter((it) => getCategoryGroup(it.badge, it.title) === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                  isActive
                    ? "bg-[#0F2A26] text-white shadow-xs"
                    : "border border-[#E4E2DA] bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher */}
        {hasImages && (
          <div className="flex items-center gap-1 rounded-lg border border-[#E4E2DA] bg-zinc-50 p-1">
            <button
              type="button"
              onClick={() => setViewMode("spotlight")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                viewMode === "spotlight"
                  ? "bg-white text-[#0F2A26] shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <MonitorPlay className="h-3.5 w-3.5 text-[#167c70]" />
              <span>Feature Tour</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                viewMode === "grid"
                  ? "bg-white text-[#0F2A26] shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        )}
      </div>

      {/* VIEW 1: HORIZONTAL TABBED SHOWCASE (FULL SCREENSHOT FULLY VISIBLE) */}
      {viewMode === "spotlight" && currentItem && (
        <div className="mt-5">
          {/* Horizontal Feature Tabs Track */}
          <div className="relative">
            <div
              ref={pillsScrollRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none"
            >
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedFeatureIndex;
                const globalIndex = items.findIndex((x) => x.title === item.title) + 1;
                const cleanTitle = item.title.replace(/^\d+\.\s*/, "");
                const Icon = getFeatureIcon(item.title);

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedFeatureIndex(idx)}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#167c70] text-white shadow-sm ring-2 ring-[#167c70]/20"
                        : "border border-[#E4E2DA] bg-white text-zinc-700 hover:border-[#167c70]/40 hover:bg-zinc-50"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-mono ${
                        isSelected ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {String(globalIndex).padStart(2, "0")}
                    </span>
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="whitespace-nowrap">{cleanTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side-by-Side Presentation Stage */}
          <div className="mt-4 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-7 lg:p-8 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Feature Content & Capabilities */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Top Badge & Counter */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70] uppercase tracking-wider">
                      <CurrentIcon className="h-3.5 w-3.5 text-[#167c70]" />
                      <span>{currentItem.badge ?? getFeatureTag(currentItem.title)}</span>
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">
                      Feature {selectedFeatureIndex + 1} of {filteredItems.length}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2A26] leading-snug">
                    {currentItem.title}
                  </h3>
                  {currentItem.subtitle ? (
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#167c70]">
                      {currentItem.subtitle}
                    </p>
                  ) : null}

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600">
                    {currentItem.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  {currentItem.bullets && currentItem.bullets.length > 0 ? (
                    <div className="mt-4 pt-3.5 border-t border-[#E4E2DA]">
                      <p className="text-[11px] font-bold text-zinc-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70]" />
                        <span>Key Capabilities:</span>
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                        {currentItem.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 text-xs text-zinc-700 leading-snug"
                          >
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#167c70] mt-0.5 font-bold" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Optional Note */}
                  {currentItem.note ? (
                    <div className="mt-3 rounded-lg bg-amber-50/80 border border-amber-200/70 p-2.5 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>{currentItem.note}</span>
                    </div>
                  ) : null}

                  {/* How It Helps Box */}
                  {currentItem.howItHelps ? (
                    <div className="mt-3.5 rounded-xl border border-[#167c70]/20 bg-[#167c70]/[0.05] p-3 text-xs leading-relaxed text-zinc-700">
                      <span className="font-bold text-[#0F2A26]">How it helps: </span>
                      <span>{currentItem.howItHelps}</span>
                    </div>
                  ) : null}
                </div>

                {/* Stepper Navigation */}
                <div className="mt-5 pt-4 border-t border-[#E4E2DA] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {filteredItems.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedFeatureIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === selectedFeatureIndex ? "w-6 bg-[#167c70]" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                        }`}
                        aria-label={`Go to feature ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#167c70] hover:text-[#0F2A26] transition"
                  >
                    <span>Next ({nextItem.title.replace(/^\d+\.\s*/, "").split(" ")[0]})</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Full Software Screenshot Display (100% Uncropped & Direct) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full rounded-xl border border-zinc-200 bg-white shadow-md overflow-hidden">
                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100/80 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                      <span className="ml-2 font-mono text-[10px] text-zinc-400 hidden sm:inline">
                        app.hulmpos.com
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live System
                      </span>
                    </div>
                  </div>

                  {/* Full Image Display - Exact Native 2048x990 Aspect Ratio, Completely Uncropped */}
                  {currentItem.image ? (
                    <div className="relative aspect-[2048/990] w-full bg-white overflow-hidden">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.imageAlt || currentItem.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-contain object-top"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="aspect-[2048/990] w-full flex items-center justify-center bg-zinc-50 text-zinc-400 text-xs">
                      Screenshot preview
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: COMPACT 3-COLUMN CARD GRID */}
      {viewMode === "grid" && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((feature, index) => {
            const Icon = getFeatureIcon(feature.title);
            const tag = getFeatureTag(feature.title);
            const globalIndex = items.findIndex((x) => x.title === feature.title) + 1;

            return (
              <article
                key={feature.title}
                className="lift group relative flex flex-col justify-between rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-xs transition hover:border-[#167c70]/40 hover:shadow-sm"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70] group-hover:bg-[#167c70] group-hover:text-white transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#167c70] bg-[#167c70]/8 px-2 py-0.5 rounded-full border border-[#167c70]/15">
                      #{String(globalIndex).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  {feature.subtitle ? (
                    <p className="mt-1 text-xs text-[#167c70] font-medium leading-snug">
                      {feature.subtitle}
                    </p>
                  ) : null}

                  {/* Full Image in Grid */}
                  {feature.image ? (
                    <div className="mt-3 relative aspect-[2048/990] w-full overflow-hidden rounded-lg border border-[#E4E2DA] bg-[#FAF9F5] shadow-xs">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt || feature.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain object-top"
                      />
                    </div>
                  ) : null}

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Compact Checklist */}
                  {feature.bullets && feature.bullets.length > 0 ? (
                    <div className="mt-3 pt-2.5 border-t border-zinc-100">
                      <ul className="space-y-1">
                        {feature.bullets.slice(0, 3).map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-zinc-700 leading-tight"
                          >
                            <Check className="h-3 w-3 shrink-0 text-[#167c70] mt-0.5 font-bold" />
                            <span className="truncate">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {feature.bullets.length > 3 && (
                        <p className="mt-1 text-[10px] text-zinc-400 font-semibold">
                          +{feature.bullets.length - 3} more capabilities
                        </p>
                      )}
                    </div>
                  ) : null}
                </div>

                {/* How It Helps */}
                {feature.howItHelps ? (
                  <div className="mt-3 rounded-lg border border-[#167c70]/15 bg-[#167c70]/[0.03] p-2.5 text-[11px] leading-relaxed text-zinc-700">
                    <span className="font-bold text-[#0F2A26]">Benefit: </span>
                    <span>{feature.howItHelps}</span>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
