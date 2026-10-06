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
          <h1 className="text-4xl md:text-5xl font-semibold text-[#152825] tracking-tight">
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
