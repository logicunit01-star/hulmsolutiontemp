import { industriesData } from "@/lib/industries/data";
import { redirect } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SiteFaqAccordion } from "@/components/common/site-faq";

interface IndustryTemplateProps {
  industrySlug: string;
}

export function IndustryTemplate({ industrySlug }: IndustryTemplateProps) {
  const industryData = industriesData[industrySlug];

  if (!industryData) {
    redirect("/");
  }

  const { hero, icon: MainIcon, whatIs, whyChoose, whoCanUse, faq } = industryData;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Section data-reveal className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start space-y-6 max-w-xl">
              {hero.badge && (
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#209f8f] mr-2"></span>
                  {hero.badge}
                </div>
              )}
              
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F2A26] tracking-tight leading-tight">
                  {hero.headline}
                </h1>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-lg">
                  {hero.subheadline}
                </p>
              </div>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 items-center w-full sm:w-auto">
                <Link href="https://app.hulmsolutions.com/Register" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#167c70] text-white text-base font-semibold hover:bg-[#1a8578] transition-all shadow-sm active:scale-[0.98]">
                  Request Free Demo
                </Link>
                <Link href="/contact/" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#0F2A26] border border-gray-200 text-base font-semibold hover:bg-gray-50 transition-colors shadow-xs">
                  Talk to sales
                </Link>
              </div>
            </div>
            
            <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl border border-border bg-white shadow-elevation-2 flex items-center justify-center p-8 bg-gradient-to-br from-background-muted to-white">
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-dashed border-border rounded-xl flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center space-y-4 text-primary/40">
                    <MainIcon className="w-24 h-24 stroke-[1.5]" />
                    <span className="text-sm font-medium">{hero.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What is Section */}
      {whatIs && (
        <Section data-reveal className="bg-white py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] mb-6 tracking-tight">
                  {whatIs.headline}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 mb-8 leading-relaxed">
                  {whatIs.description}
                </p>
                <ul className="space-y-4">
                  {whatIs.points?.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#209f8f]/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#167c70]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-zinc-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F7F6F2] p-8 rounded-2xl border border-gray-200/80 flex items-center justify-center aspect-square md:aspect-auto md:h-full min-h-[300px]">
                <div className="text-[#167c70]/25">
                  <MainIcon className="w-32 h-32" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Why Choose Section */}
      {whyChoose && (
        <Section data-reveal className="bg-[#F7F6F2] py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] mb-4 tracking-tight">
                {whyChoose.headline}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.items?.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col items-center text-center hover:border-[#209f8f]/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-[#0F2A26] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Who Can Use Section */}
      {whoCanUse && (
        <Section data-reveal className="bg-white py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] mb-4 tracking-tight">
                {whoCanUse.headline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                {whoCanUse.description}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {whoCanUse.points?.map((point: string, idx: number) => {
                  const parts = point.split(' - ');
                  return (
                    <li key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0 md:last:border-b-0">
                      <div className="w-2 h-2 rounded-full bg-[#209f8f] mt-2 shrink-0"></div>
                      <span className="text-sm leading-relaxed text-zinc-700">
                        <strong className="text-[#0F2A26] font-semibold">{parts[0]}</strong>
                        {parts[1] ? ` - ${parts[1]}` : ''}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ Section */}
      {faq && (
        <Section data-reveal className="bg-[#F7F6F2] py-16 md:py-24 border-t border-gray-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70] mb-4">
                Got Questions?
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] mb-4 tracking-tight">
                {faq.headline}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                {faq.description}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <SiteFaqAccordion items={faq.items} defaultOpenIndex={0} />
            </div>
          </Container>
        </Section>
      )}

      {/* Global Shared Sections */}
      <GoogleReviewsSection focus={industrySlug} />
      <FinalCta />
    </div>
  );
}
