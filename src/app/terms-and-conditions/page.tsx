import { seoMetadata } from "@/lib/seo/page-seo";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata = seoMetadata("/terms-and-conditions/");

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: ["By using Hulm POS or another service provided by Hulm Solutions, you confirm that:"],
    items: [
      "You are at least 18 years old or otherwise legally able to enter into a contract.",
      "You have read, understood and agreed to these Terms and Conditions.",
      "You will comply with applicable local, national and international laws.",
    ],
  },
  {
    heading: "2. What We Offer",
    paragraphs: ["Hulm Solutions provides point-of-sale software and business-management tools for sales, inventory, reporting and customer management. Hulm Solutions may update, improve or discontinue features or services to maintain its products, security and legal compliance."],
  },
  {
    heading: "3. Your Responsibilities",
    paragraphs: ["When using Hulm Solutions services, you agree to:"],
    items: [
      "Provide accurate information during registration and while using the services.",
      "Keep account credentials secure and confidential.",
      "Use the software only for lawful business purposes.",
      "Avoid unauthorised access, modification or reverse engineering of the software.",
      "Accept responsibility for activity carried out through your account.",
    ],
  },
  {
    heading: "4. Payments and Subscriptions",
    paragraphs: ["Services may be provided through subscriptions or one-time payments."],
    items: [
      "Payments are processed through third-party payment providers.",
      "Fees are non-refundable unless a separate agreement or refund policy states otherwise.",
      "Late or unpaid amounts may result in suspension or cancellation of service.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: ["Content, software, logos, designs and trademarks used by Hulm Solutions are owned by Hulm Solutions or its licensors and are protected by applicable intellectual-property laws."],
    items: [
      "Do not copy, reproduce or redistribute Hulm Solutions materials without written permission.",
      "Do not use the Hulm Solutions name, logos or trademarks for unauthorised purposes.",
    ],
  },
  {
    heading: "6. Limitation of Liability",
    paragraphs: ["To the extent permitted by applicable law, Hulm Solutions is not liable for indirect, incidental or consequential damages arising from use of, or inability to use, its services."],
    items: [
      "Loss of data caused by user actions, system errors or third-party integrations.",
      "Temporary interruptions caused by maintenance, updates or events outside Hulm Solutions' reasonable control.",
    ],
  },
  {
    heading: "7. Termination of Services",
    paragraphs: ["Hulm Solutions may suspend or terminate access when a user breaches these terms, engages in fraudulent or illegal activity, or fails to pay applicable fees. Outstanding amounts remain payable after termination."],
  },
  {
    heading: "Privacy Policy",
    paragraphs: [<>The <Link href="/privacy-policy" className="font-medium text-[#1b7f70] hover:underline">Hulm Solutions Privacy Policy</Link> explains how information is collected, used, stored and protected.</>],
  },
  {
    heading: "Governing Law",
    paragraphs: ["These Terms and Conditions are governed by the laws of Pakistan. Disputes will be handled by courts with competent jurisdiction in Pakistan."],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: ["Hulm Solutions may update these Terms and Conditions when its business, services or legal obligations change. The effective date displayed on this page identifies the current version."],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      path="/terms-and-conditions/"
      eyebrow="Legal"
      title="Terms and Conditions"
      effectiveDate="August 2025"
      introduction={<>These Terms and Conditions govern use of the Hulm Solutions website, Hulm POS software and related services. By signing up for, accessing or using a Hulm Solutions service, you agree to these terms.</>}
      sections={sections}
    />
  );
}

