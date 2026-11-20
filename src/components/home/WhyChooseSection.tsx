import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { supportFeatureLabel } from "@content/pages/home";

const proofPoints = [
  "Start from PKR 2,500/month per user",
  "No setup fee",
  "Free 14-day trial",
  "No credit card required",
  "Free data import from Excel",
  "Use it in multiple locations",
  "Run in any modern browser and on mobile",
  "FBR-Integrated Invoicing",
  "Encrypted connection (HTTPS)",
  supportFeatureLabel,
];

export function WhyChooseSection() {
  return (
    <Section data-reveal className="bg-[#FAF9F5] py-14 sm:py-16 lg:py-20 border-t border-zinc-100">
      <Container>
        {/* Intro + Why Hulm Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="mb-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#167c70]">
              Connected Business Operations
            </p>
            <h2 className="text-xl sm:text-[28px] lg:text-[30px] font-bold text-[#0F2A26] tracking-tight leading-[1.25] mb-3 text-balance">
              Why Choose Hulm POS System?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-5">
              Transparent pricing, local onboarding, and modern cloud architecture built for single shops and multi-branch chains across Pakistan:
            </p>

            {/* 10 Proof-Backed Points For Choosing Hulm POS */}
            <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 sm:p-5 shadow-xs backdrop-blur-xs">
              <h3 className="mb-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#167c70] flex items-center gap-2">
                <span>Key Points For Choosing Hulm POS:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {proofPoints.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-[#0F2A26]">
                    <CheckCircle2 className="w-4 h-4 text-[#167c70] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-snug">{item}</span>
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
                  src="/images/home/why-choose-hulm-pos.webp"
                  alt="Hulm POS synchronized operation across desktop terminal, laptop, and mobile tablet"
                  width={1224}
                  height={1285}
                  className="w-full h-auto object-contain rounded-xl mx-auto transition-transform duration-500 hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 512px, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhyChooseSection;
