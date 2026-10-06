import { AppTemplate } from "@/components/apps/app-template";
import { seoMetadata } from "@/lib/seo/page-seo";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/order-management/");

export default function Page() {
  return <AppTemplate appSlug="order-management" />;
}
