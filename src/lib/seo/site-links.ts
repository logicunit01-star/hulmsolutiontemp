/** Canonical internal link sets with keyword anchors (trailing slash on every href). */
export const productLinks = [
  { label: "POS features", href: "/features/" },
  { label: "Inventory management", href: "/inventory-management/" },
  { label: "Purchase orders", href: "/purchase-orders/" },
  { label: "Order management", href: "/order-management/" },
  { label: "Customer management (CRM)", href: "/customer-management/" },
  { label: "Vendor management", href: "/vendors-management/" },
  { label: "Reporting module", href: "/reporting-module/" },
  { label: "Mobile POS", href: "/mobile-pos/" },
  { label: "Logistics management", href: "/logistics-management-software/" },
  { label: "Cattle management", href: "/cattle-management-software/" },
  { label: "Ecommerce store", href: "/website/" },
  { label: "Integrations", href: "/integration/" },
  { label: "POS hardware", href: "/pos-hardware/" },
] as const;

export const industryLinks = [
  { label: "Retail store POS", href: "/industries/retail-store/" },
  { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
  { label: "Pharmacy POS", href: "/industries/pharmacy-store/" },
  { label: "Bakery POS", href: "/industries/bakery-pos-system/" },
  { label: "Cafe POS", href: "/industries/cafe/" },
  { label: "Salon & spa POS", href: "/industries/salon-pos/" },
  { label: "Clothing store POS", href: "/industries/clothing-store/" },
  { label: "Jewellery POS", href: "/industries/jewellery-shop/" },
  { label: "Electric store POS", href: "/industries/electric-store/" },
  { label: "Furniture store POS", href: "/industries/furniture-store/" },
  { label: "Toy store POS", href: "/industries/toys-store/" },
  { label: "Manufacturing POS", href: "/industries/manufacturing-industries/" },
] as const;

export const countryLinks = [
  { label: "POS software in USA", href: "/pos-software-usa/" },
  { label: "POS software in KSA", href: "/pos-software-ksa/" },
  { label: "POS software in UAE", href: "/pos-software-uae/" },
  { label: "POS system in Qatar", href: "/pos-software-qatar/" },
  { label: "ZATCA e-invoicing POS", href: "/zatca/" },
] as const;

export const linksExcept = <T extends { href: string }>(list: readonly T[], href: string) => list.filter((l) => l.href !== href);
