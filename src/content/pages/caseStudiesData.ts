export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  location: string;
  businessSize: string;
  image: string;
  excerpt: string;
  clientProfile: {
    name: string;
    type: string;
    location: string;
    size: string;
    description: string;
  };
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionPoints: string[];
  implementationSteps: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    description: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  conclusion: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const caseStudiesData: CaseStudy[] = [
  {
    id: "the-laptop-store",
    slug: "implementing-a-pos-system-for-retail-the-laptop-store",
    title: "Retail POS Systems for The Laptop Store",
    metaTitle: "Implementation Hulm POS System for Retail: The Laptop Store",
    metaDescription: "Explore how POS System for retail transformed operations. Learn how efficient transactions, inventory management and tax compliance drove growth with Hulm POS.",
    client: "The Laptop Store",
    industry: "Computer Retail & Electronics",
    location: "Karachi, Pakistan",
    businessSize: "Medium-sized Retailer",
    image: "/images/case-studies/laptop-store.webp",
    excerpt: "Mustafa Sheikh decided to implement a POS system integrated with the FBR to automate sales data reporting directly to the tax authority. He chose Hulm POS Solutions specifically for retail Point Of Sale systems.",
    clientProfile: {
      name: "The Laptop Store",
      type: "Retail Electronics Shop",
      location: "Karachi, Pakistan",
      size: "Medium-sized (~1,200 active SKUs)",
      description: "Mustafa Sheikh runs one of Karachi’s busier laptop and accessories retail counters, with daily footfall spanning walk-in buyers, corporate bulk orders, and warranty service customers. Before Hulm, every sale was logged manually across a register and a separate Excel sheet for stock."
    },
    challenge: "Logging sales across paper registers and separate spreadsheets caused frequent stock discrepancies on high-turnover accessories, slow peak checkout queues, and consumed two full working days every month for manual FBR tax filing.",
    challengePoints: [
      "Stock discrepancies: because inventory wasn't updated at the point of sale, popular SKUs (chargers, RAM upgrades, specific laptop models) showed 'in stock' on paper while the shelf was empty, causing lost sales and refund requests.",
      "Manual FBR tax filing: sales tax data had to be compiled by hand at month-end for FBR reporting, a tedious process that ate roughly two full working days per month with ongoing risk of calculation errors.",
      "Slow checkout during peak hours: multi-item invoices (laptop plus bag, mouse, and extended warranty) took several manual steps to price, tax, and total, creating weekend queues."
    ],
    solution: "Deployed Hulm POS with native FBR API integration, single-screen multi-item checkout, and SKU-specific low-stock alerts.",
    solutionPoints: [
      "Single-screen checkout UI built around The Laptop Store's most common basket combinations (device + accessory + warranty).",
      "Low-stock auto-alerts set at SKU-specific reorder thresholds rather than one blanket threshold.",
      "Real-time FBR sales-tax computation attached to every invoice at the point of sale, eliminating month-end compilation."
    ],
    implementationSteps: [
      {
        title: "Needs Assessment & Flow Mapping",
        description: "Mapped peak-hour transaction flow to identify where checkout time was lost. Audited ~1,200 active SKUs across laptops, peripherals, and accessories, and reviewed 12 months of prior FBR filings to configure tax categories correctly."
      },
      {
        title: "System Customization",
        description: "Configured single-screen checkout UI, SKU-specific low-stock alerts, and instant barcode scanning for fast counter turnaround."
      },
      {
        title: "Integration with FBR",
        description: "Established a secure API connection between Hulm POS and the FBR database for automatic per-transaction digital invoice reporting with verifiable QR codes."
      },
      {
        title: "Staff Training & Hypercare",
        description: "Delivered two half-day sessions covering checkout, stock adjustments, and tax reports, supported by a two-week hypercare period with same-day response."
      }
    ],
    results: [
      { metric: "40%", description: "Faster checkout during peak weekend hours" },
      { metric: "2 Days", description: "Reclaimed monthly from manual FBR tax prep" },
      { metric: "0", description: "Manual tax-filing errors reported since go-live" },
      { metric: "100%", description: "Real-time stock accuracy across 1,200+ SKUs" }
    ],
    quote: {
      text: "We used to close the shop an hour late every month just to get the tax numbers right. Now the report is already sitting there when we need it.",
      author: "Mustafa Sheikh",
      role: "Owner, The Laptop Store"
    },
    conclusion: "For The Laptop Store, the POS switch wasn't just about speed at the counter—it removed a recurring monthly compliance burden and gave Mustafa real-time visibility into stock. FBR compliance and inventory accuracy now operate seamlessly in tandem.",
    faqs: [
      {
        question: "How long does implementation take for a computer retailer?",
        answer: "For a single-outlet retailer like The Laptop Store, Hulm's typical implementation (needs assessment, customization, FBR integration, and staff training) runs 1 to 3 weeks, depending on SKU count and prior data cleanup needed."
      },
      {
        question: "Does Hulm POS support serialized inventory and warranty tracking?",
        answer: "Yes. Hulm's inventory module supports serialized and non-serialized stock, warranty tracking, and SKU-level reorder alerts, which suit computer and electronics retailers handling both devices and accessories."
      },
      {
        question: "How does the automated FBR integration work?",
        answer: "Hulm supports FBR compliance and helps businesses generate compliant invoices automatically. Once your business is registered with FBR (a process Hulm guides you through for free), every sale you process generates an FBR-compliant invoice with a QR code and records the transaction. You do not need to file invoices manually for day-to-day transactions."
      }
    ]
  },
  {
    id: "real-tech-system",
    slug: "real-tech-pos-system-karachi",
    title: "Retail POS Systems for Real Tech System",
    metaTitle: "Real Tech System POS Case Study: Retail POS in Karachi",
    metaDescription: "Real Tech System reduced warranty-claim handling time and automated FBR filing with Hulm POS. Read the full Karachi computer retail case study.",
    client: "Real Tech System",
    industry: "Computer Retail & Hardware",
    location: "Karachi, Pakistan",
    businessSize: "Medium-sized Retailer",
    image: "/images/case-studies/real-tech.webp",
    excerpt: "Muhammad Khurram selected Hulm POS Solutions to manage a wide spread of fast-moving accessories, streamline warranty lookups from minutes to seconds, and automate FBR tax filing.",
    clientProfile: {
      name: "Real Tech System",
      type: "Retail Shop",
      location: "Karachi, Pakistan",
      size: "Medium-sized",
      description: "Muhammad Khurram's store carries a wide spread of lower-ticket, high-volume accessory items alongside laptops, keyboards, mice, and headphones that turn over fast and generate frequent warranty and exchange requests."
    },
    challenge: "Handling warranty claims via paper registers made disputed returns slow to resolve, fast-moving accessories were constantly out of stock, and month-end FBR tax filing was a stressful ordeal.",
    challengePoints: [
      "Warranty and exchange requests for accessories were logged in a paper register with no link back to the original sale, making disputed claims slow to resolve.",
      "High-volume, low-value SKUs (cables, mice, headphones) were harder to keep accurately stocked than big-ticket laptops, since manual counts weren't done as often.",
      "FBR tax filing was handled manually at month-end, creating stress and consuming days of productive retail time."
    ],
    solution: "Rolled out Hulm POS with automated digital receipt lookup, category-specific reorder thresholds, and real-time per-transaction FBR compliance.",
    solutionPoints: [
      "Every sale is automatically linked to a digital receipt record, so warranty and exchange requests can be verified in seconds.",
      "Category-specific reorder thresholds tighter for high-turnover accessories, wider for higher-value laptops.",
      "Automatic FBR tax computation applied at checkout across all product categories."
    ],
    implementationSteps: [
      {
        title: "Product Mix & Warranty Workflow Review",
        description: "Reviewed the full product mix—laptops, keyboards, mice, headphones—to right-size inventory alert thresholds per category and mapped the warranty process to eliminate paper logs."
      },
      {
        title: "Digital Receipt Lookup Setup",
        description: "Configured digital receipt lookup by customer phone number or invoice ID for instant warranty verification."
      },
      {
        title: "FBR API Integration",
        description: "Connected POS directly to the FBR reporting database for real-time per-transaction reporting."
      },
      {
        title: "Staff Training & Go-Live",
        description: "Trained counter staff on rapid receipt lookup, barcode scanning, and stock adjustment procedures."
      }
    ],
    results: [
      { metric: "< 1 Min", description: "Warranty & exchange claims resolution time" },
      { metric: "100%", description: "Automated FBR filing with zero manual compilation" },
      { metric: "35%", description: "Reduction in accessory stock-out incidents" },
      { metric: "2x", description: "Faster checkout queue turnover" }
    ],
    quote: {
      text: "Before, if someone came back with a broken mouse three weeks later, we had to dig through the register to prove they bought it here. Now it’s one search.",
      author: "Muhammad Khurram",
      role: "Owner, Real Tech System"
    },
    conclusion: "Real Tech System solved both warranty verification bottlenecks and tax compliance with Hulm POS, gaining a single reliable system that scales across high-ticket devices and fast-moving accessories alike.",
    faqs: [
      {
        question: "Can Hulm POS handle category-specific inventory rules?",
        answer: "Yes. Hulm supports category-specific inventory rules, so a store selling laptops alongside accessories like cables and headphones can set different reorder thresholds and tracking rules per category."
      },
      {
        question: "How does digital receipt lookup assist with warranty returns?",
        answer: "Every sale is linked to a digital receipt record, so staff can verify a purchase and process a warranty or exchange claim within seconds without searching paper logs."
      },
      {
        question: "Is this platform customized for electronics and IT retailers?",
        answer: "Real Tech System uses the same FBR-integrated Hulm POS platform as other retail clients, configured specifically around its accessory-heavy product mix and warranty workflow."
      }
    ]
  },
  {
    id: "elate-cc",
    slug: "implementing-pos-systems-for-medical-euquipment-industry",
    title: "Medical POS Systems for Elate CC Pvt Ltd",
    metaTitle: "Medical Equipment POS Case Study | Elate CC & Hulm",
    metaDescription: "See how Elate CC Pvt Ltd, a leading medical devices and surgical supplies distributor, streamlined operations and FBR compliance with Hulm's POS system.",
    client: "Elate CC Pvt Ltd",
    industry: "Medical Equipment & Surgical Supplies",
    location: "Karachi, Pakistan",
    businessSize: "Large Enterprise (12+ Years)",
    image: "/images/case-studies/elate.webp",
    excerpt: "Elate CC Pvt Ltd, one of Pakistan's largest suppliers of medical devices, surgical instruments, and hospital linens, deployed Hulm POS to master batch tracking, order fulfillment, and automated FBR compliance.",
    clientProfile: {
      name: "Elate CC Pvt Ltd",
      type: "Medical Equipment Manufacturer & Distributor",
      location: "Karachi, Pakistan",
      size: "Large (12+ years in operation)",
      description: "Elate CC Pvt Ltd supplies hospitals and clinics with medical devices, surgical instruments, and hospital linens—a catalog that spans thousands of SKUs, many requiring strict batch and expiry tracking."
    },
    challenge: "Spreadsheets could not keep pace with batch numbers and expiry dates across thousands of medical line items, manual order tracking caused hospital delivery delays, and tax reporting complexity was mounting.",
    challengePoints: [
      "Inventory across thousands of line items was tracked with spreadsheets that couldn't keep pace with batch numbers and expiry dates, creating compliance and liability risks.",
      "Manual order tracking caused shipment delays to hospital and clinic customers who depend on strict, predictable delivery windows.",
      "Tax filing complexity grew as healthcare regulations evolved, with no automated system translating sales into FBR-ready reports.",
      "Post-sale support requests (replacement parts, warranty claims) lacked an integrated history, slowing response times."
    ],
    solution: "Deployed Hulm POS with an advanced batch & expiry inventory module, unified hospital order management, and secure real-time FBR integration.",
    solutionPoints: [
      "Advanced inventory module with batch management and category-specific low-stock and near-expiry alerts.",
      "Order management workflow with status tracking visible across both sales and hospital dispatch teams.",
      "Automated tax computation mapped directly to Elate CC's specific medical product tax categories."
    ],
    implementationSteps: [
      {
        title: "Catalog & Expiry Audit",
        description: "Catalogued SKU volume and batch/expiry tracking requirements across medical devices, consumables, and hospital linens."
      },
      {
        title: "B2B Order Workflow Customization",
        description: "Structured multi-stage dispatch and order tracking workflows tailored for institutional hospital procurement."
      },
      {
        title: "FBR Regulatory API Integration",
        description: "Connected Hulm POS directly with the FBR reporting database for real-time compliance."
      },
      {
        title: "Role-Based Staff Training",
        description: "Trained sales on order intake, warehouse staff on batch tracking, and finance staff on automated tax audit reports."
      }
    ],
    results: [
      { metric: "100%", description: "Batch & expiry tracking accuracy across catalog" },
      { metric: "99.4%", description: "On-time hospital order fulfillment" },
      { metric: "Zero", description: "Manual tax calculation errors and on-time FBR filing" },
      { metric: "3x", description: "Faster post-sale hospital inquiry resolution" }
    ],
    quote: {
      text: "With thousands of items and batch numbers to track, spreadsheets were always one step behind. Hulm’s system finally caught up to how big we’d actually grown.",
      author: "Operations Lead",
      role: "Elate CC Pvt Ltd"
    },
    conclusion: "Elate CC's 12-year reputation for medical supply excellence was reinforced by Hulm POS, giving the enterprise batch-level inventory accuracy, dependable tax compliance, and faster institutional response.",
    faqs: [
      {
        question: "Can Hulm POS track batch numbers and expiry dates?",
        answer: "Yes. Hulm's advanced inventory module supports batch numbers, expiry dates, and category-specific reorder alerts, which are essential for medical devices, surgical consumables, and pharmaceuticals."
      },
      {
        question: "Does Hulm POS scale to wholesale and B2B distribution?",
        answer: "Yes. Elate CC is a large-scale distributor selling to hospitals and clinics, not a walk-in retail counter. Hulm's order management and inventory tools scale to that B2B, high-SKU-count environment."
      },
      {
        question: "How does FBR reporting function for large catalogs?",
        answer: "Every sale is reported to FBR automatically through a secure API connection at the point of transaction, regardless of catalog size, completely removing manual month-end compilation."
      }
    ]
  },
  {
    id: "cupcake-queen",
    slug: "cupcake-queen-bakery-pos-qatar",
    title: "Cupcake Queen Bakery POS",
    metaTitle: "Cupcake Queen Bakery POS Case Study | Hulm Solutions",
    metaDescription: "How Cupcake Queen, a multi-branch Doha bakery, unified custom orders and reduced stock waste with Hulm's POS. Read the full case study.",
    client: "Cupcake Queen",
    industry: "Bakery, Cafe & Confectionery",
    location: "Doha, Qatar",
    businessSize: "Multi-Branch (3 Locations)",
    image: "/images/case-studies/cupcake-queen.webp",
    excerpt: "A fast-growing Doha bakery chain replaces disconnected branch registers and a WhatsApp order book with one centralized, VAT-ready POS system built for perishable inventory and custom cake orders.",
    clientProfile: {
      name: "Cupcake Queen",
      type: "Bakery & Confectionery",
      location: "Doha, Qatar",
      size: "Growing 3 branches",
      description: "Cupcake Queen grew from a single counter to three branches across Doha on the strength of its custom cakes and daily pastry case. Managing three branches on disconnected registers and WhatsApp order books was causing supply runs and scheduling conflicts."
    },
    challenge: "No cross-branch ingredient visibility, custom cake bookings lost over WhatsApp, perishable stock waste, and manual weekend sales reconciliation across 3 locations.",
    challengePoints: [
      "No cross-branch visibility: management couldn't see which branch was low on flour, cream, or packaging until staff called it in, leading to last-minute supply runs.",
      "Custom orders fell through the cracks: WhatsApp cake orders lacked a shared calendar, causing double-bookings and missed pickup dates during busy Eid and wedding seasons.",
      "Perishable stock waste: without expiry-date tracking, unsold ingredients weren't flagged in time, creating avoidable food waste.",
      "No unified sales reporting: reconciling daily sales across three branches was a slow, manual task pieced together from three separate tills."
    ],
    solution: "Deployed Hulm Bakery POS across all three branches with a shared inventory dashboard, custom-order scheduling calendar, and Qatar VAT-ready tax configuration.",
    solutionPoints: [
      "Centralized, real-time inventory dashboard giving Aisha a single view of stock and ingredient levels across all three branches.",
      "Custom-order calendar module with deposit tracking, pickup/delivery scheduling, and automatic conflict alerts.",
      "Expiry-date tagging on perishable ingredients with proactive low-stock and near-expiry alerts.",
      "QAR-based pricing with a tax engine ready to switch on VAT calculations seamlessly upon GCC regime rollout."
    ],
    implementationSteps: [
      {
        title: "Multi-Branch Stock Flow Mapping",
        description: "Mapped stock and ingredient replenishment across all three Doha locations to eliminate emergency transfers."
      },
      {
        title: "Custom Order Calendar Setup",
        description: "Configured digital order booking with deposit tracking and date conflict detection."
      },
      {
        title: "Phased Branch Rollout",
        description: "Launched flagship branch first to validate workflow before rolling out chain-wide."
      },
      {
        title: "Team Training & Management Dashboard",
        description: "Trained front-counter staff on custom orders and management on cross-branch consolidated reporting."
      }
    ],
    results: [
      { metric: "100%", description: "Real-time visibility across all 3 branches" },
      { metric: "0", description: "Double-booked or missed custom cake orders" },
      { metric: "28%", description: "Reduction in perishable ingredient waste" },
      { metric: "GCC Ready", description: "VAT compliance prepared for Qatar rollout" }
    ],
    quote: {
      text: "We were basically running three separate bakeries that happened to share a name. Now I can see all three branches from one screen, and I’m not worried about scrambling when VAT finally arrives.",
      author: "Aisha Al-Sayed",
      role: "Owner, Cupcake Queen"
    },
    conclusion: "Hulm's POS rollout gave Cupcake Queen unified operational visibility across all three branches, protected perishable margins, and future-proofed the bakery for GCC tax regulations.",
    faqs: [
      {
        question: "Can Hulm POS handle custom cake orders and deposit tracking?",
        answer: "Yes. Hulm's custom-order calendar module tracks deposits, pickup or delivery dates, and flags scheduling conflicts—built specifically for bakeries that combine a retail counter with made-to-order cakes and event catering."
      },
      {
        question: "Can multi-branch bakeries see consolidated reports?",
        answer: "Yes. Multi-branch businesses can view stock, sales, and custom orders across all locations from a single centralized dashboard, rather than reconciling each branch separately."
      },
      {
        question: "How does Hulm prepare businesses for Qatar / GCC VAT?",
        answer: "Hulm configures the tax engine for GCC-based clients so it can be activated for VAT calculation and reporting once Qatar's VAT law is formally implemented, eliminating last-minute disruptions."
      },
      {
        question: "Does the system help reduce bakery food waste?",
        answer: "Yes. Ingredients and finished goods can be tagged with expiry dates, with low-stock and near-expiry alerts to help reduce waste—a critical capability for food businesses."
      }
    ]
  },
  {
    id: "farhan-caterers",
    slug: "farhan-caterers-pos-karachi",
    title: "Farhan Caterers POS",
    metaTitle: "Farhan Caterers POS Case Study: Event Catering in Karachi",
    metaDescription: "How Farhan Caterers streamlined event bookings and automated FBR tax filing with Hulm POS. Read the full Karachi catering business case study.",
    client: "Farhan Caterers",
    industry: "Event Catering & Hospitality",
    location: "Karachi, Pakistan",
    businessSize: "Medium Enterprise",
    image: "/images/case-studies/farhan-caterers.webp",
    excerpt: "A busy Karachi event caterer replaces a diary-and-spreadsheet booking process with an FBR-integrated Hulm POS system built around advance bookings and per-event costing.",
    clientProfile: {
      name: "Farhan Caterers",
      type: "Catering & Event Food Services",
      location: "Karachi, Pakistan",
      size: "Medium-sized",
      description: "Farhan Ahmed's catering business runs on bookings for weddings, corporate functions, and private events weeks or months in advance, each with its own menu, guest count, and deposit schedule. During Karachi's wedding season and Ramadan, Farhan Caterers runs multiple simultaneous events in the same week."
    },
    challenge: "Booking diaries and spreadsheets led to scheduling uncertainties during wedding season, manual recipe recalculations per guest count caused ingredient errors, and month-end FBR filing was grueling.",
    challengePoints: [
      "Bookings and deposits were tracked in a physical diary and spreadsheet, lacking a single view of which dates were confirmed, tentative, or open.",
      "Per-event costing (scaling ingredients to guest count) was calculated by hand for every booking, causing under- or over-ordering.",
      "Staff and equipment coordination across simultaneous events relied entirely on phone calls with Farhan, creating severe bottlenecks.",
      "FBR tax filing was compiled manually at month-end from hundreds of event invoices, consuming valuable staff hours."
    ],
    solution: "Implemented Hulm POS with an advance event booking calendar, automated guest-count recipe scaling, and real-time FBR invoice integration.",
    solutionPoints: [
      "A dedicated booking calendar showing confirmed, tentative, and open event dates at a glance, with deposit status attached to each booking.",
      "Per-event costing tools that automatically scale ingredient and menu-item quantities based on guest count.",
      "Automatic FBR sales-tax computation applied to every event invoice at the point of billing."
    ],
    implementationSteps: [
      {
        title: "Booking-to-Delivery Workflow Mapping",
        description: "Mapped initial inquiry, deposit collection, menu finalization, kitchen prep, and final invoicing."
      },
      {
        title: "Recipe & Costing Module Setup",
        description: "Input master recipes to enable automatic scaling of ingredient orders by guest count."
      },
      {
        title: "FBR API Setup",
        description: "Connected POS directly to the FBR database for real-time invoice generation and tax compliance."
      },
      {
        title: "Staff Training Before Wedding Season",
        description: "Trained booking coordinators on calendar management and kitchen leads on automated costing sheets."
      }
    ],
    results: [
      { metric: "100%", description: "Elimination of double-booking risks" },
      { metric: "35%", description: "Faster per-event costing and ingredient prep" },
      { metric: "Real-Time", description: "FBR tax reporting with zero manual month-end filing" },
      { metric: "3x", description: "Simultaneous event handling capacity during peak season" }
    ],
    quote: {
      text: "During wedding season, we could have three events in one week and I was the only one who knew what was actually booked. Now the whole team can see it, and the tax side just takes care of itself.",
      author: "Farhan Ahmed",
      role: "Owner, Farhan Caterers"
    },
    conclusion: "Farhan Caterers gained the operational clarity needed to scale through Karachi's high-demand wedding season without chaos, with automated costing and effortless FBR compliance.",
    faqs: [
      {
        question: "Can Hulm POS manage advance event bookings and deposit schedules?",
        answer: "Yes. Hulm's booking calendar tracks confirmed, tentative, and open event dates along with deposit status, which suits caterers and other businesses that take bookings weeks or months in advance."
      },
      {
        question: "Does the system scale ingredient quantities based on guest count?",
        answer: "Yes. Ingredient and menu-item quantities scale automatically based on guest count, eliminating manual recalculation and reducing kitchen wastage."
      },
      {
        question: "Is FBR tax integrated for catering invoices?",
        answer: "Yes, every event invoice is reported to FBR in real time through a secure API connection, the same integration used across Hulm's retail and distribution clients."
      },
      {
        question: "Can the system support multiple events on the same date?",
        answer: "Yes. The booking and staffing visibility built into Hulm POS is designed to coordinate multiple simultaneous events during high-demand seasons."
      }
    ]
  }
];

