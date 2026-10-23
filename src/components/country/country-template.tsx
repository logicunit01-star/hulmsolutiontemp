import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  CheckCircle,
  Play
} from "lucide-react";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { FaqDetails } from "@/components/seo/faq-details";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { homeContent } from "@content/pages/home";
import { CaseStudyCard } from "@/components/seo/case-study-card";
import { ClientLogos } from "@/components/home/client-logos";
import { TrustedBy } from "@/components/home/trusted-by";
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

const industryImageMap: Record<string, string> = {
  "/industries/retail-store/": "/images/industries/retail.jpg",
  "/industries/restaurant-pos/": "/images/industries/restaurant.jpg",
  "/industries/pharmacy-store/": "/images/industries/pharmacy.jpg",
  "/industries/salon-pos/": "/images/industries/salon.jpg",
  "/industries/manufacturing-industries/": "/images/industries/manufacturing.jpg",
  "/industries/furniture-store/": "/images/industries/furniture.jpg",
  "/industries/clothing-store/": "/images/industries/clothing.jpg",
  "/industries/electric-store/": "/images/industries/electric.jpg",
  "/industries/bakery-pos-system/": "/images/industries/bakery.jpg",
  "/industries/cafe/": "/images/industries/cafe.jpg",
  "/industries/jewellery-shop/": "/images/industries/jewelry.jpg",
  "/industries/toys-store/": "/images/industries/toys.jpg",
};

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

      {/* 1. HERO (Parity with Homepage Hero design system) */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left Column: Heading, CTAs & Proof */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 text-xs font-semibold text-[#167c70] tracking-wide w-fit">
                <span className="text-base leading-none">{flag}</span>
                <span className="font-bold">{country.toUpperCase()}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#167c70]" />
                <span>{role}</span>
              </div>

              {/* H1 Heading strictly preserving content with homepage font sizing & tracking */}
              <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
                {hero.h1}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-zinc-600 max-w-xl font-normal">
                {hero.subtitle}
              </p>

              {/* CTAs matching Homepage */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold rounded-full shadow-sm px-7 h-12 text-sm transition-colors"
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
                  className="w-full sm:w-auto rounded-full h-12 px-6 text-sm font-semibold border-[#E4E2DA] hover:bg-[#F7F6F2] transition-colors"
                >
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <Play className="h-4 w-4 fill-current text-[#167c70]" />
                    <span>Book a Live Demo</span>
                  </Link>
                </Button>
              </div>

              {/* Free Trial Mini Banner (Homepage Signature) */}
              <div className="inline-block rounded-xl border border-zinc-200/90 bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-xs w-fit">
                <p className="text-sm sm:text-[15px] font-semibold text-[#FF6A00]">
                  Start 14 Days Free Trial
                </p>
                <p className="mt-0.5 text-xs sm:text-[13px] text-zinc-700">
                  No credit card required &bull; {currency} regional currency &bull; No hidden fees
                </p>
              </div>

              {/* Proof points with CheckCircle2 */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-xs sm:text-sm font-medium text-zinc-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                  <span>Regional tax integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                  <span>Multi-branch configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                  <span>Dedicated setup guidance</span>
                </li>
              </ul>
            </div>

            {/* Right Column: High-Res POS Terminal Showcase with Ambient Glow & Localized Badges */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-lg">
                {/* Soft ambient emerald glow behind dashboard */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
                />

                <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-1 sm:p-2 shadow-[0_25px_60px_-15px_rgba(21,40,37,0.22)]">
                  <Image
                    src="/images/home/hero-pos-terminal.webp"
                    alt={`Hulm POS software point of sale terminal in ${country}`}
                    width={1024}
                    height={498}
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full rounded-xl object-contain"
                  />

                  {/* Localized Floating Pill Overlay */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md border border-[#E4E2DA] rounded-xl px-3 py-2 shadow-md flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#167c70] animate-pulse shrink-0" />
                    <div className="text-left">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                        {code} Node &bull; {country}
                      </div>
                      <div className="text-xs font-bold text-[#0F2A26]">
                        {currency} Active ({role})
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Metric Trust Cards matching homepage stats */}
                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-white/90 backdrop-blur-xs border border-[#E4E2DA] rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                    <div className="text-sm sm:text-base font-bold text-[#0F2A26]">{hero.rating}</div>
                    <div className="text-[10px] sm:text-[11px] text-zinc-500">Customer Rating</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs border border-[#E4E2DA] rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                    <div className="text-sm sm:text-base font-bold text-[#0F2A26]">{hero.reviewsCount}</div>
                    <div className="text-[10px] sm:text-[11px] text-zinc-500">Active Businesses</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xs border border-[#E4E2DA] rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                    <div className="text-sm sm:text-base font-bold text-[#167c70]">{hero.uptime}</div>
                    <div className="text-[10px] sm:text-[11px] text-zinc-500">Cloud Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRUSTED BY PARTNERS STRIP (Exact homepage placement) */}
      <TrustedBy />

      {/* 3. COUNTRY OVERVIEW (Preserving all authentic regional copy) */}
      <Section data-reveal className="py-14 sm:py-18 lg:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
              <span>Regional POS Solution</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              {copy.overviewHeading}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-8 shadow-xs">
            {copy.overview.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. DASHBOARD CAROUSEL (Homepage Interactive Slider) */}
      <Section data-reveal className="py-14 sm:py-18 lg:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
              <span>See Hulm in action</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              See Hulm POS software for {kw} in action
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Real screens from Hulm POS: checkout, a live sales dashboard and inventory.
            </p>
          </div>
          <div className="mt-8 sm:mt-10">
            <DashboardCarousel screens={homeContent.product.screens} />
          </div>
        </Container>
      </Section>

      {/* 5. REGIONAL COMPLIANCE HIGHLIGHT SECTION (Exact Homepage Dark Forest Card Styling) */}
      <Section data-reveal className="py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="grid overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F2A26] text-white lg:grid-cols-[1.15fr_0.85fr] shadow-xl">
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#7AE582]/30 bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#7AE582] mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Tax and e-invoicing workflow support</span>
              </div>
              <h2 className="max-w-2xl text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance lg:text-[32px] lg:leading-[1.22]">
                {complianceName} for {country}
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/75 font-normal">
                {complianceSub}
              </p>
              <ul className="mt-6 space-y-2.5 sm:space-y-3">
                {complianceBadges.map((badge, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 sm:gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-[#7AE582]" />
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild size="lg" className="h-auto min-h-12 py-3 px-6 sm:px-8 bg-white text-[#0F2A26] hover:bg-[#F7F6F2] text-sm sm:text-base font-semibold rounded-full shadow-sm text-center">
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <span>Request Compliance Guide</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
                <span className="text-xs text-white/70 text-center sm:text-left">
                  Setup scope confirmed before rollout
                </span>
              </div>
            </div>

            <div className="grid min-h-60 sm:min-h-72 place-items-center bg-[#16352F] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-7 backdrop-blur-sm shadow-inner">
                <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-[#7AE582] text-[#0F2A26]">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="mt-5 sm:mt-6 text-xs sm:text-sm font-semibold text-[#7AE582]">Connected workflow</p>
                <p className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold">Sale &rarr; tax invoice &rarr; business record</p>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 text-white/65">
                  Keep regional tax and compliance workflows fully aligned with every sales transaction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. OPERATIONAL CHALLENGES & SOLUTIONS (Problems & Solutions matching homepage card elevation) */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <AlertCircle className="w-3.5 h-3.5 text-[#167c70]" />
              <span>Operational Realities</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              {copy.whyHeading}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
              {copy.whyIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <article
                key={index}
                className="lift group relative flex flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#167c70]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100/60 text-rose-700 border border-rose-200">
                      Challenge 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2A26] mb-3 tracking-tight group-hover:text-[#167c70] transition-colors">
                    {item.title}
                  </h3>

                  <div className="mb-4 rounded-xl border border-zinc-200/70 bg-white p-3.5 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.problem}
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-4 border-t border-[#E4E2DA]">
                  <div className="text-[12px] font-bold text-[#167c70] mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#167c70] shrink-0" />
                    <span>Hulm Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. COMPLETE FEATURES (8 Cards with custom icons, matching homepage PosFeatures design) */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F2] border-y border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
              <span>Engineered for Speed</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              {copy.featuresHeading}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
              {copy.featuresIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || LayoutDashboard;
              return (
                <div
                  key={idx}
                  className="lift bg-white rounded-2xl p-6 border border-[#E4E2DA] flex flex-col justify-between group shadow-xs hover:border-[#167c70]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70] group-hover:bg-[#167c70] group-hover:text-white transition-colors flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#167c70]/8 border border-[#167c70]/20 text-[#167c70]">
                        {feat.highlight}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F2A26] mb-2 tracking-tight group-hover:text-[#167c70] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 8. BENEFITS & WHY CHOOSE COMBINED SECTION (Homepage Parity) */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Col: 10 Benefits Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                  <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                  <span>Measurable Impact</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F2A26] tracking-tight leading-[1.22]">
                  {copy.benefitsHeading}
                </h2>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
                  {copy.benefitsIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#FAF9F5] p-3.5 rounded-xl border border-[#E4E2DA] shadow-2xs hover:border-[#167c70]/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#167c70] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#0F2A26] font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Why Businesses Choose Hulm Card */}
            <div className="lg:col-span-5 bg-[#0F2A26] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
              <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#7AE582]/10 blur-2xl" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7AE582]" />
                <span>{copy.whyChooseHeading}</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mb-5 font-normal leading-relaxed">
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

              <div className="bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/15 backdrop-blur-xs">
                <div className="text-xs text-white/70 mb-1 font-medium">Looking for a tailored regional deployment?</div>
                <div className="text-sm font-semibold text-white mb-3">Speak directly with our regional implementation team.</div>
                <Button asChild className="w-full bg-[#7AE582] hover:bg-[#8ef095] text-[#0F2A26] font-bold rounded-xl text-xs sm:text-sm h-11 shadow-sm transition-colors">
                  <Link href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer">
                    Connect on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. INDUSTRIES WE SERVE (Rich Visual Photographic Showcase Parity with Homepage) */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
              <span>Universal Adaptation</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              Industries We Serve Across {country}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
              {copy.industriesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="group relative min-h-[230px] overflow-hidden rounded-2xl bg-[#0F2A26] flex flex-col justify-end p-5 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={industryImageMap[ind.href] || "/images/industries/retail.jpg"}
                  alt={`${ind.name} POS software in ${country}`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26] via-[#0F2A26]/65 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-[#7AE582] transition-colors">
                      {ind.name}
                    </h3>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 transition group-hover:bg-[#7AE582] group-hover:text-[#0F2A26]">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 font-normal leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. CUSTOMER SUCCESS & REAL GOOGLE REVIEWS */}
      <ClientLogos />
      <CaseStudyCard route={route} />
      <GoogleReviewsSection
        heading={`Businesses run on Hulm. Here is what they say`}
        subheading="Real reviews from business owners who use Hulm POS, published on Google."
      />

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E4E2DA]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              {copy.faqHeading}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
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

      {/* 12. OTHER REGIONAL EDITIONS NAVIGATOR */}
      <Section data-reveal className="py-14 sm:py-16 bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#167c70] mb-1">
                Global Network
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#0F2A26]">
                Looking for another regional edition?
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {REGIONAL_LOCATIONS.map((loc) => (
                <Link
                  key={loc.code}
                  href={loc.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                    loc.code === code
                      ? "bg-[#0F2A26] text-white border-[#0F2A26] shadow-sm"
                      : "bg-white text-zinc-700 border-[#E4E2DA] hover:border-[#167c70] hover:text-[#167c70] shadow-xs"
                  }`}
                >
                  <span className="text-sm leading-none">{loc.flag}</span>
                  <span>{loc.country}</span>
                  <span className={`text-[10px] ${loc.code === code ? "text-white/80" : "text-zinc-500"}`}>({loc.role})</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 13. FINAL CTA BANNER */}
      <FinalCta points={["Full access to all 10+ business modules", `Tax and invoicing configured for ${kw}`, "Onboarding support on WhatsApp and phone"]} />
    </div>
  );
}
