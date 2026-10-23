import React from "react"
import { Container } from "@/components/ui/container"

interface PricingHeroProps {
  title: string;
  subtitle: string;
}

export function PricingHero({ title, subtitle }: PricingHeroProps) {
  return (
    <section className="bg-background-muted py-20 md:py-28 border-b border-border">
      <Container>
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px] mb-6">
            {title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}
