"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ClipboardList,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeContent } from "@content/pages/home";

const outcomeIcons = [ShoppingCart, Boxes, ClipboardList, BarChart3];

export function OutcomesSection() {
  const { outcomes } = homeContent;
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const scrollToTab = (index: number) => {
    setActiveTab(index);
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      isProgrammaticScroll.current = true;
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  };

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < outcomes.items.length && newIndex !== activeTab) {
      setActiveTab(newIndex);
    }
  };

  return (
    <Section data-reveal className="bg-[#F7F6F2] py-14 sm:py-18 lg:py-24 border-y border-[#E4E2DA]">
      <Container>
        {/* Section Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
            <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
            {outcomes.eyebrow}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
            {outcomes.heading}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
            {outcomes.description}
          </p>
        </div>

        {/* Mobile Quick Category Switcher Tabs (< md only) */}
        <div className="mt-6 flex md:hidden items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
          {outcomes.items.map((item, idx) => {
            const Icon = outcomeIcons[idx];
            const isActive = activeTab === idx;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToTab(idx)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0F2A26] text-white shadow-xs"
                    : "bg-white text-zinc-600 border border-[#E4E2DA] hover:border-zinc-300"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#7AE582]" : "text-zinc-500"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid on Desktop / Smooth Swipe Track on Mobile */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="mt-6 md:mt-12 flex md:grid gap-4 md:gap-5 md:grid-cols-2 xl:grid-cols-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {outcomes.items.map((item, index) => {
            const Icon = outcomeIcons[index];
            return (
              <article
                key={item.title}
                className="snap-center shrink-0 w-[84vw] sm:w-[320px] md:w-auto md:shrink lift flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="mb-4 sm:mb-6 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70] shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[#167c70]/8 border border-[#167c70]/20 px-2.5 py-0.5 text-xs font-bold text-[#167c70] uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2A26] leading-snug">
                    {item.title}
                  </h3>
                  <ul className="mt-4 sm:mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <div className="grid h-4 w-4 place-items-center rounded-full bg-[#167c70]/10 text-[#167c70] shrink-0">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#167c70] hover:text-[#125f57] transition-colors"
                  >
                    <span>{item.linkLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Swipe Indicator Dots (< md) */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
          {outcomes.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToTab(i)}
              aria-label={`View ${outcomes.items[i].label}`}
              className={`transition-all duration-200 rounded-full cursor-pointer ${
                activeTab === i ? "w-6 h-1.5 bg-[#167c70]" : "w-1.5 h-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>

        {/* More apps row */}
        {outcomes.more && outcomes.more.length > 0 && (
          <div className="mt-12 sm:mt-14 text-center">
            <p className="text-sm font-bold text-[#0F2A26]">{outcomes.moreHeading}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {outcomes.more.map((chip) => (
                <li key={chip.href}>
                  <Link
                    href={chip.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E2DA] bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#167c70] hover:border-[#167c70] hover:bg-[#FAF9F5] transition-all shadow-2xs"
                  >
                    <span>{chip.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
