import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, Check, CheckCircle2, ExternalLink, ReceiptText, ShieldCheck } from "lucide-react";

import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesContent } from "@content/pages/industries";
import { pageJsonLd, seoMetadata, SITE_URL } from "@/lib/seo/page-seo";

export const metadata = seoMetadata("/industries/");

const allIndustries = [...industriesContent.priority.items, ...industriesContent.additional.items];
const schema = pageJsonLd({
  route: "/industries/",
  pageType: "CollectionPage",
  crumbs: [{ name: "Industries", path: "/industries/" }],
  faq: industriesContent.faq.items,
  extra: [
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/industries/#itemlist`,
      name: "POS systems by industry",
      itemListElement: allIndustries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.name,
        url: `${SITE_URL}/industries/${industry.slug}/`,
      })),
    },
  ],
});

const foundationIcons = [ReceiptText, Boxes, BarChart3];

function SectionIntro({ eyebrow, heading, description, centered = false }: {
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

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Industries" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <section className="relative border-b border-[#E4E2DA] bg-white py-16 sm:py-20 lg:py-24">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
                {industriesContent.hero.eyebrow}
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.8rem]">
                {industriesContent.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{industriesContent.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={industriesContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                    {industriesContent.hero.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={industriesContent.hero.secondaryCta.href}>
                    {industriesContent.hero.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {industriesContent.hero.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#167c70]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industriesContent.priority.items.slice(0, 4).map((industry, index) => (
                <Link key={industry.slug} href={`/industries/${industry.slug}/`} className={`group relative min-h-44 overflow-hidden rounded-2xl shadow-sm sm:min-h-52 ${index % 2 ? "translate-y-5" : ""}`}>
                  <Image src={industry.image} alt={`${industry.name} system by Hulm`} fill priority={index < 2} sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26]/90 via-[#0F2A26]/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-white sm:text-lg">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section data-reveal>
        <Container>
          <SectionIntro {...industriesContent.priority} centered />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industriesContent.priority.items.map((industry) => (
              <article key={industry.slug} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="grid h-full sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-56 sm:min-h-full">
                    <Image src={industry.image} alt={`${industry.name} system by Hulm`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 28vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3 className="text-2xl font-bold text-[#0F2A26]">{industry.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{industry.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm font-medium text-zinc-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#167c70]" />{highlight}</li>
                      ))}
                    </ul>
                    <Link href={`/industries/${industry.slug}/`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#105f56]">
                      Explore {industry.name}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#0F2A26] text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{industriesContent.foundation.heading}</h2>
              <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">{industriesContent.foundation.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {industriesContent.foundation.items.map((item, index) => {
                const Icon = foundationIcons[index];
                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#7AE582] text-[#0F2A26]"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#f7faf9]">
        <Container>
          <SectionIntro {...industriesContent.additional} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industriesContent.additional.items.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}/`} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <Image src={industry.image} alt={`${industry.name} system by Hulm`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4"><h3 className="text-xl font-bold text-[#0F2A26]">{industry.name}</h3><ArrowRight className="h-5 w-5 shrink-0 text-[#167c70] transition-transform group-hover:translate-x-1" /></div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-[#bfe2dc] bg-[#eaf7f4] p-7 sm:p-10 lg:p-12">
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2A26] text-[#7AE582]"><ShieldCheck className="h-7 w-7" /></div>
              <div className="max-w-3xl">
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">{industriesContent.compliance.heading}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{industriesContent.compliance.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild><Link href={industriesContent.compliance.primaryCta.href}>{industriesContent.compliance.primaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild variant="outline" className="border-[#25a18e]/35 bg-white"><Link href={industriesContent.compliance.secondaryCta.href}>{industriesContent.compliance.secondaryCta.label}</Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={industriesContent.faq.eyebrow} heading={industriesContent.faq.heading} />
          <FaqDetails items={industriesContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{industriesContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{industriesContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#0F2A26] hover:bg-[#F7F6F2]"><Link href={industriesContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">{industriesContent.finalCta.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={industriesContent.finalCta.secondaryCta.href}>{industriesContent.finalCta.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
