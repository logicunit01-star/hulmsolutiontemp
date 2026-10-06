import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { StickyMobileCta } from "@/components/leads/sticky-mobile-cta";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { SiteTracking } from "@/components/analytics/site-tracking";
import { WhatsAppFloat } from "@/components/leads/whatsapp-float";
import { contactInfo } from "@/lib/contact-info";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TMMQ565S";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hulm Solutions - Making Every Sale Seamless",
    template: "%s",
  },
  description: "Hulm Solutions delivers innovative POS software and management systems to revolutionize your business operations.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hulm Solutions",
    title: {
      default: "Hulm Solutions",
      template: "%s",
    },
    description: "Hulm Solutions delivers innovative POS software and management systems to revolutionize your business operations.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed/", title: "Hulm Solutions Insights RSS" }],
      "text/plain": [{ url: "/llms.txt", title: "LLM-readable site summary" }],
    },
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "eja9u_sG9QlN7Hwff1OOVI1tP9koIfOzBF-XbvrzNEI",
  },
  icons: {
    icon: [
      { url: "/images/author/hulm-editorial-team.png" },
      { url: "/images/author/hulm-editorial-team.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/author/hulm-editorial-team.png",
    apple: "/images/author/hulm-editorial-team.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Hulm Solutions",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/logo.png`,
  description:
    "Hulm Solutions builds Hulm POS, cloud-based POS and business management software with FBR integration in Pakistan and ZATCA / UAE e-invoicing readiness for Gulf businesses.",
  knowsAbout: ["POS software", "FBR integrated POS", "ZATCA e-invoicing", "Inventory management", "Restaurant POS", "Retail POS"],
  email: contactInfo.email,
  telephone: contactInfo.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactInfo.address.streetAddress,
    addressLocality: contactInfo.address.addressLocality,
    addressRegion: contactInfo.address.addressRegion,
    addressCountry: contactInfo.address.addressCountry,
  },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: contactInfo.phoneDisplay, email: contactInfo.email, areaServed: ["PK", "SA", "AE", "QA", "US"], availableLanguage: ["en"] },
  ],
  sameAs: [
    "https://www.facebook.com/Hulmsolutions",
    "https://www.linkedin.com/company/hulm-solutions/",
    "https://www.instagram.com/hulmsolutions1101/",
    "https://www.youtube.com/@Hulmsolutions",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Hulm Solutions",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${schibsted.variable}`}>
      <body className={`antialiased flex min-h-screen flex-col text-[#0F2A26]`}>
        <GoogleTagManager id={gtmId} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
            aria-hidden="true"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileCta />
        <RevealObserver />
        <SiteTracking />
      </body>
    </html>
  );
}
