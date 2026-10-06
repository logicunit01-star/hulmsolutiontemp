import Link from "next/link";
import { seoMetadata } from "@/lib/seo/page-seo";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata = seoMetadata("/privacy-policy/");

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    items: [
      <><strong>Personal information:</strong> Name, email address, phone number and billing details provided during account creation or support inquiries.</>,
      <><strong>Business information:</strong> Store details, tax registration and transaction data required for POS operations.</>,
      <><strong>Technical data:</strong> IP address, device information, browser type, operating system and usage logs used to support system security and performance.</>,
      <><strong>Payment data:</strong> Payments are processed through third-party providers. Hulm Solutions does not store full payment-card information.</>,
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["Hulm Solutions uses collected information to:"],
    items: [
      "Deliver and improve Hulm POS and related services.",
      "Process transactions and manage subscriptions.",
      "Provide customer support and respond to inquiries.",
      "Communicate service updates, offers and product information where consent is required.",
      "Meet legal, regulatory and security obligations.",
    ],
  },
  {
    heading: "Data Sharing and Disclosure",
    paragraphs: ["Hulm Solutions does not sell personal information. Information may be shared with:"],
    items: [
      <><strong>Service providers:</strong> For payment processing, cloud hosting, analytics or system maintenance.</>,
      <><strong>Legal and regulatory authorities:</strong> When disclosure is required by applicable law or legal process.</>,
      <><strong>Business successors:</strong> In connection with a merger, acquisition or restructuring.</>,
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: ["Hulm Solutions retains information only for as long as needed to provide services, fulfil contractual obligations, meet legal requirements, resolve disputes and enforce agreements."],
  },
  {
    heading: "Data Security",
    paragraphs: ["Hulm Solutions uses administrative and technical safeguards intended to protect information."],
    items: [
      "Encrypted transmission using HTTPS.",
      "System monitoring and security review processes.",
      "Access controls that limit information to authorised personnel.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: ["Depending on your location and applicable law, you may have the right to:"],
    items: [
      "Request access to, correction of or deletion of personal information.",
      "Opt out of marketing communications.",
      "Request a copy of stored personal information.",
      "Withdraw consent where processing is based on consent.",
    ],
  },
  {
    heading: "Cookies and Tracking",
    paragraphs: ["Hulm Solutions uses cookies and similar technologies to support website functionality, understand website performance and provide relevant features. Browser settings can be used to manage or disable cookies.", <>See the <Link className="font-medium text-[#1b7f70] hover:underline" href="/cookie-policy/">cookie policy</Link> for the cookies the website uses.</>],
  },
  {
    heading: "Third-Party Links",
    paragraphs: ["The Hulm Solutions website may link to external websites. Hulm Solutions is not responsible for the privacy practices, content or policies of third-party websites."],
  },
  {
    heading: "Children's Privacy",
    paragraphs: ["Hulm Solutions services are not intended for individuals under 18, and Hulm Solutions does not knowingly collect personal information from children."],
  },
  {
    heading: "Changes to This Privacy Policy",
    paragraphs: ["Hulm Solutions may update this Privacy Policy when its services, practices or legal obligations change. The effective date displayed on this page identifies the current version."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      path="/privacy-policy/"
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="August 2025"
      introduction={<>Hulm Solutions is committed to protecting personal and business information used in connection with its website, point-of-sale software and related services. This policy explains what information Hulm Solutions collects, why it is used and the choices available to users.</>}
      sections={sections}
    />
  );
}

