import Image from "next/image";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const benefits = [
  {
    bold: "Fast checkout",
    rest: " and improved customer experience.",
  },
  {
    bold: "Real-time inventory tracking",
    rest: " to avoid stock issues.",
  },
  {
    bold: "Monitors sales",
    rest: " to optimize pricing and strategy.",
  },
  {
    bold: "Simplified expense tracking",
    rest: " for better budgeting.",
  },
  {
    bold: "Efficient employee scheduling",
    rest: " and performance monitoring.",
  },
  {
    bold: "Strengthens vendor relationships",
    rest: " with accurate records.",
  },
  {
    bold: "Quick, error-free",
    rest: " digital invoicing.",
  },
  {
    bold: "Detailed reports",
    rest: " for better decision-making.",
  },
  {
    bold: "Manage multiple locations",
    rest: " from one system.",
  },
  {
    bold: "Fast service",
    rest: " with a personalized touch for loyal customers.",
  },
];

export function BenefitsSection() {
  return (
    <Section
      data-reveal
      className="relative overflow-hidden border-t border-[#eaf2ef] bg-gradient-to-b from-[#f9fbfb] via-white to-[#f9fbfb] py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-80 w-[55rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(22,124,112,0.07),transparent_70%)]"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Graphic with ambient backdrop & badge */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Soft ambient aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/12 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
              />

              {/* Styled glass container */}
              <div className="relative rounded-2xl border border-emerald-900/10 bg-white/90 p-4 shadow-[0_20px_50px_-15px_rgba(15,42,38,0.08)] backdrop-blur-xs sm:p-6">
                <Image
                  src="/images/home/hulm-section-4.png"
                  alt="Hulm POS integrated ecosystem and benefits overview"
                  width={610}
                  height={416}
                  className="mx-auto h-auto w-full object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />

                {/* Floating micro-badge */}
                <div className="absolute -bottom-3 -right-2 flex items-center gap-2.5 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-2 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] sm:-bottom-4 sm:right-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#167c70] text-white">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-[#167c70] uppercase">Unified Hub</p>
                    <p className="text-xs font-bold text-[#0F2A26]">100% Cloud POS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefits Cards Grid */}
          <div className="lg:col-span-7">
            {/* Pill Eyebrow */}
            <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Core Advantages</span>
            </div>

            <h2 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-[#0F2A26] tracking-tight leading-[1.25] text-balance">
              Benefits of Hulm POS System
            </h2>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl font-normal">
              At Hulm Solutions, we empower businesses to thrive by simplifying the way they operate and engage with customers. Here are the key benefits of choosing Hulm Solutions for your business:
            </p>

            {/* 2-Column Responsive Benefits Cards Grid */}
            <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-2.5 rounded-xl border border-zinc-200/75 bg-white/95 p-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#167c70]/40 hover:bg-white hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#167c70] transition-colors duration-200 group-hover:bg-[#167c70] group-hover:text-white">
                    <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-[13px] leading-snug text-zinc-700">
                    <strong className="font-semibold text-[#0F2A26]">{item.bold}</strong>
                    {item.rest}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Action Strip */}
            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-5">
              <a
                href="https://dashboard.hulmsolutions.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="benefits_section"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2A26] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#167c70]"
              >
                Start free trial <ArrowRight className="h-4 w-4" />
              </a>
              <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <Check className="h-3.5 w-3.5 stroke-[2.5] text-[#167c70]" />
                14-day free access &bull; No credit card required
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BenefitsSection;
