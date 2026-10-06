import Link from "next/link";

import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { JsonLd } from "@/components/seo/json-ld";
import { EDITORIAL_TEAM, PRIMARY_AUTHOR, authorPersonSchema, editorialTeamSchema } from "@/lib/authors";
import { newPageMetadata, pageJsonLd } from "@/lib/seo/page-seo";

const route = "/editorial-policy/";
const title = "Editorial Policy | How Hulm Writes and Reviews POS Guides";
const description =
  "How Hulm Solutions writes, fact-checks, reviews and updates its POS, inventory, FBR and ZATCA articles — authors, review process, sources and corrections.";

export const metadata = newPageMetadata({ path: route, title, description });

const schema = pageJsonLd({
  route,
  name: title,
  description,
  crumbs: [{ name: "Editorial policy", path: route }],
  extra: [editorialTeamSchema(), authorPersonSchema()],
});

const sections: LegalSection[] = [
  {
    heading: "Who writes our articles",
    paragraphs: [
      <>
        Articles on the Hulm blog are written by <Link className="font-medium text-[#1b7f70] hover:underline" href={PRIMARY_AUTHOR.url}>{PRIMARY_AUTHOR.name}</Link>,{" "}
        {PRIMARY_AUTHOR.jobTitle} at {PRIMARY_AUTHOR.worksFor}, and by members of the {EDITORIAL_TEAM.name}. Each article shows its author and reviewer at the top and in the author box at the end.
      </>,
    ],
  },
  {
    heading: "How every article is reviewed",
    paragraphs: ["Before publishing, and whenever an article is updated, the Hulm Editorial Team checks that:"],
    items: [
      "Product descriptions match what Hulm POS does today — features, workflows, plans and integrations.",
      "Tax and compliance statements (FBR in Pakistan, ZATCA in Saudi Arabia, VAT in the Gulf) are general guidance and point readers to the official authority for their case.",
      "Definitions, steps and examples are correct, practical and written for business owners and staff, not for search engines.",
      "Links work and point to relevant Hulm pages or reliable external sources.",
    ],
  },
  {
    heading: "Dates you see on articles",
    paragraphs: [
      "Published shows when an article first appeared. Updated shows the last time its content changed in a meaningful way — new sections, corrected facts or rewritten answers. Layout or design changes do not change the date. Reviewed shows when the editorial team last checked the article.",
    ],
  },
  {
    heading: "Independence and product mentions",
    paragraphs: [
      "Hulm Solutions publishes these guides to help businesses choose and use point-of-sale software. Articles may recommend Hulm POS where it fits; comparisons with other products are based on publicly available information at the time of writing.",
    ],
  },
  {
    heading: "Corrections",
    paragraphs: [
      <>
        If you find an error, email <Link className="font-medium text-[#1b7f70] hover:underline" href="mailto:info@hulmsolutions.com">info@hulmsolutions.com</Link> with the article link. We review reports and update the article and its Updated date when a correction is needed.
      </>,
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <LegalPage
        eyebrow="Hulm Blog"
        title="Editorial Policy"
        effectiveDate="2 October 2026"
        introduction={<>How the Hulm Solutions blog is written, reviewed and kept up to date. Read the latest articles on the <Link className="font-medium text-[#1b7f70] hover:underline" href="/blogs/">Hulm blog</Link>.</>}
        sections={sections}
      />
    </>
  );
}
