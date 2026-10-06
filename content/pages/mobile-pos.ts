import { StandardPageContent } from '../types';

export const mobilePosContent: StandardPageContent = {
  seo: {
    title: "Best Mobile POS System | Mobile POS Software - Hulm POS",
    description: "Sell anywhere with our powerful mobile POS system designed for retail, restaurants, and service businesses.",
    keywords: ["Mobile POS", "mPOS", "POS mobile solution", "Hulm Mobile POS"]
  },
  hero: {
    headline: "Best Mobile POS System for Modern Business",
    description: "Sell anywhere with our powerful mobile POS system designed for retail, restaurants, and service businesses. Accept payments anywhere. Track sales in real-time. Manage inventory effortlessly. All from your smartphone.",
    primaryCTA: {
      label: "Request Free Demo",
      href: "/contact"
    },
    secondaryCTA: {
      label: "Get Started",
      href: "/register"
    }
  },
  additionalSections: [
    {
      type: "stats",
      items: [
        { value: "24/7", label: "Support" },
        { value: "15+", label: "Active Business" },
        { value: "99.9%", label: "Uptime SLA" }
      ]
    },
    {
      type: "what-is-it",
      heading: "What is a Mobile POS System?",
      description: "A mobile POS system (mPOS) turns smartphones or tablets into powerful payment terminals, replacing traditional fixed registers with flexible, cloud-based technology. With mobile POS software, businesses can accept payments, manage sales, and track inventory anywhere using a secure POS mobile solution.",
      comparison: [
        {
          title: "Traditional",
          points: [
            "$1000+ upfront cost",
            "Expensive hardware investment",
            "Fixed location",
            "Cannot move or travel",
            "1-2 weeks setup",
            "Complex installation required",
            "Hardware dependent",
            "Breaks down, needs repair",
            "Limited reporting",
            "Basic or no analytics"
          ]
        },
        {
          title: "Mobile POS Systems",
          points: [
            "$8 per month",
            "No upfront hardware costs",
            "Use anywhere",
            "Payments on-the-go",
            "5 minutes setup",
            "Download app & start",
            "Cloud-based",
            "Auto backup & sync",
            "Real-time analytics",
            "Instant insights & reports"
          ]
        }
      ]
    },
    {
      type: "how-it-works",
      heading: "How It Works",
      subheading: "Get started in under 30 minutes with our simple 4-step process",
      steps: [
        { time: "5 min", title: "Sign Up & Sign In", desc: "Create your account and sign in to the mobile POS system dashboard to start setting up your business." },
        { time: "10 min", title: "Connect Payment", desc: "Link your bank account or payment processor to your mobile POS software to accept cards, cash, and digital payments securely." },
        { time: "15 min", title: "Add Products", desc: "Add your products by importing inventory, scanning barcodes, or manually entering items into your mobile POS solution." },
        { time: "Now", title: "Start Selling", desc: "Use your POS mobile app to process sales, accept payments, and send digital receipts instantly to customers." }
      ]
    },
    {
      type: "features-grid",
      heading: "All-in-One Mobile POS Solution",
      items: [
        { title: "Accept All Payments", desc: "Cards, cash, and digital wallets with our secure mobile POS system designed for modern businesses.", badge: "100% Secure" },
        { title: "Barcode Scanning", desc: "Quick product lookup with advanced scanning in our mobile POS software to speed up checkout.", badge: "3x Faster" },
        { title: "Real-Time Analytics", desc: "Monitor live sales, product trends, and performance using the best mobile POS system dashboard.", badge: "Live Data" },
        { title: "Inventory Control", desc: "Track stock levels automatically with smart tools built into our mobile POS solutions.", badge: "24/7 Sync" },
        { title: "Digital Receipts", desc: "Send instant receipts via email or SMS using our modern POS mobile platform.", badge: "Instant Send" },
        { title: "Multi-Location", desc: "Manage multiple stores from one powerful mobile POS system with centralized reporting.", badge: "∞ Locations" },
        { title: "Customer CRM", desc: "Track purchase history, loyalty rewards, and customer data with the best mobile POS systems.", badge: "Built-in CRM" },
        { title: "Cloud-Based Data Access", desc: "Access your business anytime, anywhere with cloud technology powering the best mobile POS.", badge: "Secure Cloud" }
      ]
    },
    {
      type: "in-action",
      heading: "See HULM Mobile POS in Action",
      subheading: "Beautiful, intuitive interface designed for speed and simplicity. Works on any device.",
      features: [
        {
          title: "Point of Sale",
          points: ["Quick checkout interface", "Product search", "Cart management", "Multiple payments"]
        },
        {
          title: "Inventory",
          points: ["Real-time stock tracking", "Low stock alerts", "Product variants", "Barcode scanning"]
        },
        {
          title: "Analytics",
          points: ["Live sales dashboard", "Revenue trends", "Top products", "Customer insights"]
        },
        {
          title: "Customers",
          points: ["Built-in CRM system", "Purchase history", "Loyalty points", "Contact management"]
        }
      ]
    },
    {
      type: "industry-specific",
      heading: "Industry-Specific Solutions",
      subheading: "Every industry has unique needs. HULM’s mobile POS system adapts to your business with specialized features and workflows.",
      industries: [
        {
          title: "Retail",
          features: ["Barcode scanning for instant product lookup", "Customer loyalty & rewards programs", "Product variants (size, color, style)", "Real-time inventory synchronization", "Multi-location stock transfers", "Employee commission tracking"],
          useCases: ["Accept payments anywhere in the store", "Process returns & exchanges seamlessly", "Track best-selling items by category", "Manage seasonal inventory changes"]
        },
        {
          title: "Restaurants",
          features: ["Table & order management system", "Split bill functionality", "Delivery & takeout tracking", "Kitchen display sync (KDS)", "Modifier & add-ons support", "Tip management & distribution"],
          useCases: ["Take orders tableside with mobile device", "Send orders directly to kitchen", "Split checks by seat or item", "Process payments at the table"]
        },
        {
          title: "Grocery",
          features: ["Weight-based pricing support", "Perishable stock management", "Bulk item discounts", "Quick scan checkout", "Expiration date tracking", "EBT/SNAP payment processing"],
          useCases: ["Calculate prices by weight automatically", "Alert when products near expiration", "Fast checkout for high-volume sales", "Track fresh produce inventory"]
        },
        {
          title: "Services / Salons",
          features: ["Appointment scheduling integration", "Client history & preferences", "Invoice generation", "Service booking & management", "Package & membership sales", "Time-based billing"],
          useCases: ["Book appointments & collect deposits", "Track client visit history", "Sell service packages upfront", "Generate professional invoices"]
        }
      ]
    },
    {
      type: "security",
      heading: "Security & Compliance",
      subheading: "Your customers trust you with their payment data. We protect it with military-grade security and international compliance standards."
    },
    {
      type: "comparison-table",
      headers: ["Metric", "Traditional POS", "HULM Mobile POS", "Improvement"],
      rows: [
        { metric: "Setup Time", trad: "1-2 weeks", hulm: "5 minutes", imp: "99% faster" },
        { metric: "Hardware Cost", trad: "$2,000+", hulm: "$0", imp: "100% savings" },
        { metric: "Monthly Fee", trad: "$150-300", hulm: "$18", imp: "70% lower" },
        { metric: "Training Time", trad: "2-3 days", hulm: "15 minutes", imp: "95% faster" },
        { metric: "Mobility", trad: "Fixed location", hulm: "Anywhere", imp: "Unlimited" }
      ]
    },
    {
      type: "faq",
      heading: "Frequently Asked Questions",
      subheading: "Get quick answers to common questions about our services and support in our FAQ section.",
      items: [
        { q: "Q1: What is a mobile point of sale system?", a: "A mobile point of sale (mPOS) system is a cloud-based software that transforms smartphones or tablets into payment terminals. It allows businesses to accept payments, manage inventory, and track sales from anywhere without traditional POS hardware." },
        { q: "Q2: How does a mobile POS system work?", a: "It connects to a cloud-based platform allowing you to scan items, process payments, and sync data in real-time across your business locations via an app on your smartphone or tablet." },
        { q: "Q3: What is the best mobile POS system for small business?", a: "Hulm POS is considered one of the best for small businesses due to its zero hardware costs, instant setup, and comprehensive feature suite starting at a very affordable price." },
        { q: "Q4: Are mobile POS systems secure?", a: "Yes, Hulm uses military-grade encryption and complies with international data security standards to protect all transactions." },
        { q: "Q5: Can I use HULM POS on Android and iOS?", a: "Yes, our mobile POS is available on both Android and iOS devices." },
        { q: "Q6: Do I need internet to use mobile POS?", a: "Yes, an internet connection (Wi-Fi or mobile data) is required to sync transactions in real-time." },
        { q: "Q7: What payment methods can I accept?", a: "You can accept cards, cash, digital wallets, and custom payment types." },
        { q: "Q8: Is there a free trial?", a: "Yes, we offer a 14-day free trial." }
      ]
    },
    {
      type: "final-cta",
      heading: "Ready to Transform Your Business?",
      subheading: "Join 150+ businesses using the best mobile POS system. Start your 14-day free trial today.",
      buttons: [
        { label: "Start for free", href: "/register" },
        { label: "Talk to sales", href: "/contact" }
      ]
    }
  ]
};
