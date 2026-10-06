import { productionParityPaths } from "@/lib/production-parity";
import { blogDates } from "@/lib/blog-seo";
import { PAGE_CONTENT_UPDATED } from "@/content/content-dates";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

/** Pages that exist only on the new site (not in the WordPress snapshot). Add new routes here. */
export const newSitePaths = ["/apps/", "/book-a-demo/", "/editorial-policy/", "/pos-hardware/", "/pos-software-karachi/", "/pos-software-lahore/", "/pos-software-islamabad/", "/cookie-policy/"];

// Non-blog pages were rebuilt with the new site; blog posts keep their original modified date.
const SITE_RELEASE_DATE = process.env.SITE_RELEASE_DATE || "2026-10-01";

/**
 * <lastmod> per URL. Blog posts: last substantive content update (live WordPress date or our own
 * revision, see src/content/content-dates.ts). Other pages: their own content-update date if newer
 * than the site release date, otherwise the release date. Never "today" for everything.
 */
export function lastModified(route: string) {
  if (route.startsWith("/blog/")) {
    const slug = route.replace(/^\/blog\/|\/$/g, "");
    const { modified } = blogDates(slug);
    if (modified) return modified.slice(0, 10);
  }
  const updated = PAGE_CONTENT_UPDATED[route]?.slice(0, 10);
  return updated && updated > SITE_RELEASE_DATE ? updated : SITE_RELEASE_DATE;
}

function latest(routes: string[]) {
  return routes.map(lastModified).sort().at(-1) || SITE_RELEASE_DATE;
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function legacyUrlSet(kind: "post" | "page") {
  const routes =
    kind === "post"
      ? productionParityPaths.filter((route) => route.startsWith("/blog/"))
      : [...productionParityPaths.filter((route) => !route.startsWith("/blog/")), ...newSitePaths];
  const urls = routes
    .map((route) => `  <url><loc>${escapeXml(`${siteUrl}${route}`)}</loc><lastmod>${lastModified(route)}</lastmod></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function legacySitemapIndex() {
  const posts = productionParityPaths.filter((route) => route.startsWith("/blog/"));
  const pages = [...productionParityPaths.filter((route) => !route.startsWith("/blog/")), ...newSitePaths];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${escapeXml(`${siteUrl}/post-sitemap.xml`)}</loc><lastmod>${latest(posts)}</lastmod></sitemap>\n  <sitemap><loc>${escapeXml(`${siteUrl}/page-sitemap.xml`)}</loc><lastmod>${latest(pages)}</lastmod></sitemap>\n</sitemapindex>\n`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
