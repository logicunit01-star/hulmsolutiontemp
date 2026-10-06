import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface AboutHeroProps {
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: { label: string; href: string };
    image?: { src: string; alt: string };
  };
}

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <Section data-reveal className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-[-1]"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            <h1 className="text-display text-text-gradient">{hero.headline}</h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-lg">
              {hero.subheadline}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-hover hover-lift shadow-elevation-1" asChild>
                <Link href={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
              </Button>
            </div>
          </div>
          
          {hero.image && (
            <div className="relative w-full aspect-[4/3] lg:aspect-video flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl glass-card hover-lift flex items-center justify-center p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl pointer-events-none"></div>
                <Image 
                  src={hero.image.src} 
                  alt={hero.image.alt} 
                  fill
                  className="object-cover rounded-2xl hover-scale"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
