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
  Sparkles,
  ChevronLeft,
  ChevronRight,
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
}

const jobGroups: JobGroup[] = [
  {
    number: "01",
    job: "Sell",
    shortLabel: "Sell",
    badge: "Counter Checkout",
    tagline: "Rapid cashier billing, barcoding & shift cash controls",
    icon: Receipt,
    features: [
      "POS billing",
      "Held sales",
      "Barcode scanning",
      "Returns",
      "Keyboard shortcuts",
      "Shifts and cash",
    ],
    footerHighlight: "6 counter tools",
  },
  {
    number: "02",
    job: "Restaurant operations",
    shortLabel: "Restaurant",
    badge: "Floor & Kitchen",
    tagline: "Dine-in tables, kitchen board & recipe management",
    icon: UtensilsCrossed,
    features: [
      "Tables",
      "Kitchen board",
      "Menu management",
      "Recipes",
      "Setup wizard",
    ],
    footerHighlight: "5 F&B modules",
  },
  {
    number: "03",
    job: "Stock control",
    shortLabel: "Stock",
    badge: "Inventory & Units",
    tagline: "Multi-pack stock, reorder alerts & wastage audits",
    icon: Boxes,
    features: [
      "Inventory",
      "Stock overview",
      "Reorder alerts",
      "Stock counts",
      "Wastage log",
      "Units of measure",
      "Packs",
    ],
    footerHighlight: "7 stock controls",
  },
  {
    number: "04",
    job: "Buy",
    shortLabel: "Purchasing",
    badge: "Procurement",
    tagline: "Purchase orders, vendor GRN & price variance control",
    icon: ShoppingBag,
    features: [
      "Purchase orders",
      "Goods received (GRN)",
      "Goods return note",
      "Price variance",
      "Suppliers and vendor payments",
    ],
    footerHighlight: "5 procurement tools",
  },
  {
    number: "05",
    job: "Credit and collections",
    shortLabel: "Credit",
    badge: "Ledgers & Khata",
    tagline: "Customer & vendor balance tracking with recovery",
    icon: WalletCards,
    features: [
      "Customer ledger",
      "Payment recovery",
      "Vendor ledger",
      "Price lists",
    ],
    footerHighlight: "4 ledger tools",
  },
  {
    number: "06",
    job: "Team",
    shortLabel: "Staff & Roles",
    badge: "User Permissions",
    tagline: "Granular staff roles, access limits & salesman tracking",
    icon: Users,
    features: [
      "Staff",
      "User roles",
      "Salesman performance",
    ],
    footerHighlight: "3 team controls",
  },
  {
    number: "07",
    job: "Reports",
    shortLabel: "Reports",
    badge: "Intelligence",
    tagline: "Real-time P&L, stock turnover & cash flow audits",
    icon: BarChart3,
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
    footerHighlight: "9 analytics views",
  },
  {
    number: "08",
    job: "Compliance and setup",
    shortLabel: "Compliance",
    badge: "FBR & Setup",
    tagline: "FBR fiscal QR invoice, print servers & Excel migration",
    icon: ShieldCheck,
    features: [
      "FBR-integrated invoice with QR code",
      "Printer server settings",
      "Excel import/export",
    ],
    footerHighlight: "3 setup tools",
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
      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,42,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#167c70]/50 hover:shadow-[0_16px_36px_-12px_rgba(22,124,112,0.12)]">
        {/* Top Accent Gradient Bar on Hover */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#167c70] via-[#25A18E] to-[#7AE582] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div>
          {/* Card Header */}
          <div className="flex items-start justify-between gap-2 mb-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#167c70]/10 to-[#7AE582]/15 text-[#167c70] transition-transform duration-300 group-hover:scale-105">
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

          {/* Tagline / Subtitle */}
          <p className="text-xs leading-relaxed text-zinc-500 mb-4 pb-3 border-b border-zinc-100">
            {group.tagline}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {group.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700 leading-snug"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#167c70]/10 text-[#167c70]">
                  <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span className="font-medium text-zinc-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Bottom Meta Bar (Anchors card height evenly) */}
        <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between text-[11px]">
          <span className="font-medium text-zinc-500">{group.footerHighlight}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#167c70]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25A18E]" />
            Included
          </span>
        </div>
      </div>
    );
  };

  return (
    <Section
      data-reveal
      className="relative overflow-hidden border-t border-zinc-200/70 bg-[#FAF9F5] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 mb-3 text-xs font-semibold text-[#167c70]">
            <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
            <span>Complete Capability Matrix</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]">
            What&apos;s inside Hulm POS
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
            A plain, connected breakdown of every operational tool built into Hulm POS &mdash; grouped by job and ready from day one.
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
              className="w-[85vw] max-w-[340px] sm:w-[320px] lg:w-auto lg:max-w-none shrink-0 lg:shrink snap-center flex flex-col"
            >
              {renderCard(group)}
            </div>
          ))}
        </div>

        {/* MOBILE & TABLET: Bottom Navigation Controls */}
        <div className="lg:hidden mt-3 flex items-center justify-between px-1">
          <button
            type="button"
            onClick={() => scrollToCard(activeMobileIndex - 1)}
            disabled={activeMobileIndex === 0}
            aria-label="Previous feature group"
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
                  aria-label={`Go to feature group ${idx + 1}`}
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
            aria-label="Next feature group"
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
