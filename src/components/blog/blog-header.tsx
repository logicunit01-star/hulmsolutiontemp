import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface BlogHeaderProps {
  title: string;
  description?: string;
}

export function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <Section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-white">
      <Container>
        <div className="max-w-3xl flex flex-col items-start space-y-4">
          <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}

