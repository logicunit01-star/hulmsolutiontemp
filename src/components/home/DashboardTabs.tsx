"use client";

import React, { useState } from "react";
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
  description: string;
  href?: string;
  linkLabel?: string;
  features?: string[];
  featureItems: IndustryFeature[];
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
    description:
      "All-in-one cashier register interface designed for fast-paced retail shops, supermarkets, and boutiques. Scan barcodes in milliseconds, hold and resume carts during rush hours, maintain customer ledgers (khata), and issue FBR-compliant QR receipts.",
    href: "/industries/retail-store/",
    linkLabel: "Explore Retail POS Software",
    featureItems: [
      {
        title: "Instant Barcode & SKU Search",
        description: "Scan barcodes or search items by name and category with instant live price calculation.",
      },
      {
        title: "Multi-Item Cart & Hold Sales",
        description: "Park transactions on hold when a customer steps away, serve the next shopper, and resume instantly.",
      },
      {
        title: "Real-Time Stock Sync Across Branches",
        description: "Every checkout immediately deducts inventory and reflects live stock levels across all your stores.",
      },
      {
        title: "Customer Ledgers & Khata Records",
        description: "Track customer purchase histories, assign loyalty credit, and manage udhaar/receivables seamlessly.",
      },
      {
        title: "Automated FBR Invoicing",
        description: "Generate compliant digital receipts with verifiable FBR invoice numbers and QR codes automatically.",
      },
      {
        title: "Flexible Payment Modes",
        description: "Accept cash, credit/debit cards, bank transfers, or split tender with automated drawer balancing.",
      },
    ],
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
    description:
      "Specialized medical billing system built for pharmacies, medical stores, and dispensaries. Effortlessly dispense medicines by unit, strip, or full pack, track batch numbers with automated expiry warnings, and record prescribing doctors and patient dosage instructions.",
    href: "/industries/pharmacy-store/",
    linkLabel: "Explore Pharmacy POS Software",
    featureItems: [
      {
        title: "Pack, Strip & Unit Fractional Billing",
        description: "Dispense single tablets, blister strips, or complete boxes with automated fractional pricing.",
      },
      {
        title: "Batch Number & Expiry Date Alerts",
        description: "Prevent selling expired medicines with automated visual alerts for batches near expiration.",
      },
      {
        title: "Doctor & Prescription Notes",
        description: "Record prescribing physicians, patient contact details, and dosage instructions directly on the receipt.",
      },
      {
        title: "Generic Formula & Brand Matching",
        description: "Search medications by chemical generic formula or commercial brand to suggest quick alternatives.",
      },
      {
        title: "Distributor Purchase & GRN Tracking",
        description: "Manage supplier purchase orders, incoming distributor deliveries, and payment schedules.",
      },
      {
        title: "Controlled Substance & Drug Auditing",
        description: "Keep an immutable, audit-ready record of scheduled and restricted pharmaceutical sales.",
      },
    ],
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
    description:
      "Fast-paced floor and counter order management interface built for cafes, quick-service counters, and dine-in restaurants. Route orders instantly to the kitchen via KOT, customize orders with menu modifiers, manage live table occupancy, and split checks with zero confusion.",
    href: "/industries/restaurant-pos/",
    linkLabel: "Explore Restaurant POS Software",
    featureItems: [
      {
        title: "Visual Table & Floor Management",
        description: "Track live table occupancy, guest counts, and status (vacant, ordered, billed) across dining sections.",
      },
      {
        title: "Kitchen Order Tickets (KOT)",
        description: "Route orders directly to kitchen thermal printers or KDS screens categorized by cooking station.",
      },
      {
        title: "Menu Modifiers & Special Notes",
        description: "Add size options, crust choices, spice levels, and custom cooking instructions to any item.",
      },
      {
        title: "Dine-in, Takeaway & Delivery Modes",
        description: "Toggle seamlessly between dine-in table orders, counter takeaways, and third-party rider deliveries.",
      },
      {
        title: "Split Billing & Table Merging",
        description: "Split checks equally, by item, or by seat, and transfer or merge tables during busy service hours.",
      },
      {
        title: "Ingredient & Recipe Stock Deduction",
        description: "Automatically deplete raw ingredients and kitchen supplies as menu dishes are ordered.",
      },
    ],
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
    <div className="relative z-10 w-full max-w-5xl mx-auto focus:outline-none">
      {/* Tab Switcher Pills */}
      <div className="relative z-20 flex justify-center mb-6 sm:mb-8">
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

      {/* Main Showcase Image Area with Shopify-style Hover Zoom */}
      <div
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentTab.id}`}
        className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-transparent"
      >
        <ImageZoom
          key={currentTab.id}
          src={currentTab.image}
          alt={currentTab.alt}
          width={currentTab.width}
          height={currentTab.height}
          zoomScale={2.4}
          priority={false}
          loading="lazy"
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 64px), 960px"
          className="[image-rendering:-webkit-optimize-contrast]"
          containerClassName="w-full"
          showHint={true}
          allowFullscreen={true}
        />

        {/* Text Caption & Feature List Under Tab Diagram */}
        <div className="w-full mt-6 sm:mt-8 rounded-2xl border border-zinc-200/80 bg-[#FAF9F5] p-5 sm:p-7 md:p-8">
          {/* Header & Caption */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200/80 pb-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167c70] mb-1.5">
                <span>{currentTab.badge || `${currentTab.name} POS Edition`}</span>
                {currentTab.tagline && (
                  <>
                    <span className="text-zinc-300">&bull;</span>
                    <span className="text-zinc-600 font-medium normal-case tracking-normal">{currentTab.tagline}</span>
                  </>
                )}
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
                {currentTab.description}
              </p>
            </div>
            {currentTab.href && (
              <Link
                href={currentTab.href}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#167c70] hover:text-[#0F2A26] transition-colors shrink-0 group self-start sm:self-center"
              >
                <span>{currentTab.linkLabel || `Explore ${currentTab.name} POS`}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Feature List Grid */}
          <div className="mt-5 sm:mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3.5">
              Key Features Highlighted in {currentTab.name} Dashboard:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {currentTab.featureItems.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-zinc-200/70 bg-white p-3.5 shadow-2xs transition-all hover:border-[#167c70]/30 hover:shadow-xs"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#167c70]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-[13px] font-bold text-[#0F2A26] leading-snug">
                      {feat.title}
                    </h5>
                    <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-zinc-600">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
