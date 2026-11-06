import React from "react";
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
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface JobGroup {
  job: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const jobGroups: JobGroup[] = [
  {
    job: "Sell",
    badge: "Counter Checkout",
    icon: Receipt,
    features: [
      "POS billing",
      "Held sales",
      "Barcode scanning",
      "Returns",
      "Keyboard shortcuts",
      "Shifts and cash",
    ],
  },
  {
    job: "Restaurant operations",
    badge: "F&B Floor & Kitchen",
    icon: UtensilsCrossed,
    features: [
      "Tables",
      "Kitchen board",
      "Menu management",
      "Recipes",
      "Setup wizard",
    ],
  },
  {
    job: "Stock control",
    badge: "Inventory & Warehousing",
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
  },
  {
    job: "Buy",
    badge: "Purchasing & Receiving",
    icon: ShoppingBag,
    features: [
      "Purchase orders",
      "Goods received (GRN)",
      "Goods return note",
      "Price variance",
      "Suppliers and vendor payments",
    ],
  },
  {
    job: "Credit and collections",
    badge: "Ledgers & Receivables",
    icon: WalletCards,
    features: [
      "Customer ledger",
      "Payment recovery",
      "Vendor ledger",
      "Price lists",
    ],
  },
  {
    job: "Team",
    badge: "Staff & Permissions",
    icon: Users,
    features: [
      "Staff",
      "User roles",
      "Salesman performance",
    ],
  },
  {
    job: "Reports",
    badge: "Business Intelligence",
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
  },
  {
    job: "Compliance and setup",
    badge: "FBR & Hardware",
    icon: ShieldCheck,
    features: [
      "FBR-integrated invoice with QR code",
      "Printer server settings",
      "Excel import/export",
    ],
  },
];

export function PosFeaturesSection() {
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

        {/* Plain, Always-Visible Grid: Rendered once, grouped by job */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {jobGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.job}
                className="flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(15,42,38,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#167c70]/40 hover:shadow-md"
              >
                {/* Card Header: Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2A26] leading-snug">
                      {group.job}
                    </h3>
                    <span className="text-[11px] font-medium text-zinc-400">
                      {group.features.length} capabilities
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-2 space-y-2 border-t border-zinc-100 pt-3 flex-1">
                  {group.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-700 leading-snug"
                    >
                      <Check
                        className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#167c70]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default PosFeaturesSection;
