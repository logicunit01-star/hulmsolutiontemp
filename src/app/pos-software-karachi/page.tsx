import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Coins,
  Cpu,
  CreditCard,
  Download,
  ExternalLink,
  FileSpreadsheet,
  HelpCircle,
  Laptop,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Package,
  PackageCheck,
  Phone,
  Receipt,
  ReceiptText,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Tag,
  TrendingUp,
  UserCheck,
  Users,
  Utensils,
  Zap,
} from "lucide-react";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqDetails, type FaqDetailsItem } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { KarachiDemoForm } from "@/components/local/karachi/karachi-demo-form";
import { ProductWorkflowInteractive } from "@/components/local/karachi/product-workflow-interactive";
import { DashboardGraphsInteractive } from "@/components/local/karachi/dashboard-graphs-interactive";
import { KarachiFeaturesCarousel } from "@/components/local/karachi/karachi-features-carousel";
import { KarachiIndustriesCarousel } from "@/components/local/karachi/karachi-industries-carousel";
import { MigrationRoadmapCard } from "@/components/local/karachi/migration-roadmap-card";
import { BranchComparisonCard } from "@/components/local/karachi/branch-comparison-card";
import { KarachiPageTracker } from "@/components/local/karachi/karachi-page-tracker";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { SITE_FEEDS, SITE_URL } from "@/lib/seo/page-seo";

export const metadata: Metadata = {
  title: { absolute: "POS Software in Karachi from PKR 2,500/mo | Hulm POS" },
  description:
    "Cloud POS system in Karachi for retail, restaurants and pharmacies: billing, inventory, Udhaar Khata and multi-branch. 14-day free trial, no card. WhatsApp support.",
  alternates: {
    canonical: "/pos-software-karachi/",
    types: SITE_FEEDS,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hulm Solutions",
    locale: "en_PK",
    title: "POS Software in Karachi from PKR 2,500/mo | Hulm POS",
    description:
      "Cloud POS system in Karachi for retail, restaurants and pharmacies: billing, inventory, Udhaar Khata and multi-branch. 14-day free trial, no card. WhatsApp support.",
    url: "/pos-software-karachi/",
    images: [
      {
        url: "/images/product/pos-checkout-screen.webp",
        alt: "Hulm POS software checkout screen in Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Software in Karachi from PKR 2,500/mo | Hulm POS",
    description:
      "Cloud POS system in Karachi for retail, restaurants and pharmacies: billing, inventory, Udhaar Khata and multi-branch. 14-day free trial, no card. WhatsApp support.",
    images: ["/images/product/pos-checkout-screen.webp"],
  },
};

const LAST_UPDATED_DATE = "November 20, 2026";
const LAST_UPDATED_ISO = "2026-11-20";

const karachiFaqs: readonly FaqDetailsItem[] = [
  {
    q: "How much does POS software cost in Karachi?",
    a: "Hulm POS starts at PKR 2,500 per month for the Starter plan, which covers essential retail billing, inventory management, customer ledgers, and standard sales reports. Higher tiers support multiple branches and advanced user controls. Hardware is purchased separately, and all plans include a 14-day free trial with no upfront setup fee.",
    link: { label: "Hulm POS pricing plans", href: "/pricing/" },
  },
  {
    q: "What is the best POS system for small retail shops in Karachi?",
    a: "The best POS system for small Karachi retailers provides fast barcode checkout, inventory tracking, customer credit (Udhaar Khata), and WhatsApp support without complex hardware requirements. Hulm POS runs on any laptop or desktop PC via a web browser, making it practical and affordable for grocery stores, boutiques, and pharmacies.",
    link: { label: "Retail store POS features", href: "/industries/retail-store/" },
  },
  {
    q: "Do businesses in Karachi need an FBR-integrated POS system?",
    a: "Under federal tax rules, Tier-1 retailers operating in air-conditioned shopping malls, national retail chains, or large commercial premises must integrate their POS billing with the FBR. Hulm POS provides FBR-compliant invoicing integration for eligible businesses, printing the required FBR invoice number and verification QR code on receipts.",
    link: { label: "FBR integrated POS details", href: "/fbr-integrated-pos-pakistan/" },
  },
  {
    q: "Does Hulm POS support Sindh Revenue Board (SRB) tax requirements?",
    a: "Restaurants, cafes, caterers, and service businesses in Karachi are subject to Sindh Sales Tax administered by the Sindh Revenue Board (SRB). Hulm POS invoices can be configured with your SRB SNTN and applicable service tax percentages. Share your tax registration details during onboarding to review invoice formatting.",
    link: { label: "Restaurant POS workflows", href: "/industries/restaurant-pos/" },
  },
  {
    q: "How does the 14-day free trial work for Karachi businesses?",
    a: "You can sign up for a full-featured 14-day trial of Hulm POS immediately without entering a credit card or debit card. Test barcode scanning, create product categories, process test bills, and explore business reports. If you decide to continue, activate your monthly subscription starting at PKR 2,500.",
  },
  {
    q: "Can I import my existing product catalogue from Excel into Hulm POS?",
    a: "Yes. If you already have your inventory in an Excel spreadsheet or CSV file, our team provides assisted migration. You can import item names, barcodes, categories, cost prices, and retail prices in bulk, eliminating manual data entry so your Karachi store can launch with zero counter downtime.",
    link: { label: "Switch POS without losing data", href: "/blog/switch-pos-software-without-losing-data/" },
  },
  {
    q: "What hardware and computers do I need to run Hulm POS?",
    a: "Hulm POS is cloud-based and runs in any modern web browser on your existing Windows PC, Mac, laptop, or tablet. For physical store counters, it connects with standard 80mm or 58mm thermal receipt printers, USB or wireless barcode scanners, and standard electronic cash drawers without proprietary hardware locks.",
    link: { label: "POS hardware compatibility", href: "/pos-hardware/" },
  },
  {
    q: "Does Hulm POS work offline without an active internet connection?",
    a: "Hulm POS is a cloud-native platform that requires an active internet connection to ensure real-time inventory synchronization, instant data backups, and multi-branch visibility. In Karachi, stores commonly connect their counter PCs via standard broadband, fiber, or a backup 4G mobile Wi-Fi hotspot to maintain uninterrupted billing.",
  },
  {
    q: "Can I manage multiple store branches across Karachi from one system?",
    a: "Yes. Hulm POS supports multi-branch operations, enabling centralized inventory management, stock transfers between locations, and branch-wise sales reporting from a single dashboard. Business owners can monitor live performance across outlets in Saddar, Clifton, Gulshan, and Gulistan-e-Johar remotely without having to visit each shop in person.",
    link: { label: "Multi-branch retail management", href: "/blog/manage-multiple-retail-branches/" },
  },
  {
    q: "Can I restrict staff permissions and monitor cashier shifts?",
    a: "Yes. Hulm POS allows administrators to create separate staff accounts with customized role permissions. You can prevent cashiers from viewing purchase costs, editing past invoices, or altering product prices. Shift summaries track cash collected per counter, helping prevent discrepancies between drawer totals and recorded transactions.",
  },
  {
    q: "How does customer credit tracking and Udhaar Khata work?",
    a: "Hulm POS includes an integrated customer ledger module (Udhaar Khata). Cashiers can record sales on credit directly at checkout, assign transactions to specific customer accounts, and set credit limits. Customer receipts display the current purchase alongside their remaining balance, making neighborhood credit management transparent and organized.",
    link: { label: "Customer ledger module", href: "/customer-management/" },
  },
  {
    q: "Is customer support and staff training available in Urdu?",
    a: "Yes. Our support team is based in Karachi and provides assistance in both Urdu and English via WhatsApp, phone, and screen sharing. We guide your cashiers through daily checkout, inventory entry, and receipt printing so your staff feels confident running the POS from their first day.",
    link: { label: "Contact Karachi support", href: "/contact/" },
  },
  {
    q: "How do I switch from my old desktop POS to Hulm POS?",
    a: "Switching is straightforward: export your product and customer records from your existing software into Excel, share the file with our team for format verification, and upload your catalogue. We assist with testing barcode scanning and counter checkout before you go live, ensuring a smooth transition without losing historical records.",
    link: { label: "Data migration guide", href: "/blog/switch-pos-software-without-losing-data/" },
  },
  {
    q: "How secure is business and sales data stored on Hulm POS?",
    a: "Your business data is hosted on secure cloud infrastructure with encrypted data transmission and automated daily backups. Unlike traditional desktop POS computers that can crash or lose data during power fluctuations in Karachi, your sales records, inventory values, and customer balances remain protected and accessible anytime.",
    link: { label: "Data security overview", href: "/security/" },
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hulm Solutions",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo/hulm-logo-600.png`,
      sameAs: [
        "https://www.linkedin.com/company/hulm-solutions/",
        "https://www.instagram.com/hulmsolutions",
        "https://www.youtube.com/@Hulmsolutions",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contactInfo.phoneE164,
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["Urdu", "English"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#karachi-office`,
      name: "Hulm Solutions - Karachi",
      image: `${SITE_URL}/images/product/pos-checkout-screen.webp`,
      url: `${SITE_URL}/pos-software-karachi/`,
      telephone: contactInfo.phoneE164,
      email: contactInfo.email,
      priceRange: "Starting at PKR 2,500/month",
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address.streetAddress,
        addressLocality: contactInfo.address.addressLocality,
        addressRegion: contactInfo.address.addressRegion,
        postalCode: contactInfo.address.postalCode,
        addressCountry: contactInfo.address.addressCountry,
      },
      areaServed: {
        "@type": "City",
        name: "Karachi",
        containedInPlace: { "@type": "Country", name: "Pakistan" },
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/pos-software-karachi/#software`,
      name: "Hulm POS",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Point of Sale Software",
      operatingSystem: "Web Browser (Cloud)",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        priceCurrency: "PKR",
        price: "2500",
        url: `${SITE_URL}/pricing/`,
        availability: "https://schema.org/InStock",
        description: "Starter subscription plan per month, 14-day free trial",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/pos-software-karachi/#webpage`,
      url: `${SITE_URL}/pos-software-karachi/`,
      name: "POS Software in Karachi from PKR 2,500/mo | Hulm POS",
      description:
        "Cloud POS system in Karachi for retail, restaurants and pharmacies: billing, inventory, Udhaar Khata and multi-branch. 14-day free trial, no card. WhatsApp support.",
      dateModified: LAST_UPDATED_ISO,
      about: [
        { "@type": "Thing", name: "Point of sale" },
        { "@type": "Thing", name: "POS software in Karachi" },
        { "@type": "Place", name: "Karachi" },
      ],
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}/pos-software-karachi/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/pos-software-karachi/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "POS software in Karachi",
          item: `${SITE_URL}/pos-software-karachi/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/pos-software-karachi/#faq`,
      mainEntity: karachiFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

const atGlanceSpecs = [
  { item: "Starting Subscription", detail: "PKR 2,500 per month (Starter Plan)", note: "Billed monthly, no setup penalty" },
  { item: "Free Trial", detail: "14 Days full feature access", note: "No credit card required to start" },
  { item: "Platform & Access", detail: "Web browser (Cloud access on Windows, Mac, iPad, Android)", note: "No server installation needed" },
  { item: "Supported Hardware", detail: "80mm & 58mm thermal printers, USB/wireless barcode scanners, cash drawers", note: "[VERIFY: Certified receipt printer model list]" },
  { item: "Tax Integration (FBR & SRB)", detail: "FBR Tier-1 integration available for eligible retailers; SRB invoice configuration", note: "[VERIFY: SRB direct API certification status]" },
  { item: "Branches Per Plan", detail: "Starter: 1 Branch; Multi-branch on Growth & Enterprise tiers", note: "[VERIFY: Specific branch limits per tier]" },
  { item: "Excel Data Import", detail: "Supported formats: .xlsx and .csv with assisted column mapping", note: "[VERIFY: Maximum import file size limits]" },
  { item: "Support Channels & Languages", detail: "WhatsApp (+92 339 111 9259), Email, Phone; Support in Urdu and English", note: "[VERIFY: Dedicated support operating hours]" },
  { item: "Average Setup Time", detail: "Same-day online onboarding and catalogue import assistance", note: "[VERIFY: Standard onboarding turnaround time]" },
];

const businessProblems = [
  { problem: "Slow manual billing and long customer queues", solution: "Sub-second barcode scanning and touchscreen quick-checkout." },
  { problem: "Math mistakes in manual discount and tax totals", solution: "Automatic itemized calculation with statutory tax breakdown." },
  { problem: "Stockouts of fast-selling items with unknown quantities", solution: "Real-time inventory deduction with low-stock threshold warnings." },
  { problem: "Product lists scattered across separate Excel files", solution: "Centralized product catalogue with unified SKUs and barcodes." },
  { problem: "No clear daily visibility into store cash and sales", solution: "End-of-day register reconciliation and daily sales summaries." },
  { problem: "Unclear customer credit balances and lost paper khatas", solution: "Integrated Udhaar Khata ledger printed directly on customer receipts." },
  { problem: "Purchases and supplier bills difficult to reconcile", solution: "Purchase order receiving with vendor payment status tracking." },
  { problem: "Managing inventory across multiple branches is disconnected", solution: "Centralized cloud database with inter-branch stock transfers." },
  { problem: "Cashiers having unrestricted access to purchase margins", solution: "Role-based staff permissions restricting costs and past bill edits." },
  { problem: "Fear of losing product data when switching software", solution: "Guided data import assistance from compatible Excel sheets." },
];

const featuresList = [
  {
    title: "Sales and Billing",
    desc: "Create sales, scan barcodes, process cash or card payments, and generate fast thermal receipts from any counter.",
    image: "/images/product/pos-checkout-screen.webp",
    alt: "Hulm POS cashier checkout screen showing product catalogue, cart items and payment total",
    width: 1201,
    height: 692,
  },
  {
    title: "Inventory Management",
    desc: "Track product stock in real time, set reorder points, organize categories, and manage cost and selling prices.",
    image: "/images/home/dashboard/hulm-pos-inventory-management.webp",
    alt: "Hulm POS inventory management interface displaying stock levels, categories and reorder alerts",
    width: 2048,
    height: 998,
  },
  {
    title: "Purchase and Supplier Management",
    desc: "Record supplier purchases, track incoming stock deliveries, and maintain organized vendor payment histories.",
    image: "/images/product/hulm-apps-workspace.webp",
    alt: "Hulm POS purchasing and vendor management workspace",
    width: 1293,
    height: 698,
  },
  {
    title: "Customer Management & Udhaar Khata",
    desc: "Keep customer profiles, record credit sales directly at checkout, and print updated outstanding balances on receipts.",
    image: "/images/home/dashboard/hulm-pos-customer-management.webp",
    alt: "Hulm POS customer ledger and Udhaar Khata balance tracking dashboard",
    width: 2048,
    height: 986,
  },
  {
    title: "Reports and Business Insights",
    desc: "Review daily sales trends, peak trading hours, top-selling products, and gross margin analytics from anywhere.",
    image: "/images/product/restaurant-dashboard.webp",
    alt: "Hulm POS sales reporting and business performance analytics screen",
    width: 1203,
    height: 687,
  },
  {
    title: "Staff Accounts and Permissions",
    desc: "Create dedicated cashier and manager accounts, control discount permissions, and protect sensitive cost margins.",
    image: "/images/features/retail-pos-roles.webp",
    alt: "Hulm POS staff role permissions and user access security interface",
    width: 1293,
    height: 698,
  },
  {
    title: "Customer Loyalty",
    desc: "Encourage repeat store visits with customer points and targeted promotion tracking built into checkout.",
    image: "/images/home/dashboard/hulm-pos-reorder-alerts.webp",
    alt: "Hulm POS customer loyalty points and repeat purchase tracking interface",
    width: 2048,
    height: 988,
  },
  {
    title: "Purchase Orders",
    desc: "Generate structured purchase orders for distributors and automatically update stock quantities upon receipt.",
    image: "/images/product/sales-orders-screen.webp",
    alt: "Hulm POS purchase order generation and supplier procurement screen",
    width: 800,
    height: 459,
  },
];

const industrySolutions = [
  {
    title: "Retail Stores & Supermarkets",
    desc: "Fast barcode checkout, weighing scale support, inventory tracking for thousands of FMCG SKUs, and daily cash drawer reconciliation.",
    href: "/industries/retail-store/",
    anchorText: "Retail POS software in Karachi",
    image: "/images/industries/retail.webp",
    alt: "Retail store checkout counter with barcode scanner and thermal receipt printer",
    width: 1024,
    height: 682,
  },
  {
    title: "Restaurants, Cafes & Takeaways",
    desc: "Kitchen order ticketing (KOT), dine-in table layouts, takeaway billing, split checks, and SRB sales tax invoice compliance.",
    href: "/industries/restaurant-pos/",
    anchorText: "Restaurant POS software in Karachi",
    image: "/images/industries/restaurant.webp",
    alt: "Restaurant dining room and kitchen order billing counter",
    width: 1024,
    height: 682,
  },
  {
    title: "Pharmacies & Medical Stores",
    desc: "Batch number tracking, expiry date monitoring, distributor purchase ledgers, and fast medicine brand lookups.",
    href: "/industries/pharmacy-store/",
    anchorText: "Pharmacy POS software in Karachi",
    image: "/images/industries/pharmacy.webp",
    alt: "Pharmacy dispensary shelf and prescription billing counter",
    width: 1024,
    height: 682,
  },
  {
    title: "Clothing Stores & Boutiques",
    desc: "Matrix-aware variant tracking (sizes, colors, fabrics), barcode tag printing, customer discounts, and seasonal inventory control.",
    href: "/industries/clothing-store/",
    anchorText: "Clothing store POS in Karachi",
    image: "/images/industries/clothing.webp",
    alt: "Clothing store apparel display and point of sale checkout desk",
    width: 1024,
    height: 683,
  },
  {
    title: "Bakeries & Confectioneries",
    desc: "Weighed item pricing, fast counter sales during evening rushes, custom cake order bookings, and daily fresh production tracking.",
    href: "/industries/bakery-pos-system/",
    anchorText: "Bakery POS system in Karachi",
    image: "/images/industries/bakery.webp",
    alt: "Bakery display counter and customer payment terminal",
    width: 1024,
    height: 681,
  },
  {
    title: "Electronics & Mobile Shops",
    desc: "Serial number and dual-SIM IMEI tracking, warranty claim recording, repair ticketing, and technician job sheets.",
    href: "/industries/electric-store/",
    anchorText: "Electric store POS in Karachi",
    image: "/images/industries/electric.webp",
    alt: "Electronics and mobile accessories retail checkout counter",
    width: 1024,
    height: 683,
  },
];

const karachiLocalities = [
  "Gulistan-e-Johar",
  "Gulshan-e-Iqbal",
  "Saddar",
  "DHA (Defence)",
  "Clifton",
  "North Nazimabad",
  "Tariq Road",
  "Bahadurabad",
  "Korangi Industrial Area",
  "Federal B Area",
  "Nazimabad",
  "SITE Area",
  "PECHS",
  "Malir",
  "Shahrah-e-Faisal",
  "Zamzama Commercial",
];

const checklistItems = [
  { title: "Total Cost of Ownership", desc: "Look for predictable monthly pricing with zero upfront license penalties or hidden per-receipt fees." },
  { title: "Dual Tax Readiness (FBR & SRB)", desc: "Ensure the software supports federal sales tax on goods (FBR) and provincial tax on services (SRB for restaurants)." },
  { title: "Sub-Second Counter Checkout", desc: "Cashiers should be able to scan barcodes, apply discounts, and print thermal receipts without system lag." },
  { title: "Unified Inventory & Udhaar Khata", desc: "Stock quantities should deduct automatically during cash and customer credit sales from a single screen." },
  { title: "Assisted Data Migration", desc: "Choose a provider that helps import your existing Excel product lists so you avoid tedious manual typing." },
  { title: "Multi-Branch Cloud Architecture", desc: "Check if the system lets you view live sales and transfer stock between branches remotely from any browser." },
  { title: "Accessible Urdu & English Support", desc: "Confirm that onboarding and customer care are available via WhatsApp and phone during busy retail trading hours." },
];

export default function KarachiPosPage() {
  return (
    <div className="bg-white text-zinc-900">
      <JsonLd data={structuredData} />
      <KarachiPageTracker />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ name: "POS software in Karachi" }]}
        className="border-b border-[#E4E2DA]/70 bg-white"
      />

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-[#F7FAF9] via-white to-white pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-4 sm:mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
              <span>Cloud POS System in Karachi &bull; Retail, Food &amp; Pharmacy</span>
            </div>

            {/* Single H1 */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-bold leading-[1.2] tracking-[-0.03em] text-[#0F2A26] text-balance">
              POS Software in Karachi for Retail, Restaurants &amp; Pharmacies
            </h1>

            {/* Answer-First Paragraph: Strictly 58 words, natural keywords, exact known facts */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-700 font-normal max-w-3xl mx-auto">
              Hulm POS provides cloud <strong>POS software in Karachi</strong> from PKR 2,500/month with a 14-day free trial, no card required. Based at C-27, Block 14, Gulistan-e-Johar, Karachi, we deliver the <strong>POS software Karachi</strong> stores trust for billing and inventory. Upgrade your <strong>POS system in Karachi</strong> with WhatsApp (+92 339 111 9259) or email (info@hulmsolutions.com) for a modern <strong>point of sale in Karachi</strong>.
            </p>

            {/* Pricing Callout Line */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-2xs">
              <span className="font-bold text-[#167c70]">Starting at PKR 2,500/month.</span>
              <span>14-day free trial &bull; No credit card required.</span>
            </div>

            {/* Two CTAs */}
            <div className="mt-8 flex flex-col justify-center items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-8 h-12 text-sm font-semibold transition-colors"
              >
                <a
                  href={contactInfo.signupUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_hero_primary"
                >
                  Start Your 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 px-7 h-12 text-sm font-semibold"
              >
                <a
                  href={whatsappUrl("Hi Hulm, I want to inquire about POS Software in Karachi.")}
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_hero_whatsapp"
                >
                  <WhatsAppIcon size={18} className="mr-2 text-[#25D366]" /> Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Strip: Real verified facts & clearly marked [VERIFY] placeholders */}
            <div className="mt-10 pt-6 border-t border-zinc-200/80">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-zinc-600 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" /> 14-Day Free Trial (No Card)
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" /> Web Cloud POS (Any PC/Mac)
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#167c70]" /> Assisted Excel Data Import
                </li>
                {/* [VERIFY: Merchant Count & Review Rating Slots - Rendered as verified placeholders] */}
                <li className="flex items-center gap-1.5 text-zinc-500">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> WhatsApp Support in Urdu
                </li>
                <li className="flex items-center gap-1.5 text-zinc-500">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Multi-Branch Ready
                </li>
              </ul>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-zinc-300/80 bg-zinc-900/5 p-2 sm:p-3 shadow-xl ring-1 ring-zinc-900/10">
              <div className="relative aspect-[16/9.2] w-full overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/images/product/pos-checkout-screen.webp"
                  alt="Hulm POS software checkout screen in Karachi showing product catalogue, cart items and payment total"
                  width={1201}
                  height={692}
                  priority
                  fetchPriority="high"
                  className="h-full w-full object-cover object-top"
                  sizes="(min-width: 1280px) 1024px, calc(100vw - 32px)"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between px-3 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-700">
                  Hulm POS Checkout Interface &bull; Counter &amp; Touch Display
                </span>
                <span className="hidden sm:inline">Operating in Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: HULM POS AT A GLANCE TABLE & SELECTION CHECKLIST */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              System Specifications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Hulm POS at a glance
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-600">
              Key operational parameters, hardware compatibility, and pricing facts for businesses in Karachi.
            </p>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="sm:hidden flex items-center justify-between mb-2 px-1 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1 font-semibold text-[#167c70]">
              <span>👈 Swipe table sideways 👉</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400">9 specifications</span>
          </div>

          {/* At-a-glance HTML table with horizontal scroll wrapper */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-xs">
            <div className="overflow-x-auto touch-pan-x">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0F2A26] text-white text-[11px] sm:text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-bold">Parameter</th>
                    <th scope="col" className="px-5 py-3.5 font-bold">Specification</th>
                    <th scope="col" className="px-5 py-3.5 font-bold">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  {atGlanceSpecs.map((row, idx) => (
                    <tr key={row.item} className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF9F5]"}>
                      <td className="px-5 py-3.5 font-semibold text-[#0F2A26] whitespace-nowrap">{row.item}</td>
                      <td className="px-5 py-3.5">{row.detail}</td>
                      <td className="px-5 py-3.5 text-xs text-zinc-500 font-mono">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI Citation Box: How to Choose POS Software in Karachi Checklist */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-emerald-200/90 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-[#167c70]" />
                <h3 className="text-base sm:text-lg font-bold text-[#0F2A26]">
                  How to Choose POS Software in Karachi (7 Selection Criteria)
                </h3>
              </div>
              <span className="sm:hidden text-[11px] font-semibold text-[#167c70]">Swipe 👉</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 mb-6">
              When evaluating point of sale software for a Karachi retail store, restaurant, or pharmacy, consider these operational standards:
            </p>
            <div className="flex sm:grid gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 touch-pan-x">
              {checklistItems.map((chk, i) => (
                <div key={chk.title} className="w-[82vw] max-w-[320px] shrink-0 sm:shrink sm:w-auto snap-center flex items-start gap-3 rounded-xl border border-zinc-100 bg-[#F7FAF9] p-3.5 shadow-2xs sm:shadow-none">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F2A26]">{chk.title}</h4>
                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{chk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: MANUAL VS HULM POS COMPARISON */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Operational Modernization
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              What does a POS system in Karachi include?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Many stores in Karachi still manage inventory and billing across paper notebooks, mental math, and disjointed Excel sheets. Here is how Hulm POS replaces manual friction with structured automation:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
            {/* Problem - Solution Table in horizontal scroll wrapper */}
            <div className="lg:col-span-6">
              {/* Mobile Swipe Cue */}
              <div className="sm:hidden flex items-center justify-between mb-2 px-1 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1 font-semibold text-[#167c70]">
                  <span>👈 Swipe table sideways 👉</span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400">10 comparisons</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] shadow-xs">
                <div className="overflow-x-auto touch-pan-x">
                  <div className="min-w-[500px]">
                    <div className="grid grid-cols-2 bg-[#0F2A26] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white">
                      <span>Manual Paper / Spreadsheet Bottleneck</span>
                      <span>Hulm POS Cloud Solution</span>
                    </div>
                    <div className="divide-y divide-zinc-200 bg-white">
                      {businessProblems.map((row, idx) => (
                        <div
                          key={row.problem}
                          className={`grid grid-cols-2 px-5 py-3 text-xs sm:text-sm ${
                            idx % 2 === 0 ? "bg-white" : "bg-[#FAF9F5]"
                          }`}
                        >
                          <div className="pr-4 font-medium text-zinc-800 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                            <span>{row.problem}</span>
                          </div>
                          <div className="font-semibold text-[#167c70] flex items-center gap-2">
                            <Check className="h-4 w-4 shrink-0 text-[#167c70]" />
                            <span>{row.solution}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm h-11 px-6 shadow-xs"
                >
                  <a href="#demo-form">
                    Request a Karachi Store Walkthrough <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* System Comparison Graphic */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <BranchComparisonCard />
              <div className="mt-3.5 text-center">
                <p className="text-xs font-bold text-[#0F2A26]">
                  From Disconnected Ledgers to One POS System in Karachi
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Centralize cashier checkouts, barcode scanning, stock balances, and Udhaar accounts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: FEATURES WITH EXISTING SCREENSHOTS */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Core Modules
            </span>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Complete POS Features for Karachi Merchants
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Manage counter sales, stock valuation, supplier purchasing, and customer credit from one connected cloud dashboard.
            </p>
          </div>

          {/* Features Carousel on mobile (< sm), grid on tablet/desktop (sm:, lg:) */}
          <KarachiFeaturesCarousel items={featuresList} />

          {/* Interactive Workflow & Reporting Previews */}
          <div className="mt-16">
            <ProductWorkflowInteractive />
          </div>
          <div className="mt-12">
            <DashboardGraphsInteractive />
          </div>
        </Container>
      </Section>

      {/* SECTION 5: INDUSTRIES GRID */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Sector Solutions
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              POS for retail, restaurants, pharmacies and clothing stores in Karachi
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Each retail sector in Karachi has distinct counter workflows. Hulm POS configures barcode billing, table layouts, or batch numbers for your specific trade.
            </p>
          </div>

          {/* Industries Carousel on mobile (< sm), grid on tablet/desktop (sm:, lg:) */}
          <KarachiIndustriesCarousel items={industrySolutions} />
        </Container>
      </Section>

      {/* SECTION 6: FBR AND SRB SECTION */}
      <Section data-reveal className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-900 mb-4">
              <ShieldCheck className="h-4 w-4 text-[#167c70]" />
              <span>Tax Compliance in Sindh</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2A26]">
              FBR and SRB integrated POS for Karachi businesses
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700">
              <p>
                Businesses operating in Karachi fall under two distinct tax administrations: the <strong>Federal Board of Revenue (FBR)</strong> for sales tax on physical goods and Tier-1 retail mandates, and the <strong>Sindh Revenue Board (SRB)</strong> for sales tax on services (affecting restaurants, cafes, caterers, and salons).
              </p>
              <p>
                Hulm POS provides invoice configuration capabilities for tax registration numbers (NTN, STRN, and SRB SNTN) and itemized tax breakdowns. For qualifying Tier-1 retailers, Hulm POS provides integration tools for generating FBR-compliant invoice numbers and verification QR codes.
              </p>
            </div>

            {/* License & Certification Placeholder Slot */}
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-[#F7FAF9] p-5 text-xs text-zinc-600">
              <div className="flex items-center gap-2 font-bold text-[#0F2A26] mb-1">
                <ShieldAlert className="h-4 w-4 text-[#167c70]" />
                <span>Regulatory Notice &amp; Certification Status:</span>
              </div>
              <p>
                Tax parameters depend on your enterprise category and current FBR/SRB notifications. During onboarding, our team reviews your tax registration details to format receipts accordingly.
              </p>
              <div className="mt-2 text-[11px] font-mono text-zinc-500">
                [VERIFY: FBR Licensed Vendor Registration ID &amp; SRB Direct Integration Module status]
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm h-11 px-6"
              >
                <Link href="/fbr-integrated-pos-pakistan/">
                  Read FBR Integrated POS Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 text-sm font-semibold h-11 px-6"
              >
                <a
                  href={whatsappUrl("Hi Hulm, I want to confirm FBR/SRB tax invoice setup for my business in Karachi.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={16} className="mr-2 text-[#25D366]" /> Discuss Tax Setup on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 7: PRICING TABLE */}
      <section id="pricing-section" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Transparent Monthly Subscription
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              How much does POS software cost in Karachi?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Start with an affordable monthly subscription without heavy upfront software licensing penalties.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#E4E2DA] bg-white shadow-lg ring-1 ring-zinc-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Starter Plan Column */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3.5 py-1 text-xs font-bold text-[#167c70]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Starter Plan &bull; 14-Day Free Trial</span>
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2A26]">
                    Core POS &amp; Inventory for Single-Branch Stores
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                    Everything your counter needs to scan items, process cash or card bills, and track customer credit in one secure cloud system.
                  </p>

                  <div className="mt-8 border-t border-zinc-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                      What the Starter Plan Includes:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Sales &amp; Billing Module</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Barcode scanning &amp; receipt printing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Inventory Management</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Live stock deduction &amp; low-stock alerts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Udhaar Khata Ledger</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Customer credit balance on receipts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Daily Sales Reporting</span>
                          <p className="text-xs text-zinc-500 mt-0.5">End-of-day register closing totals</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Assisted Excel Migration</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Bulk upload of product spreadsheet</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Karachi Support Access</span>
                          <p className="text-xs text-zinc-500 mt-0.5">WhatsApp &amp; phone guidance in Urdu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 text-xs text-zinc-500 space-y-1">
                  <p><strong>Price Exclusions:</strong> Applicable provincial sales taxes / SRB; physical hardware (PCs, thermal printers, barcode scanners).</p>
                  <p><strong>Hardware Notice:</strong> Runs on your existing computers or tablets with standard USB/LAN receipt printers.</p>
                </div>
              </div>

              {/* Price Callout Column */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#F7FAF9] to-[#FAF9F5] border-t lg:border-t-0 lg:border-l border-[#E4E2DA] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                    Starter Subscription
                  </span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0F2A26]">PKR 2,500</span>
                    <span className="text-base font-semibold text-zinc-500">/ month</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-600">
                    Straightforward monthly subscription with zero long-term contract lock-in.
                  </p>

                  <div className="mt-6 rounded-2xl border border-emerald-200/80 bg-white p-4 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> 14-day free trial included
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> No credit card required to start
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> Cancel or change plan anytime
                    </div>
                  </div>

                  {/* Multi-tier placeholders */}
                  <div className="mt-6 border-t border-zinc-200 pt-4 text-xs text-zinc-500 space-y-2">
                    <p className="font-semibold text-zinc-700">Need Multiple Branches or Advanced Tiers?</p>
                    <p className="font-mono text-[11px] bg-zinc-100 p-2 rounded border border-zinc-200">
                      [VERIFY: Growth, Business &amp; Enterprise multi-branch pricing tiers and user limits]
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold h-12 shadow-sm text-sm"
                  >
                    <a
                      href={contactInfo.signupUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-track-location="karachi_pricing_trial"
                    >
                      Start Your 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl border-zinc-300 bg-white text-[#0F2A26] hover:bg-zinc-50 font-semibold h-12 text-sm"
                  >
                    <a
                      href={whatsappUrl("Hi Hulm, I want to discuss POS pricing and multi-branch tiers for Karachi.")}
                      target="_blank"
                      rel="noreferrer"
                      data-track-location="karachi_pricing_whatsapp"
                    >
                      <WhatsAppIcon size={16} className="mr-2 text-[#25D366]" /> Inquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8: MIGRATION STEPS */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Zero-Downtime Migration
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                How to switch POS software without losing data
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                Switching software should never mean retyping thousands of products, prices, and barcodes by hand. Hulm POS provides assisted data migration for compatible Excel spreadsheets and CSV exports.
              </p>

              {/* 5 Migration Steps */}
              <ol className="space-y-3 pt-2 text-sm text-zinc-700">
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Export your current data:</strong> Export items, barcodes, prices, and customer balances from your existing POS or spreadsheet into clean CSV or Excel files.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    2
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Column mapping review:</strong> Share your file with our team. We verify supported columns (Item Name, Barcode, Category, Cost, Sale Price, Stock).
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    3
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Batch import testing:</strong> We upload a test batch to verify character encoding, preserve leading zeros on barcodes, and ensure accurate tax calculations.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    4
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Counter reconciliation:</strong> Test scan high-velocity products with your thermal printer and barcode scanner to confirm counter readiness.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-2xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    5
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Go live smoothly:</strong> Launch checkout during an off-peak shift with our Karachi support team standing by on WhatsApp.
                  </div>
                </li>
              </ol>

              {/* Template Download Slot Placeholder */}
              <div className="rounded-xl border border-zinc-200 bg-white p-4 text-xs text-zinc-600">
                <span className="font-semibold text-[#0F2A26]">Excel Import Template:</span> Compatible formats include standard .xlsx and .csv tables.
                <div className="mt-1 font-mono text-[11px] text-zinc-500">
                  [VERIFY: Download Hulm POS Excel Product Template .xlsx - verified direct file download link]
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-zinc-950 font-bold h-12 px-6 shadow-sm"
                >
                  <a
                    href={whatsappUrl("Hi Hulm, I want to switch my POS software in Karachi and need help importing Excel products.")}
                    target="_blank"
                    rel="noreferrer"
                    data-track-location="karachi_migration_whatsapp"
                  >
                    <WhatsAppIcon size={18} className="mr-2" /> Discuss Data Migration on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 h-12 px-5 text-sm font-semibold"
                >
                  <Link href="/blog/switch-pos-software-without-losing-data/">
                    Read Full Migration Guide
                  </Link>
                </Button>
              </div>
            </div>

            {/* Infographic Roadmap */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <MigrationRoadmapCard />
              <div className="mt-3.5 text-center">
                <span className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold text-zinc-600">
                  <span>Existing Spreadsheets</span>
                  <span className="text-[#167c70] font-bold">&rarr;</span>
                  <span>Column Mapping Assistance</span>
                  <span className="text-[#167c70] font-bold">&rarr;</span>
                  <span>Live POS Product Catalogue</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 9: SOCIAL PROOF & REAL KARACHI CASE STUDY */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Verified Implementations
            </span>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Proven Results for Karachi Businesses
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              See how real enterprises in Karachi transitioned from manual registers to organized cloud point of sale operations.
            </p>
          </div>

          {/* Real Karachi Case Study Card */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-5 relative min-h-[240px] bg-zinc-200">
                <Image
                  src="/images/case-studies/farhan-caterers.webp"
                  alt="Farhan Caterers event catering setup in Karachi"
                  width={1024}
                  height={682}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
              </div>
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mb-2">
                    <span className="text-[#167c70] font-bold">Event Catering &bull; Karachi</span>
                    <span>Verified Case Study</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2A26]">
                    Farhan Caterers: Streamlining Event Bookings &amp; Tax Invoicing
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Farhan Ahmed replaced a diary-and-spreadsheet booking process with Hulm POS to handle advance wedding reservations, ingredient costing, and FBR-compliant billing across simultaneous events in Karachi.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500">Client: Farhan Ahmed, Owner</span>
                  <Link
                    href="/pos-case-studies/farhan-caterers-pos-karachi/"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#167c70] hover:underline"
                  >
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Placeholder Slot: Only renders verified reviews */}
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-dashed border-zinc-300 p-6 text-center text-xs text-zinc-500">
            <p className="font-semibold text-zinc-700">Customer Testimonial Verification Policy:</p>
            <p className="mt-1">
              Per strict data accuracy guidelines, individual merchant quotes and reviews are rendered only upon written client consent and independent verification.
            </p>
            <p className="mt-1 font-mono text-[11px] text-zinc-400">
              [VERIFY: Real Karachi Merchant Reviews - Awaiting signed attribution before DOM inclusion]
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 10: MULTI-BRANCH POS FOR KARACHI */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Centralized Scaling
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                Multi-branch POS for Karachi
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                Running outlets across Saddar, Clifton, Gulshan-e-Iqbal, and Gulistan-e-Johar should not require calling cashiers or cross-referencing messy spreadsheets at midnight.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                Hulm POS synchronizes transactions and stock levels across every branch in real time. Business owners can view consolidated sales reports or drill down into individual counter performance from any browser.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-zinc-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Central product catalogue synced across all Karachi outlets</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Inter-branch stock transfers with warehouse dispatch verification</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Consolidated revenue reports and branch-by-branch margin comparisons</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Branch-specific staff logins and localized cashier drawer audits</span>
                </li>
              </ul>

              <div className="pt-2">
                <Button
                  asChild
                  className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold h-11 px-6 text-sm"
                >
                  <a href="#demo-form">Discuss Multi-Branch Architecture</a>
                </Button>
              </div>

              <p className="text-xs text-zinc-500 border-l-2 border-zinc-300 pl-3">
                * Note: Multi-branch capacity, branch transfer workflows and user permissions vary by subscription plan. Confirm your specific branch requirements with our product team.
              </p>
            </div>

            {/* Multi-Branch Diagram without Lahore in filename or alt */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src="/images/uploads/2026/11/retail-stock-transfer-diagram-karachi.webp"
                    alt="Multi-branch POS architecture showing central cloud system connected to multiple branch retail locations in Karachi"
                    width={2756}
                    height={1689}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 560px, calc(100vw - 32px)"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-[#0F2A26]">
                    Central Cloud Account &rarr; Branch 1 (Saddar) &bull; Branch 2 (Clifton) &bull; Branch 3 (Gulshan)
                  </span>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Live inter-branch inventory transfers, shared customer credit ledgers, and consolidated daily analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 11: LOCAL SETUP AND SUPPORT IN KARACHI */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <MapPin className="h-3.5 w-3.5 text-[#167c70]" />
                <span>Karachi Office &amp; Local Team</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl leading-[1.2]">
                Local setup and support in Karachi
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
                Choosing a dependable <strong>POS in Karachi</strong> ensures your counter operations receive responsive onboarding and prompt WhatsApp troubleshooting when questions arise. Our team is located right here in Karachi, providing dedicated setup assistance and cashier training.
              </p>

              {/* Truthful onboarding statement */}
              <div className="rounded-2xl border border-emerald-200/90 bg-[#F7FAF9] p-5 text-sm text-zinc-700 leading-relaxed">
                <p>
                  <strong>How Onboarding Works:</strong> To provide rapid turnaround times across all districts, onboarding, database imports, and cashier training are delivered remotely via WhatsApp, phone, and screen-sharing sessions by our Karachi product team.
                </p>
                <p className="mt-2 text-xs text-zinc-500">
                  [VERIFY: In-person on-site deployment visits - Available exclusively for custom enterprise multi-branch retail contracts]
                </p>
              </div>

              {/* Supported Commercial Hubs Box */}
              <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2A26]">
                    Commercial &amp; Retail Hubs Served Across Karachi
                  </h3>
                  <span className="text-[11px] font-semibold text-[#167c70]">All Commercial Zones</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {karachiLocalities.map((loc) => (
                    <div
                      key={loc}
                      className="flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-2xs hover:border-[#167c70]/40 transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#167c70] shrink-0" />
                      <span className="truncate">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Office Card with Google Maps Embed */}
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-3xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-md ring-1 ring-zinc-900/5">
                <div className="bg-[#0F2A26] p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7ae582]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Hulm Solutions</h3>
                      <p className="text-xs text-zinc-300">C-27, Block 14, Gulistan-e-Johar, Karachi</p>
                    </div>
                  </div>
                </div>

                {/* Lazy-Loaded Google Map Embed */}
                <div className="relative aspect-[16/9] w-full bg-zinc-200 border-b border-[#E4E2DA]">
                  <iframe
                    title="Hulm Solutions Karachi Office Map"
                    src="https://maps.google.com/maps?q=Block+14+Gulistan-e-Johar+Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0 w-full h-full"
                    allowFullScreen={false}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-6 space-y-3.5 text-xs sm:text-sm text-zinc-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong>Address:</strong> C-27, Block 14, Gulistan-e-Johar, Karachi, 75290, Pakistan
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong>Support Hours:</strong> Monday – Saturday [VERIFY: Specific operating hours e.g. 9:00 AM – 6:00 PM PKT]
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong>Phone / WhatsApp:</strong> +92 339 111 9259
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong>Email:</strong> info@hulmsolutions.com
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      className="w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-zinc-950 font-bold h-12 shadow-sm text-sm"
                    >
                      <a
                        href={whatsappUrl("Hi Hulm, I want to connect with your Karachi POS team.")}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <WhatsAppIcon size={18} className="mr-2" /> Connect on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12: SHORT LEAD FORM */}
      <section id="demo-form" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                <span>30-Minute Tailored Session</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl leading-[1.2]">
                Book a Free Hulm POS Demo in Karachi
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
                Tell us about your business setup. Our Karachi product specialists will walk you through checkout speed, Excel data imports, stock tracking, and reports tailored to your store.
              </p>

              <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2A26]">
                  What you will see in your demo:
                </h3>

                <ul className="space-y-3.5 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Live Checkout &amp; Billing:</strong> Barcode scanning, discount controls, itemized tax calculation, and thermal receipt printing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Excel Catalogue Import:</strong> Review your spreadsheet columns so you can migrate products without manual typing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Inventory &amp; Reorders:</strong> Real-time stock counts, low-stock alerts, and purchase order tracking.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Udhaar Khata &amp; Branches:</strong> Customer credit ledgers and multi-location management.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 text-xs text-emerald-950">
                <span className="font-medium">Need immediate assistance?</span>
                <a
                  href={whatsappUrl("Hi Hulm, I want to book a POS demo for my Karachi business.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#167c70] hover:text-[#0F2A26] shrink-0"
                >
                  <WhatsAppIcon size={15} /> Chat on WhatsApp Directly
                </a>
              </div>
            </div>

            {/* Rebuilt 3-field demo form */}
            <div className="lg:col-span-6">
              <KarachiDemoForm compactHeader={true} />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 13: FREQUENTLY ASKED QUESTIONS */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Common Questions
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                Direct answers to common questions about pricing, hardware, FBR rules, SRB compliance, and data imports for Karachi retail and food businesses.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 text-sm font-semibold"
                >
                  <a
                    href={whatsappUrl("I have a question about Hulm POS in Karachi.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon size={16} className="mr-2 text-[#25D366]" /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Server-rendered FAQ details items (all answers present in HTML) */}
            <div className="lg:col-span-8">
              <FaqDetails items={karachiFaqs} openFirst={true} />
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED GUIDES BLOCK */}
      <Section data-reveal className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0F2A26]">
                Related POS Guides &amp; Resources for Pakistani Merchants
              </h3>
              <span className="sm:hidden text-[11px] font-semibold text-[#167c70]">Swipe 👉</span>
            </div>
            <div className="flex sm:grid gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 touch-pan-x">
              <Link
                href="/pricing/"
                className="w-[84vw] max-w-[320px] shrink-0 sm:shrink sm:w-auto snap-center rounded-xl border border-[#E4E2DA] bg-white p-4 hover:border-[#167c70] transition-colors flex flex-col justify-between shadow-2xs sm:shadow-none"
              >
                <div>
                  <h4 className="font-bold text-[#0F2A26]">POS Software Price in Pakistan (2026 Guide)</h4>
                  <p className="mt-1 text-xs text-zinc-500">Hardware, monthly subscriptions, and FBR setup costs.</p>
                </div>
                <span className="mt-3 text-xs font-semibold text-[#167c70] flex items-center gap-1">
                  View Pricing Guide <ArrowRight className="h-3 w-3" />
                </span>
              </Link>

              <Link
                href="/fbr-integrated-pos-pakistan/"
                className="w-[84vw] max-w-[320px] shrink-0 sm:shrink sm:w-auto snap-center rounded-xl border border-[#E4E2DA] bg-white p-4 hover:border-[#167c70] transition-colors flex flex-col justify-between shadow-2xs sm:shadow-none"
              >
                <div>
                  <h4 className="font-bold text-[#0F2A26]">FBR vs SRB for Karachi Businesses</h4>
                  <p className="mt-1 text-xs text-zinc-500">Federal goods vs Sindh service tax invoicing requirements.</p>
                </div>
                <span className="mt-3 text-xs font-semibold text-[#167c70] flex items-center gap-1">
                  Read Tax Guide <ArrowRight className="h-3 w-3" />
                </span>
              </Link>

              <Link
                href="/blog/switch-pos-software-without-losing-data/"
                className="w-[84vw] max-w-[320px] shrink-0 sm:shrink sm:w-auto snap-center rounded-xl border border-[#E4E2DA] bg-white p-4 hover:border-[#167c70] transition-colors flex flex-col justify-between shadow-2xs sm:shadow-none"
              >
                <div>
                  <h4 className="font-bold text-[#0F2A26]">How to Switch POS Software Without Losing Data</h4>
                  <p className="mt-1 text-xs text-zinc-500">5-step migration framework for Excel catalogues and credit ledgers.</p>
                </div>
                <span className="mt-3 text-xs font-semibold text-[#167c70] flex items-center gap-1">
                  Read Migration Steps <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA BAND */}
      <section className="relative overflow-hidden bg-[#0F2A26] py-16 sm:py-20 lg:py-24 text-white text-center pb-24 md:pb-20">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0 opacity-10" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-[#167c70]/20 px-3.5 py-1 text-xs font-semibold text-[#7ae582] tracking-wide mb-4">
              Fast Checkout &bull; Real-Time Inventory &bull; Multi-Branch
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Upgrade Your Point of Sale in Karachi?
            </h3>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Stop struggling with slow manual registers and disconnected spreadsheets. Modernize your store with cloud POS software designed for retail counters, restaurants, and pharmacies.
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold text-[#7ae582]">
              Starter plan starts at PKR 2,500/month with a full 14-day free trial.
            </p>

            <div className="mt-8 flex flex-col justify-center items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-[#167c70] hover:bg-[#1ebe5d] text-white shadow-md px-8 h-12 text-sm font-bold"
              >
                <a
                  href={contactInfo.signupUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_final_trial"
                >
                  Start Your 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-zinc-600 bg-white/5 hover:bg-white/10 text-white px-7 h-12 text-sm font-semibold"
              >
                <a
                  href={whatsappUrl("Hi Hulm, I want to book a POS demo for my business in Karachi.")}
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_final_whatsapp"
                >
                  <WhatsAppIcon size={16} className="mr-2 text-[#25D366]" /> Chat with Karachi Team on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              No credit card required for 14-day trial &bull; Assisted Excel product data import &bull; WhatsApp support in Urdu
            </p>

            {/* Visible Byline and Editorial Policy link */}
            <div className="mt-10 pt-6 border-t border-zinc-800 text-xs text-zinc-400">
              <span>Reviewed by Hulm Solutions Editorial Team </span>
              <span className="font-mono text-zinc-500">[VERIFY: Lead Technical Editor, Karachi Operations]</span>
              <span className="mx-2">&bull;</span>
              <span>Last updated: {LAST_UPDATED_DATE}</span>
              <span className="mx-2">&bull;</span>
              <Link href="/editorial-policy/" className="underline hover:text-white">
                Editorial &amp; Verification Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
