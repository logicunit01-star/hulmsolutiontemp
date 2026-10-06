import { notFound, permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{ app: string }>;
};

const canonicalAppRoutes: Record<string, string> = {
  "purchase-orders": "/purchase-orders/",
  "vendors-management": "/vendors-management/",
  "cattle-management-software": "/cattle-management-software/",
  "customer-management": "/customer-management/",
  "order-management": "/order-management/",
  "logistics-management-software": "/logistics-management-software/",
  "inventory-management": "/inventory-management/",
  "reporting-module": "/reporting-module/",
  website: "/website/",
  "mobile-pos": "/mobile-pos/",
};

export function generateStaticParams() {
  return Object.keys(canonicalAppRoutes).map((app) => ({
    app,
  }));
}

export default async function SubAppPage({ params }: Props) {
  const { app } = await params;
  const destination = canonicalAppRoutes[app];

  if (!destination) {
    notFound();
  }

  permanentRedirect(destination);
}
