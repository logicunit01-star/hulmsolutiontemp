import { REGIONAL_ALTERNATES, SITE_FEEDS } from "@/lib/seo/page-seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Play,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

import { FaqDetails } from "@/components/seo/faq-details";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { PosFeaturesSection } from "@/components/home/PosFeaturesSection";
import { ReplaceManualSection } from "@/components/home/ReplaceManualSection";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeContent } from "@content/pages/home";
import { contactInfo } from "@/lib/contact-info";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

// Title and description are the live WordPress values (do not change without an SEO review).
export const metadata: Metadata = {
  title: { absolute: homeContent.seo.title },
  description: homeContent.seo.description,
  alternates: { canonical: "/", languages: REGIONAL_ALTERNATES, types: SITE_FEEDS },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hulm Solutions",
    locale: "en_PK",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    url: "/",
    images: [{ url: homeContent.seo.ogImage, width: 1540, height: 963, alt: "Hulm POS software dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [homeContent.seo.ogImage],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: homeContent.seo.title,
      description: homeContent.seo.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: homeContent.seo.ogImage, width: 1540, height: 963 },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Hulm POS",
      description: homeContent.hero.description,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Point of sale software",
      operatingSystem: "Web",
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: { "@type": "Offer", url: `${siteUrl}/pricing/`, priceCurrency: "PKR", price: "2500", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Hulm Solutions",
      alternateName: "Hulm POS",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/logo/hulm-logo.svg`,
      image: `${siteUrl}/images/home/dashboard/hulm-pos-terminal.webp`,
      description: homeContent.hero.description,
      telephone: contactInfo.phoneE164,
      priceRange: "PKR 2,500 - PKR 15,000",
      currenciesAccepted: "PKR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address.streetAddress,
        addressLocality: contactInfo.address.addressLocality,
        addressRegion: contactInfo.address.addressRegion,
        postalCode: "75290",
        addressCountry: contactInfo.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.918,
        longitude: 67.135,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/hulm-solutions/",
        "https://www.instagram.com/hulmsolutions",
        "https://www.youtube.com/@Hulmsolutions",
      ],
    },
  ],
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a POS system and key features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A POS system is a combination of hardware and software that allows businesses to complete sales transactions, manage inventory, and track customer data. Inventory management. Sales reporting. Multi-payment options. CRM tools. Employee management",
      },
    },
    {
      "@type": "Question",
      name: "Is a POS System Secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with PCI compliance, encryption, 2FA, and regular updates, POS systems ensure secure payment processing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I integrate my POS with other systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many POS systems can integrate with accounting software, e-commerce platforms, and inventory management systems for seamless operations.",
      },
    },
    {
      "@type": "Question",
      name: "How Does a POS System Benefit My Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, It speeds up checkouts, tracks inventory, automates tasks, provides reports, and improves customer satisfaction.",
      },
    },
    {
      "@type": "Question",
      name: "Cloud vs. Traditional POS: Which is Better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloud POS offers remote access, scalability, and lower upfront costs, while traditional systems suit limited internet setups.",
      },
    },
    {
      "@type": "Question",
      name: "Is customer support available for the POS system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer dedicated customer support to assist you with any questions or issues you may encounter while using the POS system.",
      },
    },
    {
      "@type": "Question",
      name: "What Hardware Do I Need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essentials include a POS terminal, barcode scanner, receipt printer, cash drawer, and card reader.",
      },
    },
  ],
};
function renderFormattedDescription(text: string) {
  return text;
}

function renderFormattedDescriptionDark(text: string) {
  return text;
}

function SectionIntro({
  eyebrow,
  heading,
  description,
  centered = false,
}: {
  eyebrow: string;
  heading: string;
  description?: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 data-eyebrow={eyebrow} className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
          {typeof description === "string" ? renderFormattedDescription(description) : description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageFaqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="max-w-2xl lg:col-span-6">
            <p className="hidden md:block mb-5 text-sm font-semibold text-[#167c70]">{homeContent.hero.eyebrow}</p>
            <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
              {homeContent.hero.headline.replace(/every branch$/, "")}
              <span className="mark-lime">every branch</span>
            </h1>
            <p className="mt-6 sm:mt-7 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-zinc-600">
              {homeContent.hero.description}
            </p>

            {/* Mobile Showcase Image (Positioned directly after description on mobile) */}
            <div className="block lg:hidden my-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#167c70]/12 via-[#7ae582]/8 to-transparent blur-xl -z-10"
              />
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white p-1 sm:p-1.5 shadow-[0_15px_35px_-10px_rgba(21,40,37,0.18)]">
                <Image
                  src="/images/home/hero-pos-terminal.webp"
                  alt="Hulm POS software point of sale terminal screen"
                  width={1024}
                  height={498}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, (max-width: 640px) calc(100vw - 32px), 640px"
                  className="h-auto w-full rounded-lg sm:rounded-xl object-contain select-none"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="hidden sm:inline-flex w-full sm:w-auto">
                <Link href={homeContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a
                  href={homeContent.hero.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4 fill-current text-[#167c70]" />
                  <span>{homeContent.hero.secondaryCta.label}</span>
                </a>
              </Button>
            </div>

            <div className="mt-4 sm:mt-5 inline-block rounded-xl border border-zinc-200/90 bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-xs">
              <p className="text-sm sm:text-[15px] font-semibold text-[#FF6A00]">
                Start 14-Day Free Trial
              </p>
              <p className="mt-0.5 text-xs sm:text-[13px] text-zinc-700">
                No credit card required &middot; PKR 2,500/month &middot; No hidden fees
              </p>
            </div>
            <ul className="hidden md:flex mt-6 flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {homeContent.hero.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block relative w-full max-w-xl mx-auto lg:col-span-6 lg:max-w-none">
            {/* Soft ambient glow behind dashboard */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-1 sm:p-2 shadow-[0_25px_60px_-15px_rgba(21,40,37,0.22)]">
              <Image
                src="/images/home/hero-pos-terminal.webp"
                alt="Hulm POS software point of sale terminal screen"
                width={1024}
                height={498}
                fetchPriority="high"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustedBy />

      <Section data-reveal className="py-14 sm:py-18 lg:py-20">
        <Container>
          <SectionIntro {...homeContent.product} centered />
          <div className="mt-8 sm:mt-10">
            <DashboardCarousel screens={homeContent.product.screens} />
          </div>
        </Container>
      </Section>

      <ReplaceManualSection />

      <OutcomesSection />

      <Section data-reveal>
        <Container>
          <div className="grid overflow-hidden rounded-2xl bg-[#0F2A26] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-5 sm:p-10 lg:p-14">
              
              <h2 className="max-w-2xl text-xl sm:text-2xl font-bold tracking-tight text-white text-balance lg:text-[32px] lg:leading-[1.22]">{homeContent.compliance.heading}</h2>
              <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/75">{renderFormattedDescriptionDark(homeContent.compliance.description)}</p>
              <ul className="mt-6 sm:mt-7 space-y-2.5 sm:space-y-3">
                {homeContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 sm:gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 text-[#7AE582]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-7 sm:mt-8 w-full sm:w-auto h-auto min-h-12 py-3 px-5 sm:px-8 bg-white text-[#0F2A26] hover:bg-[#F7F6F2] text-sm sm:text-base font-semibold whitespace-normal text-center">
                <Link href={homeContent.compliance.cta.href} className="inline-flex items-center justify-center gap-2">
                  <span>{homeContent.compliance.cta.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-60 sm:min-h-72 place-items-center bg-[#16352F] p-5 sm:p-8">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-7 backdrop-blur-sm">
                <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-[#7AE582] text-[#0F2A26]">
                  <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-semibold text-[#7AE582]">Connected workflow</p>
                <p className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold">Sale → invoice → business record</p>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 text-white/65">Keep the compliance workflow close to the transaction that created it.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...homeContent.industries} centered />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.industries.items.map((industry) => (
              <Link key={industry.title} href={industry.href} className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#0F2A26]">
                <Image
                  src={industry.image}
                  alt={`${industry.title} POS setup`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26]/95 via-[#0F2A26]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-white">
                  <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition group-hover:bg-[#7AE582] group-hover:text-[#0F2A26]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[#0F2A26]">{homeContent.industries.moreHeading}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {homeContent.industries.more.map((chip) => (
                <li key={chip.href}>
                  <Link href={chip.href} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E2DA] bg-white px-3.5 py-2 text-sm font-semibold text-[#167c70] hover:border-[#25a18e]">
                    {chip.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-9 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={homeContent.industries.cta.href}>
                {homeContent.industries.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <PosFeaturesSection />

      <BenefitsSection />

      <WhyChooseSection />

      <GoogleReviewsSection
        heading="Pakistani businesses run on Hulm. Here is what they say"
        subheading="Real reviews from business owners who use Hulm POS, published on Google."
        cta={{
          label: homeContent.customerProof.cta.label,
          href: homeContent.customerProof.cta.href,
        }}
      />

      <Section data-reveal className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* Soft background ambient gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7faf8]/70 to-white"
        />

        <Container>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#dce7e3] bg-white p-5 sm:p-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:p-14 shadow-[0_24px_70px_-25px_rgba(21,40,37,0.12)]">
            {/* Subtle decorative top accent line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#167c70] to-transparent"
            />

            {/* Left Column: Heading, description & value pillars */}
            <div>
              <div className="mb-3.5 sm:mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{homeContent.pricing.eyebrow}</span>
              </div>

              <h2
                data-eyebrow={homeContent.pricing.eyebrow}
                className="text-xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]"
              >
                {homeContent.pricing.heading}
              </h2>

              <p className="mt-3.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 sm:text-lg max-w-xl">
                {homeContent.pricing.description}
              </p>

              {/* 3 Value Pillars */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3.5 sm:gap-4 border-t border-zinc-100 pt-5 sm:pt-6 sm:grid-cols-3">
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F2A26]">Quick Setup</p>
                    <p className="text-xs leading-relaxed text-zinc-500">Be up and running same day with onboarding.</p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F2A26]">No Hidden Costs</p>
                    <p className="text-xs leading-relaxed text-zinc-500">Transparent monthly billing with no setup penalties.</p>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F2A26]">Scales With You</p>
                    <p className="text-xs leading-relaxed text-zinc-500">Add counters, registers, and branches as you grow.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium High-Converting Pricing Card */}
            <div className="relative mt-7 sm:mt-8 lg:mt-0 overflow-hidden rounded-2xl border-2 border-[#167c70]/25 bg-gradient-to-b from-[#f8fbf9] via-white to-[#f4f9f6] p-5 sm:p-8 shadow-[0_20px_45px_-12px_rgba(22,124,112,0.12)]">
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                  {homeContent.pricing.note}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#167c70] px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-xs">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              </div>

              {/* Price display */}
              <div className="mt-3.5 sm:mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight text-[#0F2A26] sm:text-5xl">
                  {homeContent.pricing.price}
                </span>
                <span className="text-sm font-semibold text-zinc-500">
                  {homeContent.pricing.cadence}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">Billed monthly &bull; Cancel or change plans anytime</p>

              {/* Bullets List */}
              <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5 border-t border-zinc-100 pt-5 sm:pt-6">
                {homeContent.pricing.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-zinc-700">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#167c70]/10 text-[#167c70]">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button asChild size="lg" className="group mt-6 sm:mt-7 h-12 w-full justify-center rounded-xl bg-[#0F2A26] text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#167c70]">
                <Link href={homeContent.pricing.cta.href}>
                  <span>{homeContent.pricing.cta.label}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Trust Reassurance */}
              <div className="mt-3.5 sm:mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#167c70]" />
                <span>14-day free trial &bull; Instant activation</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={homeContent.faq.eyebrow} heading={homeContent.faq.heading} />
          <FaqDetails items={homeContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-5 py-10 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white text-balance lg:text-[36px] lg:leading-[1.2]">
                {homeContent.finalCta.heading.replace(/better operation$/, "")}
                <span className="mark-lime-dark">better operation</span>
              </h2>
              <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70 sm:text-lg">{homeContent.finalCta.description}</p>
              <div className="mt-7 sm:mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-[#7AE582] text-[#0F2A26] hover:bg-white w-full sm:w-auto">
                  <Link href={homeContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {homeContent.finalCta.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                  <a
                    href={homeContent.finalCta.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Play className="h-4 w-4 fill-current text-[#7AE582]" />
                    <span>{homeContent.finalCta.secondaryCta.label}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
