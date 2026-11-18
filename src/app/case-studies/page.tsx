import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Sparkles } from "lucide-react";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { CaseStudiesDirectory } from "@/components/case-studies/case-studies-directory";
import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, seoMetadata, SITE_URL } from "@/lib/seo/page-seo";
import { preloadHeroPattern } from "@/lib/hero-pattern";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/pos-case-studies/");

const schema = pageJsonLd({
  route: "/pos-case-studies/",
  pageType: "CollectionPage",
  crumbs: [{ name: "POS case studies", path: "/pos-case-studies/" }],
  extra: [
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/pos-case-studies/#itemlist`,
      name: "Hulm POS case studies",
      itemListElement: caseStudiesData.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.metaTitle || study.title,
        url: `${SITE_URL}/pos-case-studies/${study.slug}/`,
      })),
    },
  ],
});

export default function CaseStudiesPage() {
  preloadHeroPattern();
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Customer stories" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-12 sm:pt-14 lg:pt-16 lg:pb-16 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
            <span>Customer Success</span>
          </div>
          <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px] mb-4">
            POS case studies: real results from Hulm customers
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Read real POS case studies from businesses using Hulm POS, from FBR-integrated retail, apparel, and computer stores to specialty cafes, supermarkets, pharmacies, and automotive distributors.
          </p>
        </div>
      </section>

      {/* Case Studies Interactive Directory */}
      <Section data-reveal className="bg-[#F7F6F2] py-12 sm:py-16 border-b border-[#E4E2DA]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 space-y-2.5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Proven Results Across 11+ Verticals
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A26] tracking-tight">
              POS case studies by industry and country
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Explore how retail stores, specialty cafes, pharmacies, supermarkets, and wholesale distributors in Karachi, Lahore, Islamabad, Dubai, and Doha transformed their operations with Hulm POS.
            </p>
          </div>

          <CaseStudiesDirectory studies={caseStudiesData} />
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-12 border-b border-[#E4E2DA]">
        <Container>
          <LinkChips
            heading="Inspired by these POS case studies? Find the POS system setup for your business"
            centered
            items={[
              { label: "Retail store POS", href: "/industries/retail-store/" },
              { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
              { label: "Cafe & Coffee POS", href: "/industries/cafe/" },
              { label: "Bakery POS", href: "/industries/bakery-pos-system/" },
              { label: "Pharmacy POS", href: "/industries/pharmacy-store/" },
              { label: "Clothing & Apparel POS", href: "/industries/clothing-store/" },
              { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
              { label: "POS pricing", href: "/pricing/" },
              { label: "About Hulm Solutions", href: "/about/" },
              { label: "Contact Us", href: "/contact/" },
            ]}
          />
        </Container>
      </Section>
      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
