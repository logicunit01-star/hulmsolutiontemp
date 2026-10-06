import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { DraftNotice, ToConfirm, draftRobots } from "@/components/legal/draft-notice";

/**
 * DRAFT. Not linked, not in the sitemap, noindex. Only publish statements the engineering team
 * has confirmed. Publish by: confirming every <ToConfirm> item, removing <DraftNotice /> and
 * draftRobots, adding the path to newSitePaths, pointing security.txt "Policy:" here and linking
 * it from the footer and the "Is a POS system secure?" FAQs.
 */
export const metadata: Metadata = {
  title: { absolute: "Security at Hulm | How Hulm POS Protects Your Data" },
  description: "How Hulm POS protects your business data: encryption, access control, hosting, backups and how to report a security issue.",
  alternates: { canonical: "/security/" },
  robots: draftRobots,
};

const link = "font-medium text-[#1b7f70] hover:underline";

const sections: LegalSection[] = [
  {
    heading: "Encryption",
    items: [
      "All traffic between your browser and Hulm (the website and app.hulmsolutions.com) is encrypted with HTTPS (TLS).",
      <>
        Data at rest is <ToConfirm>encrypted at rest with … / encrypted by the hosting provider</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "Access control in your account",
    items: [
      "Owners decide which staff can use which apps and actions through user roles and permissions.",
      <>
        Passwords are <ToConfirm>stored hashed (algorithm)</ToConfirm>. Two-factor sign-in is <ToConfirm>available / planned / not offered</ToConfirm>.
      </>,
      <>
        Sign-in activity and key changes are <ToConfirm>logged and visible to account owners / logged internally</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "Hosting and backups",
    items: [
      <>
        Hulm runs on <ToConfirm>hosting or cloud provider</ToConfirm> in <ToConfirm>region or country</ToConfirm>.
      </>,
      <>
        Data is backed up <ToConfirm>how often</ToConfirm> and backups are kept for <ToConfirm>number of days</ToConfirm>. Restores are tested <ToConfirm>how often</ToConfirm>.
      </>,
      <>
        Target availability: <ToConfirm>only state a figure the team monitors and stands behind</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Hulm does not store full card numbers. Card payments at your counter are processed by your bank or payment provider, and Hulm records the payment against the sale.",
    ],
  },
  {
    heading: "Inside Hulm Solutions",
    items: [
      "Only staff who need it to support your account can access customer data, and only for that purpose.",
      <>
        Support staff access your account <ToConfirm>only with your permission / under logged support access</ToConfirm>.
      </>,
      <>
        Security updates to servers and dependencies are applied <ToConfirm>process and timing</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "Your data",
    paragraphs: [
      <>
        Your sales, inventory and customer records belong to your business. You can export them, and on request they are deleted after your account closes, as described in the <Link className={link} href="/privacy-policy/">privacy policy</Link>.
      </>,
    ],
  },
  {
    heading: "Reporting a security issue",
    paragraphs: [
      <>
        If you think you have found a vulnerability, email <a className={link} href="mailto:info@hulmsolutions.com">info@hulmsolutions.com</a> <ToConfirm>or a dedicated security@ address</ToConfirm> with the details. Please do not access other customers&apos; data or disrupt the service while testing. We aim to reply within <ToConfirm>number of working days</ToConfirm>. Our contact details are also published in <a className={link} href="/.well-known/security.txt">security.txt</a>.
      </>,
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <DraftNotice />
      <LegalPage
        eyebrow="Trust"
        title="Security at Hulm"
        effectiveDate="[TO CONFIRM: publication date]"
        introduction={<>Hulm POS holds your sales, stock and customer records. This page explains how that data is protected and what you control in your own account.</>}
        sections={sections}
      />
    </>
  );
}
