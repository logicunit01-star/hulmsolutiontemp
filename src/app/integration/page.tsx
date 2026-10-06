import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Plug, ShoppingCart, Calculator, ArrowRight, ShieldCheck, Code2, Boxes } from "lucide-react";
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
    color: "text-emerald-600",
    bg: "bg-emerald-50 border border-emerald-100"
  },
  {
    title: "Ecommerce & Online Store Integrations",
    href: "/website/",
    linkLabel: "Explore the Hulm ecommerce store",
    description: "Supported WooCommerce and Shopify connectors can exchange products, stock and orders between Hulm POS and your online store based on the agreed configuration.",
    icon: ShoppingCart,
    color: "text-[#167c70]",
    bg: "bg-[#209f8f]/10 border border-[#209f8f]/20"
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
    bg: "bg-[#209f8f]/10 border border-[#209f8f]/20"
  },
  {
    title: "API & Custom Integrations",
    description: "API integrations are listed on the Business plan and API access is available as an add-on. Scope is confirmed before implementation.",
    icon: Code2,
    href: "/pricing/",
    linkLabel: "See plans with API integrations",
    color: "text-slate-700",
    bg: "bg-slate-50 border border-slate-200"
  }
];

export default function IntegrationPage() {
  preloadHeroPattern();
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <JsonLd data={schema} />
      {/* Hero */}
      <section className="relative w-full py-20 sm:py-28 bg-[#0F2A26] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
            backgroundSize: "600px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#7AE582] mb-4">
            Ecosystem Integrations
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Hulm POS integration for retail, restaurants, Shopify &amp; more
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Connect your retail POS or restaurant POS with supported commerce, accounting, payment and tax workflows, including Shopify, WooCommerce and FBR. We confirm compatibility and configuration before implementation.
          </p>
        </div>
      </section>

      <Section data-reveal className="bg-[#F7F6F2] py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] tracking-tight">Hulm Solutions POS integration ecosystem</h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed">Why POS integrations matter: every connected tool removes a manual step between the sale, the stock count and the books.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div key={idx} className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${integration.bg} ${integration.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0F2A26] mb-2">{integration.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-5">
                      {integration.description}
                    </p>
                    <Link href={integration.href} className="inline-flex items-center text-[#167c70] font-semibold text-sm hover:text-[#1a8578] transition-colors">
                      {integration.linkLabel} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section data-reveal className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] tracking-tight">POS integration FAQs</h2>
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
