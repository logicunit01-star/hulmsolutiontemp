import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const mockData = {
  headline: "Trusted by Businesses Across Pakistan",
  subheadline: "What our clients say",
  items: [
    { quote: "Hulm POS significantly increased my bakery sales & fulfilled all needs to manage my bakery operations.", author: "Zain ul Abidin", role: "Bakery Owner" },
    { quote: "As someone who isn't very tech-savvy, I appreciate how easy HulmPOS is to use. Setting up was a breeze.", author: "Stark", role: "Retail Owner" },
    { quote: "HulmPOS provides the easy way to operate my inventory management. Highly recommended!", author: "Mustafa Sheikh", role: "Store Manager" }
  ]
};

export function Testimonials() {
  const { headline, subheadline, items } = mockData;

  return (
    <Section data-reveal className="bg-white py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="h2 text-text mb-4 leading-tight">{headline}</h2>
          <p className="text-lg text-text-muted font-semibold text-primary">
            {subheadline}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Star Rating */}
              <div className="flex gap-1 text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              
              <p className="text-text-muted italic leading-relaxed flex-grow mb-8 relative">
                <span className="text-4xl text-primary/20 absolute -top-4 -left-2 font-serif">&quot;</span>
                <span className="relative z-10">{item.quote}</span>
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-background-muted overflow-hidden border border-border flex items-center justify-center text-primary font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-text">{item.author}</h4>
                  <p className="text-sm text-primary">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
