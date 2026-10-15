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
  Sparkles,
  Store,
  Scissors,
  UserRound,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FaqDetails } from "@/components/seo/faq-details";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { homeContent } from "@content/pages/home";
import { LiteYouTube } from "@/components/seo/lite-youtube";
import { HULM_DEMO_VIDEO } from "@content/data/videos";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { featuresContent as c } from "@content/pages/features";
import { pageJsonLd, seoMetadata, softwareNode } from "@/lib/seo/page-seo";
import { AddMoreAppsSection } from "@/components/features/AddMoreAppsSection";

export const metadata = seoMetadata("/features/");

import { ComprehensiveFeaturesExplorer } from "@/components/features/ComprehensiveFeaturesExplorer";

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
      <Section data-reveal className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-14 pb-16 text-center sm:pt-18 lg:pt-22 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
              <span>{c.hero.eyebrow}</span>
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#0F2A26] sm:text-4xl lg:text-[44px]">
              {c.hero.headline.replace(/\s*grow faster$/, "")}{" "}
              <span className="mark-lime">grow faster</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-zinc-600 sm:text-lg">{c.hero.description}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={c.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {c.hero.primaryCta.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href={c.hero.secondaryCta.href}>
                  {c.hero.secondaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="py-14 sm:py-18 lg:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[34px] lg:leading-[1.22]">
              POS software features you can see before you buy
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Real screens from Hulm POS: checkout, stock and the one-login app workspace.
            </p>
          </div>
          <div className="mt-8 sm:mt-10">
            <DashboardCarousel screens={homeContent.product.screens} />
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2] py-14 sm:py-18 lg:py-20 border-y border-[#E4E2DA]">
        <Container>
          <ComprehensiveFeaturesExplorer
            eyebrow={c.core.eyebrow}
            heading={c.core.heading}
            description={c.core.description}
            modules={c.core.items}
          />
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="text-center mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
              <span>Video Demonstration</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">Watch the Hulm POS walkthrough</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#0F2A26] p-2 shadow-xl">
            <LiteYouTube id={HULM_DEMO_VIDEO.id} title={HULM_DEMO_VIDEO.title} />
          </div>
        </Container>
      </Section>

      <Section data-reveal className="border-y border-[#E4E2DA] bg-[#FAF9F5] py-20 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
              <span>Industry Workflows</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">{c.tailored.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">{c.tailored.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.tailored.items.map((item, idx) => {
              const Icon = tailoredIcons[idx];
              return (
                <article key={item.title} className="lift flex flex-col rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F6F2] text-[#167c70] mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A26]">{item.title}</h3>
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

      <Section data-reveal className="bg-white py-10 sm:py-12 lg:py-14 border-t border-[#E4E2DA]">
        <Container>
          <AddMoreAppsSection
            heading={c.apps.heading}
            description={c.apps.description}
            pricingLabel={c.apps.pricingLink.label}
            pricingHref={c.apps.pricingLink.href}
          />
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
