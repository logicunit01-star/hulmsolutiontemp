import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, Check, CheckCircle2, ExternalLink, ReceiptText, ShieldCheck, Sparkles } from "lucide-react";

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
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Industries" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                <span>{industriesContent.hero.eyebrow}</span>
              </div>
              <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
                {industriesContent.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600">{industriesContent.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold">
                  <Link href={industriesContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
                    {industriesContent.hero.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-[#F7F6F2] h-12 px-6 text-sm font-semibold">
                  <Link href={industriesContent.hero.secondaryCta.href}>
                    {industriesContent.hero.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-xs sm:text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {industriesContent.hero.proof.map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#167c70]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
              />
              <div className="grid grid-cols-2 gap-4">
                {industriesContent.priority.items.slice(0, 4).map((industry, index) => (
                  <Link key={industry.slug} href={`/industries/${industry.slug}/`} className={`group relative min-h-44 overflow-hidden rounded-2xl border border-[#E4E2DA] shadow-sm sm:min-h-52 ${index % 2 ? "translate-y-5" : ""}`}>
                    <Image src={industry.image} alt={`${industry.name} system by Hulm`} fill priority={index < 2} sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A26]/90 via-[#0F2A26]/20 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-white sm:text-lg">{industry.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section data-reveal className="bg-[#FAF9F5] py-16 sm:py-20 lg:py-24 border-y border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
              <span>{industriesContent.priority.eyebrow}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl text-balance">
              {industriesContent.priority.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              {industriesContent.priority.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industriesContent.priority.items.map((industry) => (
              <article
                key={industry.slug}
                className="group lift flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-xs transition-all duration-300 hover:border-[#167c70]/50 hover:shadow-xl"
              >
                <div>
                  {/* Panoramic Top Image */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} system by Hulm`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                    {"tag" in industry && (
                      <span className="absolute top-3.5 left-3.5 inline-flex items-center rounded-full bg-[#0F2A26]/85 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20 shadow-xs">
                        {String(industry.tag)}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors leading-snug">
                      {industry.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                      {industry.description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="my-5 border-t border-zinc-100" />
                    <ul className="space-y-2.5">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#167c70]/12 text-[#167c70]">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </span>
                          <span className="font-medium text-zinc-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                  <Link
                    href={`/industries/${industry.slug}/`}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-[#F7F6F2] px-4 py-3 text-sm font-bold text-[#167c70] transition-all duration-200 group-hover:bg-[#167c70] group-hover:text-white"
                  >
                    <span>Explore {industry.name.replace(/ POS system$/, "")}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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

      <Section data-reveal className="bg-[#F7F6F2] border-y border-[#E4E2DA]">
        <Container>
          <SectionIntro {...industriesContent.additional} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industriesContent.additional.items.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}/`} className="lift group overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-sm transition hover:border-[#167c70]">
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
          <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2A26] text-[#7AE582] shadow-sm"><ShieldCheck className="h-7 w-7" /></div>
              <div className="max-w-3xl">
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">{industriesContent.compliance.heading}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{industriesContent.compliance.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm"><Link href={industriesContent.compliance.primaryCta.href}>{industriesContent.compliance.primaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild variant="outline" className="rounded-full border-[#E4E2DA] bg-white hover:bg-[#F7F6F2]"><Link href={industriesContent.compliance.secondaryCta.href}>{industriesContent.compliance.secondaryCta.label}</Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionIntro eyebrow={industriesContent.faq.eyebrow} heading={industriesContent.faq.heading} />
          <FaqDetails items={industriesContent.faq.items} />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16 shadow-xl border border-[#167c70]/20">
            <div className="relative mx-auto max-w-3xl">
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{industriesContent.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{industriesContent.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#7AE582] text-[#0F2A26] hover:bg-[#8ef095] font-semibold shadow-sm"><Link href={industriesContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">{industriesContent.finalCta.primaryCta.label}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={industriesContent.finalCta.secondaryCta.href}>{industriesContent.finalCta.secondaryCta.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
