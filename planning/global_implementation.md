# Global Implementation Guide

To avoid rewriting code and to ensure a cohesive, premium design across the entire ReactJS/Next.js application, we will adhere to the following global implementation standards.

## 1. Design Tokens (Tailwind CSS Configuration)
We will define our core design tokens in `tailwind.config.ts` (or `globals.css` using CSS variables).
- **Colors**: Define a harmonious palette (e.g., Primary Brand, Secondary, Background, Surface, Text Primary, Text Muted, Error, Success). *Avoid default Tailwind blues/reds; use curated HSL values.*
- **Typography**: Implement a modern sans-serif font (e.g., Inter, Outfit, or Plus Jakarta Sans) globally.
- **Spacing & Radius**: Standardize border radiuses (e.g., `rounded-xl` for cards, `rounded-full` for buttons) and consistent padding/margins.

## 2. Content Management Pattern
- **Strict Separation**: React components should *never* contain hardcoded paragraphs.
- **Data Source**: Every page will import its content from a dedicated TypeScript file in the `content/pages/` directory.
- **Interface Driven**: We will define strict TypeScript interfaces for page content.
  ```typescript
  // Example Page Content Interface
  export interface PageContent {
    meta: { title: string; description: string; keywords: string[] };
    hero: { headline: string; subheadline: string; ctaText: string; image: string };
    features: Array<{ title: string; description: string; icon: string }>;
    // ...other sections
  }
  ```

## 3. Styling Aesthetics (Premium Feel)
- **Glassmorphism**: Use translucent backgrounds with background blur for floating elements (navbars, tooltips, cards on colorful backgrounds).
- **Subtle Gradients**: Use soft gradients instead of flat colors for backgrounds and primary text emphasis.
- **Micro-animations**: Integrate hover effects (scale up by 1-2%, subtle shadow increase) and page-load animations (fade-in, slide-up) using Framer Motion or CSS transitions.

## 4. Responsiveness
- **Mobile-First**: All components will be built mobile-first.
- **Fluid Typography/Layouts**: Use `clamp()` for font sizes or rely heavily on Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) to ensure perfect scaling across all devices.

## 5. Development Workflow
1. Define the content schema for the target page.
2. Populate the `content/pages/[page].ts` file with the migrated WordPress content.
3. Build any missing generic UI components needed for the page.
4. Assemble the page in `src/app/[route]/page.tsx` by passing the content file data to the components.
