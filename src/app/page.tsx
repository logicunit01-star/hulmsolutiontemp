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
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

import { FaqDetails, faqPageSchema } from "@/components/seo/faq-details";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { ReplaceManualSection } from "@/components/home/ReplaceManualSection";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { homeContent } from "@content/pages/home";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

// Title and description are the live WordPress values (do not change without an SEO review).
export const metadata: Metadata = {
  title: { absolute: homeContent.seo.title },
  description: homeContent.seo.description,
  alternates: { canonical: "/", languages: REGIONAL_ALTERNATES, types: SITE_FEEDS },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
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

const outcomeIcons = [ShoppingCart, Boxes, ClipboardList, BarChart3];

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
    faqPageSchema(homeContent.faq.items, `${siteUrl}/#faq`),
  ],
};

function SectionIntro({
  eyebrow,
  heading,
  description,
  centered = false,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 data-eyebrow={eyebrow} className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>
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
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="max-w-2xl lg:col-span-6">
            <p className="mb-5 text-sm font-semibold text-[#167c70]">{homeContent.hero.eyebrow}</p>
            <h1 className="text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
              {homeContent.hero.headline.replace(/every branch$/, "")}
              <span className="mark-lime">every branch</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              {homeContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={homeContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {homeContent.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={homeContent.hero.secondaryCta.href}>
                  {homeContent.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-zinc-500">{homeContent.hero.offer}</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {homeContent.hero.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full max-w-xl mx-auto lg:col-span-6 lg:max-w-none">
            {/* Soft ambient glow behind dashboard */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-1 sm:p-2 shadow-[0_25px_60px_-15px_rgba(21,40,37,0.22)]">
              <Image
                src="/images/home/dashboard/hulm-solutions-create-sales-order.webp"
                alt="Hulm POS software create sales order screen"
                width={1197}
                height={688}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustedBy />

      <ReplaceManualSection />

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...homeContent.outcomes} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeContent.outcomes.items.map((item, index) => {
              const Icon = outcomeIcons[index];
              return (
                <article key={item.title} className="lift flex h-full flex-col rounded-2xl border border-[#E4E2DA] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F6F2] text-[#167c70]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#167c70]">{item.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A26]">{item.title}</h3>
                  <ul className="mt-5 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="h-4 w-4 text-[#167c70]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]">
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[#0F2A26]">{homeContent.outcomes.moreHeading}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {homeContent.outcomes.more.map((chip) => (
                <li key={chip.href}>
                  <Link href={chip.href} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E2DA] bg-white px-3.5 py-2 text-sm font-semibold text-[#167c70] hover:border-[#25a18e]">
                    {chip.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="grid overflow-hidden rounded-2xl bg-[#0F2A26] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              
              <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl lg:text-[32px] lg:leading-[1.22]">{homeContent.compliance.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{homeContent.compliance.description}</p>
              <ul className="mt-7 space-y-3">
                {homeContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-white/90 sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7AE582]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 bg-white text-[#0F2A26] hover:bg-[#F7F6F2]">
                <Link href={homeContent.compliance.cta.href}>
                  {homeContent.compliance.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-72 place-items-center bg-[#16352F] p-8">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#7AE582] text-[#0F2A26]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-8 text-sm font-semibold text-[#7AE582]">Connected workflow</p>
                <p className="mt-2 text-2xl font-bold">Sale → invoice → business record</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Keep the compliance workflow close to the transaction that created it.</p>
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

      <Section data-reveal>
        <Container>
          <SectionIntro {...homeContent.product} centered />
          <div className="mt-10 sm:mt-12">
            <DashboardCarousel screens={homeContent.product.screens} />
          </div>
        </Container>
      </Section>

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
          <div className="relative overflow-hidden rounded-3xl border border-[#dce7e3] bg-white p-8 shadow-[0_24px_70px_-25px_rgba(21,40,37,0.12)] sm:p-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:p-14">
            {/* Subtle decorative top accent line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#167c70] to-transparent"
            />

            {/* Left Column: Heading, description & value pillars */}
            <div>
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{homeContent.pricing.eyebrow}</span>
              </div>

              <h2
                data-eyebrow={homeContent.pricing.eyebrow}
                className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]"
              >
                {homeContent.pricing.heading}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg max-w-xl">
                {homeContent.pricing.description}
              </p>

              {/* 3 Value Pillars */}
              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-100 pt-6 sm:grid-cols-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F2A26]">Quick Setup</p>
                  <p className="text-xs leading-relaxed text-zinc-500">Be up and running same day with guided onboarding.</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F2A26]">No Hidden Costs</p>
                  <p className="text-xs leading-relaxed text-zinc-500">Transparent monthly billing with no setup penalties.</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F2A26]">Scales With You</p>
                  <p className="text-xs leading-relaxed text-zinc-500">Add counters, registers, and branches as you expand.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium High-Converting Pricing Card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border-2 border-[#167c70]/25 bg-gradient-to-b from-[#f8fbf9] via-white to-[#f4f9f6] p-7 shadow-[0_20px_45px_-12px_rgba(22,124,112,0.12)] sm:p-8 lg:mt-0">
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
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-[#0F2A26] sm:text-5xl">
                  {homeContent.pricing.price}
                </span>
                <span className="text-sm font-semibold text-zinc-500">
                  {homeContent.pricing.cadence}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">Billed monthly &bull; Cancel or change plans anytime</p>

              {/* Bullets List */}
              <ul className="mt-6 space-y-3.5 border-t border-zinc-100 pt-6">
                {homeContent.pricing.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#167c70]/10 text-[#167c70]">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button asChild size="lg" className="group mt-7 h-12 w-full justify-center rounded-xl bg-[#0F2A26] text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#167c70]">
                <Link href={homeContent.pricing.cta.href}>
                  <span>{homeContent.pricing.cta.label}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Trust Reassurance */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-500">
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
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              
              <h2 className="text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                {homeContent.finalCta.heading.replace(/better operation$/, "")}
                <span className="mark-lime-dark">better operation</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{homeContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-[#7AE582] text-[#0F2A26] hover:bg-white">
                  <Link href={homeContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {homeContent.finalCta.primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={homeContent.finalCta.secondaryCta.href}>
                    {homeContent.finalCta.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
