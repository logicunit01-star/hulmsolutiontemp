import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: '/insights',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/insights/:slug*',
        destination: '/blog/:slug*/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/pos-case-studies/',
        permanent: true,
      },
      {
        source: '/case-studies/:slug*',
        destination: '/pos-case-studies/:slug*/',
        permanent: true,
      },
      {
        source: '/pos-case-studies/laptop-store-pos-system-karachi',
        destination: '/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store/',
        permanent: true,
      },
      {
        source: '/industries/bakery',
        destination: '/industries/bakery-pos-system/',
        permanent: true,
      },
      {
        source: '/industries/salon-spa',
        destination: '/industries/salon-pos/',
        permanent: true,
      },
      {
        source: '/industries/restaurant',
        destination: '/industries/restaurant-pos/',
        permanent: true,
      },
      {
        source: '/point-of-sale-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/hulm-editorial-team',
        destination: '/author/',
        permanent: true,
      },
      {
        source: '/author/hulm-team',
        destination: '/author/',
        permanent: true,
      },
      {
        source: '/author/aamir-khan',
        destination: '/author/',
        permanent: true,
      },
      {
        // Old WordPress media URLs (image search, backlinks) -> the same files under /images/uploads/.
        source: '/wp-content/uploads/:path*',
        destination: '/images/uploads/:path*',
        permanent: true,
      },
      {
        source: '/author/hulm-solutions-editorial-team',
        destination: '/author/',
        permanent: true,
      },
      {
        source: '/book-a-demo',
        destination: '/contact/',
        permanent: true,
      },
      // Legacy WordPress archive / feed / sitemap URLs that may still be indexed or linked.
      { source: '/category/:path*', destination: '/blogs/', permanent: true },
      { source: '/tag/:path*', destination: '/blogs/', permanent: true },
      { source: '/blogs/page/:n', destination: '/blogs/', permanent: true },
      { source: '/page/:n', destination: '/blogs/', permanent: true },
      { source: '/comments/feed', destination: '/feed/', permanent: true },
      { source: '/blog/:slug/feed', destination: '/blog/:slug/', permanent: true },
      { source: '/blog/:slug/amp', destination: '/blog/:slug/', permanent: true },
      { source: '/wp-sitemap.xml', destination: '/sitemap_index.xml', permanent: true },
      { source: '/category-sitemap.xml', destination: '/sitemap_index.xml', permanent: true },
      { source: '/author-sitemap.xml', destination: '/sitemap_index.xml', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      {
        source: '/pos-case-studies/implementing-pos-systems-for-real-tech-system',
        destination: '/pos-case-studies/real-tech-pos-system-karachi/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Staging / preview hosts only (*.netlify.app, *.vercel.app) are kept out of Google.
        // The production domain (hulmsolutions.com) never matches this rule and is fully indexable.
        source: "/:path*",
        has: [{ type: "host", value: "(?:.*\\.)?(?:netlify\\.app|vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // Security headers for every host. Do NOT add X-Robots-Tag here: it would de-index production.
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hulmsolutions.com',
      },
    ],
  },
};

export default nextConfig;
