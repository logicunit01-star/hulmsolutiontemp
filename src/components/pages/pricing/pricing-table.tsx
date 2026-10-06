import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTableProps {
  sections: Array<{
    type: string;
    heading: string;
    items: Array<{
      name: string;
      price: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }>;
  }>;
}

export function PricingTable({ sections }: PricingTableProps) {
  const pricingSection = sections.find(s => s.type === "pricing-tiers");
  if (!pricingSection) return null;

  return (
    <Section data-reveal className="py-20 md:py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-text mb-6">
            {pricingSection.heading}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingSection.items.map((tier, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 md:p-12 rounded-2xl relative hover-lift flex flex-col ${tier.popular ? 'border-primary/50 shadow-elevation-4 ring-1 ring-primary/20' : 'border-border/50'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-[13px] font-bold py-1.5 px-4 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-text mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary">{tier.price}</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-success shrink-0 mr-3 mt-0.5" />
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                size="lg" 
                className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary-hover shadow-elevation-2' : 'bg-background-muted text-text hover:bg-border/50 border border-border'}`}
                asChild
              >
                <Link href="https://app.hulmsolutions.com/Register">
                  {tier.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
