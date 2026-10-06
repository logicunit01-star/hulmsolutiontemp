import { SITE_FEEDS } from "@/lib/seo/page-seo";
import type { Metadata } from "next";

import snapshot from "@/content/productionParityData.json";

export type ProductionParityPageData = {
  path: string;
  sourceUrl: string;
  finalUrl: string;
  title: string;
  description: string;
  robots: string;
  canonical: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImage: string;
  publishedTime: string;
  modifiedTime: string;
  bodyClass: string;
  stylesheets: string[];
  mainHtml: string;
  schemas: string[];
};

const pages = snapshot.pages as Record<string, ProductionParityPageData>;

export function normalizeProductionPath(input: string) {
  const pathname = input.startsWith("http") ? new URL(input).pathname : input.split(/[?#]/, 1)[0];
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function getProductionParityPage(input: string) {
  return pages[normalizeProductionPath(input)];
}

export function productionMetadata(input: string): Metadata {
  const page = getProductionParityPage(input);
  if (!page) return { title: { absolute: "Page not found | Hulm Solutions" } };

  const isArticle = page.path.startsWith("/blog/");
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path, types: SITE_FEEDS },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
    openGraph: {
      type: isArticle ? "article" : "website",
      title: page.openGraphTitle || page.title,
      description: page.openGraphDescription || page.description,
      url: page.path,
      images: page.openGraphImage ? [{ url: page.openGraphImage }] : undefined,
      ...(isArticle
        ? {
            publishedTime: page.publishedTime || undefined,
            modifiedTime: page.modifiedTime || page.publishedTime || undefined,
          }
        : {}),
    },
  };
}

export const productionParityPaths = Object.keys(pages);
