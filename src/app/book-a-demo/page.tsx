import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { CalendarCheck, CheckCircle2, ReceiptText, Boxes, BarChart3, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

import { LeadForm } from "@/components/leads/lead-form";
import { ClientLogos } from "@/components/home/client-logos";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";
import { industryLinks } from "@/lib/seo/site-links";

const title = "Book a Free Hulm POS Demo | Hulm Solutions";
const description =
  "Book a free Hulm POS demo. See billing, inventory, multi-branch reporting and FBR-integrated invoicing set up for your business, then start a 14-day free trial.";

export const metadata = newPageMetadata({ path: "/book-a-demo/", title, description });

const seeItems = [
  { icon: ReceiptText, title: "Checkout and FBR invoicing", text: "How a sale is billed at the counter and how FBR invoice numbers and QR codes are added where your business needs them." },
  { icon: Boxes, title: "Inventory across branches", text: "Products, variants, purchasing and stock by location, using examples from your own catalogue." },
  { icon: BarChart3, title: "Reports for owners", text: "Daily sales, branch comparison and the reports you would review each week." },
];

const steps = [
  "Share your details and what you want to see.",
  "The team confirms a time with you on WhatsApp or phone.",
  "Walk through Hulm with a product specialist, then start your 14-day free trial.",
];

const faqItems = [
  { q: "Is the Hulm POS demo free?", a: "Yes. The demo is free and there is no obligation. You can also start a 14-day free trial without a credit card." },
  { q: "Can you show a setup for my industry?", a: "Yes. Tell us whether you run a retail store, restaurant, pharmacy, bakery, salon or another business, and the demo will focus on that workflow.", link: { label: "POS software for all industries", href: "/industries/" } },
  { q: "Do I need to install anything for the demo?", a: "No. The demo is an online walkthrough. Hulm runs in the browser on computers and tablets, so there is nothing to install beforehand." },
  { q: "Will you cover FBR integration?", a: "Yes, if it applies to you. The team explains how FBR-integrated invoicing is set up and what registration details are needed.", link: { label: "FBR integrated POS software", href: "/fbr-integrated-pos-pakistan/" } },
  { q: "Can I see pricing before the demo?", a: "Yes. Plans start at PKR 2,500 per month and are listed on the pricing page.", link: { label: "POS software price in Pakistan", href: "/pricing/" } },
];

const schema = pageJsonLd({
  route: "/book-a-demo/",
  name: title,
  description,
  crumbs: [{ name: "Book a demo", path: "/book-a-demo/" }],
  faq: faqItems,
});

export default function BookDemoPage() {
  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Book a demo" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      <section className="relative border-b border-[#E4E2DA] bg-white py-14 sm:py-18 lg:py-20">
        <Container className="relative grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
              <CalendarCheck className="h-4 w-4" /> Free, no obligation
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl">Book a free Hulm POS demo</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              See how Hulm POS software would run your counter, stock and branches. The walkthrough is set up around your business, not a generic script.
            </p>
            <ul className="mt-8 space-y-5">
              {seeItems.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F7F6F2] text-[#167c70]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-[#0F2A26]">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-600">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-[#E4E2DA] bg-white p-6">
              <h2 className="text-lg font-bold text-[#0F2A26]">How it works</h2>
              <ol className="mt-4 space-y-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-zinc-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#167c70] text-xs font-bold text-white">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div data-track-location="demo_form" className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F2A26]">Request your demo</h2>
            <p className="mb-6 mt-1 text-sm text-zinc-500">Takes under a minute. We reply on WhatsApp or phone.</p>
            <LeadForm source="demo" submitLabel="Book my free demo" />
            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-6 sm:flex-row">
              <a
                href={whatsappUrl("Hi Hulm, I'd like to book a Hulm POS demo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#1f9d55]/40 px-4 py-3 text-sm font-semibold text-[#17803f] hover:bg-[#f0faf4]"
              >
                <WhatsAppIcon size={18} className="h-4 w-4" /> Book on WhatsApp
              </a>
              {contactInfo.bookingUrl ? (
                <a
                  href={contactInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#167c70]/40 px-4 py-3 text-sm font-semibold text-[#167c70] hover:bg-[#f2fbf9]"
                >
                  <CalendarCheck className="h-4 w-4" /> Pick a time <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <ClientLogos heading="Join businesses already running on Hulm" />

      <Section data-reveal>
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">Demo questions</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">Prefer to try it yourself first?</p>
            <a href={contactInfo.signupUrl} className="mt-4 inline-flex items-center gap-2 font-semibold text-[#167c70]">
              <CheckCircle2 className="h-4 w-4" /> Start the 14-day free trial
            </a>
            <LinkChips heading="Demos for every industry" items={industryLinks.slice(0, 8)} className="mt-8" />
            <p className="mt-6 text-sm text-zinc-500">
              Or read <Link href="/pos-case-studies/" className="font-semibold text-[#167c70] underline underline-offset-2">how other businesses use Hulm</Link> and{" "}
              <Link href="/about/" className="font-semibold text-[#167c70] underline underline-offset-2">who we are</Link>.
            </p>
          </div>
          <FaqDetails items={faqItems} />
        </Container>
      </Section>
    </div>
  );
}
