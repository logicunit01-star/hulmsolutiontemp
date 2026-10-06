export const pricingContent = {
  // Title + meta description come from the live page via seoMetadata("/pricing/").
  // Primary keyword: POS software price in Pakistan. Secondary: POS system price, POS pricing plans,
  // billing and inventory software, multi-branch POS, FBR integration, free trial.
  hero: {
    eyebrow: "Straightforward POS pricing",
    headline: "POS software price in Pakistan: simple pricing plans for every business",
    description:
      "Hulm POS software price in Pakistan starts at PKR 2,500 per month. Start with fast billing and inventory, then add users, branches and operational apps as your business grows.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Pricing Demo", href: "/book-a-demo/" },
    proof: ["POS plans from PKR 2,500/month", "14-day trial", "No credit card required for trial"],
  },
  plans: [
    {
      name: "Starter",
      audience: "For a small shop or new business",
      price: "PKR 2,500",
      cadence: "/ month",
      capacity: "1 user · 1 branch",
      summary: "Start selling with the core POS, stock and customer workflows in one place.",
      features: [
        "POS billing and cash management",
        "Basic inventory management",
        "Customer records and sales reports",
        "FBR integration available",
        "Email support",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register?plan=starter" },
      highlighted: false,
    },
    {
      name: "Growth",
      audience: "For a growing team with purchasing needs",
      price: "PKR 5,500",
      cadence: "/ month",
      capacity: "5 users · 2 branches",
      summary: "Add supplier, purchase and order workflows as more people join the operation.",
      features: [
        "Everything in Starter",
        "Customer CRM and loyalty",
        "Vendor and purchase management",
        "Order management",
        "Advanced reporting",
        "Priority WhatsApp support",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register?plan=growth" },
      highlighted: true,
    },
    {
      name: "Business",
      audience: "For established multi-branch operations",
      price: "PKR 11,000",
      cadence: "/ month",
      capacity: "10 users · 5 branches",
      summary: "Give a larger operation more automation, integration and management visibility.",
      features: [
        "Everything in Growth",
        "Accounting dashboards",
        "Automation workflows",
        "API integrations",
        "Multi-branch operational view",
      ],
      cta: { label: "Start Free Trial", href: "https://app.hulmsolutions.com/Register?plan=business" },
      highlighted: false,
    },
    {
      name: "Enterprise",
      audience: "For larger or specialised deployments",
      price: "Custom",
      cadence: "pricing",
      capacity: "Tailored users and branches",
      summary: "Plan a rollout around complex locations, support requirements and custom workflows.",
      features: [
        "Custom deployment scope",
        "Custom module development",
        "Dedicated account manager",
        "Service-level agreement options",
        "Rollout planning with the Hulm team",
      ],
      cta: { label: "Book a Demo", href: "/book-a-demo/?plan=enterprise" },
      highlighted: false,
    },
  ],
  comparison: {
    eyebrow: "Compare at a glance",
    heading: "Compare POS system plans as the operation grows",
    description:
      "The biggest differences are team capacity, branch capacity and the operational workflows included with each plan.",
    rows: [
      { feature: "Users included", starter: "1", growth: "5", business: "10", enterprise: "Tailored" },
      { feature: "Branches included", starter: "1", growth: "2", business: "5", enterprise: "Tailored" },
      { feature: "POS and inventory", starter: true, growth: true, business: true, enterprise: true },
      { feature: "Customer records", starter: true, growth: true, business: true, enterprise: true },
      { feature: "Purchasing and vendors", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Order management", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Advanced reporting", starter: false, growth: true, business: true, enterprise: true },
      { feature: "Automation workflows", starter: false, growth: false, business: true, enterprise: true },
      { feature: "API integrations", starter: false, growth: false, business: true, enterprise: true },
      { feature: "Custom deployment scope", starter: false, growth: false, business: false, enterprise: true },
    ],
  },
  extras: {
    eyebrow: "Optional extras",
    heading: "POS add-ons and services priced separately",
    description:
      "These options apply when they are not already included in your chosen plan. Confirm the exact scope and billing schedule with Hulm before purchase.",
    items: [
      { name: "Additional user", price: "PKR 300/month" },
      { name: "Additional branch", price: "PKR 700/month" },
      { name: "WhatsApp integration", price: "PKR 1,500/month" },
      { name: "Automated SMS alerts", price: "PKR 1,000/month" },
      { name: "Advanced analytics", price: "PKR 2,500/month" },
      { name: "API access", price: "PKR 2,000/month" },
    ],
    services: [
      { name: "Data migration service", price: "PKR 10,000" },
      { name: "Dedicated staff training", price: "PKR 5,000" },
    ],
  },
  guidance: {
    eyebrow: "Before you choose",
    heading: "How to choose the right POS pricing plan",
    description:
      "Count the people and locations that need access, then identify whether purchasing, order management or advanced controls are required now.",
    items: [
      {
        title: "Start with capacity",
        description: "Confirm the users, counters and branches that need access from day one.",
      },
      {
        title: "Choose the workflows",
        description: "Decide whether your team needs only selling and stock, or also purchasing, orders and automation.",
      },
      {
        title: "Confirm the final quote",
        description: "Review billing schedule, applicable taxes, optional services and rollout scope before committing.",
      },
    ],
  },
  faq: {
    eyebrow: "Pricing questions",
    heading: "POS pricing questions",
    items: [
      {
        q: "How much does POS software cost in Pakistan?",
        a: "Hulm POS software price in Pakistan starts at PKR 2,500 per month for the Starter plan (1 user, 1 branch). Growth is PKR 5,500 and Business is PKR 11,000 per month; Enterprise is quoted to your rollout.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Hulm offers a 14-day free trial of the POS system without requiring a credit card at signup.",
      },
      {
        q: "Are there setup or installation fees?",
        a: "Standard account setup has no mandatory installation fee. Optional services such as data migration and dedicated staff training are priced separately.",
      },
      {
        q: "Is FBR integration included in the price?",
        a: "FBR integration is available with every plan. Because requirements vary by business, the Hulm team confirms the right FBR setup and any related scope with you.",
        link: { label: "FBR integrated POS software", href: "/fbr-integrated-pos-pakistan/" },
      },
      {
        q: "Which plan suits a small business?",
        a: "Most single shops start on Starter for billing software, inventory management and customer records, then move to Growth when they add staff, a second branch or purchasing.",
        link: { label: "POS system for small business in Pakistan", href: "/blog/best-point-of-sale-system-for-small-business-in-pakistan/" },
      },
      {
        q: "Can I add users or branches later?",
        a: "Yes. Additional users and branches can be added at the current add-on price, or you can move to a plan with more capacity.",
      },
      {
        q: "Can I change plans as the business grows?",
        a: "Yes. Speak with the Hulm team to confirm how the change affects users, branches, billing and included apps.",
      },
      {
        q: "Are taxes included in the listed prices?",
        a: "The page shows the current listed POS price in Pakistan for each plan. Confirm applicable taxes, billing schedule and the final payable amount with Hulm before purchase.",
      },
    ],
  },
  included: {
    heading: "Every plan runs on the same POS foundation",
    links: [
      { label: "POS features", href: "/features/" },
      { label: "Inventory management", href: "/inventory-management/" },
      { label: "Customer management", href: "/customer-management/" },
      { label: "Purchase orders", href: "/purchase-orders/" },
      { label: "Order management", href: "/order-management/" },
      { label: "Vendor management", href: "/vendors-management/" },
      { label: "Reporting", href: "/reporting-module/" },
      { label: "FBR integration", href: "/fbr-integrated-pos-pakistan/" },
      { label: "Mobile POS", href: "/mobile-pos/" },
      { label: "Integrations", href: "/integration/" },
    ],
  },
  finalCta: {
    eyebrow: "Need help choosing?",
    heading: "Bring your branches and workflow—we’ll narrow the options",
    description:
      "Start a 14-day trial or book a pricing walkthrough focused on your team size, locations and operational requirements.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Pricing Demo", href: "/book-a-demo/" },
  },
} as const;
