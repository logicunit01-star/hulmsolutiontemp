import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  History,
  Users,
  Package,
  FolderTree,
  Warehouse,
  BellRing,
  ArrowUpDown,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { DashboardCarousel, type DashboardScreen } from "@/components/home/DashboardCarousel";
import { productContent } from "@content/pages/product";

export const metadata: Metadata = newPageMetadata({
  path: "/apps/",
  title: productContent.seo.title,
  description: productContent.seo.description,
});

const schema = pageJsonLd({
  route: "/apps/",
  name: productContent.seo.title,
  description: productContent.seo.description,
  pageType: "CollectionPage",
  crumbs: [{ name: "Apps & Features", path: "/apps/" }],
  faq: productContent.faq.items,
});

interface AppModule {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  points: string[];
  image: string;
}

const appModules: AppModule[] = [
  {
    id: "smart-pos-dashboard",
    number: "01",
    name: "Smart POS Dashboard",
    tagline: "Make checkout faster with a user-friendly POS dashboard.",
    category: "Counter Operations",
    icon: LayoutDashboard,
    points: [
      "Scan barcodes and search products by name.",
      "Filter products by category.",
      "Hold sales and resume them later.",
      "Manage opening and closing cash for each shift.",
    ],
    image: "/images/home/dashboard/hulm-pos-terminal.webp",
  },
  {
    id: "sales-history-management",
    number: "02",
    name: "Sales History Management",
    tagline: "Access sales records and manage transactions with ease.",
    category: "Transaction Records",
    icon: History,
    points: [
      "Find orders by order ID.",
      "View today's sales and complete sales history.",
      "Process returns and automatically update stock.",
      "Reprint receipts and view order details.",
    ],
    image: "/images/home/dashboard/hulm-pos-sales-history.webp",
  },
  {
    id: "customer-management",
    number: "03",
    name: "Customer Management",
    tagline: "Keep customer information organized and accessible.",
    category: "Customer Records",
    icon: Users,
    points: [
      "Add and edit customer records.",
      "Search customers by name, ID, or email.",
      "Filter customer records for quick access.",
    ],
    image: "/images/home/dashboard/hulm-pos-customer-management.webp",
  },
  {
    id: "product-management",
    number: "04",
    name: "Product Management",
    tagline: "Manage your product catalog from one place.",
    category: "Catalog Control",
    icon: Package,
    points: [
      "Add, search, and edit products.",
      "View all products in one dashboard.",
      "Manage active and draft products.",
      "Filter product records for quick access.",
    ],
    image: "/images/home/dashboard/hulm-pos-product-catalog.webp",
  },
  {
    id: "category-management",
    number: "05",
    name: "Category Management",
    tagline: "Organize products into categories for easier management.",
    category: "Catalog Structure",
    icon: FolderTree,
    points: [
      "Create product categories manually.",
      "Search product category.",
      "Filter categories by ID or name.",
    ],
    image: "/images/home/dashboard/hulm-pos-categories-management.webp",
  },
  {
    id: "inventory-management",
    number: "06",
    name: "Inventory Management",
    tagline: "Track stock levels and keep inventory records up to date.",
    category: "Stock Control",
    icon: Warehouse,
    points: [
      "Add stock or set product quantities directly.",
      "Monitor low-stock and out-of-stock items.",
      "View total inventory value.",
      "Review product inventory history.",
    ],
    image: "/images/home/dashboard/hulm-pos-inventory-management.webp",
  },
  {
    id: "low-stock-alerts",
    number: "07",
    name: "Low-Stock Alerts",
    tagline: "Identify stock shortages before they affect your sales.",
    category: "Stock Intelligence",
    icon: BellRing,
    points: [
      "View all inventory alerts.",
      "Identify low, critical, and out-of-stock products.",
      "Search products to find items needing attention.",
    ],
    image: "/images/home/dashboard/hulm-pos-reorder-alerts.webp",
  },
  {
    id: "data-import-export",
    number: "08",
    name: "Data Import & Export",
    tagline: "Manage business data efficiently with simple import and export tools.",
    category: "Data Portability",
    icon: ArrowUpDown,
    points: [
      "Import or export products, categories, and customers.",
      "Download templates to prepare your data.",
      "Upload files and validate their format before importing.",
    ],
    image: "/images/home/dashboard/hulm-pos-data-import-export.webp",
  },
];

const sliderScreens: DashboardScreen[] = appModules.map((m) => ({
  title: m.name,
  description: m.tagline,
  image: m.image,
  badge: `${m.number} · ${m.category}`,
}));

function MockBrowserWindow({ image, alt, title }: { image: string; alt: string; title: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-zinc-100 bg-[#F7F6F2] px-3.5 py-2">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-0.5 text-[11px] font-mono text-zinc-500 border border-zinc-200/60 max-w-[200px] sm:max-w-xs truncate">
          <ShieldCheck className="h-3 w-3 text-[#167c70] shrink-0" />
          <span>app.hulmsolutions.com</span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#167c70] bg-[#167c70]/10 px-2 py-0.5 rounded">
          Workspace
        </span>
      </div>
      <div className="p-2 sm:p-2.5 bg-zinc-50/40">
        <Image
          src={image}
          alt={alt}
          width={1024}
          height={580}
          className="h-auto w-full rounded-lg sm:rounded-xl border border-zinc-200/60 object-contain"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}

export default function AppsPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Apps & Features" }]} className="border-b border-[#E4E2DA]/70 bg-white" />

      {/* 1. SIMPLE HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E4E2DA] bg-gradient-to-b from-[#F7F6F2] via-white to-white py-14 sm:py-18 lg:py-20">
        <Container className="relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
              <span>Hulm POS Applications & Modules</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">
              All 8 Built-in Apps to Run Your Store & Stock
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Everything your business needs from the counter to the warehouse. Explore each core application designed to keep checkout fast, inventory accurate, and business records effortless.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-[#0F2A26] text-white hover:bg-[#167c70] shadow-sm">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] text-[#0F2A26] hover:bg-[#F7F6F2]">
                <Link href="/contact/">
                  <span>Book a Product Demo</span>
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs font-medium text-zinc-500">
              All 8 apps included &bull; Instant cloud setup &bull; No credit card required
            </p>
          </div>
        </Container>
      </section>

      {/* 2. SECTION A: 8 APPS AT A GLANCE (Name and short content only) */}
      <Section data-reveal className="bg-white py-12 sm:py-16 border-b border-zinc-200/70">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Quick Overview
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[32px]">
              8 Core Modules at a Glance
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              A quick look at the 8 applications powering Hulm POS. Scroll down for detailed feature breakdowns and live screens.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {appModules.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.number}
                  href={`#${item.id}`}
                  className="group flex flex-col justify-between rounded-xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#167c70]/40 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-white border border-[#E4E2DA] text-[#167c70] group-hover:bg-[#167c70] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#167c70] bg-[#167c70]/10 px-2 py-0.5 rounded">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors leading-snug">
                      {item.number}. {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-semibold text-[#167c70]">
                    <span>View details</span>
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. MULTIPLE DETAILED SECTIONS: EXPLAINING EACH POINT IN DEPTH */}

      {/* DETAILED SECTION 1: Sales & Counter (1. Smart POS Dashboard & 2. Sales History Management) */}
      <Section id="pos-dashboard" data-reveal className="bg-[#FAF9F5] py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Part 01 &bull; Counter Operations
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              Fast Checkout & Sales History
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Speed up checkout lines and keep a verified audit trail of every sale, refund, and shift register.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* 1. Smart POS Dashboard */}
            <div id="smart-pos-dashboard" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  <span>Module 01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  1. Smart POS Dashboard
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Make checkout faster with a user-friendly POS dashboard.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[0].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Try POS Dashboard</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MockBrowserWindow
                  image={appModules[0].image}
                  alt="Hulm Smart POS Dashboard Screen"
                  title="Smart POS Dashboard"
                />
              </div>
            </div>

            {/* 2. Sales History Management */}
            <div id="sales-history-management" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <History className="h-3.5 w-3.5" />
                  <span>Module 02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  2. Sales History Management
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Access sales records and manage transactions with ease.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[1].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>View Sales History</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <MockBrowserWindow
                  image={appModules[1].image}
                  alt="Hulm Sales History Management Screen"
                  title="Sales History Management"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DETAILED SECTION 2: Customer Management & Product Management (3. Customer Management & 4. Product Management) */}
      <Section data-reveal className="bg-white py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Part 02 &bull; Customers & Products
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              Customer Directory & Product Catalog
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Keep customer profiles organized while managing your entire product catalog from a single control center.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* 3. Customer Management */}
            <div id="customer-management" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <Users className="h-3.5 w-3.5" />
                  <span>Module 03</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  3. Customer Management
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Keep customer information organized and accessible.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[2].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-200/80 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Manage Customers</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MockBrowserWindow
                  image={appModules[2].image}
                  alt="Hulm Customer Management Screen"
                  title="Customer Management"
                />
              </div>
            </div>

            {/* 4. Product Management */}
            <div id="product-management" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <Package className="h-3.5 w-3.5" />
                  <span>Module 04</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  4. Product Management
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Manage your product catalog from one place.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[3].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-200/80 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Explore Product Catalog</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <MockBrowserWindow
                  image={appModules[3].image}
                  alt="Hulm Product Management Screen"
                  title="Product Management"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DETAILED SECTION 3: Category Management & Inventory (5. Category Management & 6. Inventory Management) */}
      <Section data-reveal className="bg-[#FAF9F5] py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Part 03 &bull; Structure & Live Stock
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              Categories & Inventory Management
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Structure your store into intuitive departments and track live inventory levels across all items with complete valuation.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* 5. Category Management */}
            <div id="category-management" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <FolderTree className="h-3.5 w-3.5" />
                  <span>Module 05</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  5. Category Management
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Organize products into categories for easier management.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[4].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Organize Categories</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MockBrowserWindow
                  image={appModules[4].image}
                  alt="Hulm Category Management Screen"
                  title="Category Management"
                />
              </div>
            </div>

            {/* 6. Inventory Management */}
            <div id="inventory-management" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <Warehouse className="h-3.5 w-3.5" />
                  <span>Module 06</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  6. Inventory Management
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Track stock levels and keep inventory records up to date.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[5].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Track Inventory</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <MockBrowserWindow
                  image={appModules[5].image}
                  alt="Hulm Inventory Management Screen"
                  title="Inventory Management"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DETAILED SECTION 4: Alerts & Data Tools (7. Low-Stock Alerts & 8. Data Import & Export) */}
      <Section data-reveal className="bg-white py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Part 04 &bull; Intelligence & Data
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              Stock Alerts & Bulk Data Tools
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Identify inventory shortages before they hurt revenue, and import or export data with pre-formatted spreadsheets.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* 7. Low-Stock Alerts */}
            <div id="low-stock-alerts" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <BellRing className="h-3.5 w-3.5" />
                  <span>Module 07</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  7. Low-Stock Alerts
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Identify stock shortages before they affect your sales.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[6].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-200/80 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>View Stock Alerts</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MockBrowserWindow
                  image={appModules[6].image}
                  alt="Hulm Low-Stock Alerts Screen"
                  title="Low-Stock Alerts"
                />
              </div>
            </div>

            {/* 8. Data Import & Export */}
            <div id="data-import-export" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="lg:col-span-5 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-semibold text-[#167c70] mb-3">
                  <ArrowUpDown className="h-3.5 w-3.5" />
                  <span>Module 08</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A26] sm:text-3xl">
                  8. Data Import & Export
                </h3>
                <p className="mt-3 text-base font-medium text-zinc-700 leading-relaxed">
                  Manage business data efficiently with simple import and export tools.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2.5">
                    {appModules[7].points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#167c70] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-200/80 flex gap-3">
                  <Button asChild size="sm" className="rounded-lg bg-[#0F2A26] text-white hover:bg-[#167c70]">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      <span>Start Data Import</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <MockBrowserWindow
                  image={appModules[7].image}
                  alt="Hulm Data Import and Export Screen"
                  title="Data Import & Export"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. SLIDER SECTION (Dashboard Screens Carousel) */}
      <Section data-reveal className="py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Visual Workspace
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              Explore the Workspace Screen Slider
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Swipe or click through real interface screens from all 8 modules in the Hulm POS workspace.
            </p>
          </div>
          <DashboardCarousel screens={sliderScreens} />
        </Container>
      </Section>

      {/* 5. FAQ SECTION */}
      <Section data-reveal className="bg-[#F7F6F2] py-14 sm:py-18 lg:py-20 border-b border-[#E4E2DA]">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#167c70]">
              {productContent.faq.eyebrow}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px]">
              {productContent.faq.heading}
            </h2>
            <p className="mt-4 text-sm text-zinc-600 sm:text-base leading-relaxed">
              Have questions about how the 8 modules work together, hardware compatibility, or importing existing data? Find quick answers here.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-xl border-[#E4E2DA] bg-white text-[#0F2A26] hover:bg-[#F7F6F2]">
                <Link href="/contact/">
                  <span>Speak with our team</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <FaqDetails items={productContent.faq.items} />
        </Container>
      </Section>

      {/* 6. FINAL CTA SECTION */}
      <Section data-reveal className="py-14 sm:py-18">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-[#0F2A26] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs sm:text-sm font-bold tracking-wide uppercase text-[#7AE582]">
                {productContent.finalCta.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {productContent.finalCta.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
                {productContent.finalCta.description}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#7AE582] font-semibold text-[#0F2A26] hover:bg-[#68d770] shadow-sm">
                  <Link href={productContent.finalCta.primaryCta.href} target="_blank" rel="noreferrer">
                    {productContent.finalCta.primaryCta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href={productContent.finalCta.secondaryCta.href}>
                    {productContent.finalCta.secondaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
