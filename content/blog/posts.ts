import { BlogPost, Author } from "./types";

export const EDITORIAL_AUTHOR: Author = {
  id: "hulm-editorial-team",
  slug: "hulm-solutions-editorial-team",
  name: "Hulm Solutions Editorial Team",
};

// TEMPORARY PLACEHOLDER CONTENT
// Replace these with actual blog posts when provided by the user.
export const blogPosts: BlogPost[] = [
  {
    id: "track-cash-card-bank-transfer-payments",
    slug: "track-cash-card-bank-transfer-payments",
    title: "Customers Are Paying by Cash, Card and Bank Transfer. How Do You Track Everything?",
    excerpt: "Learn how to track cash, card and bank transfer payments, reconcile daily sales and manage every payment method using POS software.",
    featuredImage: {
      src: "/images/uploads/2026/11/track-cash-card-bank-transfer-payments.webp",
      alt: "Customers Paying by Cash, Card and Bank Transfer: How to Track Everything with POS Software"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2026-11-24",
    readingTime: "9 min read"
  },
  {
    id: "cash-drawer-management-start-end-day",
    slug: "cash-drawer-management-start-end-day",
    title: "Cash Drawer Shortages? See How HulmPOS Helps You Track Cash from Start Day to End Day",
    excerpt: "Stop guessing where your shop's cash goes. Learn how to record opening cash, track daily sales, and check closing cash with HulmPOS POS software.",
    featuredImage: {
      src: "/images/uploads/2026/11/cash-drawer-shortages-management-hulmpos.webp",
      alt: "Cash drawer shortages management: retail store owner counting physical cash against sales records at closing time"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2026-11-18",
    readingTime: "9 min read"
  },
  {
    id: "cloud-pos-vs-desktop-pos",
    slug: "cloud-pos-vs-desktop-pos",
    title: "Cloud POS vs Desktop POS: Which Fits Your Business?",
    excerpt: "Compare cloud POS vs desktop POS for cost, internet outages, security, inventory and multiple branches. Discover which system fits your business.",
    featuredImage: {
      src: "/images/uploads/2026/11/hulmpos-one-platform-better-retail-management.webp",
      alt: "Cloud POS vs Desktop POS: One Platform for Complete Retail Management — HulmPOS Dashboard"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2026-11-17",
    readingTime: "9 min read"
  },
  {
    id: "restaurant-food-cost-calculator",
    slug: "restaurant-food-cost-calculator",
    title: "Restaurant Food Cost Calculator: How to Price Menu Items Profitably",
    excerpt: "Calculate food cost percentage, price restaurant menu items, and improve margins with practical formulas and real examples.",
    featuredImage: {
      src: "/images/uploads/2026/11/restaurant-food-cost-calculator-menu-pricing.webp",
      alt: "Restaurant owner reviewing food costs and menu prices using a laptop"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2026-11-11",
    readingTime: "8 min read"
  },
  {
    id: "post-1",
    slug: "how-to-improve-sales",
    title: "How to Improve Your Retail Sales Process in 2024",
    excerpt: "Discover actionable strategies to streamline your checkout process, manage inventory better, and boost your overall retail sales.",
    featuredImage: {
      src: "/images/blog-placeholder-1.jpg",
      alt: "Retail store checkout counter with POS system"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2024-03-15",
    readingTime: "5 min read",
    content: `
      <h2>The Shift in Modern Retail</h2>
      <p>Running a successful retail store in 2024 requires more than just good products; it requires an incredibly smooth operation behind the scenes. Customers expect fast checkouts, and business owners need real-time inventory visibility.</p>
      
      <p>Here are the key areas to focus on:</p>
      <ul>
        <li><strong>Inventory Accuracy:</strong> Knowing exactly what is on your shelves prevents dead stock.</li>
        <li><strong>Customer Management:</strong> Retaining customers is cheaper than acquiring new ones.</li>
        <li><strong>Checkout Speed:</strong> A fast POS system reduces wait times.</li>
      </ul>
      
      <h3>Why Upgrading Matters</h3>
      <p>Many businesses still rely on outdated legacy systems. By switching to a modern, cloud-based solution, you ensure that your data is safe, accessible, and actionable from anywhere in the world.</p>
      
      <blockquote>
        "The right POS doesn't just process sales; it manages the entire heartbeat of the retail store."
      </blockquote>
      
      <p>Don't wait until your competitors outpace you. Start evaluating your operations today.</p>
    `
  },
  {
    id: "post-2",
    slug: "understanding-fbr-integration",
    title: "Understanding FBR Tier-1 POS Integration",
    excerpt: "A comprehensive guide for Pakistani retailers on how to remain compliant with FBR regulations seamlessly.",
    featuredImage: {
      src: "/images/blog-placeholder-2.jpg",
      alt: "FBR compliance graphic"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2024-02-28",
    readingTime: "8 min read"
  },
  {
    id: "post-3",
    slug: "benefits-of-cloud-pos",
    title: "7 Benefits of Switching to a Cloud-Based POS",
    excerpt: "Why modern businesses are leaving legacy systems behind and embracing the flexibility of cloud-based point of sale software.",
    authorId: "hulm-editorial-team",
    publishedAt: "2024-02-10"
    // Notice: no reading time and no image, UI should handle this gracefully
  },
  {
    id: "post-4",
    slug: "restaurant-management-tips",
    title: "Essential Tips for Effective Restaurant Management",
    excerpt: "From table management to kitchen ticketing, learn how the right POS can transform your cafe or restaurant operations.",
    featuredImage: {
      src: "/images/blog-placeholder-3.jpg",
      alt: "Busy restaurant kitchen"
    },
    authorId: "hulm-editorial-team",
    publishedAt: "2024-01-22",
    readingTime: "6 min read"
  }
];
