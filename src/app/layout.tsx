import type { Metadata, Viewport } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { StickyMobileCta } from "@/components/leads/sticky-mobile-cta";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import { MicrosoftClarity } from "@/components/analytics/clarity";
import { SiteTracking } from "@/components/analytics/site-tracking";
import { WhatsAppFloat } from "@/components/leads/whatsapp-float";
import { contactInfo } from "@/lib/contact-info";
import { siteStructuredData } from "@/lib/seo/site-schema";
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
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TMMQ565S";
const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || process.env.HUBSPOT_PORTAL_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F2A26",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hulm Solutions - Making Every Sale Seamless",
    template: "%s",
  },
  description: "Hulm Solutions delivers innovative POS software and management systems to revolutionize your business operations.",
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
    google: "u11VcMpy0A_fhTFKRCbkFBcZcETYqzydjWxiYT4BAXQ",
    other: {
      "msvalidate.01": "558F3E9D1726A2C3C8992A4B7EBB32A5",
    },
  },
  // Google shows a favicon in search results only if it is square and at least 48x48.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${schibsted.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');tp('register', 'ZfMtKoiZQ3Zi4yYF');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`antialiased flex min-h-screen flex-col text-[#0F2A26]`}>
        <GoogleTagManager id={gtmId} />
        <MicrosoftClarity />
        {hubspotPortalId && (
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src={`//js-na2.hs-scripts.com/${hubspotPortalId}.js`}
          />
        )}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
            aria-hidden="true"
          />
        </noscript>
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
