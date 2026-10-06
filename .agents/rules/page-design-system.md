---
name: Page Development Guidelines
description: Strict guidelines for creating new pages, applying the established Hulm theme, and structuring typography to ensure visual consistency across the entire Next.js application.
---

# Hulm Page Development Guidelines

When requested to create a new page or modify an existing layout for the Hulm project, you MUST strictly adhere to the following design system, component architecture, and typography rules. **Do not deviate from these rules or invent new layouts unless explicitly asked.**

## 1. Design Tokens & Colors (No Hardcoded Hex)
NEVER use hardcoded hex codes (like `#0F5A4D` or `#E6F4F1`) directly in components. Always use the predefined semantic Tailwind CSS variables established in the project:
- **Primary Elements**: Use `text-primary`, `bg-primary`, `border-primary`
- **Backgrounds**: Use `bg-white` for main sections, and `bg-background-muted` for alternating offset sections.
- **Text**: Use `text-text` for headings and main body text, and `text-text-muted` for descriptions and secondary text.
- **Borders**: Use `border-border` (or `border-border/50` for subtlety).

## 2. Layout Architecture
All pages must follow a standardized component structure to maintain consistent padding and responsiveness:
- Wrap every vertical block of content in the `<Section>` component (imported from `@/components/ui/section`).
- Wrap the inner content of every section in the `<Container>` component (imported from `@/components/ui/container`).

## 3. The "Hero" Section Standard
When building a Hero section for a subpage or app page, mimic the Home page theme exactly:
- **Background**: `bg-white` (with generous padding `pt-20 md:pt-32 pb-16 md:pb-24`).
- **Layout**: 2-column grid (`grid-cols-1 lg:grid-cols-2`).
- **Left Column (Text)**: 
  - Overline Badge: A small, pill-shaped badge above the heading (`inline-flex items-center px-3 py-1.5 rounded-full border border-border/40 text-xs font-semibold text-primary uppercase bg-background-muted/50`).
  - Heading: Use the `text-display` class for `<h1>` elements.
  - Subheading: Use `text-lg text-text-muted leading-relaxed`.
  - Buttons: Primary button (`bg-primary text-white`), Secondary button (`bg-white border-border/50 text-text`).
- **Right Column (Visual)**: 
  - Wrapped in a container with a subtle shadow (`shadow-elevation-2`) and rounded corners (`rounded-2xl`).

## 4. Separation of Data and Presentation
Do not hardcode large blocks of text, features, or FAQs directly into the `.tsx` components.
- Store all text content, lists, and feature definitions in a dedicated `data.ts` file (e.g., `src/lib/apps/data.ts` or `src/lib/home/data.ts`).
- Ensure the React components remain clean and map over this data dynamically.

## 5. Typography Hierarchy
- `<h1>`: Use `text-display` or `text-4xl md:text-5xl lg:text-6xl font-bold` with `text-text`.
- `<h2>`: Use `text-3xl md:text-4xl font-semibold` with `text-text`.
- `<h3>`: Use `text-lg font-bold` or `text-xl font-bold` with `text-text`.
- **Paragraphs**: Use `text-[15px]` or `text-sm` with `text-text-muted leading-relaxed`.

## 6. Shared Components
When a page requires standard informational sections (like Testimonials, Final CTAs, or FAQs), reuse the existing components from `src/components/home/` rather than rebuilding them from scratch.
