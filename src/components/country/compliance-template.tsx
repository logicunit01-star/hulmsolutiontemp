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
      {/* 1. HERO BANNER */}
      <section className="relative w-full py-16 sm:py-24 bg-[#0F2A26] text-white overflow-hidden">
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
            <span className="text-white/60">Compliance</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <span className="text-white font-medium flex items-center gap-1.5">
              <span>{flag}</span>
              <span>{country}</span>
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide w-fit">
                <span className="text-base leading-none">{flag}</span>
                <span>{country.toUpperCase()}</span>
                <span className="w-1 h-1 rounded-full bg-[#7ae582]" />
                <span className="text-[#a7f3d0]">{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.15]">
                {h1}
              </h1>

              <p className="text-base sm:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-slate-50 text-[#0F2A26] font-semibold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all px-7 h-12 text-sm"
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
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 rounded-full h-12 px-6 text-sm font-semibold transition-all"
                >
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Speak with the Implementation Team
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Requirements reviewed before setup</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Integration validation support</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7ae582]" />
                <span>Configuration guidance</span>
              </div>
            </div>

            {/* Right Column: Visual Verification Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#7ae582]/20 border border-[#7ae582]/30 flex items-center justify-center text-white">
                      <QrCode className="w-5 h-5 text-[#7ae582]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Compliance workflow preview</div>
                      <div className="text-[11px] text-white/70">{country} configuration</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#7ae582]/20 text-[#a7f3d0] text-[10px] font-semibold border border-[#7ae582]/30">
                    EXAMPLE
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">Authority connection</span>
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#7ae582] animate-pulse" />
                      Configured during setup
                    </span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">Invoice and QR fields</span>
                    <span className="font-semibold text-[#a7f3d0]">Mapped to requirements</span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <span className="text-white/70">Activation</span>
                    <span className="font-semibold text-white">After validation</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/15 text-[11px] text-white/70 flex items-center justify-between">
                  <span>Transaction records retained</span>
                  <span className="text-[#a7f3d0] font-semibold">Configuration required</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. COMPLIANCE PILLARS */}
      <Section data-reveal className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F2A26] tracking-tight">
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
                className="bg-[#f8fafc] rounded-2xl p-7 border border-emerald-100/80 hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1b7f70] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F2A26] mb-2 tracking-tight">
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
      <Section data-reveal className="py-20 bg-slate-50/80 border-y border-zinc-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
              Rapid Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0F2A26] tracking-tight">
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
                className="bg-white rounded-2xl p-6 border border-zinc-200/80 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col relative"
              >
                <div className="text-2xl font-bold text-[#1b7f70] mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-[#0F2A26] mb-2 tracking-tight">
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
      <FinalCta points={complianceKey === "zatca" ? ["Full access to all 10+ business modules", "ZATCA compliant POS setup support", "Onboarding support on WhatsApp and phone"] : ["Full access to all 10+ business modules", "FBR compliant POS invoicing available in Pakistan", "Onboarding support on WhatsApp and phone"]} />
    </div>
  );
}
