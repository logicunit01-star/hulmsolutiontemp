export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroSection {
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: string; // Will map to Lucide icons or similar
}

export interface FeaturesSection {
  heading: string;
  subheading?: string;
  items: Feature[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface TestimonialsSection {
  heading: string;
  subheading?: string;
  items: Testimonial[];
}

export interface AdditionalSectionItem {
  title?: string;
  description?: string;
  label?: string;
  value?: string;
  type?: string;
  [key: string]: unknown;
}

export interface AdditionalSection {
  type: string;
  heading?: string;
  content?: string;
  image?: string;
  items?: AdditionalSectionItem[];
  [key: string]: unknown;
}

export interface StandardPageContent {
  seo: SEOProps;
  hero: HeroSection;
  features?: FeaturesSection;
  testimonials?: TestimonialsSection;
  // Allows page-specific sections while keeping commonly rendered fields typed.
  additionalSections?: AdditionalSection[];
}
