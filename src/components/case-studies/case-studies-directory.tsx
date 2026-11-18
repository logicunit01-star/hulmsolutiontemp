"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Quote,
  Search,
  Sparkles,
  X,
  TrendingUp,
  Layers,
} from "lucide-react";
import type { CaseStudy } from "@/content/pages/caseStudiesData";

type CategoryId =
  | "all"
  | "retail"
  | "food"
  | "health"
  | "apparel"
  | "supermarket"
  | "auto";

interface CategoryMeta {
  id: CategoryId;
  label: string;
}

const CATEGORIES: CategoryMeta[] = [
  { id: "all", label: "All Stories" },
  { id: "retail", label: "Retail & Electronics" },
  { id: "food", label: "Food & Cafes" },
  { id: "health", label: "Healthcare & Pharma" },
  { id: "apparel", label: "Fashion & Apparel" },
  { id: "supermarket", label: "Supermarkets" },
  { id: "auto", label: "Automotive & Hardware" },
];

function getStudyCategory(study: CaseStudy): CategoryId {
  switch (study.id) {
    case "the-laptop-store":
    case "real-tech-system":
    case "apex-cellular-hub":
      return "retail";
    case "cupcake-queen":
    case "farhan-caterers":
    case "roast-craft-coffee":
      return "food";
    case "elate-cc":
    case "careplus-pharmacy":
      return "health";
    case "khaas-pret-apparel":
      return "apparel";
    case "metro-fresh-mart":
      return "supermarket";
    case "al-madina-auto-parts":
      return "auto";
    default:
      return "retail";
  }
}

interface CaseStudiesDirectoryProps {
  studies: CaseStudy[];
}

export function CaseStudiesDirectory({ studies }: CaseStudiesDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: studies.length };
    for (const s of studies) {
      const cat = getStudyCategory(s);
      map[cat] = (map[cat] || 0) + 1;
    }
    return map;
  }, [studies]);

  const filteredStudies = useMemo(() => {
    return studies.filter((study) => {
      // Category match
      if (selectedCategory !== "all" && getStudyCategory(study) !== selectedCategory) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const haystack = `${study.client} ${study.title} ${study.industry} ${study.location} ${study.excerpt}`.toLowerCase();
        if (!haystack.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [studies, selectedCategory, searchQuery]);

  // Featured story for the top spotlight (when on "all" and no search query)
  const isDefaultView = selectedCategory === "all" && !searchQuery.trim();
  const featuredStory = isDefaultView ? studies.find((s) => s.id === "khaas-pret-apparel") || studies[0] : null;
  const gridStudies = isDefaultView && featuredStory
    ? filteredStudies.filter((s) => s.id !== featuredStory.id)
    : filteredStudies;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Interactive Controls Bar: Category Filter Tabs & Quick Search */}
      <div className="bg-white rounded-2xl border border-[#E4E2DA] p-3 sm:p-4 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = counts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[#167c70] text-white shadow-xs"
                      : "bg-[#FAF9F5] text-zinc-600 hover:text-[#0F2A26] hover:bg-[#F2F1EC] border border-[#E4E2DA]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`inline-flex items-center justify-center text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/25 text-white" : "bg-black/5 text-zinc-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by city or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-full border border-[#E4E2DA] bg-[#FAF9F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#167c70]/20 focus:border-[#167c70] text-[#0F2A26] placeholder:text-zinc-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Indicator & Results Count */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E4E2DA]/60 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#167c70]" />
            <span>
              Showing <strong className="text-[#0F2A26] font-semibold">{filteredStudies.length}</strong> of{" "}
              {studies.length} verified customer stories
            </span>
          </div>
          {(selectedCategory !== "all" || searchQuery.trim()) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#167c70] hover:text-[#105f56] font-semibold underline underline-offset-2"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Featured Spotlight Card: Shown at top when browsing all stories */}
      {featuredStory && (
        <div className="lift bg-white rounded-2xl border border-[#E4E2DA] shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#167c70]/10 text-[#167c70] text-xs font-bold uppercase tracking-wider border border-[#167c70]/20">
                    <Sparkles className="w-3 h-3 text-[#167c70]" />
                    Featured Story
                  </span>
                  <span className="px-3 py-0.5 bg-[#FAF9F5] border border-[#E4E2DA] text-zinc-600 text-xs font-medium rounded-full">
                    {featuredStory.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 bg-[#FAF9F5] border border-[#E4E2DA] text-zinc-600 text-xs font-medium rounded-full">
                    <MapPin className="w-3 h-3 text-[#167c70]" />
                    {featuredStory.location}
                  </span>
                </div>

                <Link
                  href={`/pos-case-studies/${featuredStory.slug}/`}
                  className="group inline-block"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F2A26] mb-2 tracking-tight group-hover:text-[#167c70] transition-colors">
                    {featuredStory.client}
                  </h3>
                </Link>
                <p className="text-sm font-semibold text-zinc-500 mb-4">
                  {featuredStory.title}
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                  {featuredStory.excerpt}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                  {featuredStory.results.slice(0, 4).map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E4E2DA] text-center"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-[#167c70] mb-0.5">
                        {res.metric}
                      </div>
                      <div className="text-[11px] font-medium text-zinc-500 line-clamp-2">
                        {res.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E2DA] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-xs text-zinc-500 italic max-w-md line-clamp-1">
                  &ldquo;{featuredStory.quote.text}&rdquo; —{" "}
                  <span className="font-semibold text-[#0F2A26] not-italic">
                    {featuredStory.quote.author}
                  </span>
                </div>
                <Link
                  href={`/pos-case-studies/${featuredStory.slug}/`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#105f56] group transition-colors shrink-0"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#E4E2DA] bg-[#FAF9F5]">
              {featuredStory.image && (
                <Image
                  src={featuredStory.image}
                  alt={`${featuredStory.client} POS case study`}
                  fill
                  sizes="(min-width: 1024px) 450px, 100vw"
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-sm hidden sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F2A26]">
                  <TrendingUp className="w-4 h-4 text-[#167c70]" />
                  <span>Verified Operational Impact</span>
                </div>
                <div className="text-[11px] text-zinc-600 mt-0.5 line-clamp-1">
                  {featuredStory.clientProfile.size}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Case Studies: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
      {gridStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {gridStudies.map((study) => (
            <article
              key={study.id}
              className="lift group bg-white rounded-2xl border border-[#E4E2DA] shadow-xs hover:shadow-md hover:border-[#167c70]/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Cover Image with Overlay Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF9F5] border-b border-[#E4E2DA]">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={`${study.client} POS case study`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FAF9F5] to-[#E4E2DA]/30">
                    <span className="text-xs font-semibold text-zinc-400">
                      {study.client}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#167c70] shadow-xs backdrop-blur-sm border border-white/60">
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white backdrop-blur-sm shadow-xs">
                    <MapPin className="w-3 h-3 text-[#7AE582]" />
                    <span className="line-clamp-1">{study.location.split(",")[0]}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <Link
                  href={`/pos-case-studies/${study.slug}/`}
                  className="group-hover:text-[#167c70] transition-colors"
                >
                  <h3 className="text-xl font-bold text-[#0F2A26] tracking-tight mb-1 line-clamp-1">
                    {study.client}
                  </h3>
                </Link>
                <p className="text-xs font-semibold text-zinc-500 mb-3 line-clamp-1">
                  {study.title}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed line-clamp-2 mb-4">
                  {study.excerpt}
                </p>

                {/* Top 2 High-Impact Metrics Strip */}
                <div className="grid grid-cols-2 gap-2 bg-[#FAF9F5] p-3 rounded-xl border border-[#E4E2DA] mb-4">
                  {study.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="text-center">
                      <div className="text-base sm:text-lg font-bold text-[#167c70] leading-tight">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-medium line-clamp-1 mt-0.5">
                        {res.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Short Client Quote Snippet */}
                <div className="relative pl-3 border-l-2 border-[#167c70] text-xs text-zinc-600 italic line-clamp-2 mb-5 font-normal">
                  &ldquo;{study.quote.text}&rdquo;
                  <span className="block not-italic font-semibold text-[#0F2A26] text-[11px] mt-1">
                    — {study.quote.author}
                  </span>
                </div>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-[#E4E2DA]/70 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-medium text-zinc-400">
                    {study.businessSize.split("(")[0].trim()}
                  </span>
                  <Link
                    href={`/pos-case-studies/${study.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#167c70] group-hover:text-[#105f56] transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-[#E4E2DA] p-12 text-center max-w-lg mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#167c70]/10 text-[#167c70] flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-[#0F2A26] mb-2">
            No matching case studies found
          </h4>
          <p className="text-sm text-zinc-600 mb-6 font-normal">
            We couldn&apos;t find any stories matching your current filters. Try searching for a different industry, city, or clearing your query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#167c70] text-white text-xs font-bold hover:bg-[#105f56] transition-colors"
          >
            Show All 11 Case Studies
          </button>
        </div>
      )}
    </div>
  );
}
