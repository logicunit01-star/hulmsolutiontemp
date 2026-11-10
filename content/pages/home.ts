/**
 * Homepage content — benchmark design (staging) with the live SEO keyword layer.
 *
 * Approach: keep the section structure and concise voice of the staging site
 * (https://stalwart-toffee-39860f.netlify.app/). Do NOT paste legacy WordPress copy.
 * Carry the ranking signals instead: live title + meta description, primary keyword in the H1
 * and first paragraph, secondary keywords written naturally into H2s, card copy, FAQ and alt
 * text, and internal links to every product and industry page.
 *
 * Primary keyword: best POS software in Pakistan
 * Secondary: POS system / point of sale system in Pakistan, POS system for small business,
 * cloud-based POS software, FBR integrated POS, inventory management, multi-branch POS,
 * mobile POS, POS price in Pakistan, industry names.
 * Check: node scripts/seo-page-check.mjs home
 */

export const homeContent = {
  seo: {
    title: "POS | Best POS Software | Point of Sale Systems in Pakistan",
    description:
      "Best POS software in Pakistan for shops, restaurants & pharmacies. FBR-integrated Point of sale system from PKR 2,500/month. Free 14-day trial.",
    ogImage: "/images/uploads/2026/06/hero-image-hulm.webp",
  },
  hero: {
    eyebrow: "Cloud Point of Sale for growing businesses",
    headline: "Best POS Software in Pakistan to run sales, stock and every branch",
    description:
      "Hulm POS is cloud-based point of sale software in Pakistan with dedicated editions for restaurants, retail and pharmacies. Bill faster, track stock, manage customer and supplier ledgers, control purchasing and issue FBR-integrated invoices from one system. Plans start from PKR 2,500/month per user.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Watch a Demo", href: "https://www.youtube.com/watch?v=NNwtC-uayeY" },
    proof: ["Multi-branch ready", "Customer and vendor ledgers", "FBR-integrated invoices", "Free 14-day trial", "Free Excel data import"],
    offer: "From PKR 2,500/month · No credit card required",
  },
  trust: {
    heading: "Find Hulm POS on:",
    badges: [
      { src: "/images/home/trusted/top-trending-trimmed.webp", alt: "SoftwareSuggest Top Trending POS software award" },
      { src: "/images/home/trusted/highly-recommended-trimmed.webp", alt: "SoftwareSuggest Highly Recommended POS software award" },
      { src: "/images/home/trusted/goodfirms-partner.png", alt: "GoodFirms partner badge" },
      { src: "/images/home/trusted/trustpilot.webp", alt: "Hulm POS Trustpilot rating" },
      { src: "/images/home/trusted/product-hunt.png", alt: "Hulm POS on Product Hunt" },
    ],
  },
  problems: {
    eyebrow: "One source of truth",
    heading: "Replace Excel sheets, WhatsApp reports and paper notebooks with one POS Software.",
    description:
      "Hulm brings the information your team needs into one place, so every sale updates stock, customers and reports across the business.",
    items: [
      {
        title: "Slow, error-prone checkout",
        description: "Give staff a clear sales flow and keep every transaction and FBR-integrated invoice recorded in one system.",
      },
      {
        title: "Stock you cannot trust",
        description: "See real-time inventory across locations before shortages or over-ordering become expensive.",
      },
      {
        title: "Branches working in silos",
        description: "Review sales and activity across every branch without waiting for separate spreadsheets.",
      },
    ],
  },
  outcomes: {
    eyebrow: "From counter to control room",
    heading: "All-in-one POS and shop management software in Pakistan",
    description:
      "Start with the Point of Sale billing your team uses every day, then add inventory management, purchasing and reporting as your business grows.",
    items: [
      {
        label: "Sell",
        title: "A faster, simpler checkout",
        bullets: ["Cloud-based", "Customer records", "Digital sales history"],
        href: "/features/",
        linkLabel: "Explore features",
      },
      {
        label: "Stock",
        title: "Inventory that follows every sale",
        bullets: ["Live stock visibility", "Product catalogue", "Multi-location inventory"],
        href: "/inventory-management/",
        linkLabel: "Explore inventory management",
      },
      {
        label: "Operate",
        title: "Purchasing without the loose ends",
        bullets: ["Purchase orders", "Vendor records", "Receiving visibility"],
        href: "/purchase-orders/",
        linkLabel: "Explore purchase orders",
      },
      {
        label: "Grow",
        title: "Answers you can act on",
        bullets: ["Sales reporting", "Branch comparison", "Operational insights"],
        href: "/reporting-module/",
        linkLabel: "Explore reporting",
      },
    ],
    moreHeading: "More apps in the same login",
    more: [
      { label: "Mobile POS", href: "/mobile-pos/" },
      { label: "Customer management", href: "/customer-management/" },
      { label: "Order management", href: "/order-management/" },
      { label: "Vendor management", href: "/vendors-management/" },
      { label: "Logistics management", href: "/logistics-management-software/" },
      { label: "Cattle management", href: "/cattle-management-software/" },
      { label: "Ecommerce store", href: "/website/" },
    ],
  },
  compliance: {
    eyebrow: "FBR integration support",
    heading: "What is an FBR-integrated POS?",
    description:
      "An FBR-integrated POS sends each sale to the Federal Board of Revenue in real time and prints an FBR invoice number and QR code on the receipt. Tier-1 retailers, certain restaurants and other businesses are required to use one. Hulm POS supports this integration and helps you complete setup.",
    bullets: [
      "Who needs it? Depends on business type, size and province. Tier-1 retailers and certain restaurants and other businesses must integrate.",
      "Provincial tax: SRB / PRA / KPRA / BRA.",
      "How setup works: 1) Register your POS with FBR 2) Hulm connects your account 3) Your first invoice carries the FBR number and QR code.",
    ],
    cta: { label: "FBR-integrated Point of Sale Software", href: "/fbr-integrated-pos-pakistan/" },
  },
  industries: {
    eyebrow: "Built around real workflows",
    heading: "A POS system for the way your industry sells",
    description:
      "The same Point of Sale foundation, shaped for Pakistani retail stores, restaurants, pharmacies, bakeries, salons, clothing stores and more.",
    items: [
      {
        title: "Retail stores",
        href: "/industries/retail-store/",
        image: "/images/industries/retail.webp",
        alt: "Hulm POS checkout counter setup in a modern retail apparel store",
        description: "Barcode scanning, multi-branch stock, customer ledgers, supplier POs",
      },
      {
        title: "Restaurants",
        href: "/industries/restaurant-pos/",
        image: "/images/industries/restaurant.webp",
        alt: "Hulm POS dining order management and kitchen display setup",
        description: "Dine-in & takeaway, KOT management, menu modifiers, table billing",
      },
      {
        title: "Pharmacies",
        href: "/industries/pharmacy-store/",
        image: "/images/industries/pharmacy.webp",
        alt: "Hulm POS pharmacy dispensing counter with medicine stock tracking",
        description: "Counter billing, packs and units, distributor ledgers, GRN",
      },
      {
        title: "Bakeries",
        href: "/industries/bakery-pos-system/",
        image: "/images/industries/bakery.webp",
        alt: "Hulm POS fresh bakery checkout terminal with barcode scale integration",
        description: "Fast counter sales, scale integration, batch expiry, advance orders",
      },
      {
        title: "Salons & spas",
        href: "/industries/salon-pos/",
        image: "/images/industries/salon.webp",
        alt: "Hulm POS appointment scheduling and billing terminal in a salon spa",
        description: "Appointment booking, service billing, stylist commissions, client records",
      },
      {
        title: "Clothing stores",
        href: "/industries/clothing-store/",
        image: "/images/industries/clothing.webp",
        alt: "Hulm POS fashion boutique register showing size and color variant matrix",
        description: "Size & color variants, barcode tag printing, instant exchanges, stock sync",
      },
    ],
    moreHeading: "Also built for",
    more: [
      { label: "Cafes", href: "/industries/cafe/" },
      { label: "Jewellery shops", href: "/industries/jewellery-shop/" },
      { label: "Electric stores", href: "/industries/electric-store/" },
      { label: "Furniture stores", href: "/industries/furniture-store/" },
      { label: "Toy stores", href: "/industries/toys-store/" },
      { label: "Manufacturing", href: "/industries/manufacturing-industries/" },
    ],
    cta: { label: "View all industries", href: "/industries/" },
  },
  product: {
    eyebrow: "See Hulm in action",
    heading: "An easy-to-use cloud POS dashboard",
    description:
      "Give your team focused screens for selling, managing products and serving customers with Hulm POS, while owners keep the wider view of every branch.",
    screens: [
      {
        title: "Point of Sale & cashier checkout",
        description: "Fast product catalogue search, category navigation, multi-item shopping cart, on-hold sales and instant receipt checkout.",
        image: "/images/home/dashboard/hulm-pos-terminal.webp",
        alt: "Hulm POS cashier register terminal with itemized checkout and order hold",
      },
      {
        title: "Sales history & transaction records",
        description: "Review completed sales tickets, payment methods and amounts, with quick actions to issue returns or reprint receipts.",
        image: "/images/home/dashboard/hulm-pos-sales-history.webp",
        alt: "Hulm POS sales history dashboard with receipt details, returns, and payment records",
      },
      {
        title: "Customer management",
        description: "Maintain a clean directory of active customer profiles with contact numbers, email addresses and purchase records.",
        image: "/images/home/dashboard/hulm-pos-customer-management.webp",
        alt: "Hulm POS customer directory with contact details, loyalty profiles, and purchase logs",
      },
      {
        title: "Product catalogue & pricing",
        description: "Manage products, barcodes, categories, retail pricing and live inventory counts in a structured catalogue.",
        image: "/images/home/dashboard/hulm-pos-product-catalog.webp",
        alt: "Hulm POS product catalogue management screen with barcode SKUs, costs, and retail prices",
      },
      {
        title: "Categories management",
        description: "Organise inventory into clear departments and product categories for fast cashier searching and clean stock reporting.",
        image: "/images/home/dashboard/hulm-pos-categories-management.webp",
        alt: "Hulm POS product category hierarchy screen for retail department organization",
      },
      {
        title: "Inventory tracking & valuation",
        description: "Monitor item quantities, wholesale costs, retail prices and total inventory valuation with live stock updates.",
        image: "/images/home/dashboard/hulm-pos-inventory-management.webp",
        alt: "Hulm POS inventory tracking screen with multi-branch stock levels and cost valuations",
      },
      {
        title: "Inventory reorder alerts",
        description: "Stay ahead of low stock and critical shortages with automated reorder thresholds for every product.",
        image: "/images/home/dashboard/hulm-pos-reorder-alerts.webp",
        alt: "Hulm POS low-stock warning dashboard showing critical reorder thresholds",
      },
      {
        title: "Data import & export",
        description: "Easily upload or export products and inventory data in bulk with guided mapping templates.",
        image: "/images/home/dashboard/hulm-pos-data-import-export.webp",
        alt: "Hulm POS bulk data import and export module with spreadsheet template validation",
      },
    ],
  },
  customerProof: {
    eyebrow: "Customer perspectives",
    heading: "What teams in Pakistan value after moving to Hulm",
    items: [
      {
        quote: "After a successful free trial, I now run my entire business on HulmPOS because it is simple, affordable, and incredibly easy to use.",
        name: "Muhammad Rizwan",
        business: "Retail & wholesale",
      },
      {
        quote: "Hulm POS has completely transformed how I run my restaurant. The FBR integration makes tax reporting so much easier, and managing orders and inventory is a breeze. Honestly, it's the best POS software in Pakistan for restaurants.",
        name: "Eesha Khan",
        business: "Restaurant & cafe",
      },
      {
        quote: "Hulm Solutions POS is an excellent choice for retail shops in Pakistan. It's user-friendly, reliable, and perfectly suited for managing inventory and sales.",
        name: "Jawad hussain",
        business: "Retail shop owner",
      },
    ],
    cta: { label: "Read customer case studies", href: "/pos-case-studies/" },
  },
  pricing: {
    eyebrow: "Simple place to start",
    heading: "Start with Point of Sale Software, then grow at your own pace",
    description:
      "Hulm POS software price in Pakistan starts at PKR 2,500 per month. Compare what is included and choose the plan that fits your locations and team.",
    price: "PKR 2,500",
    cadence: "/ month",
    note: "Starter",
    bullets: [
      "1 user · 1 branch",
      "POS billing and cash management",
      "Basic inventory management",
      "Customer records and sales reports",
      "FBR integration available",
      "Email support",
    ],
    cta: { label: "See pricing", href: "/pricing/" },
  },
  faq: {
    eyebrow: "What to know before you start",
    heading: "POS software in Pakistan: frequently asked questions",
    items: [
      {
        q: "What is the best POS software in Pakistan?",
        a: "The best POS software for a Pakistani business supports FBR invoicing, works with your hardware, tracks stock across branches, and fits your budget. Hulm POS does this from PKR 2,500/month.",
      },
      {
        q: "What does Hulm POS help me manage?",
        a: "Hulm connects sales, products, inventory, customers, purchasing and reporting so your team works from one shared point of sale system.",
        link: { label: "what a POS system is and how it works", href: "/blog/what-is-pos/" },
      },
      {
        q: "What is shop management software?",
        a: "Shop management software is an all-in-one platform that combines retail POS billing, inventory tracking, customer ledgers, supplier purchase orders, and multi-branch sales reporting. Instead of juggling separate notebooks, spreadsheets, and messaging apps, store owners can run their entire shop from one unified dashboard.",
        link: { label: "Explore features", href: "/features/" },
      },
      {
        q: "How much does POS software cost in Pakistan?",
        a: "Hulm POS starts at PKR 2,500 per month with a 14-day free trial and no setup fee. Higher plans add more users, branches and operational apps.",
        link: { label: "Pricing plans", href: "/pricing/" },
      },
      {
        q: "Is there free POS software in Pakistan?",
        a: "Reliable, cloud-based POS software requires secure hosting, regular updates, and local support, so true business-grade POS is not completely free. However, Hulm POS offers a free 14-day trial with full access to all features and no credit card required, allowing you to test billing and stock management before subscribing from PKR 2,500/month.",
        link: { label: "Pricing plans", href: "/pricing/" },
      },
      {
        q: "Can I manage more than one branch?",
        a: "Yes. Hulm gives you a shared view of sales, stock and activity across every business location.",
      },
      {
        q: "Does Hulm support FBR integration?",
        a: "Yes. Hulm supports FBR integration for eligible businesses in Pakistan and helps you set up FBR-integrated invoices with QR codes.",
        link: { label: "FBR integrated Software", href: "/fbr-integrated-pos-pakistan/" },
      },
      {
        q: "Is Hulm a good POS system for small business?",
        a: "Yes. Small shops can start on one device with the Starter plan and add users, branches and apps later, without changing systems.",
        link: { label: "choosing a POS system for small business in Pakistan", href: "/blog/best-point-of-sale-system-for-small-business-in-pakistan/" },
      },
      {
        q: "Which hardware works with Hulm?",
        a: "Hulm works seamlessly with any standard POS hardware, including thermal receipt printers (USB, LAN, and Bluetooth), USB and wireless barcode scanners, cash drawers, and barcode label printers. Because Hulm is web-based, you can use your existing computers, tablets, or phones without purchasing expensive proprietary hardware.",
        link: { label: "POS hardware guide", href: "/pos-hardware/" },
      },
      {
        q: "Is there a free trial?",
        a: "Yes. You can start a 14-day free trial, with no credit card required, to test Hulm with your own products.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready when you are",
    heading: "Run billing, stock, and FBR invoices from one system.",
    description:
      "Try Hulm Point of Sale for 14 days, or speak with our team in Pakistan about your branches, inventory and FBR requirements.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Watch a Demo", href: "https://www.youtube.com/watch?v=NNwtC-uayeY" },
  },
} as const;
