import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { DraftNotice, ToConfirm, draftRobots } from "@/components/legal/draft-notice";

/**
 * DRAFT. Not linked, not in the sitemap, noindex. Publish by: confirming every <ToConfirm> item,
 * removing <DraftNotice /> and draftRobots, adding the path to newSitePaths in
 * src/lib/legacy-sitemaps.ts, and linking it from the footer, pricing FAQ and terms (section 4).
 */
export const metadata: Metadata = {
  title: { absolute: "Refund, Billing & Cancellation Policy | Hulm Solutions" },
  description: "How Hulm POS subscriptions are billed, how to cancel, and when refunds apply.",
  alternates: { canonical: "/refund-and-cancellation-policy/" },
  robots: draftRobots,
};

const link = "font-medium text-[#1b7f70] hover:underline";

const sections: LegalSection[] = [
  {
    heading: "1. Free trial",
    paragraphs: [
      "Every new Hulm POS account starts with a 14-day free trial. No credit card is needed to start the trial, and you are not charged when it ends.",
      <>
        At the end of the trial you can choose a paid plan to keep using Hulm. If you do not choose a plan, the account is <ToConfirm>paused / closed</ToConfirm> and your data is kept for <ToConfirm>number of days</ToConfirm> so you can still subscribe and continue where you left off.
      </>,
    ],
  },
  {
    heading: "2. Billing periods",
    items: [
      <>
        <strong>Monthly plans:</strong> Starter, Growth and Business are billed monthly in Pakistani rupees, in advance, from the day you subscribe. Current prices are on the <Link className={link} href="/pricing/">pricing page</Link>.
      </>,
      <>
        <strong>Annual plans:</strong> <ToConfirm>offered or not; discount versus monthly, e.g. two months free</ToConfirm>. Annual plans are billed once, in advance, for 12 months.
      </>,
      <>
        <strong>Add-ons:</strong> extra users, branches and paid add-ons are billed with your plan. When you add one mid-cycle it is <ToConfirm>prorated for the rest of the cycle / charged from the next cycle</ToConfirm>.
      </>,
      <>
        <strong>Enterprise and onboarding services:</strong> quoted and billed as agreed in your order or contract.
      </>,
      <>
        <strong>Taxes:</strong> prices are <ToConfirm>inclusive / exclusive</ToConfirm> of applicable taxes.
      </>,
      <>
        <strong>How you pay:</strong> <ToConfirm>bank transfer / card / other methods accepted for subscriptions</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "3. Upgrades and downgrades",
    items: [
      <>
        Upgrades take effect immediately. You pay <ToConfirm>the prorated difference now / the new price from the next cycle</ToConfirm>.
      </>,
      "Downgrades take effect at the start of the next billing cycle. Check that the lower plan's user and branch limits fit your setup before you downgrade.",
    ],
  },
  {
    heading: "4. Cancelling your subscription",
    items: [
      <>
        You can cancel at any time by <ToConfirm>using the billing settings in the app / emailing info@hulmsolutions.com / messaging WhatsApp</ToConfirm>.
      </>,
      "Cancellation stops the next renewal. Your account stays active until the end of the period you have already paid for.",
      <>
        <strong>Notice period:</strong> <ToConfirm>none / number of days before renewal</ToConfirm>.
      </>,
      <>
        <strong>Your data after cancellation:</strong> you can export sales, inventory and customer data before the period ends. Data is kept for <ToConfirm>number of days</ToConfirm> after the account closes and then deleted, except records the law requires us to keep.
      </>,
      "FBR integration: if your business is FBR-registered, make sure another FBR-integrated system is in place before your Hulm subscription ends.",
    ],
  },
  {
    heading: "5. Refunds",
    paragraphs: [
      <>
        Because every account starts with a free trial, subscription fees are generally non-refundable, in line with section 4 of the <Link className={link} href="/terms-and-conditions/">terms and conditions</Link>. The exceptions are:
      </>,
    ],
    items: [
      <>
        <strong>Monthly plans:</strong> <ToConfirm>no refund for a partly used month / refund if requested within X days of the first payment</ToConfirm>.
      </>,
      <>
        <strong>Annual plans:</strong> <ToConfirm>refund within X days of payment / prorated refund of unused full months, minus any discount received</ToConfirm>.
      </>,
      "Duplicate or mistaken charges are refunded in full once confirmed.",
      <>
        If the service is unavailable for a long period because of a fault on our side, we will <ToConfirm>credit / refund</ToConfirm> the affected period.
      </>,
      <>
        Onboarding, training, data migration and custom development fees are <ToConfirm>non-refundable once the work has started</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "6. How to request a refund",
    paragraphs: [
      <>
        Email <a className={link} href="mailto:info@hulmsolutions.com">info@hulmsolutions.com</a> with your business name, the account email and the invoice in question. We reply within <ToConfirm>number of working days</ToConfirm>. Approved refunds are paid to the original payment method within <ToConfirm>number of working days</ToConfirm>.
      </>,
    ],
  },
  {
    heading: "7. Late or failed payments",
    paragraphs: [
      <>
        If a payment fails or is overdue, we will remind you before taking any action. Access may be suspended after <ToConfirm>number of days</ToConfirm> overdue. Your data is not deleted while the account is suspended, and access is restored as soon as payment is received.
      </>,
    ],
  },
  {
    heading: "8. Changes to prices and this policy",
    paragraphs: [
      <>
        We give at least <ToConfirm>30 days</ToConfirm> notice by email before a price change affects your renewal. Questions? <Link className={link} href="/contact/">Contact us</Link>.
      </>,
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <DraftNotice />
      <LegalPage
        eyebrow="Legal"
        title="Refund, Billing & Cancellation Policy"
        effectiveDate="[TO CONFIRM: publication date]"
        introduction={<>This policy explains how Hulm POS subscriptions are billed, how to cancel and when refunds apply. It applies to Hulm Solutions (Pvt) Ltd customers in Pakistan.</>}
        sections={sections}
      />
    </>
  );
}
