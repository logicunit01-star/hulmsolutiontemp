import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const staticPages = {
  "src/app/page.tsx": "/",
  "src/app/about/page.tsx": "/about/",
  "src/app/blogs/page.tsx": "/blogs/",
  "src/app/contact/page.tsx": "/contact/",
  "src/app/customer-management/page.tsx": "/customer-management/",
  "src/app/fbr-integrated-pos-pakistan/page.tsx": "/fbr-integrated-pos-pakistan/",
  "src/app/features/page.tsx": "/features/",
  "src/app/industries/page.tsx": "/industries/",
  "src/app/integration/page.tsx": "/integration/",
  "src/app/inventory-management/page.tsx": "/inventory-management/",
  "src/app/mobile-pos/page.tsx": "/mobile-pos/",
  "src/app/order-management/page.tsx": "/order-management/",
  "src/app/pos-case-studies/page.tsx": "/pos-case-studies/",
  "src/app/pos-software-ksa/page.tsx": "/pos-software-ksa/",
  "src/app/pos-software-qatar/page.tsx": "/pos-software-qatar/",
  "src/app/pos-software-uae/page.tsx": "/pos-software-uae/",
  "src/app/pos-software-usa/page.tsx": "/pos-software-usa/",
  "src/app/pricing/page.tsx": "/pricing/",
  "src/app/privacy-policy/page.tsx": "/privacy-policy/",
  "src/app/purchase-orders/page.tsx": "/purchase-orders/",
  "src/app/reporting-module/page.tsx": "/reporting-module/",
  "src/app/terms-and-conditions/page.tsx": "/terms-and-conditions/",
  "src/app/vendors-management/page.tsx": "/vendors-management/",
  "src/app/website/page.tsx": "/website/",
  "src/app/zatca/page.tsx": "/zatca/",
};

function staticSource(route) {
  return `import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata } from "@/lib/production-parity";

const route = ${JSON.stringify(route)};

export const metadata = productionMetadata(route);

export default function Page() {
  return <ProductionParityPage path={route} />;
}
`;
}

for (const [relativePath, route] of Object.entries(staticPages)) {
  await fs.writeFile(path.join(root, relativePath), staticSource(route), "utf8");
}

const dynamicIndustries = `import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ industry: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/industries/") && route !== "/industries/")
    .map((route) => ({ industry: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  return productionMetadata(\`/industries/\${industry}/\`);
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  return <ProductionParityPage path={\`/industries/\${industry}/\`} />;
}
`;

const dynamicBlogs = `import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/blog/"))
    .map((route) => ({ slug: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productionMetadata(\`/blog/\${slug}/\`);
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  return <ProductionParityPage path={\`/blog/\${slug}/\`} />;
}
`;

const dynamicCases = `import type { Metadata } from "next";

import { ProductionParityPage } from "@/components/seo/production-parity-page";
import { productionMetadata, productionParityPaths } from "@/lib/production-parity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productionParityPaths
    .filter((route) => route.startsWith("/pos-case-studies/") && route !== "/pos-case-studies/")
    .map((route) => ({ slug: route.split("/")[2] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productionMetadata(\`/pos-case-studies/\${slug}/\`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return <ProductionParityPage path={\`/pos-case-studies/\${slug}/\`} />;
}
`;

await fs.writeFile(path.join(root, "src/app/industries/[industry]/page.tsx"), dynamicIndustries, "utf8");
await fs.writeFile(path.join(root, "src/app/blog/[slug]/page.tsx"), dynamicBlogs, "utf8");
await fs.writeFile(path.join(root, "src/app/pos-case-studies/[slug]/page.tsx"), dynamicCases, "utf8");

const authorDir = path.join(root, "src/app/author");
await fs.mkdir(authorDir, { recursive: true });
await fs.writeFile(path.join(authorDir, "page.tsx"), staticSource("/author/"), "utf8");

console.log(`Applied production parity to ${Object.keys(staticPages).length + 4} route files.`);
