export type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorSlug: string;
  imageUrl: string;
  content: string;
};

const dummyContent = `
## Introduction

This is a placeholder body for the article. Managing point of sale operations effectively is crucial for any modern business. By digitizing workflows and ensuring robust data tracking, businesses can significantly reduce overhead costs while increasing customer satisfaction.

### Key Takeaways

1. **Automation:** Eliminates manual data entry errors.
2. **Speed:** Accelerates the checkout process.
3. **Data Security:** Ensures sensitive customer data is protected.

## Deep Dive

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> "Implementing a robust POS system was the single best decision we made for our operational scaling this year."

## Conclusion

By adopting the right technologies, retailers can future-proof their business against rapid market changes and changing consumer demands.
`;

export const insightsData: Insight[] = [
  {
    id: "0",
    title: "What is POS System? What does POS mean & How to use POS System?",
    slug: "what-is-pos",
    excerpt: "Learn what a POS system is, what POS means, how point-of-sale hardware and software work, and how businesses use POS.",
    category: "POS Education",
    date: "December 18, 2024",
    readTime: "9 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2024/12/what-is-pos.webp",
    content: dummyContent
  },
  {
    id: "1",
    title: "What is POS Debit Meaning & Debit Card POS Transaction?",
    slug: "what-is-pos-debit-meaning",
    excerpt: "Understand the meaning of POS debit and how debit card POS transactions are processed efficiently.",
    category: "Payment Processing",
    date: "July 24, 2025",
    readTime: "5 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/07/What-is-POS-Debit-Meaning-and-Debit-Card-POS-Transaction.webp",
    content: dummyContent
  },
  {
    id: "2",
    title: "Best POS System for Retail Stores in 2026 – Complete Guide",
    slug: "best-pos-system-for-retail",
    excerpt: "A complete guide to finding the best POS system for your retail store to maximize efficiency and sales.",
    category: "Retail Strategy",
    date: "09/08/2026",
    readTime: "8 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/04/best-pos-system-for-retail-store-1024x579.webp",
    content: dummyContent
  },
  {
    id: "3",
    title: "What is a POS Purchase? Meaning, Definition & How It Works",
    slug: "what-is-a-pos-purchase",
    excerpt: "Discover the definition of a POS purchase and learn exactly how it works behind the scenes.",
    category: "Education",
    date: "April 14, 2025",
    readTime: "4 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/04/What-is-a-POS-Purchase-Meaning-Defenition-and-How-its-work.webp",
    content: dummyContent
  },
  {
    id: "4",
    title: "What is POS skills? Understand POS skill meaning",
    slug: "what-is-pos-skills-understand-pos-skill-meaning",
    excerpt: "A deep dive into POS skills, what they mean, and why they are essential for your retail staff.",
    category: "Staff Management",
    date: "March 28, 2025",
    readTime: "6 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/03/What-is-POS-Skills-1024x575.webp",
    content: dummyContent
  },
  {
    id: "5",
    title: "What is a POS Person? Meaning & Responsibilities",
    slug: "what-is-a-pos-person-meaning-and-responsibilities",
    excerpt: "Explore the role, meaning, and key responsibilities of a POS person in modern retail environments.",
    category: "Staff Management",
    date: "March 7, 2025",
    readTime: "5 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/03/What-is-a-pos-Person-1024x1024.webp",
    content: dummyContent
  },
  {
    id: "6",
    title: "POS Reconciliation: Purpose, Benefits & 7 Steps to Do It Perfectly",
    slug: "pos-reconciliation",
    excerpt: "Master POS reconciliation with our 7-step guide to ensure your cash drawer matches your sales data perfectly.",
    category: "Finance",
    date: "February 28, 2025",
    readTime: "7 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/02/POS-Reconciliation.webp",
    content: dummyContent
  },
  {
    id: "7",
    title: "Retail Cloud POS Software for Retail Stores",
    slug: "cloud-pos-software-for-retail-stores",
    excerpt: "Why upgrading to a Cloud POS is the smartest move for scaling retail stores in 2025.",
    category: "Technology",
    date: "February 11, 2025",
    readTime: "5 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/02/cloud-based-pos-system.webp",
    content: dummyContent
  },
  {
    id: "8",
    title: "What is POS Experience? 12 Tips to Satisfy Your Customers in 2026",
    slug: "what-is-pos-experience-12-tips-to-satisfy-your-customers",
    excerpt: "Enhance your checkout process with these 12 actionable tips to improve POS experience and customer satisfaction.",
    category: "Customer Experience",
    date: "February 11, 2025",
    readTime: "9 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/02/Point-of-sale-POS-Experience.webp",
    content: dummyContent
  },
  {
    id: "9",
    title: "What Is Point of Sale (POS) Transaction & Meaning",
    slug: "what-is-point-of-sale-transaction",
    excerpt: "Learn the fundamentals of a Point of Sale transaction and what it means for your daily operations.",
    category: "Education",
    date: "February 7, 2025",
    readTime: "4 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/01/How-does-a-Point-of-Sale-POS-machine-work-1024x1024.png",
    content: dummyContent
  },
  {
    id: "10",
    title: "How does POS Machine work?",
    slug: "how-does-pos-machine-work",
    excerpt: "A comprehensive breakdown of the hardware and software mechanics behind modern POS machines.",
    category: "Technology",
    date: "January 23, 2025",
    readTime: "6 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/01/pos-work-1024x1024.webp",
    content: dummyContent
  },
  {
    id: "11",
    title: "Best Free POS Software",
    slug: "best-free-pos-software-and-system",
    excerpt: "Comparing the best free POS software options available for startups and small businesses.",
    category: "Software Guide",
    date: "January 16, 2025",
    readTime: "7 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2025/01/HulmPOS-Free-Point-of-Sale-Software.webp",
    content: dummyContent
  },
  {
    id: "12",
    title: "Best Point of Sale (POS) System for Small Business in Pakistan",
    slug: "best-point-of-sale-system-for-small-business-in-pakistan",
    excerpt: "Discover which POS systems offer the best value, reliability, and FBR integration for Pakistani small businesses.",
    category: "Software Guide",
    date: "December 30, 2024",
    readTime: "8 min read",
    author: "Aamir Khan",
    authorSlug: "hulm-solutions-editorial-team",
    imageUrl: "/images/uploads/2024/12/Best-POS-system-for-small-business.webp",
    content: dummyContent
  }
];
