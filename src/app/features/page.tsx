import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Check,
  ExternalLink,
  Printer,
  ShoppingCart,
  Store,
  Scissors,
  UserRound,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FaqDetails } from "@/components/seo/faq-details";
import { ProductScreens } from "@/components/seo/product-screens";
import { LiteYouTube } from "@/components/seo/lite-youtube";
import { HULM_DEMO_VIDEO } from "@content/data/videos";
import { screensFor } from "@content/data/product-screens";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { featuresContent as c } from "@content/pages/features";
import { pageJsonLd, seoMetadata, softwareNode } from "@/lib/seo/page-seo";
import { linksExcept, productLinks } from "@/lib/seo/site-links";

export const metadata = seoMetadata("/features/");

const coreIcons = [ShoppingCart, Barcode, UserRound, Printer, Users, BarChart3];
const tailoredIcons = [Store, UtensilsCrossed, Scissors];

const schema = pageJsonLd({
  route: "/features/",
  crumbs: [{ name: "Features", path: "/features/" }],
  node: { ...softwareNode("Hulm POS", c.hero.description), featureList: c.core.items.map((i) => i.title) },
  faq: c.faq.items,
});

export default function FeaturesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Features" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <Section data-reveal className="border-b border-gray-100 bg-[#F7F6F2] pb-16 pt-20 text-center lg:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70] mb-6">
              {c.hero.eyebrow}
            </div>
            <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#0F2A26] sm:text-4xl md:text-5xl">
              {c.hero.headline}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">{c.hero.description}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={c.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {c.hero.primaryCta.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={c.hero.secondaryCta.href}>
                  {c.hero.secondaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <ProductScreens
        screens={screensFor("/features/")}
        heading="POS software features you can see before you buy"
        description="Real screens from Hulm POS: checkout, stock and the one-login app workspace."
        topic="POS features"
      />

      <Section data-reveal className="bg-white py-20 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">{c.core.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{c.core.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {c.core.items.map((feature, idx) => {
              const Icon = coreIcons[idx];
              return (
                <div key={feature.title} className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-xs transition-all duration-300 hover:border-[#209f8f]/40 hover:shadow-md">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#209f8f]/10 text-[#146b60]">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0F2A26]">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-white pb-20 pt-0">
        <Container className="max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl">Watch the Hulm POS walkthrough</h2>
          <LiteYouTube id={HULM_DEMO_VIDEO.id} title={HULM_DEMO_VIDEO.title} />
        </Container>
      </Section>

      <Section data-reveal className="border-y border-gray-100 bg-[#F7F6F2] py-20 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">{c.tailored.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{c.tailored.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.tailored.items.map((item, idx) => {
              const Icon = tailoredIcons[idx];
              return (
                <article key={item.title} className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-7 shadow-xs">
                  <Icon className="h-6 w-6 text-[#167c70]" />
                  <h3 className="mt-4 text-lg font-semibold text-[#0F2A26]">{item.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#167c70]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.link.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#125f57]">
                    {item.link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl">{c.apps.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{c.apps.description}</p>
            <LinkChips items={linksExcept(productLinks, "/features/")} centered className="mt-6" />
            <Link href={c.apps.pricingLink.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#125f57]">
              {c.apps.pricingLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <GoogleReviewsSection />

      <Section data-reveal className="border-t border-gray-100 bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">{c.faq.heading}</h2>
          <FaqDetails items={c.faq.items} />
        </Container>
      </Section>

      <FinalCta />
    </div>
  );
}
