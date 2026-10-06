/**
 * SEO overlay for the 12 industry pages (src/app/industries/[industry]/page.tsx).
 *
 * The page layout and copy stay the benchmark (staging) version from industriesData /
 * priorityIndustriesData. This file only adds the ranking layer taken from live hulmsolutions.com:
 * - title + meta description: live values via seoMetadata() (not stored here)
 * - h1 / intro: benchmark sentence that contains the live primary keyword
 * - h2: 2–4 benchmark headings reworded to carry a secondary keyword (others stay as they are)
 * - faqs: short keyword FAQs matching live search questions; answers render in the HTML and in
 *   FAQPage schema. The page adds the existing benchmark FAQs after these (max 8 in total).
 */
import type { FaqDetailsItem } from "@/components/seo/faq-details";

export type IndustrySeo = {
  primaryKeyword: string;
  schemaName: string;
  h1: string;
  intro?: string;
  h2?: Partial<Record<"overview" | "problems" | "features" | "useCases" | "fbr" | "who" | "benefits" | "legacy0" | "legacy1" | "legacy2", string>>;
  faqHeading: string;
  faqs: FaqDetailsItem[];
  blog?: { label: string; href: string };
};

const pricingLink = { label: "POS software price in Pakistan", href: "/pricing/" };
const fbrLink = { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" };

export const industrySeo: Record<string, IndustrySeo> = {
  "retail-store": {
    primaryKeyword: "retail POS system",
    schemaName: "Hulm Retail POS",
    h1: "Retail POS system that keeps checkout and stock in the same view",
    intro:
      "Hulm retail POS software connects counter sales with products, purchasing, customer records and branch-level inventory, so your team can serve customers without losing sight of stock.",
    h2: {
      features: "Retail POS features that drive sales",
      fbr: "FBR integration built into your retail POS",
      who: "Retail stores this POS system supports",
    },
    faqHeading: "Retail POS system FAQs",
    faqs: [
      {
        q: "What is the best POS system for retail stores?",
        a: "The best POS systems for retail stores combine barcode billing, variant inventory, purchasing, customer records and branch reporting in one place. Hulm retail POS covers all of these, starting at PKR 2,500 per month.",
        link: { label: "best POS system for retail", href: "/blog/best-pos-system-for-retail/" },
      },
      {
        q: "How can a retail POS help my business grow?",
        a: "It shows what sells, what is low and which branch performs best, so you reorder on time, reduce stock-outs and serve customers faster at the counter.",
      },
      {
        q: "Will I always know what's in stock?",
        a: "Yes. Every sale, return and received purchase updates inventory, and stock can be reviewed by configured branch.",
        link: { label: "inventory management", href: "/inventory-management/" },
      },
    ],
    blog: { label: "Cloud POS software for retail stores", href: "/blog/cloud-pos-software-for-retail-stores/" },
  },
  "restaurant-pos": {
    primaryKeyword: "restaurant POS",
    schemaName: "Hulm Restaurant POS",
    h1: "Restaurant POS software: the point of sale system that moves every order from table to billing",
    intro:
      "Hulm restaurant point of sale software brings menu items, order entry, table workflows, kitchen tickets and payment records into one operating flow for your restaurant team.",
    h2: {
      features: "Restaurant POS features for dine-in, takeaway and delivery",
      fbr: "FBR integration built into your restaurant POS",
      who: "Restaurants and food businesses this POS supports",
    },
    faqHeading: "Restaurant POS system FAQs",
    faqs: [
      {
        q: "What is the best restaurant POS system in Pakistan?",
        a: "The best restaurant POS handles dine-in, takeaway and delivery orders, kitchen tickets, menu stock and FBR-compliant invoices. Hulm restaurant point of sale software does this in one cloud system with fast setup.",
      },
      {
        q: "How much does a restaurant POS system cost in Pakistan?",
        a: "Hulm restaurant point of sale starts at PKR 2,500 per month with a 14-day free trial. Plans with more users and branches are available as you grow.",
        link: pricingLink,
      },
      {
        q: "Can I manage my own delivery riders with Hulm?",
        a: "Yes. Delivery orders can be assigned and tracked, and the logistics app adds rider and vehicle management.",
        link: { label: "logistics management", href: "/logistics-management-software/" },
      },
      {
        q: "Does Hulm integrate with Foodpanda?",
        a: "Not at the moment. Delivery orders can be entered at the POS so sales and stock stay in one place, and the logistics app helps you manage your own delivery riders.",
      },
      {
        q: "Does the POS support PRA and SRB for restaurants?",
        a: "Provincial requirements (PRA in Punjab, SRB in Sindh, KPRA in Khyber Pakhtunkhwa) are reviewed as part of your setup, alongside FBR where it applies. Share your registration details so the team can confirm the configuration.",
        link: { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
      },
    ],
  },
  "pharmacy-store": {
    primaryKeyword: "pharmacy POS system",
    schemaName: "Hulm Pharmacy POS",
    h1: "Pharmacy POS system that keeps billing close to batch and expiry",
    intro:
      "Hulm pharmacy point of sale (POS) software connects the counter with product records, purchasing, batches and expiry visibility, so staff can sell quickly while keeping a clear view of pharmacy stock.",
    h2: {
      features: "Pharmacy POS features for medicine batches, expiry and billing",
      fbr: "FBR compliance for your pharmacy without the headache",
      who: "Pharmacies this POS system supports",
    },
    faqHeading: "Pharmacy POS system FAQs",
    faqs: [
      {
        q: "What is a pharmacy point of sale system?",
        a: "A pharmacy POS system records medicine sales, prints invoices and updates stock with batch and expiry details, so the counter and inventory stay in sync.",
      },
      {
        q: "Does the pharmacy POS software track expiry dates?",
        a: "Yes. Batch and expiry information is stored in the configured inventory workflow, giving staff visibility of short-dated stock.",
      },
      {
        q: "Is Hulm pharmacy POS FBR integrated?",
        a: "Yes. FBR integration is available for eligible pharmacies in Pakistan, adding the FBR invoice number and QR code to receipts.",
        link: fbrLink,
      },
    ],
  },
  "bakery-pos-system": {
    primaryKeyword: "bakery POS system",
    schemaName: "Hulm Bakery POS",
    h1: "Bakery POS system for counter sales and advance orders in one workflow",
    intro:
      "Hulm bakery POS software connects daily billing with bakery products, availability, custom orders and sales records, so your team can manage today's counter and upcoming orders together.",
    h2: {
      features: "Bakery POS system features: billing, recipes and ingredients",
      fbr: "FBR-connected invoicing in a POS system for bakery counters",
      who: "Bakeries this POS system supports",
    },
    faqHeading: "Bakery POS system FAQs",
    faqs: [
      {
        q: "What exactly is bakery POS software?",
        a: "It is bakery management software built around the counter: billing, custom and advance orders, product availability and daily sales reports for bakeries and sweet shops.",
      },
      {
        q: "Is Hulm bakery POS FBR compliant?",
        a: "Yes. FBR integration is available for eligible bakeries in Pakistan, with the FBR invoice number and QR code on each receipt.",
        link: fbrLink,
      },
      {
        q: "Does the bakery POS track recipes and ingredients?",
        a: "Yes. Ingredients can be linked to bakery products, so ingredient stock moves with every sale and you can see what each recipe uses. The recipe and costing setup is confirmed with you during onboarding.",
      },
      {
        q: "Can it help reduce spoilage and waste?",
        a: "Yes. Batch and expiry visibility, plus sales history by product, help you bake closer to demand and spot slow items early.",
      },
    ],
  },
  "salon-pos": {
    primaryKeyword: "salon POS",
    schemaName: "Hulm Salon & Spa POS",
    h1: "Salon POS system that brings appointments, billing and products to one front desk for salons and spas",
    intro:
      "Hulm salon POS software connects the salon calendar with services, customer records, product sales and reporting, so hair, beauty, nail salons and spas share one clear operating view.",
    h2: {
      features: "Salon POS system features for services and retail",
      useCases: "Hair, nail, spa and beauty salon POS setups",
      who: "Hair, beauty and nail salons this POS supports",
    },
    faqHeading: "Salon & spa POS FAQs",
    faqs: [
      {
        q: "What is a salon and spa POS system?",
        a: "A salon and spa POS system manages appointments, service billing, staff, retail product sales and customer history from one front desk. Hulm runs as a beauty salon POS, a hair salon system or a spa POS on the same platform.",
      },
      {
        q: "What is the best POS system for nail salons?",
        a: "Nail salons need quick appointment booking, service and product billing and repeat-client records. Hulm nail salon POS covers these and grows with extra branches.",
      },
      {
        q: "Can Hulm POS be used in hair salons?",
        a: "Yes. Hulm works as a hair salon POS: book appointments, bill services and products, and track staff activity in the same system. Spas can use the same spa POS software for treatments and retail products.",
      },
    ],
  },
  "clothing-store": {
    primaryKeyword: "clothing store POS system",
    schemaName: "Hulm Clothing Store POS",
    h1: "POS System for Clothing Store: every size, colour and sale connected",
    intro:
      "Hulm is a POS system for clothing store teams that brings variant-heavy catalogues, barcode billing, exchanges, customer records and branch inventory into one fashion retail workflow.",
    h2: {
      overview: "A POS system for clothing store stock, built around product variants",
      features: "Clothing store POS features for variants and exchanges",
      fbr: "FBR-connected invoicing for your clothing store POS",
      who: "Clothing and fashion stores this POS supports",
    },
    faqHeading: "Clothing store POS FAQs",
    faqs: [
      {
        q: "What is the best POS system for a clothing store in Pakistan?",
        a: "Look for size and colour variants, barcode billing, returns and exchanges, and stock by branch. Hulm clothing POS covers these, with FBR integration available.",
      },
      {
        q: "Can Hulm POS handle returns and exchanges in my clothing store?",
        a: "Yes. Exchanges are recorded through the POS flow so the sale, payment difference and stock movement stay connected.",
      },
      {
        q: "How does Hulm POS help with managing clothing inventory?",
        a: "Stock is tracked by variant and location, so staff can confirm the right size and colour before the customer leaves.",
        link: { label: "inventory management", href: "/inventory-management/" },
      },
    ],
  },
  cafe: {
    primaryKeyword: "cafe POS system",
    schemaName: "Hulm Cafe POS",
    h1: "Cafe POS system: the best POS for cafe management",
    h2: {},
    faqHeading: "Cafe POS system FAQs",
    faqs: [
      {
        q: "What is a cafe point of sale system?",
        a: "A cafe point of sale system takes quick-service orders, applies modifiers, prints receipts and updates ingredient stock, so coffee shops serve faster at busy times.",
      },
      {
        q: "Does Hulm support FBR integration for cafes?",
        a: "Yes. FBR integration is available for eligible cafes in Pakistan.",
        link: fbrLink,
      },
    ],
  },
  "jewellery-shop": {
    primaryKeyword: "jewelry POS system",
    schemaName: "Hulm Jewelry POS",
    h1: "Best Jewelry POS System & Software",
    h2: {},
    faqHeading: "Jewelry POS system FAQs",
    faqs: [
      {
        q: "What is a jewelry POS system?",
        a: "It records detailed item information, pricing inputs and customer purchase history alongside billing and stock, built for jewelry stores and boutiques.",
      },
      {
        q: "How much does a jewelry POS system cost?",
        a: "Hulm POS starts at PKR 2,500 per month with a 14-day free trial.",
        link: pricingLink,
      },
    ],
  },
  "electric-store": {
    primaryKeyword: "electric store POS system",
    schemaName: "Hulm Electric Store POS",
    h1: "POS System for Electric Store: serial numbers, warranties and stock",
    intro:
      "Hulm is a POS system for electric store owners that streamlines sales, tracks serialised appliances, manages warranties and keeps inventory accurate across electrical and electronics shops.",
    h2: {
      overview: "Hulm POS: The POS System for Electric Store Serials, Cables and Warranties",
      features: "Why choose Hulm as your electronics store POS?",
      who: "Who can benefit from Hulm electrical shop POS?",
    },
    faqHeading: "Electric store POS FAQs",
    faqs: [
      {
        q: "What is the best POS system for an electric store in Pakistan?",
        a: "A POS for an electrical or electronics shop should handle product variants, serial records, warranties, contractor sales and FBR invoicing. Hulm POS covers these in one cloud system.",
      },
      {
        q: "Is the electric store POS FBR integrated?",
        a: "Yes. FBR integration is available for eligible electric stores in Pakistan.",
        link: fbrLink,
      },
    ],
  },
  "furniture-store": {
    primaryKeyword: "POS system for furniture store",
    schemaName: "Hulm Furniture Store POS",
    h1: "Best POS system for furniture stores and showrooms",
    h2: {},
    faqHeading: "Furniture store POS FAQs",
    faqs: [
      {
        q: "What is the best POS system for a furniture store?",
        a: "It should connect showroom sales, custom orders, deliveries and warehouse stock. Hulm does this for furniture showrooms from one dashboard.",
      },
      {
        q: "How much does furniture POS software cost?",
        a: "Hulm POS starts at PKR 2,500 per month with a 14-day free trial.",
        link: pricingLink,
      },
    ],
  },
  "toys-store": {
    primaryKeyword: "toy store POS system",
    schemaName: "Hulm Toy Store POS",
    h1: "Toy Store POS System & Software in Pakistan",
    h2: {},
    faqHeading: "Toy store POS FAQs",
    faqs: [
      {
        q: "What is a toy store POS system?",
        a: "It handles barcode billing, product discovery, promotions and seasonal stock for toy shops, online and in store.",
      },
      {
        q: "How much does toy store POS software cost in Pakistan?",
        a: "Hulm POS starts at PKR 2,500 per month with a 14-day free trial.",
        link: pricingLink,
      },
    ],
  },
  "manufacturing-industries": {
    primaryKeyword: "manufacturing POS system",
    schemaName: "Hulm Manufacturing POS",
    h1: "POS System for Manufacturing: sales, materials and finished goods",
    intro:
      "Hulm is a POS system for manufacturing businesses that connects sales and invoicing with raw materials, work-in-progress and finished goods, for production units, warehouses and factories.",
    h2: {
      overview: "Hulm POS: The POS System for Manufacturing Businesses",
      features: "Why choose Hulm as your manufacturing industry POS?",
    },
    faqHeading: "Manufacturing POS system FAQs",
    faqs: [
      {
        q: "What is a POS system for manufacturers?",
        a: "A POS system for manufacturer industries connects sales and invoicing with raw-material visibility, finished-goods inventory and distributor orders.",
      },
      {
        q: "Does manufacturing POS support purchase orders and vendors?",
        a: "Yes. Purchase orders and vendor management run in the same system, so incoming materials update inventory.",
        link: { label: "purchase order management", href: "/purchase-orders/" },
      },
    ],
  },
};
