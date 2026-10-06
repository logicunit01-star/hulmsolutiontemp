import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Quote, CheckCircle2 } from "lucide-react";
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
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Customer stories" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      {/* Hero */}
      <section className="relative w-full py-20 sm:py-28 bg-[#0F2A26] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
            backgroundSize: "600px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#7AE582] mb-4">
            Customer Success
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            POS case studies: real results from Hulm customers
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Read real POS case studies from businesses using Hulm POS, from FBR-compliant retail and computer stores to medical equipment distribution, bakeries and event caterers.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <Section data-reveal className="bg-[#F7F6F2] py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A26] tracking-tight">
              POS case studies by industry and country
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Each of these POS case studies sets out the challenge a business faced, the Hulm POS system it put in place and the results it saw, from retailers and caterers in Karachi to a bakery chain in Doha.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {caseStudiesData.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="grid lg:grid-cols-12">
                  {/* Left Side: Problem & Solution */}
                  <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {study.location}
                        </span>
                      </div>

                      <Link href={`/pos-case-studies/${study.slug}/`} className="group inline-block">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A26] mb-2 tracking-tight group-hover:text-[#167c70] transition-colors">
                          {study.client}
                        </h2>
                      </Link>
                      <h3 className="text-base sm:text-lg text-gray-500 mb-6 font-normal">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-5 mb-8">
                        <div>
                          <h4 className="font-semibold text-[#0F2A26] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-red-500" /> The Challenge
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0F2A26] mb-1.5 flex items-center gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-[#209f8f]" /> The Solution
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/pos-case-studies/${study.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70] hover:text-[#1a8578] group transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Metrics & Quote */}
                  <div className="lg:col-span-5 bg-[#209f8f]/5 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#209f8f]/15">
                    {study.image && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-gray-200/60 shadow-xs bg-white">
                        <img
                          src={study.image}
                          alt={`${study.client} POS case study`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.slice(0, 4).map((result, rIdx) => (
                        <div key={rIdx} className="bg-white p-4 rounded-xl border border-[#209f8f]/20 text-center shadow-xs">
                          <div className="text-xl sm:text-2xl font-semibold text-[#167c70] mb-0.5">{result.metric}</div>
                          <div className="text-[11px] font-medium text-gray-500 line-clamp-2">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs mt-auto">
                      <Quote className="absolute top-3 right-3 w-6 h-6 text-[#167c70]/15" />
                      <p className="text-xs sm:text-sm font-medium text-[#0F2A26] italic mb-3 relative z-10 leading-relaxed">
                        &ldquo;{study.quote.text}&rdquo;
                      </p>
                      <div>
                        <div className="font-semibold text-[#0F2A26] text-xs">{study.quote.author}</div>
                        <div className="text-[11px] text-gray-500">{study.quote.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-12">
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
