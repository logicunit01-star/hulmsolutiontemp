import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { 
  CountryData, 
  COUNTRIES_DATA,
  REGIONAL_LOCATIONS
} from "@/lib/countries/data";
import { 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  LayoutDashboard,
  Boxes,
  Users,
  FolderKanban,
  Layers,
  ScanLine,
  Monitor,
  Cloud,
  CheckCircle
} from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { FaqDetails } from "@/components/seo/faq-details";
import { ProductScreens } from "@/components/seo/product-screens";
import { CaseStudyCard } from "@/components/seo/case-study-card";
import { ClientLogos } from "@/components/home/client-logos";
import { screensFor } from "@content/data/product-screens";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, softwareNode } from "@/lib/seo/page-seo";
import { productLinks } from "@/lib/seo/site-links";
import { preloadHeroPattern } from "@/lib/hero-pattern";

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Boxes,
  Users,
  FolderKanban,
  Layers,
  ScanLine,
  Monitor,
  Cloud
};

const industries = [
  { name: "Retail Store", href: "/industries/retail-store/", desc: "Fast barcode checkout, multi-size inventory & exchange control" },
  { name: "Restaurant", href: "/industries/restaurant-pos/", desc: "Table layouts, kitchen order tickets (KOT), and split billing" },
  { name: "Pharmacy Store", href: "/industries/pharmacy-store/", desc: "Batch & expiry tracking, formula search, and strip calculation" },
  { name: "Salon & Spa", href: "/industries/salon-pos/", desc: "Appointment calendar, staff commissions, and service billing" },
  { name: "Manufacturing Industry", href: "/industries/manufacturing-industries/", desc: "Raw material tracking, assembly batches, and production stages" },
  { name: "Furniture Store", href: "/industries/furniture-store/", desc: "Custom order deposits, showroom inventory, and delivery routes" },
  { name: "Clothing Store", href: "/industries/clothing-store/", desc: "Color-size matrix variants, garment tags, and seasonal sales" },
  { name: "Electric Store", href: "/industries/electric-store/", desc: "Serialized item warranty logs, fractional wire units, and contractor ledgers" },
  { name: "Bakery", href: "/industries/bakery-pos-system/", desc: "Scale integration, batch waste reduction, and fresh inventory timers" },
  { name: "Cafe", href: "/industries/cafe/", desc: "Modifier selection, counter orders and menu management" },
  { name: "Jewellery Shop", href: "/industries/jewellery-shop/", desc: "Precious metal rate recalculation, making charges, and karat logs" },
  { name: "Toys Store", href: "/industries/toys-store/", desc: "Barcode scanning for thousands of SKUs, bundles, and seasonal offers" }
];

interface CountryTemplateProps {
  countryKey: string;
}

export function CountryTemplate({ countryKey }: CountryTemplateProps) {
  preloadHeroPattern();
  const data: CountryData | undefined = COUNTRIES_DATA[countryKey];

  if (!data) {
    redirect("/");
  }

  const {
    country,
    flag,
    code,
    role,
    currency,
    complianceName,
    complianceSub,
    complianceBadges,
    hero,
    challenges,
    features,
    benefits,
    whyChoose,
    faqs,
    copy
  } = data;
  const route = `/${countryKey}/`;
  // Short names carry the live keywords (POS software in USA / UAE / KSA).
  const kw = ({ "pos-software-usa": "USA", "pos-software-uae": "UAE", "pos-software-ksa": "KSA", "pos-software-qatar": "Qatar" } as Record<string, string>)[countryKey] ?? country;
  const faqItems = faqs.map((item) => ({ q: item.question, a: item.answer }));
  const schema = pageJsonLd({
    route,
    crumbs: [{ name: `POS software in ${country}`, path: route }],
    node: { ...softwareNode("Hulm POS", hero.subtitle), areaServed: { "@type": "Country", name: country } },
    faq: faqItems,
  });

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white">
      <JsonLd data={schema} />
      {/* 1. HERO (Crisp white with subtle grid, ambient glow, aligned with homepage design) */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-6 font-normal">
            <Link href="/" className="hover:text-[#0F2A26] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="text-zinc-500">Locations</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="text-[#0F2A26] font-medium flex items-center gap-1.5">
              <span>{flag}</span>
              <span>{country}</span>
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 text-xs font-semibold text-[#167c70] tracking-wide w-fit">
                <span className="text-base leading-none">{flag}</span>
                <span>{country.toUpperCase()}</span>
                <span className="w-1 h-1 rounded-full bg-[#167c70]" />
                <span className="font-bold">{role}</span>
              </div>

              {/* H1 Heading strictly 600/700 weight with mark-lime */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-[#0F2A26] tracking-[-0.03em] leading-[1.15]">
                {hero.h1}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed">
                {hero.subtitle}
              </p>

              {/* Regional product proof */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2 border-y border-[#E4E2DA] text-xs font-medium text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#167c70]" />
                  <span>Regional tax integration</span>
                </div>
                <div className="h-3 w-px bg-zinc-300 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#167c70]" />
                  <span>Multi-branch configuration</span>
                </div>
                <div className="h-3 w-px bg-zinc-300 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#167c70]" />
                  <span>Dedicated setup guidance</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold rounded-full shadow-sm px-7 h-12 text-sm"
                >
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noopener noreferrer">
                    <span>Start 14-Day Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full h-12 px-6 text-sm font-semibold border-[#E4E2DA] hover:bg-[#F7F6F2]"
                >
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Book a Live Demo
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                <span>No credit card required</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                <span>Configuration confirmed during setup</span>
                <span className="mx-1">•</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#167c70]" />
                <span>Tax settings verified</span>
              </div>
            </div>

            {/* Right Column: Localized Visual POS Terminal Simulator with Ambient Glow */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
                />

                <div className="w-full bg-white rounded-2xl p-6 border border-[#E4E2DA] shadow-xl relative overflow-hidden">
                  {/* Simulated Header */}
                  <div className="flex items-center justify-between border-b border-[#E4E2DA] pb-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] flex items-center justify-center font-bold text-sm text-[#0F2A26]">
                        {code}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0F2A26] flex items-center gap-1.5">
                          <span>Hulm POS</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#167c70]/10 text-[#167c70] border border-[#167c70]/20">
                            {currency}
                          </span>
                        </div>
                        <div className="text-[11px] text-zinc-500">{country} Regional Node</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#167c70] font-semibold flex items-center gap-1 justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#167c70] animate-pulse" />
                        ONLINE
                      </div>
                      <div className="text-[10px] text-zinc-400">Cloud Sync Active</div>
                    </div>
                  </div>

                  {/* Regional workspace preview */}
                  <div className="bg-[#FAF9F5] rounded-xl p-4 mb-4 border border-[#E4E2DA]">
                    <div className="text-[11px] text-zinc-500 font-medium mb-1">Example sales workspace ({currency})</div>
                    <div className="text-lg sm:text-xl font-bold text-[#0F2A26] tracking-tight">Branch activity & invoice status</div>
                    <div className="mt-3 pt-3 border-t border-[#E4E2DA] grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="text-[10px] text-zinc-500">Sales records</div>
                        <div className="font-semibold text-[#0F2A26]">Connected</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500">Tax workflow</div>
                        <div className="font-semibold text-[#167c70]">Configured for {code}</div>
                      </div>
                    </div>
                  </div>

                  {/* Regulatory Compliance Badges */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Regional Tax & Compliance
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {complianceBadges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-[#FAF9F5] rounded-lg px-2.5 py-2 text-xs text-[#0F2A26] border border-[#E4E2DA] font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-[#167c70] shrink-0" />
                          <span className="truncate">{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Footer */}
                  <div className="mt-4 pt-4 border-t border-[#E4E2DA] flex items-center justify-between text-xs text-zinc-600">
                    <span>Hardware & Thermal Printer Sync</span>
                    <span className="text-[#167c70] font-semibold flex items-center gap-1">
                      Compatibility confirmed <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1b. COUNTRY OVERVIEW (country-specific copy carrying the primary keyword) */}
      <Section data-reveal className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A26] tracking-tight">
              {copy.overviewHeading}
            </h2>
            {copy.overview.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <ProductScreens
        screens={screensFor(route)}
        heading={`See Hulm POS software for ${kw} in action`}
        description="Real screens from Hulm POS: checkout, a live sales dashboard and inventory."
        topic={`POS software in ${kw}`}
      />

      {/* 2. REGIONAL COMPLIANCE HIGHLIGHT SECTION */}
      <Section data-reveal className="py-16 bg-[#F7F6F2] border-b border-[#E4E2DA]">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-[#E4E2DA] shadow-sm lift flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#167c70]/10 text-[#167c70] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Tax and e-invoicing workflow support</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2A26] tracking-tight">
                {complianceName} for {country}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl font-normal">
                {complianceSub}
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2.5 w-full md:w-auto">
              <Button asChild className="bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold rounded-full px-6 h-11 text-xs">
                <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                  <span>Request Compliance Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
              <div className="text-[11px] text-zinc-500 text-center">
                Setup scope confirmed before rollout
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. WHY BUSINESSES IN [COUNTRY] NEED POS SOFTWARE (Problems & Solutions) */}
      <Section data-reveal className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Operational Realities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              {copy.whyHeading}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {copy.whyIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="lift flex flex-col bg-[#FAF9F5] rounded-2xl p-7 border border-[#E4E2DA]"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 mb-5">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2A26] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <div className="text-[13px] font-semibold text-rose-700 mb-1 flex items-center gap-1">
                    <span>The Problem</span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.problem}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#E4E2DA]">
                  <div className="text-[13px] font-semibold text-[#167c70] mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hulm Solution</span>
                  </div>
                  <p className="text-sm text-zinc-700 font-normal leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. COMPLETE FEATURES (8 Cards with custom icons) */}
      <Section data-reveal className="py-20 bg-[#F7F6F2] border-y border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Engineered for Speed
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              {copy.featuresHeading}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {copy.featuresIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || LayoutDashboard;
              return (
                <div
                  key={idx}
                  className="lift bg-white rounded-2xl p-6 border border-[#E4E2DA] flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70] group-hover:bg-[#167c70] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF9F5] border border-[#E4E2DA] text-zinc-600 group-hover:border-[#167c70]/30 group-hover:text-[#167c70] transition-colors">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F2A26] mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. BENEFITS & WHY CHOOSE COMBINED SECTION */}
      <Section data-reveal className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: 10 Benefits Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
                Measurable Impact
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A26] tracking-tight">
                {copy.benefitsHeading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                {copy.benefitsIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#FAF9F5] p-3.5 rounded-xl border border-[#E4E2DA]">
                    <div className="w-5 h-5 rounded-full bg-[#167c70] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#0F2A26] font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Why Businesses Choose Hulm Card */}
            <div className="lg:col-span-5 bg-[#0F2A26] text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-[#167c70]/20">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7AE582]" />
                <span>{copy.whyChooseHeading}</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mb-6 font-normal leading-relaxed">
                {copy.whyChooseIntro}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {whyChoose.map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs text-white/90 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7AE582]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                <div className="text-xs text-white/70 mb-1">Looking for a tailored regional deployment?</div>
                <div className="text-sm font-semibold text-white mb-3">Speak directly with our regional implementation team.</div>
                <Button asChild className="w-full bg-[#7AE582] hover:bg-[#8ef095] text-[#0F2A26] font-semibold rounded-xl text-xs h-10 shadow-sm">
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Connect on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. INDUSTRIES WE SERVE */}
      <Section data-reveal className="py-20 bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Universal Adaptation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              Industries We Serve Across {country}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {copy.industriesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="lift bg-white rounded-2xl p-5 border border-[#E4E2DA] hover:border-[#167c70] transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal line-clamp-2">
                    {ind.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-[#167c70] group-hover:translate-x-1 transition-transform">
                  <span>Explore POS</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. CUSTOMER SUCCESS STORIES (Real Google Reviews) */}
      <ClientLogos />
      <CaseStudyCard route={route} />
      <GoogleReviewsSection heading={`Businesses run on Hulm. Here is what they say`} subheading="Real reviews from business owners who use Hulm POS, published on Google." />

      {/* 8. FREQUENTLY ASKED QUESTIONS (Authentic Scraped Elementor Accordions) */}
      <Section data-reveal className="py-20 bg-white border-t border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2A26] tracking-tight">
              {copy.faqHeading}
            </h2>
            <p className="text-base text-zinc-600 font-normal">
              {copy.faqIntro}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqDetails items={faqItems} />
            {countryKey !== "pos-software-usa" ? (
              <LinkChips items={[{ label: "ZATCA-compliant POS software", href: "/zatca/" }]} centered className="mt-8" />
            ) : null}
            <LinkChips heading="Explore Hulm POS apps" items={productLinks} centered className="mt-8" />
          </div>
        </Container>
      </Section>

      {/* 9. OTHER REGIONAL EDITIONS NAVIGATOR */}
      <Section data-reveal className="py-14 bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[13px] font-semibold text-zinc-500 mb-1">
                Global Network
              </div>
              <div className="text-lg font-bold text-[#0F2A26]">
                Looking for another regional edition?
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {REGIONAL_LOCATIONS.map((loc) => (
                <Link
                  key={loc.code}
                  href={loc.href}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    loc.code === code
                      ? "bg-[#0F2A26] text-white border-[#0F2A26]"
                      : "bg-white text-zinc-700 border-[#E4E2DA] hover:border-[#167c70] hover:text-[#167c70]"
                  }`}
                >
                  <span>{loc.flag}</span>
                  <span>{loc.country}</span>
                  <span className="text-[10px] opacity-80">({loc.role})</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. FINAL CTA BANNER */}
      <FinalCta points={["Full access to all 10+ business modules", `Tax and invoicing configured for ${kw}`, "Onboarding support on WhatsApp and phone"]} />
    </div>
  );
}
