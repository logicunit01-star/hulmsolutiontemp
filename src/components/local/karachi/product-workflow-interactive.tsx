"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, CheckCircle2, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/contact-info";

const steps = [
  {
    stepNumber: "01",
    title: "Step 1: Add Your Products",
    shortTitle: "1. Add Products",
    description:
      "Add your products with relevant information such as product name, selling price, category, barcode and stock quantity.",
    image: "/images/home/dashboard/hulm-pos-product-catalog.webp",
    alt: "Hulm POS product management screen showing product catalogue, pricing, category, and barcode setup",
    width: 2048,
    height: 996,
    highlights: [
      "Barcode scanning and custom SKU generation",
      "Item categories, brand tags, and unit pricing",
      "Real-time initial stock counts and reorder limits",
    ],
  },
  {
    stepNumber: "02",
    title: "Step 2: Add Products to Checkout",
    shortTitle: "2. Scan to Checkout",
    description:
      "Search for a product or scan its barcode, add it to the cart, adjust quantities and review the order before completing the sale.",
    image: "/images/product/pos-checkout-screen.webp",
    alt: "Hulm POS checkout screen showing fast product search, active shopping cart and quantity controls",
    width: 1201,
    height: 692,
    highlights: [
      "Sub-second barcode scan response",
      "Instant quantity adjustments and customer discounts",
      "Live cart subtotal and applicable tax breakdown",
    ],
  },
  {
    stepNumber: "03",
    title: "Step 3: Select the Payment Method",
    shortTitle: "3. Choose Payment",
    description:
      "Choose from the payment methods supported and configured for your business. Review the payable amount and process the transaction.",
    image: "/images/product/hulm-solutions-create-sales-order.webp",
    alt: "Hulm POS payment processing screen with supported cash, card, and split payment methods",
    width: 1197,
    height: 688,
    highlights: [
      "Cash, debit card, and bank transfer support",
      "Customer credit / Udhaar ledger recording",
      "Split tender calculation with exact change indicator",
    ],
  },
  {
    stepNumber: "04",
    title: "Step 4: Complete the Sale",
    shortTitle: "4. Complete & Receipt",
    description:
      "Complete the transaction and generate the relevant receipt. Sales records and inventory information are updated according to the system’s configured workflow.",
    image: "/images/product/sales-orders-screen.webp",
    alt: "Hulm POS completed sale screen with instant receipt generation and automatic stock deduction",
    width: 800,
    height: 459,
    highlights: [
      "Instant thermal receipt printing and digital copy",
      "Automatic stock quantity deduction across inventory",
      "Centralized sales log updated for daily performance reports",
    ],
  },
];

export function ProductWorkflowInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx];

  return (
    <div className="mt-12 space-y-8">
      {/* Step Navigation Tabs */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:gap-3">
        {steps.map((s, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={s.stepNumber}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`group flex flex-col rounded-xl border p-3.5 text-left transition-all sm:p-4 ${
                isActive
                  ? "border-[#167c70] bg-[#167c70]/8 shadow-sm ring-1 ring-[#167c70]"
                  : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isActive ? "text-[#167c70]" : "text-zinc-400 group-hover:text-zinc-600"
                  }`}
                >
                  Step {s.stepNumber}
                </span>
                {isActive && <span className="h-2 w-2 rounded-full bg-[#167c70]" />}
              </div>
              <span
                className={`mt-1 text-sm font-semibold sm:text-base ${
                  isActive ? "text-[#0F2A26]" : "text-zinc-700"
                }`}
              >
                {s.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 lg:p-10">
          {/* Left Text / Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-bold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{activeStep.title}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              {activeStep.title.replace(/^Step \d+: /, "")}
            </h3>
            <p className="text-base leading-relaxed text-zinc-600">
              {activeStep.description}
            </p>

            <ul className="space-y-2.5 pt-2">
              {activeStep.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#167c70] mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white text-sm font-semibold h-11 px-5 shadow-xs"
              >
                <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
                  Try Hulm POS Free for 14 Days <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-white text-sm font-semibold h-11 px-5"
              >
                <a href="#demo-form">
                  Book a Free Demo <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Product Screenshot Preview */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-2 shadow-sm transition-transform">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={activeStep.image}
                  alt={activeStep.alt}
                  width={activeStep.width}
                  height={activeStep.height}
                  loading="lazy"
                  className="h-full w-full object-contain object-top"
                  sizes="(min-width: 1024px) 580px, 100vw"
                />
              </div>
              <div className="mt-2 flex items-center justify-between px-2 text-xs text-zinc-500">
                <span className="font-mono text-[11px] text-[#167c70] font-medium">Hulm POS Live Workspace</span>
                <span>Screen {activeIdx + 1} of 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
