import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
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
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
            <span>Customer Success</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#0F2A26] mb-4 leading-tight">
            POS case studies: real results from Hulm customers
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Read real POS case studies from businesses using Hulm POS, from FBR-compliant retail and computer stores to medical equipment distribution, bakeries and event caterers.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <Section data-reveal className="bg-[#F7F6F2] py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Proven Results
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A26] tracking-tight">
              POS case studies by industry and country
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Each of these POS case studies sets out the challenge a business faced, the Hulm POS system it put in place and the results it saw, from retailers and caterers in Karachi to a bakery chain in Doha.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {caseStudiesData.map((study, idx) => (
              <div key={study.id} className="lift bg-white rounded-2xl border border-[#E4E2DA] shadow-sm overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  {/* Left Side: Problem & Solution */}
                  <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
                          {study.industry}
                        </span>
                        <span className="px-3 py-0.5 bg-[#FAF9F5] border border-[#E4E2DA] text-zinc-600 text-xs font-medium rounded-full">
                          {study.location}
                        </span>
                      </div>

                      <Link href={`/pos-case-studies/${study.slug}/`} className="group inline-block">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2A26] mb-2 tracking-tight group-hover:text-[#167c70] transition-colors">
                          {study.client}
                        </h2>
                      </Link>
                      <h3 className="text-base sm:text-lg text-zinc-500 mb-6 font-normal">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-5 mb-8">
                        <div>
                          <h4 className="font-bold text-[#0F2A26] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-rose-500" /> The Challenge
                          </h4>
                          <p className="text-zinc-600 leading-relaxed text-sm">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F2A26] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-[#167c70]" /> The Solution
                          </h4>
                          <p className="text-zinc-600 leading-relaxed text-sm">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E4E2DA] flex items-center justify-between">
                      <Link
                        href={`/pos-case-studies/${study.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70] hover:text-[#105f56] group transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Metrics & Quote */}
                  <div className="lg:col-span-5 bg-[#FAF9F5] p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E4E2DA]">
                    {study.image && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-[#E4E2DA] shadow-xs bg-white">
                        <Image
                          src={study.image}
                          alt={`${study.client} POS case study`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.slice(0, 4).map((result, rIdx) => (
                        <div key={rIdx} className="bg-white p-4 rounded-xl border border-[#E4E2DA] text-center shadow-xs">
                          <div className="text-xl sm:text-2xl font-bold text-[#167c70] mb-0.5">{result.metric}</div>
                          <div className="text-[11px] font-medium text-zinc-500 line-clamp-2">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="relative bg-white p-5 rounded-xl border border-[#E4E2DA] shadow-xs mt-auto">
                      <Quote className="absolute top-3 right-3 w-6 h-6 text-[#167c70]/15" />
                      <p className="text-xs sm:text-sm font-medium text-[#0F2A26] italic mb-3 relative z-10 leading-relaxed">
                        &ldquo;{study.quote.text}&rdquo;
                      </p>
                      <div>
                        <div className="font-bold text-[#0F2A26] text-xs">{study.quote.author}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              { label: "Bakery POS", href: "/industries/bakery-pos-system/" },
              { label: "Pharmacy POS", href: "/industries/pharmacy-store/" },
              { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
              { label: "POS pricing", href: "/pricing/" },
              { label: "About Hulm Solutions", href: "/about/" },
              { label: "Book a free demo", href: "/book-a-demo/" },
            ]}
          />
        </Container>
      </Section>
      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
