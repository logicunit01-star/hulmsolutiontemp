import { ComplianceTemplate } from "@/components/country/compliance-template";
import { seoMetadata } from "@/lib/seo/page-seo";

export const metadata = seoMetadata("/fbr-integrated-pos-pakistan/");

export default function Page() {
  return <ComplianceTemplate complianceKey="fbr-integrated-pos-pakistan" />;
}
