"use client";

import React, { useState, useRef } from "react";
import {
  Receipt,
  UtensilsCrossed,
  Boxes,
  ShoppingBag,
  WalletCards,
  Users,
  BarChart3,
  ShieldCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface JobGroup {
  number: string;
  job: string;
  shortLabel: string;
  badge: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  footerHighlight: string;
  footerStatus: string;
  microUi: {
    leftLabel: string;
    rightLabel: string;
    isPulse?: boolean;
  };
}

const jobGroups: JobGroup[] = [
  {
    number: "01",
    job: "Sell",
    shortLabel: "Sell",
    badge: "Counter Checkout",
    tagline: "High-speed barcode checkout, held tickets & shift cash drawer reconciliation.",
    icon: Receipt,
    microUi: {
      leftLabel: "Terminal 01 · Register A",
      rightLabel: "PKR 2,450 · Paid",
      isPulse: true,
    },
    features: [
      "POS billing",
      "Held sales",
      "Barcode scanning",
      "Returns",
      "Keyboard shortcuts",
      "Shifts and cash",
    ],
    footerHighlight: "6 counter tools",
    footerStatus: "Live in Starter",
  },
  {
    number: "02",
    job: "Restaurant operations",
    shortLabel: "Restaurant",
    badge: "F&B Floor & Kitchen",
    tagline: "Dine-in floor plan, live kitchen display board & recipe cost tracking.",
    icon: UtensilsCrossed,
    microUi: {
      leftLabel: "Table 04 · 4 Guests",
      rightLabel: "KDS: Cooking",
      isPulse: false,
    },
    features: [
      "Tables",
      "Kitchen board",
      "Menu management",
      "Recipes",
      "Setup wizard",
    ],
    footerHighlight: "5 F&B modules",
    footerStatus: "F&B Ready",
  },
  {
    number: "03",
    job: "Stock control",
    shortLabel: "Stock",
    badge: "Inventory & Warehouse",
    tagline: "Real-time stock tracking, multi-pack units, reorder alerts & wastage audits.",
    icon: Boxes,
    microUi: {
      leftLabel: "SKU-8921 · Warehouse A",
      rightLabel: "142 in stock · OK",
      isPulse: false,
    },
    features: [
      "Inventory",
      "Stock overview",
      "Reorder alerts",
      "Stock counts",
      "Wastage log",
      "Units of measure",
      "Packs",
    ],
    footerHighlight: "7 inventory tools",
    footerStatus: "Multi-Location",
  },
  {
    number: "04",
    job: "Buy",
    shortLabel: "Purchasing",
    badge: "Procurement & GRN",
    tagline: "Supplier purchase orders, goods received verification & vendor cost control.",
    icon: ShoppingBag,
    microUi: {
      leftLabel: "PO #1042 → Al-Rehman",
      rightLabel: "GRN Verified",
      isPulse: false,
    },
    features: [
      "Purchase orders",
      "Goods received (GRN)",
      "Goods return note",
      "Price variance",
      "Suppliers and vendor payments",
    ],
    footerHighlight: "5 purchasing tools",
    footerStatus: "Vendor Ready",
  },
  {
    number: "05",
    job: "Credit and collections",
    shortLabel: "Credit",
    badge: "Ledgers & Khata",
    tagline: "Track customer & vendor balances with partial recovery & custom price lists.",
    icon: WalletCards,
    microUi: {
      leftLabel: "Customer: Tariq Traders",
      rightLabel: "PKR 0 Due · Cleared",
      isPulse: false,
    },
    features: [
      "Customer ledger",
      "Payment recovery",
      "Vendor ledger",
      "Price lists",
    ],
    footerHighlight: "4 ledger tools",
    footerStatus: "Khata Ready",
  },
  {
    number: "06",
    job: "Team",
    shortLabel: "Staff & Roles",
    badge: "Roles & Permissions",
    tagline: "Granular access levels, secure PIN access & commission tracking per salesman.",
    icon: Users,
    microUi: {
      leftLabel: "Cashier Shift #1 Active",
      rightLabel: "Role: Salesman",
      isPulse: true,
    },
    features: [
      "Staff",
      "User roles",
      "Salesman performance",
    ],
    footerHighlight: "3 team controls",
    footerStatus: "Multi-User",
  },
  {
    number: "07",
    job: "Reports",
    shortLabel: "Reports",
    badge: "Business Intelligence",
    tagline: "Live P&L analytics, customer sales summaries & multi-channel cash audits.",
    icon: BarChart3,
    microUi: {
      leftLabel: "Today's Sales vs Purchase",
      rightLabel: "+32.4% Margin",
      isPulse: false,
    },
    features: [
      "Daily and monthly summary",
      "Product profit",
      "Sales vs purchase",
      "Cash in vs cash out",
      "Cash/online/cheque",
      "Stock reports",
      "Sales by customer",
      "Returns",
      "Purchase orders and payments",
    ],
    footerHighlight: "9 analytics reports",
    footerStatus: "Real-Time Data",
  },
  {
    number: "08",
    job: "Compliance and setup",
    shortLabel: "Compliance",
    badge: "FBR & Hardware Setup",
    tagline: "Digital FBR QR invoices, thermal print servers & one-click Excel data migration.",
    icon: ShieldCheck,
    microUi: {
      leftLabel: "FBR Fiscal POS #92014",
      rightLabel: "QR Code Active",
      isPulse: true,
    },
    features: [
      "FBR-integrated invoice with QR code",
      "Printer server settings",
      "Excel import/export",
    ],
    footerHighlight: "3 compliance tools",
    footerStatus: "FBR-integrated invoicing",
  },
];

export function PosFeaturesSection() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (index < 0 || index >= jobGroups.length) return;
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
          (container.clientWidth / 2) +
          (cardEl.clientWidth / 2);
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
      if (pillsRef.current) {
        const activePill = pillsRef.current.children[closestIndex] as HTMLElement | undefined;
        if (activePill) {
          activePill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    }
  };

  const renderCard = (group: JobGroup) => {
    const Icon = group.icon;
    return (
      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(15,42,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#167c70]/60 hover:shadow-[0_20px_40px_-15px_rgba(22,124,112,0.18)]">
        {/* Top Accent Gradient Bar on Hover */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#167c70] via-[#25A18E] to-[#7AE582] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="flex flex-col">
          {/* Micro-UI Software Snippet */}
          <div className="mb-4 flex items-center justify-between rounded-xl bg-[#0F2A26] px-3 py-2 text-white shadow-inner">
            <div className="flex items-center gap-1.5 min-w-0">
              {group.microUi.isPulse ? (
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AE582] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7AE582]" />
                </span>
              ) : (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7AE582]" />
              )}
              <span className="truncate font-mono text-[11px] text-zinc-300">
                {group.microUi.leftLabel}
              </span>
            </div>
            <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#7AE582]">
              {group.microUi.rightLabel}
            </span>
          </div>

          {/* Card Header: Icon + Title + Number Badge */}
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#167c70]/10 to-[#7AE582]/15 text-[#167c70] transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#167c70]">
                  {group.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0F2A26] leading-tight">
                  {group.job}
                </h3>
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs font-semibold text-zinc-400 bg-zinc-100/90 px-2 py-0.5 rounded-md">
              {group.number}
            </span>
          </div>

          {/* Operational Tagline */}
          <p className="text-xs leading-relaxed text-zinc-500 mb-4">
            {group.tagline}
          </p>

          {/* Features Displayed as Modern Capability Chips */}
          <div className="flex flex-wrap gap-1.5">
            {group.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-zinc-300 hover:border-[#167c70]/40 hover:bg-[#167c70]/5 hover:text-[#0F2A26]"
              >
                <Check className="h-3 w-3 shrink-0 text-[#167c70]" aria-hidden="true" />
                <span>{feature}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Card Bottom Meta Bar (Anchors card height evenly) */}
        <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-zinc-500">{group.footerHighlight}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#167c70]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25A18E]" />
            {group.footerStatus}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Section
      data-reveal
      className="relative overflow-hidden border-t border-zinc-200/70 bg-[#FAF9F5] py-14 sm:py-18 lg:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-4 py-1.5 mb-4 text-xs font-semibold text-[#167c70]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AE582] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#167c70]" />
            </span>
            <span>MODULAR POINT OF SALE ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[38px] lg:leading-[1.2]">
            What&apos;s inside Hulm POS
          </h2>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
            8 purpose-built operational modules, connected into one database and ready from day one with zero complex setup.
          </p>
        </div>

        {/* MOBILE & TABLET: Interactive Jump Pills */}
        <div className="lg:hidden mb-4">
          <div
            ref={pillsRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {jobGroups.map((group, idx) => {
              const isActive = activeMobileIndex === idx;
              return (
                <button
                  key={group.number}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#167c70] text-white shadow-xs"
                      : "bg-white text-zinc-600 border border-zinc-200/90 hover:bg-zinc-50"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[#7AE582]" : "text-[#167c70]"
                    }`}
                  >
                    {group.number}
                  </span>
                  <span>{group.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* UNIFIED Track: Swipeable Carousel on Mobile/Tablet, 4x2 Grid on Desktop */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex lg:grid gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 lg:grid-cols-4 items-stretch"
        >
          {jobGroups.map((group) => (
            <div
              key={group.number}
              className="w-[86vw] max-w-[350px] sm:w-[330px] lg:w-auto lg:max-w-none shrink-0 lg:shrink snap-center flex flex-col"
            >
              {renderCard(group)}
            </div>
          ))}
        </div>

        {/* MOBILE & TABLET: Bottom Navigation Controls */}
        <div className="lg:hidden mt-4 flex items-center justify-between px-1">
          <button
            type="button"
            onClick={() => scrollToCard(activeMobileIndex - 1)}
            disabled={activeMobileIndex === 0}
            aria-label="Previous feature module"
            className="h-9 w-9 rounded-full border border-zinc-200/90 bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex flex-col items-center gap-1.5">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {jobGroups.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to feature module ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileIndex === idx
                      ? "w-6 bg-[#167c70]"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-medium text-zinc-500">
              {activeMobileIndex + 1} of {jobGroups.length} &bull; Swipe to explore
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollToCard(activeMobileIndex + 1)}
            disabled={activeMobileIndex === jobGroups.length - 1}
            aria-label="Next feature module"
            className="h-9 w-9 rounded-full border border-zinc-200/90 bg-white grid place-items-center text-zinc-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-zinc-50 transition-colors shadow-2xs"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </Section>
  );
}

export default PosFeaturesSection;
