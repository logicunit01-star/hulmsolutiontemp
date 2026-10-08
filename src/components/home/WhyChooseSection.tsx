import Image from "next/image";
import { CheckCircle2, ReceiptText, Boxes, Building2, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const workflowCards = [
  {
    step: "01",
    title: "Sell",
    description: "Create the order, take payment and keep a reliable transaction record.",
    icon: ReceiptText,
  },
  {
    step: "02",
    title: "Update stock",
    description: "Reflect product movement without maintaining a separate inventory file.",
    icon: Boxes,
  },
  {
    step: "03",
    title: "Coordinate operations",
    description: "Give purchasing, fulfilment and branch teams the same source of information.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Understand performance",
    description: "Turn daily activity into reports owners and managers can act on.",
    icon: BarChart3,
  },
];

const keyPoints = [
  "User-Friendly Design",
  "24/7 Support",
  "Customizable Solutions",
  "Advanced Security",
  "Comprehensive Features",
  "Cloud Accessibility",
  "FBR-Compliant Invoicing",
  "Real-Time Insights",
  "Barcode Scanners",
  "Compatible with all Devices",
  "Use it Multiple Locations",
  "Record of clients",
  "Cost-Effective",
  "Scalable for Growth",
  "Easy to understand Interface",
];

export function WhyChooseSection() {
  return (
    <Section data-reveal className="bg-[#FAF9F5] py-14 sm:py-16 lg:py-20 border-t border-zinc-100">
      <Container>
        {/* Top: Intro + Why Hulm Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <p className="mb-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#167c70]">
              Connected Business Operations
            </p>
            <h2 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-[#0F2A26] tracking-tight leading-[1.25] mb-3.5 text-balance">
              Why Choose Hulm POS System?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-5">
              Hulm Solutions POS makes your business operations easy, efficient, and reliable at very competitive prices. As the <strong className="font-bold text-[#0F2A26]">Best POS Software In Pakistan</strong>, it offers simple yet powerful features and robust cloud architecture that adjust to every unique need of retail stores, restaurants, and growing businesses across Pakistan.
            </p>

            {/* Key Points For Choosing Hulm POS */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 sm:p-5 shadow-xs backdrop-blur-xs">
              <h3 className="mb-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#167c70] flex items-center gap-2">
                <span>Key Points For Choosing Hulm POS:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-2.5">
                {keyPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#0F2A26]">
                    <CheckCircle2 className="w-4 h-4 text-[#167c70] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Soft ambient emerald aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/12 to-transparent blur-2xl -z-10"
              />
              <div className="relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white p-2 sm:p-3 shadow-[0_20px_50px_-15px_rgba(15,42,38,0.08)]">
                <Image
                  src="/images/home/why-choose-hulm-pos.png"
                  alt="Why Choose Hulm POS System - FBR compliant, cloud and offline, multi-location, barcode ready, real-time reports, 24/7 setup support"
                  width={1224}
                  height={1285}
                  className="w-full h-auto object-contain rounded-xl mx-auto transition-transform duration-500 hover:scale-[1.01]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 4 Connected Workflow Cards */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div
            className="absolute left-[12%] right-[12%] top-11 hidden h-px bg-[#c8dedb] xl:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {workflowCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.step}
                  className="relative z-10 bg-white rounded-2xl border border-[#E4E2DA] p-6 sm:p-7 shadow-xs hover:border-[#25a18e]/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#167c70]/10 text-[#167c70] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-zinc-400">
                      {card.step}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2A26] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhyChooseSection;
