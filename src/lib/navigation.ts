export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

/**
 * Flat primary navigation (no dropdowns). Every product, industry, city and resource page stays
 * linked from the hub pages, the footer and in-page link chips, so nothing loses internal links.
 */
export const mainNav: NavItem[] = [
  { title: "Product", href: "/apps/" },
  { title: "Industries", href: "/industries/" },
  { title: "FBR", href: "/fbr-integrated-pos-pakistan/" },
  { title: "Pricing", href: "/pricing/" },
  { title: "Customers", href: "/pos-case-studies/" },
  { title: "Blog", href: "/blogs/" },
];

export const footerNav = [
  {
    title: "INDUSTRIES",
    links: [
      { title: "Retail Store", href: "/industries/retail-store" },
      { title: "Restaurant", href: "/industries/restaurant-pos" },
      { title: "Pharmacy Store", href: "/industries/pharmacy-store" },
      { title: "Salon / Spa", href: "/industries/salon-pos" },
      { title: "Manufacturing Industry", href: "/industries/manufacturing-industries" },
      { title: "Furniture Store", href: "/industries/furniture-store" },
    ],
  },
  {
    title: "Product",
    links: [
      { title: "POS & Billing", href: "/features" },
      { title: "Inventory Management", href: "/inventory-management" },
      { title: "Purchase Orders", href: "/purchase-orders" },
      { title: "Vendor Management", href: "/vendors-management" },
      { title: "Mobile POS", href: "/mobile-pos/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Hulm", href: "/about" },
      { title: "Integration", href: "/integration" },
      { title: "Locations", href: "/contact" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/Hulmsolutions" },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/hulm-solutions/" },
  { title: "Instagram", href: "https://www.instagram.com/hulmsolutions1101/" },
];
