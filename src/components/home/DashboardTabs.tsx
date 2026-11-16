"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Pill, Utensils, Check, ArrowRight } from "lucide-react";
import { ImageZoom } from "@/components/ui/image-zoom";

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryTab {
  id: "retail" | "pharmacy" | "restaurant";
  name: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  badge?: string;
  tagline?: string;
  sentence: string;
  bullets: readonly string[];
  description?: string;
  href?: string;
  linkLabel?: string;
  features?: string[];
  featureItems?: IndustryFeature[];
}

const DEFAULT_TABS: readonly IndustryTab[] = [
  {
    id: "retail",
    name: "Retail",
    image: "/images/home/dashboard/retail-pos-overview.webp",
    width: 1024,
    height: 647,
    alt: "Hulm Retail POS software dashboard diagram with annotated callouts for cashier checkout, catalog, cart, and administration",
    badge: "Retail Edition",
    tagline: "High-Speed Cashier Terminal & Multi-Store Control",
    sentence: "Barcode checkout, customer ledger, purchase orders, price lists, packs and units, and 12 reports.",
    bullets: [
      "Barcode checkout",
      "Customer ledger",
      "Purchase orders",
      "Price lists",
      "Packs and units",
      "12 reports",
    ],
    href: "/industries/retail-store/",
    linkLabel: "Explore Retail POS Software",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    image: "/images/home/dashboard/pharmacy-pos-overview.webp",
    width: 1024,
    height: 650,
    alt: "Hulm Pharmacy POS software dashboard diagram with annotated callouts for medicine billing, catalog, cart, and instructions",
    badge: "Pharmacy Edition",
    tagline: "Medical Dispensing, Expiry Validation & Doctor Tracking",
    sentence: "Counter billing, packs and units, distributor ledgers, goods received and return notes, stock reports.",
    bullets: [
      "Counter billing",
      "Packs and units",
      "Distributor ledgers",
      "Goods received and return notes",
      "Stock reports",
    ],
    href: "/industries/pharmacy-store/",
    linkLabel: "Explore Pharmacy POS Software",
  },
  {
    id: "restaurant",
    name: "Restaurant",
    image: "/images/home/dashboard/restaurant-pos-overview-diagram.webp",
    width: 1024,
    height: 639,
    alt: "Hulm Restaurant POS software dashboard diagram with annotated callouts for table orders, menu categories, cart, and checkout",
    badge: "Restaurant Edition",
    tagline: "Dining Floor Management, KOT Routing & Fast Modifiers",
    sentence: "Tables, kitchen board, menu management, recipes, wastage log, stock counts and shift cash.",
    bullets: [
      "Tables",
      "Kitchen board",
      "Menu management",
      "Recipes",
      "Wastage log",
      "Stock counts and shift cash",
    ],
    href: "/industries/restaurant-pos/",
    linkLabel: "Explore Restaurant POS Software",
  },
];

interface DashboardTabsProps {
  tabs?: readonly IndustryTab[];
}

export function DashboardTabs({ tabs = DEFAULT_TABS }: DashboardTabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (tabs.some((t) => t.id === hash)) return hash;
    }
    return "retail";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (tabs.some((t) => t.id === hash)) {
        setActiveTabId(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [tabs]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = tabs[nextIndex];
      setActiveTabId(nextTab.id);
      const tabEl = document.getElementById(`tab-${nextTab.id}`);
      tabEl?.focus();
    }
  };

  const getTabIcon = (id: string) => {
    switch (id) {
      case "pharmacy":
        return Pill;
      case "restaurant":
        return Utensils;
      case "retail":
      default:
        return ShoppingBag;
    }
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto focus:outline-none">
      {/* Tab Switcher Pills */}
      <div className="relative z-20 flex justify-center mb-6 sm:mb-8">
        <div
          role="tablist"
          aria-label="POS Industry Editions"
          className="inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#F7F6F2] border border-[#E4E2DA]"
        >
          {tabs.map((tab, idx) => {
            const isActive = tab.id === activeTabId;
            const Icon = getTabIcon(tab.id);
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTabId(tab.id)}
                onPointerDown={(e) => {
                  if (e.pointerType === "touch") {
                    setActiveTabId(tab.id);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="button"
                style={{ WebkitTapHighlightColor: "transparent" }}
                className={`relative z-20 flex items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer touch-manipulation select-none ${
                  isActive
                    ? "bg-[#167c70] text-white shadow-sm scale-[1.02]"
                    : "text-[#0F2A26] md:hover:text-[#167c70] md:hover:bg-white/80 active:bg-zinc-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 pointer-events-none ${isActive ? "text-white" : "text-[#167c70]"}`} />
                <span className="pointer-events-none">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels: All tabs are rendered in HTML for SEO crawlability */}
      <div className="w-full">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const sentence = tab.sentence || tab.description || "";
          const bullets = tab.bullets || tab.features || [];

          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`w-full ${isActive ? "block" : "hidden"}`}
            >
              <div className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-transparent">
                <ImageZoom
                  src={tab.image}
                  alt={tab.alt}
                  width={tab.width}
                  height={tab.height}
                  zoomScale={2.4}
                  priority={tab.id === "retail"}
                  loading={tab.id === "retail" ? "eager" : "lazy"}
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 64px), 960px"
                  className="[image-rendering:-webkit-optimize-contrast]"
                  containerClassName="w-full"
                  showHint={true}
                  allowFullscreen={true}
                />

                {/* Real text under tab screenshot: short sentence plus bullet list */}
                <div className="w-full mt-6 sm:mt-8 rounded-2xl border border-zinc-200/80 bg-[#FAF9F5] p-5 sm:p-7 md:p-8">
                  {/* Header & Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/80 pb-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-[#167c70]/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-[#167c70]">
                        {tab.badge || `${tab.name} Edition`}
                      </span>
                      {tab.tagline && (
                        <span className="hidden sm:inline-block text-xs font-medium text-zinc-500">
                          &bull; {tab.tagline}
                        </span>
                      )}
                    </div>
                    {tab.href && (
                      <Link
                        href={tab.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#167c70] hover:text-[#0F2A26] transition-colors shrink-0 group"
                      >
                        <span>{tab.linkLabel || `Explore ${tab.name} POS`}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>

                  {/* Short sentence */}
                  {sentence && (
                    <p className="mt-4 text-sm sm:text-base font-medium text-zinc-800 leading-relaxed">
                      {sentence}
                    </p>
                  )}

                  {/* Bullet list */}
                  {bullets.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-200/60">
                      <ul className="columns-2 gap-2 sm:columns-auto sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3">
                        {bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="break-inside-avoid mb-2 sm:mb-0 flex items-center gap-2 sm:gap-2.5 rounded-xl border border-zinc-200/70 bg-white px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm text-zinc-800 shadow-2xs"
                          >
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#167c70]">
                              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                            </div>
                            <span className="font-medium leading-snug break-words">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
