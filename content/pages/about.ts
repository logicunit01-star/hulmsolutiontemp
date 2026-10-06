import { StandardPageContent } from '../types';

export const aboutContent: StandardPageContent = {
  seo: {
    title: "About Us | Our Mission | Our Vision - Hulm Solutions",
    description: "Learn about Hulm Solutions' mission to deliver innovative POS software and our vision to revolutionize business operations with efficient, scalable solutions",
    keywords: ["About Hulm Solutions", "POS Software Pakistan", "SME Operations Platform", "Cloud POS"]
  },
  hero: {
    headline: "About Hulm Solutions",
    primaryCTA: {
      label: "",
      href: ""
    }
  },
  additionalSections: [
    {
      type: "split-who-we-are",
      heading: "Who We Are",
      content: "Hulm Solutions builds POS software for businesses that need a clearer way to manage sales, stock and day-to-day operations. A business can start with Hulm POS and add connected tools for purchasing, vendors, customers, orders, expenses, reporting and other workflows as its needs grow.\n\nOur focus is practical: make checkout simple, keep operational records connected and give owners a reliable view of what is happening across their business. Hulm is designed around the needs of Pakistani retailers and service businesses, including local support and optional FBR integration.\n\nWe combine software development experience with direct feedback from businesses using the platform. That helps us improve the product around real operating problems instead of adding complexity for its own sake.",
      image: "/images/uploads/2024/12/hulm-solutions-pos-hoem-page-who-we-are-section-image-e1733227868253.png"
    },
    {
      type: "split-mission",
      heading: "Our Mission",
      content: "Our mission is to help Pakistani businesses replace disconnected spreadsheets, paper records and manual follow-ups with one dependable operating system. We want each sale, stock movement and business decision to be easier to record, understand and act on.\n\nThat starts with a POS system that staff can learn quickly and extends to the connected modules a business genuinely needs. We support customers through setup and daily use so the software becomes part of a better process, not another burden for the team.",
      image: "/images/product/hulm-apps-workspace.webp"
    },
    {
      type: "four-grid",
      items: [
        { title: "User-Friendly Technology", description: "Designed to be intuitive and easy to use, even for beginners." },
        { title: "Customizable Solutions", description: "Tailored to the specific needs of your business, whether small or large." },
        { title: "Dedicated Support", description: "Local customer support on WhatsApp, phone and email." },
        { title: "Customer Evidence", description: "Real customer reviews and case studies show how businesses use Hulm in daily operations." }
      ]
    },
    {
      type: "split-vision",
      heading: "Our Vision",
      content: "Our vision is to become Pakistan’s most trusted POS platform for growing businesses. We aim to earn that trust through reliable software, clear pricing, responsive support and steady product improvement.\n\nAs customers grow from one counter to multiple locations, Hulm should grow with them without forcing a disruptive change of POS system. Over time, the same foundation can connect more of the business while keeping sales and operations at the centre.",
      image: "/images/uploads/2024/12/hulm-our-vission-e1733836535286.png"
    },
    {
      type: "testimonials-header",
      heading: "Customer Success Stories",
      content: "See how customers use Hulm POS to manage sales, stock and daily operations, in their own words and through documented case studies."
    },
    {
      type: "contact-form",
      heading: "We're Here to Help Your Business Thrive"
    }
  ]
};
