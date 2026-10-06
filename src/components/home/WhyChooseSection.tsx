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

const highlights = [
  "FBR-Compliant",
  "Cloud & Offline",
  "Multi-Location",
  "Barcode Ready",
  "Real-Time Reports",
  "24/7 Setup Support",
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
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0F2A26] tracking-tight leading-[1.25] mb-4">
              Why Choose Hulm POS System?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-6">
              Hulm Solutions POS makes your business operations easy, efficient, and reliable at very competitive prices. Simple yet powerful features and robust cloud architecture adjust to every unique need of retail stores, restaurants, and growing businesses across Pakistan.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F2A26]">
                  <CheckCircle2 className="w-4 h-4 text-[#167c70] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl p-4 sm:p-6 border border-[#E4E2DA]/80 shadow-xs">
              <Image
                src="/images/home/why-hulmsolution.jpg"
                alt="why-hulmsolution"
                width={600}
                height={547}
                className="w-full h-auto object-contain mx-auto"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
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
