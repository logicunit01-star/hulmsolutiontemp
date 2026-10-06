import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
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
  Globe2,
  Layers3,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
} from "lucide-react";

import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { productContent } from "@content/pages/product";

export const metadata: Metadata = newPageMetadata({
  path: "/apps/",
  title: productContent.seo.title,
  description: productContent.seo.description,
});

const schema = pageJsonLd({
  route: "/apps/",
  name: productContent.seo.title,
  description: productContent.seo.description,
  pageType: "CollectionPage",
  crumbs: [{ name: "Product", path: "/apps/" }],
  faq: productContent.faq.items,
});

const workflowIcons = [ReceiptText, Boxes, Building2, BarChart3];
const capabilityIcons = [ShoppingCart, Boxes, ClipboardList, Users, Layers3, BarChart3];
const extensionIcons = [Smartphone, Store, Globe2];

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
      <p className="mb-4 text-sm font-bold text-[#167c70]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Product" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <section className="relative border-b border-[#E4E2DA] bg-white py-14 sm:py-18 lg:py-24">
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
              {productContent.hero.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.8rem]">
              {productContent.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">{productContent.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={productContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                  {productContent.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={productContent.hero.secondaryCta.href}>
                  {productContent.hero.secondaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {productContent.hero.proof.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-4">
            <div>
              <Image
                src="/images/home/dashboard/hulm-solutions-products-sales-order.webp"
                alt="Hulm POS product catalogue screen"
                width={1197}
                height={688}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="h-auto w-full rounded-xl border border-zinc-200 shadow-[0_40px_80px_-40px_rgba(21,40,37,0.45)]"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section data-reveal>
        <Container>
          <SectionIntro {...productContent.workflow} centered />
          <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-[#bcd9d4] xl:block" aria-hidden="true" />
            {productContent.workflow.steps.map((step, index) => {
              const Icon = workflowIcons[index];
              return (
                <article key={step.title} className="relative rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F6F2] text-[#167c70] ring-8 ring-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.16em] text-zinc-500">{step.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A26]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container>
          <SectionIntro {...productContent.capabilities} centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productContent.capabilities.items.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={capability.title} className="flex h-full flex-col rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F7F6F2] text-[#167c70]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F2A26]">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{capability.description}</p>
                  <ul className="mt-5 space-y-2">
                    {capability.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-zinc-700">
                        <Check className="h-4 w-4 shrink-0 text-[#167c70]" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link href={capability.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]">
                    {capability.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <SectionIntro {...productContent.workspace} />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {productContent.workspace.screens.map((screen, index) => (
              <article key={screen.title} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#edf7f5] p-2 shadow-sm">
                  <Image
                    src={screen.image}
                    alt={`Hulm POS screen: ${screen.title}`}
                    width={1197}
                    height={688}
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="h-auto w-full rounded-2xl"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0F2A26]">{screen.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{screen.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#0F2A26] text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold text-[#7AE582]">{productContent.extensions.eyebrow}</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{productContent.extensions.heading}</h2>
              <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">{productContent.extensions.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {productContent.extensions.items.map((extension, index) => {
                const Icon = extensionIcons[index];
                return (
                  <article key={extension.title} className="flex min-h-64 flex-col rounded-2xl border border-white/15 bg-white/8 p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#7AE582] text-[#0F2A26]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">{extension.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-white/65">{extension.description}</p>
                    <Link href={extension.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7AE582] hover:text-white">
                      {extension.linkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="grid overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#F7F6F2] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold text-[#167c70]">{productContent.compliance.eyebrow}</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">{productContent.compliance.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">{productContent.compliance.description}</p>
              <ul className="mt-7 space-y-3">
                {productContent.compliance.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-700 sm:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href={productContent.compliance.cta.href}>
                  {productContent.compliance.cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid min-h-72 place-items-center bg-[#16352F] p-8">
              <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 p-7 text-white backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#7AE582] text-[#0F2A26]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-8 text-sm font-semibold text-[#7AE582]">Part of the POS workflow</p>
                <p className="mt-2 text-2xl font-bold text-white">Transaction data stays connected</p>
                <p className="mt-3 text-sm leading-6 text-white/65">Keep the relevant invoice record with the sale that created it.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={productContent.faq.eyebrow} heading={productContent.faq.heading} />
          <FaqDetails items={productContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold text-[#7AE582]">{productContent.finalCta.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{productContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{productContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#0F2A26] hover:bg-[#F7F6F2]">
                  <Link href={productContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {productContent.finalCta.primaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={productContent.finalCta.secondaryCta.href}>
                    {productContent.finalCta.secondaryCta.label}
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
