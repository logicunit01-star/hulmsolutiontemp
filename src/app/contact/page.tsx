import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { contactContent } from "@content/pages/contact";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
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
      <section className="bg-white py-10 text-center">
        <p className="mx-auto max-w-2xl px-6 text-base text-zinc-600">
          Want to see Hulm on your own products and workflow first?{" "}
          <Link href="/book-a-demo/" className="font-semibold text-[#167c70] underline underline-offset-2 hover:text-[#125f57]">
            Book a POS demo
          </Link>{" "}
          with the Hulm team.
        </p>
      </section>
      <GoogleReviewsSection />
      <FinalCta
        heading="Ready to get started with Hulm?"
        subheading="Discuss your locations, checkout workflow, inventory needs and integration requirements with the Hulm POS team."
      />
    </div>
  );
}

