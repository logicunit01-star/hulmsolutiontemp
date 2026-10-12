import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Plug, ShoppingCart, Calculator, ArrowRight, ShieldCheck, Code2, Boxes, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FinalCta } from "@/components/home/final-cta";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import Link from "next/link";
import { FaqDetails } from "@/components/seo/faq-details";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, seoMetadata, softwareNode } from "@/lib/seo/page-seo";
import { preloadHeroPattern } from "@/lib/hero-pattern";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/integration/");

const faqItems = [
  {
    q: "What is POS integration?",
    a: "POS integration connects your point of sale with other tools, such as payment gateways, accounting software, ecommerce stores and tax authorities, so sales data moves between systems instead of being re-typed.",
  },
  {
    q: "Does Hulm POS integrate with Shopify and WooCommerce?",
    a: "Supported connectors can exchange products, stock and orders between Hulm POS and a WooCommerce or Shopify store, based on the configuration agreed during setup. Hulm stays the point of sale at your counter, so the connector links your Shopify store to Hulm rather than to a separate Shopify POS.",
    link: { label: "Hulm ecommerce store", href: "/website/" },
  },
  {
    q: "Is FBR integration available?",
    a: "Yes. Eligible sales can be connected to a configured FBR invoice workflow; registration, device and reporting requirements are confirmed during setup.",
    link: { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
  },
  {
    q: "Which payment gateways can the POS use?",
    a: "Payment gateway integrations are not available yet; they are planned for a future update. Today you can record cash, card, mobile-wallet and bank-transfer payments at checkout.",
  },
  {
    q: "Can I build a custom integration?",
    a: "API integrations are listed on the Business plan, and API access is available as an add-on. Confirm the scope with the Hulm team.",
    link: { label: "POS pricing", href: "/pricing/" },
  },
];

const schema = pageJsonLd({
  route: "/integration/",
  crumbs: [{ name: "Integrations", path: "/integration/" }],
  node: { ...softwareNode("Hulm POS", "Hulm POS integrations for accounting, ecommerce, FBR and custom APIs."), featureList: ["FBR integration", "WooCommerce and Shopify", "Accounting software", "API and custom integrations"] },
  faq: faqItems,
});

const integrations = [
  {
    title: "FBR Integration (Pakistan)",
    href: "/fbr-integrated-pos-pakistan/",
    linkLabel: "Explore FBR integrated POS",
    description: "Connect eligible sales to a configured FBR invoice workflow. Registration, device and reporting requirements are confirmed during setup.",
    icon: ShieldCheck,
    color: "text-[#167c70]",
    bg: "bg-[#167c70]/10 border border-[#167c70]/20"
  },
  {
    title: "Ecommerce & Online Store Integrations",
    href: "/website/",
    linkLabel: "Explore the Hulm ecommerce store",
    description: "Supported WooCommerce and Shopify connectors can exchange products, stock and orders between Hulm POS and your online store based on the agreed configuration.",
    icon: ShoppingCart,
    color: "text-[#167c70]",
    bg: "bg-[#167c70]/10 border border-[#167c70]/20"
  },
  {
    title: "Accounting & Finance Integrations",
    href: "/contact/",
    linkLabel: "Ask about accounting integrations",
    description: "Use supported exports or integrations for accounting workflows. Available fields and synchronisation schedules depend on the selected setup.",
    icon: Calculator,
    color: "text-blue-600",
    bg: "bg-blue-50 border border-blue-100"
  },
  {
    title: "Payment Gateway Integrations (Coming Soon)",
    href: "/contact/",
    linkLabel: "Ask to be notified",
    description: "Online payment gateway integrations are planned. Until then, record cash, card, mobile-wallet and bank-transfer payments against each sale at checkout.",
    icon: Plug,
    color: "text-amber-600",
    bg: "bg-amber-50 border border-amber-100"
  },
  {
    title: "Inventory & CRM, Built In",
    description: "Inventory management and customer management are native Hulm apps, so stock and customer records stay connected to each sale without a separate integration.",
    icon: Boxes,
    href: "/inventory-management/",
    linkLabel: "Explore inventory management",
    color: "text-[#167c70]",
    bg: "bg-[#167c70]/10 border border-[#167c70]/20"
  },
  {
    title: "API & Custom Integrations",
    description: "API integrations are listed on the Business plan and API access is available as an add-on. Scope is confirmed before implementation.",
    icon: Code2,
    href: "/pricing/",
    linkLabel: "See plans with API integrations",
    color: "text-zinc-700",
    bg: "bg-zinc-100 border border-zinc-200"
  }
];

export default function IntegrationPage() {
  preloadHeroPattern();
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "Integrations" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-20 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#167c70]" />
            <span>Ecosystem Integrations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#0F2A26] mb-4 leading-tight">
            Hulm POS integration for retail, restaurants, Shopify &amp; more
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Connect your retail POS or restaurant POS with supported commerce, accounting, payment and tax workflows, including Shopify, WooCommerce and FBR. We confirm compatibility and configuration before implementation.
          </p>
        </div>
      </section>

      <Section data-reveal className="bg-[#F7F6F2] py-20 border-b border-[#E4E2DA]">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Unified Data
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A26] tracking-tight">Hulm Solutions POS integration ecosystem</h2>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">Why POS integrations matter: every connected tool removes a manual step between the sale, the stock count and the books.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div key={idx} className="lift bg-white p-7 lg:p-9 rounded-2xl border border-[#E4E2DA] shadow-xs flex flex-col md:flex-row gap-5 items-start hover:border-[#167c70] transition-colors">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${integration.bg} ${integration.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2A26] mb-2">{integration.title}</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm mb-4 font-normal">
                      {integration.description}
                    </p>
                    <Link href={integration.href} className="inline-flex items-center text-[#167c70] font-semibold text-sm hover:text-[#105f56] transition-colors">
                      {integration.linkLabel} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-16 md:py-24 border-b border-[#E4E2DA]">
        <Container className="max-w-3xl">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#167c70]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2A26] tracking-tight">POS integration FAQs</h2>
          </div>
          <FaqDetails items={faqItems} />
          <LinkChips heading="Explore Hulm POS apps" items={[
            { label: "POS features", href: "/features/" },
            { label: "Inventory management", href: "/inventory-management/" },
            { label: "Customer management", href: "/customer-management/" },
            { label: "Retail store POS", href: "/industries/retail-store/" },
            { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
            { label: "ZATCA e-invoicing POS", href: "/zatca/" },
          ]} centered className="mt-10" />
        </Container>
      </Section>

      <GoogleReviewsSection />
      <FinalCta />
    </div>
  );
}
