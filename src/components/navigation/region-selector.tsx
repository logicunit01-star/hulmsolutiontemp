"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { REGIONAL_LOCATIONS } from "@/lib/countries/data";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function RegionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Find active location based on pathname
  const normalizedPath = (pathname || "").replace(/\/$/, "");
  const pakistan = REGIONAL_LOCATIONS.find((loc) => loc.code === "PK") || REGIONAL_LOCATIONS[0];
  const activeLocation = REGIONAL_LOCATIONS.find(loc => {
    const locNorm = loc.href.replace(/\/$/, "");
    return normalizedPath === locNorm;
  }) || pakistan;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-[#0F2A26] hover:bg-zinc-100/90 transition-all duration-200 border border-zinc-200/80 bg-white shadow-2xs"
        aria-label="Select Region"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="regional-editions-menu"
      >
        <span className="w-5 h-4 rounded bg-[#1b7f70]/10 border border-[#1b7f70]/20 text-[9.5px] font-bold text-[#146b60] flex items-center justify-center shrink-0">
          {activeLocation.code}
        </span>
        <span className="font-semibold text-xs text-[#0F2A26]">{activeLocation.country}</span>
        <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu (Styled to match the dark high-tech popover in the user screenshot) */}
      {isOpen && (
        <div id="regional-editions-menu" role="menu" className="absolute right-0 mt-2 w-56 sm:w-64 rounded-2xl bg-[#0d1715] border border-white/15 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-[100] animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase text-zinc-400 border-b border-white/10 mb-1 flex items-center justify-between">
            <span>Global Editions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ae582] animate-pulse" />
          </div>

          <div className="flex flex-col gap-1">
            {REGIONAL_LOCATIONS.map((loc) => {
              const isActive = pathname === loc.href;
              return (
                <Link
                  key={loc.code}
                  href={loc.href}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5 text-zinc-300"
                  }`}
                >
                  {/* Country ISO Code Badge */}
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center font-bold text-xs text-[#7ae582] shrink-0 mt-0.5 group-hover:border-[#7ae582]/40 transition-colors">
                    {loc.code}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white flex items-center justify-between">
                      <span className="truncate">{loc.country}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 text-[#7ae582] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="text-[10.5px] text-[#7ae582]/90 font-medium">
                      {loc.role}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
