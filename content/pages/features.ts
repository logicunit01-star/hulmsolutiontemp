/**
 * Features page — benchmark layout (staging) + live SEO keyword layer.
 * Title/description: live values via seoMetadata("/features/").
 * Primary keyword: POS system features / POS software features.
 * Secondary: retail, restaurant, service business, billing, inventory, staff, integrations.
 */
export const featuresContent = {
  hero: {
    eyebrow: "Core POS",
    headline: "Complete POS Software Features for Modern Businesses",
    description:
      "Hulm POS software features connect billing, products, inventory, customers, staff permissions and sales reporting in one point of sale workflow for retail stores, restaurants and other growing businesses.",
    primaryCta: { label: "Start 14-Day Free Trial", href: "https://app.hulmsolutions.com/Register" },
    secondaryCta: { label: "Book a Demo", href: "/contact/" },
  },
  core: {
    eyebrow: "Core Modules",
    heading: "Comprehensive Hulm POS Software Features",
    description:
      "Hulm POS brings essential point of sale software features together in one easy-to-use platform. Manage sales, products, customers, and inventory while keeping your daily business operations organized. Whether you run a retail shop, grocery store, mart, pharmacy, or another business, Hulm POS helps simplify checkout and gives you better control over your business records.",
    items: [
      {
        id: "smart-pos-dashboard",
        title: "Smart POS Dashboard",
        description:
          "Manage daily sales, find products, and reconcile shifts from one fast screen.",
        capabilities: [
          { title: "Clear Checkout", description: "Select items & complete billing on one screen." },
          { title: "Barcode Scanning", description: "Scan barcodes for quick addition to sales." },
          { title: "Product Search", description: "Find items quickly by name or barcode." },
          { title: "Category Filters", description: "Filter by category to locate items faster." },
          { title: "Hold Sales", description: "Park sales and resume when customer is ready." },
          { title: "Shift Tracking", description: "Record drawer cash at start and end of shifts." },
          { title: "Cash Check", description: "Spot drawer cash shortages or overages automatically." },
        ],
      },
      {
        id: "sales-history",
        title: "Sales History Management",
        description:
          "Access complete sales records and locate previous transactions with ease.",
        capabilities: [
          { title: "Search by Order ID", description: "Locate any sale instantly by its order ID." },
          { title: "Today's Sales", description: "Check daily transactions and total revenue." },
          { title: "Sales History", description: "View full chronological archive of past records." },
          { title: "Process Returns", description: "Record returns and auto-restock inventory." },
          { title: "Reprint Receipts", description: "Print customer receipts again on demand." },
          { title: "Order Details", description: "Review date, time, payment method, and status." },
        ],
      },
      {
        id: "customer-management",
        title: "Customer Management",
        description:
          "Keep customer profiles and purchase history organized in one database.",
        capabilities: [
          { title: "Add Customers", description: "Create records for new customers with ease." },
          { title: "Edit Details", description: "Update phone, email, and address anytime." },
          { title: "Search Customers", description: "Find customers by name, ID, or email." },
          { title: "Filter Records", description: "Filter customer data for quick access." },
        ],
      },
      {
        id: "product-management",
        title: "Product Management",
        description:
          "Manage your catalog from one place with complete product details and pricing.",
        capabilities: [
          { title: "Add Products", description: "Enter new items with prices, barcodes, and taxes." },
          { title: "Search Products", description: "Find items quickly across your catalog." },
          { title: "Edit Products", description: "Update prices, specifications, and details." },
          { title: "View All Products", description: "See your complete product list in one dashboard." },
          { title: "Active Products", description: "View and manage items currently for sale." },
          { title: "Draft Products", description: "Save unfinished product listings as drafts." },
          { title: "Filter Records", description: "Filter products by status, category, and price." },
        ],
      },
      {
        id: "category-management",
        title: "Category Management",
        description:
          "Organize products into intuitive categories for faster checkout and browsing.",
        capabilities: [
          { title: "Create Categories", description: "Add custom categories and sub-categories." },
          { title: "Search Categories", description: "Find categories quickly with instant search." },
          { title: "Filter by ID", description: "Locate categories using their unique ID." },
          { title: "Filter by Name", description: "Browse categories alphabetically or by name." },
        ],
      },
      {
        id: "inventory-management",
        title: "Inventory Management",
        description:
          "Track real-time stock levels, check inventory value, and audit changes.",
        capabilities: [
          { title: "Add Stock", description: "Increase quantities when new shipments arrive." },
          { title: "Set Quantities", description: "Update recorded stock balances directly." },
          { title: "Monitor Levels", description: "Spot low-stock and out-of-stock items early." },
          { title: "Inventory Value", description: "View the total monetary valuation of your stock." },
          { title: "Stock History", description: "Review complete logs of inventory changes over time." },
        ],
      },
      {
        id: "low-stock-alerts",
        title: "Low-Stock Alerts",
        description:
          "Spot inventory shortages early so you can restock proactively and prevent stockouts.",
        capabilities: [
          { title: "View All Alerts", description: "See all inventory warnings in one central feed." },
          { title: "Low-Stock Items", description: "Identify products running below safety threshold." },
          { title: "Critical Stock", description: "Urgent alerts for near-empty inventory items." },
          { title: "Out-of-Stock", description: "Instant flags for items with zero balance." },
          { title: "Search Alerts", description: "Search within alerts to plan vendor purchase orders." },
        ],
      },
      {
        id: "data-import-export",
        title: "Data Import & Export",
        description:
          "Save time managing business records with batch import and export tools.",
        capabilities: [
          { title: "Product Import/Export", description: "Upload or download complete product catalogs." },
          { title: "Category Import/Export", description: "Batch export or import product categories." },
          { title: "Customer Import/Export", description: "Transfer customer records with ease." },
          { title: "Download Templates", description: "Pre-formatted Excel templates for clean imports." },
          { title: "Upload Files", description: "Upload prepared CSV and spreadsheet files." },
          { title: "Validate Formats", description: "Verify file formats before running batch imports." },
        ],
      },
      {
        id: "hardware-compatibility",
        title: "Hardware Compatibility",
        description:
          "Connect standard retail hardware to make daily billing and checkout seamless.",
        capabilities: [
          { title: "Receipt Printers", description: "Print receipts on thermal and USB printers." },
          { title: "Barcode Scanners", description: "Plug-and-play barcode reader integration." },
          { title: "Cash Drawers", description: "Automatic drawer kick on cash checkout completion." },
          { title: "Label Printers", description: "Print barcode and price labels on compatible printers." },
        ],
      },
      {
        id: "staff-roles",
        title: "Staff Roles & Permissions",
        description:
          "Control access across your team by assigning roles and permissions.",
        capabilities: [
          { title: "Cashier Access", description: "Dedicated billing permissions for daily checkout." },
          { title: "Manager Access", description: "Authorize discounts, returns, and shift reports." },
          { title: "Administrator Access", description: "Full access to system settings, pricing, and logs." },
          { title: "Role Permissions", description: "Granular controls tailored to staff responsibilities." },
        ],
      },
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
        link: { label: "book a free demo", href: "/contact/" },
      },
      {
        q: "Can Hulm connect with other tools?",
        a: "Yes. Supported integrations cover payments, accounting, ecommerce and FBR, with API options for custom workflows. Compatibility is confirmed before rollout.",
        link: { label: "POS integrations", href: "/integration/" },
      },
    ],
  },
} as const;
