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
    // Identical to the live WordPress title and meta description. Do not change.
    title: "POS | Best POS Software | Point of Sale Systems in Pakistan",
    description:
      "Discover POS system for small business | best POS software & point of sale systems designed to simplify operations. Get all-in-one point of sale in Pakistan",
    ogImage: "/images/uploads/2026/06/hero-image-hulm.webp",
  },
  hero: {
    eyebrow: "Cloud Point of Sale for growing businesses",
    headline: "Best POS Software in Pakistan to run sales, stock and every branch",
    description:
      "Sell faster, keep stock accurate and manage every branch from one connected point of sale system built for growing businesses in Pakistan, from a single shop to a multi-branch chain.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a demo", href: "/book-a-demo/" },
    proof: ["FBR integration available", "Multi-branch ready", "Works on your existing devices"],
    offer: "From PKR 2,500/month · No credit card required",
  },
  trust: {
    heading: "Trusted by growing businesses in Pakistan",
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
    heading: "Replace Excel, WhatsApp and paper with Best POS Software in Pakistan",
    description:
      "Hulm brings the information your team needs into one place, so every sale updates stock, customers and reports across the business.",
    items: [
      {
        title: "Slow, error-prone checkout",
        description: "Give staff a clear sales flow and keep every transaction and FBR-compliant invoice recorded in one system.",
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
    heading: "All-in-one Best POS software in Pakistan for sales, inventory and reporting",
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
    heading: "FBR-integrated POS with compliant invoicing at checkout",
    description:
      "For businesses looking for the Best POS Software In Pakistan with FBR integration, Hulm supports the setup and connects eligible transactions to the invoicing workflow, so every sale can carry an FBR invoice number and QR code. Requirements vary by business, so our team confirms the right setup with you.",
    bullets: [
      "Guidance during FBR setup",
      "Invoice and QR-code workflow support",
      "Transaction records kept with your sales data",
    ],
    cta: { label: "FBR-integrated Point of Sale Software", href: "/fbr-integrated-pos-pakistan/" },
  },
  industries: {
    eyebrow: "Built around real workflows",
    heading: "A POS system for the way your industry sells",
    description:
      "The same Point of Sale foundation, shaped for Pakistani retail stores, restaurants, pharmacies, bakeries, salons, clothing stores and more.",
    items: [
      { title: "Retail stores", href: "/industries/retail-store/", image: "/images/industries/retail.jpg" },
      { title: "Restaurants", href: "/industries/restaurant-pos/", image: "/images/industries/restaurant.jpg" },
      { title: "Pharmacies", href: "/industries/pharmacy-store/", image: "/images/industries/pharmacy.jpg" },
      { title: "Bakeries", href: "/industries/bakery-pos-system/", image: "/images/industries/bakery.jpg" },
      { title: "Salons & spas", href: "/industries/salon-pos/", image: "/images/industries/salon.jpg" },
      { title: "Clothing stores", href: "/industries/clothing-store/", image: "/images/industries/clothing.jpg" },
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
      "Give your team focused screens for selling, managing products and serving customers with the Best POS Software In Pakistan, while owners keep the wider view of every branch.",
    screens: [
      {
        title: "Create a sales order",
        description: "Move from product selection to a recorded order in a clear checkout flow.",
        image: "/images/home/dashboard/hulm-solutions-create-sales-order.webp",
      },
      {
        title: "Point of sale register",
        description: "Fast barcode lookup, category filtering, and instant shopping cart calculations at the billing counter.",
        image: "/images/home/dashboard/hulm-solutions-pos-checkout.webp",
      },
      {
        title: "Manage your catalogue",
        description: "Keep product information, pricing and availability organised in one place.",
        image: "/images/home/dashboard/hulm-solutions-products-sales-order.webp",
      },
      {
        title: "Organize categories",
        description: "Structure your catalog into departments and categories for seamless stock navigation.",
        image: "/images/home/dashboard/hulm-solutions-categories-management.webp",
      },
      {
        title: "Know your customers",
        description: "Keep customer records and purchase history connected to the sales experience.",
        image: "/images/home/dashboard/hulm-solutions-customers-sales-order.webp",
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
    note: "Starting plan",
    bullets: ["14-day free trial", "Cloud access", "Support during setup", "No credit card required"],
    cta: { label: "See pricing", href: "/pricing/" },
  },
  faq: {
    eyebrow: "What to know before you start",
    heading: "Best POS software in Pakistan: frequently asked questions",
    items: [
      {
        q: "What is the best POS software in Pakistan?",
        a: "The best POS software depends on how your business sells. Hulm POS is built for Pakistani businesses that want billing, FBR integration, inventory management, customer records, purchasing and multi-branch reporting in one cloud-based Point of Sale software, starting at PKR 2,500 per month.",
      },
      {
        q: "What does Hulm POS help me manage?",
        a: "Hulm connects sales, products, inventory, customers, purchasing and reporting so your team works from one shared point of sale system.",
        link: { label: "what a POS system is and how it works", href: "/blog/what-is-pos/" },
      },
      {
        q: "How much does POS software cost in Pakistan?",
        a: "Hulm POS starts at PKR 2,500 per month with a 14-day free trial and no setup fee. Higher plans add more users, branches and operational apps.",
        link: { label: "Pricing plans", href: "/pricing/" },
      },
      {
        q: "Can I manage more than one branch?",
        a: "Yes. Hulm gives you a shared view of sales, stock and activity across every business location.",
      },
      {
        q: "Does Hulm support FBR integration?",
        a: "Yes. Hulm supports FBR integration for eligible businesses in Pakistan and helps you set up FBR-compliant invoices with QR codes.",
        link: { label: "FBR integrated Software", href: "/fbr-integrated-pos-pakistan/" },
      },
      {
        q: "Is Hulm a good POS system for small business?",
        a: "Yes. Small shops can start on one device with the Starter plan and add users, branches and apps later, without changing systems.",
        link: { label: "choosing a POS system for small business in Pakistan", href: "/blog/best-point-of-sale-system-for-small-business-in-pakistan/" },
      },
      {
        q: "Do I need special POS hardware?",
        a: "No. Hulm runs in the web browser on computers, tablets and phones, with no app to download, and integrates easily with standard receipt printers, barcode scanners and cash drawers.",
        link: { label: "Mobile POS", href: "/mobile-pos/" },
      },
      {
        q: "Is there a free trial?",
        a: "Yes. You can start a 14-day free trial, with no credit card required, to test Hulm with your own products.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready when you are",
    heading: "Put your next sale at the centre of a better operation",
    description:
      "Try Hulm Point of Sale for 14 days, or speak with our team in Pakistan about your branches, inventory and FBR requirements.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a demo", href: "/book-a-demo/" },
  },
} as const;
