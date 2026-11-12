"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, AlertTriangle, Layers, Calendar, DollarSign, ShoppingCart, Package } from "lucide-react";

const dailySalesData = [
  { time: "10 AM", sales: 14200, orders: 8, heightPct: 22 },
  { time: "12 PM", sales: 28500, orders: 16, heightPct: 45 },
  { time: "02 PM", sales: 36800, orders: 21, heightPct: 58 },
  { time: "04 PM", sales: 22100, orders: 13, heightPct: 35 },
  { time: "06 PM", sales: 48900, orders: 29, heightPct: 77 },
  { time: "08 PM", sales: 63500, orders: 38, heightPct: 100 },
  { time: "10 PM", sales: 31200, orders: 19, heightPct: 49 },
];

const categoryStockData = [
  { category: "Beverages & Drinks", count: 480, lowStock: 3, percentage: 38 },
  { category: "Snacks & Confectionery", count: 320, lowStock: 5, percentage: 26 },
  { category: "Dairy & Frozen Food", count: 210, lowStock: 4, percentage: 17 },
  { category: "Personal Care & Hygiene", count: 145, lowStock: 2, percentage: 12 },
  { category: "Household & Cleaning", count: 85, lowStock: 0, percentage: 7 },
];

export function DashboardGraphsInteractive() {
  const [activeTab, setActiveTab] = useState<"sales" | "inventory">("sales");

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-xs">
      {/* Header with Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
            Live Reporting & Visibility
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#0F2A26]">
            Interactive Business Intelligence Preview
          </h3>
        </div>

        <div className="inline-flex rounded-xl border border-zinc-200 bg-white p-1 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("sales")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "sales"
                ? "bg-[#0F2A26] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Graph 1: Daily Sales Trend</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inventory")}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === "inventory"
                ? "bg-[#0F2A26] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Graph 2: Inventory Overview</span>
          </button>
        </div>
      </div>

      {/* Main Graph Content */}
      <div className="p-6 sm:p-8">
        {activeTab === "sales" ? (
          <div className="space-y-6">
            {/* KPI Cards Strip */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <DollarSign className="h-3.5 w-3.5 text-[#167c70]" /> Total Daily Sales
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">PKR 245,200</p>
                <span className="text-[11px] font-medium text-emerald-600">Updated in real-time</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <ShoppingCart className="h-3.5 w-3.5 text-[#167c70]" /> Total Orders
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">144 Bills</p>
                <span className="text-[11px] font-medium text-zinc-500">Across active counters</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#167c70]" /> Average Order
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">PKR 1,702</p>
                <span className="text-[11px] font-medium text-zinc-500">Per counter checkout</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-[#167c70]" /> Peak Trading Hour
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">08:00 PM</p>
                <span className="text-[11px] font-medium text-emerald-600">PKR 63,500 in 38 bills</span>
              </div>
            </div>

            {/* Visual Sales Chart */}
            <div className="rounded-xl border border-zinc-200 bg-[#FAF9F5] p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200/70">
                <div>
                  <h4 className="text-sm font-bold text-[#0F2A26]">Hourly Sales Volume (PKR)</h4>
                  <p className="text-xs text-zinc-500">Breakdown of gross sales across typical store hours</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#167c70]">
                  Karachi Counter Demo
                </span>
              </div>

              {/* Bar visualization */}
              <div className="mt-6 flex h-48 sm:h-56 items-end justify-between gap-2 sm:gap-4 pt-6">
                {dailySalesData.map((d) => (
                  <div key={d.time} className="group relative flex flex-1 flex-col items-center h-full justify-end">
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 z-20 pointer-events-none rounded bg-[#0F2A26] px-2 py-1 text-[11px] text-white shadow whitespace-nowrap">
                      PKR {d.sales.toLocaleString()} ({d.orders} bills)
                    </div>
                    {/* Bar */}
                    <div
                      style={{ height: `${d.heightPct}%` }}
                      className="w-full max-w-[48px] rounded-t-lg bg-gradient-to-t from-[#167c70] to-[#25a18e] group-hover:from-[#0F2A26] group-hover:to-[#167c70] transition-all relative overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-white/40" />
                    </div>
                    {/* Time label */}
                    <span className="mt-2 text-[10px] sm:text-xs font-semibold text-zinc-600">
                      {d.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* KPI Cards Strip for Inventory */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <Package className="h-3.5 w-3.5 text-[#167c70]" /> Total SKUs Tracked
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">1,240 Items</p>
                <span className="text-[11px] font-medium text-emerald-600">Active product catalogue</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-600" /> Low Stock Alerts
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-amber-700">14 Items</p>
                <span className="text-[11px] font-medium text-amber-700">Below minimum threshold</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#167c70]" /> Categories
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">12 Categories</p>
                <span className="text-[11px] font-medium text-zinc-500">Organized inventory</span>
              </div>
              <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4">
                <span className="text-xs text-zinc-500 font-medium flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#167c70]" /> Reorders Suggested
                </span>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">4 Suppliers</p>
                <span className="text-[11px] font-medium text-zinc-500">Purchase orders ready</span>
              </div>
            </div>

            {/* Category breakdown bars */}
            <div className="rounded-xl border border-zinc-200 bg-[#FAF9F5] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200/70">
                <div>
                  <h4 className="text-sm font-bold text-[#0F2A26]">Stock Breakdown by Category</h4>
                  <p className="text-xs text-zinc-500">Live counts and reorder warnings per major product department</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                  Healthy Stock Level
                </span>
              </div>

              <div className="space-y-4 pt-2">
                {categoryStockData.map((cat) => (
                  <div key={cat.category} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-[#0F2A26]">{cat.category}</span>
                      <div className="flex items-center gap-3">
                        {cat.lowStock > 0 && (
                          <span className="text-[11px] font-medium text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                            {cat.lowStock} low stock
                          </span>
                        )}
                        <span className="font-mono text-zinc-600">{cat.count} units</span>
                      </div>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-zinc-200 overflow-hidden">
                      <div
                        style={{ width: `${cat.percentage}%` }}
                        className="h-full rounded-full bg-[#167c70]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mandatory Transparency Note from Requirement 9 */}
        <div className="mt-6 rounded-xl border border-zinc-200/80 bg-zinc-50 p-3.5 text-xs text-zinc-500 text-center">
          <span className="font-semibold text-zinc-700">Reporting Transparency Notice:</span> The graphs above display clearly labelled illustrative product demo data. In live operations, figures reflect your actual store checkout transactions, inventory stock movements, and configured branch permissions.
        </div>
      </div>
    </div>
  );
}
