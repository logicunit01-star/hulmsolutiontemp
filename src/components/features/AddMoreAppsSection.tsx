import React from "react";
import Link from "next/link";
import {
  Warehouse,
  ClipboardCheck,
  Receipt,
  Users,
  Building2,
  BarChart3,
  Smartphone,
  Truck,
  Layers3,
  Globe,
  Zap,
  Printer,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppItem {
  name: string;
  href: string;
  tagline: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const apps: AppItem[] = [
  {
    name: "Inventory Management",
    href: "/inventory-management/",
    tagline: "Real-time stock tracking & reorders",
    badge: "Stock",
    icon: Warehouse,
  },
  {
    name: "Purchase Orders",
    href: "/purchase-orders/",
    tagline: "Supplier POs & purchase tracking",
    badge: "PO",
    icon: ClipboardCheck,
  },
  {
    name: "Order Management",
    href: "/order-management/",
    tagline: "Order fulfillment & delivery status",
    badge: "Orders",
    icon: Receipt,
  },
  {
    name: "Customer CRM",
    href: "/customer-management/",
    tagline: "Customer directory & purchase logs",
    badge: "CRM",
    icon: Users,
  },
  {
    name: "Vendor Management",
    href: "/vendors-management/",
    tagline: "Supplier logs & vendor ledgers",
    badge: "Vendors",
    icon: Building2,
  },
  {
    name: "Reporting Module",
    href: "/reporting-module/",
    tagline: "Live sales analytics & shift reports",
    badge: "Reports",
    icon: BarChart3,
  },
  {
    name: "Mobile POS",
    href: "/mobile-pos/",
    tagline: "Phone & tablet checkout registers",
    badge: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Logistics Management",
    href: "/logistics-management-software/",
    tagline: "Dispatch & fleet delivery tracking",
    badge: "Logistics",
    icon: Truck,
  },
  {
    name: "Cattle Management",
    href: "/cattle-management-software/",
    tagline: "Livestock health & breeding logs",
    badge: "Cattle",
    icon: Layers3,
  },
  {
    name: "Ecommerce Store",
    href: "/website/",
    tagline: "Branded online store synced with POS",
    badge: "Online",
    icon: Globe,
  },
  {
    name: "Integrations",
    href: "/integration/",
    tagline: "Payment gateways & custom APIs",
    badge: "Connect",
    icon: Zap,
  },
  {
    name: "POS Hardware",
    href: "/pos-hardware/",
    tagline: "Receipt printers, scanners & drawers",
    badge: "Hardware",
    icon: Printer,
  },
];

interface AddMoreAppsSectionProps {
  heading: string;
  description: string;
  pricingLabel: string;
  pricingHref: string;
}

export function AddMoreAppsSection({
  heading,
  description,
  pricingLabel,
  pricingHref,
}: AddMoreAppsSectionProps) {
  return (
    <div className="w-full">
      {/* Compact Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-2.5 py-0.5 mb-2 text-[11px] font-semibold text-[#167c70]">
          <Sparkles className="h-3 w-3 text-[#25A18E]" />
          <span>App Ecosystem</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F2A26] text-balance">
          {heading}
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* 12-App Modern Compact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3 mt-6 sm:mt-8">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <Link
              key={app.name}
              href={app.href}
              className="group flex items-center justify-between gap-2.5 rounded-xl border border-[#E4E2DA] bg-white px-3.5 py-2.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#167c70]/40 hover:bg-[#FAF9F5] hover:shadow-xs"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] transition-colors duration-200 group-hover:bg-[#167c70] group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-bold text-[#0F2A26] truncate transition-colors group-hover:text-[#167c70]">
                    {app.name}
                  </div>
                  <p className="text-[11px] text-zinc-500 truncate leading-tight mt-0.5">
                    {app.tagline}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-zinc-400 transition-all duration-200 group-hover:text-[#167c70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          );
        })}
      </div>

      {/* Compact Pricing Bar */}
      <div className="mt-6 sm:mt-7 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-6 rounded-xl border border-[#E4E2DA] bg-[#FAF9F5] px-4 py-2 sm:px-5 sm:py-2 shadow-2xs max-w-2xl mx-auto w-full">
          <p className="text-xs text-zinc-600 text-center sm:text-left">
            All apps run on the same cloud POS. Plans start from{" "}
            <strong className="text-[#167c70] font-semibold">PKR 2,500/month</strong>.
          </p>
          <Button
            asChild
            size="sm"
            className="h-7 bg-[#167c70] hover:bg-[#125f57] text-white shrink-0 shadow-2xs cursor-pointer text-xs font-semibold px-3"
          >
            <Link
              href={pricingHref}
              className="inline-flex items-center gap-1.5"
            >
              <span>{pricingLabel}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
