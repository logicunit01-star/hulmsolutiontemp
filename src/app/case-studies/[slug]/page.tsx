import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Building2,
  MapPin,
  Quote,
  Sparkles,
  ChevronRight,
  Layers,
} from "lucide-react";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, pageJsonLd, seoMetadata, SITE_URL } from "@/lib/seo/page-seo";
import { getProductionParityPage } from "@/lib/production-parity";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { preloadHeroPattern } from "@/lib/hero-pattern";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found - Hulm Solutions" };
  // Live WordPress title + meta description (they carry the current rankings).
  return seoMetadata(`/pos-case-studies/${study.slug}/`, { ogImage: study.image || undefined, type: "article" });
}

/** Live H1 for each case study (keyword-bearing), used instead of the short card title. */
function liveH1(slug: string) {
  const html = getProductionParityPage(`/pos-case-studies/${slug}/`)?.mainHtml ?? "";
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  return m ? m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() : "";
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  preloadHeroPattern();
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const otherStudies = caseStudiesData.filter((s) => s.slug !== study.slug);
  const route = `/pos-case-studies/${study.slug}/`;
  const h1 = liveH1(study.slug) || study.title;
  const faqItems = (study.faqs ?? []).map((f) => ({ q: f.question, a: f.answer }));
  const schema = pageJsonLd({
    route,
    crumbs: [
      { name: "POS case studies", path: "/pos-case-studies/" },
      { name: study.client, path: route },
    ],
    node: {
      "@type": "Article",
      headline: h1,
      description: study.excerpt,
      image: absoluteUrl(study.image),
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}${route}`,
    },
    faq: faqItems,
  });

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white">
      <JsonLd data={schema} />
      {/* Top Hero Banner */}
      <section className="relative w-full py-14 sm:py-20 bg-[#0F2A26] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
            backgroundSize: "600px",
          }}
        />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-6 font-normal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <Link href="/pos-case-studies/" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <span className="text-white truncate max-w-[220px] sm:max-w-md font-medium">
              {study.client}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#7AE582]">
                {study.industry}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 text-white/90 text-xs font-medium border border-white/10">
                <MapPin className="w-3 h-3 text-[#7AE582]" />
                {study.location}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
              {h1}
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
              {study.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area with Sticky Sidebar */}
      <Section data-reveal className="py-12 sm:py-16 bg-[#F7F6F2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Case Content */}
            <div className="lg:col-span-8 space-y-10 min-w-0">
              
              {/* Client Featured Image */}
              {study.image && (
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  <img
                    src={study.image}
                    alt={`${study.client} POS case study`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <span className="px-3 py-1 rounded-md bg-black/50 backdrop-blur-md text-[13px] font-semibold">
                      Client Profile
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1 drop-shadow-sm">
                      {study.clientProfile.name}
                    </h2>
                  </div>
                </div>
              )}

              {/* Client Profile Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <Building2 className="w-5 h-5 text-[#167c70]" />
                  <h3 className="text-lg font-semibold text-[#0F2A26]">
                    About {study.clientProfile.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {study.clientProfile.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#F7F6F2] p-3.5 rounded-xl border border-gray-100">
                    <div className="text-[13px] font-semibold text-gray-600 mb-1">
                      Business Type
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0F2A26]">
                      {study.clientProfile.type}
                    </div>
                  </div>
                  <div className="bg-[#F7F6F2] p-3.5 rounded-xl border border-gray-100">
                    <div className="text-[13px] font-semibold text-gray-600 mb-1">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0F2A26]">
                      {study.clientProfile.location}
                    </div>
                  </div>
                  <div className="bg-[#F7F6F2] p-3.5 rounded-xl border border-gray-100 col-span-2 sm:col-span-1">
                    <div className="text-[13px] font-semibold text-gray-600 mb-1">
                      Scale / Size
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0F2A26]">
                      {study.clientProfile.size}
                    </div>
                  </div>
                </div>
              </div>

              {/* The Challenge Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="text-[13px] font-bold text-red-600">The Problem</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mb-4">
                  The Operational Challenges
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {study.challenge}
                </p>
                
                <div className="space-y-3 pt-2">
                  {study.challengePoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-red-50/50 border border-red-100/80"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Solution Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#209f8f] shrink-0" />
                  <span className="text-[13px] font-bold text-[#167c70]">The Strategy</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mb-4">
                  The Hulm POS Solution
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {study.solution}
                </p>

                <div className="space-y-3 pt-2">
                  {study.solutionPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-[#209f8f]/5 border border-[#209f8f]/15"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#167c70] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Journey */}
              {study.implementationSteps && study.implementationSteps.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-[#167c70]" />
                    <span className="text-[13px] font-bold text-[#167c70]">Execution</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mb-6">
                    Step-by-Step Implementation
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.implementationSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-gray-100 bg-[#FAFAFA] hover:border-[#209f8f]/30 hover:bg-white transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#209f8f]/10 text-[#146b60] text-xs font-bold">
                            {idx + 1}
                          </span>
                          <h3 className="font-semibold text-[#0F2A26] text-sm sm:text-base group-hover:text-[#167c70] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Quote Card */}
              {study.quote && (
                <div className="relative bg-[#0F2A26] text-white p-6 sm:p-8 rounded-2xl shadow-sm overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none bg-repeat bg-center"
                    style={{
                      backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
                      backgroundSize: "400px",
                    }}
                  />
                  <Quote className="w-10 h-10 text-[#167c70]/40 mb-4" />
                  <blockquote className="text-base sm:text-lg font-medium italic text-white/95 leading-relaxed mb-6 relative z-10">
                    &ldquo;{study.quote.text}&rdquo;
                  </blockquote>
                  <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#209f8f] flex items-center justify-center font-bold text-white text-sm">
                      {study.quote.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {study.quote.author}
                      </div>
                      <div className="text-xs text-white/70">
                        {study.quote.role} • {study.client}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Conclusion */}
              {study.conclusion && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mb-4">
                    The Long-Term Impact
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {study.conclusion}
                  </p>
                </div>
              )}

              {/* FAQ Section */}
              {study.faqs && study.faqs.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
                  <div className="mb-6">
                    <span className="text-[13px] font-bold text-[#167c70]">
                      Got Questions?
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mt-1">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <FaqDetails items={faqItems} />
                </div>
              )}

              {/* Back to Case Studies Link */}
              <div className="pt-4">
                <Link
                  href="/pos-case-studies/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70] hover:text-[#1a8578] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Case Studies
                </Link>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              
              {/* Key Results Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#209f8f]" />
                  <h3 className="text-sm font-bold text-[#6b7280]">
                    Measurable Results
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="bg-[#209f8f]/5 p-4 rounded-xl border border-[#209f8f]/20 text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-semibold text-[#167c70] mb-1">
                        {res.metric}
                      </div>
                      <div className="text-[11px] font-medium text-gray-600 leading-tight">
                        {res.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-[#6b7280] pb-2 border-b border-gray-100">
                  Case Overview
                </h3>
                <div>
                  <div className="text-[13px] font-semibold text-gray-600">Client</div>
                  <div className="text-sm font-semibold text-[#0F2A26]">{study.client}</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-600">Industry</div>
                  <div className="text-sm font-semibold text-[#0F2A26]">{study.industry}</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-600">Location</div>
                  <div className="text-sm font-semibold text-[#0F2A26]">{study.location}</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-600">Business Size</div>
                  <div className="text-sm font-semibold text-[#0F2A26]">{study.businessSize}</div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-600">Solution Deployed</div>
                  <div className="text-sm font-semibold text-[#167c70]">Hulm Cloud POS & Tax Integration</div>
                </div>
              </div>

              {/* Trial CTA Card */}
              <div className="bg-[#0F2A26] p-6 rounded-2xl text-white shadow-sm relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#7AE582]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  Ready to scale your business?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-5">
                  See how Hulm POS can automate checkout, inventory, and tax compliance for your industry.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#167c70] hover:bg-[#125f57] text-white font-semibold text-xs h-10 rounded-xl shadow-xs transition-colors"
                >
                  <Link href="https://app.hulmsolutions.com/Register">
                    Start Free 14-Day Trial
                  </Link>
                </Button>
                <div className="mt-3 text-center">
                  <Link
                    href="/contact/"
                    className="text-[11px] text-white/70 hover:text-white transition-colors underline underline-offset-4"
                  >
                    Or schedule a live demo
                  </Link>
                </div>
              </div>

              {/* Other Case Studies Navigation Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="text-sm font-bold text-[#6b7280] pb-3 border-b border-gray-100 mb-4">
                  More Case Studies
                </h3>
                <div className="space-y-4">
                  {otherStudies.map((other) => (
                    <Link
                      key={other.id}
                      href={`/pos-case-studies/${other.slug}/`}
                      className="group block p-2.5 -mx-2.5 rounded-xl hover:bg-[#F7F6F2] transition-colors"
                    >
                      <div className="text-[13px] font-semibold text-[#167c70] mb-0.5">
                        {other.industry}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0F2A26] group-hover:text-[#167c70] transition-colors line-clamp-2">
                        {other.client}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-600 mt-1">
                        <span>Read story</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </Container>
      </Section>

      {/* Trust & Reviews */}
      {/qatar|ksa|saudi|uae|dubai/i.test(slug) ? null : <GoogleReviewsSection focus={slug} />}

      {/* Final Action CTA */}
      <FinalCta />
    </div>
  );
}
