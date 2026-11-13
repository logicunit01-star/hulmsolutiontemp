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
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { pageJsonLd, SITE_FEEDS, SITE_URL } from "@/lib/seo/page-seo";

export const metadata: Metadata = {
  title: { absolute: "POS Software in Karachi | Cloud POS & Billing – Hulm" },
  description:
    "POS software in Karachi for retail, restaurants and pharmacies. Manage billing, inventory and branches with Hulm POS. Start your 14-day free trial.",
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
    title: "POS Software in Karachi | Cloud POS & Billing – Hulm",
    description:
      "POS software in Karachi for retail, restaurants and pharmacies. Manage billing, inventory and branches with Hulm POS. Start your 14-day free trial.",
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
    title: "POS Software in Karachi | Cloud POS & Billing – Hulm",
    description:
      "POS software in Karachi for retail, restaurants and pharmacies. Manage billing, inventory and branches with Hulm POS. Start your 14-day free trial.",
    images: ["/images/product/pos-checkout-screen.webp"],
  },
};

const karachiFaqs: readonly FaqDetailsItem[] = [
  {
    q: "What is the best POS software in Karachi?",
    a: "The right POS software depends on your business type, required features, budget, reporting needs and support expectations. Hulm POS is a cloud-based option for businesses looking to manage billing, sales, inventory, purchases and business records through one system.",
  },
  {
    q: "How much does POS software cost in Karachi?",
    a: "Hulm POS has a starting subscription price of PKR 2,500 per month. Contact the team to confirm current plan inclusions, branch limits and any additional charges.",
    link: { label: "POS pricing details", href: "/pricing/" },
  },
  {
    q: "Is Hulm POS suitable for small retail stores?",
    a: "Hulm POS supports retail workflows such as product management, checkout, sales records and inventory management. Contact the team to confirm the setup and plan that suits your store.",
    link: { label: "Retail POS software", href: "/industries/retail-store/" },
  },
  {
    q: "Can I switch from my existing POS software to Hulm POS?",
    a: "Hulm provides assistance with importing compatible business data from Excel sheets. The supported data fields and migration requirements should be reviewed before switching.",
    link: { label: "Switch POS software guide", href: "/blog/switch-pos-software-without-losing-data/" },
  },
  {
    q: "Can I import products from Excel into Hulm POS?",
    a: "Compatible product data can be prepared in an Excel sheet and reviewed for import. Contact the Hulm team to confirm the supported file format and required columns.",
  },
  {
    q: "Is Hulm POS easy for new employees to use?",
    a: "Hulm POS is designed to make everyday operations easier to understand, including product search, checkout and sales processing. Staff should receive appropriate onboarding and training for their business setup.",
  },
  {
    q: "Can I manage multiple branches with Hulm POS?",
    a: "Hulm POS supports centralized multi-branch management. Contact the team to confirm the number of branches and configuration available under your subscription.",
    link: { label: "Multi-branch retail management", href: "/blog/manage-multiple-retail-branches/" },
  },
  {
    q: "Can I see my business sales remotely?",
    a: "Hulm POS is cloud-based and provides access to supported business information through the configured account and permissions. Ask the team about your device and access requirements.",
  },
  {
    q: "Does Hulm POS support FBR integration?",
    a: "Hulm POS offers FBR-related integration for eligible businesses, subject to applicable requirements and supported configuration. Contact the team to discuss business eligibility and setup.",
    link: { label: "FBR integrated POS in Pakistan", href: "/fbr-integrated-pos-pakistan/" },
  },
  {
    q: "Does Hulm POS provide a free trial?",
    a: "Yes. Hulm POS offers a 14-day free trial so you can explore the system before choosing a subscription.",
  },
  {
    q: "Does Hulm POS work for restaurants and cafes?",
    a: "Hulm POS supports restaurant-related workflows such as orders, tables and payment handling. Contact the team to confirm the configuration for your restaurant or cafe.",
    link: { label: "Restaurant POS software", href: "/industries/restaurant-pos/" },
  },
  {
    q: "How can I get a demo of Hulm POS in Karachi?",
    a: "Contact Hulm Solutions through WhatsApp at +92 339 111 9259 or use the website to request a demo and discuss your business requirements.",
    link: { label: "Contact Hulm Solutions", href: "/contact/" },
  },
];

const structuredData = pageJsonLd({
  route: "/pos-software-karachi/",
  name: "POS Software in Karachi | Cloud POS & Billing – Hulm",
  description:
    "POS software in Karachi for retail, restaurants and pharmacies. Manage billing, inventory and branches with Hulm POS. Start your 14-day free trial.",
  crumbs: [{ name: "POS software in Karachi", path: "/pos-software-karachi/" }],
  node: {
    "@type": "SoftwareApplication",
    name: "Hulm POS for Karachi",
    description:
      "Cloud POS and billing software in Karachi for retail, restaurants, and pharmacies with inventory, multi-branch, and FBR-compliant billing.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Point of sale software",
    operatingSystem: "Web, Windows, macOS, Android, iOS",
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing/`,
      priceCurrency: "PKR",
      price: "2500",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    areaServed: {
      "@type": "City",
      name: "Karachi",
      containedInPlace: { "@type": "Country", name: "Pakistan" },
    },
  },
  faq: karachiFaqs,
  extra: [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#karachi-office`,
      name: "Hulm Solutions - Karachi",
      image: `${SITE_URL}/images/product/pos-checkout-screen.webp`,
      url: `${SITE_URL}/pos-software-karachi/`,
      telephone: contactInfo.phoneE164,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address.streetAddress,
        addressLocality: contactInfo.address.addressLocality,
        addressRegion: contactInfo.address.addressRegion,
        addressCountry: contactInfo.address.addressCountry,
      },
      priceRange: "Starting at PKR 2,500/month",
      areaServed: [
        "Gulistan-e-Johar",
        "Gulshan-e-Iqbal",
        "Saddar",
        "DHA",
        "Clifton",
        "North Nazimabad",
        "Tariq Road",
        "Korangi",
        "Karachi",
      ],
    },
  ],
});

const businessProblems = [
  { problem: "Slow manual billing", solution: "Use a product-based checkout workflow." },
  { problem: "Mistakes in manual calculations", solution: "Process transactions through organized POS billing." },
  { problem: "Unclear stock quantities", solution: "Maintain product and inventory records." },
  { problem: "Separate Excel files", solution: "Centralize compatible business data in Hulm POS." },
  { problem: "No clear daily sales picture", solution: "Review sales and business reports." },
  { problem: "Customer credit records are difficult to track", solution: "Maintain customer ledger records." },
  { problem: "Supplier purchases are difficult to organize", solution: "Manage purchases and supplier records." },
  { problem: "Managing multiple branches is complicated", solution: "Manage supported branches from a centralized system." },
  { problem: "Staff changes are difficult to monitor", solution: "Use staff accounts and permissions where configured." },
  { problem: "Switching software feels difficult", solution: "Get assistance with importing compatible Excel data." },
];

const featuresList = [
  {
    title: "Sales and Billing",
    desc: "Create sales, add products to checkout, process configured payment methods and maintain transaction records.",
    image: "/images/product/pos-checkout-screen.webp",
    alt: "Hulm POS sales and billing checkout interface",
    width: 1201,
    height: 692,
  },
  {
    title: "Inventory Management",
    desc: "Organize products, categories, prices and stock information. Keep inventory records connected with sales and purchase workflows.",
    image: "/images/home/dashboard/hulm-pos-inventory-management.webp",
    alt: "Hulm POS inventory management and stock levels dashboard",
    width: 2048,
    height: 998,
  },
  {
    title: "Purchase and Supplier Management",
    desc: "Record business purchases, manage supplier information and organize purchase-related activities.",
    image: "/images/product/hulm-apps-workspace.webp",
    alt: "Hulm POS purchase orders and vendor management app workspace",
    width: 1293,
    height: 698,
  },
  {
    title: "Customer Management and Udhaar Khata",
    desc: "Maintain customer records and track credit-related entries through customer ledger functionality.",
    image: "/images/home/dashboard/hulm-pos-customer-management.webp",
    alt: "Hulm POS customer ledger and Udhaar Khata balance tracking",
    width: 2048,
    height: 986,
  },
  {
    title: "Reports and Business Insights",
    desc: "Review sales activity, business reports and other available performance information.",
    image: "/images/product/restaurant-dashboard.webp",
    alt: "Hulm POS business analytics and revenue reporting dashboard",
    width: 1203,
    height: 687,
  },
  {
    title: "Staff Accounts and Permissions",
    desc: "Create staff accounts and configure access permissions according to your business requirements.",
    image: "/images/features/retail-pos-roles.webp",
    alt: "Hulm POS staff accounts, roles and permission controls",
    width: 1293,
    height: 698,
  },
  {
    title: "Customer Loyalty",
    desc: "Use loyalty functionality to support customer retention and repeat-purchase activities.",
    image: "/images/home/dashboard/hulm-pos-reorder-alerts.webp",
    alt: "Hulm POS customer retention and reorder alert notifications",
    width: 2048,
    height: 988,
  },
  {
    title: "Purchase Orders",
    desc: "Organize supplier purchasing through purchase order functionality, where available in your configured plan.",
    image: "/images/product/sales-orders-screen.webp",
    alt: "Hulm POS purchase order and stock procurement module",
    width: 800,
    height: 459,
  },
];

const industrySolutions = [
  {
    title: "Retail, grocery and supermarkets",
    desc: "Manage product catalogues, billing, inventory, purchases and customer records.",
    href: "/industries/retail-store/",
    linkLabel: "Retail POS software",
    image: "/images/industries/retail.webp",
    width: 1024,
    height: 682,
  },
  {
    title: "Restaurants, cafes and coffee shops",
    desc: "Manage orders, tables, billing and configured payment workflows.",
    href: "/industries/restaurant-pos/",
    linkLabel: "Restaurant POS software",
    image: "/images/industries/restaurant.webp",
    width: 1024,
    height: 682,
  },
  {
    title: "Pharmacies and medical stores",
    desc: "Organize product records, billing and inventory information.",
    href: "/industries/pharmacy-store/",
    linkLabel: "Pharmacy POS software",
    image: "/images/industries/pharmacy.webp",
    width: 1024,
    height: 682,
  },
  {
    title: "Clothing stores and boutiques",
    desc: "Manage clothing products, sales, stock and customer transactions.",
    href: "/industries/clothing-store/",
    linkLabel: "Clothing store POS",
    image: "/images/industries/clothing.webp",
    width: 1024,
    height: 683,
  },
  {
    title: "Bakeries",
    desc: "Manage product billing, sales records and inventory information.",
    href: "/industries/bakery-pos-system/",
    linkLabel: "Bakery POS system",
    image: "/images/industries/bakery.webp",
    width: 1024,
    height: 681,
  },
  {
    title: "Electronics and specialty stores",
    desc: "Organize product information, billing, purchases and stock records.",
    href: "/industries/electric-store/",
    linkLabel: "Electric store POS",
    image: "/images/industries/electric.webp",
    width: 1024,
    height: 683,
  },
];

const karachiLocalities = [
  "Gulistan-e-Johar",
  "Gulshan-e-Iqbal",
  "Saddar",
  "DHA",
  "Clifton",
  "North Nazimabad",
  "Tariq Road",
  "Korangi",
  "Bahadurabad",
  "Federal B Area",
  "Nazimabad",
  "SITE Area",
];

export default function KarachiPosPage() {
  return (
    <div className="bg-white text-zinc-900">
      <JsonLd data={structuredData} />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ name: "POS software in Karachi" }]}
        className="border-b border-[#E4E2DA]/70 bg-white"
      />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-[#F7FAF9] via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
              <span>POS Software in Karachi &bull; Cloud POS &amp; Billing</span>
            </div>

            {/* Single H1 */}
            <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] sm:text-4xl lg:text-[46px] text-balance">
              POS Software in Karachi That Makes Business Management Easier
            </h1>

            {/* Subparagraph 1 */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-700 font-normal max-w-3xl mx-auto">
              Running a business should not mean struggling with manual billing, confusing spreadsheets, stock mistakes and end-of-day calculations.
            </p>

            {/* Subparagraph 2 */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal max-w-3xl mx-auto">
              Hulm POS helps businesses in Karachi manage sales, billing, inventory, purchases, customers and business reports from one easy-to-use system. Whether you operate a retail store, supermarket, restaurant, pharmacy, clothing shop or multiple branches, Hulm makes everyday operations easier to manage.
            </p>

            {/* Pricing Callout Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-2xs">
              <span className="font-bold text-[#167c70]">Starting at PKR 2,500/month.</span>
              <span>Try Hulm POS free for 14 days.</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col justify-center items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-8 h-12 text-sm font-semibold"
              >
                <a
                  href={contactInfo.signupUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_hero_primary"
                >
                  Start Your Free 14-Day Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 px-7 h-12 text-sm font-semibold"
              >
                <a href="#demo-form" data-track-location="karachi_hero_secondary">
                  Book a Free Demo
                </a>
              </Button>
            </div>

            {/* 5 Bullet Points */}
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-600 font-medium">
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#167c70]" /> Fast and simple checkout
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#167c70]" /> Easy-to-understand interface
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#167c70]" /> Organized sales and inventory records
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#167c70]" /> Excel data import assistance for compatible files
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#167c70]" /> Cloud-based business management
              </li>
            </ul>
          </div>

          {/* Hero Image: Real Hulm POS checkout screenshot on desktop/laptop */}
          <div className="mt-12 mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-zinc-300/80 bg-zinc-900/5 p-2 sm:p-3 shadow-xl ring-1 ring-zinc-900/10">
              <div className="relative aspect-[16/9.2] w-full overflow-hidden rounded-xl bg-zinc-950">
                <Image
                  src="/images/product/pos-checkout-screen.webp"
                  alt="Hulm POS checkout screen showing fast product catalogue, cart items, customer selection and bill total"
                  width={1201}
                  height={692}
                  priority
                  className="h-full w-full object-cover object-top"
                  sizes="(min-width: 1280px) 1024px, calc(100vw - 32px)"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between px-3 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-700">
                  Actual Hulm POS Checkout Interface &bull; Desktop &amp; Counter Display
                </span>
                <span className="hidden sm:inline">Cloud POS System in Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Trust and Value Strip */}
      <section className="border-b border-[#E4E2DA] bg-[#FAF9F5] py-10 sm:py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#167c70]">Core Capabilities</h2>
            <p className="mt-1 text-2xl font-bold text-[#0F2A26] sm:text-3xl">
              Manage your business with greater confidence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Fast checkout</h3>
              <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                Find products and process sales efficiently.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Receipt className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Organized billing</h3>
              <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                Keep transaction calculations and records in one system.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Inventory management</h3>
              <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                Manage products, stock and purchases.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Cloud-based access</h3>
              <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">
                Access business information through supported devices and permissions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Business Problems and Solutions */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Eliminate Counter Friction
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Still Managing Your Business with Manual Billing and Spreadsheets?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Many Karachi businesses rely on calculators, paper registers, WhatsApp messages and separate Excel files. These methods can make everyday operations harder as sales and inventory grow.
            </p>
            <p className="mt-2 text-base leading-relaxed text-zinc-800 font-medium">
              Hulm POS brings essential business operations together in one system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Problem - Solution Table */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] shadow-xs">
                <div className="grid grid-cols-2 bg-[#0F2A26] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white">
                  <span>Business problem</span>
                  <span>How Hulm POS helps</span>
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

              <div className="mt-6 flex items-center gap-4">
                <Button
                  asChild
                  className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm h-11 px-6 shadow-xs"
                >
                  <a href="#workflow">
                    See How Hulm POS Works <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Infographic Graphic */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-3 shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/images/uploads/2026/11/before-after-spreadsheets-vs-hulmpos-dashboard.webp"
                    alt="Infographic showing Before Hulm POS manual spreadsheets vs After Hulm POS centralized dashboard"
                    width={2756}
                    height={1689}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 440px, calc(100vw - 32px)"
                  />
                </div>
                <div className="mt-3 p-2 text-center">
                  <p className="text-xs font-semibold text-zinc-700">
                    Before Hulm POS → Hulm POS → Better-organized operations
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Transition from disconnected paper registers and spreadsheets to one connected retail system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. How Hulm POS Works – Product Workflow */}
      <section id="workflow" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Product Workflow
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              See How Easy It Is to Make a Sale with Hulm POS
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              A POS system should make checkout easier, not more complicated. Hulm POS provides a straightforward product-to-payment workflow that helps staff process everyday sales.
            </p>
          </div>

          {/* Interactive 4-step workflow preview */}
          <ProductWorkflowInteractive />
        </Container>
      </section>

      {/* 6. Switching from Another POS / Excel Import */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Zero-Downtime Migration
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                Want to Switch Your POS Software Without Starting from Scratch?
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                Changing your POS software can feel difficult when your business already has hundreds or thousands of products. You may worry about manually adding everything again.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                Hulm POS offers assistance with importing compatible business data from Excel sheets, helping make the transition easier.
              </p>

              {/* 5 Steps of Excel Migration */}
              <ol className="space-y-3 pt-2 text-sm text-zinc-700">
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Export your existing data</strong> — Export your product information from your current POS or organize it in an Excel sheet.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    2
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Share your Excel file with Hulm</strong> — Contact the Hulm team and share your file for a compatibility review.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    3
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Prepare and import compatible data</strong> — The team guides you through preparing the supported columns and importing the data.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    4
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Review your imported products</strong> — Check product names, prices, quantities and other imported information before starting operations.
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white">
                    5
                  </span>
                  <div>
                    <strong className="text-[#0F2A26]">Start using Hulm POS</strong> — Get familiar with the checkout process and manage your business through Hulm POS.
                  </div>
                </li>
              </ol>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-zinc-950 font-bold h-12 px-6 shadow-sm"
                >
                  <a
                    href="https://wa.me/923391119259?text=I%20want%20to%20switch%20to%20Hulm%20POS.%20Please%20guide%20me%20about%20Excel%20data%20import."
                    target="_blank"
                    rel="noreferrer"
                    data-track-location="karachi_migration_whatsapp"
                  >
                    <WhatsAppIcon size={18} className="mr-2" /> Talk to Our Team on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Requirement Qualification */}
              <p className="text-xs text-zinc-500 leading-normal border-l-2 border-[#167c70] pl-3 py-0.5">
                Note on data migration: Hulm provides guided assistance for importing compatible product columns (such as item names, barcodes, sale prices, and stock numbers). Contact our team to confirm current file formats and column layouts before switching.
              </p>
            </div>

            {/* Infographic Image */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-[#FAF9F5] p-3 shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/images/uploads/2026/11/excel-to-pos-data-migration-steps.webp"
                    alt="Excel to POS data migration infographic showing existing data to Hulm catalogue transition"
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 560px, calc(100vw - 32px)"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-[#0F2A26]">
                    Existing Excel product data → Import assistance → Hulm POS product catalogue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Fast, Accurate and Easy-to-Use */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              User-Friendly Experience
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              A POS System Your Staff Can Understand and Use
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Your team should be able to focus on serving customers instead of struggling with complicated software. Hulm POS is designed to make common business operations easier to understand, from finding products and completing sales to reviewing business records.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Fast checkout</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Search or scan products and add them to the checkout cart.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <ReceiptText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Organized billing</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Keep product prices, quantities and transaction details together.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Easy to understand</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Use a clear interface for common business activities.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Easier staff onboarding</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Help employees learn everyday POS tasks with guided onboarding.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center space-y-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white px-8 h-12 text-sm font-semibold"
            >
              <a href="#demo-form">Book a Free Hulm POS Demo</a>
            </Button>
            <p className="text-xs text-zinc-500 max-w-2xl mx-auto">
              Hulm helps reduce reliance on manual calculations and disconnected records. Correct setup, product data and staff usage remain important.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Features */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              All-In-One Platform
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Manage Sales, Inventory and Business Operations in One Place
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Hulm POS brings key business operations into one platform, helping you spend less time switching between separate records and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuresList.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    width={f.width}
                    height={f.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, calc(100vw - 32px)"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-[#0F2A26]">{f.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Dashboard and Graphs */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Operational Intelligence
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Understand Your Sales and Business Performance
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Managing a business becomes difficult when you cannot easily understand what is happening throughout the day. Hulm POS provides business dashboards and reports that help you review sales activity, inventory information, purchases and other available business data.
            </p>
          </div>

          {/* 5 Points Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5 text-center text-xs sm:text-sm">
            <div className="rounded-xl border border-zinc-200 bg-white p-3 font-semibold text-[#0F2A26]">
              Daily & overall sales activity
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3 font-semibold text-[#0F2A26]">
              Product & inventory information
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3 font-semibold text-[#0F2A26]">
              Purchase-related records
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3 font-semibold text-[#0F2A26]">
              Customer & supplier records
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-zinc-200 bg-white p-3 font-semibold text-[#0F2A26]">
              Available profit & performance reports
            </div>
          </div>

          {/* Interactive Graphs */}
          <DashboardGraphsInteractive />
        </Container>
      </section>

      {/* 10. Industry Solutions */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Tailored For Your Sector
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              One POS Solution for Different Business Needs
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Every business has different workflows. Hulm POS supports different types of businesses with tools for billing, inventory and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((ind) => (
              <article
                key={ind.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
                  <Image
                    src={ind.image}
                    alt={`${ind.title} in Karachi running Hulm POS software`}
                    width={ind.width}
                    height={ind.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, calc(100vw - 32px)"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[#0F2A26]">{ind.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed flex-1">
                    {ind.desc}
                  </p>
                  <Link
                    href={ind.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#105f56]"
                  >
                    {ind.linkLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11. Multi-branch Management */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Scale Seamlessly
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                Running More Than One Branch in Karachi?
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                Managing separate spreadsheets, sales records and stock information for each location can become difficult as your business expands. Hulm POS supports centralized multi-branch management, helping businesses manage supported branch operations within one system.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-zinc-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Organize business operations across branches.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Review available sales and performance reports.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Manage product and inventory information.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Keep relevant business records centralized.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#167c70] shrink-0" />
                  <span>Manage staff access according to permissions.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Button
                  asChild
                  className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold h-11 px-6 text-sm"
                >
                  <a href="#demo-form">Discuss Multi-Branch Setup</a>
                </Button>
              </div>

              <p className="text-xs text-zinc-500 border-l-2 border-zinc-300 pl-3">
                * Note: Multi-branch capacity, branch transfer workflows and user permissions vary by subscription plan. Confirm your specific branch requirements with our product team.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                  <Image
                    src="/images/uploads/2026/11/retail-stock-transfer-diagram-lahore-karachi.webp"
                    alt="Multi-branch POS architecture showing central cloud system connected to multiple branch locations"
                    width={2756}
                    height={1689}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 560px, calc(100vw - 32px)"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-[#0F2A26]">
                    Central Hulm POS Account &rarr; Branch 1 &bull; Branch 2 &bull; Branch 3
                  </span>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Centralized inventory, consolidated daily reporting, and live inter-branch stock management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. FBR Integration */}
      <Section data-reveal className="py-16 sm:py-20 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-emerald-50/40 p-8 sm:p-10 shadow-xs text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100/60 px-3 py-1 text-xs font-bold text-emerald-900 mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-[#167c70]" /> Tax & Regulatory Ready
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2A26]">
              Looking for POS Software with FBR Integration?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Businesses that fall under applicable Federal Board of Revenue requirements may need to integrate their POS invoicing with the relevant FBR system. Hulm POS offers FBR-related integration functionality for eligible businesses, subject to applicable requirements and supported configuration.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm h-11 px-6"
              >
                <Link href="/fbr-integrated-pos-pakistan/">
                  Ask About FBR Integration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 text-sm font-semibold h-11 px-6"
              >
                <a
                  href="https://wa.me/923391119259?text=I%20want%20to%20know%20about%20FBR%20integration%20for%20my%20business%20in%20Karachi."
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={16} className="mr-2" /> Consult on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-4 text-[11px] text-zinc-500 max-w-xl mx-auto">
              Notice: Tier-1 retailer eligibility and invoicing parameters depend on current FBR guidelines and your business registration category. Hulm POS provides integration tooling for supported setups.
            </p>
          </div>
        </Container>
      </Section>

      {/* 13. Why Choose Hulm POS? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Built for Practical Results
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              A Practical POS Solution for Growing Businesses
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Choosing POS software is an important business decision. You need a system that fits your daily operations, is easy for your staff to understand and offers support when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Store className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Simple everyday workflows</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Manage common sales and business operations through one platform.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Laptop className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Cloud-based management</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Access supported business information without relying on disconnected spreadsheets.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Package className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Inventory and sales management</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Keep essential product, sales and purchase records organized.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <FileSpreadsheet className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Excel import assistance</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Get guidance when moving compatible data from existing spreadsheets.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <BarChart3 className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Business reporting</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Review available sales and operational reports.
              </p>
            </div>

            <div className="rounded-xl border border-[#E4E2DA] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-base font-bold text-[#0F2A26]">Local assistance</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                Contact the Hulm team for product guidance and onboarding.
              </p>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-5 text-center">
              <h3 className="text-base font-bold text-emerald-950">Transparent starting price</h3>
              <p className="mt-1 text-sm text-emerald-800">
                Begin with a subscription starting at PKR 2,500 per month with a 14-day free trial.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 14. Pricing */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Transparent Pricing
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              Affordable POS Software for Businesses in Karachi
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Get started with Hulm POS without making a large upfront software investment.
            </p>
          </div>

          {/* Redesigned Balanced Horizontal Showcase Card */}
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#E4E2DA] bg-white shadow-lg ring-1 ring-zinc-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Plan Inclusions & Overview */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3.5 py-1 text-xs font-bold text-[#167c70]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Starter Plan | 14-Day Free Trial</span>
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2A26]">
                    Start managing your business with Hulm POS.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                    Everything your store needs to process sales, organize inventory, and track customer credit in one connected cloud system.
                  </p>

                  {/* 2-Column Inclusions Grid */}
                  <div className="mt-8 border-t border-zinc-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                      Plan Inclusions
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Sales and billing management</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Fast checkout & receipt printing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Product and inventory management</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Barcodes, prices & stock levels</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Business reports</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Daily sales & performance data</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Customer and supplier records</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Udhaar khata & vendor ledgers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Cloud-based POS functionality</span>
                          <p className="text-xs text-zinc-500 mt-0.5">Access securely from any device</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F2A26]">Support and onboarding guidance</span>
                          <p className="text-xs text-zinc-500 mt-0.5">WhatsApp & phone guidance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium text-zinc-600">
                    <Building2 className="h-4 w-4 text-[#167c70]" /> Multi-branch growth plans available
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-zinc-600">
                    <ShieldCheck className="h-4 w-4 text-[#167c70]" /> FBR integration compatible
                  </span>
                </div>
              </div>

              {/* Right Column: Price Tag, Guarantees & CTAs */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#F7FAF9] to-[#FAF9F5] border-t lg:border-t-0 lg:border-l border-[#E4E2DA] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                    Starting Subscription
                  </span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0F2A26]">PKR 2,500</span>
                    <span className="text-base font-semibold text-zinc-500">/ month</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-600">
                    Transparent monthly subscription with no upfront hardware lock-in.
                  </p>

                  <div className="mt-6 rounded-2xl border border-emerald-200/80 bg-white p-4 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> 14-day free trial included
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> No credit card required to start
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <Check className="h-4 w-4 text-[#167c70] shrink-0" /> Switch or upgrade plan anytime
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold h-12 shadow-sm text-sm"
                  >
                    <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
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
                      href="https://wa.me/923391119259?text=I%20want%20to%20know%20more%20about%20Hulm%20POS%20pricing."
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon size={16} className="mr-2" /> Ask About Pricing on WhatsApp
                    </a>
                  </Button>

                  <p className="pt-2 text-center text-[11px] text-zinc-500 leading-normal">
                    Confirm current plan inclusions, branch limits, applicable taxes and any additional charges with the team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="mx-auto mt-8 max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F2A26]">Quick Setup in Karachi</h4>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Be up and running same day with guided Excel data import and counter training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F2A26]">No Hidden Penalties</h4>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Predictable monthly subscription with no hardware lock-in or setup penalties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F2A26]">Scales With Your Trade</h4>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  Easily add counters, staff logins, and branches as your business grows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 15. Getting Started / Onboarding */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Simple 4-Step Process
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
              From Setup to Your First Sale
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">
                1
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0F2A26]">Discuss requirements</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Tell us about your business, number of branches and current billing process.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">
                2
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0F2A26]">Set up products</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Prepare product information and compatible Excel data, if applicable.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">
                3
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0F2A26]">Learn checkout</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Understand how to add products, process payments and complete sales.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">
                4
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0F2A26]">Start managing</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Use Hulm POS for your configured daily business operations.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white px-7 h-11 text-sm font-semibold"
            >
              <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
                Start Your Free Trial <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 px-7 h-11 text-sm font-semibold"
            >
              <a
                href="https://wa.me/923391119259?text=I%20want%20help%20setting%20up%20Hulm%20POS."
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={16} className="mr-2" /> Setup Assistance on WhatsApp
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* 16. Local Karachi Presence */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Information, Text & Commercial Hubs Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <MapPin className="h-3.5 w-3.5 text-[#167c70]" />
                <span>Local Karachi Presence &amp; Support</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl leading-[1.2]">
                Looking for POS Software in Karachi with Local Assistance?
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
                Hulm Solutions serves businesses looking for practical POS software to manage their daily operations. Whether your business is in Gulistan-e-Johar, Gulshan-e-Iqbal, Saddar, DHA, Clifton, North Nazimabad, Tariq Road, Korangi or another area of Karachi, contact our team to discuss your setup and support requirements.
              </p>

              {/* Supported Commercial Hubs Box */}
              <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2A26]">
                    Serving Key Commercial &amp; Retail Hubs Across Karachi
                  </h3>
                  <span className="text-[11px] font-semibold text-[#167c70]">All Districts</span>
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

              <p className="text-xs text-zinc-500 leading-relaxed border-l-2 border-[#167c70] pl-3 py-0.5">
                Our Karachi support team provides fast online onboarding, compatible Excel database import, receipt printer configuration, and staff training with zero business downtime.
              </p>
            </div>

            {/* Right Column: Official Office & Direct Contact Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-[#E4E2DA] bg-[#FAF9F5] shadow-md ring-1 ring-zinc-900/5">
                {/* Card Header */}
                <div className="bg-[#0F2A26] p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#7ae582]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Hulm Solutions</h3>
                      <p className="text-xs text-zinc-300">Gulistan-e-Johar, Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Contact Items */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* WhatsApp & Call */}
                  <a
                    href="https://wa.me/923391119259?text=Hi%20Hulm,%20I'm%20inquiring%20about%20POS%20Software%20in%20Karachi."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-2xs hover:border-[#167c70] hover:shadow-xs transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:scale-105 transition-transform">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        WhatsApp &amp; Phone Support
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors">
                        +92 339 111 9259
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">Quick assistance for Karachi businesses</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@hulmsolutions.com"
                    className="flex items-start gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-2xs hover:border-[#167c70] hover:shadow-xs transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        Email Inquiries
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors">
                        info@hulmsolutions.com
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">Proposals &amp; enterprise queries</p>
                    </div>
                  </a>

                  {/* Cloud Portal */}
                  <div className="flex items-start gap-3.5 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-2xs">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-[#0F2A26]">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        Official Website &amp; Portal
                      </span>
                      <p className="text-sm font-bold text-[#0F2A26]">
                        https://hulmsolutions.com/
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">Cloud-based business management</p>
                    </div>
                  </div>

                  {/* Primary WhatsApp Action */}
                  <div className="pt-2">
                    <Button
                      asChild
                      className="w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-zinc-950 font-bold h-12 shadow-sm text-sm"
                    >
                      <a
                        href="https://wa.me/923391119259?text=Hi%20Hulm,%20I'm%20inquiring%20about%20POS%20Software%20in%20Karachi."
                        target="_blank"
                        rel="noreferrer"
                      >
                        <WhatsAppIcon size={18} className="mr-2" /> Connect with Karachi Team
                      </a>
                    </Button>
                  </div>

                  <p className="text-[11px] text-zinc-500 text-center leading-normal pt-1">
                    Most onboarding, software walk-throughs and customer support are delivered directly online and via WhatsApp for fast response times across Karachi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 17. Lead Form Section (Section 19.C) */}
      <section id="demo-form" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Context, Walkthrough Agenda & Trust */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
                <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                <span>Schedule a Walkthrough</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl leading-[1.2]">
                Get a POS Demo for Your Business in Karachi
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600">
                Tell us about your business setup. Our Karachi product team will show you checkout, stock management, and reports tailored to your workflow.
              </p>

              {/* What's Covered in the Walkthrough */}
              <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-2xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2A26]">
                  What you&apos;ll see in your 30-minute session:
                </h3>

                <ul className="space-y-3.5 text-sm text-zinc-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Live Checkout &amp; Billing:</strong> See barcode scanning, instant price lookups, customer discounts, and thermal receipt printing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Excel Data Import Review:</strong> Share your existing spreadsheet columns so we can guide your product catalogue migration.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Stock Levels &amp; Reorders:</strong> Explore real-time stock deduction, low-stock warnings, and purchase order workflows.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2A26]">Multi-Branch &amp; Udhaar Khata:</strong> Test customer ledgers, credit tracking, and multi-location branch management.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp Option */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 text-xs text-emerald-950">
                <span className="font-medium">Prefer chatting on WhatsApp instead?</span>
                <a
                  href="https://wa.me/923391119259?text=Hi%20Hulm,%20I'm%20inquiring%20about%20a%20POS%20demo%20for%20my%20Karachi%20store."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#167c70] hover:text-[#0F2A26] shrink-0"
                >
                  <WhatsAppIcon size={15} /> Chat on WhatsApp Directly
                </a>
              </div>
            </div>

            {/* Right Column: Demo Request Form */}
            <div className="lg:col-span-6">
              <KarachiDemoForm compactHeader={true} />
            </div>
          </div>
        </Container>
      </section>

      {/* 18. Frequently Asked Questions */}
      <Section data-reveal className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Common Inquiries
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                Answers to common questions about choosing, installing, and running Hulm POS software in Karachi retail stores, restaurants, and medical stores.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-zinc-300 text-[#0F2A26] hover:bg-zinc-100 text-sm font-semibold"
                >
                  <a
                    href="https://wa.me/923391119259?text=I%20have%20a%20question%20about%20Hulm%20POS%20in%20Karachi."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon size={16} className="mr-2" /> Ask Any Other Question
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8">
              <FaqDetails items={karachiFaqs} openFirst={true} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 19. Final CTA */}
      <section className="relative overflow-hidden bg-[#0F2A26] py-16 sm:py-20 lg:py-24 text-white text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0 opacity-10" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-[#167c70]/20 px-3.5 py-1 text-xs font-semibold text-[#7ae582] tracking-wide mb-4">
              Switch Easily. Sell Faster. Manage Smarter.
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Make Your Business Management Easier?
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Stop depending on disconnected spreadsheets, paper records and complicated manual billing. Move your daily business operations to a POS system designed to make sales, inventory and reporting easier to manage.
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold text-[#7ae582]">
              Start with Hulm POS for PKR 2,500/month and explore it with a 14-day free trial.
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
                  href="https://wa.me/923391119259?text=I%20want%20a%20demo%20of%20Hulm%20POS%20for%20my%20business%20in%20Karachi."
                  target="_blank"
                  rel="noreferrer"
                  data-track-location="karachi_final_whatsapp"
                >
                  <WhatsAppIcon size={16} className="mr-2 text-[#25D366]" /> Book a Free Demo on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Confirm current subscription terms before subscribing. No credit card required for 14-day trial.
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
