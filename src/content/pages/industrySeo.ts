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
  screensHeading?: string;
  screensDescription?: string;
  faqHeading: string;
  faqs: FaqDetailsItem[];
  blog?: { label: string; href: string };
};

const pricingLink = { label: "POS software price in Pakistan", href: "/pricing/" };
const fbrLink = { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" };

export const industrySeo: Record<string, IndustrySeo> = {
  "retail-store": {
    primaryKeyword: "Retail POS Software",
    schemaName: "Hulm Retail POS",
    h1: "Retail POS Software in Pakistan to Solve Your Shop Billing and Stock Problems",
    screensHeading: "Meet HulmPOS: A Practical POS System for Retail Shops",
    screensDescription:
      "HulmPOS brings essential retail tasks into one system. You can handle daily activities without relying entirely on scattered paperwork or spreadsheets. Instead of choosing software based only on a long feature list, see how it supports the work you actually do in your shop.",
    intro:
      "Running a retail shop shouldn’t mean struggling with billing, stock, and daily sales. HulmPOS is easy-to-use POS software for retail shops that helps you manage products, track sales, and keep stock organized in one place. Spend less time on manual records and more time growing your business.",
    h2: {
      overview: "How to Use HulmPOS in Your Daily Retail Operations",
      problems: "Does This Happen in Your Shop?",
      features: "HulmPOS Features to Help You Manage Your Retail Business",
      who: "What Types of Retail Shops Can Use HulmPOS?",
      benefits: "Why Consider HulmPOS for Your Retail Shop?",
      fbr: "Connect retail invoicing with an FBR-ready rollout",
    },
    faqHeading: "Frequently Asked Questions About Retail POS Software",
    faqs: [
      {
        q: "What is retail POS software?",
        a: "Retail POS software helps a shop process customer sales and manage related business records. Depending on the system, it may include product search, barcode scanning, sales history, inventory tracking, customer management and staff access controls.",
      },
      {
        q: "Which retail shops can use HulmPOS?",
        a: "HulmPOS can be considered by kiryana stores, grocery shops, mini-marts, supermarkets and specialty retailers that need the supported billing, inventory and record-management features. Check your specific requirements before choosing the system.",
      },
      {
        q: "Does HulmPOS support barcode billing?",
        a: "HulmPOS supports barcode scanning and searching for products by barcode or name. Confirm that your barcode scanner and product setup are compatible with your intended workflow.",
      },
      {
        q: "Can I track stock using HulmPOS?",
        a: "Yes. HulmPOS supports stock quantity updates, inventory history, inventory value and alerts for low-stock, critical-stock and out-of-stock products.",
      },
      {
        q: "Can I find an old sale or reprint a receipt?",
        a: "Yes. You can search sales history by order ID, review available transaction details and reprint receipts.",
      },
      {
        q: "What happens when I process a return?",
        a: "HulmPOS supports sales returns, and returned items are automatically added back to inventory.",
      },
      {
        q: "Can I transfer my products from another POS system to HulmPOS?",
        a: "HulmPOS supports product data import and export, along with category and customer data import/export. Transfer depends on the records available from your current system and the file format supported by HulmPOS. Review the import templates and confirm compatibility before migrating.",
      },
      {
        q: "Can I give different permissions to my staff?",
        a: "HulmPOS supports cashier, manager and administrator roles, with access to supported features and functions based on assigned permissions.",
      },
      {
        q: "Which hardware works with HulmPOS?",
        a: "HulmPOS supports compatible receipt printers, barcode scanners, cash drawers and label printers. Compatibility depends on the device model and configuration, so confirm your hardware before purchasing it.",
      },
      {
        q: "Can HulmPOS help me check cash differences at closing?",
        a: "HulmPOS supports opening and closing shifts and recording cash amounts. You can check differences between recorded figures and the cash counted, then investigate discrepancies using the available records.",
      },
      {
        q: "How can I try HulmPOS for my retail shop?",
        a: "You can start the 14-day free trial or book a demo to explore the software and assess whether it fits your shop's workflow.",
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
    primaryKeyword: "pharmacy POS software",
    schemaName: "Hulm Pharmacy POS",
    h1: "Pharmacy POS Software for Faster Billing and Better Stock Control",
    intro:
      "Manage medicine barcode scanning, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Pharmacy Store Workflow",
      problems: "Everyday Pharmacy Store Problems—and How HulmPOS Helps",
      features: "Pharmacy Store POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Pharmacy?",
      fbr: "Local Requirements and Integrations",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Does pharmacy POS track expiry dates?",
        a: "Hulm’s live page advertises batch and expiry tracking. Ask for a demonstration of alerts and checkout rules.",
      },
      {
        q: "Can HulmPOS help manage suppliers?",
        a: "Hulm has vendor and purchase-order workflows. Confirm supplier pricing and replenishment functions.",
      },
      {
        q: "Does HulmPOS support FBR integration?",
        a: "Support is described for eligible deployments. Hulm says it is not FBR-certified; confirm scope for your registration.",
        link: fbrLink,
      },
      {
        q: "Can I manage multiple pharmacy branches?",
        a: "Multi-branch options are advertised; confirm limits, transfers and reports.",
      },
    ],
  },
  "bakery-pos-system": {
    primaryKeyword: "bakery POS software",
    schemaName: "Hulm Bakery POS",
    h1: "Bakery POS Software for Faster Billing and Better Stock Visibility",
    intro:
      "Manage bread and pastry sales, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Bakery Workflow",
      problems: "Everyday Bakery Problems—and How HulmPOS Helps",
      features: "Bakery POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Bakery?",
      fbr: "Add FBR-connected invoicing to the bakery counter",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can bakery POS track ingredients?",
        a: "Hulm's live page advertises recipe and ingredient tracking. Confirm recipe deductions, costing and wastage functions during your demo and onboarding.",
      },
      {
        q: "Can I manage custom cake orders?",
        a: "Ask the team to demonstrate dates, notes, deposits, status tracking and collection workflow.",
      },
      {
        q: "Does HulmPOS support barcode or scale use?",
        a: "Confirm the exact barcode scanner and weighing-scale models and workflow.",
      },
      {
        q: "How much does bakery POS software cost?",
        a: "Ask for current pricing and whether branch, user, hardware or specialist features affect the quote.",
        link: pricingLink,
      },
    ],
  },
  "salon-pos": {
    primaryKeyword: "salon POS software",
    schemaName: "Hulm Salon & Spa POS",
    h1: "Salon POS Software for Easier Billing and Customer Management",
    intro:
      "Manage salon checkout, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Salon & Spa Workflow",
      problems: "Everyday Salon & Spa Problems—and How HulmPOS Helps",
      features: "Salon & Spa POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Salon?",
      fbr: "Local Requirements and Integrations",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Does HulmPOS include appointment booking?",
        a: "The live salon page advertises an appointment calendar and online booking. Confirm current availability and workflow.",
      },
      {
        q: "Can salon POS manage services and products?",
        a: "Ask the team to demonstrate how your service menu and retail products are recorded.",
      },
      {
        q: "Can I keep customer records?",
        a: "Customer records are part of the core POS workflow; confirm fields and history views.",
      },
      {
        q: "Can I track retail product stock?",
        a: "Use the inventory features available in your plan and confirm low-stock reporting.",
      },
    ],
  },
  "clothing-store": {
    primaryKeyword: "POS system for clothing store",
    schemaName: "Hulm Clothing Store POS",
    h1: "Clothing Store POS System for Faster Billing and Size-Colour Stock Control",
    intro:
      "Manage size and colour variants, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Clothing Store Workflow",
      problems: "Everyday Clothing Store Problems—and How HulmPOS Helps",
      features: "Clothing Store POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Clothing Store?",
      fbr: "Add FBR-connected invoicing to your clothing store POS",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can a clothing POS track sizes and colours?",
        a: "Hulm's retail page advertises size/colour variant management. Test your actual products in a demo.",
      },
      {
        q: "Can HulmPOS generate barcodes?",
        a: "The live retail page advertises barcode generation. Confirm label sizes, printer compatibility and workflow.",
      },
      {
        q: "Can it process returns and exchanges?",
        a: "Confirm exchange, refund and stock update behaviour in your selected setup.",
      },
      {
        q: "Can I import my clothing catalogue?",
        a: "Ask for the current import template and whether variants are supported in the import.",
        link: { label: "inventory management", href: "/inventory-management/" },
      },
    ],
  },
  cafe: {
    primaryKeyword: "cafe POS system",
    schemaName: "Hulm Cafe POS",
    h1: "Cafe POS System for Faster Orders and Better Stock Control",
    intro:
      "Manage coffee shop billing, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Cafe & Coffee Shop Workflow",
      problems: "Everyday Cafe & Coffee Shop Problems—and How HulmPOS Helps",
      features: "Cafe & Coffee Shop POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Cafe?",
      fbr: "Add FBR-connected invoicing to your cafe POS",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "What is the best POS system for a cafe?",
        a: "Choose a system that fits order speed, drink modifiers, ingredient tracking, payments and reporting. Demo HulmPOS with your menu.",
      },
      {
        q: "Can HulmPOS manage custom coffee orders?",
        a: "The live page advertises drink options such as sizes, milk and syrups. Confirm the modifier workflow.",
      },
      {
        q: "Can cafe POS track beans and milk?",
        a: "The live page advertises automatic ingredient deductions. Verify recipes, unit conversions and stock adjustments.",
      },
      {
        q: "Does HulmPOS support barista printers or screens?",
        a: "The live page describes barista routing; confirm device models and routing configuration.",
      },
      {
        q: "Does HulmPOS support FBR integration?",
        a: "FBR integration is described for eligible Pakistan deployments; confirm requirements for your registration.",
        link: fbrLink,
      },
    ],
  },
  "jewellery-shop": {
    primaryKeyword: "jewelry POS",
    schemaName: "Hulm Jewellery POS",
    h1: "Jewellery POS Software for Organised Billing and Inventory Records",
    intro:
      "Manage gold and silver inventory, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Jewellery Shop Workflow",
      problems: "Everyday Jewellery Shop Problems—and How HulmPOS Helps",
      features: "Jewellery Shop POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Jewellery Shop?",
      fbr: "Local Requirements and Integrations",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can HulmPOS calculate gold prices by weight and purity?",
        a: "Confirm weight, purity, making-charge and rate calculations; do not assume they are automatic.",
      },
      {
        q: "Can it track unique jewellery pieces?",
        a: "Demonstrate unique item identifiers and required item attributes.",
      },
      {
        q: "Can it manage repairs and custom orders?",
        a: "The live page mentions specialist workflows; verify status tracking and notifications.",
      },
      {
        q: "Can I take partial payments or layaways?",
        a: "The live page describes these; confirm deposits, balances, receipts and outstanding records.",
      },
    ],
  },
  "electric-store": {
    primaryKeyword: "POS system for electric store",
    schemaName: "Hulm Electric Store POS",
    h1: "Electrical Store POS Software for Billing and Product Stock Control",
    intro:
      "Manage electrical supplies inventory, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Electrical Store Workflow",
      problems: "Everyday Electrical Store Problems—and How HulmPOS Helps",
      features: "Electrical Store POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Electrical Store?",
      fbr: "Connect electrical store invoicing with an FBR-ready rollout",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can electrical-store POS track warranties?",
        a: "The live page advertises warranty/service tracking. Demonstrate warranty fields, purchase lookup and service records.",
      },
      {
        q: "Can it manage serial numbers?",
        a: "Confirm serial-number capture and lookup before relying on it for high-value equipment.",
      },
      {
        q: "Can I track cables and cut lengths?",
        a: "Confirm unit-of-measure support for cable rolls or cut lengths.",
      },
      {
        q: "Can I manage suppliers and purchases?",
        a: "Ask the team to demonstrate vendor records and purchase-order functionality.",
      },
    ],
  },
  "furniture-store": {
    primaryKeyword: "POS system for furniture store",
    schemaName: "Hulm Furniture Store POS",
    h1: "Furniture Store POS Software for Organised Sales and Inventory",
    intro:
      "Manage showroom inventory, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Furniture Store Workflow",
      problems: "Everyday Furniture Store Problems—and How HulmPOS Helps",
      features: "Furniture Store POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Furniture Store?",
      fbr: "Connect furniture showroom invoicing with an FBR-ready rollout",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can furniture POS manage showroom and warehouse stock?",
        a: "The live page targets showrooms and warehouses. Demonstrate location-level stock and transfers.",
      },
      {
        q: "Can it track custom furniture orders?",
        a: "Confirm whether specifications, status, deposits and delivery dates can be recorded.",
      },
      {
        q: "Can customers pay a deposit and balance later?",
        a: "Ask for a demonstration of partial-payment and outstanding-balance handling.",
      },
      {
        q: "Can I track delivery scheduling?",
        a: "Confirm whether delivery dates, dispatch and status are supported.",
      },
    ],
  },
  "toys-store": {
    primaryKeyword: "toy store POS software",
    schemaName: "Hulm Toy Store POS",
    h1: "Toy Store POS Software for Faster Checkout and Better Stock Visibility",
    intro:
      "Manage toys and games inventory, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Toy Store Workflow",
      problems: "Everyday Toy Store Problems—and How HulmPOS Helps",
      features: "Toy Store POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Toy Store?",
      fbr: "Local Requirements and Integrations",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can toy store POS track inventory?",
        a: "HulmPOS supports product/inventory workflows. Demonstrate stock quantities, low-stock visibility and location reports.",
      },
      {
        q: "Can I run seasonal discounts or bundle offers?",
        a: "The live page advertises promotions and bundles; confirm current tools and reporting.",
      },
      {
        q: "Can I manage multiple toy stores?",
        a: "Multi-branch use is advertised; confirm limits, transfers and reporting.",
      },
      {
        q: "Can I connect online and in-store sales?",
        a: "The live page makes e-commerce claims; verify exact platforms and inventory sync.",
      },
    ],
  },
  "manufacturing-industries": {
    primaryKeyword: "manufacturing industry POS",
    schemaName: "Hulm Manufacturing POS",
    h1: "POS Software for Manufacturing Businesses to Manage Sales and Stock",
    intro:
      "Manage finished goods, stock and daily sales with a POS workflow shaped around your business.",
    h2: {
      overview: "How HulmPOS Fits Your Manufacturing Industry Workflow",
      problems: "Everyday Manufacturing Industry Problems—and How HulmPOS Helps",
      features: "Manufacturing Industry POS Features for Daily Operations",
      who: "Who Is HulmPOS Suitable For?",
      benefits: "Why Consider HulmPOS for Your Manufacturing Business?",
      fbr: "Local Requirements and Integrations",
    },
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is HulmPOS a complete manufacturing ERP?",
        a: "Do not assume it is. Confirm each requirement. If you need BOMs, work orders, production planning or quality control, request a product gap assessment.",
      },
      {
        q: "Can HulmPOS manage finished-goods sales?",
        a: "HulmPOS provides product, billing and inventory workflows; demonstrate your process and reports.",
      },
      {
        q: "Can it track raw materials and production consumption?",
        a: "Confirm raw-material tracking, BOMs and production consumption explicitly.",
      },
      {
        q: "Can I manage warehouses or multiple locations?",
        a: "Confirm location-level inventory, transfers and reporting.",
      },
    ],
  },
};
