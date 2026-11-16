import { homeContent } from "@content/pages/home";
import { contactInfo, CORRECT_ADDRESS } from "@/lib/contact-info";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Hulm Solutions",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/hulm-logo-600.png`,
  description:
    "Hulm Solutions builds Hulm POS, cloud-based POS and business management software with FBR integration in Pakistan and ZATCA / UAE e-invoicing readiness for Gulf businesses.",
  knowsAbout: [
    "POS software",
    "FBR integrated POS",
    "ZATCA e-invoicing",
    "Inventory management",
    "Restaurant POS",
    "Retail POS",
  ],
  telephone: contactInfo.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: CORRECT_ADDRESS.streetAddress,
    addressLocality: CORRECT_ADDRESS.addressLocality,
    addressRegion: CORRECT_ADDRESS.addressRegion,
    postalCode: CORRECT_ADDRESS.postalCode,
    addressCountry: CORRECT_ADDRESS.addressCountry,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+92 339 111 9259",
      url: `${siteUrl}/contact/`,
      areaServed: ["PK", "SA", "AE", "QA", "US"],
      availableLanguage: ["en"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/hulm-solutions/",
    "https://www.instagram.com/hulmsolutions",
    "https://www.youtube.com/@Hulmsolutions",
  ],
};

export const softwareApplicationSchema = {
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: "Hulm POS",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Point of sale software",
  operatingSystem: "Web browser (cloud)",
  description: homeContent.atGlance.description,
  publisher: { "@id": `${siteUrl}/#organization` },
  offers: {
    "@type": "Offer",
    url: `${siteUrl}/pricing/`,
    priceCurrency: "PKR",
    price: "2500",
    description: "Starting plan per user per month, 14-day free trial",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "FBR-integrated invoices",
    "Multi-branch inventory",
    "Retail, restaurant & pharmacy editions",
    "Customer & vendor ledgers",
    "Point of Sale & cashier checkout",
    "Inventory tracking & valuation",
    "Purchase orders & receiving",
    "Sales reporting & analytics",
    "Mobile POS billing",
  ],
};

export const faqPageSchemaData = {
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: homeContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Hulm Solutions",
  alternateName: "Hulm POS",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/images/logo/hulm-logo.svg`,
  image: `${siteUrl}/images/home/dashboard/hulm-pos-terminal.webp`,
  description: homeContent.atGlance.description,
  telephone: "+92 339 111 9259",
  areaServed: "Pakistan",
  priceRange: "PKR 2,500 - PKR 15,000",
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: CORRECT_ADDRESS.streetAddress,
    addressLocality: CORRECT_ADDRESS.addressLocality,
    addressRegion: CORRECT_ADDRESS.addressRegion,
    postalCode: CORRECT_ADDRESS.postalCode,
    addressCountry: CORRECT_ADDRESS.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.918,
    longitude: 67.135,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/hulm-solutions/",
    "https://www.instagram.com/hulmsolutions",
    "https://www.youtube.com/@Hulmsolutions",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Hulm Solutions",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    softwareApplicationSchema,
    faqPageSchemaData,
    websiteSchema,
  ],
};
