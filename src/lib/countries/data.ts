// Generated authentic country and regional compliance data for Hulm POS
export interface CountryFeature {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface CountryChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface CountryFaq {
  question: string;
  answer: string;
}

/** Country-specific section copy, so the four country pages do not share the same intros. */
export interface CountryCopy {
  overviewHeading: string;
  overview: string[];
  whyHeading: string;
  whyIntro: string;
  featuresHeading: string;
  featuresIntro: string;
  benefitsHeading: string;
  benefitsIntro: string;
  whyChooseHeading: string;
  whyChooseIntro: string;
  industriesIntro: string;
  faqHeading: string;
  faqIntro: string;
}

export interface CountryData {
  slug: string;
  key?: string;
  code: string;
  country: string;
  flag: string;
  role: string;
  currency: string;
  currencySymbol: string;
  regionTag: string;
  sampleSale: string;
  complianceName: string;
  complianceSub: string;
  complianceBadges: string[];
  meta: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    rating: string;
    reviewsCount: string;
    uptime: string;
  };
  copy: CountryCopy;
  challenges: CountryChallenge[];
  features: CountryFeature[];
  benefits: string[];
  whyChoose: string[];
  faqs: CountryFaq[];
}

export const COUNTRIES_DATA: Record<string, CountryData> = {
  "pos-software-ksa": {
    "slug": "pos-software-ksa",
    "key": "pos-software-ksa",
    "code": "SA",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "role": "ZATCA Phase-2",
    "currency": "SAR",
    "currencySymbol": "ر.س",
    "regionTag": "Middle East",
    "sampleSale": "1,450 SAR",
    "complianceName": "ZATCA Phase-2 Invoicing",
    "complianceSub": "Support for configured e-invoicing workflows, including required QR-code, cryptographic and FATOORA fields where applicable.",
    "complianceBadges": [
      "ZATCA workflow configuration",
      "FATOORA connection support",
      "QR-code invoice fields",
      "VAT settings by requirement"
    ],
    "meta": {
      "title": "POS | Point of Sale Software in Saudi Arabia | POS in KSA",
      "description": "Discover Point of Sale POS Software designed to simplify businesses operations with a POS system in Saudi Arabia. Get Free POS Demo Now!"
    },
    "hero": {
      "h1": "Best POS Software in Saudi Arabia | Point of Sale in KSA",
      "subtitle": "Hulm POS software in Saudi Arabia replaces manual billing, separate inventory records and disconnected reports with one point of sale system for sales, stock, customers and reporting, with ZATCA e-invoicing setup support.",
      "rating": "4.9/5",
      "reviewsCount": "100+ Verified Businesses",
      "uptime": "99.9%"
    },
    "copy": {
      "overviewHeading": "Hulm POS Software in Saudi Arabia for Retail, Restaurants and Branches",
      "overview": [
        "Running a business in Saudi Arabia means fast checkout, accurate stock and invoices that follow ZATCA e-invoicing rules. Hulm is cloud point of sale software Saudi Arabia retailers, restaurants, pharmacies and salons can open in any web browser, with sales, inventory, customers and reports in one place.",
        "Whether you run one shop in Riyadh or branches in Jeddah and Dammam, Hulm gives you one POS system KSA owners can manage from a single dashboard. Sales are recorded in Saudi riyals (SAR), VAT is configured during setup, and bilingual Arabic/English invoice layouts can be set up for your receipts."
      ],
      "whyHeading": "Why Businesses in KSA Need a Point of Sale System",
      "whyIntro": "Saudi shoppers expect quick service and correct VAT invoices. These are the everyday problems a modern POS in KSA has to solve.",
      "featuresHeading": "Point of Sale POS Software Features for Saudi Businesses",
      "featuresIntro": "Run sales, inventory, customers and reporting from one place with the same POS software in Saudi Arabia your team uses at the counter and in the back office.",
      "benefitsHeading": "Benefits of Using Hulm Point of Sale Software in Saudi Arabia",
      "benefitsIntro": "Hulm is a dependable POS in KSA built for real business challenges, from configured ZATCA invoicing workflows to multi-branch reporting.",
      "whyChooseHeading": "Why Businesses Choose Hulm POS System in KSA",
      "whyChooseIntro": "A reliable point of sale system Saudi businesses can depend on every day, with ZATCA Phase 2 setup support and Arabic/English invoicing.",
      "industriesIntro": "Tailored POS workflows for retail stores, restaurants, pharmacies, salons, bakeries and other businesses across Saudi Arabia.",
      "faqHeading": "Frequently Asked Questions: POS System in KSA",
      "faqIntro": "Answers on ZATCA e-invoicing, VAT, bilingual receipts and running branches with Hulm in Saudi Arabia."
    },
    "challenges": [
      {
        "title": "Manual Billing & Checkout Delays",
        "problem": "Cashiers struggling with manual entries and long queues at peak times, such as evenings and the Ramadan and Eid shopping season in Riyadh, Jeddah and Dammam.",
        "solution": "Barcode scanning, receipt generation and multi-tender payment workflows in one checkout."
      },
      {
        "title": "Inventory Desynchronization",
        "problem": "Stockouts during peak demand, forgotten expiration dates, and untracked stock transfers between warehouse and counters.",
        "solution": "Real-time automated inventory tracking with automated low-stock reorder triggers and multi-warehouse sync."
      },
      {
        "title": "ZATCA E-Invoicing & VAT",
        "problem": "Invoices without the fields, QR code or FATOORA connection that ZATCA e-invoicing requires, and VAT worked out by hand.",
        "solution": "Configuration support for ZATCA Phase 2 invoicing, including the required QR-code and reporting workflow."
      }
    ],
    "features": [
      {
        "title": "POS Dashboard & Fast Checkout",
        "description": "Use a streamlined dashboard to select items, apply discounts, scan barcodes and complete SAR transactions in seconds.",
        "icon": "LayoutDashboard",
        "highlight": "Faster Billing"
      },
      {
        "title": "Real-Time Inventory Tracking",
        "description": "Monitor live stock counts, warehouse distributions, and receive low-stock alerts automatically inside the cloud POS system.",
        "icon": "Boxes",
        "highlight": "Fewer Stockouts"
      },
      {
        "title": "Customer Management & Loyalty",
        "description": "Build detailed customer profiles, track purchase history, and run loyalty programs for customers across Saudi Arabia.",
        "icon": "Users",
        "highlight": "360° CRM"
      },
      {
        "title": "Catalog & Product Control",
        "description": "Add, edit, or categorize thousands of items with ease. Set variants, modifiers, and multi-currency pricing from one central dashboard.",
        "icon": "FolderKanban",
        "highlight": "Large Catalogues"
      },
      {
        "title": "Smart Product Categories",
        "description": "Organize your catalog by department, brand, or seasonal collections for rapid cashier navigation and intuitive reporting.",
        "icon": "Layers",
        "highlight": "Visual Navigation"
      },
      {
        "title": "High-Speed Barcode Scanning",
        "description": "Connect supported wireless, Bluetooth and USB barcode scanners to the checkout workflow.",
        "icon": "ScanLine",
        "highlight": "Product Lookup"
      },
      {
        "title": "Dark & Light Mode Interface",
        "description": "Work comfortably in any retail or restaurant lighting environment with an eye-friendly, modern user interface.",
        "icon": "Monitor",
        "highlight": "Modern UI"
      },
      {
        "title": "Cloud-Based 24/7 Access",
        "description": "Access business sales, reports, and branch performance anywhere, anytime from your smartphone, tablet, or laptop.",
        "icon": "Cloud",
        "highlight": "Cloud-Synced"
      }
    ],
    "benefits": [
      "Fast checkout and improved customer experience at every register",
      "Real-time inventory tracking to eliminate stock discrepancies across Saudi Arabia",
      "Monitors sales velocity to optimize pricing, promotions, and replenishment",
      "Simplified expense tracking and profit margin calculations for better budgeting",
      "Efficient employee shift scheduling and cashier performance monitoring",
      "Strengthens vendor relationships with automated purchase orders and ledger records",
      "Configured digital invoicing workflow for ZATCA Phase 2 requirements",
      "Detailed executive reports and analytics for high-confidence decision making",
      "Centralized multi-location control to manage all your branches from one screen",
      "Fast service with personalized customer reward points for repeat footfall"
    ],
    "whyChoose": [
      "User-Friendly Modern Design",
      "Connected Business Modules",
      "Universal Barcode Scanner Support",
      "Dedicated Support on WhatsApp & Phone",
      "Cloud Accessibility Anywhere",
      "Runs in Any Web Browser",
      "Customizable for Every Industry",
      "ZATCA Phase-2 Configuration Support",
      "Multi-Location Central Control",
      "Role-Based User Access",
      "Real-Time Analytics & Profit Insights",
      "Customer Purchase History & CRM",
      "Cost-Effective Pricing Plans",
      "Scalable Architecture for Growth",
      "Minimal Staff Training Required"
    ],
    "faqs": [
      {
        "question": "Does Hulm POS software in Saudi Arabia support ZATCA Phase 2?",
        "answer": "Hulm can support a ZATCA Phase 2 (FATOORA integration) workflow, including the required QR-code and invoice fields. Readiness depends on your registration, credentials and the validation completed before activation. Confirm your onboarding wave with ZATCA or a qualified adviser."
      },
      {
        "question": "What is the best POS software in Saudi Arabia?",
        "answer": "The best point of sale software in KSA combines fast SAR billing, ZATCA-ready e-invoicing, Arabic/English receipts, live inventory and branch reporting. Hulm POS software covers these in one cloud POS system for retail stores, restaurants and salons across Saudi Arabia."
      },
      {
        "question": "How is VAT handled at the counter?",
        "answer": "Hulm applies the VAT settings configured for your products during setup and shows VAT on each simplified or tax invoice. The standard VAT rate in Saudi Arabia is currently 15%; confirm the rates that apply to your products with your tax adviser."
      },
      {
        "question": "Can I print receipts in Arabic and English?",
        "answer": "Yes. Bilingual invoice layouts can be configured. Confirm the mandatory fields, language requirements and printer setup during implementation."
      },
      {
        "question": "Can I manage branches in Riyadh, Jeddah and other cities from one account?",
        "answer": "Yes. Multi-location control shows stock, sales and reports for every branch on one dashboard, with user roles controlling what each team can access."
      },
      {
        "question": "Is a cloud POS system in KSA secure?",
        "answer": "Hulm runs over encrypted HTTPS connections, with user roles and permissions controlling staff access. Card payments are processed by your payment provider. Ask the team for current security details for your deployment."
      },
      {
        "question": "Cloud vs traditional point of sale software in KSA: which is better?",
        "answer": "Cloud point of sale software gives you remote access to sales and stock, automatic updates and lower upfront costs. Hulm needs an internet connection, so keep a mobile hotspot as backup. A traditional on-premise POS only suits sites with no reliable internet."
      },
      {
        "question": "What hardware do I need for a POS system in Riyadh and Jeddah?",
        "answer": "Any PC, laptop or tablet with a modern web browser runs the Hulm POS system. Add a receipt printer, barcode scanner, cash drawer or label printer as your counter needs; standard POS hardware integrates easily. If you accept cards, use the card terminal from your bank or payment provider."
      }
    ]
  },
  "pos-software-uae": {
    "slug": "pos-software-uae",
    "key": "pos-software-uae",
    "code": "AE",
    "country": "United Arab Emirates",
    "flag": "🇦🇪",
    "role": "Gulf Regional",
    "currency": "AED",
    "currencySymbol": "AED",
    "regionTag": "Gulf Regional",
    "sampleSale": "2,890 AED",
    "complianceName": "UAE FTA Tax Invoicing",
    "complianceSub": "Configure relevant UAE FTA VAT fields and bilingual Arabic/English receipt workflows for your operation.",
    "complianceBadges": [
      "FTA VAT field configuration",
      "Bilingual Receipts (AR/EN)",
      "Multi-Currency Hub",
      "Dubai requirements reviewed"
    ],
    "meta": {
      "title": "Point of Sale Software in UAE | Best POS Software Dubai",
      "description": "Discover Point of Sale Software in UAE designed for Restaurant, Retail, Grocery & Salon POS Software. Get Free POS System UAE Now!"
    },
    "hero": {
      "h1": "Restaurant, Retail, Grocery & Salon POS Software in UAE",
      "subtitle": "Struggling with manual billing, messy inventory, and disconnected tools? Hulm POS fixes it with Retail, Grocery & Restaurant POS Software in Dubai, bringing your sales, inventory, customers, and reports into one point of sale software in UAE.",
      "rating": "4.9/5",
      "reviewsCount": "100+ Verified Businesses",
      "uptime": "99.9%"
    },
    "copy": {
      "overviewHeading": "Hulm POS Software in UAE – Reliable POS System Across the Emirates",
      "overview": [
        "Running a business in the UAE is competitive. Whether you own a retail shop in Dubai, a busy restaurant in Abu Dhabi or a beauty salon in Sharjah, you need a fast, secure and easy-to-use POS system UAE businesses can trust. Hulm is cloud POS software Dubai companies use to manage sales, inventory, staff and customers from one system.",
        "As POS software in UAE, Hulm records sales in dirhams (AED), supports bilingual Arabic/English receipts and lets you configure the VAT fields the Federal Tax Authority (FTA) expects on tax invoices. Branches across the Emirates can be managed from one dashboard."
      ],
      "whyHeading": "Why Businesses in the UAE Need a Point of Sale System",
      "whyIntro": "Retailers, restaurants and salons across Dubai and Abu Dhabi face the same daily friction. Here is how Hulm removes it.",
      "featuresHeading": "Point of Sale POS Software Features UAE Businesses Trust",
      "featuresIntro": "Run your business with all-in-one point of sale software UAE retailers and restaurants use for sales, inventory, customers and reporting, whether you trade in Dubai or anywhere across the Emirates.",
      "benefitsHeading": "Benefits of Using Hulm Point of Sale Software in UAE",
      "benefitsIntro": "Transform daily operations with Hulm, the POS software Dubai retailers, restaurants and salons use to keep sales, stock and reports in one place.",
      "whyChooseHeading": "Why UAE Businesses Choose Hulm POS System",
      "whyChooseIntro": "A reliable, scalable and easy-to-use POS system UAE businesses can depend on every day, with VAT invoicing configured for FTA requirements.",
      "industriesIntro": "Customised POS workflows for retail stores, restaurants, salons, supermarkets and more across Dubai, Abu Dhabi, Sharjah and the other Emirates.",
      "faqHeading": "Frequently Asked Questions: POS Software in UAE",
      "faqIntro": "Answers on VAT invoicing, bilingual receipts, hardware and getting started with Hulm in the UAE."
    },
    "challenges": [
      {
        "title": "Manual Billing & Checkout Delays",
        "problem": "Cashiers struggling with manual entries and long queues at peak hours, from Dubai malls to busy Abu Dhabi supermarkets and Sharjah restaurants.",
        "solution": "Barcode scanning, receipt generation and multi-tender payment workflows in one checkout."
      },
      {
        "title": "Inventory Desynchronization",
        "problem": "Stockouts during peak demand, forgotten expiration dates, and untracked stock transfers between warehouse and counters.",
        "solution": "Real-time automated inventory tracking with automated low-stock reorder triggers and multi-warehouse sync."
      },
      {
        "title": "UAE VAT & Tax Invoices",
        "problem": "Tax invoices missing the details the Federal Tax Authority (FTA) expects, and VAT calculated by hand at the counter.",
        "solution": "Configuration support for UAE FTA tax invoicing, including the required invoice and reporting workflow."
      }
    ],
    "features": [
      {
        "title": "POS Dashboard & Fast Checkout",
        "description": "Use a streamlined dashboard to select items, apply discounts, scan barcodes and complete AED transactions in seconds.",
        "icon": "LayoutDashboard",
        "highlight": "Faster Billing"
      },
      {
        "title": "Real-Time Inventory Tracking",
        "description": "Monitor live stock counts, warehouse distributions, and receive low-stock alerts automatically inside the cloud POS system.",
        "icon": "Boxes",
        "highlight": "Fewer Stockouts"
      },
      {
        "title": "Customer Management & Loyalty",
        "description": "Build detailed customer profiles, track purchase history, and run loyalty programs for customers across the UAE.",
        "icon": "Users",
        "highlight": "360° CRM"
      },
      {
        "title": "Catalog & Product Control",
        "description": "Add, edit, or categorize thousands of items with ease. Set variants, modifiers, and multi-currency pricing from one central dashboard.",
        "icon": "FolderKanban",
        "highlight": "Large Catalogues"
      },
      {
        "title": "Smart Product Categories",
        "description": "Organize your catalog by department, brand, or seasonal collections for rapid cashier navigation and intuitive reporting.",
        "icon": "Layers",
        "highlight": "Visual Navigation"
      },
      {
        "title": "High-Speed Barcode Scanning",
        "description": "Connect supported wireless, Bluetooth and USB barcode scanners to the checkout workflow.",
        "icon": "ScanLine",
        "highlight": "Product Lookup"
      },
      {
        "title": "Dark & Light Mode Interface",
        "description": "Work comfortably in any retail or restaurant lighting environment with an eye-friendly, modern user interface.",
        "icon": "Monitor",
        "highlight": "Modern UI"
      },
      {
        "title": "Cloud-Based 24/7 Access",
        "description": "Access business sales, reports, and branch performance anywhere, anytime from your smartphone, tablet, or laptop.",
        "icon": "Cloud",
        "highlight": "Cloud-Synced"
      }
    ],
    "benefits": [
      "Fast checkout and improved customer experience at every register",
      "Real-time inventory tracking to eliminate stock discrepancies across the UAE",
      "Monitors sales velocity to optimize pricing, promotions, and replenishment",
      "Simplified expense tracking and profit margin calculations for better budgeting",
      "Efficient employee shift scheduling and cashier performance monitoring",
      "Strengthens vendor relationships with automated purchase orders and ledger records",
      "Configured digital invoicing workflow for UAE FTA requirements",
      "Detailed executive reports and analytics for high-confidence decision making",
      "Centralized multi-location control to manage all your branches from one screen",
      "Fast service with personalized customer reward points for repeat footfall"
    ],
    "whyChoose": [
      "User-Friendly Modern Design",
      "Connected Business Modules",
      "Universal Barcode Scanner Support",
      "Dedicated Support on WhatsApp & Phone",
      "Cloud Accessibility Anywhere",
      "Runs in Any Web Browser",
      "Customizable for Every Industry",
      "Configured for Regional Tax Rules",
      "Multi-Location Central Control",
      "Role-Based User Access",
      "Real-Time Analytics & Profit Insights",
      "Customer Purchase History & CRM",
      "Cost-Effective Pricing Plans",
      "Scalable Architecture for Growth",
      "Minimal Staff Training Required"
    ],
    "faqs": [
      {
        "question": "Does Hulm POS software in UAE support VAT tax invoices?",
        "answer": "Yes. You can configure the VAT fields the UAE Federal Tax Authority (FTA) requires on tax invoices, and VAT is applied at the rate set for each product (the standard UAE rate is 5%). Confirm the invoice details your business needs with your tax adviser."
      },
      {
        "question": "What is the best POS software in Dubai and the UAE?",
        "answer": "The best point of sale software for a Dubai business combines fast AED billing, FTA-ready VAT invoices, bilingual receipts, live inventory and multi-branch reporting. Hulm POS software covers these in one cloud POS system you can open in any web browser."
      },
      {
        "question": "Can I print receipts in Arabic and English?",
        "answer": "Yes. Bilingual Arabic/English receipt layouts can be configured for your printer during setup."
      },
      {
        "question": "Can businesses in Dubai, Abu Dhabi and Sharjah use Hulm?",
        "answer": "Yes. Hulm is cloud POS software Dubai, Abu Dhabi and Sharjah businesses can open in any web browser with an internet connection, and branches in different Emirates can be managed from one dashboard."
      },
      {
        "question": "How do I start a free trial in the UAE?",
        "answer": "Register for the 14-day free trial (no credit card required), verify your account by email, choose the apps you need and log in with the credentials sent to you. You can also book a live demo on WhatsApp."
      },
      {
        "question": "Is a cloud POS system in the UAE secure?",
        "answer": "Hulm runs over encrypted HTTPS connections, with user roles and permissions controlling staff access. Card payments are processed by your payment provider. Ask the team for current security details for your deployment."
      },
      {
        "question": "Cloud vs traditional point of sale software in the UAE: which is better?",
        "answer": "Cloud point of sale software gives you remote access to sales and stock, automatic updates and lower upfront costs. Hulm needs an internet connection, so keep a mobile hotspot as backup. A traditional on-premise POS only suits sites with no reliable internet."
      },
      {
        "question": "What hardware do I need for a POS system in Dubai?",
        "answer": "Any PC, laptop or tablet with a modern web browser runs the Hulm POS system. Add a receipt printer, barcode scanner, cash drawer or label printer as your counter needs; standard POS hardware integrates easily. If you accept cards, use the card terminal from your bank or payment provider."
      }
    ]
  },
  "pos-software-usa": {
    "slug": "pos-software-usa",
    "key": "pos-software-usa",
    "code": "US",
    "country": "United States",
    "flag": "🇺🇸",
    "role": "North America",
    "currency": "USD",
    "currencySymbol": "$",
    "regionTag": "North America",
    "sampleSale": "$3,420",
    "complianceName": "U.S. Multi-State Sales Tax",
    "complianceSub": "Multi-state automated sales tax calculation, integrated card processing, and omnichannel inventory management.",
    "complianceBadges": [
      "Multi-State Sales Tax",
      "Payment-provider security requirements",
      "EMV & NFC Contactless",
      "Tip & Gratuity Management"
    ],
    "meta": {
      "title": "Best Point of Sale (POS) Software in USA | Hulm POS",
      "description": "Discover Point of Sale (POS) Software designed to simplify businesses operations with Cloud Based POS software in USA. Get Free POS Demo Now!"
    },
    "hero": {
      "h1": "Best Point of Sale (POS) Software in USA",
      "subtitle": "Replace manual billing, separate inventory records and disconnected reports with Hulm, cloud-based POS software in USA that keeps sales, stock, customers and reporting in one place.",
      "rating": "4.9/5",
      "reviewsCount": "100+ Verified Businesses",
      "uptime": "99.9%"
    },
    "copy": {
      "overviewHeading": "Cloud POS Software in USA for Retail, Restaurants and Services",
      "overview": [
        "Running a business in the United States takes more than a basic checkout. Sales tax is set at state and local level, so rates can differ from one state, county or city to the next, while stock, staff and customers still need attention every day. Hulm POS software in USA brings sales, inventory, customers and reports into one cloud point of sale system you can open from anywhere.",
        "As point of sale software USA retailers, restaurants, salons, pharmacies and cafes can run in any web browser, Hulm keeps one record across every till and branch. Sales are recorded in US dollars (USD), tax rates are set up for the locations you sell from during onboarding, and card payments run through your chosen payment provider."
      ],
      "whyHeading": "Why Businesses in the USA Need a Point of Sale System",
      "whyIntro": "From New York to Texas, owners lose time to slow lines, stock counts that do not match and sales tax worked out by hand. Here is how one connected system fixes each problem.",
      "featuresHeading": "Point of Sale POS Software Features for U.S. Businesses",
      "featuresIntro": "Every feature below is part of the same POS system USA stores and restaurants use to sell, track stock and report, with no separate tools to connect.",
      "benefitsHeading": "Benefits of Using Hulm Point of Sale Software in USA",
      "benefitsIntro": "Hulm is a dependable point of sale system built for real-world U.S. operations. It keeps sales, inventory and reports simple, clear and always within reach, whether you run one store or several.",
      "whyChooseHeading": "Why USA Businesses Choose Hulm POS System",
      "whyChooseIntro": "Our aim is a reliable POS system USA owners can depend on for daily tasks, with sales tax and invoicing configured for the states you trade in.",
      "industriesIntro": "Hulm adapts to the workflows of retail stores, restaurants, salons, pharmacies, bakeries and cafes across the United States.",
      "faqHeading": "Frequently Asked Questions: Hulm POS for U.S. Businesses",
      "faqIntro": "Answers on sales tax, card payments, hardware and getting started with Hulm in the United States."
    },
    "challenges": [
      {
        "title": "Manual Billing & Checkout Delays",
        "problem": "Cashiers keying in prices by hand and long lines at peak hours, from weekend rushes to holiday-season sales.",
        "solution": "Barcode scanning, receipt generation and multi-tender payment workflows in one checkout."
      },
      {
        "title": "Inventory Desynchronization",
        "problem": "Stockouts during peak demand, forgotten expiration dates, and untracked stock transfers between warehouse and counters.",
        "solution": "Real-time automated inventory tracking with automated low-stock reorder triggers and multi-warehouse sync."
      },
      {
        "title": "Multi-State Sales Tax & Records",
        "problem": "Sales tax rates that differ by state, county and city, worked out by hand and hard to reconcile at month end.",
        "solution": "Tax rates configured for each store location during setup, with every sale and its tax recorded for reporting."
      }
    ],
    "features": [
      {
        "title": "POS Dashboard & Fast Checkout",
        "description": "Use a streamlined dashboard to select items, apply discounts, scan barcodes and complete USD transactions in seconds.",
        "icon": "LayoutDashboard",
        "highlight": "Faster Billing"
      },
      {
        "title": "Real-Time Inventory Tracking",
        "description": "Monitor live stock counts, warehouse distributions, and receive low-stock alerts automatically inside the cloud POS system.",
        "icon": "Boxes",
        "highlight": "Fewer Stockouts"
      },
      {
        "title": "Customer Management & Loyalty",
        "description": "Build customer profiles, track purchase history and run loyalty programs for repeat shoppers at every U.S. location.",
        "icon": "Users",
        "highlight": "360° CRM"
      },
      {
        "title": "Catalog & Product Control",
        "description": "Add, edit, or categorize thousands of items with ease. Set variants, modifiers, and multi-currency pricing from one central dashboard.",
        "icon": "FolderKanban",
        "highlight": "Large Catalogues"
      },
      {
        "title": "Smart Product Categories",
        "description": "Organize your catalog by department, brand, or seasonal collections for rapid cashier navigation and intuitive reporting.",
        "icon": "Layers",
        "highlight": "Visual Navigation"
      },
      {
        "title": "High-Speed Barcode Scanning",
        "description": "Connect supported wireless, Bluetooth and USB barcode scanners to the checkout workflow.",
        "icon": "ScanLine",
        "highlight": "Product Lookup"
      },
      {
        "title": "Dark & Light Mode Interface",
        "description": "Work comfortably in any retail or restaurant lighting environment with an eye-friendly, modern user interface.",
        "icon": "Monitor",
        "highlight": "Modern UI"
      },
      {
        "title": "Cloud-Based 24/7 Access",
        "description": "Access business sales, reports, and branch performance anywhere, anytime from your smartphone, tablet, or laptop.",
        "icon": "Cloud",
        "highlight": "Cloud-Synced"
      }
    ],
    "benefits": [
      "Fast checkout and improved customer experience at every register",
      "Real-time inventory tracking to eliminate stock discrepancies across your U.S. stores",
      "Monitors sales velocity to optimize pricing, promotions, and replenishment",
      "Simplified expense tracking and profit margin calculations for better budgeting",
      "Efficient employee shift scheduling and cashier performance monitoring",
      "Strengthens vendor relationships with automated purchase orders and ledger records",
      "Configurable invoicing and sales-tax workflow for the U.S. deployment",
      "Detailed executive reports and analytics for high-confidence decision making",
      "Centralized multi-location control to manage all your branches from one screen",
      "Fast service with personalized customer reward points for repeat footfall"
    ],
    "whyChoose": [
      "User-Friendly Modern Design",
      "Connected Business Modules",
      "Universal Barcode Scanner Support",
      "Dedicated Support on WhatsApp & Phone",
      "Cloud Accessibility Anywhere",
      "Runs in Any Web Browser",
      "Customizable for Every Industry",
      "Configured for Regional Tax Rules",
      "Multi-Location Central Control",
      "Role-Based User Access",
      "Real-Time Analytics & Profit Insights",
      "Customer Purchase History & CRM",
      "Cost-Effective Pricing Plans",
      "Scalable Architecture for Growth",
      "Minimal Staff Training Required"
    ],
    "faqs": [
      {
        "question": "How does Hulm POS software in USA handle sales tax?",
        "answer": "U.S. sales tax is set by states and local jurisdictions, so rates differ by location. Hulm lets you configure the tax rates that apply to each store during setup, and every sale is recorded with its tax for reporting. Confirm the rates and rules for your business with your accountant or state tax authority."
      },
      {
        "question": "What is the best point of sale software for small businesses in the USA?",
        "answer": "The best point of sale system for a U.S. small business handles fast checkout, sales tax by location, inventory, customer records and reporting across stores. Hulm is cloud POS software that runs in any web browser, so a store in the USA can start without special terminals."
      },
      {
        "question": "Can I manage stores in more than one state?",
        "answer": "Yes. Multi-location control lets you run several branches from one dashboard, with stock, sales and reports for each location and tax settings configured for where each store sells."
      },
      {
        "question": "Which card payments can I accept?",
        "answer": "Card payments, including EMV chip and NFC contactless where your terminal supports them, are processed by your payment provider, and Hulm records each payment against the sale. Confirm your provider and terminal with our team before rollout."
      },
      {
        "question": "How do I get started with Hulm in the USA?",
        "answer": "Register for the 14-day free trial (no credit card required), verify your account by email, choose the apps you need and log in with the credentials sent to you. You can also book a live demo on WhatsApp."
      },
      {
        "question": "Is a cloud POS system in the USA secure?",
        "answer": "Hulm runs over encrypted HTTPS connections, with user roles and permissions controlling staff access. Card payments are processed by your payment provider. Ask the team for current security details for your deployment."
      },
      {
        "question": "Cloud vs traditional point of sale software in the USA: which is better?",
        "answer": "Cloud point of sale software gives you remote access to sales and stock, automatic updates and lower upfront costs. Hulm needs an internet connection, so keep a mobile hotspot as backup. A traditional on-premise POS only suits sites with no reliable internet."
      },
      {
        "question": "What hardware do I need for a POS system in the USA?",
        "answer": "Any PC, laptop or tablet with a modern web browser runs the Hulm POS system. Add a receipt printer, barcode scanner, cash drawer or label printer as your counter needs; standard POS hardware integrates easily. If you accept cards, use the card terminal from your bank or payment provider."
      }
    ]
  },
  "pos-software-qatar": {
    "slug": "pos-software-qatar",
    "key": "pos-software-qatar",
    "code": "QA",
    "country": "Qatar",
    "flag": "🇶🇦",
    "role": "Middle East",
    "currency": "QAR",
    "currencySymbol": "QR",
    "regionTag": "Middle East",
    "sampleSale": "3,150 QAR",
    "complianceName": "Qatar GTA Tax & Billing",
    "complianceSub": "Configure relevant Qatar GTA fields, bilingual receipt printing and checkout workflows for your operation.",
    "complianceBadges": [
      "Qatar GTA field configuration",
      "Qatari Riyal Native",
      "Arabic/English Invoicing",
      "Multi-Store Cloud Sync"
    ],
    "meta": {
      "title": "Point of Sale in Qatar | POS Qatar | POS System Qatar",
      "description": "Looking for best POS system in Qatar? Our cloud POS and mobile POS help businesses to manage sales easily. Try Point of sale in Qatar now!"
    },
    "hero": {
      "h1": "Point of Sale in Qatar | Cloud POS System Qatar",
      "subtitle": "Struggling with manual billing, messy inventory and disconnected tools? Hulm fixes it with a cloud POS system Qatar businesses can run anywhere, bringing your sales, inventory, customers and reports into one reliable point of sale in Qatar.",
      "rating": "4.9/5",
      "reviewsCount": "100+ Verified Businesses",
      "uptime": "99.9%"
    },
    "copy": {
      "overviewHeading": "POS System Qatar: Built for Businesses in Doha and Beyond",
      "overview": [
        "Running a business in Qatar requires more than a billing screen. You need a complete POS system Qatar owners can use to see what is selling, what is in stock and how customers are buying, in real time. Hulm is cloud POS Qatar businesses can open in any web browser, from a cafe in Doha to a retail branch in Al Wakrah or Lusail.",
        "As POS software Qatar retailers, restaurants, salons and bakeries use every day, Hulm records sales in Qatari riyals (QAR), prints bilingual Arabic/English receipts and lets you configure tax fields to the General Tax Authority (GTA) requirements that apply to your business."
      ],
      "whyHeading": "Why Businesses in Qatar Need a Point of Sale System",
      "whyIntro": "Busy counters in Doha cannot wait for manual billing. These are the problems a modern POS Qatar setup solves.",
      "featuresHeading": "Point of Sale POS Software Features for Qatar",
      "featuresIntro": "Run sales, inventory, customers and reporting from one place with an all-in-one cloud POS solution designed to simplify operations and support growth.",
      "benefitsHeading": "Benefits of Using Hulm Point of Sale Software in Qatar",
      "benefitsIntro": "Hulm is a dependable POS Qatar solution built for real business challenges. Designed for businesses that need a reliable POS system Qatar teams can learn quickly, it goes beyond basic billing to help you operate efficiently and grow with confidence.",
      "whyChooseHeading": "Why Businesses Choose Hulm POS System in Qatar",
      "whyChooseIntro": "Our goal is simple: a powerful and reliable POS system Qatar businesses can depend on every day, combining usability, control and performance in one point of sale in Qatar.",
      "industriesIntro": "Tailored POS workflows for retail stores, restaurants, cafes, bakeries, salons and other businesses across Qatar.",
      "faqHeading": "POS System Qatar: Frequently Asked Questions",
      "faqIntro": "Answers on cloud access, Qatari riyal pricing, bilingual receipts and tax settings with Hulm in Qatar."
    },
    "challenges": [
      {
        "title": "Manual Billing & Checkout Delays",
        "problem": "Cashiers struggling with manual entries and long queues at peak hours in Doha's malls, cafes and restaurants.",
        "solution": "Barcode scanning, receipt generation and multi-tender payment workflows in one checkout."
      },
      {
        "title": "Inventory Desynchronization",
        "problem": "Stockouts during peak demand, forgotten expiration dates, and untracked stock transfers between warehouse and counters.",
        "solution": "Real-time automated inventory tracking with automated low-stock reorder triggers and multi-warehouse sync."
      },
      {
        "title": "Tax Settings & Bilingual Receipts",
        "problem": "Receipts that cannot show the details your business needs in Arabic and English, and tax settings that are hard to change when requirements change.",
        "solution": "Configuration support for Qatar GTA tax and billing requirements, including the agreed invoice and reporting workflow."
      }
    ],
    "features": [
      {
        "title": "POS Dashboard & Fast Checkout",
        "description": "Use a streamlined dashboard to select items, apply discounts, scan barcodes and complete QAR transactions in seconds.",
        "icon": "LayoutDashboard",
        "highlight": "Faster Billing"
      },
      {
        "title": "Real-Time Inventory Tracking",
        "description": "Monitor live stock counts, warehouse distributions, and receive low-stock alerts automatically inside the cloud POS system.",
        "icon": "Boxes",
        "highlight": "Fewer Stockouts"
      },
      {
        "title": "Customer Management & Loyalty",
        "description": "Build detailed customer profiles, track purchase history, and run loyalty programs for customers across Qatar.",
        "icon": "Users",
        "highlight": "360° CRM"
      },
      {
        "title": "Catalog & Product Control",
        "description": "Add, edit, or categorize thousands of items with ease. Set variants, modifiers, and multi-currency pricing from one central dashboard.",
        "icon": "FolderKanban",
        "highlight": "Large Catalogues"
      },
      {
        "title": "Smart Product Categories",
        "description": "Organize your catalog by department, brand, or seasonal collections for rapid cashier navigation and intuitive reporting.",
        "icon": "Layers",
        "highlight": "Visual Navigation"
      },
      {
        "title": "High-Speed Barcode Scanning",
        "description": "Connect supported wireless, Bluetooth and USB barcode scanners to the checkout workflow.",
        "icon": "ScanLine",
        "highlight": "Product Lookup"
      },
      {
        "title": "Dark & Light Mode Interface",
        "description": "Work comfortably in any retail or restaurant lighting environment with an eye-friendly, modern user interface.",
        "icon": "Monitor",
        "highlight": "Modern UI"
      },
      {
        "title": "Cloud-Based 24/7 Access",
        "description": "Access business sales, reports, and branch performance anywhere, anytime from your smartphone, tablet, or laptop.",
        "icon": "Cloud",
        "highlight": "Cloud-Synced"
      }
    ],
    "benefits": [
      "Fast checkout and improved customer experience at every register",
      "Real-time inventory tracking to eliminate stock discrepancies across Qatar",
      "Monitors sales velocity to optimize pricing, promotions, and replenishment",
      "Simplified expense tracking and profit margin calculations for better budgeting",
      "Efficient employee shift scheduling and cashier performance monitoring",
      "Strengthens vendor relationships with automated purchase orders and ledger records",
      "Configured invoicing workflow for Qatar GTA tax and billing requirements",
      "Detailed executive reports and analytics for high-confidence decision making",
      "Centralized multi-location control to manage all your branches from one screen",
      "Fast service with personalized customer reward points for repeat footfall"
    ],
    "whyChoose": [
      "User-Friendly Modern Design",
      "Connected Business Modules",
      "Universal Barcode Scanner Support",
      "Dedicated Support on WhatsApp & Phone",
      "Cloud Accessibility Anywhere",
      "Runs in Any Web Browser",
      "Customizable for Every Industry",
      "Configured for Regional Tax Rules",
      "Multi-Location Central Control",
      "Role-Based User Access",
      "Real-Time Analytics & Profit Insights",
      "Customer Purchase History & CRM",
      "Cost-Effective Pricing Plans",
      "Scalable Architecture for Growth",
      "Minimal Staff Training Required"
    ],
    "faqs": [
      {
        "question": "Is Hulm a cloud POS system Qatar businesses can use from anywhere?",
        "answer": "Yes. Hulm runs in any web browser, so owners can check sales, stock and branch reports from a phone, tablet or laptop. It is a cloud POS and needs an internet connection at the counter, so we recommend a backup connection such as a mobile hotspot."
      },
      {
        "question": "What is the best POS system in Doha, Qatar?",
        "answer": "The best point of sale system for a Doha business combines fast QAR billing, Arabic/English receipts, live inventory and multi-branch reporting. Hulm is cloud POS software that businesses in Qatar can open in any web browser."
      },
      {
        "question": "Does Hulm support Qatari riyal pricing and Arabic/English receipts?",
        "answer": "Yes. Sales and reports are kept in Qatari riyals (QAR), and bilingual Arabic/English receipt and invoice layouts can be configured for your printer."
      },
      {
        "question": "How are tax settings configured in Qatar?",
        "answer": "Tax settings in Hulm are configurable, so the fields and rates that apply to your business under Qatar General Tax Authority (GTA) requirements are set up during implementation and can be updated if those requirements change. Confirm what applies to your business with a qualified adviser."
      },
      {
        "question": "Can I manage branches across Doha and other cities?",
        "answer": "Yes. Multi-location control shows stock, sales and reports for every branch on one dashboard, with user roles controlling what each team can access."
      },
      {
        "question": "Is a cloud POS system in Qatar secure?",
        "answer": "Hulm runs over encrypted HTTPS connections, with user roles and permissions controlling staff access. Card payments are processed by your payment provider. Ask the team for current security details for your deployment."
      },
      {
        "question": "Cloud vs traditional point of sale software in Qatar: which is better?",
        "answer": "Cloud point of sale software gives you remote access to sales and stock, automatic updates and lower upfront costs. Hulm needs an internet connection, so keep a mobile hotspot as backup. A traditional on-premise POS only suits sites with no reliable internet."
      },
      {
        "question": "What hardware do I need for a POS system in Doha?",
        "answer": "Any PC, laptop or tablet with a modern web browser runs the Hulm POS system. Add a receipt printer, barcode scanner, cash drawer or label printer as your counter needs; standard POS hardware integrates easily. If you accept cards, use the card terminal from your bank or payment provider."
      }
    ]
  }
};

export const COMPLIANCE_DATA = {
  "zatca": {
    "slug": "zatca",
    "title": "ZATCA-Compliant POS Software | E-Invoicing for KSA",
    "metaDesc": "Meet ZATCA Phase 1 & 2 requirements with Hulm's e-invoicing POS. QR codes, real-time reporting, and FATOORA integration for Saudi businesses.",
    "h1": "ZATCA-Compliant POS Solution for Saudi Arabia",
    "subtitle": "Connect Hulm POS with the ZATCA e-invoicing (FATOORA) workflow. The setup can support Phase 1 and Phase 2 requirements based on the configuration confirmed for your business.",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "badge": "ZATCA Phase 1 & 2 Setup Support",
    "seo": {
      "pillarsHeading": "Everything you need for ZATCA Phase 1 & 2 compliance",
      "pillarsIntro": "Hulm's ZATCA-compliant POS software covers e-invoice generation, QR codes and the FATOORA connection. The final setup depends on your registration, credentials and validation before activation.",
      "stepsHeading": "ZATCA e-invoicing integration in 4 simple steps",
      "stepsIntro": "Move your Saudi business to compliant e-invoicing without disrupting daily sales.",
      "faqHeading": "ZATCA e-invoicing FAQs",
      "audience": null,
      "related": {
        "heading": "Related POS pages",
        "links": [
          { "label": "POS software in KSA", "href": "/pos-software-ksa/" },
          { "label": "POS software in UAE", "href": "/pos-software-uae/" },
          { "label": "POS system in Qatar", "href": "/pos-software-qatar/" },
          { "label": "POS features", "href": "/features/" },
          { "label": "Inventory management", "href": "/inventory-management/" },
          { "label": "Reporting module", "href": "/reporting-module/" },
          { "label": "Integrations", "href": "/integration/" }
        ]
      },
      "faqs": [
        { "q": "What is ZATCA e-invoicing?", "a": "ZATCA e-invoicing (FATOORA) is Saudi Arabia's requirement to issue and store tax invoices electronically, with a QR code on simplified invoices and, in Phase 2, integration with the ZATCA platform." },
        { "q": "What is the difference between ZATCA Phase 1 and Phase 2?", "a": "Phase 1 covers the generation and storage of electronic invoices. Phase 2 introduces integration with the FATOORA platform in scheduled waves. Confirm the current requirements and your onboarding wave directly with ZATCA or a qualified adviser." },
        { "q": "Can Hulm POS support a ZATCA Phase 2 setup?", "a": "Hulm can support a ZATCA e-invoicing workflow. Readiness depends on the business requirements, technical configuration, credentials and validation completed before activation." },
        { "q": "How do I integrate my Saudi business with ZATCA via Hulm?", "a": "The Hulm team helps map the required business credentials, invoice fields and integration steps, then validates the agreed configuration before activation." },
        { "q": "Does the POS print QR codes on invoices?", "a": "Yes. Configured simplified tax invoices include the QR-code information required by ZATCA." },
        { "q": "Does Hulm POS support bilingual receipts in Arabic and English?", "a": "Bilingual invoice layouts can be configured. Confirm the mandatory fields, language requirements and printer setup during implementation." }
      ]
    },
    "keyPoints": [
      {
        "title": "Phase 1: Generation Phase",
        "desc": "Configure generation and storage of electronic tax invoices, simplified invoices and required QR-code information based on the approved setup."
      },
      {
        "title": "Phase 2: Integration Phase (FATOORA)",
        "desc": "Support a configured connection to the ZATCA FATOORA workflow, including relevant XML, clearance or reporting requirements."
      },
      {
        "title": "Invoice Record Controls",
        "desc": "Use sequential invoice counters and configured cryptographic controls where required by the implementation."
      },
      {
        "title": "Arabic & English Invoicing",
        "desc": "Configure bilingual invoices, relevant VAT fields, customer VAT information and supported thermal receipt formats."
      }
    ],
    "steps": [
      {
        "step": "01",
        "title": "Requirements Review",
        "desc": "Configure your company tax details, CR number, and VAT registration in the Hulm dashboard."
      },
      {
        "step": "02",
        "title": "Connect Systems",
        "desc": "Authenticate with ZATCA through secure CSID onboarding and cryptographic digital certificates."
      },
      {
        "step": "03",
        "title": "Data Migration",
        "desc": "Import agreed product catalogue, category and opening inventory information using the confirmed migration process."
      },
      {
        "step": "04",
        "title": "Go Live",
        "desc": "Issue configured electronic invoices with the required QR-code information."
      }
    ]
  },
  "fbr-integrated-pos-pakistan": {
    "slug": "fbr-integrated-pos-pakistan",
    "title": "FBR Integrated POS Software in Pakistan | Hulm POS",
    "metaDesc": "Get FBR-compliant POS with automated tax invoicing, QR codes, and real-time reporting. Free FBR integration setup for retailers across Pakistan.",
    "h1": "Best FBR Integrated POS Software in Pakistan",
    "subtitle": "Hulm is FBR integrated POS software for Pakistan: connect eligible sales with the FBR invoicing workflow and print an FBR invoice number and QR code on every receipt. Our team helps confirm the registration, invoice fields and credentials your business needs.",
    "country": "Pakistan",
    "flag": "🇵🇰",
    "badge": "FBR Tier-1 Setup Support",
    "seo": {
      "pillarsHeading": "FBR POS integration in Pakistan: what the setup supports",
      "pillarsIntro": "Hulm's FBR integrated POS software connects eligible sales to the FBR workflow, so each receipt can carry an FBR invoice number and QR code. The final setup depends on your registration, credentials and validation before activation.",
      "stepsHeading": "How FBR POS invoicing works in four steps",
      "stepsIntro": "Get FBR-compliant invoicing running without disrupting daily sales at the counter.",
      "faqHeading": "FBR POS integration FAQs",
      "audience": {
        "heading": "Who should integrate FBR POS",
        "text": "Tier-1 retailers and other businesses notified by FBR, from retail stores and restaurants to pharmacies, bakeries and ecommerce sellers, can run FBR-compliant invoices from the same POS system they use for sales and inventory.",
        "links": [
          { "label": "Retail store POS", "href": "/industries/retail-store/" },
          { "label": "Restaurant POS", "href": "/industries/restaurant-pos/" },
          { "label": "Pharmacy POS", "href": "/industries/pharmacy-store/" },
          { "label": "Bakery POS", "href": "/industries/bakery-pos-system/" },
          { "label": "Clothing store POS", "href": "/industries/clothing-store/" },
          { "label": "Electric store POS", "href": "/industries/electric-store/" },
          { "label": "Ecommerce store", "href": "/website/" }
        ]
      },
      "related": {
        "heading": "Related pages",
        "links": [
          { "label": "POS pricing", "href": "/pricing/" },
          { "label": "POS features", "href": "/features/" },
          { "label": "Inventory management", "href": "/inventory-management/" },
          { "label": "Reporting module", "href": "/reporting-module/" },
          { "label": "POS hardware", "href": "/pos-hardware/" },
          { "label": "POS software in Karachi", "href": "/pos-software-karachi/" },
          { "label": "POS software in Lahore", "href": "/pos-software-lahore/" },
          { "label": "POS software in Islamabad", "href": "/pos-software-islamabad/" },
          { "label": "What is POS?", "href": "/blog/what-is-pos/" }
        ]
      },
      "faqs": [
        { "q": "What is an FBR integrated POS system?", "a": "An FBR integrated POS system reports eligible sales to the Federal Board of Revenue and prints an FBR invoice number and QR code on each receipt, so customers can verify the invoice." },
        { "q": "What is FBR Tier-1 POS integration?", "a": "Pakistan requires certain businesses, including applicable Tier-1 retailers, to integrate their sales systems with FBR. Confirm whether the requirement applies to your business with FBR or a qualified tax adviser." },
        { "q": "Does Hulm POS generate verifiable FBR QR code receipts?", "a": "Yes. Hulm supports FBR invoice-number and QR-code workflows after the required business registration, credentials and integration configuration are confirmed." },
        { "q": "Is FBR integration included in Hulm POS plans?", "a": "FBR integration is available with every Hulm POS plan, and the team supports the setup. Plans start at PKR 2,500 per month.", "link": { "label": "POS software price in Pakistan", "href": "/pricing/" } },
        { "q": "How long does FBR POS integration take?", "a": "Timing depends on your FBR registration and POS ID. Once credentials are ready, the Hulm team pairs the system, maps tax rates and validates invoicing before go-live." },
        { "q": "What happens if the internet goes down?", "a": "Hulm is a cloud POS and does not have an offline mode, so sales and FBR invoices need an internet connection. We recommend a backup connection, such as a mobile hotspot, at the counter." },
        { "q": "Does Hulm POS support provincial revenue authorities?", "a": "Provincial requirements can differ. Share the relevant authority (SRB, PRA, KPRA or BRA) and business registration details so Hulm can confirm the configuration and integration scope." }
      ]
    },
    "keyPoints": [
      {
        "title": "Sales Reporting Connection",
        "desc": "Connect eligible sales with the FBR workflow and print the configured invoice number on customer receipts after activation."
      },
      {
        "title": "Verifiable QR Code Invoicing",
        "desc": "Include the configured QR-code information so customers can use the applicable FBR verification process."
      },
      {
        "title": "Always-Connected Invoicing",
        "desc": "Invoices are reported through your internet connection, so plan a backup connection (such as a mobile hotspot) so FBR invoicing continues if broadband drops."
      },
      {
        "title": "Provincial Tax Authority Support",
        "desc": "Review relevant SRB, PRA, BRA or KPRA invoice and tax requirements as part of the implementation scope."
      }
    ],
    "steps": [
      {
        "step": "01",
        "title": "FBR POS Registration",
        "desc": "We assist with registering your POS terminal on the Iris portal and obtaining your POS ID."
      },
      {
        "step": "02",
        "title": "System Pairing",
        "desc": "Enter your FBR POS credentials into Hulm to establish a secure, encrypted API bridge."
      },
      {
        "step": "03",
        "title": "Catalog Tax Mapping",
        "desc": "Map standard 18% sales tax, exemptions, or tier-specific rates across all your SKUs."
      },
      {
        "step": "04",
        "title": "Configured Billing Workflow",
        "desc": "Record sales through the configured FBR invoice and transaction workflow."
      }
    ]
  }
};

export const REGIONAL_LOCATIONS = [
  {
    code: "SA",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    role: "ZATCA Phase-2",
    region: "Middle East",
    href: "/pos-software-ksa/"
  },
  {
    code: "AE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    role: "Gulf Regional",
    region: "Gulf Regional",
    href: "/pos-software-uae/"
  },
  {
    code: "US",
    country: "United States",
    flag: "🇺🇸",
    role: "North America",
    region: "North America",
    href: "/pos-software-usa/"
  },
  {
    code: "QA",
    country: "Qatar",
    flag: "🇶🇦",
    role: "Middle East",
    region: "Middle East",
    href: "/pos-software-qatar/"
  },
  {
    code: "PK",
    country: "Pakistan",
    flag: "🇵🇰",
    role: "HQ & Engineering",
    region: "South Asia",
    href: "/fbr-integrated-pos-pakistan/"
  }
];
