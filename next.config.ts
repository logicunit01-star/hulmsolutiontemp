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
    ];
  },
  async headers() {
    return [
      {
        // Staging / preview hosts (*.netlify.app) must never be indexed. Production host is unaffected.
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.netlify\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
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
