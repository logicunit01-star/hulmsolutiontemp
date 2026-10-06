import React from "react"
import { Container } from "@/components/ui/container"

interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export function ContactHero({ title, subtitle }: ContactHeroProps) {
  return (
    <section className="bg-background-muted py-16 md:py-24 border-b border-border">
      <Container>
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
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
