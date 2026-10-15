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
          "Manage daily sales from one easy-to-use screen. Find products quickly, handle sales, and check your cash at the start and end of the day.",
        capabilities: [
          { title: "Clear Checkout Workflow", description: "Select products, confirm quantities, and complete each sale through one simple billing screen." },
          { title: "Barcode Scanning", description: "Scan a product's barcode to add it to a sale quickly." },
          { title: "Product Search", description: "Find products by name or barcode." },
          { title: "Category Filters", description: "Filter products by category to find the right item faster." },
          { title: "Hold Sales", description: "Put a sale on hold and complete it later when the customer is ready." },
          { title: "Open & Close Shifts", description: "Record the cash in your drawer at the start and end of the day." },
          { title: "Cash Difference Check", description: "Identify cash shortages or extra money to spot differences (e.g. sales of Rs. 1,000 vs Rs. 980 in drawer) and investigate." },
        ],
      },
      {
        id: "sales-history",
        title: "Sales History Management",
        description:
          "Keep a record of your sales and easily find previous transactions whenever you need them.",
        capabilities: [
          { title: "Search by Order ID", description: "Find a specific sale using its order ID." },
          { title: "Today's Sales", description: "Check the sales recorded for the current day." },
          { title: "Complete Sales History", description: "View your previous sales records." },
          { title: "Process Returns", description: "Record returned items and automatically add the returned stock back to inventory." },
          { title: "Reprint Receipts", description: "Print a customer's receipt again when needed." },
          { title: "View Order Details", description: "Check details of a sale including date, time, payment method, status, and customer information." },
        ],
      },
      {
        id: "customer-management",
        title: "Customer Management",
        description:
          "Keep customer information organized in one place instead of searching through registers or notebooks.",
        capabilities: [
          { title: "Add Customers", description: "Create records for new customers." },
          { title: "Edit Customer Details", description: "Update existing customer information when needed." },
          { title: "Search Customers", description: "Find customers by name, ID, or email." },
          { title: "Filter Customer Records", description: "Filter customer information to find the records you need quickly." },
        ],
      },
      {
        id: "product-management",
        title: "Product Management",
        description:
          "Manage your shop's products from one place and keep product information organized and up to date.",
        capabilities: [
          { title: "Add Products", description: "Enter new products into your system." },
          { title: "Search Products", description: "Find products quickly by searching their records." },
          { title: "Edit Products", description: "Update existing product details when information changes." },
          { title: "View All Products", description: "See your complete product list in one dashboard." },
          { title: "Manage Active Products", description: "View products currently marked as active." },
          { title: "Manage Draft Products", description: "View products saved as drafts." },
          { title: "Filter Product Records", description: "Filter products to find the items you need." },
        ],
      },
      {
        id: "category-management",
        title: "Category Management",
        description:
          "Organize your products into categories such as groceries, drinks, clothing, or accessories to make them easier to manage.",
        capabilities: [
          { title: "Create Categories", description: "Add product categories manually." },
          { title: "Search Categories", description: "Find a category quickly." },
          { title: "Filter by Category ID", description: "Find categories using their ID." },
          { title: "Filter by Category Name", description: "Find categories by name." },
        ],
      },
      {
        id: "inventory-management",
        title: "Inventory Management",
        description:
          "Keep track of your stock, check inventory value, and review product stock records without relying only on manual registers.",
        capabilities: [
          { title: "Add Stock", description: "Increase a product's stock quantity when new stock arrives." },
          { title: "Set Product Quantities", description: "Enter or update the recorded quantity of a product directly." },
          { title: "Monitor Stock Levels", description: "Check which products have low stock or are out of stock." },
          { title: "View Inventory Value", description: "See the total recorded value of your inventory." },
          { title: "Review Inventory History", description: "Check product inventory records to review stock changes over time." },
        ],
      },
      {
        id: "low-stock-alerts",
        title: "Low-Stock Alerts",
        description:
          "Find products that need attention so you can plan restocking and reduce the risk of running out of popular items.",
        capabilities: [
          { title: "View All Inventory Alerts", description: "See your stock alerts in one place." },
          { title: "Low-Stock Products", description: "Identify products that are running low." },
          { title: "Critical-Stock Products", description: "Find products with critically low stock that need urgent attention." },
          { title: "Out-of-Stock Products", description: "Identify products with no stock remaining." },
          { title: "Search Products", description: "Find specific products in your stock alerts." },
        ],
      },
      {
        id: "data-import-export",
        title: "Data Import & Export",
        description:
          "Save time when managing your business records. Import multiple records using prepared files or export your data when you need it.",
        capabilities: [
          { title: "Product Import & Export", description: "Upload product records or download your product data." },
          { title: "Category Import & Export", description: "Upload product categories or download your category records." },
          { title: "Customer Import & Export", description: "Upload customer records or download your customer data." },
          { title: "Download Templates", description: "Get ready-made templates to prepare your data in the required format." },
          { title: "Upload Files", description: "Upload your prepared data files." },
          { title: "Validate File Formats", description: "Check whether an uploaded file has the required format before importing the data." },
        ],
      },
      {
        id: "hardware-compatibility",
        title: "Hardware Compatibility",
        description:
          "Connect the hardware you use in your shop to make daily billing and checkout easier.",
        capabilities: [
          { title: "Receipt Printers", description: "Print customer receipts after sales." },
          { title: "Barcode Scanners", description: "Scan product barcodes for faster checkout." },
          { title: "Cash Drawers", description: "Use a connected cash drawer to manage cash payments." },
          { title: "Label Printers", description: "Print product labels using compatible label printers." },
        ],
      },
      {
        id: "staff-roles",
        title: "Staff Roles & Permissions",
        description:
          "Control what your staff can access in Hulm POS by assigning roles and permissions according to their responsibilities.",
        capabilities: [
          { title: "Cashier Access", description: "Give cashiers access to the features they need for daily billing." },
          { title: "Manager Access", description: "Set permissions for staff responsible for managing shop operations." },
          { title: "Administrator Access", description: "Manage access for users responsible for system administration." },
          { title: "Role-Based Permissions", description: "Control which features and functions each staff member can access." },
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
