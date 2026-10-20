import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Barcode,
  BellRing,
  Boxes,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileSpreadsheet,
  LayoutDashboard,
  Lightbulb,
  Printer,
  Receipt,
  RefreshCw,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Tags,
  Users,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

import { FaqDetails, type FaqDetailsItem } from "@/components/seo/faq-details";
import { ProductScreens } from "@/components/seo/product-screens";
import { screensFor } from "@content/data/product-screens";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { CaseStudyCard } from "@/components/seo/case-study-card";
import { homeContent } from "@content/pages/home";
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

function getFeatureIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("dashboard") || t.includes("pos")) return LayoutDashboard;
  if (t.includes("sales") || t.includes("order") || t.includes("history") || t.includes("bill") || t.includes("receipt")) return Receipt;
  if (t.includes("customer")) return Users;
  if (t.includes("product") || t.includes("category") || t.includes("variant") || t.includes("menu")) return Tags;
  if (t.includes("inventory") || t.includes("stock") || t.includes("ingredient")) return Boxes;
  if (t.includes("alert") || t.includes("low-stock")) return BellRing;
  if (t.includes("import") || t.includes("export") || t.includes("file")) return FileSpreadsheet;
  if (t.includes("hardware") || t.includes("printer") || t.includes("scanner")) return Printer;
  if (t.includes("staff") || t.includes("permission") || t.includes("access") || t.includes("user")) return ShieldCheck;
  if (t.includes("ticket") || t.includes("kitchen")) return UtensilsCrossed;
  if (t.includes("table")) return Utensils;
  return Sparkles;
}

function getDynamicIcon(name?: string, fallback = Sparkles) {
  if (!name) return fallback;
  const n = name.toLowerCase();
  if (n.includes("barcode") || n.includes("scan")) return Barcode;
  if (n.includes("box") || n.includes("inventor") || n.includes("stock") || n.includes("warehous") || n.includes("ingredient") || n.includes("cable")) return Boxes;
  if (n.includes("receipt") || n.includes("order") || n.includes("return") || n.includes("bill") || n.includes("deposit")) return Receipt;
  if (n.includes("shield") || n.includes("cash") || n.includes("shift") || n.includes("warrant") || n.includes("reconcil") || n.includes("secur")) return ShieldCheck;
  if (n.includes("printer") || n.includes("ticket") || n.includes("hardware")) return Printer;
  if (n.includes("tag") || n.includes("variant") || n.includes("size") || n.includes("style")) return Tags;
  if (n.includes("sheet") || n.includes("file") || n.includes("suppli") || n.includes("purchas") || n.includes("deliver")) return FileSpreadsheet;
  if (n.includes("utensil") || n.includes("drink") || n.includes("modifier") || n.includes("recipe")) return UtensilsCrossed;
  if (n.includes("user") || n.includes("customer")) return Users;
  return fallback;
}

function getFeatureTag(title: string) {
  const t = title.toLowerCase();
  if (t.includes("dashboard")) return "COUNTER POS";
  if (t.includes("sales") || t.includes("history")) return "AUDIT TRAIL";
  if (t.includes("customer")) return "CRM & RECORDS";
  if (t.includes("product") || t.includes("category")) return "CATALOGUE";
  if (t.includes("inventory")) return "STOCK CONTROL";
  if (t.includes("alert")) return "AUTOMATED";
  if (t.includes("import")) return "CSV / EXCEL";
  if (t.includes("hardware")) return "PLUG & PLAY";
  if (t.includes("staff")) return "ACCESS CONTROL";
  return "FEATURE";
}

function parseProblemText(problem: string) {
  if (problem.includes(": ")) {
    const parts = problem.split(": ");
    if (parts.length >= 3) {
      return {
        badge: parts[0].trim(),
        title: parts[1].trim(),
        desc: parts.slice(2).join(": ").trim(),
      };
    } else if (parts.length === 2) {
      return {
        badge: undefined,
        title: parts[0].trim(),
        desc: parts[1].trim(),
      };
    }
  }
  return {
    badge: undefined,
    title: problem,
    desc: "",
  };
}

type Props = { params: Promise<{ industry: string }> };

const allIndustriesData = { ...industriesData, ...priorityIndustriesData };
const priorityIndustrySlugs = [
  "retail-store",
  "electric-store",
  "bakery-pos-system",
  "cafe",
  "clothing-store",
  "furniture-store",
  "restaurant-pos",
  "pharmacy-store",
  "salon-pos",
  "jewellery-shop",
  "toys-store",
  "manufacturing-industries",
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
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">{heading}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}
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
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500">
            <Link href="/" className="transition hover:text-[#0F2A26]">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <Link href="/industries/" className="transition hover:text-[#0F2A26]">Industries</Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-semibold text-[#0F2A26]">{data.name}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
                <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                <span>{data.hero.badge}</span>
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.7rem]">{seo?.h1 ?? data.hero.headline}</h1>
              <div className="mt-6 max-w-2xl space-y-3.5 text-base sm:text-lg leading-relaxed text-zinc-600">
                {(seo?.intro ?? data.hero.description).split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              
              {((data.hero.pills && data.hero.pills.length > 0) || data.slug === "retail-store") && (
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-[#0F2A26]">
                  {(data.hero.pills ?? [
                    { label: "Barcode Billing", icon: "Barcode" },
                    { label: "Low-Stock Alerts", icon: "Boxes" },
                    { label: "Instant Returns & Receipts", icon: "Receipt" },
                    { label: "Shift & Cash Tracking", icon: "ShieldCheck" },
                  ]).map((pill) => {
                    const Icon = getDynamicIcon(pill.icon || pill.label, Barcode);
                    return (
                      <span key={pill.label} className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E2DA] bg-[#FAF9F5] px-3 py-1">
                        <Icon className="h-3.5 w-3.5 text-[#167c70]" /> {pill.label}
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold">
                  <Link href={data.hero.primaryCtaLink} target={data.hero.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.hero.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>
                    {data.hero.primaryCtaText}
                    {data.hero.primaryCtaLink.startsWith("http") ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-[#F7F6F2] h-12 px-6 text-sm font-semibold">
                  <Link href={data.hero.secondaryCtaLink}>{data.hero.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
              />
              <div className="relative min-h-80 overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-xl sm:min-h-[430px]">
                <Image src={data.image} alt={`${data.name} POS system by Hulm`} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                
                {/* Floating Status Pill */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-[#0F2A26]">Live Inventory & Barcode Ready</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2A26]/95 via-[#0F2A26]/50 to-transparent p-6 pt-20 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7AE582]">Connected {data.name} Workflow</p>
                      <p className="mt-1 text-base sm:text-lg font-bold leading-snug">Billing, stock & customer records in one view</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg bg-white/10 px-3 py-1.5 border border-white/10 text-xs backdrop-blur-xs font-medium">
                      <Barcode className="h-3.5 w-3.5 text-[#7AE582]" />
                      <span>0.8s Fast Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {data.slug === "restaurant-pos" ? (
        <ProductScreens
          screens={screensFor(route)}
          heading={`What the ${seo?.primaryKeyword ?? `${data.name} POS system`} looks like in Hulm`}
          description="Real screens from Hulm POS. Your setup is configured around your products, branches and team."
          topic={`${data.name} POS`}
        />
      ) : (
        <Section data-reveal className="border-b border-gray-100 bg-white py-14 sm:py-18 lg:py-20">
          <Container>
            <div className="mx-auto mb-8 sm:mb-10 max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
                What the {seo?.primaryKeyword ?? `${data.name} POS system`} looks like in Hulm
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                Real screens from Hulm POS. Your setup is configured around your products, branches and team.
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <DashboardCarousel screens={homeContent.product.screens} />
            </div>
          </Container>
        </Section>
      )}

      {data.problems?.items.length ? (
        <Section data-reveal className="bg-[#F7F6F2] border-y border-[#E4E2DA]">
          <Container>
            <SectionIntro eyebrow="Operational friction" heading={h2.problems ?? data.problems.heading} centered />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.problems.items.map((item, index) => {
                const parsed = parseProblemText(item.problem);
                return (
                  <article key={item.solutionTitle} className="lift group flex flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-sm transition hover:border-[#167c70]/40">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-700">
                          <AlertCircle className="h-3 w-3" /> {parsed.badge ?? `Problem ${String(index + 1).padStart(2, "0")}`}
                        </span>
                        <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">{data.name} Bottleneck</span>
                      </div>

                      {item.image ? (
                        <div className="relative mb-4 h-32 sm:h-36 w-full overflow-hidden rounded-xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-xs">
                          <Image
                            src={item.image}
                            alt={item.imageAlt || parsed.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center transition duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2 left-2.5 rounded-md bg-black/65 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-white">
                            {item.imageAlt || parsed.title}
                          </span>
                        </div>
                      ) : null}

                      <div className="rounded-xl bg-zinc-50/70 border border-zinc-100 p-3.5 mb-5">
                        <h3 className="text-sm font-bold text-zinc-900 leading-snug">{parsed.title}</h3>
                        {parsed.desc ? <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">{parsed.desc}</p> : null}
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#167c70]/20 bg-[#167c70]/[0.03] p-4 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#167c70] mb-2">
                        <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                        <span>The HulmPOS Solution</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0F2A26]">{item.solutionTitle}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">{item.solution}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.features?.items.length ? (
        <Section data-reveal className="bg-white">
          <Container>
            <SectionIntro eyebrow="Capabilities" heading={h2.features ?? data.features.heading} description={`The practical tools built into HulmPOS to manage everyday ${data.name.toLowerCase()} operations more efficiently.`} centered />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.items.map((feature) => {
                const Icon = getFeatureIcon(feature.title);
                const tag = getFeatureTag(feature.title);
                return (
                  <article key={feature.title} className="lift group relative rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-sm transition hover:border-[#167c70]/40">
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70] transition group-hover:bg-[#167c70] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 group-hover:bg-[#167c70]/10 group-hover:text-[#167c70] transition">
                        {feature.badge ?? tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.overview ? (
        <Section data-reveal className="bg-[#FAF9F5] border-y border-[#E4E2DA]">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
                  {data.name} Life Cycle
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">
                  {h2.overview ?? data.overview.heading}
                </h2>
                {data.overview.description ? (
                  <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                    {data.overview.description}
                  </p>
                ) : null}

                <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-[#167c70]/20 bg-[#167c70]/5 px-4 py-3 text-xs font-semibold text-[#167c70]">
                  <RefreshCw className="h-4 w-4 shrink-0 text-[#167c70] animate-[spin_8s_linear_infinite]" />
                  <span>Continuous operating loop: automated sync from checkout to shift close</span>
                </div>
              </div>

              {data.overview.stages && data.overview.stages.length === 4 ? (
                <div className="relative">
                  {/* Cyclical 2x2 Grid */}
                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 relative">
                    {/* Stage 01: Top-Left */}
                    {(() => {
                      const s = data.overview.stages[0];
                      const Icon = getDynamicIcon(s.iconName || s.title, Barcode);
                      return (
                        <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#167c70]/25 bg-white p-5 shadow-xs transition hover:border-[#167c70] hover:shadow-md">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/25 bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70]">
                                {s.stage || "STAGE 01"}
                              </span>
                              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70]">
                                <Icon className="h-4 w-4" />
                              </div>
                            </div>
                            <h3 className="mt-3 text-sm font-bold text-[#0F2A26]">{s.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-[11px] font-semibold text-[#167c70]">
                            <span>{s.footerText || "Real-time stock deduction"}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] text-zinc-400">{s.flowText || "Flow"}</span>
                              <ArrowRight className="h-3.5 w-3.5 text-[#167c70]" />
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Stage 02: Top-Right */}
                    {(() => {
                      const s = data.overview.stages[1];
                      const Icon = getDynamicIcon(s.iconName || s.title, Boxes);
                      return (
                        <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#167c70]/25 bg-white p-5 shadow-xs transition hover:border-[#167c70] hover:shadow-md">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/25 bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70]">
                                {s.stage || "STAGE 02"}
                              </span>
                              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70]">
                                <Icon className="h-4 w-4" />
                              </div>
                            </div>
                            <h3 className="mt-3 text-sm font-bold text-[#0F2A26]">{s.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-[11px] font-semibold text-[#167c70]">
                            <span>{s.footerText || "Logs transaction history"}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] text-zinc-400">{s.flowText || "Flow"}</span>
                              <ArrowDown className="h-3.5 w-3.5 text-[#167c70]" />
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Stage 04: Bottom-Left (order-4 on mobile, order-3 on desktop so it sits bottom-left) */}
                    {(() => {
                      const s = data.overview.stages[3];
                      const Icon = getDynamicIcon(s.iconName || s.title, ShieldCheck);
                      return (
                        <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#167c70]/25 bg-white p-5 shadow-xs transition hover:border-[#167c70] hover:shadow-md order-4 sm:order-3">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/25 bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70]">
                                {s.stage || "STAGE 04"}
                              </span>
                              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70]">
                                <Icon className="h-4 w-4" />
                              </div>
                            </div>
                            <h3 className="mt-3 text-sm font-bold text-[#0F2A26]">{s.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-[11px] font-semibold text-[#167c70]">
                            <span>{s.footerText || "Loops into next shift"}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] text-zinc-400">{s.flowText || "Cycle"}</span>
                              <ArrowUp className="h-3.5 w-3.5 text-[#167c70]" />
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Stage 03: Bottom-Right (order-3 on mobile, order-4 on desktop so it sits bottom-right) */}
                    {(() => {
                      const s = data.overview.stages[2];
                      const Icon = getDynamicIcon(s.iconName || s.title, Receipt);
                      return (
                        <div className="relative flex flex-col justify-between rounded-2xl border-2 border-[#167c70]/25 bg-white p-5 shadow-xs transition hover:border-[#167c70] hover:shadow-md order-3 sm:order-4">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/25 bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70]">
                                {s.stage || "STAGE 03"}
                              </span>
                              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70]">
                                <Icon className="h-4 w-4" />
                              </div>
                            </div>
                            <h3 className="mt-3 text-sm font-bold text-[#0F2A26]">{s.title}</h3>
                            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-[11px] font-semibold text-[#167c70]">
                            <span>{s.footerText || "Drawer cash balancing"}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] text-zinc-400">{s.flowText || "Flow"}</span>
                              <ArrowLeft className="h-3.5 w-3.5 text-[#167c70]" />
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Central Life Cycle Badge */}
                  <div className="hidden sm:flex absolute inset-0 m-auto h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#167c70]/50 bg-white shadow-xl pointer-events-none z-10 p-1">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0F2A26] text-white">
                      <RefreshCw className="h-4 w-4 text-[#7AE582] animate-[spin_10s_linear_infinite]" />
                      <span className="text-[7px] font-bold tracking-widest text-[#7AE582] mt-0.5">LOOP</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.overview.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 text-sm font-semibold leading-6 text-[#0F2A26]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#167c70]" />
                      {point}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Section>
      ) : null}

      {data.useCases?.cases.length ? (
        <Section data-reveal className="bg-[#0F2A26] text-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7AE582]">Common setups</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{h2.useCases ?? data.useCases.heading}</h2>
                <p className="mt-4 text-base leading-7 text-white/70">Start with the operating model closest to yours, then adjust the details during implementation.</p>
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
            <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-7 sm:p-10 lg:p-12 shadow-sm">
              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F2A26] text-[#7AE582] shadow-sm"><ShieldCheck className="h-6 w-6" /></div>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">FBR integration support</span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26]">{h2.fbr ?? data.fbr.heading}</h2>
                  {data.fbr.description ? <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{data.fbr.description}</p> : null}
                  <Link href="/fbr-integrated-pos-pakistan/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#105f56]">Review FBR integration <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <div className="grid gap-4">
                  {data.fbr.points.map((point) => (
                    <article key={point.title} className="rounded-2xl border border-[#E4E2DA] bg-white p-5 shadow-xs">
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
        <Section data-reveal className="bg-[#F7F6F2] border-t border-[#E4E2DA]">
          <Container className="grid gap-6 lg:grid-cols-2">
            {data.whoCanBenefit?.items.length ? (
              <article className="lift rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-sm sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">Who it can support</span>
                  <h2 className="mt-3 text-2xl font-bold text-[#0F2A26]">{h2.who ?? data.whoCanBenefit.heading}</h2>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {data.whoCanBenefit.description || `Designed for everyday ${data.name.toLowerCase()} operations across specialized and multi-location retail setups.`}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {data.whoCanBenefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-zinc-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#167c70]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-[#E4E2DA] flex items-center justify-between text-xs text-zinc-500">
                  <span>Customizable catalogue & checkout</span>
                  <Link href="/contact/" className="font-semibold text-[#167c70] hover:underline flex items-center gap-1">
                    Ask about your store type <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ) : null}
            {data.benefits?.items.length ? (
              <article className="lift rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-sm sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">Key Evaluation Pillars</span>
                  <h2 className="mt-3 text-2xl font-bold text-[#0F2A26]">{h2.benefits ?? data.benefits.heading}</h2>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {data.benefits.description || `When comparing ${data.name.toLowerCase()} point of sale software for small businesses, look beyond the billing screen:`}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {data.benefits.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-zinc-700">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#167c70]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-[#E4E2DA] rounded-xl bg-[#FAF9F5] p-3 text-xs text-zinc-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>Confirm pricing, hardware specs and specialist features:</span>
                  <div className="flex items-center gap-3 font-semibold text-[#167c70]">
                    <Link href="/pricing/" className="hover:underline">Pricing</Link>
                    <span>•</span>
                    <Link href="/contact/" className="hover:underline">Request Demo</Link>
                  </div>
                </div>
              </article>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <CaseStudyCard route={route} />

      {faqItems.length ? (
        <Section data-reveal className="border-t border-[#E4E2DA]">
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

      <Section data-reveal className="bg-[#F7F6F2] border-t border-[#E4E2DA]">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionIntro eyebrow="Explore industries" heading="More POS systems by industry" />
            <Link href="/industries/" className="inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#105f56]">View all industries <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((item) => (
              <Link key={item.slug} href={`/industries/${item.slug}/`} className="lift group overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-sm transition hover:border-[#167c70]">
                <div className="relative h-36"><Image src={item.image} alt={`${item.name} POS system`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
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
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16 shadow-xl border border-[#167c70]/20">
            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7AE582]">Plan the right rollout</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{data.finalCta.heading}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{data.finalCta.subheading || data.finalCta.description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#7AE582] text-[#0F2A26] hover:bg-[#8ef095] font-semibold shadow-sm"><Link href={data.finalCta.primaryCtaLink} target={data.finalCta.primaryCtaLink.startsWith("http") ? "_blank" : undefined} rel={data.finalCta.primaryCtaLink.startsWith("http") ? "noreferrer" : undefined}>{data.finalCta.primaryCtaText}<ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={data.finalCta.secondaryCtaLink}>{data.finalCta.secondaryCtaText}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

