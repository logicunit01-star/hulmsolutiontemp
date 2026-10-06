import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Sparkles, Check } from "lucide-react";
import { FinalCtaForm } from "@/components/home/FinalCtaForm";

interface FinalCtaProps {
  heading?: string;
  subheading?: string;
  badge?: string;
  points?: string[];
  formHeading?: string;
  formSubheading?: string;
}

export function FinalCta({
  heading = "Transform Your Business with Hulm POS",
  subheading = "Join retail stores, restaurants, pharmacies and manufacturers that run sales, stock and reporting on Hulm.",
  badge = "Start Growing Today — Zero Risk",
  points = [
    "Full access to all 10+ business modules",
    "FBR-integrated invoicing available in Pakistan",
    "Onboarding support on WhatsApp and phone",
  ],
  formHeading,
  formSubheading,
}: FinalCtaProps) {
  return (
    <Section data-reveal className="py-20 lg:py-28 relative overflow-hidden bg-[#0F2A26]">
      {/* Subtle Background POS Equipment Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
        style={{
          backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
          backgroundSize: "600px",
        }}
      />

      {/* Ambient Radial Lighting Glows */}

      <Container className="relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Prop & Trust */}
          <div className="lg:col-span-6 text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.15]">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-xl">
              {subheading}
            </p>

            {/* Key Benefits Checklist */}
            <div className="pt-2 space-y-3">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white/95 font-medium">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Stat */}
            <div className="pt-4 border-t border-white/15 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">AK</div>
                <div className="w-8 h-8 rounded-full bg-teal-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">MR</div>
                <div className="w-8 h-8 rounded-full bg-emerald-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">FN</div>
              </div>
              <div className="text-xs sm:text-sm text-white/90">
                <span className="font-semibold text-white">Join growing businesses</span> running on Hulm
              </div>
            </div>
          </div>

          {/* Right Column: Modern High-Converting Form Card */}
          <div className="lg:col-span-6">
            <FinalCtaForm
              formHeading={formHeading}
              formSubheading={formSubheading}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
