import { CountryTemplate } from "@/components/country/country-template";
import { seoMetadata } from "@/lib/seo/page-seo";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/pos-software-ksa/");

export default function Page() {
  return <CountryTemplate countryKey="pos-software-ksa" />;
}
