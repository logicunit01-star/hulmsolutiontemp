import { ShieldCheck, Target, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const IconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Target,
  TrendingUp,
};

interface AboutFeaturesProps {
  features: {
    heading: string;
    subheading?: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

export function AboutFeatures({ features }: AboutFeaturesProps) {
  return (
    <Section data-reveal className="py-16 md:py-24 bg-white relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-text">{features.heading}</h2>
          {features.subheading && (
            <p className="text-lg text-text-muted">{features.subheading}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.items.map((item, index) => {
            const Icon = IconMap[item.icon] || Target;
            return (
              <div key={index} className="glass-card p-8 rounded-2xl hover-lift group border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-text">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
