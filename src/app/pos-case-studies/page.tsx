import CaseStudiesPage from "@/app/case-studies/page";
import { seoMetadata } from "@/lib/seo/page-seo";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/pos-case-studies/");

export default CaseStudiesPage;
