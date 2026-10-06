export const industriesContent = {
  // Title + meta description: live values via seoMetadata("/industries/").
  // Primary keyword: POS software for all industries / POS industries. Secondary: POS systems for
  // retail, restaurants, cafes, pharmacies, salons + each industry name.
  hero: {
    eyebrow: "POS workflows by industry",
    headline: "POS software for all industries, shaped around the way you sell",
    description:
      "Hulm POS systems cover the most common POS industries: retail stores, restaurants, cafes, pharmacies, salons and more. Start with one connected sales and inventory platform, then choose the industry workflow that matches your counters, products and customers.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Free Demo", href: "/book-a-demo/" },
    proof: ["Sales and stock connected", "Multi-branch options", "FBR integration available"],
  },
  priority: {
    eyebrow: "Most common setups",
    heading: "Industries we serve with Hulm POS",
    description:
      "Each setup starts with the same Hulm POS foundation and brings the most relevant daily workflows forward for your team.",
    items: [
      {
        name: "Retail store POS system", slug: "retail-store", image: "/images/industries/retail.jpg",
        description: "Keep checkout, product stock and customer records connected across one or more locations.",
        highlights: ["Barcode-ready selling", "Branch-level stock visibility", "Customer purchase history"],
      },
      {
        name: "Restaurant POS system", slug: "restaurant-pos", image: "/images/industries/restaurant.jpg",
        description: "Coordinate counter and table orders with a clearer flow from order entry to fulfilment.",
        highlights: ["Order and table workflows", "Menu item management", "Sales and stock reporting"],
      },
      {
        name: "Pharmacy POS system", slug: "pharmacy-store", image: "/images/industries/pharmacy.jpg",
        description: "Sell quickly while keeping closer visibility over product stock, batches and expiry dates.",
        highlights: ["Product and batch records", "Expiry visibility", "Fast counter billing"],
      },
      {
        name: "Bakery POS system", slug: "bakery-pos-system", image: "/images/industries/bakery.jpg",
        description: "Bring counter sales, product availability and made-to-order work into one practical view.",
        highlights: ["Counter sales", "Batch and expiry visibility", "Advance order tracking"],
      },
      {
        name: "Salon & spa POS system", slug: "salon-pos", image: "/images/industries/salon.jpg",
        description: "Connect appointments, service billing, retail products and customer history for the front desk.",
        highlights: ["Appointment workflows", "Service and product billing", "Customer records"],
      },
      {
        name: "Clothing store POS system", slug: "clothing-store", image: "/images/industries/clothing.jpg",
        description: "Manage size and colour variants while making sales, exchanges and stock checks easier.",
        highlights: ["Size and colour variants", "Exchanges and returns", "Stock by location"],
      },
    ],
  },
  foundation: {
    eyebrow: "One connected foundation",
    heading: "The core stays simple as the workflow changes",
    description:
      "Hulm keeps the essentials together, so the POS system for your industry does not become another disconnected tool to manage.",
    items: [
      { title: "Sell with less friction", description: "Give the counter team a focused route through billing, payments and customer records." },
      { title: "Keep stock in view", description: "Connect sales activity with product availability, purchasing and branch-level stock movement." },
      { title: "See what needs attention", description: "Use shared sales and inventory reporting to follow performance and spot operational gaps." },
    ],
  },
  additional: {
    eyebrow: "More business types",
    heading: "More POS systems for specialised industries",
    description: "For businesses with more specialised selling, stock or production needs.",
    items: [
      { name: "Cafe POS", slug: "cafe", image: "/images/industries/cafe.jpg", description: "Quick-service ordering, menu control and ingredient visibility." },
      { name: "Furniture store POS", slug: "furniture-store", image: "/images/industries/furniture.jpg", description: "Showroom sales, item details and warehouse stock coordination." },
      { name: "Toy store POS", slug: "toys-store", image: "/images/industries/toys.jpg", description: "Barcode selling, product discovery and seasonal stock control." },
      { name: "Jewellery shop POS", slug: "jewellery-shop", image: "/images/industries/jewelry.jpg", description: "Detailed item records, pricing inputs and customer purchase history." },
      { name: "Electric store POS", slug: "electric-store", image: "/images/industries/electric.jpg", description: "Product variants, serial records and contractor sales workflows." },
      { name: "Manufacturing POS", slug: "manufacturing-industries", image: "/images/industries/manufacturing.jpg", description: "Sales, material visibility and finished-goods coordination." },
    ],
  },
  compliance: {
    eyebrow: "Pakistan-ready operations",
    heading: "Add FBR integration to the workflow that fits your business",
    description:
      "Hulm can support FBR-connected invoicing alongside the POS and inventory workflows your team uses every day. The Hulm team can confirm the right setup for your location and plan.",
    primaryCta: { label: "Explore FBR Integration", href: "/fbr-integrated-pos-pakistan/" },
    secondaryCta: { label: "Discuss Your Setup", href: "/contact/" },
  },
  faq: {
    eyebrow: "Industry questions",
    heading: "POS industries FAQs",
    items: [
      { q: "What is a POS system?", a: "A POS (point of sale) system records sales, prints receipts and updates inventory at the moment of sale. Hulm POS adds customers, purchasing and reporting in one cloud system.", link: { label: "what is POS", href: "/blog/what-is-pos/" } },
      { q: "Which POS industries does Hulm serve?", a: "Hulm POS serves retail stores, restaurants, cafes, pharmacies, bakeries, salons and spas, clothing, jewellery, electric, furniture and toy stores, and manufacturers." },
      { q: "How is each industry setup different?", a: "The core POS and inventory platform stays the same. The recommended workflow, terminology and tools change to match how that type of business sells and manages stock or services." },
      { q: "Can Hulm support more than one business type?", a: "Yes. If your operation combines formats, such as a bakery with a cafe or a salon that also sells products, the Hulm team can help map the right mix of workflows." },
      { q: "Can I add branches later?", a: "Yes. Hulm offers multi-branch options; the right plan depends on the users, counters, branches and workflows you need.", link: { label: "POS pricing", href: "/pricing/" } },
      { q: "Is FBR integration available for every industry?", a: "Yes. FBR integration is available for every industry setup in Pakistan. The Hulm team confirms the scope for your business before go-live." },
      { q: "What if my industry is not listed?", a: "Choose the POS system for the industry with the closest sales and stock workflow, then discuss the differences with Hulm. The team can confirm whether the POS software fits your operating model." },
    ],
  },
  finalCta: {
    eyebrow: "Not sure where to start?",
    heading: "Show us how your team sells today",
    description: "We’ll help you identify the closest workflow, the right plan and the setup questions to resolve before rollout.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Free Demo", href: "/book-a-demo/" },
  },
} as const;
