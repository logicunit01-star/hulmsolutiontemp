import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  PackageCheck,
  ReceiptText,
  Sparkles,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { homeContent } from "@content/pages/home";

const problemMeta = [
  {
    icon: ReceiptText,
    solutionTag: "Fast Billing & FBR Ready",
    benefit: "Eliminates counter bottlenecks & manual calculation errors",
  },
  {
    icon: PackageCheck,
    solutionTag: "Real-Time Stock Sync",
    benefit: "Prevents stockouts, theft & costly over-purchasing",
  },
  {
    icon: Building2,
    solutionTag: "Centralized Multi-Branch",
    benefit: "Monitors all branches live without waiting for WhatsApp reports",
  },
];

function InfographicGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none flex items-center justify-center">
      {/* Soft ambient emerald aura behind transparent graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/12 to-transparent blur-3xl -z-10"
      />

      {/* Transparent Infographic Image */}
      <div className="relative w-full">
        <Image
          src="/images/home/replace-manual-processes.png"
          alt="Replace manual cash register, Excel sheets, WhatsApp groups and paper notebooks with Hulm POS Software"
          width={1024}
          height={1536}
          priority={false}
          className="h-auto w-full object-contain mx-auto drop-shadow-[0_15px_40px_rgba(15,42,38,0.08)] transition-transform duration-500 hover:scale-[1.01]"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
    </div>
  );
}

export function ReplaceManualSection() {
  const { eyebrow, heading, description, items } = homeContent.problems;

  return (
    <Section
      data-reveal
      className="relative overflow-hidden border-t border-[#eaf2ef] bg-gradient-to-b from-[#f9fbfb] via-white to-[#f7faf9] py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(22,124,112,0.08),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(122,229,130,0.08),transparent_70%)] blur-2xl"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Heading, Description, Cards & CTA */}
          <div className="lg:col-span-7">
            {/* Pill Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{eyebrow}</span>
              <span className="text-[#167c70]/40">•</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#167c70]/80">
                Manual to Cloud POS
              </span>
            </div>

            {/* Main Heading with Highlight */}
            <h2
              data-eyebrow={eyebrow}
              className="text-2xl font-bold tracking-tight text-[#0F2A26] text-balance sm:text-3xl lg:text-[32px] lg:leading-[1.22]"
            >
              {heading.replace(/Best POS Software in Pakistan$/, "")}
              <span className="text-[#167c70]">Best POS Software in Pakistan</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg max-w-2xl">
              {description}
            </p>

            {/* Mobile Graphic (visible on small/medium screens right below description) */}
            <div className="my-8 lg:hidden">
              <InfographicGraphic />
            </div>

            {/* Problem & Solution Cards Stack */}
            <div className="mt-8 space-y-3.5">
              {items.map((item, index) => {
                const meta = problemMeta[index];
                const Icon = meta?.icon || ReceiptText;

                return (
                  <article
                    key={item.title}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 p-4 sm:p-5 shadow-[0_2px_8px_-2px_rgba(15,42,38,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#167c70]/35 hover:bg-white hover:shadow-[0_12px_28px_-8px_rgba(22,124,112,0.12)]"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#167c70]/12 to-[#25a18e]/10 text-[#167c70] transition-colors duration-200 group-hover:bg-[#167c70] group-hover:text-white sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors">
                            {item.title}
                          </h3>
                          {meta?.solutionTag && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#167c70]/8 px-2.5 py-0.5 text-[11px] font-semibold text-[#167c70]">
                              <Zap className="h-3 w-3" />
                              {meta.solutionTag}
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Benefit Highlight Bar */}
                    {meta?.benefit && (
                      <div className="mt-1 flex items-center gap-2 border-t border-zinc-100 pt-2.5 text-xs font-medium text-emerald-800">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#167c70]" />
                        <span>{meta.benefit}</span>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-[#0F2A26] text-white hover:bg-[#167c70] shadow-sm">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zinc-300 hover:border-[#167c70]">
                <Link href="/book-a-demo/">Book a Demo</Link>
              </Button>
              <span className="text-xs text-zinc-500 sm:ml-2">
                No credit card needed &bull; Instant setup
              </span>
            </div>
          </div>

          {/* Right Column: Visual Infographic (Desktop & Tablet Landscape) */}
          <div className="hidden lg:flex items-center justify-center lg:col-span-5">
            <InfographicGraphic />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ReplaceManualSection;
