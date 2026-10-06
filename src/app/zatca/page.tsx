import { ComplianceTemplate } from "@/components/country/compliance-template";
import { seoMetadata } from "@/lib/seo/page-seo";

export const metadata = seoMetadata("/zatca/");

export default function Page() {
  return <ComplianceTemplate complianceKey="zatca" />;
}
