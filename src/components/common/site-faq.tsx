"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

interface SiteFaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  allowMultiple?: boolean;
}

// Clean up any leading "Q:", "Q1:", "1.", etc.
function cleanQuestionText(raw: string): string {
  if (!raw) return "";
  return raw.replace(/^(Q\d*[:.]|\d+[\.\)])\s*/i, "").trim();
}

// Clean up any leading "Ans:", "Ans.", "A:", etc.
function cleanAnswerText(raw: string): string {
  if (!raw) return "";
  return raw.replace(/^(Ans|A)[\.:]?\s*/i, "").trim();
}

export function SiteFaqAccordion({
  items,
  defaultOpenIndex = 0,
  className,
  allowMultiple = false,
}: SiteFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggle = (idx: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndex((prev) => (prev === idx ? null : idx));
    }
  };

  const isItemOpen = (idx: number) => {
    return allowMultiple ? openIndexes.includes(idx) : openIndex === idx;
  };

  if (!items || items.length === 0) return null;

  return (
    <div data-site-faq-accordion className={cn("space-y-4", className)}>
      {items.map((item, idx) => {
        const isOpen = isItemOpen(idx);
        const question = cleanQuestionText(item.question || item.q || "");
        const answer = cleanAnswerText(item.answer || item.a || "");

        return (
          <div
            key={idx}
            data-site-faq-item
            className={cn(
              "border rounded-2xl transition-all duration-200 overflow-hidden bg-white",
              isOpen
                ? "border-[#25a18e] shadow-sm ring-1 ring-[#25a18e]/15"
                : "border-zinc-200/80 hover:border-zinc-300"
            )}
          >
            <button
              type="button"
              data-site-faq-button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F2A26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="text-[#25a18e] font-bold text-base sm:text-lg shrink-0">
                  Q:
                </span>
                <span className="leading-snug">{question}</span>
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform duration-200 shrink-0",
                  isOpen ? "transform rotate-180 text-[#25a18e]" : "text-zinc-400"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-4 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100">
                <p>
                  <strong className="text-[#0F2A26] font-bold mr-2">Ans:</strong>
                  {answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Backwards compatibility export
export { IndustriesFaq } from "@/components/industries/industries-faq";
