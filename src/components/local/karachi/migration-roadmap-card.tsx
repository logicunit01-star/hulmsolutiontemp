"use client";

import { CheckCircle2, ShieldCheck, Sparkles, FileSpreadsheet, ArrowRight, Zap, RefreshCw } from "lucide-react";

const migrationSteps = [
  {
    num: "01",
    title: "Audit Existing Excel Files",
    desc: "Consolidate all separate desktop sheets, purchase records, and price lists into a single master workbook.",
    tag: "Eliminate duplicate rows & obsolete stock",
  },
  {
    num: "02",
    title: "Cleanse & Standardize Data",
    desc: "Ensure unique product codes (SKUs/Barcodes), explicit product names, cost prices, retail selling prices, and categories.",
    tag: "Crucial for automated barcode scanner billing",
  },
  {
    num: "03",
    title: "Download Hulm Template",
    desc: "Grab the pre-configured Hulm POS CSV/Excel import template from the settings dashboard.",
    tag: "Includes custom variants & tax fields",
  },
  {
    num: "04",
    title: "One-Click Bulk CSV Upload",
    desc: "Import thousands of SKUs in seconds. Hulm POS automatically maps fields and checks for barcode conflicts.",
    tag: "Instant bulk-import with zero downtime",
  },
  {
    num: "05",
    title: "Physical Stock Audit & Count",
    desc: "Conduct a spot check of on-shelf quantities and set accurate opening stock levels before going live.",
    tag: "Establishes 100% ledger integrity",
  },
  {
    num: "06",
    title: "Connect Hardware & Go Live",
    desc: "Plug in your 80mm thermal receipt printer and barcode scanner. Train cashiers in under 15 minutes.",
    tag: "Instant thermal receipts & live sync",
  },
];

export function MigrationRoadmapCard() {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-7 lg:p-8 shadow-lg ring-1 ring-zinc-900/5">
      {/* Roadmap Header */}
      <div className="border-b border-[#E4E2DA] pb-5 mb-5 sm:mb-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#167c70] flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            IMPLEMENTATION ROADMAP
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
            <ShieldCheck className="h-3 w-3 text-[#167c70]" /> Zero Data Loss
          </span>
        </div>
        <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[#0F2A26]">
          6-Step Migration: From Excel Spreadsheets to Cloud POS
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-zinc-600">
          Structured zero-downtime transition framework for Karachi retail stores and pharmacies.
        </p>
      </div>

      {/* 6-Step Grid (2 columns on tablet/desktop, 1 column on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {migrationSteps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-2xs hover:border-[#167c70]/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F2A26] text-[11px] font-bold text-white shadow-2xs">
                  {step.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F2A26] leading-tight">
                  {step.title}
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-zinc-100">
              <span className="inline-block rounded-md bg-[#167c70]/8 px-2 py-0.5 text-[10px] font-semibold text-[#167c70] leading-normal">
                {step.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap Footer */}
      <div className="mt-6 pt-4 border-t border-[#E4E2DA] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500">
        <span className="flex items-center gap-1.5 font-medium text-zinc-600">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70]" />
          Zero Data Loss Guarantee &bull; Fast Migration Protocol
        </span>
        <span className="font-bold tracking-wider uppercase text-[#0F2A26] text-[10px]">
          HULM POS SOLUTIONS
        </span>
      </div>
    </div>
  );
}
