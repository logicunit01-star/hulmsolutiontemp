import { 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  PawPrint, 
  Store, 
  Users, 
  Handshake, 
  Package, 
  FileText, 
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Laptop,
  CreditCard,
  Building2,
  Tractor
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AppFeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface AppProblemItem {
  title: string;
  problem: string;
  solution: string;
  solutionTitle?: string;
}

export interface AppWhyChooseItem {
  title: string;
  description: string;
}

export interface AppFaqItem {
  question: string;
  answer: string;
}

export interface AppDetailData {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  whatIs?: {
    headline: string;
    description: string;
    points?: string[];
  };
  problems?: {
    headline: string;
    description?: string;
    items: AppProblemItem[];
  };
  features: {
    headline: string;
    description?: string;
    items: AppFeatureItem[];
  };
  benefits?: {
    headline: string;
    description?: string;
    points: string[];
  };
  whyChoose?: {
    headline: string;
    description?: string;
    items: AppWhyChooseItem[];
  };
  whoCanUse?: {
    headline: string;
    description?: string;
    points: string[];
  };
  faq: {
    headline: string;
    description: string;
    items: AppFaqItem[];
  };
}

export const appsData: Record<string, AppDetailData> = {
  "purchase-orders": {
    slug: "purchase-orders",
    name: "Purchase Orders",
    title: "Purchase Order Management Software - PO Software by Hulm",
    metaTitle: "Purchase Order | Purchase Order Management Software - Hulm",
    metaDescription: "Streamline your procurement process with Purchase Order Management Software. Improve efficiency, accuracy & control over orders, all while reducing costs.",
    icon: ShoppingCart,
    hero: {
      badge: "PROCUREMENT AUTOMATION",
      headline: "Purchase Order Management Software - PO Software by Hulm",
      subheadline: "Simplify how your business creates, tracks, and manages purchase orders. Automate approvals, reduce errors, and gain full control over suppliers.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "What is Purchase Order Management?",
      description: "Purchase order management is the process of creating, tracking, and approving purchase orders in a business. It ensures suppliers deliver on time, reduces errors, and keeps budgets in check. Without a system, manual paperwork causes delays and mistakes. A digital purchase order software makes the process faster and more reliable.",
      points: [
        "Eliminate manual paperwork and phone orders with standardized digital POs.",
        "Maintain clear supplier audit trails and agreed unit pricing.",
        "Link purchase orders directly to inventory arrivals to avoid duplicate entries."
      ]
    },
    features: {
      headline: "Key Features of Hulm Purchase Order Software",
      description: "Everything you need to control procurement from order creation to warehouse delivery.",
      items: [
        {
          title: "Integration with Inventory Management",
          description: "Link purchase orders directly to your inventory system to maintain optimal stock levels and avoid overstocking or shortages.",
          icon: Package
        },
        {
          title: "Detailed Reporting & Spend Analytics",
          description: "Access insightful reports on purchase trends, supplier performance, and cost analysis to make informed procurement decisions.",
          icon: BarChart3
        },
        {
          title: "Automated Purchase Orders",
          description: "Easily generate purchase orders with pre-filled templates, saving time and reducing the risk of errors.",
          icon: FileText
        },
        {
          title: "Supplier Delivery Tracking",
          description: "Monitor partial and full deliveries against open purchase orders with real-time status updates.",
          icon: Truck
        },
        {
          title: "Multi-Currency & Tax Handling",
          description: "Handle local supplier transactions and imported goods with automatic tax breakdowns.",
          icon: CreditCard
        },
        {
          title: "Role-Based Approval Workflows",
          description: "Set spending limits and approval chains so managers approve high-value POs before release.",
          icon: ShieldCheck
        }
      ]
    },
    benefits: {
      headline: "Hulm Purchase Order Management Benefits",
      description: "Purchase Order Management Software from Hulm Solutions is intended to simplify your procurement processes, automate tasks, and reduce errors in smooth operations as well as faster fulfillment. This software is also managed via the cloud, allowing one to control the actions from anywhere while managing efficient orders as your business grows.",
      points: [
        "Save valuable time with automated procurement workflows.",
        "Reduce costs by avoiding duplicate or wrong orders.",
        "Strengthen supplier relationships with on-time purchases and clear records.",
        "Improve transparency across departments with shared order visibility.",
        "Make smarter decisions with accurate vendor pricing history.",
        "Prevent rogue spending with strict approval thresholds."
      ]
    },
    whyChoose: {
      headline: "Why Choose Hulm Purchase Order Management?",
      items: [
        {
          title: "Trusted Expertise",
          description: "With years of experience in delivering software solutions, Hulm Solutions has earned a reputation as a trusted provider for businesses across Pakistan."
        },
        {
          title: "Innovative Design",
          description: "Our Purchase Order Management System is built on a foundation of innovation, offering advanced features that streamline your procurement processes."
        },
        {
          title: "Efficient Procurement",
          description: "Designed to ensure smooth operations, our system automates key tasks, reducing manual effort and minimizing errors in order management."
        },
        {
          title: "Reliable Performance",
          description: "Hulm Solutions provides cloud-hosted software that can be configured as transaction volumes and operating requirements change."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Can Use Our Purchase Order System?",
      description: "Our purchase order software is flexible and fits any industry:",
      points: [
        "Manufacturing - Manage raw materials & supplier orders.",
        "Furniture Stores - Track bulk orders & stock levels.",
        "Cafes & Restaurants - Order ingredients on time, reduce waste.",
        "Toys & Clothing Stores - Handle seasonal stock & supplier deliveries.",
        "Jewellery Shops - Securely track high-value purchases.",
        "Electronics Stores - Streamline supplier & warranty part orders.",
        "Bakeries - Automate ingredient restocking.",
        "Salons / Spas - Manage cosmetics & equipment supplies.",
        "Pharmacies - Ensure timely medicine restocking.",
        "Retail Stores - Control budgets & track all supplier orders."
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Get quick answers to common questions about our services and support in our FAQ section.",
      items: [
        {
          question: "What is purchase order software?",
          answer: "Purchase order software is a digital tool that helps businesses create, manage, track, and approve purchase orders. It streamlines procurement, reduces errors, and saves time compared to manual processes."
        },
        {
          question: "Who can use purchase order management software?",
          answer: "Our purchase order software is flexible and fits any industry, including manufacturing, retail, restaurants, pharmacies, and wholesale distributors."
        },
        {
          question: "What is a purchase order?",
          answer: "A purchase order (PO) is a formal document issued by a buyer to a seller, detailing the types, quantities, and agreed prices for products or services."
        },
        {
          question: "What is a purchase order number?",
          answer: "A purchase order number is a unique reference number assigned to a purchase order for easy tracking and accounting across all systems."
        },
        {
          question: "How do purchase orders work?",
          answer: "The buyer creates a PO detailing what they need. Once the seller accepts it, it becomes a legally binding contract. The seller delivers the goods, and the buyer pays according to the terms."
        },
        {
          question: "What are purchase orders?",
          answer: "Purchase orders are official documents confirming an order between a buyer and supplier before delivery."
        },
        {
          question: "Is a purchase order a contract?",
          answer: "A PO is not a complete contract but becomes legally binding once the supplier accepts it, ensuring both sides agree on terms."
        },
        {
          question: "What is a blanket purchase order?",
          answer: "A blanket PO is a long-term agreement to buy goods or services repeatedly from one supplier under set conditions and locked-in pricing."
        },
        {
          question: "How to generate a purchase order?",
          answer: "With Hulm software, you can easily generate a purchase order using pre-filled templates and send it directly to your suppliers from the dashboard."
        },
        {
          question: "What is a purchase order invoice?",
          answer: "A purchase order invoice is the supplier's bill that references the original PO number, ensuring correct billing and matching before payment."
        }
      ]
    }
  },

  "vendors-management": {
    slug: "vendors-management",
    name: "Vendor Management",
    title: "Vendor Management System | Supplier Tools by Hulm",
    metaTitle: "Vendor Management System | Supplier Tools by Hulm",
    metaDescription: "Simplify supplier relationships with Hulm's Vendor Management System. Track performance, automate orders, and centralize vendor data in one platform.",
    icon: Handshake,
    hero: {
      badge: "SUPPLIER ECOSYSTEM",
      headline: "Streamline Your Business with Hulm Vendor Management System",
      subheadline: "Simplify supplier relationships, communication, and effective procurement workflows. Scale according to your precise business needs, from local suppliers to nationwide distribution.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Vendor Management Connected to Purchasing and Stock",
      description: "Supplier management is required for effective supply chain operations. Hulm Solutions' Vendor Management System simplifies supplier relationship management, communication, and procurement workflows. Streamlining activities allows you to build stronger relationships, improve procurement efficiency, and enhance growth while cutting costs and reducing errors.",
      points: [
        "Consolidate all supplier agreements, payment terms, and product catalogs in one place.",
        "Track delivery timeliness and order fulfillment accuracy per vendor.",
        "Prevent price discrepancies by locking in negotiated rates automatically."
      ]
    },
    features: {
      headline: "Core Functions of the Hulm Vendor Management System",
      description: "End-to-end vendor management software to manage vendor data, purchase orders, performance, and compliance.",
      items: [
        {
          title: "Centralized Supplier Profiles",
          description: "Maintain detailed records of all suppliers, including contact information, product catalogs, pricing, and performance history in one easy-to-access platform.",
          icon: Building2
        },
        {
          title: "Performance Metric Evaluation",
          description: "Evaluate vendor performance using data-driven metrics such as delivery times, quality scores, and contract compliance to make informed decisions.",
          icon: BarChart3
        },
        {
          title: "Automated Communication & Alerts",
          description: "Streamline communication with vendors through automated purchase order updates, delivery reminders, and invoice notifications for better collaboration.",
          icon: Clock
        },
        {
          title: "Connected POS and Inventory Records",
          description: "Connect vendor records with purchasing and inventory workflows so teams can review supplier activity in one workspace.",
          icon: Package
        },
        {
          title: "Role-Based Approval Workflows",
          description: "Set up role-based permissions and approval workflows for vendor selection, contracts, and purchase orders, ensuring compliance and accountability.",
          icon: ShieldCheck
        },
        {
          title: "Detailed Procurement & Cost Reports",
          description: "Generate detailed reports on vendor performance, cost analysis, and procurement trends to optimize vendor relationships and reduce expenses.",
          icon: TrendingUp
        }
      ]
    },
    benefits: {
      headline: "Benefits of Using Hulm Vendor Management Software",
      description: "Develop supplier relationships through open communication and automate tasks such as onboarding and contract renewals. Track prices to save costs, ensure compliance, and mitigate risks.",
      points: [
        "Improved Vendor Relationships - Foster trust and collaboration with timely orders and payments.",
        "Enhanced Efficiency - Automate repetitive purchasing tasks and eliminate manual back-and-forth.",
        "Cost Optimization - Track historical pricing to negotiate the best rates and catch unexpected increases.",
        "Risk Mitigation - Maintain backup supplier contacts and monitor performance trends to prevent stockouts.",
        "Scalable records - Organise vendor records across branches based on your selected plan and configuration.",
        "Audit-Ready Records - Full digital paper trail of every purchase, delivery note, and supplier payment."
      ]
    },
    whyChoose: {
      headline: "Trusted Vendor Solutions by Hulm",
      items: [
        {
          title: "Industry-Leading Expertise",
          description: "Built with a sound understanding of real-world supply chain challenges faced by retailers, restaurants, and wholesalers in Pakistan."
        },
        {
          title: "Data Security & Compliance",
          description: "Bank-level encryption ensures that supplier contracts, trade secrets, and pricing data remain completely confidential."
        },
        {
          title: "Zero Setup Delays",
          description: "Import your existing supplier directory from Excel or CSV in seconds and start issuing orders immediately."
        },
        {
          title: "Local Support on WhatsApp",
          description: "Dedicated Pakistani support team available 7 days a week to help with onboarding and day-to-day questions."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Benefits from a Vendor Management System?",
      description: "Tailored for operations that rely on regular supplier replenishment:",
      points: [
        "Retail Chains - Manage hundreds of FMCG and apparel suppliers across multiple store locations.",
        "Restaurants & Cafes - Track perishable ingredient suppliers, dairy vendors, and packaging sources.",
        "Pharmacies - Manage licensed pharmaceutical distributors with strict batch and price control.",
        "Wholesale & Distribution - Coordinate high-volume shipments and supplier credit terms smoothly."
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Common questions about Hulm Vendor Management System.",
      items: [
        {
          question: "How does Hulm help track supplier pricing changes?",
          answer: "Hulm records the historical unit cost of every item received from each vendor. If a supplier raises their price on an incoming order, the system alerts you immediately before you finalize the invoice."
        },
        {
          question: "Can I manage vendor credit and outstanding balances in Hulm?",
          answer: "Yes. Hulm includes a complete vendor ledger where you can record partial payments, track credit terms (e.g. Net 30), and see total outstanding balances for each supplier."
        },
        {
          question: "Can I import my existing suppliers from an Excel spreadsheet?",
          answer: "Yes, you can import your entire vendor directory, including contact details, addresses, NTN numbers, and item lists in one click using our CSV/Excel template."
        },
        {
          question: "Does the vendor management system connect directly with my purchase orders?",
          answer: "Vendor details can be connected to purchase-order workflows. Confirm the catalogue, rate and delivery fields required for your setup."
        }
      ]
    }
  },

  "cattle-management-software": {
    slug: "cattle-management-software",
    name: "Cattle Management",
    title: "Best Cattle Management Software - Hulm Solutions",
    metaTitle: "Best Cattle Management Software - Hulm Solutions",
    metaDescription: "Best cattle management software by Hulm Solutions to track livestock, manage farms, and boost productivity. Start your free trial today!",
    icon: PawPrint,
    hero: {
      badge: "PAKISTAN'S ONLY CATTLE SUITE",
      headline: "Best Cattle Management Software to Simplify Your Farm Operations",
      subheadline: "Move past manual ledgers and WhatsApp groups. Hulm is the only cattle management software in Pakistan specifically engineered for livestock traders and dairy farmers, unifying animal profiles, feed inventory, and FBR-compliant billing in one place.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Complex Farm Operations, Simplified on One Screen",
      description: "Hulm's cattle management software is one powerful platform that replaces spreadsheets, paper records, and guesswork. Whether you run a commercial dairy farm, a feedlot fattening project, or seasonal Eid livestock trading, Hulm gives you total operational control from anywhere.",
      points: [
        "Create digital animal profiles with tag numbers, purchase costs, and breed classification.",
        "Track daily feed consumption, silage costs, and veterinary treatments per animal or batch.",
        "Calculate exact net profitability for every animal sold with real-time margins."
      ]
    },
    problems: {
      headline: "Are These Problems Holding Your Farm Back?",
      description: "Traditional livestock farming loses money every day to untracked expenses and lost records:",
      items: [
        {
          title: "Animal Identification & History",
          problem: "Trying to remember what you paid for a specific cow, its feed cost, and medical history when it's time to sell.",
          solution: "Every animal gets a digital profile. Track its exact purchase price, daily feed allocation cost, and medical history. When you sell, see the exact net profit generated by that specific animal.",
          solutionTitle: "The Hulm Fix: Digital Animal Profiles"
        },
        {
          title: "Hidden Feed & Farm Costs",
          problem: "You know total expenses, but have no idea if feed costs are eating your margins.",
          solution: "Track your grass, silage, wanda, and medicine. Set low-stock alerts before your farm runs out.",
          solutionTitle: "The Hulm Fix: Dedicated Inventory"
        },
        {
          title: "Financial Leakage in B2B Trading",
          problem: "Managing complex vendor payments, partial credits, or broker commissions natively.",
          solution: "Configure multi-party transaction workflows and invoice fields around the requirements confirmed during implementation.",
          solutionTitle: "The Hulm Fix: Cattle-Specific Ledgers"
        }
      ]
    },
    features: {
      headline: "Purpose-Built Features for Livestock Management",
      description: "Farm management software designed on actual Pakistani farms to handle real-world dairy and feedlot workflows.",
      items: [
        {
          title: "Classify Your Herd",
          description: "Sort and track your stock by breed, milk production, weight, or age brackets. Generate reports on which livestock category yields the highest profit margin.",
          icon: PawPrint
        },
        {
          title: "Never Miss a Dose",
          description: "Log illnesses and set automated reminders for vaccinations or vet visits. A healthy herd is a profitable herd, and Hulm ensures nothing slips through the cracks.",
          icon: ShieldCheck
        },
        {
          title: "See the Real Numbers",
          description: "Stop guessing your margins. Hulm's Reporting & Analytics module pulls data from your feed purchases and animal sales to give you an exact, real-time Profit & Loss statement.",
          icon: TrendingUp
        },
        {
          title: "Feed & Medicine Inventory",
          description: "Monitor stocks of wanda, silage, supplements, and vaccines. Receive low-inventory alerts before feed runs out.",
          icon: Package
        },
        {
          title: "FBR-Compliant B2B Invoicing",
          description: "Generate compliant invoices with QR codes for high-value herd sales, institutional buyers, and slaughterhouses.",
          icon: FileText
        },
        {
          title: "Mobile Access in the Field",
          description: "Access and update animal records directly from any smartphone or tablet while walking through the farm sheds.",
          icon: Smartphone
        }
      ]
    },
    benefits: {
      headline: "Transparent B2B Trading and Tax Compliance",
      description: "Hulm supports integrated tax and FBR compliance, allowing you to generate compliant invoices for corporate and commercial livestock transactions.",
      points: [
        "Generate exact, professional invoices for high-value B2B herd sales.",
        "Keep perfect digital records of every transaction for accounting and tax purposes.",
        "Auto-generate FBR-compliant QR receipts when legally required.",
        "Track individual animal profit margins down to the last rupee of feed.",
        "Prevent feed pilferage with digital stock reconciliation."
      ]
    },
    whoCanUse: {
      headline: "Who Uses Hulm Cattle Management Software?",
      description: "Engineered for livestock businesses across Punjab, Sindh, KPK, and Balochistan:",
      points: [
        "Dairy Farms - Track milk yield per cow, lactation cycles, and feed efficiency.",
        "Feedlot Fattening Farms - Monitor weight gains, days on feed, and conversion ratios.",
        "Eid Livestock Traders - Track purchase prices, transport expenses, and seasonal sales.",
        "Pedigree & Stud Breeders - Maintain detailed bloodlines, birth dates, and vaccination logs."
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Get quick answers to common questions about our cattle management software.",
      items: [
        {
          question: "Can I track individual animal costs and profit?",
          answer: "Yes. By creating an Animal Profile in Hulm, you log its purchase price, track medical and allocated feed costs over time, and see exact net profit at the point of sale."
        },
        {
          question: "Does it manage inventory for feed and medicine?",
          answer: "Absolutely. Hulm tracks raw materials like feed, silage, and medical supplies, giving you low-stock alerts and tracking inventory valuation in real time."
        },
        {
          question: "Can I access the cattle management software on my phone at the farm?",
          answer: "Yes, Hulm is a fully cloud-based suite. You or your farm manager can log data from a smartphone or tablet browser while out in the field."
        }
      ]
    }
  },

  "customer-management": {
    slug: "customer-management",
    name: "Customer Management",
    title: "Customer Relationship Management System | Hulm CRM",
    metaTitle: "Customer Relationship Management System - Hulm CRM",
    metaDescription: "Drive sales, improve customer satisfaction, and boost productivity with Hulm Solutions CRM. Simplified and secure customer relationship management.",
    icon: Users,
    hero: {
      badge: "CUSTOMER LOYALTY & RETENTION",
      headline: "Streamline Your Business with Hulm Customer Relationship Management",
      subheadline: "Drive sales, improve customer satisfaction, and boost productivity with Hulm CRM. Connect every counter sale with actionable customer profiles and loyalty incentives.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Customer Records Connected to the Sale",
      description: "Hulm customer management is a customer relationship management system that connects customer records with relevant sales activity, helping authorised teams review purchase history, contact information and service context from the same operating workspace.",
      points: [
        "Turn anonymous shoppers into identified repeat customers at checkout.",
        "Track purchase frequency, favorite items, and lifetime spending per customer.",
        "Run targeted promotions and WhatsApp/SMS alerts that bring customers back."
      ]
    },
    features: {
      headline: "Functions of Hulm Customer Relationship Management",
      description: "Everything required to build lasting customer relationships and increase repeat revenue.",
      items: [
        {
          title: "Centralized Customer Profiles",
          description: "Store and organize customer data, including contact details, purchase history, preferences, and interaction notes, in one easily accessible hub.",
          icon: Users
        },
        {
          title: "Sales Pipeline & Lead Tracking",
          description: "Monitor prospective buyers and quotes from discovery to payment, identifying conversion bottlenecks in your sales cycle.",
          icon: TrendingUp
        },
        {
          title: "Automated Follow-ups & Reminders",
          description: "Automate communication with scheduled follow-ups, promotional messages, and payment reminders for streamlined customer engagement.",
          icon: Clock
        },
        {
          title: "Customer Purchase Insights",
          description: "Leverage advanced analytics to evaluate customer behavior, identify top spenders, and uncover high-potential sales opportunities.",
          icon: BarChart3
        },
        {
          title: "Integrated Support & Feedback",
          description: "Keep customer enquiries and feedback organised so staff can follow up with the relevant sales context.",
          icon: CheckCircle2
        },
        {
          title: "Cross-Platform POS & E-commerce Sync",
          description: "Keep customer profiles and loyalty points perfectly synchronized whether they buy in your retail store or online.",
          icon: Smartphone
        }
      ]
    },
    benefits: {
      headline: "Benefits of Using Hulm Customer Relationship Management",
      description: "The Hulm Solutions CRM software enables organizations to deliver personalized customer experiences, improve team collaboration, and maximize customer retention.",
      points: [
        "Stronger Customer Loyalty - Reward frequent buyers with point-based incentives.",
        "Higher Repeat Purchases - Send tailored offers based on previous shopping habits.",
        "Reduced Customer Churn - Identify inactive customers early and win them back.",
        "Streamlined Communication - Maintain clean conversation histories for every account.",
        "Faster Sales Closures - Equip sales staff with full customer context right at the counter.",
        "Data-Driven Decisions - Base your product stocking and discounts on actual buyer demand."
      ]
    },
    whyChoose: {
      headline: "Trusted Customer Relationship Management by Hulm",
      items: [
        {
          title: "Built for Pakistani Retail & SMEs",
          description: "Designed specifically around local customer behaviors, including phone-number identification and WhatsApp messaging."
        },
        {
          title: "Zero Hardware Required",
          description: "Access customer records in the CRM software from any browser, tablet, or smartphone without installing dedicated servers."
        },
        {
          title: "Privacy & Data Protection",
          description: "Customer access should be limited through appropriate staff roles and handled according to your privacy and retention requirements."
        },
        {
          title: "Counter Lookup",
          description: "Cashiers can look up customer accounts in less than 2 seconds by typing a mobile number during billing."
        }
      ]
    },
    whoCanUse: {
      headline: "Industries That Excel with Hulm CRM",
      description: "Applicable to any customer-facing business wanting to drive higher lifetime value:",
      points: [
        "Retail Boutiques & Clothing - Track size preferences, style favorites, and seasonal collections.",
        "Salons & Spas - Keep service history, preferred stylists, and appointment schedules.",
        "Pharmacies - Record recurring prescription refills and chronic care medications.",
        "Restaurants & Cafes - Reward regulars and send personalized birthday or anniversary treats."
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Common questions about Hulm customer relationship management and loyalty points.",
      items: [
        {
          question: "Can cashiers quickly search customers by phone number at the counter?",
          answer: "Yes. During checkout, cashiers simply type the customer's phone number to pull up their profile, previous balance, and available loyalty points in real time."
        },
        {
          question: "Does Hulm support loyalty points and discounts for VIP customers?",
          answer: "Yes, you can configure automatic loyalty points (e.g. 1 point per PKR 100 spent) that customers can redeem on future visits, as well as percentage discounts for VIP tiers."
        },
        {
          question: "Can I send SMS or WhatsApp promotional messages to my customers?",
          answer: "Yes. Hulm allows you to filter customer lists by spending history and export targeted lists or integrate with messaging gateways for marketing campaigns."
        },
        {
          question: "Can I import customer contacts from an existing spreadsheet?",
          answer: "Yes, you can upload your existing customer directory via Excel/CSV and have all contacts immediately available in your POS."
        }
      ]
    }
  },

  "order-management": {
    slug: "order-management",
    name: "Order Management",
    title: "Order Management | Order Management System - Hulm",
    metaTitle: "Order Management | Order Management System - Hulm",
    metaDescription: "Optimize your Order Management with Hulm Solutions Order Management System. Streamline order processing, improve accuracy, and enhance efficiency.",
    icon: FileText,
    hero: {
      badge: "ORDER LIFECYCLE CONTROL",
      headline: "Best Order Management System - Hulm Solutions",
      subheadline: "Orders getting messy and hard to track? Hulm's cloud-based order management system brings everything into one clear dashboard. Manage orders faster, eliminate fulfillment errors, and keep operations organized.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Order Management Dashboard for Daily Fulfilment",
      description: "Manage orders from one clear dashboard. Hulm's order management software helps growing teams review order status, coordinate daily fulfilment and keep customer and operational records connected.",
      points: [
        "Consolidate in-store, phone, and online orders into a unified processing queue.",
        "Track live progress: Pending, In Preparation, Out for Delivery, and Completed.",
        "Automatically generate packing slips, customer delivery invoices, and dispatch labels."
      ]
    },
    features: {
      headline: "Complete Order Management System Software Features",
      description: "Organise sales orders, fulfilment stages and related stock activity in a clearer operational workflow.",
      items: [
        {
          title: "Multi-Channel Order Centralization",
          description: "Bring in-store counter orders, website ecommerce purchases, and phone orders into a single fulfillment stream without duplicate entries.",
          icon: ShoppingCart
        },
        {
          title: "Real-Time Order Status Tracking",
          description: "Track each order through customizable stages: Received, Confirmed, Packed, Shipped, Delivered, or Cancelled.",
          icon: Clock
        },
        {
          title: "Automated Stock Reservation",
          description: "Stock can be reserved when an order is placed, depending on the configured sales channel and inventory rules.",
          icon: Package
        },
        {
          title: "Automated Invoice & Delivery Slips",
          description: "Generate compliant digital invoices and print packing slips with itemized barcodes for swift warehouse fulfillment.",
          icon: FileText
        },
        {
          title: "Split Shipments & Backorder Handling",
          description: "Easily fulfill partial orders when items are pending and fulfill backorders automatically when new stock arrives.",
          icon: Truck
        },
        {
          title: "Performance & Fulfillment Analytics",
          description: "Track average fulfillment speed, order cancellation rates, and top delivery zones to optimize logistics.",
          icon: TrendingUp
        }
      ]
    },
    benefits: {
      headline: "Benefits of Using Hulm Order Management",
      description: "Hulm's order management system software streamlines your workflow and automates processes for faster, error-free operations. With our cloud-based order management system, you get real-time insights and full control over sales order management.",
      points: [
        "Improved Efficiency - Fewer manual steps between taking an order and delivering it.",
        "Enhanced Customer Satisfaction - Provide accurate delivery estimates and real-time updates.",
        "Better inventory control - Use configured reservation rules to reduce stock discrepancies.",
        "Gain Real-Time Insights - Identify order surges, peak hours, and delivery bottlenecks.",
        "Simplify Sales Order Management - Manage high-volume order days without chaotic paperwork."
      ]
    },
    whyChoose: {
      headline: "Why Pakistani Businesses Choose Hulm Order Management",
      items: [
        {
          title: "Connected to POS and Inventory",
          description: "Order management, stock and invoices update together, so the counter, warehouse and accounts work from the same order record."
        },
        {
          title: "Multi-Branch Ready",
          description: "Manage orders for several stores or warehouses from one order management system and see which location fulfils each order."
        },
        {
          title: "Cloud-Based Access",
          description: "Check order queues and daily revenues from home or on the road without being tied to the store counter."
        },
        {
          title: "Local Support",
          description: "Get phone and WhatsApp help from the Hulm team while you set up order management and in day-to-day use."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Relies on the Hulm Order Management System?",
      description: "Built for businesses handling continuous daily transaction volume:",
      points: [
        "E-Commerce & Retail Stores - Manage customer orders from placement to doorstep dispatch.",
        "Bakeries & Catering - Track scheduled orders, custom cake bookings, and event delivery slots.",
        "Wholesalers & Distributors - Process bulk orders with credit terms and staged warehouse deliveries.",
        "Electronics & Appliance Retailers - Manage home delivery schedules, warranty cards, and installation tracking."
      ]
    },
    faq: {
      headline: "Order Management FAQs",
      description: "Answers to common questions about Hulm order management software.",
      items: [
        {
          question: "What is Sales Order Management?",
          answer: "Sales Order Management is the process of creating, tracking, fulfilling, and invoicing customer orders from start to finish. Hulm Solutions automates this entire workflow to reduce errors and speed up order processing."
        },
        {
          question: "Do you have the right Distributed Order Management (DOM) solution?",
          answer: "Yes. Hulm Solutions routes orders to the best location or warehouse automatically, reducing delivery time and improving efficiency."
        },
        {
          question: "What is Order Management?",
          answer: "Order management is how a business receives, processes, tracks, and fulfills orders across all sales channels, and an order management system is the software that runs it. Hulm Solutions centralizes orders, inventory, and fulfillment into one intuitive dashboard."
        },
        {
          question: "When evaluating a sales order management system, what should businesses look for?",
          answer: "Look for real-time inventory sync, multi-location support, automation, reporting, and integrations. Hulm Solutions includes all of these in one platform."
        },
        {
          question: "How do platforms manage recurring orders for hospitality businesses?",
          answer: "Configured recurring orders can help teams schedule repeat activity, inventory updates and billing steps. Confirm the exact workflow during setup."
        },
        {
          question: "How does Hulm Solutions reduce order errors?",
          answer: "By automating order capture, validating stock in real time, and tracking each step until delivery."
        }
      ]
    }
  },

  "logistics-management-software": {
    slug: "logistics-management-software",
    name: "Logistics Management",
    title: "Logistics Management Software | Fleet Tracking Hulm",
    metaTitle: "Logistics Management Software | Fleet Tracking Hulm",
    metaDescription: "Manage fleet, warehouse, delivery, documents, and 3PL from a single platform with Hulm Logistics Management Software. Built for Pakistani retailers & distributors.",
    icon: Truck,
    hero: {
      badge: "FLEET & DELIVERY CONTROL",
      headline: "Logistics Management Software - Complete Operational Control",
      subheadline: "Manage fleet, warehouse, delivery, documents, and third-party logistics from a single, intelligent platform. Designed for businesses that need accuracy, visibility, and scalability without operational complexity.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "What Is Logistics Management Software?",
      description: "Logistics management software is a centralized digital system that helps businesses plan, execute, monitor, and optimize the movement, storage, and delivery of goods. It replaces disconnected tools and manual processes with a single platform that provides real-time visibility and operational control. A modern system connects fleet operations, warehouse activities, delivery workflows, documentation, and third-party logistics partners.",
      points: [
        "Real-time GPS tracking for delivery drivers and company vehicles.",
        "Automated route optimization to cut fuel consumption and avoid traffic bottlenecks.",
        "Digital proof-of-delivery records can include customer signatures or photos where configured."
      ]
    },
    features: {
      headline: "Core Features of Hulm Logistics Management",
      description: "Coordinate fleet tracking, delivery management and supported third-party courier workflows from a connected operating view.",
      items: [
        {
          title: "Real-Time Fleet & Driver Tracking",
          description: "Monitor your deliveries and fleet movements in real time on a live map, giving dispatchers complete operational awareness.",
          icon: MapPin
        },
        {
          title: "Intelligent Route Optimization",
          description: "Automatically calculate the fastest, most cost-effective delivery paths, factoring in drop sequences and distance.",
          icon: Truck
        },
        {
          title: "Driver Assignment & App Dispatch",
          description: "Assign deliveries directly to drivers' mobile phones with turn-by-turn navigation and customer contact details.",
          icon: Smartphone
        },
        {
          title: "Digital Proof of Delivery (e-POD)",
          description: "Capture customer digital signatures, package photos, and timestamps at the destination to eliminate dispute friction.",
          icon: CheckCircle2
        },
        {
          title: "Warehouse & Staging Management",
          description: "Organize staging zones, coordinate vehicle loading lists, and ensure correct goods are loaded every trip.",
          icon: Package
        },
        {
          title: "Fuel & Vehicle Maintenance Logs",
          description: "Log vehicle mileage, service dates, and fuel expenses so fleet management and maintenance stay proactive.",
          icon: TrendingUp
        }
      ]
    },
    benefits: {
      headline: "Why Businesses Choose Our Logistics Management Software",
      description: "Built for companies operating delivery fleets, distributor routes, and regional supply lines across Pakistan.",
      points: [
        "Designed by logistics and software experts with deep operational experience.",
        "Proven across real-world logistics operations in urban and intercity routes.",
        "Secure, scalable, and future-ready cloud architecture.",
        "Easy onboarding with dedicated onboarding specialists and local support on WhatsApp and phone.",
        "Continuous product improvements tailored to local transport requirements."
      ]
    },
    whyChoose: {
      headline: "Logistics Management Connected to Your POS and Inventory",
      items: [
        {
          title: "Powerful Unified Dashboard",
          description: "Run fleet dispatch, warehouse staging, and courier status from one simple dashboard."
        },
        {
          title: "Reduced Fuel & Operational Costs",
          description: "Route planning in the logistics management system helps cut unnecessary mileage and fuel spend."
        },
        {
          title: "Eliminate Delivery Disputes",
          description: "Digital signatures, photos, and exact arrival timestamps protect your business from claims."
        },
        {
          title: "Direct POS Integration",
          description: "Orders created in your POS flow into the logistics dispatch pipeline automatically."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Uses Our Logistics Management Software",
      description: "Customized for industries requiring rapid, dependable product distribution:",
      points: [
        "Logistics & Courier Companies - Track daily parcels, driver runs, and cash on delivery (COD) reconciliations.",
        "Manufacturers & Distributors - Manage warehouse dispatch to wholesalers and retail stockists.",
        "3PL Providers - Deliver transparency and live tracking links to corporate clients.",
        "Retail Chains with Delivery - Run your in-house delivery bikes and vans with professional oversight."
      ]
    },
    faq: {
      headline: "Logistics Management Software FAQs",
      description: "Common questions about Hulm logistics management software.",
      items: [
        {
          question: "Is this suitable for small businesses?",
          answer: "Hulm can support different fleet sizes. Capacity, route volume and required controls should be confirmed before rollout."
        },
        {
          question: "Can it integrate with ERP or accounting systems?",
          answer: "Supported integrations can connect logistics, POS, inventory and accounting workflows. Compatibility and data scope must be confirmed for each system."
        },
        {
          question: "Is the software customizable?",
          answer: "Absolutely. Workflows, driver roles, dispatch stages, and performance reports can be tailored to match your precise operational model."
        }
      ]
    }
  },

  "inventory-management": {
    slug: "inventory-management",
    name: "Inventory Management",
    title: "POS Inventory Management Software | Inventory Control Software",
    metaTitle: "POS Inventory Management Software | Inventory Control Software",
    metaDescription: "Optimize your business with the best inventory control software. Enhance efficiency & stock control with Hulm POS Inventory Management. Free trial available.",
    icon: Package,
    hero: {
      badge: "REAL-TIME STOCK CONTROL",
      headline: "Cloud Based Inventory Management Software",
      subheadline: "Track stock movement, review current quantities and configure reorder workflows around the way your business purchases and sells products.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Smarter Inventory Management Software for Every Business",
      description: "Inventory management is the process of tracking, controlling, and optimizing stock to meet customer demand efficiently. It helps businesses avoid overstocking, reduce carrying costs, and prevent costly stockouts. With Hulm's cloud-based platform, your stock updates automatically with every barcode scan and sale.",
      points: [
        "Live stock reconciliation across retail counters, storage rooms, and remote warehouses.",
        "Automated alerts when product counts hit your safety reorder threshold.",
        "Full support for product variants, sizes, colors, serial numbers, and expiry dates."
      ]
    },
    features: {
      headline: "Complete Inventory Control Software Features",
      description: "Every inventory management tool you need to eliminate shrinkage, overselling, and inventory guessing.",
      items: [
        {
          title: "Real-Time Stock Auditing",
          description: "See exact quantities on hand across all branches and storage locations simultaneously.",
          icon: Package
        },
        {
          title: "Automated Reorder Triggers",
          description: "Set minimum thresholds for fast-moving items and automatically generate draft purchase orders.",
          icon: Clock
        },
        {
          title: "Barcode & Label Generation",
          description: "Print custom barcode labels, price tags, and shelf stickers directly from your product catalog.",
          icon: FileText
        },
        {
          title: "Batch & Expiry Date Tracking",
          description: "Critical for pharmacies, groceries, and bakeries — track expiry dates to sell oldest stock first (FIFO).",
          icon: ShieldCheck
        },
        {
          title: "Inter-Branch Stock Transfers",
          description: "Transfer stock between branches with full dispatch and receipt acknowledgments.",
          icon: Truck
        },
        {
          title: "Stock Valuation & Margin Analysis",
          description: "Calculate accurate Cost of Goods Sold (COGS) and inventory valuation using weighted average pricing.",
          icon: TrendingUp
        }
      ]
    },
    benefits: {
      headline: "Benefits of Inventory Management Software",
      description: "At Hulm Solutions, we empower businesses to thrive by simplifying stock management and minimizing carrying expenses.",
      points: [
        "Real-time inventory management across all physical counters and online channels.",
        "Prevent costly stockouts of your highest-margin and best-selling products.",
        "Minimize shrinkage, theft, and administrative counting errors.",
        "Faster stock audits with handheld barcode scanning.",
        "Better supplier negotiation with clear purchasing data and demand history.",
        "Detailed inventory valuation reports for accounting and tax compliance.",
        "Reduced working capital tied up in slow-moving or dead stock.",
        "Automated purchase order creation when stock reaches reorder levels.",
        "Multi-location synchronization without manual phone calls or spreadsheets.",
        "Clearer customer communication based on available stock records."
      ]
    },
    whyChoose: {
      headline: "Why Trust Hulm's Inventory Management System",
      items: [
        {
          title: "Always Accurate Numbers",
          description: "Every counter sale, return, transfer, and supplier receipt updates your stock in real time."
        },
        {
          title: "Fast Implementation",
          description: "Upload existing inventory spreadsheets in minutes with bulk Excel/CSV import."
        },
        {
          title: "Multi-Industry Flexibility",
          description: "Tailored features for retail, pharmacies, apparel variants, restaurants, and wholesale."
        },
        {
          title: "Dedicated Local Support",
          description: "Our local support team helps on WhatsApp and phone during setup and day-to-day use."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Uses Hulm Inventory Management Software",
      description: "Designed for operations where accurate stock numbers directly determine profitability:",
      points: [
        "Retail Stores - Keep fast-moving consumer goods and electronics accurately balanced.",
        "Pharmacies - Manage thousands of medicines with batch numbers, expiry dates, and formula alternatives.",
        "Bakeries & Cafes - Track raw ingredients like flour, sugar, and dairy alongside finished bakery items.",
        "Clothing & Shoe Stores - Organize complex matrices of sizes, colors, and seasonal variants.",
        "Wholesale Distributors - Manage pallet-level quantities, multi-warehouse transfers, and bulk trade pricing."
      ]
    },
    faq: {
      headline: "Inventory Management FAQs",
      description: "Quick answers to common questions about Hulm inventory management software.",
      items: [
        {
          question: "How to improve inventory management?",
          answer: "You can improve inventory management by using software that tracks stock in real time, sets reorder points, and automates reporting. Businesses that adopt automated systems eliminate stockouts and reduce carrying costs."
        },
        {
          question: "What is inventory management?",
          answer: "Inventory management is the process of tracking, controlling, and optimizing stock to meet customer demand efficiently. It helps businesses avoid overstocking and prevent stockouts."
        },
        {
          question: "How to manage inventory?",
          answer: "To manage inventory effectively, businesses should categorize items, set reorder levels, and monitor stock movement regularly. The most efficient way is using cloud-based POS inventory management software like Hulm."
        },
        {
          question: "How does inventory management software work?",
          answer: "Inventory management software works by automatically updating stock levels when items are sold or received. It integrates with POS systems, warehouses, and online stores in real time."
        },
        {
          question: "What is the first step of inventory management?",
          answer: "The first step of inventory management is recording and categorizing all products in your system, including details like SKUs, quantities, and storage locations."
        },
        {
          question: "Is inventory management included in every Hulm POS plan?",
          answer: "Yes. Inventory management is included in every Hulm plan: basic inventory management on Starter, and multi-branch stock and transfers on Growth and Business."
        },
        {
          question: "How much does inventory management software cost?",
          answer: "The cost depends on features and business size. Hulm provides full inventory management integrated into its POS platform for just PKR 2,500 per month with a 14-day free trial."
        },
        {
          question: "Which inventory management system is best?",
          answer: "The best inventory management system is one that matches your business size and industry needs. Hulm is one option for Pakistani SMEs that want inventory, multi-location controls, FBR integration and POS workflows in one system. Compare the required features, setup and support before choosing."
        }
      ]
    }
  },

  "reporting-module": {
    slug: "reporting-module",
    name: "Reporting & Analytics",
    title: "Reporting & Analytics Module | POS Insights by Hulm",
    metaTitle: "Reporting & Analytics Module | POS Insights by Hulm",
    metaDescription: "Turn sales data into insights with Hulm's Reporting Module. Real-time dashboards, KPI tracking, and automated reports for smarter business decisions.",
    icon: BarChart3,
    hero: {
      badge: "DATA-DRIVEN DECISIONS",
      headline: "Streamline Your Business with Hulm Reporting Module",
      subheadline: "Hulm's reporting module transforms raw transactional data into actionable insights that inspire performance, streamline operations, and optimize business strategies—all from one centralized, easy-to-use platform.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "Reporting Connected to Daily Operations",
      description: "Data-driven decisions facilitate a business's success. With Hulm Solutions' Reporting Module, transform raw sales and operational data into valuable insights that boost profitability, highlight top performers, and eliminate bottlenecks. Our pro reporting tools help you track key metrics while making confident decisions.",
      points: [
        "Real-time visibility into gross sales, net profit, discounts, and tax liabilities.",
        "Identify your top-performing products, quietest store hours, and most profitable sales reps.",
        "Compare performance across branches without waiting for end-of-month manual tallying."
      ]
    },
    features: {
      headline: "Functions of Hulm Reporting Module",
      description: "Review sales and operational data through POS reports configured for the questions your team needs to answer.",
      items: [
        {
          title: "Tailored Custom Reports",
          description: "Create tailored reports that focus on the metrics most relevant to your business, from sales and inventory to customer interactions and financial performance.",
          icon: FileText
        },
        {
          title: "Live Real-Time Dashboards",
          description: "Access live, up-to-date reports to monitor business operations in real time, ensuring you stay ahead of changes and sales trends.",
          icon: Clock
        },
        {
          title: "Visual Charts & Graphs",
          description: "View complex operational data in easy-to-understand visual formats like charts, graphs, and summary tables for quick executive analysis.",
          icon: BarChart3
        },
        {
          title: "Key Performance Indicator (KPI) Tracking",
          description: "Track key performance indicators to measure success, identify operational bottlenecks, and highlight opportunities for growth.",
          icon: TrendingUp
        },
        {
          title: "Automated Report Scheduling",
          description: "Schedule and automate report generation, delivering daily, weekly, or monthly P&L summaries directly to your email inbox.",
          icon: CheckCircle2
        },
        {
          title: "Cross-Functional System Data",
          description: "Bring supported sales, customer, inventory and financial data into reports based on the configured sources and fields.",
          icon: Laptop
        }
      ]
    },
    benefits: {
      headline: "Benefits of Using Hulm Reporting Module",
      description: "The Hulm Solutions Reporting Module enables organizations to drive business decisions from accurate real-time insights at remarkably short notice and without hesitation.",
      points: [
        "Better Decision-Making - Base hiring, inventory purchasing, and expansion on verified data.",
        "Increased Operational Efficiency - Spot underperforming items or departments and fix them rapidly.",
        "Improved Visibility - Monitor all branches, registers, and delivery fleets simultaneously.",
        "Enhanced Accountability - Track employee sales quotas, voids, discounts, and register closures.",
        "Strategic Business Planning - Accurately forecast seasonal demand and customer purchasing cycles."
      ]
    },
    whyChoose: {
      headline: "Trusted Reporting Solutions by Hulm",
      items: [
        {
          title: "Built on Industry Experience",
          description: "Tailored to solve the real reporting headaches Pakistani SME owners face when trying to calculate actual net profit."
        },
        {
          title: "FBR & Tax Audit Ready",
          description: "Generate compliant tax summaries and sales registers formatted specifically for FBR declarations."
        },
        {
          title: "One-Click Exporting",
          description: "Export any of your business reports to Excel, CSV, or PDF in seconds to share with your accountant or management team."
        },
        {
          title: "Mobile Dashboard Access",
          description: "Check live daily revenues, average basket size, and cash drawer balances from your smartphone anywhere."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Relies on the Hulm Reporting Module?",
      description: "Crucial for business owners and managers who want to understand their numbers:",
      points: [
        "Multi-Branch Retailers - Compare revenue, overhead, and margin across every store location.",
        "Restaurant Owners - Track food costs, peak table hours, and most popular menu combinations.",
        "Wholesale Distributors - Analyze customer credit aging, profit per account, and salesperson volume.",
        "E-commerce & Hybrid Stores - Measure online conversion rates against in-store counter performance."
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Questions about the Hulm reporting module, POS reports and business reporting and analytics.",
      items: [
        {
          question: "Can I view sales reports from my phone when I am away from the store?",
          answer: "Hulm uses cloud-based access. Available dashboards, devices and permissions depend on the selected plan and configuration."
        },
        {
          question: "Does Hulm generate reports for FBR tax filing?",
          answer: "Yes. Hulm provides structured tax reports detailing taxable sales, tax amounts collected, exempt sales, and registered invoices with QR codes for straightforward FBR filing."
        },
        {
          question: "Can I schedule automated daily sales reports to my email?",
          answer: "Yes, you can configure the system to automatically email you an end-of-day summary every night detailing total revenue, top items sold, and cashier cash reconciliations."
        },
        {
          question: "Can I export data to Excel or PDF for my accountant?",
          answer: "Every report in the reporting module can be exported with a single click to Excel, CSV, or PDF."
        }
      ]
    }
  },

  "website": {
    slug: "website",
    name: "Website & Ecommerce Store",
    title: "Connected Ecommerce Store | Hulm Solutions",
    metaTitle: "Connected Ecommerce Store | Hulm Solutions",
    metaDescription: "Start selling online with Hulm's one-click ecommerce store. Fast setup, management, & integrations to grow your business. Get your free demo!",
    icon: Store,
    hero: {
      badge: "ONE-TAP ECOMMERCE",
      headline: "One-Tap Ecommerce Store - Turn Your Inventory into Online Sales",
      subheadline: "The only POS module that turns your entire business inventory into a professional e-commerce store with one single click. No developers, no hosting headaches, just your products live and ready to sell.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "From POS to Ecommerce Store in Three Taps",
      description: "Most businesses are invisible to customers outside walking distance. Building a custom website or using complicated foreign platforms means months of setup, expensive developers, and ongoing maintenance headaches. The Hulm Website module changes that overnight with a one-click ecommerce store connected to your POS inventory.",
      points: [
        "Select the products you want to sell online directly from your existing POS inventory.",
        "Choose your brand colours, upload your logo and prepare a mobile-friendly storefront for launch.",
        "Supported online orders can connect to the POS workflow with configured notifications."
      ]
    },
    features: {
      headline: "Online Store Features: Everything You Need to Sell Online in Pakistan",
      description: "Built for real businesses—from corner retail shops to large wholesalers—with zero technical skills required to run an ecommerce website.",
      items: [
        {
          title: "One-Tap Product Publishing",
          description: "Toggle any product in your POS catalog to live on your website with synchronized pricing, stock, and descriptions.",
          icon: Store
        },
        {
          title: "Unified Real-Time Inventory",
          description: "Never oversell. When an item is sold in your physical shop or online, inventory deducts immediately everywhere.",
          icon: Package
        },
        {
          title: "Cash on Delivery & Bank Transfer",
          description: "Take orders with cash on delivery (COD) or direct bank transfer. Online payment gateways are planned and will be added to the store.",
          icon: CreditCard
        },
        {
          title: "Unified POS Order Stream",
          description: "In-store sales and online checkouts appear on the exact same dashboard. Your team never has to learn a second system.",
          icon: ShoppingCart
        },
        {
          title: "Custom Domain Connection",
          description: "Connect your own custom domain (e.g. yourstore.com or yourstore.pk) for a fully branded customer shopping experience.",
          icon: Laptop
        },
        {
          title: "Mobile-First Responsive Design",
          description: "Fast loading on 3G/4G networks across Pakistan, ensuring smooth customer checkout on any smartphone screen.",
          icon: Smartphone
        }
      ]
    },
    benefits: {
      headline: "Website Module vs Everything Else",
      description: "Comparing traditional ecommerce website development and complex platforms with Hulm's native e-commerce integration:",
      points: [
        "Live order notifications the second a customer checks out on your website.",
        "Online + POS sales unified in one single financial and operational view.",
        "Inventory automatically deducted when an online order is confirmed.",
        "Export unified sales and tax reports for your entire business in one click.",
        "Zero developer retainers, hosting bills, or security certificate fees."
      ]
    },
    whyChoose: {
      headline: "Why Pakistani Businesses Choose the Hulm Ecommerce Store",
      items: [
        {
          title: "Live in Under 60 Seconds",
          description: "Your product images, descriptions, and prices are already in your POS. Activate the module and your ecommerce store is live."
        },
        {
          title: "No Technical Knowledge Required",
          description: "No coding, server configuration, or plugin updates. Hulm handles all infrastructure and speed optimization."
        },
        {
          title: "Automatic FBR Invoicing",
          description: "Online orders generate compliant FBR sales invoices automatically upon dispatch."
        },
        {
          title: "Multi-Location Pickup & Delivery",
          description: "Allow customers to choose home delivery or select in-store pickup from their nearest branch."
        }
      ]
    },
    whoCanUse: {
      headline: "An Online Store for Every Retail Category",
      description: "Expand your reach beyond your physical neighborhood:",
      points: [
        "Fashion & Clothing Boutiques - Showcase new seasonal arrivals and take orders nationwide.",
        "Electronics & Mobile Accessories - Provide accurate stock counts and clear warranty terms.",
        "Specialty Groceries & Organic Foods - Accept weekly delivery orders with minimum basket sizes.",
        "Bakeries & Confectioners - Allow customers to preorder custom celebration cakes and snacks."
      ]
    },
    faq: {
      headline: "Ecommerce Online Store FAQs",
      description: "Answers to common questions about launching an online store with Hulm.",
      items: [
        {
          question: "Do I need any technical knowledge to set up my ecommerce store?",
          answer: "None at all. The Website module is a one-tap activation inside your existing POS dashboard. No code, no configuration, and no design work required. Your products and categories appear online automatically."
        },
        {
          question: "What happens when I add new products in my POS?",
          answer: "New products appear on your store automatically — usually within seconds. This also applies to price updates, stock level changes, product descriptions, and images."
        },
        {
          question: "Can I use my own custom domain (like myshop.com)?",
          answer: "Yes. On the Starter plan you get a yourname.mywebsite.pk domain, and you can easily connect any custom .com or .pk domain you own."
        },
        {
          question: "Where do online orders go? Does my team need a separate system?",
          answer: "No separate system. Every online order appears directly in your POS dashboard — the same place you manage in-store sales. Inventory is automatically deducted when an order comes in."
        },
        {
          question: "What payment methods are available for my customers?",
          answer: "Customers can pay by cash on delivery or direct bank transfer. Online payment gateways are not available yet; they are planned for a future update."
        }
      ]
    }
  },

  "mobile-pos": {
    slug: "mobile-pos",
    name: "Mobile POS",
    title: "Best Mobile POS System | Mobile POS Software - Hulm POS",
    metaTitle: "Best Mobile POS System | Mobile POS Software - Hulm POS",
    metaDescription: "Discover best mobile POS system for modern businesses. Our mobile POS software help manage sales, inventory, and payments anywhere on any smartphone.",
    icon: Smartphone,
    hero: {
      badge: "SELL ANYWHERE ON ANY SMARTPHONE",
      headline: "Best Mobile POS System for Modern Business",
      subheadline: "Use a mobile device for supported retail, restaurant and service workflows. Payment options, live reporting and inventory access depend on your configuration.",
      primaryCtaText: "Start 14-Day Free Trial",
      primaryCtaLink: "https://app.hulmsolutions.com/Register",
      secondaryCtaText: "Book a Free Demo",
      secondaryCtaLink: "/book-a-demo/"
    },
    whatIs: {
      headline: "What is a Mobile POS System?",
      description: "A mobile POS system (mPOS) turns smartphones or tablets into powerful payment terminals, replacing traditional fixed registers with flexible, cloud-based technology. With mobile POS software, businesses can accept payments, manage sales, and track inventory anywhere using a secure POS mobile solution without investing in costly bulky hardware.",
      points: [
        "Runs in the web browser on smartphones, tablets and handheld POS terminals, with no app to download.",
        "Works on Wi-Fi or mobile data; keep a backup connection such as a mobile hotspot for busy hours.",
        "Print receipts via portable Bluetooth printers or send digital SMS/WhatsApp invoices."
      ]
    },
    features: {
      headline: "Mobile POS System Features for Phones and Tablets",
      description: "Configure the mobile experience around your products, users, devices and accepted payment methods.",
      items: [
        {
          title: "01 Sign Up & Sign In",
          description: "Create your account and sign in to the Hulm dashboard to start setting up your business in minutes.",
          icon: Laptop
        },
        {
          title: "02 Connect Payments & Printers",
          description: "Link your bank account, mobile wallets, or connect portable Bluetooth receipt printers with a single tap.",
          icon: CreditCard
        },
        {
          title: "03 Product Catalogue",
          description: "Add products by importing inventory, scanning barcodes with your phone's camera, or manually entering items.",
          icon: Package
        },
        {
          title: "04 Process Sales in Seconds",
          description: "Use the on-the-go checkout to process sales, record supported payment methods and provide digital receipts where configured.",
          icon: ShoppingCart
        },
        {
          title: "Live Cloud Sync",
          description: "Every sale is saved to your Hulm cloud workspace as it happens, so stock and reports stay up to date across devices.",
          icon: ShieldCheck
        },
        {
          title: "Multi-Counter Floor Mobility",
          description: "Bust long checkout queues by having staff take orders and payments directly on the sales floor or table.",
          icon: Users
        }
      ]
    },
    benefits: {
      headline: "Why Pakistani Businesses Sell on Phones and Tablets with Hulm",
      description: "Eliminate high hardware costs and gain the freedom to sell at exhibitions, pop-ups, and curbside delivery:",
      points: [
        "Zero Expensive Hardware - No need to spend PKR 100,000+ on imported POS terminals.",
        "Works on mobile data - Designed to run on 3G and 4G connections as well as Wi-Fi.",
        "Fast Checkout - Complete a customer sale in under 10 seconds with quick-touch product categories.",
        "FBR Invoicing on the Go - Generate compliant receipts with required tax identifiers wherever you are.",
        "Connected reporting - Mobile sales can feed central reporting based on network availability and system configuration."
      ]
    },
    whyChoose: {
      headline: "Mobile POS vs Traditional Fixed Registers",
      items: [
        {
          title: "Hardware Cost",
          description: "Dedicated POS terminals are expensive. Hulm runs on compatible phones and tablets you may already own, so you can set up a tablet POS with little or no new hardware."
        },
        {
          title: "Mobility & Portability",
          description: "Traditional registers are tethered to one counter. Hulm mPOS allows you to sell anywhere on the floor, curbside, or at outdoor pop-ups."
        },
        {
          title: "Setup & Training Time",
          description: "Complex legacy software takes days to learn. Hulm's mobile screens are designed so cashiers pick up the sales flow quickly."
        },
        {
          title: "Backup Connectivity",
          description: "Because Hulm runs in the cloud, a phone hotspot is an easy backup when broadband drops, so the counter keeps selling."
        }
      ]
    },
    whoCanUse: {
      headline: "Real-World Mobile POS System Use Cases",
      description: "Trusted across Pakistan for versatile operational setups:",
      points: [
        "Pop-Up Shops & Exhibitions - Sell at trade fairs, expos, and seasonal markets without electrical wiring.",
        "Food trucks and cafes - Support orders at tables, drive-throughs or outdoor service points.",
        "Line Busting in Busy Retail - Speed up peak holiday queues by adding mobile checkout stations.",
        "Delivery & Field Agents - Collect cash or digital payments at the customer's doorstep upon delivery."
      ]
    },
    faq: {
      headline: "Mobile POS FAQs",
      description: "Everything you need to know about setting up and running Hulm on phones and tablets.",
      items: [
        {
          question: "What is a mobile point of sale system?",
          answer: "A mobile point of sale (mPOS) system is cloud-based software that transforms smartphones or tablets into payment terminals. It allows businesses to accept payments, track sales, and manage inventory without bulky hardware."
        },
        {
          question: "How does a mobile POS system work?",
          answer: "Sign in to Hulm on a compatible phone or tablet, connect a Bluetooth or USB receipt printer if you need receipts, add your products and start selling. Sales sync with your Hulm cloud workspace."
        },
        {
          question: "What is the best mobile POS system for small business?",
          answer: "Hulm is built for small businesses in Pakistan: plans start at PKR 2,500 per month, it runs on compatible devices you may already own, setup guidance is included, and FBR integration is available."
        },
        {
          question: "Are mobile POS systems secure?",
          answer: "Hulm runs over encrypted HTTPS connections, with user roles and permissions controlling what each staff member can see and do. Card payments are processed by your payment provider. Ask the team for current security details for your deployment."
        },
        {
          question: "Is there a Hulm mobile app on the App Store or Google Play?",
          answer: "Not at the moment. Hulm runs in the web browser on phones, tablets and computers, so there is nothing to download: sign in and start selling."
        },
        {
          question: "Do I need internet to use mobile POS?",
          answer: "Yes. Hulm is a cloud POS and needs an internet connection (Wi-Fi or mobile data) to record sales. It does not have an offline mode, so we recommend a backup connection such as a mobile hotspot."
        },
        {
          question: "What payment methods can I accept?",
          answer: "Record cash, card, mobile-wallet (such as JazzCash and EasyPaisa) and bank-transfer payments. Integrated payment gateways are not available yet and are planned for a future update."
        },
        {
          question: "Is there a free trial?",
          answer: "Yes! Get 14 days free with full access to all features. No credit card required to start."
        }
      ]
    }
  }
};
