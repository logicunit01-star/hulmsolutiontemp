"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Coffee,
  Coins,
  CupSoda,
  ExternalLink,
  FileSpreadsheet,
  HelpCircle,
  Layers,
  LayoutDashboard,
  Mail,
  Phone,
  Play,
  Printer,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Store,
  Tags,
  TrendingUp,
  Users,
  Utensils,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import { FaqDetails, type FaqDetailsItem } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TrustedBy } from "@/components/home/trusted-by";
import { DashboardCarousel } from "@/components/home/DashboardCarousel";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { homeContent } from "@content/pages/home";
import { cityLinks } from "@/content/pages/citySeo";
import { industryLinks, linksExcept } from "@/lib/seo/site-links";
import { pageJsonLd, softwareNode } from "@/lib/seo/page-seo";

const relatedProducts = [
  { label: "Inventory management", href: "/inventory-management/" },
  { label: "Customer management", href: "/customer-management/" },
  { label: "Purchase orders", href: "/purchase-orders/" },
  { label: "Reporting module", href: "/reporting-module/" },
  { label: "Mobile POS", href: "/mobile-pos/" },
  { label: "FBR integration", href: "/fbr-integrated-pos-pakistan/" },
  { label: "Pricing plans", href: "/pricing/" },
];

const customerProblems = [
  {
    number: "01",
    badge: "Morning Rush & Queues",
    title: "Slow Billing During Busy Hours",
    problem:
      "It's morning, and your cafe is getting busy. Customers are ordering cappuccinos, lattes, americanos and sandwiches. Your cashier is searching through a product list, calculating totals and writing bills manually. Customers are waiting, and your staff is struggling to keep up.",
    solution:
      "HulmPOS provides a digital POS billing interface where your cashier can select products, add items to a transaction and process sales. Organize your product catalogue and categories so your team can find frequently sold products more easily.",
    benefit: "More organized billing, accurate transaction records and less dependence on manual calculations.",
    image: "/images/problems/cafe-morning-rush.jpg",
    imageAlt: "Slow billing during busy morning rush in coffee shop",
    icon: Clock,
  },
  {
    number: "02",
    badge: "Ingredient Shortages",
    title: "Losing Track of Coffee Shop Inventory",
    problem:
      "You purchased coffee beans, milk, sugar, syrups, cups and bakery products. A few days later, you discover that some essential items are running low. Your stock register is outdated, and you don't know exactly what is available.",
    solution:
      "Use HulmPOS inventory management to maintain digital product and stock records. Manage quantities, record stock movements and review available inventory information. You can also maintain supplier and purchasing records to organize replenishment.",
    benefit: "Better stock visibility and more organized inventory management.",
    image: "/images/problems/cafe-ingredient-depletion.jpg",
    imageAlt: "Untracked coffee shop ingredients and bakery stock",
    icon: Boxes,
  },
  {
    number: "03",
    badge: "Revenue vs Profit",
    title: "You Know Your Sales but Not Your Business Performance",
    problem:
      "Your cafe generated PKR 40,000 in sales today. But how much did you actually earn? You still need to consider purchases, rent, salaries, utilities and other operating costs. Sales revenue is not the same as profit.",
    solution:
      "HulmPOS provides sales reports and transaction records that help you understand your daily business activity. Review sales history, monitor product performance and maintain organized purchasing and inventory information. Use this information to make better business decisions.",
    benefit: "Better visibility into your sales and business operations.",
    image: "/images/problems/cafe-shift-sales-audit.jpg",
    imageAlt: "Cafe sales reports and business performance audit",
    icon: TrendingUp,
  },
  {
    number: "04",
    badge: "Drawer Discrepancies",
    title: "Cash Drawer Doesn't Match Your Sales",
    problem:
      "Your cashier closes the shift. The sales report shows PKR 30,000, but the cash drawer contains PKR 29,500. Where did the difference come from? Without organized cash handling, investigating discrepancies becomes difficult.",
    solution:
      "HulmPOS supports shift-based cash management. At the beginning of a shift, record the opening cash amount. Process transactions through the POS and maintain digital sales records. At closing time, review recorded sales and cash activity to support reconciliation.",
    benefit: "More organized shifts and improved cash accountability.",
    image: "/images/problems/cafe-drink-order-error.jpg",
    imageAlt: "Cash drawer reconciliation and shift sales balance",
    icon: Coins,
  },
  {
    number: "05",
    badge: "Multi-Location Blindspots",
    title: "Managing Multiple Cafe Branches Is Difficult",
    problem:
      "You operate three coffee shops. Every branch has separate employees, stock records and sales information. You have to call managers and request WhatsApp updates just to understand how the business is performing.",
    solution:
      "HulmPOS provides cloud-based multi-branch management capabilities. Manage supported locations through one connected platform and review branch sales and operational information. Choose a subscription according to your required number of users and branches.",
    benefit: "Better visibility and more organized management across locations.",
    image: null,
    imageAlt: "Multi-branch cafe management",
    icon: Building2,
  },
  {
    number: "06",
    badge: "Disconnected Records",
    title: "Customer Information Is Scattered Everywhere",
    problem:
      "Your regular customers visit your cafe frequently, but their information is stored in notebooks, phones and different applications. You don't have one organized place to maintain customer records.",
    solution:
      "HulmPOS provides customer management functionality to maintain customer profiles and purchase information. Available CRM and loyalty capabilities can help you organize customer relationships and encourage repeat business.",
    benefit: "Better organized customer records and customer management.",
    image: null,
    imageAlt: "Customer profiles and loyalty records",
    icon: Users,
  },
];

interface CafeModule {
  number: string;
  badge: string;
  shortLabel: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  microUi: {
    leftLabel: string;
    rightLabel: string;
    isPulse?: boolean;
  };
  chips: string[];
  footerHighlight: string;
  footerStatus: string;
}

const cafeModules: CafeModule[] = [
  {
    number: "01",
    badge: "Counter Checkout",
    shortLabel: "Billing",
    title: "Fast & Organized POS Billing",
    tagline:
      "Process everyday cafe transactions through a digital POS interface. Select products, add items, and process sales with zero math delays.",
    icon: Receipt,
    microUi: {
      leftLabel: "Register 01 · Counter",
      rightLabel: "0.8s Checkout",
      isPulse: true,
    },
    chips: [
      "Select products from catalogue",
      "Add multiple products to transactions",
      "Instant total calculations",
      "Digital transaction records",
      "Sales history review",
      "Cash & card transaction management",
    ],
    footerHighlight: "6 billing tools",
    footerStatus: "Live in Starter",
  },
  {
    number: "02",
    badge: "Menu & Categories",
    shortLabel: "Menu",
    title: "Menu & Product Management",
    tagline:
      "Your coffee shop may sell dozens of different products. Organize your entire drink, beverage, and food catalogue with categories and prices.",
    icon: Tags,
    microUi: {
      leftLabel: "Menu · 3 Categories",
      rightLabel: "18 Live Items",
      isPulse: false,
    },
    chips: [
      "Espresso, lattes & iced coffee",
      "Karak chai, green & black tea",
      "Fresh juices & hot chocolate",
      "Sandwiches & croissants",
      "Bakery cakes & pastries",
      "Manage categories & prices",
    ],
    footerHighlight: "Full menu catalogue",
    footerStatus: "Category Ready",
  },
  {
    number: "03",
    badge: "Stock Control",
    shortLabel: "Inventory",
    title: "Inventory & Stock Management",
    tagline:
      "Maintain better control over your cafe's inventory. Keep digital records of coffee beans, dairy, packaged drinks, and bakery items.",
    icon: Boxes,
    microUi: {
      leftLabel: "Arabica Roast Beans",
      rightLabel: "14.5 kg · In Stock",
      isPulse: false,
    },
    chips: [
      "Manage accurate product quantities",
      "Record stock movements across stores",
      "Real-time available inventory",
      "Coffee beans & dairy records",
      "Packaged drinks & bakery stock",
      "No handwritten stock registers",
    ],
    footerHighlight: "6 stock controls",
    footerStatus: "Live Inventory Sync",
  },
  {
    number: "04",
    badge: "Procurement",
    shortLabel: "Purchasing",
    title: "Purchase & Supplier Management",
    tagline:
      "Your cafe purchases products from different suppliers. Organize supplier information, purchases and purchase orders through purchasing workflows.",
    icon: FileSpreadsheet,
    microUi: {
      leftLabel: "PO #1042 → Dairy Supplier",
      rightLabel: "GRN Verified",
      isPulse: false,
    },
    chips: [
      "Organize supplier information",
      "Digital purchase orders (PO)",
      "Stock replenishment workflows",
      "Goods received verification",
      "Track supplier purchases",
      "Organized inventory replenishment",
    ],
    footerHighlight: "Supplier workflows",
    footerStatus: "Procurement Ready",
  },
  {
    number: "05",
    badge: "CRM & Retention",
    shortLabel: "Loyalty",
    title: "Customer Management & Loyalty",
    tagline:
      "Build better customer relationships. Maintain customer profiles and purchase information through HulmPOS to support repeat business.",
    icon: Users,
    microUi: {
      leftLabel: "Customer: Sarah (Regular)",
      rightLabel: "Fav: Caramel Latte",
      isPulse: true,
    },
    chips: [
      "Maintain customer profiles",
      "Purchase history information",
      "Available CRM capabilities",
      "Customer loyalty programs",
      "Organize customer engagement",
      "Encourage repeat cafe visits",
    ],
    footerHighlight: "CRM & loyalty tools",
    footerStatus: "Loyalty Active",
  },
  {
    number: "06",
    badge: "Business Insights",
    shortLabel: "Reports",
    title: "Sales Reports & Business Insights",
    tagline:
      "Understand what is happening in your cafe. Review daily sales, transaction history and available business reports to make informed decisions.",
    icon: BarChart3,
    microUi: {
      leftLabel: "Today's Cafe Revenue",
      rightLabel: "PKR 42,500 · Active",
      isPulse: false,
    },
    chips: [
      "Review daily sales reports",
      "Transaction history audits",
      "Monitor sales activity",
      "Top-selling beverage performance",
      "Peak morning rush trends",
      "Make better business decisions",
    ],
    footerHighlight: "Actionable reports",
    footerStatus: "Real-Time Data",
  },
  {
    number: "07",
    badge: "Cloud Access",
    shortLabel: "Cloud POS",
    title: "Cloud-Based POS Software",
    tagline:
      "Your business information should not depend on one computer. Access supported business information through connected devices with internet.",
    icon: Layers,
    microUi: {
      leftLabel: "Cloud Sync · Encrypted",
      rightLabel: "Multi-Device Live",
      isPulse: true,
    },
    chips: [
      "Browser, tablet & phone access",
      "Monitor beyond checkout counter",
      "Automatic secure cloud backup",
      "No single computer dependency",
      "No collection of spreadsheets",
      "Secure HTTPS connection",
    ],
    footerHighlight: "Cloud accessibility",
    footerStatus: "Cloud Connected",
  },
  {
    number: "08",
    badge: "Chain Operations",
    shortLabel: "Branches",
    title: "Multi-Branch Cafe Management",
    tagline:
      "Planning to expand your cafe business? Manage supported locations through one connected platform with centralized branch information.",
    icon: Building2,
    microUi: {
      leftLabel: "F-7 Islamabad & DHA Lahore",
      rightLabel: "All Locations Live",
      isPulse: false,
    },
    chips: [
      "Multi-branch management",
      "One connected platform",
      "Review branch sales info",
      "Review operational information",
      "Choose user & branch capacity",
      "Synchronized menu & pricing",
    ],
    footerHighlight: "Multi-branch control",
    footerStatus: "Multi-Location",
  },
];

const menuShowcaseCategories = [
  {
    id: "coffee",
    name: "Coffee",
    icon: Coffee,
    badge: "7 Brewed & Espresso Drinks",
    description: "Espresso, lattes, cold coffees and signature brewed drinks configured with cup sizes and dairy options.",
    items: [
      { name: "Espresso", detail: "Single or double concentrated shot", price: "PKR 350", tag: "Signature" },
      { name: "Americano", detail: "Espresso diluted with hot or cold water", price: "PKR 420", tag: "Classic" },
      { name: "Cappuccino", detail: "Equal parts espresso, steamed milk & foam", price: "PKR 480", tag: "Popular" },
      { name: "Latte", detail: "Smooth espresso with silky steamed milk", price: "PKR 520", tag: "Custom Dairy" },
      { name: "Mocha", detail: "Espresso, rich cocoa & steamed milk", price: "PKR 560", tag: "Sweet" },
      { name: "Iced coffee", detail: "Chilled brewed coffee over fresh ice", price: "PKR 490", tag: "Chilled" },
      { name: "Cold coffee", detail: "Creamy blended cold coffee specialty", price: "PKR 540", tag: "Top Seller" },
    ],
  },
  {
    id: "tea",
    name: "Tea and Other Drinks",
    icon: CupSoda,
    badge: "5 Teas & Specialty Drinks",
    description: "Traditional karak chai, green & black teas, rich hot chocolate, and freshly squeezed juices.",
    items: [
      { name: "Green tea", detail: "Aromatic jasmine & soothing mint leaves", price: "PKR 250", tag: "Herbal" },
      { name: "Black tea", detail: "Classic steeped black tea blend", price: "PKR 260", tag: "Warm" },
      { name: "Karak chai", detail: "Strong cardamom-spiced milk chai", price: "PKR 180", tag: "Best Seller" },
      { name: "Hot chocolate", detail: "Velvety melted dark cocoa with milk", price: "PKR 520", tag: "Comfort" },
      { name: "Fresh juices", detail: "Freshly squeezed seasonal fruit blends", price: "PKR 450", tag: "Cold & Fresh" },
    ],
  },
  {
    id: "food",
    name: "Food and Snacks",
    icon: Utensils,
    badge: "6 Bakery, Snacks & Meals",
    description: "Freshly baked bakery goods, pastries, toasted cafe sandwiches and quick-serve savory items.",
    items: [
      { name: "Sandwiches", detail: "Artisan grilled chicken & cheese panini", price: "PKR 650", tag: "Savory" },
      { name: "Croissants", detail: "Flaky butter, almond & chocolate layers", price: "PKR 380", tag: "Bakery" },
      { name: "Burgers", detail: "Gourmet cafe burgers with fresh sides", price: "PKR 750", tag: "Meal" },
      { name: "Cakes", detail: "Red velvet, lotus, and dark fudge slices", price: "PKR 550", tag: "Dessert" },
      { name: "Cookies", detail: "Double chocolate chunk & baked oat cookies", price: "PKR 220", tag: "Quick Bite" },
      { name: "Pastries", detail: "Daily fresh cream horns, puffs & tarts", price: "PKR 320", tag: "Sweet" },
    ],
  },
];

const businessTypes = [
  {
    title: "Coffee Shops",
    badge: "Counter & Takeaway",
    description:
      "Manage coffee sales, product records, inventory, customers and daily reporting through one coffee shop POS system.",
    icon: Coffee,
    highlight: "0.8s Fast counter billing & receipts",
  },
  {
    title: "Specialty Coffee Shops",
    badge: "Single-Origin & Manual Brew",
    description:
      "Organize specialty coffee products, single-origin beans, prices, transactions and inventory records.",
    icon: Sparkles,
    highlight: "Bean gram deductions & custom modifiers",
  },
  {
    title: "Small Cafes",
    badge: "Neighborhood & Kiosk",
    description:
      "Replace manual billing and spreadsheets with an affordable cafe POS system designed for lean teams.",
    icon: Store,
    highlight: "PKR 2,500/mo Starter plan ready",
  },
  {
    title: "Bakery Cafes",
    badge: "Fresh Pastries & Coffee",
    description:
      "Manage coffee sales, fresh bakery products, inventory and daily transactions through a connected platform.",
    icon: UtensilsCrossed,
    highlight: "Daily baked stock & batch depletion",
  },
  {
    title: "Tea Shops and Chai Cafes",
    badge: "Chai & Beverage Bar",
    description:
      "Organize tea products, snacks, billing and inventory while maintaining digital sales records.",
    icon: CupSoda,
    highlight: "Fast-key orders for karak chai & snacks",
  },
  {
    title: "Restaurant Cafes",
    badge: "Dine-In & Kitchen Board",
    description:
      "Manage everyday sales and use the relevant restaurant POS workflows available through HulmPOS.",
    icon: Utensils,
    highlight: "Kitchen ticket routing & table management",
  },
  {
    title: "Multi-Branch Coffee Shop Chains",
    badge: "Centralized Franchises",
    description:
      "Manage supported locations through centralized cloud-based business management and branch audits.",
    icon: Building2,
    highlight: "Consolidated multi-branch analytics",
  },
  {
    title: "Custom Cafe Concepts",
    badge: "Tailored Deployment",
    description:
      "Running a dessert lounge, drive-thru, kiosk or food truck? HulmPOS adapts to your drink menus, staff roles, and station printers.",
    icon: Zap,
    highlight: "Custom counters & station routing",
    isCtaCard: true,
  },
];

const comparisonRows = [
  { need: "Digital billing", help: "POS billing and sales management" },
  { need: "Product organization", help: "Product catalogue and categories" },
  { need: "Stock visibility", help: "Inventory management" },
  { need: "Purchasing records", help: "Purchase orders and supplier management" },
  { need: "Customer information", help: "Customer management" },
  { need: "Customer engagement", help: "Available CRM and loyalty features" },
  { need: "Sales visibility", help: "Sales reports" },
  { need: "Employee operations", help: "User and access management" },
  { need: "Multiple locations", help: "Multi-branch management" },
  { need: "Business accessibility", help: "Cloud-based POS platform" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "PKR 2,500",
    cadence: "/ month",
    badge: "Small Cafe",
    highlight: true,
    tagline: "Suitable for a small cafe or coffee shop.",
    features: [
      "1 user account",
      "1 cafe branch",
      "POS billing interface",
      "Cash management & shifts",
      "Basic inventory tracking",
      "Customer records",
      "Daily sales reports",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "https://app.hulmsolutions.com/Register",
  },
  {
    name: "Growth",
    price: "PKR 5,500",
    cadence: "/ month",
    badge: "Growing Cafe",
    highlight: false,
    tagline: "For growing cafes that need additional users and branch capacity.",
    features: [
      "5 user accounts",
      "2 cafe branches",
      "POS and inventory management",
      "Purchasing workflows & suppliers",
      "Customer CRM & loyalty",
      "Additional management capabilities",
      "Advanced reporting & exports",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "https://app.hulmsolutions.com/Register",
  },
  {
    name: "Business",
    price: "PKR 11,000",
    cadence: "/ month",
    badge: "Established Chain",
    highlight: false,
    tagline: "For established businesses managing multiple locations.",
    features: [
      "10 user accounts",
      "5 cafe branches",
      "Advanced business management capabilities",
      "Multi-branch operations & sync",
      "Additional management workflows",
      "Priority customer support",
      "Consolidated chain analytics",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "https://app.hulmsolutions.com/Register",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "pricing",
    badge: "Large Chain",
    highlight: false,
    tagline: "For larger cafe chains and businesses with specific requirements.",
    features: [
      "Custom user seats",
      "Unlimited branches",
      "Custom integration support",
      "Dedicated onboarding manager",
      "Tailored restaurant workflows",
      "SLA & priority account support",
    ],
    ctaText: "Contact Our Team",
    ctaLink: "/contact/",
  },
];

const buyersGuideFactors = [
  {
    number: "01",
    title: "Easy-to-Use Billing",
    description:
      "Your cashier should be able to find products, process transactions and manage sales without unnecessary complications.",
    icon: Receipt,
  },
  {
    number: "02",
    title: "Product and Menu Management",
    description:
      "Choose software that allows you to organize coffee, drinks, food and other products cleanly by categories and modifiers.",
    icon: Tags,
  },
  {
    number: "03",
    title: "Inventory Management",
    description:
      "You need digital stock records to understand what is available and what needs replenishment before items run out.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Sales Reporting",
    description:
      "Your POS should help you review daily transactions, hourly rush periods and understand actual business sales performance.",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Supplier and Purchasing Management",
    description:
      "Look for software that helps organize supplier information, purchase orders and replenishment activities smoothly.",
    icon: FileSpreadsheet,
  },
  {
    number: "06",
    title: "Multi-Branch Support",
    description:
      "If you plan to expand, make sure your POS system can support additional locations, centralized pricing and employees.",
    icon: Building2,
  },
  {
    number: "07",
    title: "Affordable Subscription",
    description:
      "Compare monthly costs, user limits, branch capacity and included features before making a decision.",
    icon: Coins,
  },
];

const cafeFaqItems: FaqDetailsItem[] = [
  {
    q: "What is the best POS system for a coffee shop?",
    a: "The best POS system for a coffee shop should support billing, sales, product management, inventory, purchasing, customers and business reporting. HulmPOS is a practical option for businesses looking for affordable cloud-based coffee shop POS software with connected business management features.",
  },
  {
    q: "What is the best POS system for a cafe?",
    a: "The best cafe POS system depends on your business size, number of employees, branches and operational requirements. HulmPOS provides digital billing, inventory management, customer records, purchasing and sales reporting, with subscriptions starting at PKR 2,500 per month.",
  },
  {
    q: "What is coffee shop POS software?",
    a: "Coffee shop POS software is a digital platform used to process customer sales, manage products, record transactions and maintain business information. More comprehensive systems also provide inventory, customer and reporting functionality.",
  },
  {
    q: "What is the difference between a cafe POS and a regular POS?",
    a: "A cafe POS system is designed to support cafe and coffee shop operations. A general POS system may serve multiple industries. The right choice depends on the product, inventory, billing and management workflows your business requires.",
  },
  {
    q: "How much does a coffee shop POS system cost?",
    a: "The price depends on the software features, number of users and supported locations. HulmPOS starts at PKR 2,500 per month for one user and one branch. Growth costs PKR 5,500 per month, while Business costs PKR 11,000 per month.",
  },
  {
    q: "Can I use HulmPOS for a small cafe?",
    a: "Yes. HulmPOS offers a Starter subscription designed for small businesses with one user and one branch. It includes POS billing, cash management, basic inventory, customer records and sales reports.",
  },
  {
    q: "Can a coffee shop POS system manage inventory?",
    a: "Yes. HulmPOS includes inventory management to help coffee shop owners maintain product quantities and stock records. Purchasing and supplier workflows also help organize replenishment activities.",
  },
  {
    q: "Can I manage multiple cafe branches with HulmPOS?",
    a: "Yes. HulmPOS supports multi-branch management. The Growth plan supports two branches, while the Business plan supports five branches. Enterprise options are available for larger operations.",
  },
  {
    q: "Does HulmPOS provide daily sales reports?",
    a: "Yes. HulmPOS provides sales reports and transaction records that help cafe owners review business activity and monitor sales performance.",
  },
  {
    q: "Can I manage customers through a cafe POS system?",
    a: "Yes. HulmPOS includes customer management functionality for maintaining customer profiles and purchase information. CRM and loyalty capabilities are available through applicable subscription plans.",
  },
  {
    q: "Is HulmPOS cloud-based?",
    a: "Yes. HulmPOS is a cloud-based POS platform. Businesses can access supported business information through connected devices and locations using an internet connection.",
  },
  {
    q: "Does HulmPOS support FBR integration for cafes in Pakistan?",
    a: "HulmPOS provides FBR integration for eligible businesses in Pakistan. Requirements and configuration depend on your business and applicable FBR regulations. Contact the HulmPOS team to confirm your setup.",
  },
  {
    q: "Is there a free trial of HulmPOS?",
    a: "Yes. HulmPOS offers a 14-day free trial so you can explore its features before selecting a subscription. No credit card is required at signup.",
  },
];

export function CafePageContent() {
  const [activeMenuTab, setActiveMenuTab] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const [activePricingIndex, setActivePricingIndex] = useState(0);

  const featuresTrackRef = useRef<HTMLDivElement>(null);
  const featurePillsRef = useRef<HTMLDivElement>(null);
  const problemsTrackRef = useRef<HTMLDivElement>(null);
  const pricingTrackRef = useRef<HTMLDivElement>(null);

  const scrollToFeature = (index: number) => {
    if (index < 0 || index >= cafeModules.length) return;
    setActiveFeatureIndex(index);
    if (featuresTrackRef.current) {
      const container = featuresTrackRef.current;
      const cardEl = container.children[index] as HTMLElement | undefined;
      if (cardEl) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (cardRect.left - containerRect.left) -
          (container.clientWidth / 2) +
          (cardEl.clientWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  };

  const handleFeatureScroll = () => {
    if (!featuresTrackRef.current) return;
    const container = featuresTrackRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeFeatureIndex) {
      setActiveFeatureIndex(closestIndex);
      if (featurePillsRef.current) {
        const activePill = featurePillsRef.current.children[closestIndex] as HTMLElement | undefined;
        if (activePill) {
          activePill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    }
  };

  const scrollToProblem = (index: number) => {
    if (index < 0 || index >= customerProblems.length) return;
    setActiveProblemIndex(index);
    if (problemsTrackRef.current) {
      const container = problemsTrackRef.current;
      const cardEl = container.children[index] as HTMLElement | undefined;
      if (cardEl) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (cardRect.left - containerRect.left) -
          (container.clientWidth / 2) +
          (cardEl.clientWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  };

  const handleProblemScroll = () => {
    if (!problemsTrackRef.current) return;
    const container = problemsTrackRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeProblemIndex) {
      setActiveProblemIndex(closestIndex);
    }
  };

  const scrollToPricing = (index: number) => {
    if (index < 0 || index >= pricingPlans.length) return;
    setActivePricingIndex(index);
    if (pricingTrackRef.current) {
      const container = pricingTrackRef.current;
      const cardEl = container.children[index] as HTMLElement | undefined;
      if (cardEl) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();
        const targetScrollLeft =
          container.scrollLeft +
          (cardRect.left - containerRect.left) -
          (container.clientWidth / 2) +
          (cardEl.clientWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  };

  const handlePricingScroll = () => {
    if (!pricingTrackRef.current) return;
    const container = pricingTrackRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activePricingIndex) {
      setActivePricingIndex(closestIndex);
    }
  };

  const route = "/industries/cafe/";
  const schema = pageJsonLd({
    route,
    crumbs: [
      { name: "Industries", path: "/industries/" },
      { name: "Cafe & Coffee Shop POS", path: route },
    ],
    node: softwareNode(
      "Hulm Cafe & Coffee Shop POS",
      "Manage cafe sales, billing, inventory and customers with HulmPOS. Run your coffee shop more efficiently with one cloud-based POS system."
    ),
    faq: cafeFaqItems,
  });

  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />

      {/* ========================================================= */}
      {/* SECTION 1: HERO                                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500">
            <Link href="/" className="transition hover:text-[#0F2A26]">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <Link href="/industries/" className="transition hover:text-[#0F2A26]">Industries</Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-semibold text-[#0F2A26]">Cafe & Coffee Shop</span>
          </nav>

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* Left Column: Eyebrow, H1, Description, CTAs, Proofs */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide self-start">
                <Coffee className="h-3.5 w-3.5 text-[#167c70]" />
                <span className="font-bold uppercase tracking-wider">HULMPOS FOR CAFES & COFFEE SHOPS</span>
              </div>

              <h1 className="mt-4 sm:mt-5 text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[42px] xl:text-[46px]">
                Cafe & Coffee Shop{" "}
                <span className="mark-lime">POS System</span>
              </h1>

              <p className="mt-3.5 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600">
                Manage your cafe&apos;s sales, billing, inventory and customers with HulmPOS. Run your coffee shop more efficiently with one cloud-based POS system.
              </p>

              {/* Pricing Subtext Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#0F2A26] self-start shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>Starting at PKR 2,500/month &bull; 14-Day Free Trial</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold">
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-[#F7F6F2] h-12 px-6 text-sm font-semibold text-[#0F2A26]">
                  <Link href="/contact/">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Proof Bullets: Compact 2x2 on mobile to save vertical scrolling */}
              <ul className="mt-5 sm:mt-6 grid grid-cols-2 gap-2 text-xs font-medium text-zinc-600 sm:flex sm:flex-wrap sm:gap-x-5 sm:text-sm">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0" />
                  <span>PKR 2,500/mo</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0" />
                  <span>14-Day Free Trial</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0" />
                  <span>No credit card</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#167c70] shrink-0" />
                  <span>Cloud-based</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Hero POS Screen in Coffee Shop Environment */}
            <div className="lg:col-span-6 relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/20 via-[#7ae582]/15 to-transparent blur-2xl -z-10"
              />

              <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-black shadow-2xl">
                {/* Hero POS Image */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/industries/cafe.webp"
                    alt="Actual HulmPOS POS billing screen displayed in a coffee shop environment"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Floating Top-Right Live Status Pill */}
                <div className="pointer-events-none absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-[#0F2A26]">
                    Live Cafe Counter Demo
                  </span>
                </div>

                {/* Floating Bottom Card Banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2A26]/95 via-[#0F2A26]/60 to-transparent p-5 sm:p-6 pt-16 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7AE582]">
                        Connected Cafe & Coffee Shop Workflow
                      </p>
                      <p className="mt-1 text-sm sm:text-base font-bold leading-snug">
                        Billing, stock & customer records in one view
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg bg-white/10 px-3 py-1.5 border border-white/15 text-xs backdrop-blur-xs font-medium">
                      <Barcode className="h-3.5 w-3.5 text-[#7AE582]" />
                      <span>0.8s Fast Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted By Badges (Homepage Element) */}
      <TrustedBy />

      {/* ========================================================= */}
      {/* SECTION 2: INTRODUCTION                                   */}
      {/* ========================================================= */}
      <Section data-reveal className="bg-[#FAF9F5] py-10 sm:py-16 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: The Real-World Friction Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
                <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
                <span>Operational Clarity</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
                Running a Cafe Is Easier When Everything Is Organized
              </h2>
              <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                <p>
                  Running a cafe or coffee shop involves more than preparing coffee and serving customers. You have to manage daily sales, customer orders, products, inventory, employees, suppliers and business expenses.
                </p>
                <p>
                  When these activities are managed through notebooks, spreadsheets and separate applications, things become difficult to track.
                </p>
                <p>
                  HulmPOS is a cloud-based POS platform designed to help cafes and coffee shops manage billing, sales, inventory, purchasing, customers and business reporting from one place.
                </p>
                <p>
                  Whether you run a small cafe, a specialty coffee shop or multiple locations, HulmPOS helps you replace disconnected manual records with a more organized way of managing your business.
                </p>
              </div>

              {/* 4 Diagnostic Questions */}
              <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  "Which products performed best today?",
                  "Is your ingredient inventory up to date?",
                  "How much cash should be in the drawer?",
                  "Are all your branches performing well?",
                ].map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-[#E4E2DA] bg-white p-3 sm:p-3.5 text-xs sm:text-sm font-semibold text-[#0F2A26] shadow-2xs">
                    <HelpCircle className="mt-0.5 h-3.5 w-3.5 text-[#167c70] shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Before/After Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white p-4 sm:p-6 shadow-md">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3 sm:pb-4 sm:mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    The Modern Operating Difference
                  </span>
                  <span className="rounded-full bg-[#167c70]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#167c70]">
                    All-in-One
                  </span>
                </div>

                {/* Old Way */}
                <div className="rounded-xl border border-rose-200/80 bg-rose-50/50 p-3.5 sm:p-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                    <AlertCircle className="h-4 w-4 text-rose-600" />
                    <span>Manual Disconnected Registers</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-rose-950/80">
                    <li>&bull; Handwritten order chits & slow manual math</li>
                    <li>&bull; Outdated stock registers & untracked milk/beans</li>
                    <li>&bull; Cash drawer shortages discovered too late</li>
                    <li>&bull; WhatsApp messages to check branch sales</li>
                  </ul>
                </div>

                {/* HulmPOS Way */}
                <div className="rounded-xl border border-emerald-300/80 bg-emerald-50/50 p-3.5 sm:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>HulmPOS Cloud-Based Platform</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-emerald-950/80">
                    <li>&bull; Fast touchscreen POS with menu categories</li>
                    <li>&bull; Real-time inventory & digital purchase orders</li>
                    <li>&bull; Shift opening/closing cash drawer balancing</li>
                    <li>&bull; Centralized multi-branch reports on any device</li>
                  </ul>
                </div>

                <div className="mt-4 pt-3.5 sm:mt-5 sm:pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span>Starts at PKR 2,500/month</span>
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer" className="font-bold text-[#167c70] hover:underline flex items-center gap-1">
                    Try it free for 14 days <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Screen Carousel (Homepage Feature) */}
      <Section data-reveal className="bg-white py-10 sm:py-16">
        <Container>
          <div className="mx-auto mb-6 sm:mb-8 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>LIVE WORKSPACE SCREENS</span>
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              What the Cafe & Coffee Shop POS Looks Like in HulmPOS
            </h2>
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Real screens from HulmPOS. Your setup is configured around your coffee drinks, food catalogue, branches and team.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <DashboardCarousel screens={homeContent.product.screens} />
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 3: CUSTOMER PROBLEMS                              */}
      {/* ========================================================= */}
      <Section data-reveal className="bg-[#FAF9F5] py-10 sm:py-16 lg:py-20 border-y border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Everyday Cafe Bottlenecks
            </span>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
              Common Problems Cafe Owners Face Every Day
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              You didn&apos;t open a cafe to spend your entire day calculating bills, checking stock registers and collecting sales reports. Here are common problems cafe owners face and how HulmPOS solves them.
            </p>
          </div>

          {/* Mobile Hint & Counter */}
          <div className="sm:hidden mb-2.5 flex items-center justify-between text-xs text-zinc-500 px-1">
            <span className="font-semibold text-[#167c70]">
              Problem {activeProblemIndex + 1} of {customerProblems.length}
            </span>
            <span className="text-[11px] text-zinc-400">Swipe horizontally →</span>
          </div>

          {/* Swipeable Track on Mobile, Grid on Tablet & Desktop */}
          <div
            ref={problemsTrackRef}
            onScroll={handleProblemScroll}
            className="flex sm:grid gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            {customerProblems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="w-[86vw] max-w-[340px] shrink-0 sm:w-auto sm:max-w-none sm:shrink snap-center flex flex-col"
                >
                  <article
                    className="lift group flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DA] bg-white p-5 sm:p-6 shadow-xs transition hover:border-[#167c70]/40 hover:shadow-md"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-700">
                          <AlertCircle className="h-3 w-3" /> Problem {item.number}
                        </span>
                        <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* Problem Image if available */}
                      {item.image ? (
                        <div className="relative mb-3.5 h-32 sm:h-36 w-full overflow-hidden rounded-xl border border-[#E4E2DA] bg-zinc-100 shadow-xs">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2 left-2.5 rounded-md bg-black/65 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-white">
                            {item.imageAlt}
                          </span>
                        </div>
                      ) : (
                        <div className="mb-3.5 flex items-center gap-3 rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] p-3 text-[#167c70]">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#167c70]/10">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-xs font-semibold text-zinc-700">
                            Operational bottleneck in multi-location cafe setups
                          </div>
                        </div>
                      )}

                      {/* The Problem */}
                      <div className="rounded-xl bg-[#FAF9F5] border border-[#E4E2DA] p-3.5 mb-3.5 shadow-2xs">
                        <h3 className="text-sm font-bold text-zinc-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    {/* The Solution & Benefit */}
                    <div className="rounded-xl border border-[#167c70]/25 bg-white p-3.5 sm:p-4 mt-auto shadow-2xs">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#167c70] mb-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                        <span>How HulmPOS helps</span>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-600">
                        {item.solution}
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-[#167c70]/15 flex items-start gap-1.5 text-[11px] font-semibold text-[#167c70]">
                        <span className="font-bold text-[#0F2A26]">Benefit:</span>
                        <span>{item.benefit}</span>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Mobile Dots Navigation Indicator */}
          <div className="sm:hidden mt-3 flex items-center justify-center gap-1.5">
            {customerProblems.map((p, idx) => (
              <button
                key={p.number}
                type="button"
                onClick={() => scrollToProblem(idx)}
                aria-label={`Go to problem ${p.number}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeProblemIndex === idx ? "w-6 bg-[#167c70]" : "w-1.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 4: FEATURES                                       */}
      {/* ========================================================= */}
      <Section data-reveal id="features" className="bg-[#FAF9F5] py-10 sm:py-16 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-4 py-1.5 mb-3 sm:mb-4 text-xs font-semibold text-[#167c70]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AE582] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#167c70]" />
              </span>
              <span>COMPLETE CAFE &amp; COFFEE SHOP CAPABILITIES</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[38px] lg:leading-[1.2] text-balance">
              Everything You Need in a Coffee Shop POS System
            </h2>
            <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              A cafe needs more than software that generates bills. It needs a system that helps manage sales, inventory, customers, suppliers and business information. HulmPOS brings these essential business operations together.
            </p>
          </div>

          {/* MOBILE & TABLET: Interactive Jump Pills to avoid vertical scrolling */}
          <div className="lg:hidden mb-3.5">
            <div
              ref={featurePillsRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {cafeModules.map((module, idx) => {
                const isActive = activeFeatureIndex === idx;
                return (
                  <button
                    key={module.number}
                    type="button"
                    onClick={() => scrollToFeature(idx)}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-[#167c70] text-white shadow-xs"
                        : "bg-white text-zinc-600 border border-zinc-200/90 hover:bg-zinc-50"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-[#7AE582]" : "text-[#167c70]"
                      }`}
                    >
                      {module.number}
                    </span>
                    <span>{module.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Swipeable Carousel Track on Mobile/Tablet, 4x2 Symmetrical Grid on Desktop */}
          <div
            ref={featuresTrackRef}
            onScroll={handleFeatureScroll}
            className="flex lg:grid gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 lg:grid-cols-4 items-stretch"
          >
            {cafeModules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.number}
                  className="w-[86vw] max-w-[340px] shrink-0 lg:w-auto lg:max-w-none lg:shrink snap-center flex flex-col"
                >
                  <div
                    className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200/85 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#167c70]/50 hover:shadow-md"
                  >
                    {/* Top Accent Gradient Bar on Hover */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#167c70] via-[#25A18E] to-[#7AE582] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div className="flex flex-col">
                      {/* Micro-UI Software Snippet Header */}
                      <div className="mb-3.5 flex items-center justify-between rounded-xl bg-[#0F2A26] px-3 py-1.5 text-white">
                        <div className="flex items-center gap-1.5 min-w-0">
                          {module.microUi.isPulse ? (
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AE582] opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7AE582]" />
                            </span>
                          ) : (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7AE582]" />
                          )}
                          <span className="truncate font-mono text-[11px] text-zinc-300">
                            {module.microUi.leftLabel}
                          </span>
                        </div>
                        <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#7AE582]">
                          {module.microUi.rightLabel}
                        </span>
                      </div>

                      {/* Card Header: Icon + Category Badge + Title + Number Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#167c70]/10 to-[#7AE582]/15 text-[#167c70] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#167c70]">
                              {module.badge}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-[#0F2A26] leading-tight">
                              {module.title}
                            </h3>
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-xs font-semibold text-zinc-400 bg-zinc-100/90 px-2 py-0.5 rounded-md">
                          {module.number}
                        </span>
                      </div>

                      {/* Operational Tagline */}
                      <p className="text-xs leading-relaxed text-zinc-500 mb-3.5">
                        {module.tagline}
                      </p>

                      {/* Features Displayed as Modern Capability Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {module.chips.map((chip) => (
                          <span
                            key={chip}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-zinc-300 hover:border-[#167c70]/40 hover:bg-[#167c70]/5 hover:text-[#0F2A26]"
                          >
                            <Check className="h-3 w-3 shrink-0 text-[#167c70]" aria-hidden="true" />
                            <span>{chip}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom Meta Bar (Anchors card height evenly across the grid) */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-zinc-500">{module.footerHighlight}</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#167c70]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25A18E]" />
                        {module.footerStatus}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE & TABLET: Bottom Navigation Controls */}
          <div className="lg:hidden mt-3 flex items-center justify-between px-1 text-xs text-zinc-500">
            <span className="font-medium text-zinc-600">
              Module {activeFeatureIndex + 1} of {cafeModules.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToFeature(activeFeatureIndex - 1)}
                disabled={activeFeatureIndex === 0}
                aria-label="Previous feature module"
                className="h-8 w-8 rounded-full border border-zinc-200 bg-white grid place-items-center text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToFeature(activeFeatureIndex + 1)}
                disabled={activeFeatureIndex === cafeModules.length - 1}
                aria-label="Next feature module"
                className="h-8 w-8 rounded-full border border-zinc-200 bg-white grid place-items-center text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 shadow-2xs cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Interactive Coffee Shop Menu & Category Showcase Strip */}
          <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-[#dce7e3] bg-white p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(21,40,37,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 border-b border-zinc-100 pb-5 mb-5 sm:pb-6 sm:mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3 py-1 text-xs font-semibold text-[#167c70] mb-2">
                  <Tags className="h-3.5 w-3.5" />
                  <span>FEATURE DEEP DIVE: MENU &amp; PRODUCT CATALOGUE</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#0F2A26]">
                  Coffee Shop Menu &amp; Product Management
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-600 max-w-xl">
                  Your coffee shop may sell dozens of different products. Organize your entire beverage, tea, dessert and snack menu in HulmPOS with categories and prices.
                </p>
              </div>

              {/* Category Switcher Tabs */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {menuShowcaseCategories.map((cat, idx) => {
                  const CatIcon = cat.icon;
                  const isActive = activeMenuTab === idx;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveMenuTab(idx)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0F2A26] text-[#7AE582] shadow-md scale-[1.02]"
                          : "bg-[#FAF9F5] border border-[#E4E2DA] text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      <CatIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Category Header & Subtext */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                  {menuShowcaseCategories[activeMenuTab].badge}:
                </span>
                <span className="text-xs text-zinc-500">
                  {menuShowcaseCategories[activeMenuTab].description}
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold text-zinc-400">
                Manage product information, categories and prices through one system
              </span>
            </div>

            {/* Menu Items Grid: 2 columns on mobile for compact vertical footprint, 3/4 on desktop */}
            <div className="grid gap-2 sm:gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {menuShowcaseCategories[activeMenuTab].items.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col justify-between rounded-xl border border-zinc-200/90 bg-[#FAF9F5] p-3 sm:p-3.5 transition-all hover:border-[#167c70]/40 hover:bg-white hover:shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F2A26] group-hover:text-[#167c70] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 text-[10px] sm:text-[11px] text-zinc-500 line-clamp-2 sm:line-clamp-none leading-tight">
                        {item.detail}
                      </p>
                    </div>
                    <span className="self-start mt-0.5 sm:mt-0 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-800 border border-emerald-200/60 shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-zinc-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0F2A26]">
                      {item.price}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-[#167c70]">
                      <Check className="h-3 w-3" />
                      <span>Catalogue Ready</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout & Workflow Guarantee */}
            <div className="mt-5 pt-4 sm:mt-6 sm:pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#167c70] shrink-0" />
                <span>
                  Whether you sell coffee, tea, snacks, bakery products or complete meals, HulmPOS helps organize your billing operations.
                </span>
              </div>
              <Button asChild size="sm" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold h-9 px-4 shrink-0">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  Explore Menu POS Free
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 5: BUSINESS TYPES                                 */}
      {/* ========================================================= */}
      <Section data-reveal className="relative overflow-hidden bg-[#0F2A26] py-12 sm:py-18 lg:py-22 text-white">
        {/* Soft Ambient Radial Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-full max-w-5xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(122,229,130,0.15),transparent_70%)]"
        />

        <Container>
          {/* Centered Authoritative Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7AE582]/30 bg-[#7AE582]/10 px-4 py-1.5 mb-3 sm:mb-4 text-xs font-semibold text-[#7AE582]">
              <Coffee className="h-3.5 w-3.5" />
              <span>TAILORED FOOD &amp; BEVERAGE WORKFLOWS</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[40px] lg:leading-[1.2] text-balance">
              One POS Solution for{" "}
              <span className="text-[#7AE582]">Different Types of Cafes</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-white/75 max-w-2xl mx-auto">
              Every cafe has different requirements. A small coffee shop may need simple billing and stock management, while a growing cafe chain may need centralized branch management. HulmPOS supports different types of food and beverage businesses.
            </p>
          </div>

          {/* Mobile Hint */}
          <div className="sm:hidden mb-2.5 flex items-center justify-between text-xs text-white/70 px-1">
            <span className="font-semibold text-[#7AE582]">8 Cafe Business Models</span>
            <span className="text-[11px] text-white/50">Swipe horizontally →</span>
          </div>

          {/* Swipeable Track on Mobile, 4x2 Grid on Tablet & Desktop */}
          <div className="flex sm:grid gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {businessTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="w-[84vw] max-w-[320px] shrink-0 sm:w-auto sm:max-w-none sm:shrink snap-center flex flex-col"
                >
                  <article
                    className={`group relative flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                      type.isCtaCard
                        ? "border-2 border-[#7AE582]/60 bg-gradient-to-br from-[#7AE582]/15 via-white/[0.08] to-transparent shadow-[0_15px_35px_-10px_rgba(122,229,130,0.2)]"
                        : "border border-white/10 bg-white/[0.05] backdrop-blur-xs hover:border-[#7AE582]/40 hover:bg-white/[0.09] hover:shadow-xl"
                    }`}
                  >
                    {/* Top Glowing Edge Bar on Hover */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#7AE582] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div>
                      {/* Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#7AE582]/15 text-[#7AE582] group-hover:bg-[#7AE582] group-hover:text-[#0F2A26] transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7AE582]">
                          {type.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#7AE582] transition-colors leading-snug">
                        {type.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                        {type.description}
                      </p>
                    </div>

                    {/* Bottom Highlight Pill or CTA */}
                    <div className="mt-5 pt-3.5 border-t border-white/10">
                      {type.isCtaCard ? (
                        <Button asChild size="sm" className="w-full rounded-xl bg-[#7AE582] hover:bg-white text-[#0F2A26] font-bold text-xs h-9">
                          <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                            Start 14-Day Free Trial
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#7AE582]">
                          <Check className="h-3 w-3 shrink-0" />
                          <span>{type.highlight}</span>
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Bottom Reassurance Strip with Direct Actions */}
          <div className="mt-8 sm:mt-12 rounded-2xl border border-white/15 bg-white/[0.06] p-5 sm:p-7 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-3 text-center lg:text-left">
              <div className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#7AE582]/20 text-[#7AE582]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white">
                  Built for single coffee stalls to multi-branch chains across Pakistan
                </p>
                <p className="text-xs text-white/70 mt-0.5">
                  100% cloud-based &bull; Instant activation &bull; Free data import from Excel registers
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Button asChild size="lg" className="rounded-full bg-[#7AE582] text-[#0F2A26] hover:bg-white font-bold px-6 h-11 text-xs sm:text-sm">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  Start Your 14-Day Free Trial
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white px-5 h-11 text-xs sm:text-sm font-semibold">
                <Link href="/contact/">
                  Book a 1-on-1 Cafe Demo
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 6: WHY HULMPOS (WITH 10-ROW COMPARISON TABLE)     */}
      {/* ========================================================= */}
      <Section data-reveal className="bg-[#FAF9F5] py-14 sm:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              System Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl lg:text-5xl">
              Why Choose HulmPOS as Your Cafe POS Software?
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Choosing the best POS for a cafe is not simply about finding software that generates bills. You need a solution that helps you manage everyday operations without making your business more complicated. HulmPOS brings several essential business management tools together.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* 10-Row Comparison Table */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-[#E4E2DA] bg-[#FAF9F5]">
                      <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 w-1/2">
                        What your cafe needs
                      </th>
                      <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#167c70] w-1/2">
                        How HulmPOS helps
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="transition-colors hover:bg-emerald-50/20">
                        <td className="p-3.5 sm:p-4 font-semibold text-[#0F2A26] flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#167c70]" />
                          {row.need}
                        </td>
                        <td className="p-3.5 sm:p-4 font-medium text-zinc-700">
                          <span className="inline-flex items-center gap-1.5 text-[#167c70] font-semibold">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#167c70]" />
                            {row.help}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Designed for Small & Growing Businesses Callout Card */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="rounded-2xl border-2 border-[#167c70]/30 bg-white p-6 shadow-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#167c70]/10 px-3 py-1 text-xs font-bold text-[#167c70] mb-3">
                  <Store className="h-3.5 w-3.5" />
                  <span>SCALABLE PLATFORM</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2A26] leading-snug">
                  Designed for Small and Growing Businesses
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  You don&apos;t need expensive enterprise software to start managing your cafe professionally.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  HulmPOS offers subscription options for businesses at different stages of growth. Start with the features and capacity you need today, then choose a suitable plan as your business expands.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                    <Check className="h-4 w-4 text-[#167c70]" />
                    <span>No expensive upfront hardware locks</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                    <Check className="h-4 w-4 text-[#167c70]" />
                    <span>Upgrade user & branch seats anytime</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700">
                    <Check className="h-4 w-4 text-[#167c70]" />
                    <span>Free data import from Excel</span>
                  </div>
                </div>

                <Button asChild size="lg" className="mt-6 w-full rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold h-11">
                  <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                    Start Free Trial &bull; PKR 2,500/mo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* FBR Readiness Note */}
              <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 text-xs text-zinc-600">
                <div className="flex items-center gap-2 font-bold text-[#0F2A26] mb-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#167c70]" />
                  <span>FBR Tax Compliance Available</span>
                </div>
                <p className="leading-relaxed">
                  HulmPOS provides FBR integration for eligible cafes in Pakistan with verified fiscal receipts.
                </p>
                <Link href="/fbr-integrated-pos-pakistan/" className="mt-2 inline-flex items-center gap-1 font-bold text-[#167c70] hover:underline">
                  Learn about FBR integration <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Google Reviews Section (Homepage Element for Social Proof) */}
      <GoogleReviewsSection
        heading="Pakistani Cafe & Retail Businesses Run on HulmPOS"
        subheading="Real reviews from business owners who use Hulm POS, published on Google."
        cta={{
          label: homeContent.customerProof.cta.label,
          href: homeContent.customerProof.cta.href,
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 7: PRICING                                        */}
      {/* ========================================================= */}
      <Section data-reveal id="pricing" className="bg-white py-10 sm:py-16 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/8 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>TRANSPARENT SUBSCRIPTION</span>
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
              Affordable POS System for Cafes and Coffee Shops
            </h2>
            <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Looking for a coffee shop POS system that fits your budget? HulmPOS offers monthly subscription plans designed for small and growing businesses.
            </p>

            {/* 3 Value Pillars from Homepage */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 border-y border-zinc-100 py-4 sm:py-6 sm:grid-cols-3 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F2A26]">Quick Setup</p>
                  <p className="text-xs text-zinc-500">Up and running same day.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F2A26]">No Hidden Costs</p>
                  <p className="text-xs text-zinc-500">Transparent monthly rates.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#167c70]/10 text-[#167c70]">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F2A26]">Scales With You</p>
                  <p className="text-xs text-zinc-500">Add branches as you grow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Plan Jump Pills to avoid vertical scrolling */}
          <div className="sm:hidden mb-3.5 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {pricingPlans.map((plan, idx) => {
              const isActive = activePricingIndex === idx;
              return (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => scrollToPricing(idx)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#167c70] text-white shadow-xs"
                      : "bg-[#FAF9F5] text-zinc-600 border border-[#E4E2DA]"
                  }`}
                >
                  {plan.name}
                  {plan.highlight ? " ★" : ""}
                </button>
              );
            })}
          </div>

          {/* Pricing Track: Swipeable Carousel on Mobile, 4-col Grid on Tablet/Desktop */}
          <div
            ref={pricingTrackRef}
            onScroll={handlePricingScroll}
            className="flex sm:grid gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="w-[86vw] max-w-[330px] shrink-0 sm:w-auto sm:max-w-none sm:shrink snap-center flex flex-col"
              >
                <div
                  className={`relative flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
                    plan.highlight
                      ? "border-2 border-[#167c70] bg-gradient-to-b from-[#f8fbf9] via-white to-[#f4f9f6] shadow-xl"
                      : "border border-[#E4E2DA] bg-[#FAF9F5] hover:border-[#167c70]/40 hover:shadow-md"
                  }`}
                >
                  {plan.highlight ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#167c70] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Most Popular
                    </span>
                  ) : null}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F2A26]">{plan.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0F2A26] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-semibold text-zinc-500">{plan.cadence}</span>
                    </div>

                    <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-b border-zinc-200/80 pb-4">
                      {plan.tagline}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-zinc-700">
                          <Check className="h-4 w-4 text-[#167c70] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 border-t border-zinc-100">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full rounded-xl text-xs font-semibold h-11 ${
                        plan.highlight
                          ? "bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm"
                          : "bg-white border border-[#E4E2DA] text-[#0F2A26] hover:bg-[#FAF9F5]"
                      }`}
                    >
                      <Link
                        href={plan.ctaLink}
                        target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
                        rel={plan.ctaLink.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Advisory Banner */}
          <div className="mt-8 sm:mt-12 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div>
              <p className="text-base sm:text-lg font-bold text-[#0F2A26]">
                Not sure which plan is right for your cafe?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-zinc-600">
                Start with a 14-day free trial and explore HulmPOS before choosing a subscription. No credit card required.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button asChild variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-white h-11 px-5 text-xs font-semibold">
                <Link href="/pricing/">
                  View All Pricing
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white h-11 px-6 text-xs font-semibold">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  Start Free Trial
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 8: BUYER'S GUIDE                                  */}
      {/* ========================================================= */}
      <Section data-reveal className="bg-[#FAF9F5] py-10 sm:py-16 lg:py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-6 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Evaluation Framework
            </span>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
              How to Choose the Best POS System for a Coffee Shop
            </h2>
            <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              There are many POS systems for coffee shops and cafes. But how do you know which one is right for your business? Before purchasing coffee shop POS software, consider these important factors.
            </p>
          </div>

          {/* Mobile Hint */}
          <div className="sm:hidden mb-2.5 flex items-center justify-between text-xs text-zinc-500 px-1">
            <span className="font-semibold text-[#167c70]">7 Evaluation Factors</span>
            <span className="text-[11px] text-zinc-400">Swipe horizontally →</span>
          </div>

          {/* 7 Factors: Swipeable Carousel on Mobile, Grid on Tablet/Desktop */}
          <div className="flex sm:grid gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none scroll-smooth px-4 -mx-4 sm:px-0 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {buyersGuideFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.number}
                  className="w-[82vw] max-w-[310px] shrink-0 sm:w-auto sm:max-w-none sm:shrink snap-center flex flex-col"
                >
                  <div className="h-full rounded-2xl border border-[#E4E2DA] bg-white p-5 sm:p-6 shadow-xs hover:border-[#167c70]/40 transition flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="rounded-md bg-[#167c70]/10 px-2.5 py-1 text-xs font-bold text-[#167c70]">
                          Factor {factor.number}
                        </span>
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF9F5] border border-[#E4E2DA] text-[#167c70]">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-[#0F2A26] leading-snug">
                        {factor.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* HulmPOS Summary Note Card */}
          <div className="mt-6 rounded-2xl border-2 border-dashed border-[#167c70]/40 bg-gradient-to-br from-[#167c70]/[0.06] via-white to-transparent p-5 sm:p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167c70] mb-2">
              <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
              <span>The HulmPOS Fit</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-[#0F2A26] leading-relaxed">
              HulmPOS brings these essential capabilities together in one cloud-based platform, making it a strong option for cafes and coffee shops looking for affordable business management software.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button asChild size="sm" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold">
                <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                  Test in 14-Day Free Trial
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Link href="/contact/" className="text-xs font-semibold text-[#167c70] hover:underline flex items-center gap-1">
                Talk to our cafe software team <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 9: FAQ                                            */}
      {/* ========================================================= */}
      <Section data-reveal id="faq" className="bg-white py-10 sm:py-16 lg:py-20 border-b border-[#E4E2DA]">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-[34px] lg:leading-[1.22] text-balance">
              Frequently Asked Questions About Cafe and Coffee Shop POS Systems
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
              Everything you need to know about setting up, managing billing, tracking ingredients, and choosing the right POS software for your cafe.
            </p>

            <LinkChips heading="Works with" items={relatedProducts} className="mt-6 sm:mt-8" />

            <div className="mt-6 sm:mt-8 rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 text-xs text-zinc-600">
              <p className="font-bold text-[#0F2A26] mb-1">Need help deciding on hardware or branch setup?</p>
              <p>Our team is available on WhatsApp or live demo to walk you through cafe counter setups.</p>
              <Link href="/contact/" className="mt-3 inline-flex items-center gap-1 font-bold text-[#167c70] hover:underline">
                Contact team <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* FAQ Accordions: Top 5 visible on mobile by default to prevent endless scrolling */}
          <div className="space-y-3 sm:space-y-4">
            {cafeFaqItems.map((item, index) => (
              <details
                key={item.q}
                open={index === 0}
                className={`group rounded-2xl border border-zinc-200/80 bg-white open:border-[#25a18e] open:shadow-sm open:ring-1 open:ring-[#25a18e]/15 ${
                  index >= 5 && !showAllFaqs ? "hidden lg:block" : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e] [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm sm:text-base font-bold leading-snug text-[#0F2A26] sm:text-lg">{item.q}</h3>
                  <ArrowRight
                    className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 rotate-90 text-zinc-400 transition group-open:-rotate-90 group-open:text-[#25a18e]"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-zinc-100 px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 text-xs sm:text-sm leading-relaxed text-zinc-600">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}

            {/* Mobile View All FAQs Toggle */}
            <div className="lg:hidden pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="w-full rounded-xl border-[#167c70]/30 bg-white text-[#167c70] hover:bg-[#167c70]/5 font-semibold text-xs py-3 h-auto shadow-2xs cursor-pointer"
              >
                {showAllFaqs ? (
                  <span className="inline-flex items-center gap-1.5">
                    Show fewer questions <ChevronUp className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    View all 13 FAQs ({cafeFaqItems.length - 5} more questions) <ChevronDown className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========================================================= */}
      {/* SECTION 10: FINAL CTA                                     */}
      {/* ========================================================= */}
      <Section data-reveal className="bg-white py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0F2A26] px-5 py-10 text-center text-white sm:px-12 sm:py-16 shadow-2xl border border-[#167c70]/20">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/5 via-transparent to-black/30"
            />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#7AE582]">
                <Coffee className="h-3.5 w-3.5" />
                <span>One Connected System for Cafes</span>
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.18] text-balance">
                Give Your Cafe a Better Way to Manage Business
              </h2>

              <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
                Your cafe deserves more than handwritten bills, disconnected spreadsheets and uncertain sales records. Manage your sales, inventory, purchasing, customers and business operations through one connected POS platform.
              </p>

              <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/65">
                Whether you run a small coffee shop, a busy cafe or multiple locations, HulmPOS helps you organize your business and maintain better control.
              </p>

              {/* Sub-Offer Card */}
              <div className="mx-auto mt-6 sm:mt-8 max-w-xl rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 backdrop-blur-md">
                <p className="text-base sm:text-lg font-bold text-white">
                  Start Managing Your Cafe with HulmPOS Today
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/80">
                  Get a 14-day free trial and discover a smarter way to manage your cafe.
                </p>
                <p className="mt-2 text-sm sm:text-base font-extrabold text-[#7AE582]">
                  Starting at PKR 2,500/month.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-[#7AE582] text-[#0F2A26] hover:bg-white font-bold shadow-md h-11 sm:h-12 px-6 sm:px-7 text-xs sm:text-sm">
                    <Link href="https://app.hulmsolutions.com/Register" target="_blank" rel="noreferrer">
                      Start Your Free 14-Day Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm font-semibold">
                    <Link href="/contact/">
                      Talk to Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Contact Footer Strip */}
              <div className="mx-auto mt-6 sm:mt-8 max-w-2xl border-t border-white/15 pt-5 sm:pt-6 text-xs text-white/70">
                <p className="font-bold text-white text-sm">Hulm Solutions</p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs">
                  <span className="flex items-center gap-1.5">
                    Website:{" "}
                    <Link href="/" className="text-[#7AE582] hover:underline">
                      https://hulmsolutions.com/
                    </Link>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#7AE582]" />
                    WhatsApp:{" "}
                    <a href="https://wa.me/923391119259" target="_blank" rel="noreferrer" className="text-[#7AE582] hover:underline font-semibold">
                      +92 339 111 9259
                    </a>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#7AE582]" />
                    Email:{" "}
                    <a href="mailto:info@hulmsolutions.com" className="text-[#7AE582] hover:underline">
                      info@hulmsolutions.com
                    </a>
                  </span>
                </div>
                <p className="mt-3 sm:mt-4 text-white/60 italic text-[11px]">
                  HulmPOS – One connected POS system for your growing cafe and coffee shop business.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Explore More Industries & Cities Section */}
      <Section data-reveal className="bg-[#FAF9F5] border-t border-[#E4E2DA] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
                Explore Industries
              </span>
              <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#0F2A26]">
                More POS systems by industry
              </h2>
            </div>
            <Link href="/industries/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#167c70] hover:text-[#105f56]">
              View all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <LinkChips items={linksExcept(industryLinks, route)} className="mt-4" />
          <LinkChips heading="POS software in your city" items={cityLinks} className="mt-6" />
        </Container>
      </Section>
    </div>
  );
}
