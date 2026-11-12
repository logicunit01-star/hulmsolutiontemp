"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Pill, Utensils } from "lucide-react";

export interface IndustryTab {
  id: "retail" | "pharmacy" | "restaurant";
  name: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  badge?: string;
  tagline?: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  features?: string[];
}

const DEFAULT_TABS: readonly IndustryTab[] = [
  {
    id: "retail",
    name: "Retail",
    image: "/images/home/dashboard/retail-pos-overview.png",
    width: 1024,
    height: 647,
    alt: "Hulm Retail POS software dashboard diagram with annotated callouts for cashier checkout, catalog, cart, and administration",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    image: "/images/home/dashboard/pharmacy-pos-overview.webp",
    width: 1920,
    height: 1088,
    alt: "Hulm Pharmacy POS software dashboard for medicine billing, batch tracking, and expiry alerts",
  },
  {
    id: "restaurant",
    name: "Restaurant",
    image: "/images/home/dashboard/restaurant-pos-overview.png",
    width: 1203,
    height: 687,
    alt: "Hulm Restaurant POS software dashboard with active tables, order management, and revenue analytics",
  },
];

interface DashboardTabsProps {
  tabs?: readonly IndustryTab[];
}

export function DashboardTabs({ tabs = DEFAULT_TABS }: DashboardTabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>("retail");

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

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
    <div className="relative w-full max-w-5xl mx-auto focus:outline-none select-none">
      {/* Tab Switcher Pills */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div
          role="tablist"
          aria-label="POS Industry Editions"
          className="inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#F7F6F2] border border-[#E4E2DA]"
        >
          {tabs.map((tab, idx) => {
            const isActive = tab.id === currentTab.id;
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
                onKeyDown={(e) => handleKeyDown(e, idx)}
                type="button"
                className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#167c70] text-white shadow-sm scale-[1.02]"
                    : "text-[#0F2A26] hover:text-[#167c70] hover:bg-white/80"
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? "text-white" : "text-[#167c70]"}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Image Area - shadow-free & bottom card removed */}
      <div
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentTab.id}`}
        className="relative w-full overflow-hidden flex items-center justify-center bg-transparent"
      >
        <Image
          key={currentTab.id}
          src={currentTab.image}
          alt={currentTab.alt}
          width={currentTab.width}
          height={currentTab.height}
          priority={currentTab.id === "retail"}
          loading={currentTab.id === "retail" ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 1024px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
          className="h-auto w-full object-contain select-none [image-rendering:-webkit-optimize-contrast] transition-opacity duration-200"
          draggable={false}
        />
      </div>
    </div>
  );
}
