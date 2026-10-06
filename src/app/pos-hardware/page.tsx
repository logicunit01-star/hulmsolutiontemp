import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ArrowRight, Banknote, CreditCard, ExternalLink, Laptop, Printer, ScanLine, Tag, Wifi } from "lucide-react";

import { FinalCta } from "@/components/home/final-cta";
import { FaqDetails, type FaqDetailsItem } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";
import { industryLinks } from "@/lib/seo/site-links";

const route = "/pos-hardware/";
const title = "POS Hardware: Printers, Scanners & Cash Drawers | Hulm";
const description =
  "POS hardware for Hulm POS in Pakistan: any PC, laptop or tablet with a browser, plus standard receipt printers, barcode scanners and cash drawers.";

export const metadata = newPageMetadata({ path: route, title, description });

const devices = [
  {
    icon: Laptop,
    title: "Computer, laptop or tablet",
    text: "Hulm POS software runs in a modern web browser, so the counter can be a desktop PC, a laptop, an all-in-one touch screen or a tablet. There is nothing to install.",
    link: { label: "Mobile POS on phones and tablets", href: "/mobile-pos/" },
  },
  {
    icon: Printer,
    title: "Receipt printer",
    text: "Standard thermal receipt printers integrate easily for sales receipts, FBR invoices with QR codes and kitchen tickets.",
    link: { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
  },
  {
    icon: ScanLine,
    title: "Barcode scanner",
    text: "USB and wireless barcode scanners add items to the bill in one scan and speed up stock counts.",
    link: { label: "Inventory management", href: "/inventory-management/" },
  },
  {
    icon: Banknote,
    title: "Cash drawer",
    text: "Cash drawers connect through the receipt printer in the usual way, so the drawer opens when a cash sale is completed.",
    link: { label: "POS & billing features", href: "/features/" },
  },
  {
    icon: Tag,
    title: "Barcode label printer",
    text: "Print barcode labels and price tags for products, variants and shelves straight from your Hulm product catalogue.",
    link: { label: "Purchase orders and receiving", href: "/purchase-orders/" },
  },
  {
    icon: CreditCard,
    title: "Card machine",
    text: "Keep using the card machine from your bank and record card, wallet and bank payments at checkout. Integrated payment gateways are planned.",
    link: { label: "Integrations", href: "/integration/" },
  },
];

const setupSteps = [
  { title: "Choose the counter device", text: "Use a PC, laptop or tablet you already have, or buy one from any local supplier." },
  { title: "Connect printer and scanner", text: "Plug in the receipt printer and barcode scanner and install the printer driver." },
  { title: "Test with the Hulm team", text: "Print a test receipt and scan a few products during onboarding, before your first real sale." },
];

const faqItems: FaqDetailsItem[] = [
  {
    q: "Do I need special hardware for Hulm POS?",
    a: "No. Hulm is cloud POS software that runs in a web browser, so any PC, laptop or tablet works. Standard POS hardware such as receipt printers, barcode scanners, cash drawers and label printers integrates easily.",
  },
  {
    q: "Can I use the POS hardware I already have?",
    a: "Usually yes. Most standard receipt printers, barcode scanners and cash drawers already in Pakistani shops work with Hulm. Share the model numbers with the team if you are unsure and they will confirm before you start.",
    link: { label: "Talk to the Hulm team", href: "/book-a-demo/" },
  },
  {
    q: "Which receipt printer should I buy?",
    a: "A standard 80 mm or 58 mm thermal receipt printer is the usual choice for retail counters and restaurant kitchens. The 80 mm size gives more room for FBR invoice details and QR codes.",
  },
  {
    q: "Can Hulm run on a phone or tablet?",
    a: "Yes. Hulm runs in the browser on phones and tablets as well as computers, which suits table service, stock counts and stalls.",
    link: { label: "Mobile POS", href: "/mobile-pos/" },
  },
  {
    q: "Does POS hardware need internet to work with Hulm?",
    a: "Hulm needs an internet connection on the counter device. Keep a mobile hotspot as backup so billing can continue if the main connection drops.",
  },
  {
    q: "Do I need a card machine integrated with the POS?",
    a: "No. Keep using your bank's card machine and record the card payment at checkout, so sales and reports stay complete. Integrated payment gateways are planned.",
  },
];

const schema = pageJsonLd({
  route,
  name: title,
  description,
  crumbs: [{ name: "POS hardware", path: route }],
  faq: faqItems,
  extra: [
    {
      "@type": "ItemList",
      name: "POS hardware that works with Hulm POS",
      itemListElement: devices.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.title })),
    },
  ],
});

export default function PosHardwarePage() {
  return (
    <div className="bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "POS hardware" }]} className="border-b border-[#E4E2DA]/70 bg-white" />

      <section className="relative overflow-hidden border-b border-[#E4E2DA] bg-white py-16 sm:py-20 lg:py-24">
        <Container className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 text-sm font-semibold text-[#167c70]">
            <Printer className="h-4 w-4" aria-hidden="true" /> Works with standard hardware
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.6rem]">
            POS hardware that works with Hulm POS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Hulm POS software runs in a web browser, so you can start on a computer or tablet you already own. Standard receipt printers, barcode scanners, cash drawers and label printers integrate easily.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
                Start 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappUrl("Hi Hulm, I have a question about POS hardware for Hulm POS.")} target="_blank" rel="noopener noreferrer">
                Ask about your hardware
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <Section data-reveal className="py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">The POS hardware a counter needs</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Start with a device and a receipt printer, then add a scanner, cash drawer or label printer as your POS system grows.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((d) => (
              <article key={d.title} className="flex flex-col rounded-2xl border border-gray-200/80 bg-[#F7F6F2] p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F7F6F2] text-[#167c70]">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#0F2A26]">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">{d.text}</p>
                <Link href={d.link.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:underline">
                  {d.link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="border-y border-[#E4E2DA] bg-[#F7F6F2] py-16 md:py-20">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">Setting up POS hardware with Hulm</h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {setupSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-gray-200/80 bg-white p-6">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#167c70] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-[#0F2A26]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-zinc-600">
            <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-[#167c70]" aria-hidden="true" />
            Hulm needs an internet connection on the counter device. Keep a mobile hotspot as backup.
          </p>
        </Container>
      </Section>

      <Section data-reveal className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">POS hardware FAQs</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Buying hardware in Pakistan? Standard models from any local POS hardware supplier work. Check{" "}
              <Link href="/pricing/" className="font-semibold text-[#167c70] underline underline-offset-2">POS software pricing</Link> for the software side.
            </p>
            <LinkChips heading="Hardware setups by industry" items={industryLinks.slice(0, 8)} className="mt-8" />
          </div>
          <FaqDetails items={faqItems} />
        </Container>
      </Section>

      <FinalCta
        heading="Start selling on the hardware you already have"
        subheading="Try Hulm POS for 14 days on your own computer, printer and scanner."
        badge="No special hardware required"
      />
    </div>
  );
}
