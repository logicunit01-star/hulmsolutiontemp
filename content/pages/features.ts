/**
 * Features page — benchmark layout (staging) + live SEO keyword layer.
 * Title/description: live values via seoMetadata("/features/").
 * Primary keyword: POS system features / POS software features.
 * Secondary: retail, restaurant, service business, billing, inventory, staff, integrations.
 */
export const featuresContent = {
  hero: {
    eyebrow: "Core POS",
    headline: "Complete POS System Features for Modern Businesses",
    description:
      "Hulm POS software features connect billing, products, inventory, customers, staff permissions and sales reporting in one point of sale workflow for retail stores, restaurants and other growing businesses.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Demo", href: "/book-a-demo/" },
  },
  core: {
    heading: "POS & billing features for daily sales",
    description: "The POS system features your counter uses every day, from the first scan to the daily close.",
    items: [
      { title: "Clear checkout workflow", description: "Select products, confirm quantities and record each completed sale through one focused billing screen." },
      { title: "Barcode and product search", description: "Find configured products by barcode or catalogue search and add the correct item to the sale." },
      { title: "Customer records", description: "Connect captured customer information and purchase history to the sales experience." },
      { title: "Works with your hardware", description: "Connect the receipt printers, barcode scanners, cash drawers and label printers you already use; standard POS hardware integrates easily." },
      { title: "Staff roles and permissions", description: "Configure cashier, manager and administrator access around the responsibilities of your team." },
      { title: "Sales and shift reporting", description: "Review recorded sales, user activity and the information required for your daily close process." },
    ],
  },
  tailored: {
    heading: "POS features tailored to your business",
    description: "The same POS system, configured around how your business sells: retail POS, restaurant POS or service billing.",
    items: [
      {
        title: "Retail store features",
        bullets: ["Barcode billing and returns", "Real-time inventory by branch", "Product variants and pricing"],
        link: { label: "Retail store POS", href: "/industries/retail-store/" },
      },
      {
        title: "Restaurant features",
        bullets: ["Dine-in, takeaway and delivery orders", "Table and kitchen order flow", "Menu and recipe stock"],
        link: { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
      },
      {
        title: "Service business features",
        bullets: ["Appointments and service billing", "Staff and commission tracking", "Retail product sales"],
        link: { label: "Salon & spa POS", href: "/industries/salon-pos/" },
      },
    ],
  },
  apps: {
    heading: "Add more apps as you grow",
    description:
      "Every one of these POS software features runs on the same cloud POS, so inventory management, purchasing, orders and reports stay connected to each sale. Plans start at PKR 2,500 per month.",
    pricingLink: { label: "See POS pricing", href: "/pricing/" },
  },
  faq: {
    heading: "POS features FAQs",
    items: [
      {
        q: "What features should a POS system have?",
        a: "A modern POS system should cover fast billing, barcode scanning, real-time inventory, customer records, staff permissions and sales reporting, with FBR integration where required. Hulm's POS software features cover each of these in one workflow.",
        link: { label: "what a POS system is", href: "/blog/what-is-pos/" },
      },
      {
        q: "Does Hulm POS work for retail and restaurants?",
        a: "Yes. As a retail POS, Hulm gives stores barcode billing, variants and branch stock; restaurants get dine-in, takeaway and delivery orders with kitchen flow, on the same POS software.",
      },
      {
        q: "Can I manage inventory from the POS?",
        a: "Yes. Sales are connected to product stock, and the inventory management app adds purchasing and branch-level stock visibility.",
        link: { label: "inventory management", href: "/inventory-management/" },
      },
      {
        q: "Does Hulm POS support FBR integration?",
        a: "Yes. FBR integration is available for eligible businesses in Pakistan, adding the FBR invoice number and QR code to receipts.",
        link: { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
      },
      {
        q: "Which hardware works with Hulm POS?",
        a: "Any standard POS hardware. Hulm runs in the web browser on computers, tablets and phones (no app download needed) and integrates easily with the receipt printers, barcode scanners, cash drawers and label printers you already have.",
        link: { label: "POS hardware guide", href: "/pos-hardware/" },
      },
      {
        q: "Does Hulm POS work without internet?",
        a: "No. Hulm is a cloud POS and needs an internet connection (Wi-Fi or mobile data) to record sales; there is no offline mode. Many shops keep a mobile hotspot as a backup connection.",
      },
      {
        q: "Which payment methods can I record?",
        a: "Record cash, card, mobile-wallet (such as JazzCash and EasyPaisa) and bank-transfer payments at checkout. Integrated payment gateways are not available yet and are planned for a future update.",
      },
      {
        q: "How long does it take to go live?",
        a: "Setup guidance is included. The timeline depends on your product list, branches and FBR registration, and the team shares a plan in the demo. Data migration and staff training are available as optional services.",
        link: { label: "book a free demo", href: "/book-a-demo/" },
      },
      {
        q: "Can Hulm connect with other tools?",
        a: "Yes. Supported integrations cover payments, accounting, ecommerce and FBR, with API options for custom workflows. Compatibility is confirmed before rollout.",
        link: { label: "POS integrations", href: "/integration/" },
      },
    ],
  },
} as const;
