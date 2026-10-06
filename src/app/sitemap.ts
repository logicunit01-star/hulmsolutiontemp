import type { MetadataRoute } from "next";

import { lastModified, newSitePaths } from "@/lib/legacy-sitemaps";
import { productionParityPaths } from "@/lib/production-parity";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [...productionParityPaths, ...newSitePaths].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: lastModified(route),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : ["/industries/", "/pricing/", "/features/", "/book-a-demo/"].includes(route) ? 0.9 : 0.7,
  }));
}
