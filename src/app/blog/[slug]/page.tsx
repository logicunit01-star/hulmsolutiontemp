import { SITE_FEEDS } from "@/lib/seo/page-seo";
import { Metadata } from "next";
import SingleInsightPage, { generateMetadata as insightMetadata, generateStaticParams as insightStaticParams } from "@/app/insights/[slug]/page";
import { getProductionParityPage, productionMetadata } from "@/lib/production-parity";
import { blogDates } from "@/lib/blog-seo";
import { BLOG_BYLINE, bylineEntity } from "@/lib/authors";
import { allBlogsData } from "@/content/pages/allBlogsData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = `/blog/${slug}/`;
  if (getProductionParityPage(route)) {
    // Live title/description (rankings) + crawler dates from src/content/content-dates.ts.
    const base = productionMetadata(route);
    const { published, modified } = blogDates(slug, allBlogsData[slug]);
    return {
      ...base,
      authors: [{ name: bylineEntity(BLOG_BYLINE.author).name, url: bylineEntity(BLOG_BYLINE.author).url }],
      openGraph: { ...base.openGraph, type: "article", publishedTime: published, modifiedTime: modified },
    };
  }

  const metadata = await insightMetadata({ params: Promise.resolve({ slug }) });
  return {
    ...metadata,
    alternates: { canonical: `/blog/${slug}/`, types: SITE_FEEDS },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  return SingleInsightPage({ params });
}
