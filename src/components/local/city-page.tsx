import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ArrowRight, CheckCircle2, ExternalLink, MapPin, ReceiptText, Sparkles } from "lucide-react";

import { FinalCta } from "@/components/home/final-cta";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { ProductScreens } from "@/components/seo/product-screens";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { cityLinks, type CityPage } from "@/content/pages/citySeo";
import { contactInfo } from "@/lib/contact-info";
import { pageJsonLd, softwareNode, SITE_URL } from "@/lib/seo/page-seo";
import { industryLinks, linksExcept } from "@/lib/seo/site-links";
import { productScreens } from "@content/data/product-screens";

const screens = [productScreens["pos-checkout-screen"], productScreens["inventory-stock-screen"], productScreens["sales-orders-screen"]];

export function cityJsonLd(page: CityPage) {
  return pageJsonLd({
    route: page.path,
    name: page.title,
    description: page.description,
    crumbs: [{ name: `POS software in ${page.city}`, path: page.path }],
    node: {
      ...softwareNode(`Hulm POS for ${page.city}`, page.description),
      areaServed: { "@type": "City", name: page.city, containedInPlace: { "@type": "Country", name: "Pakistan" } },
    },
    faq: page.faqs,
    extra: [{ "@type": "Place", "@id": `${SITE_URL}${page.path}#city`, name: `${page.city}, ${page.region}, Pakistan` }],
  });
}

export function CityLandingPage({ page }: { page: CityPage }) {
  const stories = page.caseStudies
    .map((slug) => caseStudiesData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="bg-white">
      <JsonLd data={cityJsonLd(page)} />
      <Breadcrumbs items={[{ name: `POS software in ${page.city}` }]} className="border-b border-[#E4E2DA]/70 bg-white" />

      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
            <span>{page.eyebrow}</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.6rem]">
            {page.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">{page.intro}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold">
              <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
                Start 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-[#F7F6F2] h-12 px-6 text-sm font-semibold">
              <Link href="/book-a-demo/">Book a free demo</Link>
            </Button>
          </div>
        </Container>
      </section>

      <Section data-reveal className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Built for Local Business
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{page.segmentsHeading}</h2>
            <p className="text-base leading-relaxed text-zinc-600 font-normal">{page.segmentsIntro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {page.segments.map((s) => (
              <article key={s.title} className="lift flex flex-col rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-7 shadow-xs">
                <h3 className="text-xl font-bold text-[#0F2A26]">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-6 text-zinc-600 font-normal">{s.text}</p>
                <Link href={s.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#105f56]">
                  {s.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="border-y border-[#E4E2DA] bg-[#F7F6F2] py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <ReceiptText className="h-4 w-4" aria-hidden="true" /> Tax and compliance
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{page.taxHeading}</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-zinc-700 font-normal">
            {page.taxParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link href="/fbr-integrated-pos-pakistan/" className="inline-flex items-center gap-1.5 font-bold text-[#167c70] hover:text-[#105f56]">
              How FBR integrated POS works <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      <ProductScreens screens={screens} heading={`The Hulm POS workspace ${page.city} teams use`} topic={`POS software in ${page.city}`} />

      {stories.length ? (
        <Section data-reveal className="py-16 md:py-20 bg-white">
          <Container>
            <div className="text-center mb-10 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
                Customer Proof
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{page.city} businesses running on Hulm</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((s) => (
                <article key={s.slug} className="lift flex flex-col rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                    {s.industry} · {s.location}
                  </span>
                  <h3 className="mt-2.5 text-xl font-bold text-[#0F2A26]">{s.client}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-zinc-600 font-normal">{s.excerpt}</p>
                  <Link href={`/pos-case-studies/${s.slug}/`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#105f56]">
                    Read the {s.client} story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section data-reveal className={stories.length ? "border-t border-[#E4E2DA] bg-[#F7F6F2] py-16 md:py-20" : "py-16 md:py-20 bg-[#F7F6F2]"}>
        <Container>
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Onboarding Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{page.setupHeading}</h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.setupSteps.map((step, i) => (
              <li key={step.title} className="lift rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-xs">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">{i + 1}</span>
                <h3 className="mt-5 font-bold text-[#0F2A26] text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 font-normal">{step.text}</p>
              </li>
            ))}
          </ol>
          {!stories.length ? (
            <p className="mt-8 text-center text-sm text-zinc-600">
              <CheckCircle2 className="mr-1 inline h-4 w-4 text-[#167c70]" aria-hidden="true" />
              See how other Pakistani businesses use Hulm in our{" "}
              <Link href="/pos-case-studies/" className="font-semibold text-[#167c70] underline underline-offset-2">
                POS customer stories
              </Link>
              .
            </p>
          ) : null}
        </Container>
      </Section>

      <Section data-reveal className="py-16 md:py-20 bg-white border-t border-[#E4E2DA]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{page.faqHeading}</h2>
            <LinkChips heading={`POS by industry in ${page.city}`} items={industryLinks.slice(0, 8)} className="mt-8" />
            <LinkChips heading="Other cities" items={linksExcept(cityLinks, page.path)} className="mt-6" />
          </div>
          <FaqDetails items={page.faqs} />
        </Container>
      </Section>

      <FinalCta
        heading={page.ctaHeading}
        subheading={page.ctaSubheading}
        badge={`POS software for ${page.city}`}
        points={["FBR-integrated invoicing available in Pakistan", "Inventory, purchasing and branch reports included", "Onboarding support on WhatsApp and phone"]}
      />
    </div>
  );
}
