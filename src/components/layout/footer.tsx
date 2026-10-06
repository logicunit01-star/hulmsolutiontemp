import Link from "next/link"
import { LogoLockup } from "@/components/layout/logo"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { Container } from "@/components/ui/container"
import { REGIONAL_LOCATIONS } from "@/lib/countries/data"

const productLinks = [
  { title: "Product overview", href: "/apps/" },
  { title: "POS & Billing", href: "/features/" },
  { title: "Mobile POS", href: "/mobile-pos/" },
  { title: "Inventory Management", href: "/inventory-management/" },
  { title: "Purchase Orders", href: "/purchase-orders/" },
  { title: "Vendor Management", href: "/vendors-management/" },
  { title: "Order Management", href: "/order-management/" },
  { title: "Customer Management", href: "/customer-management/" },
  { title: "Reporting & Insights", href: "/reporting-module/" },
  { title: "Logistics Management", href: "/logistics-management-software/" },
  { title: "Cattle Management", href: "/cattle-management-software/" },
  { title: "Ecommerce Store", href: "/website/" },
]

const industryLinks = [
  { title: "Retail store POS", href: "/industries/retail-store/" },
  { title: "Restaurant POS", href: "/industries/restaurant-pos/" },
  { title: "Cafe POS", href: "/industries/cafe/" },
  { title: "Bakery POS", href: "/industries/bakery-pos-system/" },
  { title: "Pharmacy POS", href: "/industries/pharmacy-store/" },
  { title: "Salon & spa POS", href: "/industries/salon-pos/" },
  { title: "Clothing store POS", href: "/industries/clothing-store/" },
  { title: "Jewellery shop POS", href: "/industries/jewellery-shop/" },
  { title: "Electric store POS", href: "/industries/electric-store/" },
  { title: "Furniture store POS", href: "/industries/furniture-store/" },
  { title: "Toy store POS", href: "/industries/toys-store/" },
  { title: "Manufacturing POS", href: "/industries/manufacturing-industries/" },
]

const resourceLinks = [
  { title: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
  { title: "ZATCA e-invoicing", href: "/zatca/" },
  { title: "Pricing", href: "/pricing/" },
  { title: "Customer stories", href: "/pos-case-studies/" },
  { title: "Blog", href: "/blogs/" },
  { title: "Integrations", href: "/integration/" },
  { title: "Book a demo", href: "/book-a-demo/" },
  { title: "POS hardware", href: "/pos-hardware/" },
  { title: "POS software in Karachi", href: "/pos-software-karachi/" },
  { title: "POS software in Lahore", href: "/pos-software-lahore/" },
  { title: "POS software in Islamabad", href: "/pos-software-islamabad/" },
]

const companyLinks = [
  { title: "About Hulm", href: "/about/" },
  { title: "Contact", href: "/contact/" },
  { title: "Sign in", href: "https://app.hulmsolutions.com/", external: true },
]

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/company/hulm-solutions/" },
  { title: "Instagram", href: "https://www.instagram.com/hulmsolutions1101/" },
  { title: "YouTube", href: "https://www.youtube.com/@Hulmsolutions" },
  { title: "Facebook", href: "https://www.facebook.com/Hulmsolutions" },
]

function FooterLinkGroup({ title, links }: { title: string, links: Array<{ title: string, href: string, external?: boolean }> }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#7ae582] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
            >
              {link.title}
              {link.external && <ArrowUpRight className="h-3 w-3" aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[#0B1F1C] bg-[#0B1F1C] text-slate-300">

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/[0.08] pb-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]" aria-label="Hulm homepage">
              <LogoLockup height={50} tone="dark" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Cloud POS for growing businesses that need faster sales, accurate stock and clearer control across every location.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="https://wa.me/923391119259" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-[#7ae582]">
                <WhatsAppIcon size={16} className="h-4 w-4" aria-hidden="true" />
                +92 339 111 9259
              </a>
              <a href="mailto:info@hulmsolutions.com" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-[#7ae582]">
                <Mail className="h-4 w-4 text-[#25a18e]" aria-hidden="true" />
                info@hulmsolutions.com
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Product" links={productLinks} />
          <FooterLinkGroup title="Industries" links={industryLinks} />
          <FooterLinkGroup title="Resources" links={resourceLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
        </div>

        <div className="border-b border-white/[0.08] py-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Regional editions</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {REGIONAL_LOCATIONS.map((location) => (
                <Link key={location.code} href={location.href} className="text-xs font-medium text-slate-400 transition-colors hover:text-[#7ae582]">
                  <span className="mr-1.5" aria-hidden="true">{location.flag}</span>
                  {location.country}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Hulm Solutions (Pvt) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy/" className="transition-colors hover:text-[#7ae582]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="transition-colors hover:text-[#7ae582]">
              Terms &amp; Conditions
            </Link>
            <Link href="/editorial-policy/" className="transition-colors hover:text-[#7ae582]">
              Editorial Policy
            </Link>
            <Link href="/cookie-policy/" className="transition-colors hover:text-[#7ae582]">
              Cookie Policy
            </Link>
            {socialLinks.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#7ae582]">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
