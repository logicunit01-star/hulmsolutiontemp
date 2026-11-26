"use client";

import { CheckCircle2, XCircle, Sparkles, Building2, TrendingUp, Clock, AlertTriangle, Layers } from "lucide-react";

export function BranchComparisonCard() {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-6 lg:p-7 shadow-lg ring-1 ring-zinc-900/5">
      {/* Header */}
      <div className="border-b border-[#E4E2DA] pb-4 mb-4 sm:mb-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-700">
            <Layers className="h-3 w-3 text-[#167c70]" />
            SYSTEM COMPARISON
          </span>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
            Multi-Branch Ops
          </span>
        </div>
        <h3 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-[#0F2A26]">
          Retail Branch Management: Before vs After
        </h3>
        <p className="mt-0.5 text-xs text-zinc-600">
          Comparing manual spreadsheet chaos with centralized cloud POS operations.
        </p>
      </div>

      {/* Before & After Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* BEFORE CARD */}
        <div className="flex flex-col justify-between rounded-2xl border border-rose-200 bg-rose-50/50 p-4 shadow-2xs">
          <div>
            {/* Before Header */}
            <div className="pb-3 border-b border-rose-200/80">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-800">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
                BEFORE: 3 Disconnected Excel Sheets
              </span>
              <div className="mt-1.5 text-[10px] font-mono text-rose-700 font-medium">
                Karachi.xlsx &bull; Lahore.xlsx &bull; Islamabad.xlsx
              </div>
            </div>

            {/* Pain Points */}
            <div className="mt-3.5 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-rose-950 flex items-start gap-1.5">
                  <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Stock Discrepancies &amp; Ghost Inventory</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  Counter sales not synced with sheets. Customers arrive only to find products out of stock.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-rose-950 flex items-start gap-1.5">
                  <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Delayed Nightly WhatsApp Reports</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  Managers send photos/CSV in WhatsApp. Owner manually copies figures into master file 24–48h late.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-rose-950 flex items-start gap-1.5">
                  <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>Pricing &amp; Transfer Confusion</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  Head office changes a price, but individual stores continue selling at old prices without audit logs.
                </p>
              </div>
            </div>
          </div>

          {/* Before Outcome */}
          <div className="mt-4 rounded-xl border border-rose-200/90 bg-white/90 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
              Outcome for the Retail Owner:
            </span>
            <p className="mt-0.5 text-[11px] font-bold text-rose-900 leading-tight">
              Blind spots &bull; Lost sales &bull; Admin exhaustion
            </p>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Does not know daily store balances without manual re-keying.
            </p>
          </div>
        </div>

        {/* AFTER CARD */}
        <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-2xs">
          <div>
            {/* After Header */}
            <div className="pb-3 border-b border-emerald-200/80">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-900">
                <span className="h-1.5 w-1.5 rounded-full bg-[#167c70]" />
                AFTER: One Connected Hulm POS Cloud
              </span>
              <div className="mt-1.5 text-[10px] font-medium text-emerald-800">
                All 3 Branches Live on One Shared Cloud Database
              </div>
            </div>

            {/* Solutions */}
            <div className="mt-3.5 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-emerald-950 flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0 mt-0.5" />
                  <span>Live Multi-Branch Inventory Tracking</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  Every checkout instantly reduces stock in real time across Karachi, Lahore &amp; Islamabad.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-950 flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0 mt-0.5" />
                  <span>Instant Consolidated Sales Reports</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  No waiting for WhatsApp files. Open phone or laptop and view revenue, margins &amp; taxes in 1 click.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-emerald-950 flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0 mt-0.5" />
                  <span>Centralized Pricing &amp; Stock Transfers</span>
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-600 leading-relaxed pl-5">
                  Update price once, it reflects everywhere. Inter-branch stock transfers tracked via verified logs.
                </p>
              </div>
            </div>
          </div>

          {/* After Outcome */}
          <div className="mt-4 rounded-xl border border-emerald-200/90 bg-white/90 p-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#167c70] block">
              Outcome for the Retail Owner:
            </span>
            <p className="mt-0.5 text-[11px] font-bold text-emerald-950 leading-tight">
              100% Visibility &bull; 2h Saved Daily &bull; Faster Growth
            </p>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Zero manual file merging. Focus on scaling your retail business.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-5 pt-3.5 border-t border-[#E4E2DA] flex items-center justify-between text-[11px] text-zinc-500">
        <span className="flex items-center gap-1 font-medium text-zinc-600 text-[10px]">
          <Sparkles className="h-3 w-3 text-[#167c70]" />
          Real-Time Multi-Branch Cloud Sync
        </span>
        <span className="font-bold tracking-wider uppercase text-[#0F2A26] text-[10px]">
          HULM POS SOLUTIONS
        </span>
      </div>
    </div>
  );
}
