"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IndustryCardItem {
  slug: string;
  name: string;
  title: string;
  category: "Retail & Boutiques" | "Food & Beverage" | "Specialty & Luxury" | "Healthcare & Services";
  description: string;
  image: string;
  highlights: string[];
}

interface IndustriesGridProps {
  items: IndustryCardItem[];
}

const categories = [
  "All Verticals",
  "Retail & Boutiques",
  "Food & Beverage",
  "Specialty & Luxury",
  "Healthcare & Services",
] as const;

export function IndustriesGrid({ items }: IndustriesGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Verticals");

  const filteredItems =
    selectedCategory === "All Verticals"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-100/80 rounded-2xl max-w-2xl mx-auto border border-gray-200/60 shadow-xs">
        {categories.map((cat) => {
          const count =
            cat === "All Verticals"
              ? items.length
              : items.filter((i) => i.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer",
                isActive
                  ? "bg-white text-[#0F2A26] shadow-xs"
                  : "text-gray-600 hover:text-[#0F2A26] hover:bg-white/50"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  isActive
                    ? "bg-[#209f8f]/10 text-[#167c70]"
                    : "bg-gray-200/70 text-gray-500"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredItems.map((item) => (
          <div
            key={item.slug}
            className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-[#209f8f]/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Header with Badge Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold text-white drop-shadow-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  href={`/industries/${item.slug}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7F6F2] hover:bg-[#209f8f] text-[#0F2A26] hover:text-white text-xs font-semibold transition-all duration-200 group/btn"
                >
                  <span>Explore {item.name} POS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
