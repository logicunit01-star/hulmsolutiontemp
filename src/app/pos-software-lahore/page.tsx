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
import { LahoreDemoForm } from "@/components/local/lahore/lahore-demo-form";
import { LahorePageTracker } from "@/components/local/lahore/lahore-page-tracker";
import { MobileCarousel } from "@/components/local/lahore/mobile-carousel";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { SITE_FEEDS, SITE_URL } from "@/lib/seo/page-seo";

export const metadata: Metadata = {
  title: { absolute: "POS Software in Lahore from PKR 2,500/mo | FBR & PRA | Hulm POS" },
  description:
    "Cloud POS system in Lahore for retail, clothing, restaurants and distributors: FBR invoicing, variants, inventory and multi-branch. 14-day free trial, no card. Remote setup, WhatsApp support.",
  alternates: {
    canonical: "/pos-software-lahore/",
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
    title: "POS Software in Lahore from PKR 2,500/mo | FBR & PRA | Hulm POS",
    description:
      "Cloud POS system in Lahore for retail, clothing, restaurants and distributors: FBR invoicing, variants, inventory and multi-branch. 14-day free trial, no card. Remote setup, WhatsApp support.",
    url: "/pos-software-lahore/",
    images: [
      {
        url: "/images/product/pos-checkout-screen.webp",
        alt: "Hulm POS software checkout screen for retail and hospitality billing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "POS Software in Lahore from PKR 2,500/mo | FBR & PRA | Hulm POS",
    description:
      "Cloud POS system in Lahore for retail, clothing, restaurants and distributors: FBR invoicing, variants, inventory and multi-branch. 14-day free trial, no card. Remote setup, WhatsApp support.",
    images: ["/images/product/pos-checkout-screen.webp"],
  },
};

const LAST_UPDATED_DATE = "November 26, 2026";
const LAST_UPDATED_ISO = "2026-11-26";

const lahoreFaqs: readonly FaqDetailsItem[] = [
  {
    q: "What is the best POS software in Lahore?",
    a: "The best POS software in Lahore gives retailers and restaurants fast barcode billing, automated FBR Tier-1 invoicing, inventory tracking across branches, and transparent reporting. Hulm POS provides a browser-based cloud system that handles fashion variant matrices, wholesale Khata ledgers, and restaurant orders with remote onboarding from Karachi HQ.",
    link: { label: "Hulm POS features overview", href: "/features/" },
  },
  {
    q: "How much does POS software cost in Lahore?",
    a: "Hulm POS starts at PKR 2,500 per month for the Starter plan, covering 1 user and 1 branch with billing and inventory. The Growth plan is PKR 5,500 per month for 5 users and 2 branches with purchasing. The Business plan is PKR 11,000 per month for 10 users and 5 branches. Hardware and taxes are excluded.",
    link: { label: "Hulm POS pricing plans", href: "/pricing/" },
  },
  {
    q: "Do retail businesses in Lahore need an FBR-integrated POS?",
    a: "Under federal tax law, Tier-1 retailers operating in air-conditioned shopping malls, retail chains with multiple branches, or large commercial premises must integrate their POS billing with the FBR. Hulm POS connects eligible retailers to print real-time FBR invoice numbers and verifiable QR codes on receipts.",
    link: { label: "FBR integrated POS details", href: "/fbr-integrated-pos-pakistan/" },
  },
  {
    q: "Does Hulm POS support Punjab Revenue Authority (PRA) requirements for Lahore restaurants?",
    a: "Lahore restaurants, cafes, and service businesses are governed by Punjab Sales Tax on Services collected by the PRA. Hulm POS supports PRA tax configuration and SNTN printing on receipts. Businesses must review their PRA registration category during setup to configure provincial service tax percentages.",
    link: { label: "Restaurant POS workflows", href: "/industries/restaurant-pos/" },
  },
  {
    q: "How do multi-branch businesses in Lahore declare branches on the FBR portal?",
    a: "Under FBR Tier-1 e-invoicing regulations, businesses running multiple retail outlets across Lahore (e.g., Gulberg, DHA, and Mall Road) must register each business premise and individual POS terminal ID on the FBR IRIS portal before issuing fiscal receipts. Hulm assists with terminal configuration during remote onboarding.",
  },
  {
    q: "How can I verify if a POS vendor is licensed or registered with FBR?",
    a: "You can verify whether a POS provider is officially registered by asking for their software vendor registration credentials and checking the FBR active POS software intermediary list on the official FBR portal (e.fbr.gov.pk). Hulm provides transparent integration setup for compliant Tier-1 businesses.",
  },
  {
    q: "Does Hulm POS handle size, colour variants, and customer exchanges for pret stores?",
    a: "Yes. Hulm POS provides multi-dimensional variant matrices for fashion boutiques and pret brands in Lahore. Cashiers can look up garments by size (XS to XXL), color, or fabric cut, scan unique barcodes, apply seasonal discount codes, and process customer exchanges without manual spreadsheet calculations.",
    link: { label: "Clothing store POS system", href: "/industries/clothing-store/" },
  },
  {
    q: "Can electronics and mobile shops in Hafeez Centre track serial numbers and warranties?",
    a: "Yes. Hulm POS includes serial number and IMEI tracking for electronics retailers, laptop shops, and mobile dealers. Each serialized item is captured at receipt and recorded on sales invoices, allowing store owners to verify warranty validity and track serial-specific sales history instantly.",
    link: { label: "Electric store POS features", href: "/industries/electric-store/" },
  },
  {
    q: "How does customer credit (Khata) work for auto parts distributors in Badami Bagh?",
    a: "Hulm POS includes an integrated customer Khata ledger module for wholesale suppliers and auto parts shops. You can set customer-specific credit limits, record partial cash payments, view aged receivables, and share automated balance statements with workshops and buyers via WhatsApp.",
    link: { label: "Customer ledger module", href: "/customer-management/" },
  },
  {
    q: "Does Hulm POS work offline without an active internet connection?",
    a: "Hulm POS is a cloud-native platform that requires an active internet connection to ensure real-time multi-branch stock synchronization, cloud backups, and FBR receipt verification. In Lahore, counter computers commonly connect via fiber broadband or a 4G mobile Wi-Fi hotspot for continuous operation.",
  },
  {
    q: "Is an Urdu interface and local support available for Lahore businesses?",
    a: "Hulm provides customer support in both Urdu and English via WhatsApp, phone, and screen-sharing sessions. Cashiers and inventory managers receive step-by-step Urdu guidance during onboarding to ensure smooth billing and inventory entry from day one.",
    link: { label: "Contact Hulm support", href: "/contact/" },
  },
  {
    q: "What hardware and receipt printers work with Hulm POS in Lahore?",
    a: "Hulm POS runs in any modern web browser on standard Windows PCs, laptops, MacBooks, and tablets. It connects with standard 80mm and 58mm ESC/POS thermal receipt printers, USB or Bluetooth barcode scanners, and electronic cash drawers without proprietary hardware locks.",
    link: { label: "POS hardware compatibility", href: "/pos-hardware/" },
  },
  {
    q: "Can I import existing products and customer data from Excel into Hulm POS?",
    a: "Yes. If your products, prices, barcodes, or supplier records are in Excel (.xlsx) or CSV format, our technical team assists with data formatting and bulk migration during onboarding, allowing your Lahore shop to transition without manual re-entry.",
    link: { label: "Switch POS without losing data", href: "/blog/switch-pos-software-without-losing-data/" },
  },
  {
    q: "How does setup work in Lahore if Hulm is headquartered in Karachi?",
    a: "Hulm has no physical office in Lahore; our headquarters are in Karachi. We provide comprehensive remote onboarding for Lahore businesses via live video screen sharing, WhatsApp, and phone support. Catalogue imports, printer setup, and cashier training are handled online.",
  },
  {
    q: "Why choose cloud POS software over a custom-built desktop application?",
    a: "Custom-built desktop systems often crash during power fluctuations, lock data to a single hard drive, and incur steep developer maintenance fees. A cloud POS system offers automated cloud backups, multi-branch visibility from any phone or laptop, regular feature upgrades, and predictable monthly pricing.",
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
      "@id": `${SITE_URL}/#karachi-hq-serving-lahore`,
      name: "Hulm Solutions - Karachi HQ Serving Lahore",
      image: `${SITE_URL}/images/product/pos-checkout-screen.webp`,
      url: `${SITE_URL}/pos-software-lahore/`,
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
        name: "Lahore",
        containedInPlace: { "@type": "Country", name: "Pakistan" },
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/pos-software-lahore/#software`,
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
      "@id": `${SITE_URL}/pos-software-lahore/#webpage`,
      url: `${SITE_URL}/pos-software-lahore/`,
      name: "POS Software in Lahore from PKR 2,500/mo | FBR & PRA | Hulm POS",
      description:
        "Cloud POS system in Lahore for retail, clothing, restaurants and distributors: FBR invoicing, variants, inventory and multi-branch. 14-day free trial, no card. Remote setup, WhatsApp support.",
      dateModified: LAST_UPDATED_ISO,
      about: [
        { "@type": "Thing", name: "Point of sale" },
        { "@type": "Thing", name: "POS software in Lahore" },
        { "@type": "Place", name: "Lahore" },
      ],
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}/pos-software-lahore/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/pos-software-lahore/#breadcrumb`,
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
          name: "POS software in Lahore",
          item: `${SITE_URL}/pos-software-lahore/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/pos-software-lahore/#faq`,
      mainEntity: lahoreFaqs.map((faq) => ({
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
  { item: "Starting Subscription", detail: "PKR 2,500 per month (Starter Plan)", note: "Billed monthly, no setup fee" },
  { item: "Free Trial", detail: "14 Days full feature access", note: "No credit card required to start" },
  { item: "Platform & Access", detail: "Cloud web browser (Windows, Mac, iPad, Android)", note: "No local server required" },
  { item: "Supported Hardware", detail: "80mm & 58mm thermal printers, USB/wireless barcode scanners, cash drawers", note: "[VERIFY: Certified receipt printer model list]" },
  { item: "Tax Integration (FBR & PRA)", detail: "FBR Tier-1 integration available; PRA provincial invoice configuration", note: "[VERIFY: PRA direct fiscal API certification status]" },
  { item: "Users & Branches", detail: "Starter: 1 user, 1 branch · Growth: 5 users, 2 branches · Business: 10 users, 5 branches", note: "Confirmed in /pricing/ repository documentation" },
  { item: "Excel Data Import", detail: "Catalogue & stock import via .xlsx and .csv", note: "[VERIFY: Maximum import file size limits]" },
  { item: "Offline Mode", detail: "Cloud-native (Active internet connection required for live sync)", note: "Connect via broadband or 4G mobile hotspot" },
  { item: "Urdu Interface & Support", detail: "Staff support via WhatsApp and phone in Urdu and English", note: "[VERIFY: Full Urdu UI localization release date]" },
  { item: "Support Channels", detail: "WhatsApp (+92 339 111 9259), Email, Remote screen share", note: "[VERIFY: Dedicated support operating hours]" },
  { item: "Average Setup Time", detail: "Same-day online onboarding and catalogue import assistance", note: "Remote onboarding from Karachi headquarters" },
];

const lahoreAreas = [
  { market: "Gulberg & Main Boulevard", desc: "Flagship retail, electronics showrooms, and dining" },
  { market: "MM Alam Road", desc: "Designer boutiques, pret fashion, and upscale restaurants" },
  { market: "DHA (Phases 1–8 & Raya)", desc: "Commercial plazas, cafes, marts, and beauty salons" },
  { market: "Badami Bagh Auto Market", desc: "Automotive spare parts wholesale and distribution" },
  { market: "Hafeez Centre & Hall Road", desc: "Mobile phones, consumer electronics, and IT accessories" },
  { market: "Liberty Market & Noor Jahan Road", desc: "Apparel, footwear, fabrics, and jewelry retail" },
  { market: "Johar Town & Faisal Town", desc: "Supermarkets, bakeries, cafes, and medical pharmacies" },
  { market: "Model Town & Link Road", desc: "General stores, fashion outlets, and family dining" },
  { market: "Anarkali Bazaar & Mall Road", desc: "Wholesale garments, fabrics, and traditional retail" },
  { market: "Wapda Town & Township", desc: "Neighborhood grocery marts, hardware, and pharmacies" },
];

export default function PosSoftwareLahorePage() {
  return (
    <div className="bg-white">
      <JsonLd data={structuredData} />
      <LahorePageTracker />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[{ name: "POS software in Lahore" }]}
        className="border-b border-[#E4E2DA]/70 bg-white"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-18 lg:pb-20 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
            <span>Serving Lahore Retailers & Restaurants · Remote Onboarding</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
            POS Software in Lahore for Retail, Restaurants & Multi-Branch Brands
          </h1>

          {/* Answer-first paragraph: exactly 52 words containing primary keywords, price, trial, and remote setup */}
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">
            Hulm POS delivers cloud-based POS software in Lahore for retail stores, clothing boutiques, restaurants and auto parts distributors from PKR 2,500/month. As an easy-to-use point of sale in Lahore with remote onboarding from our Karachi headquarters, Hulm includes inventory control, multi-branch tracking and FBR invoicing with a 14-day free trial.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#0F2A26]">
            <span>From PKR 2,500/month</span>
            <span className="text-zinc-300">·</span>
            <span>14-day free trial</span>
            <span className="text-zinc-300">·</span>
            <span>No credit card required</span>
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold"
            >
              <a
                href={contactInfo.signupUrl}
                target="_blank"
                rel="noreferrer"
                data-track-location="lahore_hero"
              >
                Start 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#167c70] text-[#167c70] hover:bg-[#167c70]/10 px-7 h-12 text-sm font-semibold"
            >
              <a
                href={whatsappUrl("Hi Hulm, I run a business in Lahore and want to explore Hulm POS.")}
                target="_blank"
                rel="noreferrer"
                data-track-location="lahore_hero"
              >
                <WhatsAppIcon size={16} className="mr-2" /> Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full text-zinc-700 hover:text-[#0F2A26] hover:bg-zinc-100 px-6 h-12 text-sm font-semibold"
            >
              <a href="#demo-form-section">
                Book a Demo <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Hero Trust Strip with [VERIFY] Slots */}
          <div className="mx-auto mt-10 max-w-4xl pt-6 border-t border-zinc-200/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <Receipt className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F2A26]">FBR Invoicing</p>
                  <p className="text-[11px] text-zinc-500">Tier-1 integration available</p>
                  <p className="text-[10px] text-zinc-400 font-mono">[VERIFY: FBR Licence ID]</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F2A26]">PRA Invoicing</p>
                  <p className="text-[11px] text-zinc-500">Punjab service tax setup</p>
                  <p className="text-[10px] text-zinc-400 font-mono">[VERIFY: PRA API Status]</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Laptop className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F2A26]">Multi-Branch</p>
                  <p className="text-[11px] text-zinc-500">Centralized stock control</p>
                  <p className="text-[10px] text-zinc-400 font-mono">Declared on FBR Portal</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="h-5 w-5 text-[#167c70] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0F2A26]">Remote Setup</p>
                  <p className="text-[11px] text-zinc-500">WhatsApp & video support</p>
                  <p className="text-[10px] text-zinc-400 font-mono">Headquarters: Karachi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-2 shadow-sm">
            <Image
              src="/images/product/pos-checkout-screen.webp"
              alt="Hulm POS software checkout screen for retail, pret and restaurant billing"
              width={1200}
              height={700}
              priority
              className="rounded-xl object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            />
          </div>
        </Container>
      </section>

      {/* 2. AT A GLANCE TABLE */}
      <Section className="py-14 sm:py-18 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Cpu className="h-3.5 w-3.5" /> System Specifications
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              Hulm POS at a glance
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Key operational parameters, system requirements, and compliance features for Lahore businesses.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-[#E4E2DA] bg-zinc-50/70 text-xs font-semibold uppercase text-zinc-600">
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Specification</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Hulm POS Detail</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Verification Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E2DA] text-zinc-700">
                  {atGlanceSpecs.map((spec, i) => (
                    <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-semibold text-[#0F2A26]">{spec.item}</td>
                      <td className="py-3 px-4 sm:px-6">{spec.detail}</td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-zinc-500 font-mono">{spec.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2B. WHAT DOES A POS SYSTEM IN LAHORE INCLUDE? */}
      <Section className="py-14 sm:py-18 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" /> Complete Feature Suite
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              What does a POS system in Lahore include?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              When evaluating modern POS software Lahore merchants need a unified cloud solution combining front-counter speed with back-office inventory and fiscal compliance.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Receipt className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">High-Speed Checkout</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Barcode scanning, custom shortcodes, and instant receipt printing to eliminate checkout queues during pre-Eid rush hours.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">Live Inventory Control</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Low-stock alerts, automatic reorder levels, and inter-branch transfer slips between central warehouses and retail counters.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">FBR & PRA Integration</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Automated FBR Tier-1 e-invoicing with QR codes for retail stores and PRA Punjab sales tax invoice formatting for restaurants.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Tag className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">Variants & Serial Tracking</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Parent-child size/color matrices for fashion pret and IMEI/serial number tracking for electronics and mobile dealers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <Coins className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">Customer Khata (Credit)</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Digital customer ledgers with credit limits, payment terms, and automated balance statement sharing via WhatsApp.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70] mb-3">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#0F2A26] text-sm">Multi-Branch Analytics</h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Consolidated sales performance, branch-by-branch profitability, and cashier shift summaries accessible from any browser.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. LOCAL PROOF: CASE STUDIES (With Mobile Carousel) */}
      <Section className="py-14 sm:py-18 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Store className="h-3.5 w-3.5" /> Customer Case Studies
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              Lahore businesses running on Hulm
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Real Lahore retailers and wholesale hubs using Hulm POS for inventory, billing, and tax workflows.
            </p>
          </div>

          <MobileCarousel
            gridClassName="sm:grid sm:grid-cols-2 sm:gap-8 max-w-4xl mx-auto"
            itemClassName="w-[88vw] max-w-[380px] shrink-0 snap-center sm:w-auto sm:max-w-none"
            ariaLabel="Lahore Customer Stories Carousel"
          >
            {/* Case Study 1: Khaas Pret & Apparel */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-7 shadow-xs">
              <div className="overflow-hidden rounded-xl border border-zinc-200/60 bg-zinc-100 aspect-video relative mb-4">
                <Image
                  src="/images/case-studies/khaas-apparel.webp"
                  alt="Khaas Pret & Apparel retail boutique counter on MM Alam Road, Lahore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 85vw, 400px"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                <span className="font-semibold text-[#167c70]">Apparel & Fashion Retail</span>
                <span>MM Alam Road, Lahore</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">
                Khaas Pret & Apparel
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 font-mono">
                [VERIFY: Unverified claims from archive: "cut peak checkout queues by 3.5x", "~4,500 active SKUs", "fast-growing"]
              </p>
              <p className="mt-2.5 text-sm leading-6 text-zinc-600 flex-1">
                Khaas Pret & Apparel on MM Alam Road replaced manual pricing and disconnected spreadsheets with Hulm POS to handle size/color variant matrices and FBR Tier-1 e-invoicing during peak shopping hours.
              </p>
              <div className="mt-5 pt-4 border-t border-[#E4E2DA]">
                <Link
                  href="/pos-case-studies/khaas-pret-apparel-pos-lahore/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26] transition-colors"
                >
                  Read full MM Alam Road story <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            {/* Case Study 2: Al-Madina Auto Parts */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 sm:p-7 shadow-xs">
              <div className="overflow-hidden rounded-xl border border-zinc-200/60 bg-zinc-100 aspect-video relative mb-4">
                <Image
                  src="/images/case-studies/al-madina-auto-parts.webp"
                  alt="Al-Madina Auto Parts wholesale and retail counter in Badami Bagh, Lahore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 85vw, 400px"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                <span className="font-semibold text-[#167c70]">Automotive Spare Parts</span>
                <span>Badami Bagh, Lahore</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">
                Al-Madina Auto Parts
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 font-mono">
                [VERIFY: Unverified metrics: "15 handwritten registers", "14,000+ OEM parts", "40+ mechanic accounts"]
              </p>
              <p className="mt-2.5 text-sm leading-6 text-zinc-600 flex-1">
                Located in Badami Bagh auto market, Al-Madina Auto Parts supplies engine parts, brake components, and lubricants, using Hulm POS to track vehicle compatibility, customer Khata ledgers, and multi-godown stock.
              </p>
              <div className="mt-5 pt-4 border-t border-[#E4E2DA]">
                <Link
                  href="/pos-case-studies/al-madina-auto-parts-pos-lahore/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26] transition-colors"
                >
                  Read full Badami Bagh story <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </MobileCarousel>

          <div className="mt-8 text-center">
            <Link
              href="/pos-case-studies/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2A26] hover:text-[#167c70] transition-colors"
            >
              See all customer stories across Pakistan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. COMPLIANCE SECTION: FBR & PRA */}
      <Section className="py-14 sm:py-18 bg-[#F7F6F2] border-b border-[#E4E2DA]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70] mb-2">
                <ShieldCheck className="h-4 w-4" /> Tax Compliance in Punjab
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
                FBR and PRA requirements for Lahore businesses
              </h2>

              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700">
                <p>
                  Businesses operating in Lahore face two distinct fiscal authorities depending on what they sell: the <strong>Federal Board of Revenue (FBR)</strong> for retail goods and merchandise, and the <strong>Punjab Revenue Authority (PRA)</strong> for taxable food services, hospitality, and salons.
                </p>

                <div className="rounded-xl border border-[#E4E2DA] bg-white p-4.5 shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#0F2A26] text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167c70]" /> Tier-1 Retailers Under FBR
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Tier-1 retailers—including stores in air-conditioned malls (e.g. Packages Mall, Emporium, Mall of Lahore), retail chains with multiple branches, and large commercial outlets—must link their POS to FBR. Invoices must print the official FBR invoice number and QR code in real time.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E4E2DA] bg-white p-4.5 shadow-2xs space-y-2">
                  <h3 className="font-bold text-[#0F2A26] text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167c70]" /> Punjab Revenue Authority (PRA) for Restaurants & Services
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Restaurants, cafes, caterers, and salons in Lahore collect Punjab Sales Tax on Services. Hulm POS invoices can be configured with your PRA registration details (PNTN) and applicable service tax percentages during onboarding.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-900 space-y-1">
                  <p className="font-bold">Multi-Branch FBR Declaration Rule:</p>
                  <p>
                    Businesses operating multiple outlets across Lahore (e.g. Gulberg, DHA, and Model Town) must declare each physical branch and assign unique POS terminal IDs on FBR&apos;s online portal before going live.
                  </p>
                </div>

                <p className="text-xs text-zinc-500 font-mono">
                  [VERIFY: FBR Licensed Vendor Registration ID & PRA Direct Fiscal API Certification status] · Last verified: {LAST_UPDATED_DATE}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                <Link
                  href="/fbr-integrated-pos-pakistan/"
                  className="inline-flex items-center gap-1.5 text-[#167c70] hover:text-[#0F2A26] underline"
                >
                  Learn about FBR POS integration <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://e.fbr.gov.pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-[#0F2A26]"
                >
                  Verify on FBR Portal <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Compliance Checklist Box */}
            <div className="rounded-2xl border border-[#E4E2DA] bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-[#0F2A26] mb-3">
                How to choose a compliant POS in Lahore
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mb-5">
                Checklist for Lahore business owners evaluating POS software for retail, restaurant, and wholesale operations:
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>FBR compliance:</strong> Ability to print FBR invoice number and verifiable QR code on receipts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>PRA provincial tax:</strong> Configurable service tax rates and PNTN display for food and hospitality.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>Multi-branch terminal support:</strong> Dedicated terminal IDs for each branch declared on tax portals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>Variant management:</strong> Matrix support for fashion sizes, colours, or vehicle fitment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>Wholesale credit (Khata):</strong> Integrated customer credit limits and statement sharing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>Cloud backup & accessibility:</strong> Remote sales visibility without depending on a single counter PC.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                  <span><strong>Support in Urdu:</strong> Reliable WhatsApp and phone guidance during peak business hours.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. PRICING TABLE (With Mobile Carousel) */}
      <Section id="pricing-section" className="py-14 sm:py-18 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Coins className="h-3.5 w-3.5" /> Transparent Pricing
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              How much does POS software cost in Lahore?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Clear subscription plans from confirmed repository pricing. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>

          <MobileCarousel
            gridClassName="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 max-w-6xl mx-auto"
            itemClassName="w-[85vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none"
            ariaLabel="Pricing Plans Carousel"
          >
            {/* Starter Plan */}
            <div className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-xs">
              <span className="text-xs font-semibold uppercase text-zinc-500">Starter</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2A26]">PKR 2,500</span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>
              <p className="mt-1 text-xs font-medium text-[#167c70]">1 User · 1 Branch</p>
              <p className="mt-3 text-xs text-zinc-600">Core POS billing, inventory management, customer records, and sales reports.</p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-600 flex-1">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> POS billing & cash control</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Basic inventory management</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Customer records & reports</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> FBR integration available</li>
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full h-10 rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold">
                  <a href={`${contactInfo.signupUrl}?plan=starter`} target="_blank" rel="noreferrer" data-track-location="lahore_pricing_starter">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="flex flex-col h-full rounded-2xl border-2 border-[#167c70] bg-white p-6 shadow-md relative">
              <div className="absolute -top-3 right-4 rounded-full bg-[#167c70] px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                Popular
              </div>
              <span className="text-xs font-semibold uppercase text-[#167c70]">Growth</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2A26]">PKR 5,500</span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>
              <p className="mt-1 text-xs font-medium text-[#167c70]">5 Users · 2 Branches</p>
              <p className="mt-3 text-xs text-zinc-600">Adds purchasing, vendor ledgers, CRM loyalty, and order management.</p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-600 flex-1">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Everything in Starter</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Customer CRM & loyalty</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Vendor & purchase orders</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Advanced reporting & WhatsApp help</li>
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full h-10 rounded-xl bg-[#167c70] hover:bg-[#0F2A26] text-white text-xs font-semibold">
                  <a href={`${contactInfo.signupUrl}?plan=growth`} target="_blank" rel="noreferrer" data-track-location="lahore_pricing_growth">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-xs">
              <span className="text-xs font-semibold uppercase text-zinc-500">Business</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2A26]">PKR 11,000</span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>
              <p className="mt-1 text-xs font-medium text-[#167c70]">10 Users · 5 Branches</p>
              <p className="mt-3 text-xs text-zinc-600">For multi-branch retail brands and restaurant chains needing full automation.</p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-600 flex-1">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Everything in Growth</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Multi-branch operational view</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Accounting dashboards</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> API integrations & automation</li>
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full h-10 rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold">
                  <a href={`${contactInfo.signupUrl}?plan=business`} target="_blank" rel="noreferrer" data-track-location="lahore_pricing_business">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-xs">
              <span className="text-xs font-semibold uppercase text-zinc-500">Enterprise</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2A26]">Custom</span>
                <span className="text-xs text-zinc-500">pricing</span>
              </div>
              <p className="mt-1 text-xs font-medium text-[#167c70]">Tailored Users & Branches</p>
              <p className="mt-3 text-xs text-zinc-600">Custom deployment scope, dedicated account management, and SLA options.</p>
              <ul className="mt-4 space-y-2 text-xs text-zinc-600 flex-1">
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Custom deployment scope</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Dedicated account manager</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Service-level agreement options</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#167c70]" /> Rollout planning with Hulm team</li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full h-10 rounded-xl border-[#167c70] text-[#167c70] hover:bg-[#167c70]/10 text-xs font-semibold">
                  <a href="#demo-form-section">
                    Book a Custom Demo
                  </a>
                </Button>
              </div>
            </div>
          </MobileCarousel>

          {/* Pricing Exclusions & Cloud vs Custom Comparison */}
          <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-[#E4E2DA] bg-white p-5 text-xs text-zinc-600 space-y-2">
            <p>
              <strong>Pricing Notice:</strong> Listed prices represent monthly software subscriptions. Applicable federal/provincial taxes and physical POS hardware (thermal receipt printers, barcode scanners, cash drawers) are sold separately. Add-on users are PKR 300/mo and additional branches are PKR 700/mo.
            </p>
            <p>
              <strong>Cloud POS vs. Custom-Built Desktop Software:</strong> Many Lahore businesses previously invested heavily in custom-built desktop POS software from local software houses, only to face database corruption when electricity fluctuates, locked proprietary code, and high maintenance bills for simple tax updates. Hulm POS provides continuous cloud updates, real-time offsite data protection, multi-device access, and predictable operational costs.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. TRADE WORKFLOWS (With Mobile Carousel) */}
      <Section className="py-14 sm:py-18 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Layers className="h-3.5 w-3.5" /> Industry Solutions
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              POS for clothing, electronics, restaurants, pharmacies and auto parts
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Tailored counter workflows built around the specific inventory and billing demands of Lahore&apos;s primary commercial trades.
            </p>
          </div>

          <MobileCarousel
            gridClassName="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
            itemClassName="w-[85vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none"
            ariaLabel="Industry Trade Workflows Carousel"
          >
            {/* 1. Clothing & Pret */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 shadow-xs hover:border-[#167c70]/40 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Tag className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Clothing, Pret & Footwear</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 flex-1 leading-relaxed">
                Multi-tier size/color variant matrix, seasonal markdown discount codes, fast barcode checkout, and instant customer exchange processing for boutiques and multi-branch retail brands in Gulberg and DHA.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E4E2DA]/80">
                <Link
                  href="/industries/clothing-store/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26]"
                >
                  Clothing store POS in Lahore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>

            {/* 2. Electronics & Mobile */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 shadow-xs hover:border-[#167c70]/40 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Monitor className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Electronics & Mobile Shops</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 flex-1 leading-relaxed">
                Serialized inventory tracking, IMEI scanning, and invoice-linked warranty records for computer hardware stores, mobile retailers, and appliance showrooms in Hafeez Centre and Hall Road.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E4E2DA]/80">
                <Link
                  href="/industries/electric-store/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26]"
                >
                  Electronics store POS in Lahore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>

            {/* 3. Restaurants & Cafes */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 shadow-xs hover:border-[#167c70]/40 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Utensils className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Restaurants & Cafes</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 flex-1 leading-relaxed">
                Dine-in table orders, takeaway and delivery billing, kitchen display tickets (KDS), ingredient tracking, and PRA provincial sales tax configuration for restaurants on MM Alam Road and DHA Raya.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E4E2DA]/80">
                <Link
                  href="/industries/restaurant-pos/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26]"
                >
                  Restaurant POS in Lahore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>

            {/* 4. Pharmacies & Bakeries */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 shadow-xs hover:border-[#167c70]/40 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <PackageCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Pharmacies & Bakeries</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 flex-1 leading-relaxed">
                Batch number and expiry date tracking for pharmaceutical medicines, advance custom cake ordering for bakeries, and high-speed barcode checkout to prevent counter queues during evening rush hours.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E4E2DA]/80">
                <Link
                  href="/industries/pharmacy-store/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26]"
                >
                  Pharmacy POS in Lahore <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>

            {/* 5. Auto Parts & Hardware */}
            <article className="flex flex-col h-full rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-6 shadow-xs hover:border-[#167c70]/40 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167c70]/10 text-[#167c70] mb-4">
                <Boxes className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2A26]">Auto Parts & Hardware Wholesale</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 flex-1 leading-relaxed">
                OEM cross-reference indexing, vehicle make/model compatibility lookups, multi-godown stock management, and customer Khata ledgers with WhatsApp balance statements for Badami Bagh distributors.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E4E2DA]/80">
                <Link
                  href="/customer-management/"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#167c70] hover:text-[#0F2A26]"
                >
                  Khata & wholesale module <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          </MobileCarousel>
        </Container>
      </Section>

      {/* 7. REMOTE ONBOARDING STEPS */}
      <Section className="py-14 sm:py-18 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <Clock className="h-3.5 w-3.5" /> 4-Step Deployment
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              How setup works (remote)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Hulm provides full remote onboarding from our Karachi headquarters so Lahore businesses launch without counter downtime.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white mb-3">1</span>
              <h3 className="font-bold text-[#0F2A26] text-sm">Consultation & Demo</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Walk through your Lahore counter workflow, products, and staff roles on a live video call or WhatsApp session.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white mb-3">2</span>
              <h3 className="font-bold text-[#0F2A26] text-sm">Catalogue Import</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Share your inventory in Excel (.xlsx) or CSV format. Our technical team formats your barcodes, categories, and opening stock.
              </p>
              <p className="mt-2 text-[10px] text-zinc-400 font-mono">[VERIFY: Download Hulm POS Excel Template .xlsx]</p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white mb-3">3</span>
              <h3 className="font-bold text-[#0F2A26] text-sm">Tax & Hardware Link</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Connect your 80mm thermal receipt printer, barcode scanner, and configure FBR Tier-1 e-invoicing or PRA service tax settings.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-2xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#167c70] text-xs font-bold text-white mb-3">4</span>
              <h3 className="font-bold text-[#0F2A26] text-sm">Training & Go-Live</h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Train your cashiers in Urdu, test barcode scanning, and go live with continuous WhatsApp support from our team.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. AREAS WE SERVE IN LAHORE */}
      <Section className="py-14 sm:py-18 bg-[#FAF9F5] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <MapPin className="h-3.5 w-3.5" /> Service Coverage
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              Areas we serve in Lahore
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Commercial markets and retail clusters across Lahore where Hulm provides remote POS setup, data migration, and training.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2">
            {lahoreAreas.map((area, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-[#E4E2DA] bg-white p-4 shadow-2xs">
                <MapPin className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F2A26]">{area.market}</h3>
                  <p className="text-xs text-zinc-600 mt-0.5">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-4xl text-center">
            <p className="text-xs text-zinc-500">
              Note: Explicitly listed as geographical service coverage areas. Hulm Solutions is based in Karachi and serves businesses across all Lahore zones remotely.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. FAQ ACCORDION (Server Rendered HTML) */}
      <Section className="py-14 sm:py-18 bg-white border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              FAQs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Direct, transparent answers regarding POS software costs, FBR and PRA compliance, multi-branch operations, and remote setup in Lahore.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FaqDetails items={lahoreFaqs} />
          </div>
        </Container>
      </Section>

      {/* 10. LEAD CAPTURE: DEMO FORM */}
      <Section id="demo-form-section" className="py-14 sm:py-18 bg-[#F7F6F2] border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-xl">
            <LahoreDemoForm />
          </div>
        </Container>
      </Section>

      {/* 11. FINAL CTA BAND & EDITORIAL BYLINE */}
      <section className="bg-[#0F2A26] text-white py-14 sm:py-18 relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Launch Your Store on Hulm POS</span>
          </div>

          <h3 className="mx-auto max-w-2xl text-2xl font-bold sm:text-3xl lg:text-4xl text-white">
            Run your Lahore retail store or restaurant on a modern cloud POS
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-zinc-300">
            Start a 14-day free trial without a credit card, or connect with our Karachi product team on WhatsApp for a personalized demo walkthrough of Hulm POS in Lahore.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#167c70] hover:bg-[#126359] text-white px-7 h-12 text-sm font-semibold shadow-md"
            >
              <a
                href={contactInfo.signupUrl}
                target="_blank"
                rel="noreferrer"
                data-track-location="lahore_final_cta"
              >
                Start 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white hover:bg-zinc-100 text-[#0F2A26] px-7 h-12 text-sm font-semibold shadow-sm transition-all"
            >
              <a
                href={whatsappUrl("Hi Hulm, I want to discuss POS software for my store in Lahore.")}
                target="_blank"
                rel="noreferrer"
                data-track-location="lahore_final_cta"
              >
                <WhatsAppIcon size={18} className="mr-2 text-[#25D366]" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Cross-City Links & Related Guides */}
          <div className="mx-auto mt-12 max-w-3xl pt-8 border-t border-white/15 text-xs text-zinc-400">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <span className="text-zinc-300 font-semibold">Other Cities:</span>
              <Link href="/pos-software-karachi/" className="hover:text-white underline">
                POS software in Karachi
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/pos-software-islamabad/" className="hover:text-white underline">
                POS software in Islamabad & Rawalpindi
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/pricing/" className="hover:text-white underline">
                POS price in Pakistan
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/fbr-integrated-pos-pakistan/" className="hover:text-white underline">
                FBR integrated POS
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <span className="text-zinc-300 font-semibold">Related Guides:</span>
              <Link href="/blog/manage-multiple-retail-branches/" className="hover:text-white underline">
                Manage multiple retail branches
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/blog/switch-pos-software-without-losing-data/" className="hover:text-white underline">
                Switch POS without losing data
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/blog/cloud-pos-vs-desktop-pos/" className="hover:text-white underline">
                Cloud POS vs Desktop POS
              </Link>
            </div>

            {/* Editorial Byline */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap justify-center items-center gap-2 text-[11px] text-zinc-400">
              <span>Reviewed by [VERIFY: Technical Product Lead, Hulm Solutions]</span>
              <span>·</span>
              <span>Last updated: {LAST_UPDATED_DATE}</span>
              <span>·</span>
              <Link href="/editorial-policy/" className="underline hover:text-white">
                Editorial Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden items-center justify-between gap-2 border-t border-[#E4E2DA] bg-white/95 backdrop-blur-md px-3 py-2 shadow-lg">
        <a
          href={contactInfo.signupUrl}
          target="_blank"
          rel="noreferrer"
          data-track-location="lahore_sticky_mobile"
          className="flex-1 flex items-center justify-center h-11 rounded-xl bg-[#0F2A26] text-white text-xs font-bold shadow-xs active:scale-98 transition-all min-h-[44px]"
        >
          Start 14-Day Free Trial
        </a>
        <a
          href={whatsappUrl("Hi Hulm, I am in Lahore and want to know more about Hulm POS.")}
          target="_blank"
          rel="noreferrer"
          data-track-location="lahore_sticky_mobile"
          className="flex items-center justify-center h-11 w-11 rounded-xl border border-[#167c70] text-[#167c70] active:scale-98 transition-all shrink-0 min-h-[44px] min-w-[44px]"
          aria-label="Contact Hulm POS on WhatsApp"
        >
          <WhatsAppIcon size={20} />
        </a>
      </div>
    </div>
  );
}
