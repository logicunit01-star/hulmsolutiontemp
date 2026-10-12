import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ArrowRight, Banknote, CreditCard, ExternalLink, Laptop, Printer, ScanLine, Sparkles, Tag, Wifi } from "lucide-react";

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

      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#167c70]" />
            <span>Works with standard hardware</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#0F2A26] sm:text-5xl lg:text-[3.6rem]">
            POS hardware that works with Hulm POS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600">
            Hulm POS software runs in a web browser, so you can start on a computer or tablet you already own. Standard receipt printers, barcode scanners, cash drawers and label printers integrate easily.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#0F2A26] hover:bg-[#167c70] text-white shadow-sm px-7 h-12 text-sm font-semibold">
              <a href={contactInfo.signupUrl} target="_blank" rel="noreferrer">
                Start 14-Day Free Trial <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-[#E4E2DA] hover:bg-[#F7F6F2] h-12 px-6 text-sm font-semibold">
              <a href={whatsappUrl("Hi Hulm, I have a question about POS hardware for Hulm POS.")} target="_blank" rel="noopener noreferrer">
                Ask about your hardware
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <Section data-reveal className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Hardware Essentials
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">The POS hardware a counter needs</h2>
            <p className="text-base leading-relaxed text-zinc-600 font-normal">
              Start with a device and a receipt printer, then add a scanner, cash drawer or label printer as your POS system grows.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((d) => (
              <article key={d.title} className="lift flex flex-col rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-7 shadow-xs group">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white border border-[#E4E2DA] text-[#167c70] group-hover:bg-[#167c70] group-hover:text-white transition-colors">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0F2A26]">{d.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-6 text-zinc-600 font-normal">{d.text}</p>
                <Link href={d.link.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#167c70] hover:text-[#105f56]">
                  {d.link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="border-y border-[#E4E2DA] bg-[#F7F6F2] py-16 md:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Easy Deployment
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">Setting up POS hardware with Hulm</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {setupSteps.map((s, i) => (
              <li key={s.title} className="lift rounded-2xl border border-[#E4E2DA] bg-white p-7 shadow-xs">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#167c70] text-sm font-bold text-white shadow-xs">{i + 1}</span>
                <h3 className="mt-5 font-bold text-[#0F2A26] text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 font-normal">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-xs sm:text-sm text-zinc-600">
            <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-[#167c70]" aria-hidden="true" />
            Hulm needs an internet connection on the counter device. Keep a mobile hotspot as backup.
          </p>
        </Container>
      </Section>

      <Section data-reveal className="py-16 md:py-20 bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Got Questions?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F2A26] sm:text-4xl">POS hardware FAQs</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 font-normal">
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
