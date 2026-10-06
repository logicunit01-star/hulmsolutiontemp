/**
 * SEO overlay kit for non-blog pages (see planning/seo-audit-2026-09-30/SEO-OVERLAY-METHOD.md).
 *
 * - seoMetadata(route): the LIVE WordPress title + meta description (they carry the rankings),
 *   a self canonical with a trailing slash, and an absolute og/twitter image (live image, or the
 *   site default when the live page had none).
 * - pageJsonLd(...): one @graph with WebPage + BreadcrumbList + an optional page-type node
 *   (SoftwareApplication / Service / CollectionPage ...) + FAQPage built from the visible FAQ.
 *
 * Blog and insights pages keep using productionMetadata() unchanged.
 */
import type { Metadata } from "next";

import { faqPageSchema, type FaqDetailsItem } from "@/components/seo/faq-details";
import { getProductionParityPage, normalizeProductionPath } from "@/lib/production-parity";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

/** Absolute URL for structured data (relative site paths like /images/uploads/... get the site origin). */
export const absoluteUrl = (u?: string) => (u && u.startsWith("/") ? `${SITE_URL}${u}` : u || undefined);
export const DEFAULT_OG_IMAGE = "/images/uploads/2026/06/hero-image-hulm.webp";

/** RSS + llms.txt discovery links; merged into every page's alternates (page alternates replace the layout's). */
export const SITE_FEEDS = {
  "application/rss+xml": [{ url: "/feed/", title: "Hulm Solutions Blog RSS" }],
  "text/plain": [{ url: "/llms.txt", title: "LLM-readable site summary" }],
};

/**
 * Regional editions of the POS landing page. Each lists the others as hreflang alternates so Google
 * shows the Pakistan homepage in Pakistan and the country page in the USA / KSA / UAE / Qatar.
 */
export const REGIONAL_ALTERNATES: Record<string, string> = {
  "en-PK": "/",
  "en-US": "/pos-software-usa/",
  "en-SA": "/pos-software-ksa/",
  "en-AE": "/pos-software-uae/",
  "en-QA": "/pos-software-qatar/",
  "x-default": "/",
};
const REGIONAL_PATHS = new Set(Object.values(REGIONAL_ALTERNATES));

export function seoMetadata(route: string, opts: { ogImage?: string; ogAlt?: string; type?: "website" | "article" } = {}): Metadata {
  const path = normalizeProductionPath(route);
  const live = getProductionParityPage(path);
  if (!live) throw new Error(`seoMetadata: no live snapshot for ${path}`);
  const image = opts.ogImage || live.openGraphImage || DEFAULT_OG_IMAGE;
  const indexable = false;
  const followable = false;
  return {
    title: { absolute: live.title },
    description: live.description,
    alternates: REGIONAL_PATHS.has(path) ? { canonical: path, languages: REGIONAL_ALTERNATES, types: SITE_FEEDS } : { canonical: path, types: SITE_FEEDS },
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
    openGraph: {
      type: opts.type || "website",
      siteName: "Hulm Solutions",
      locale: "en_PK",
      title: live.openGraphTitle || live.title,
      description: live.openGraphDescription || live.description,
      url: path,
      images: [{ url: image, alt: opts.ogAlt || live.title }],
    },
    twitter: { card: "summary_large_image", title: live.title, description: live.description, images: [image] },
  };
}

/** Metadata for NEW pages that have no live WordPress equivalent (e.g. /book-a-demo/). */
export function newPageMetadata({ path, title, description, ogImage = DEFAULT_OG_IMAGE }: { path: string; title: string; description: string; ogImage?: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, types: SITE_FEEDS },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
    openGraph: { type: "website", siteName: "Hulm Solutions", locale: "en_PK", title, description, url: path, images: [{ url: ogImage, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export function liveSeo(route: string) {
  const live = getProductionParityPage(route);
  return { title: live?.title || "", description: live?.description || "", ogImage: live?.openGraphImage || DEFAULT_OG_IMAGE };
}

type Crumb = { name: string; path: string };

export function pageJsonLd({
  route,
  crumbs,
  pageType = "WebPage",
  node,
  faq,
  extra = [],
  name,
  description: descriptionOverride,
}: {
  route: string;
  /** Title/description for pages without a live snapshot. */
  name?: string;
  description?: string;
  /** Breadcrumb trail AFTER Home, e.g. [{ name: "Industries", path: "/industries/" }, { name: "Bakery POS", path: "/industries/bakery-pos-system/" }] */
  crumbs: Crumb[];
  pageType?: string;
  /** Page-type node (SoftwareApplication, Service, CollectionPage ...); @id is added. */
  node?: Record<string, unknown>;
  faq?: readonly FaqDetailsItem[];
  extra?: Record<string, unknown>[];
}) {
  const path = normalizeProductionPath(route);
  const url = `${SITE_URL}${path}`;
  const live = liveSeo(path);
  const title = name || live.title;
  const description = descriptionOverride || live.description;
  const ogImage = live.ogImage;
  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType,
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    },
  ];
  if (node) graph.push({ "@id": `${url}#${String(node["@type"]).toLowerCase()}`, ...node });
  if (faq && faq.length) graph.push(faqPageSchema(faq, `${url}#faq`));
  graph.push(...extra);
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Standard Hulm POS SoftwareApplication node (price from the live Starter plan). */
export function softwareNode(name: string, description: string, subCategory = "Point of sale software") {
  return {
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: subCategory,
    operatingSystem: "Web",
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: { "@type": "Offer", url: `${SITE_URL}/pricing/`, priceCurrency: "PKR", price: "2500", availability: "https://schema.org/InStock" },
  };
}
