/**
 * Blog bylines: "Written by <author> · Reviewed by <reviewer>".
 *
 * Today every post is written by Aamir Khan (the live WordPress author, same Person @id as live Yoast
 * schema) and reviewed by the Hulm Editorial Team. To hand authorship to the editorial team later,
 * change BLOG_BYLINE.author to "hulm-editorial-team" (and BLOG_BYLINE.reviewer to whoever reviews) —
 * pages, schema, RSS, llms.txt and the author page all read from here.
 */
import { SITE_URL } from "@/lib/seo/page-seo";

export const PRIMARY_AUTHOR = {
  name: "Aamir Khan",
  slug: "aamir-khan",
  url: "/author/",
  /** Same Person @id as the live Yoast schema. */
  schemaId: `${SITE_URL}/#/schema/person/7e779467ba986a4c53a92eebe898a8d8`,
  jobTitle: "Director of Operations",
  worksFor: "Logic-Unit",
  location: "Karachi, Pakistan",
  education: "Bachelor's Degree in Computer Engineering",
  linkedin: "https://pk.linkedin.com/in/aamirkhanmuhammad",
  expertise: [
    "Operations Management",
    "Business Strategy",
    "ERP Systems",
    "Web & Mobile Applications",
    "Industrial Software Solutions",
    "Digital Transformation",
  ],
  shortBio:
    "Aamir Khan is Director of Operations at Logic-Unit. A computer engineer by training, he moved from software development to leading the delivery of ERP platforms, industrial solutions and custom business software, and writes about POS, operations and digital transformation.",
  summary: [
    "Aamir Khan is a technology-centred operations leader with a Bachelor of Science in Computer Engineering and many years of experience connecting technical execution with business strategy. His career moved from software developer and programmer to executive level, which lets him design business systems that are efficient, scalable and profitable.",
    "Aamir currently serves as Director of Operations at Logic-Unit, where he leads the development and delivery of industrial solutions, ERP platforms, mobile apps, web applications and custom software systems. He works on improving operational efficiency and creating long-term growth for clients in various industries.",
  ],
} as const;

export function authorPersonSchema() {
  return {
    "@type": "Person",
    "@id": PRIMARY_AUTHOR.schemaId,
    name: PRIMARY_AUTHOR.name,
    url: `${SITE_URL}${PRIMARY_AUTHOR.url}`,
    jobTitle: PRIMARY_AUTHOR.jobTitle,
    worksFor: { "@type": "Organization", name: PRIMARY_AUTHOR.worksFor },
    description: PRIMARY_AUTHOR.shortBio,
    knowsAbout: [...PRIMARY_AUTHOR.expertise],
    sameAs: [PRIMARY_AUTHOR.linkedin],
  };
}

/** The editorial team: reviewer of every post today, possible author in future. */
export const EDITORIAL_TEAM = {
  name: "Hulm Editorial Team",
  slug: "hulm-editorial-team",
  url: "/editorial-policy/",
  schemaId: `${SITE_URL}/#editorial-team`,
  description:
    "The Hulm Editorial Team reviews every article for accuracy against the current Hulm POS product, Pakistani FBR and Gulf e-invoicing requirements, and clear, practical guidance for business owners.",
} as const;

export type BylineKey = "aamir-khan" | "hulm-editorial-team";

export const BLOG_BYLINE: { author: BylineKey; reviewer: BylineKey | null } = {
  author: "aamir-khan",
  reviewer: "hulm-editorial-team",
};

export type BylineEntity = { name: string; url: string; schemaId: string; kind: "Person" | "Organization"; title?: string };

export function bylineEntity(key: BylineKey): BylineEntity {
  return key === "aamir-khan"
    ? { name: PRIMARY_AUTHOR.name, url: PRIMARY_AUTHOR.url, schemaId: PRIMARY_AUTHOR.schemaId, kind: "Person", title: `${PRIMARY_AUTHOR.jobTitle}, ${PRIMARY_AUTHOR.worksFor}` }
    : { name: EDITORIAL_TEAM.name, url: EDITORIAL_TEAM.url, schemaId: EDITORIAL_TEAM.schemaId, kind: "Organization" };
}

export function editorialTeamSchema() {
  return {
    "@type": "Organization",
    "@id": EDITORIAL_TEAM.schemaId,
    name: EDITORIAL_TEAM.name,
    url: `${SITE_URL}${EDITORIAL_TEAM.url}`,
    description: EDITORIAL_TEAM.description,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Schema nodes for whoever appears in the byline (author + reviewer). */
export function bylineSchemaNodes() {
  const keys = [BLOG_BYLINE.author, BLOG_BYLINE.reviewer].filter(Boolean) as BylineKey[];
  return [...new Set(keys)].map((k) => (k === "aamir-khan" ? authorPersonSchema() : editorialTeamSchema()));
}
