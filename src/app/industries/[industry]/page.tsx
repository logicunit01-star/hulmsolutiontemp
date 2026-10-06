import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import { FaqDetails, type FaqDetailsItem } from "@/components/seo/faq-details";
import { ProductScreens } from "@/components/seo/product-screens";
import { CaseStudyCard } from "@/components/seo/case-study-card";
import { screensFor } from "@content/data/product-screens";
import { JsonLd } from "@/components/seo/json-ld";
import { cityLinks } from "@/content/pages/citySeo";
import { LinkChips } from "@/components/seo/link-chips";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesData } from "@/content/pages/industriesData";
import { priorityIndustriesData } from "@/content/pages/priorityIndustriesData";
import { industrySeo } from "@/content/pages/industrySeo";
import { pageJsonLd, seoMetadata, softwareNode } from "@/lib/seo/page-seo";
import { industryLinks, linksExcept } from "@/lib/seo/site-links";

type Props = { params: Promise<{ industry: string }> };

const allIndustriesData = { ...industriesData, ...priorityIndustriesData };
const priorityIndustrySlugs = [
  "retail-store",
  "restaurant-pos",
  "pharmacy-store",
  "bakery-pos-system",
  "salon-pos",
  "clothing-store",
];

export async function generateStaticParams() {
  return Object.keys(allIndustriesData).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props) {
  const { industry } = await params;
  const data = allIndustriesData[industry];
  if (!data) return { title: "Industry Not Found | Hulm Solutions" };
  // Live WordPress title + meta description (they carry the current rankings).
  return seoMetadata(`/industries/${data.slug}/`, { ogAlt: `${data.name} POS system by Hulm` });
}

const relatedProducts = [
  { label: "Inventory management", href: "/inventory-management/" },
  { label: "Customer management", href: "/customer-management/" },
  { label: "Purchase orders", href: "/purchase-orders/" },
  { label: "Reporting", href: "/reporting-module/" },
  { label: "Mobile POS", href: "/mobile-pos/" },
  { label: "FBR integration", href: "/fbr-integrated-pos-pakistan/" },
  { label: "Pricing", href: "/pricing/" },
];

function SectionIntro({ eyebrow, heading, description, centered = false }: {
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

export default async function IndustrySubpage({ params }: Props) {
  const { industry } = await params;
  const data = allIndustriesData[industry];

  if (!data) notFound();

  const seo = industrySeo[data.slug];
  const h2 = seo?.h2 ?? {};
  const route = `/industries/${data.slug}/`;
  const faqItems: FaqDetailsItem[] = [
    ...(seo?.faqs ?? []),
    ...data.faqs.map((f) => ({ q: f.question, a: f.answer })),
  ]
    .filter((item, index, list) => list.findIndex((x) => x.q.toLowerCase() === item.q.toLowerCase()) === index)
    .slice(0, 8);
  const schema = pageJsonLd({
    route,
    crumbs: [
      { name: "Industries", path: "/industries/" },
      { name: `${data.name} POS`, path: route },
    ],
    node: softwareNode(seo?.schemaName ?? `Hulm ${data.name} POS`, seo?.intro ?? data.hero.description),
    faq: faqItems,
  });

  const uniqueIndustries = Object.values(allIndustriesData).filter(
    (item, index, items) => items.findIndex((candidate) => candidate.slug === item.slug) === index
  );
  const otherIndustries = [
    ...priorityIndustrySlugs
      .map((slug) => uniqueIndustries.find((item) => item.slug === slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    ...uniqueIndustries.filter((item) => !priorityIndustrySlugs.includes(item.slug)),
  ]
    .filter((item) => item.slug !== data.slug)
    .slice(0, 4);

  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <section className="relative border-b border-[#E4E2DA] bg-white py-14 sm:py-18 lg:py-22">
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="transition hover:text-[#167c70]">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/industries/" className="transition hover:text-[#167c70]">Industries</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-[#0F2A26]">{data.name}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
                {data.hero.badge}
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.7rem]">{seo?.h1 ?? data.hero.headline}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{seo?.intro ?? data.hero.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={data.hero.primaryCtaLink} target={data.hero.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.hero.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>
                    {data.hero.primaryCtaText}
                    {data.hero.primaryCtaLink.startsWith("http") ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={data.hero.secondaryCtaLink}>{data.hero.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white bg-white shadow-[0_28px_70px_-38px_rgba(21,63,57,0.6)] sm:min-h-[430px]">
              <Image src={data.image} alt={`${data.name} POS system by Hulm`} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2A26]/90 to-transparent p-7 pt-24 text-white">
                <p className="text-sm font-semibold text-[#7AE582]">Connected workflow</p>
                <p className="mt-2 max-w-md text-lg font-semibold">Sales, stock and daily activity in one operating view.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProductScreens
        screens={screensFor(route)}
        heading={`What the ${seo?.primaryKeyword ?? `${data.name} POS system`} looks like in Hulm`}
        description="Real screens from Hulm POS. Your setup is configured around your products, branches and team."
        topic={`${data.name} POS`}
      />

      {data.overview ? (
        <Section data-reveal>
          <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionIntro eyebrow="Workflow overview" heading={h2.overview ?? data.overview.heading} description={data.overview.description} />
            <div className="grid gap-4 sm:grid-cols-2">
              {data.overview.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#E4E2DA] bg-[#f8fbfa] p-5 text-sm font-semibold leading-6 text-[#0F2A26]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#167c70]" />
                  {point}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.problems?.items.length ? (
        <Section data-reveal className="bg-[#f7faf9]">
          <Container>
            <SectionIntro eyebrow="Operational friction" heading={h2.problems ?? data.problems.heading} centered />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {data.problems.items.map((item) => (
                <article key={item.solutionTitle} className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <div className="flex items-start gap-3 text-sm leading-6 text-zinc-600">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#c96f4e]" />
                    <p>{item.problem}</p>
                  </div>
                  <div className="my-6 h-px bg-zinc-100" />
                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#167c70]" />
                    <div>
                      <h3 className="font-bold text-[#0F2A26]">{item.solutionTitle}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{item.solution}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.features?.items.length ? (
        <Section data-reveal>
          <Container>
            <SectionIntro eyebrow="Capabilities" heading={h2.features ?? data.features.heading} description="The final configuration depends on your plan, processes, devices and rollout scope." centered />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.items.map((feature, index) => (
                <article key={feature.title} className="rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F6F2] text-sm font-bold text-[#167c70]">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F2A26]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.useCases?.cases.length ? (
        <Section data-reveal className="bg-[#0F2A26] text-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold text-[#7AE582]">Common setups</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{h2.useCases ?? data.useCases.heading}</h2>
                <p className="mt-5 text-base leading-7 text-white/65">Start with the operating model closest to yours, then adjust the details during implementation.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {data.useCases.cases.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {data.fbr?.points.length ? (
        <Section data-reveal>
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-[#bfe2dc] bg-[#eaf7f4] p-7 sm:p-10 lg:p-12">
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2A26] text-[#7AE582]"><ShieldCheck className="h-6 w-6" /></div>
                  <p className="mt-6 text-sm font-bold text-[#167c70]">FBR integration support</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26]">{h2.fbr ?? data.fbr.heading}</h2>
                  {data.fbr.description ? <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{data.fbr.description}</p> : null}
                  <Link href="/fbr-integrated-pos-pakistan/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70]">Review FBR integration <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="grid gap-4">
                  {data.fbr.points.map((point) => (
                    <article key={point.title} className="rounded-2xl border border-white/70 bg-white/75 p-5">
                      <h3 className="font-bold text-[#0F2A26]">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{point.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {data.whoCanBenefit?.items.length || data.benefits?.items.length ? (
        <Section data-reveal className="bg-[#F7F6F2]">
          <Container className="grid gap-6 lg:grid-cols-2">
            {data.whoCanBenefit?.items.length ? (
              <article className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold text-[#167c70]">Who it can support</p>
                <h2 className="mt-3 text-2xl font-bold text-[#0F2A26]">{h2.who ?? data.whoCanBenefit.heading}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.whoCanBenefit.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-zinc-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#167c70]" />{item}</li>)}
                </ul>
              </article>
            ) : null}
            {data.benefits?.items.length ? (
              <article className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-bold text-[#167c70]">Expected outcomes</p>
                <h2 className="mt-3 text-2xl font-bold text-[#0F2A26]">{h2.benefits ?? data.benefits.heading}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {data.benefits.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-zinc-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#167c70]" />{item}</li>)}
                </ul>
              </article>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <CaseStudyCard route={route} />

      {faqItems.length ? (
        <Section data-reveal>
          <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <SectionIntro eyebrow="Setup questions" heading={seo?.faqHeading ?? `${data.name} POS FAQs`} description="These answers set expectations before plan selection and implementation." />
              <LinkChips heading="Works with" items={relatedProducts} className="mt-8" />
              {seo?.blog ? (
                <Link href={seo.blog.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#125f57]">
                  Read: {seo.blog.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
            <FaqDetails items={faqItems} />
          </Container>
        </Section>
      ) : null}

      <Section data-reveal className="bg-[#f7faf9]">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionIntro eyebrow="Explore industries" heading="More POS systems by industry" />
            <Link href="/industries/" className="inline-flex items-center gap-2 text-sm font-bold text-[#167c70]">View all industries <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((item) => (
              <Link key={item.slug} href={`/industries/${item.slug}/`} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#25a18e]/45 hover:shadow-lg">
                <div className="relative h-36"><Image src={item.image} alt={`${item.name} POS system`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
                <div className="flex items-center justify-between gap-3 p-5"><h3 className="font-bold text-[#0F2A26]">{item.name}</h3><ArrowRight className="h-4 w-4 text-[#167c70] transition group-hover:translate-x-1" /></div>
              </Link>
            ))}
          </div>
          <LinkChips items={linksExcept(industryLinks, route)} className="mt-8" />
          <LinkChips heading="POS software in your city" items={cityLinks} className="mt-6" />
        </Container>
      </Section>

      <Section data-reveal>
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold text-[#7AE582]">Plan the right rollout</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{data.finalCta.heading}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{data.finalCta.subheading || data.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-[#0F2A26] hover:bg-[#F7F6F2]"><Link href={data.finalCta.primaryCtaLink} target={data.finalCta.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.finalCta.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>{data.finalCta.primaryCtaText}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={data.finalCta.secondaryCtaLink}>{data.finalCta.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

