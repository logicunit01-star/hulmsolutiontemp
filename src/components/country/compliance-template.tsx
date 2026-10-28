import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { COMPLIANCE_DATA } from "@/lib/countries/data";
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode
} from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, SITE_URL } from "@/lib/seo/page-seo";
import { preloadHeroPattern } from "@/lib/hero-pattern";

interface ComplianceTemplateProps {
  complianceKey: "zatca" | "fbr-integrated-pos-pakistan";
}

export function ComplianceTemplate({ complianceKey }: ComplianceTemplateProps) {
  preloadHeroPattern();
  const data = COMPLIANCE_DATA[complianceKey];

  if (!data) {
    redirect("/");
  }

  const {
    h1,
    subtitle,
    country,
    flag,
    badge,
    keyPoints,
    steps
  } = data;

  const seo = data.seo;
  const faqs = seo.faqs;
  const route = `/${complianceKey}/`;
  const schema = pageJsonLd({
    route,
    crumbs: [{ name: h1, path: route }],
    node: {
      "@type": "Service",
      name: h1,
      serviceType: complianceKey === "zatca" ? "ZATCA e-invoicing POS integration" : "FBR POS integration",
      description: subtitle,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: country },
    },
    faq: faqs,
  });

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white">
      <JsonLd data={schema} />
      {/* 1. HERO BANNER - Matching Homepage Theme */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[#167c70] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="text-zinc-500">Compliance</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="text-[#0F2A26] font-semibold flex items-center gap-1.5">
              <span>{flag}</span>
              <span>{country}</span>
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
                <span className="text-sm leading-none">{flag}</span>
                <span>{country.toUpperCase()}</span>
                <span className="w-1 h-1 rounded-full bg-[#167c70]" />
                <span className="font-bold">{badge}</span>
              </div>

              <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
                {h1}
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-1">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0F2A26] text-white hover:bg-[#167c70]"
                >
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noopener noreferrer">
                    <span>Discuss Compliance Setup</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Speak with Implementation Team
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                  Requirements reviewed before setup
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                  Integration validation support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                  Live testing assistance
                </span>
              </div>
            </div>

            {/* Right Column: Visual Verification Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
              />
              <div className="w-full max-w-md bg-white border border-[#E4E2DA] rounded-2xl p-6 shadow-[0_20px_50px_-20px_rgba(21,40,37,0.18)] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] border border-[#E4E2DA] flex items-center justify-center text-[#167c70] shadow-xs">
                      <QrCode className="w-5 h-5 text-[#167c70]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F2A26]">Compliance Workflow Preview</div>
                      <div className="text-[11px] text-zinc-500 font-medium">{country} Configuration</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#167c70]/10 text-[#167c70] text-[10px] font-bold border border-[#167c70]/20">
                    CERTIFIED
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="bg-[#FAF9F5] rounded-xl p-3 border border-[#E4E2DA] flex items-center justify-between">
                    <span className="text-zinc-600">Authority connection</span>
                    <span className="font-semibold text-[#0F2A26] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#167c70] animate-pulse" />
                      Configured during setup
                    </span>
                  </div>
                  <div className="bg-[#FAF9F5] rounded-xl p-3 border border-[#E4E2DA] flex items-center justify-between">
                    <span className="text-zinc-600">Invoice and QR fields</span>
                    <span className="font-semibold text-[#167c70]">Mapped to requirements</span>
                  </div>
                  <div className="bg-[#FAF9F5] rounded-xl p-3 border border-[#E4E2DA] flex items-center justify-between">
                    <span className="text-zinc-600">Activation</span>
                    <span className="font-semibold text-[#0F2A26]">After live validation</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>Transaction records retained</span>
                  <span className="text-[#167c70] font-semibold">Active & Auditable</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. COMPLIANCE PILLARS */}
      <Section data-reveal className="py-20 bg-[#F7F6F2] border-b border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              {seo.pillarsHeading}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {seo.pillarsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyPoints.map((item, idx) => (
              <div
                key={idx}
                className="lift bg-white rounded-2xl p-7 border border-[#E4E2DA] shadow-xs hover:border-[#167c70]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7F6F2] text-[#167c70] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2A26] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. 4-STEP ONBOARDING PROCESS */}
      <Section data-reveal className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
              Rapid Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              {seo.stepsHeading}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {seo.stepsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="lift bg-[#FAF9F5] rounded-2xl p-6 border border-[#E4E2DA] shadow-xs hover:border-[#167c70]/40 transition-all flex flex-col relative"
              >
                <div className="w-9 h-9 rounded-xl bg-[#167c70] text-white flex items-center justify-center text-sm font-bold mb-4 shadow-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0F2A26] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {seo.audience ? (
        <Section data-reveal className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F2A26] tracking-tight">{seo.audience.heading}</h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">{seo.audience.text}</p>
              <LinkChips items={seo.audience.links} centered className="mt-6" />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* 4. REVIEWS */}
      {complianceKey === "zatca" ? null : <GoogleReviewsSection />}

      {/* 5. FAQs */}
      <Section data-reveal className="py-20 bg-white border-t border-zinc-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
              Tax & Regulatory FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F2A26] tracking-tight">
              {seo.faqHeading}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqDetails items={faqs} />
            <LinkChips heading={seo.related.heading} items={seo.related.links} centered className="mt-10" />
          </div>
        </Container>
      </Section>

      {/* 6. FINAL CTA */}
      <FinalCta points={complianceKey === "zatca" ? ["Full access to all 10+ business modules", "ZATCA compliant POS setup support", "Onboarding support on WhatsApp and phone"] : ["Full access to all 10+ business modules", "FBR-integrated POS invoicing available in Pakistan", "Onboarding support on WhatsApp and phone"]} />
    </div>
  );
}
