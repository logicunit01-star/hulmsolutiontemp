/**
 * Pakistan city landing pages (new pages, no WordPress equivalent).
 * Each page carries city-specific content: the provincial tax authority, the local business mix,
 * real customer stories where Hulm has them, and how setup works from that city.
 * Keep claims in the same "confirmed during setup" voice as the industry pages.
 */
export type CitySegment = { title: string; text: string; href: string; linkLabel: string };
export type CityFaq = { q: string; a: string; link?: { label: string; href: string } };

export type CityPage = {
  slug: string;
  path: string;
  city: string;
  region: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  segmentsHeading: string;
  segmentsIntro: string;
  segments: CitySegment[];
  taxHeading: string;
  taxParagraphs: string[];
  /** Slugs from caseStudiesData; omit when there is no local customer story yet. */
  caseStudies: string[];
  setupHeading: string;
  setupSteps: { title: string; text: string }[];
  faqHeading: string;
  faqs: CityFaq[];
  ctaHeading: string;
  ctaSubheading: string;
};

const fbr = { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" };
const pricing = { label: "POS software price in Pakistan", href: "/pricing/" };
const hardware = { label: "POS hardware", href: "/pos-hardware/" };
const demo = { label: "Book a free demo", href: "/book-a-demo/" };

export const cityPages: Record<string, CityPage> = {
  karachi: {
    slug: "karachi",
    path: "/pos-software-karachi/",
    city: "Karachi",
    region: "Sindh",
    title: "POS Software in Karachi | FBR-Integrated POS System | Hulm",
    description:
      "Hulm POS software is built in Karachi for retailers, restaurants and pharmacies: FBR-integrated invoicing, inventory and branches. 14-day free trial.",
    eyebrow: "Made in Karachi",
    h1: "POS software in Karachi, built by a Karachi team",
    intro:
      "Hulm Solutions is based in Gulistan-e-Johar, Karachi. Hulm POS software runs billing, FBR-integrated invoicing, inventory and branch reporting for Karachi retail shops, restaurants, pharmacies and distributors from one cloud POS system.",
    segmentsHeading: "A POS system for the way Karachi businesses sell",
    segmentsIntro:
      "Karachi's trade runs from busy retail markets to caterers, pharmacies and wholesale distributors. The same Hulm POS foundation is set up around each of these workflows.",
    segments: [
      {
        title: "Electronics, mobile and computer shops",
        text: "Serial numbers, warranties and fast barcode billing for the electronics and IT retailers that make up much of Karachi's market trade.",
        href: "/industries/electric-store/",
        linkLabel: "Electric store POS",
      },
      {
        title: "Restaurants, caterers and takeaways",
        text: "Dine-in, takeaway and delivery orders, kitchen tickets and event orders in one restaurant POS, with your own riders tracked in the logistics app.",
        href: "/industries/restaurant-pos/",
        linkLabel: "Restaurant POS",
      },
      {
        title: "Pharmacies and medical suppliers",
        text: "Batch and expiry tracking, purchase orders and B2B billing for pharmacies and medical equipment distributors.",
        href: "/industries/pharmacy-store/",
        linkLabel: "Pharmacy POS",
      },
      {
        title: "Wholesale and distribution",
        text: "Purchase orders, vendor ledgers and stock across warehouses for traders supplying the rest of the country from Karachi.",
        href: "/purchase-orders/",
        linkLabel: "Purchase order software",
      },
    ],
    taxHeading: "FBR and SRB requirements for Karachi businesses",
    taxParagraphs: [
      "Tier-1 retailers in Pakistan must connect their point of sale to FBR, so every invoice carries an FBR invoice number and QR code. Hulm sets up FBR integration with you as part of onboarding.",
      "Restaurants and other service businesses in Karachi also deal with sales tax on services collected by the Sindh Revenue Board (SRB). Share your SRB registration details and the team reviews the invoice configuration with you during setup.",
    ],
    caseStudies: [
      "implementing-a-pos-system-for-retail-the-laptop-store",
      "real-tech-pos-system-karachi",
      "implementing-pos-systems-for-medical-euquipment-industry",
      "farhan-caterers-pos-karachi",
    ],
    setupHeading: "How setup works in Karachi",
    setupSteps: [
      { title: "Book a demo", text: "See Hulm with your own products and workflow, online or on WhatsApp." },
      { title: "Import products and stock", text: "Bring in your catalogue and opening stock from Excel or CSV." },
      { title: "Connect FBR and hardware", text: "FBR registration, receipt printers and barcode scanners are set up with you." },
      { title: "Train staff and go live", text: "Your counter team is trained and the Karachi team stays on WhatsApp and phone after go-live." },
    ],
    faqHeading: "POS software in Karachi: FAQs",
    faqs: [
      {
        q: "What is the best POS software in Karachi?",
        a: "The best POS software for a Karachi business handles fast billing, FBR-integrated invoices, inventory, purchasing and branch reports in one place. Hulm POS covers these in one cloud system, with a team based in Karachi.",
      },
      {
        q: "Is Hulm FBR integrated for Karachi retailers?",
        a: "Yes. FBR integration is available for eligible retailers, adding the FBR invoice number and QR code to every receipt.",
        link: fbr,
      },
      {
        q: "Does Hulm handle SRB sales tax for restaurants in Karachi?",
        a: "SRB requirements are reviewed as part of your setup, alongside FBR where it applies. Share your registration details so the team can confirm the configuration for your restaurant.",
        link: { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
      },
      {
        q: "How much does a POS system cost in Karachi?",
        a: "Hulm plans start at PKR 2,500 per month, with a 14-day free trial and no credit card required.",
        link: pricing,
      },
      {
        q: "What hardware do I need?",
        a: "Any PC, laptop or tablet with a web browser. Standard receipt printers, barcode scanners, cash drawers and label printers integrate easily.",
        link: hardware,
      },
      {
        q: "Where is the Hulm office in Karachi?",
        a: "Hulm Solutions is at C-27, Block 14, Gulistan-e-Johar, Karachi. Most setup and training is done online and on WhatsApp, so you do not need to visit.",
        link: { label: "About Hulm Solutions", href: "/about/" },
      },
    ],
    ctaHeading: "Run your Karachi business on Hulm POS",
    ctaSubheading: "Start a 14-day free trial, or book a demo with the Karachi team.",
  },

  lahore: {
    slug: "lahore",
    path: "/pos-software-lahore/",
    city: "Lahore",
    region: "Punjab",
    title: "POS Software in Lahore | FBR-Integrated POS System | Hulm",
    description:
      "Hulm POS software for Lahore retailers, restaurants and clothing brands: FBR-integrated invoicing, inventory, branches and online setup. Free trial.",
    eyebrow: "POS for Lahore businesses",
    h1: "POS software in Lahore for retail, restaurants and multi-branch brands",
    intro:
      "Hulm POS software gives Lahore businesses one cloud POS system for billing, FBR-integrated invoicing, inventory and branch reporting, from a single clothing outlet to a restaurant group with branches across the city.",
    segmentsHeading: "A POS system for Lahore's busiest trades",
    segmentsIntro:
      "Lahore's mix of fashion retail, food, electronics and pharmacies needs different counter workflows on the same system.",
    segments: [
      {
        title: "Clothing and footwear retailers",
        text: "Size and colour variants, exchanges and stock by branch for fashion brands and boutiques running several outlets.",
        href: "/industries/clothing-store/",
        linkLabel: "Clothing store POS",
      },
      {
        title: "Restaurants, cafes and food chains",
        text: "Table, takeaway and delivery orders with kitchen tickets and menu stock, set up for one restaurant or a chain of branches.",
        href: "/industries/restaurant-pos/",
        linkLabel: "Restaurant POS",
      },
      {
        title: "Electronics and mobile retail",
        text: "Serial numbers, warranties and barcode billing for electronics, mobile and accessory shops.",
        href: "/industries/electric-store/",
        linkLabel: "Electric store POS",
      },
      {
        title: "Pharmacies and bakeries",
        text: "Batch and expiry visibility for medicine stock, and counter billing with advance orders for bakeries and sweet shops.",
        href: "/industries/pharmacy-store/",
        linkLabel: "Pharmacy POS",
      },
    ],
    taxHeading: "FBR and PRA requirements for Lahore businesses",
    taxParagraphs: [
      "Tier-1 retailers in Pakistan must connect their point of sale to FBR, so every invoice carries an FBR invoice number and QR code. Hulm sets up FBR integration with you as part of onboarding.",
      "Restaurants and other service businesses in Lahore also deal with sales tax on services collected by the Punjab Revenue Authority (PRA). Share your PRA registration details and the team reviews the invoice configuration with you during setup.",
    ],
    caseStudies: [],
    setupHeading: "How setup works for Lahore businesses",
    setupSteps: [
      { title: "Book an online demo", text: "See Hulm with your own products and workflow on a video call or WhatsApp." },
      { title: "Import products and stock", text: "Bring in your catalogue, variants and opening stock from Excel or CSV." },
      { title: "Connect FBR and hardware", text: "FBR registration, receipt printers and barcode scanners are set up with you remotely." },
      { title: "Train staff and go live", text: "Your counter team is trained online, with WhatsApp and phone help after go-live." },
    ],
    faqHeading: "POS software in Lahore: FAQs",
    faqs: [
      {
        q: "What is the best POS software in Lahore?",
        a: "The best POS software for a Lahore business handles fast billing, FBR-integrated invoices, variants and stock across branches, and owner reports in one place. Hulm POS covers these in one cloud system.",
      },
      {
        q: "Can Hulm be set up for my Lahore business if the team is in Karachi?",
        a: "Yes. Demos, setup and training are done online, on WhatsApp and by phone, so Lahore businesses get the same onboarding as Karachi customers.",
        link: demo,
      },
      {
        q: "Does Hulm handle PRA sales tax for restaurants in Lahore?",
        a: "PRA requirements are reviewed as part of your setup, alongside FBR where it applies. Share your registration details so the team can confirm the configuration for your restaurant.",
        link: { label: "Restaurant POS", href: "/industries/restaurant-pos/" },
      },
      {
        q: "Is Hulm FBR integrated for Lahore retailers?",
        a: "Yes. FBR integration is available for eligible retailers, adding the FBR invoice number and QR code to every receipt.",
        link: fbr,
      },
      {
        q: "How much does a POS system cost in Lahore?",
        a: "Hulm plans start at PKR 2,500 per month, with a 14-day free trial and no credit card required.",
        link: pricing,
      },
    ],
    ctaHeading: "Run your Lahore business on Hulm POS",
    ctaSubheading: "Start a 14-day free trial, or book an online demo for your store or restaurant.",
  },

  islamabad: {
    slug: "islamabad",
    path: "/pos-software-islamabad/",
    city: "Islamabad",
    region: "Islamabad Capital Territory",
    title: "POS Software in Islamabad & Rawalpindi | Hulm POS",
    description:
      "Hulm POS software for Islamabad and Rawalpindi retailers, restaurants and pharmacies: FBR-integrated invoicing, inventory and branches. Free trial.",
    eyebrow: "POS for Islamabad and Rawalpindi",
    h1: "POS software in Islamabad and Rawalpindi for retail and restaurants",
    intro:
      "Hulm POS software gives businesses in Islamabad and Rawalpindi one cloud POS system for billing, FBR-integrated invoicing, inventory and branch reporting, whether you run one outlet or branches in both cities.",
    segmentsHeading: "A POS system for the twin cities",
    segmentsIntro:
      "Supermarkets, restaurants, cafes and pharmacies across the twin cities use the same Hulm foundation, set up around how each one sells.",
    segments: [
      {
        title: "Supermarkets and retail stores",
        text: "Barcode billing, low-stock alerts and branch-level stock for marts, general stores and retail chains.",
        href: "/industries/retail-store/",
        linkLabel: "Retail store POS",
      },
      {
        title: "Restaurants and cafes",
        text: "Table, takeaway and delivery orders with kitchen tickets and ingredient stock for restaurants and cafes.",
        href: "/industries/cafe/",
        linkLabel: "Cafe POS",
      },
      {
        title: "Pharmacies",
        text: "Batch and expiry tracking and fast counter billing for pharmacies and medical stores.",
        href: "/industries/pharmacy-store/",
        linkLabel: "Pharmacy POS",
      },
      {
        title: "Salons and service businesses",
        text: "Appointments, service billing and product sales for salons, spas and other service counters.",
        href: "/industries/salon-pos/",
        linkLabel: "Salon POS",
      },
    ],
    taxHeading: "FBR, ICT and PRA requirements in Islamabad and Rawalpindi",
    taxParagraphs: [
      "Tier-1 retailers in Pakistan must connect their point of sale to FBR, so every invoice carries an FBR invoice number and QR code. Hulm sets up FBR integration with you as part of onboarding.",
      "Sales tax on services works differently in the twin cities: in Islamabad Capital Territory it is administered by FBR, while Rawalpindi falls under the Punjab Revenue Authority (PRA). If you have branches in both cities, share each registration and the team reviews the invoice configuration with you during setup.",
    ],
    caseStudies: [],
    setupHeading: "How setup works for Islamabad and Rawalpindi businesses",
    setupSteps: [
      { title: "Book an online demo", text: "See Hulm with your own products and workflow on a video call or WhatsApp." },
      { title: "Import products and stock", text: "Bring in your catalogue and opening stock from Excel or CSV." },
      { title: "Connect FBR and hardware", text: "FBR registration, receipt printers and barcode scanners are set up with you remotely." },
      { title: "Train staff and go live", text: "Your counter team is trained online, with WhatsApp and phone help after go-live." },
    ],
    faqHeading: "POS software in Islamabad: FAQs",
    faqs: [
      {
        q: "What is the best POS software in Islamabad?",
        a: "The best POS software for an Islamabad business handles fast billing, FBR-integrated invoices, inventory and branch reports in one place. Hulm POS covers these in one cloud system for retail stores, restaurants and pharmacies.",
      },
      {
        q: "Can I run branches in Islamabad and Rawalpindi on one account?",
        a: "Yes. Branches in both cities can be managed from one Hulm account, with stock, sales and reports by location.",
        link: { label: "Inventory management", href: "/inventory-management/" },
      },
      {
        q: "Is Hulm FBR integrated for Islamabad retailers?",
        a: "Yes. FBR integration is available for eligible retailers, adding the FBR invoice number and QR code to every receipt.",
        link: fbr,
      },
      {
        q: "Can Hulm be set up remotely for my Islamabad business?",
        a: "Yes. Demos, setup and training are done online, on WhatsApp and by phone.",
        link: demo,
      },
      {
        q: "How much does a POS system cost in Islamabad?",
        a: "Hulm plans start at PKR 2,500 per month, with a 14-day free trial and no credit card required.",
        link: pricing,
      },
    ],
    ctaHeading: "Run your Islamabad or Rawalpindi business on Hulm POS",
    ctaSubheading: "Start a 14-day free trial, or book an online demo for your store or restaurant.",
  },
};

export const cityLinks = Object.values(cityPages).map((c) => ({ label: `POS software in ${c.city}`, href: c.path }));
