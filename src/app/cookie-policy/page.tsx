import Link from "next/link";

import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";

const route = "/cookie-policy/";
const title = "Cookie Policy | Hulm Solutions";
const description =
  "How the Hulm Solutions website uses cookies and similar technologies for analytics, marketing attribution and forms, and how to manage them in your browser.";

export const metadata = newPageMetadata({ path: route, title, description });

const link = "font-medium text-[#1b7f70] hover:underline";

const sections: LegalSection[] = [
  {
    heading: "What cookies are",
    paragraphs: [
      "Cookies are small text files a website stores in your browser. Similar technologies, such as session storage, keep information for the length of a visit. This policy covers the public website at hulmsolutions.com. The Hulm POS application at app.hulmsolutions.com uses its own cookies to keep you signed in.",
    ],
  },
  {
    heading: "Cookies and storage we use",
    items: [
      <>
        <strong>Analytics:</strong> the site loads Google Tag Manager, which runs Google Analytics 4. GA4 sets cookies such as <code>_ga</code> and <code>_ga_&lt;ID&gt;</code> to count visits and see which pages are useful. These cookies typically last up to two years.
      </>,
      <>
        <strong>Marketing tags:</strong> tags added through Google Tag Manager, such as advertising conversion tags, may set their own cookies to measure campaigns. They are managed through the same container.
      </>,
      <>
        <strong>Campaign attribution (session storage):</strong> when you arrive from a campaign link, the site keeps the UTM source, the landing page and the referrer for the current visit, so a demo or trial request can be credited to the right campaign. This is cleared when you close the tab.
      </>,
      <>
        <strong>Embedded video:</strong> product videos load from YouTube only when you press play. YouTube may then set its own cookies.
      </>,
    ],
  },
  {
    heading: "Why we use them",
    items: [
      "To understand which pages and features visitors find useful and improve the site.",
      "To measure which campaigns bring demo and trial requests.",
      "To keep forms and page features working during a visit.",
    ],
    paragraphs: ["Hulm Solutions does not sell personal information collected through cookies."],
  },
  {
    heading: "Managing cookies",
    paragraphs: [
      "You can block or delete cookies in your browser settings, and most browsers offer a private mode that clears them when you close the window. Blocking analytics cookies does not stop the website from working.",
      <>
        To opt out of Google Analytics on every site, you can install Google&apos;s{" "}
        <a className={link} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Analytics opt-out browser add-on
        </a>
        .
      </>,
    ],
  },
  {
    heading: "More information",
    paragraphs: [
      <>
        Read the <Link className={link} href="/privacy-policy/">privacy policy</Link> for how Hulm Solutions handles personal information, or{" "}
        <Link className={link} href="/contact/">contact us</Link> with questions about cookies.
      </>,
    ],
  },
];

const schema = pageJsonLd({ route, name: title, description, crumbs: [{ name: "Cookie policy", path: route }] });

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <LegalPage
        eyebrow="Legal"
        title="Cookie Policy"
        effectiveDate="October 2026"
        introduction={<>This policy explains which cookies and similar technologies the Hulm Solutions website uses, why, and how you can control them.</>}
        sections={sections}
      />
    </>
  );
}
