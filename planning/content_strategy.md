# Content Strategy & Mapping

To ensure **zero hallucination** and that **no content or keywords are missed** during the WordPress to ReactJS migration, we will create a dedicated TypeScript file for every single route. All text, SEO meta, images, and feature lists will be extracted exactly as they are on the Live website and placed into these files.

## Required Content Files to Create
All files will be created in the `content/pages/` directory.

### Core Pages
1. `home.ts` (Maps to `/`)
2. `about.ts` (Maps to `/about`)
3. `contact.ts` (Maps to `/contact`)
4. `pricing.ts` (Maps to `/pricing`)

### Software / Product Pages
5. `cattle-management.ts` (Maps to `/cattle-management-software`)
6. `logistics-management.ts` (Maps to `/logistics-management-software`)
7. `inventory-management.ts` (Maps to `/inventory-management`)
8. `order-management.ts` (Maps to `/order-management`)
9. `purchase-orders.ts` (Maps to `/purchase-orders`)
10. `reporting-module.ts` (Maps to `/reporting-module`)
11. `vendors-management.ts` (Maps to `/vendors-management`)
12. `mobile-pos.ts` (Maps to `/mobile-pos`)
13. `customer-management.ts` (Maps to `/customer-management`)
14. `website-builder.ts` (Maps to `/website`)

### Dynamic / Collections
15. `industries-hub.ts` (Maps to `/industries` hub page)
    - Specific industries will be mapped dynamically from `content/industries/*.ts`
16. `blog-hub.ts` (Maps to `/blog` hub page)
    - Specific blogs will be mapped dynamically from `content/blog/*.ts`
17. `author-hub.ts` (Maps to `/author`)

## Standard Content Schema
Every content file will adhere to a strict interface to guarantee we capture all required SEO keywords and content blocks.

```typescript
export interface StandardPageContent {
  seo: {
    title: string;          // Exact title from live site
    description: string;    // Exact meta description
    keywords: string[];     // All targeted keywords
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: string;
    secondaryCTA?: string;
    heroImageAlt: string;
  };
  sections: Array<{
    id: string;
    type: 'features' | 'text-image' | 'testimonials' | 'faq' | 'stats';
    heading: string;
    content: any; // Mapped precisely to the component data needs
  }>;
}
```

## Migration Execution (Post-Approval)
Once approved, we will go through each page one-by-one. For each page, we will:
1. Extract the exact text, headings, and images from the Live WordPress site.
2. Populate the corresponding `.ts` file.
3. Verify all keywords are present.
4. Build the UI in `src/app/` to render this exact data.
