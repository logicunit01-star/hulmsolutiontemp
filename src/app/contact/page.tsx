import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { contactContent } from "@content/pages/contact";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { JsonLd } from "@/components/seo/json-ld";
import { pageJsonLd, seoMetadata } from "@/lib/seo/page-seo";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/contact/");

const schema = pageJsonLd({ route: "/contact/", pageType: "ContactPage", crumbs: [{ name: "Contact", path: "/contact/" }] });

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Contact" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <ContactForm contact={contactContent} />
      <GoogleReviewsSection />
    </div>
  );
}
