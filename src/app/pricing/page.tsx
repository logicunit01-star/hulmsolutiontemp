import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers3,
  ReceiptText,
  Users,
  Workflow,
  X,
} from "lucide-react";

import { FaqDetails } from "@/components/seo/faq-details";
import { ClientLogos } from "@/components/home/client-logos";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { pricingContent } from "@content/pages/pricing";
import { pageJsonLd, seoMetadata, SITE_URL } from "@/lib/seo/page-seo";

export const metadata = seoMetadata("/pricing/");

const pricedPlans = pricingContent.plans.filter((plan) => plan.price.startsWith("PKR"));
const schema = pageJsonLd({
  route: "/pricing/",
  crumbs: [{ name: "Pricing", path: "/pricing/" }],
  node: {
    "@type": "SoftwareApplication",
    name: "Hulm POS",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Point of sale software",
    operatingSystem: "Web",
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: pricedPlans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} plan`,
      description: `${plan.capacity}. ${plan.summary}`,
      price: plan.price.replace(/[^0-9]/g, ""),
      priceCurrency: "PKR",
      url: `${SITE_URL}/pricing/`,
      availability: "https://schema.org/InStock",
    })),
  },
  faq: pricingContent.faq.items,
});

const guidanceIcons = [Users, Workflow, ReceiptText];

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
      <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-[#0F2A26]">{value}</span>;
  }

  return value ? (
    <Check className="mx-auto h-5 w-5 text-[#167c70]" aria-label="Included" />
  ) : (
    <X className="mx-auto h-5 w-5 text-zinc-300" aria-label="Not included" />
  );
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Pricing" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <section className="relative border-b border-[#E4E2DA] bg-white py-16 sm:py-20 lg:py-24">
        <Container className="relative text-center">
          <div className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
            {pricingContent.hero.eyebrow}
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.8rem]">
            {pricingContent.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{pricingContent.hero.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={pricingContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                {pricingContent.hero.primaryCta.label}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={pricingContent.hero.secondaryCta.href}>
                {pricingContent.hero.secondaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {pricingContent.hero.proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section data-reveal className="pt-10 md:pt-14 lg:pt-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingContent.plans.map((plan) => (
              <article
                key={plan.name}
                data-track-location={`pricing_plan_${plan.name.toLowerCase()}`}
                className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-[#25a18e] bg-[#f2fbf9] shadow-[0_22px_60px_-34px_rgba(32,159,143,0.65)] ring-1 ring-[#25a18e]/20"
                    : "border-zinc-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#167c70] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    For growing teams
                  </span>
                ) : null}
                <div className={plan.highlighted ? "pt-3" : ""}>
                  <p className="text-sm font-semibold text-[#167c70]">{plan.name}</p>
                  <h2 className="mt-2 min-h-14 text-xl font-bold leading-7 text-[#0F2A26]">{plan.audience}</h2>
                  <p className="mt-3 min-h-18 text-sm leading-6 text-zinc-600">{plan.summary}</p>
                </div>

                <div className="mt-6 border-y border-zinc-200/80 py-6">
                  <p className="text-3xl font-bold tracking-tight text-[#0F2A26]">
                    {plan.price}
                    <span className="ml-2 text-sm font-medium text-zinc-500">{plan.cadence}</span>
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-zinc-700">
                    <Building2 className="h-4 w-4 text-[#167c70]" />
                    {plan.capacity}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#167c70]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" variant={plan.highlighted ? "default" : "outline"} className="mt-8 w-full">
                  <Link
                    href={plan.cta.href}
                    target={plan.cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={plan.cta.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {plan.cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-zinc-500">
            Prices are shown in PKR. Confirm the billing schedule, applicable taxes, optional services and final payable amount with Hulm before purchase.
            Subscriptions follow our{" "}
            <Link href="/terms-and-conditions/" className="font-medium text-[#167c70] underline-offset-2 hover:underline">terms and conditions</Link>.
          </p>
          <LinkChips heading={pricingContent.included.heading} items={pricingContent.included.links} centered className="mt-10" />
        </Container>
      </Section>

      <ClientLogos heading="Businesses that run on Hulm" />

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...pricingContent.comparison} centered />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E4E2DA] bg-white shadow-sm">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">Comparison of Hulm POS plans</caption>
              <thead>
                <tr className="border-b border-zinc-200 bg-[#f8fbfa]">
                  <th className="px-6 py-5 text-sm font-bold text-[#0F2A26]">Plan capability</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#0F2A26]">Starter</th>
                  <th className="bg-[#eaf7f4] px-5 py-5 text-center text-sm font-bold text-[#167c70]">Growth</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#0F2A26]">Business</th>
                  <th className="px-5 py-5 text-center text-sm font-bold text-[#0F2A26]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingContent.comparison.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-100 last:border-0">
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-zinc-700">{row.feature}</th>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.starter} /></td>
                    <td className="bg-[#f5fbf9] px-5 py-4 text-center"><ComparisonValue value={row.growth} /></td>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.business} /></td>
                    <td className="px-5 py-4 text-center"><ComparisonValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-zinc-500">Swipe horizontally on smaller screens to compare every plan.</p>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <SectionIntro {...pricingContent.extras} centered />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F7F6F2] text-[#167c70]">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F2A26]">Capacity and capability add-ons</h3>
                  <p className="mt-1 text-sm text-zinc-500">Where not already included in your plan</p>
                </div>
              </div>
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {pricingContent.extras.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-t border-zinc-100 py-4 text-sm">
                    <dt className="font-medium text-zinc-700">{item.name}</dt>
                    <dd className="shrink-0 font-bold text-[#0F2A26]">{item.price}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-[#0F2A26] p-6 text-white shadow-sm sm:p-8">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#7AE582] text-[#0F2A26]">
                <ReceiptText className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Optional onboarding services</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">Standard account setup is separate from these hands-on services.</p>
              <dl className="mt-6">
                {pricingContent.extras.services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between gap-4 border-t border-white/10 py-4 text-sm">
                    <dt className="font-medium text-white/75">{service.name}</dt>
                    <dd className="shrink-0 font-bold text-white">{service.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...pricingContent.guidance} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingContent.guidance.items.map((item, index) => {
              const Icon = guidanceIcons[index];
              return (
                <article key={item.title} className="rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F6F2] text-[#167c70]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-[13px] font-bold text-zinc-500">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-[#0F2A26]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={pricingContent.faq.eyebrow} heading={pricingContent.faq.heading} />
          <FaqDetails items={pricingContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal className="pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{pricingContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{pricingContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#0F2A26] hover:bg-[#F7F6F2]">
                  <Link href={pricingContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {pricingContent.finalCta.primaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={pricingContent.finalCta.secondaryCta.href}>
                    {pricingContent.finalCta.secondaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
