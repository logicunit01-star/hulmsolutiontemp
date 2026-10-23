import { SITE_FEEDS, absoluteUrl } from "@/lib/seo/page-seo";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, List, Sparkles } from "lucide-react";
import { allBlogsData } from "@/content/pages/allBlogsData";
import { insightsData } from "@/content/pages/insightsData";
import { BlogFaqEnhancer } from "@/components/blog/blog-faq-enhancer";
import { blogDates, extractFaq, prepareArticleHtml } from "@/lib/blog-seo";
import { BLOG_BYLINE, EDITORIAL_TEAM, PRIMARY_AUTHOR, bylineEntity, bylineSchemaNodes } from "@/lib/authors";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(allBlogsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogsData[slug];
  if (!post) return { title: "Not Found" };

  return {
    title: slug === "what-is-pos" ? "What’s a POS system? What does POS mean & How to use POS" : `${post.title} - Hulm Insights`,
    description: post.excerpt || post.title,
    alternates: { canonical: `/blog/${slug}/`, types: SITE_FEEDS },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || post.title,
      url: `/blog/${slug}/`,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
      publishedTime: blogDates(slug, post).published,
      modifiedTime: blogDates(slug, post).modified,
    },
  };
}

export default async function SingleInsightPage({ params }: Props) {
  const { slug } = await params;

  // All posts (including best-pos-system-for-retail) now render from the full live article
  // content in allBlogsData; the cut-down BlogDetail version dropped sections, the FAQ and schema.
  const post = allBlogsData[slug];

  if (!post) {
    notFound();
  }

  const metaItem = insightsData.find((p) => p.slug === slug);
  const category = metaItem?.category || "POS Strategy";
  const readTime = metaItem?.readTime || "6 min read";
  // Live posts were all by Aamir Khan (Yoast Person schema + /author/ bio). Keep that authorship.
  // Byline: "Written by <author> · Reviewed by <reviewer>" — configured in src/lib/authors.ts (BLOG_BYLINE).
  const author = bylineEntity(BLOG_BYLINE.author);
  const reviewer = BLOG_BYLINE.reviewer ? bylineEntity(BLOG_BYLINE.reviewer) : null;
  const authorName = author.name;
  // Dates: original publish date + last substantive update + last editorial review (src/content/content-dates.ts).
  const { published: publishedTime, modified: modifiedTime, reviewed: reviewedTime } = blogDates(slug, post);
  const fmtDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Karachi" }) : "";
  const dateStr = modifiedTime && modifiedTime !== publishedTime
    ? `Updated ${fmtDate(modifiedTime)}`
    : fmtDate(publishedTime) || post.date || metaItem?.date || "";
  const hasToc = post.tocItems && post.tocItems.length > 0;
  const articleHtml = prepareArticleHtml(post.contentHtml)
    .replace(
      /href="https:\/\/hulmsolutions\.com\/(?!images\/uploads\/)/g,
      'href="/'
    )
    .replace(
      /href="\/pos-case-studies\/laptop-store-pos-system-karachi\/?"/g,
      'href="/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store/"'
    )
    .replace(/href="\/industries\/restaurant\/?"/g, 'href="/industries/restaurant-pos/"')
    .replace(/href="(\/(?!\/)[^"#?]+)"/g, (match, path: string) =>
      path.endsWith("/") || /\.[a-z0-9]{2,5}$/i.test(path) ? match : `href="${path}/"`
    );

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");
  const pageUrl = `${siteUrl}/blog/${slug}/`;
  const faqItems = post.faq?.length ? post.faq : extractFaq(post.contentHtml);
  const wordCount = (post.contentHtml.replace(/<[^>]+>/g, " ").match(/[A-Za-z0-9’']+/g) || []).length;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.imageUrl),
        datePublished: publishedTime,
        dateModified: modifiedTime,
        wordCount,
        inLanguage: "en",
        author: { "@id": author.schemaId },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        articleSection: category,
      },
      {
        "@type": faqItems.length ? ["WebPage", "FAQPage"] : "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: post.title,
        description: post.excerpt,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        datePublished: publishedTime,
        dateModified: modifiedTime,
        ...(reviewer ? { reviewedBy: { "@id": reviewer.schemaId }, lastReviewed: reviewedTime } : {}),
        ...(faqItems.length
          ? {
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blogs/` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
      ...bylineSchemaNodes(),
    ],
  };

  // Filter 3 related articles
  const relatedPosts = insightsData
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug }));

  return (
    <div className="flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <article className="py-12 md:py-20">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs/" className="hover:text-zinc-900 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-zinc-600 truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          {/* 2-Column Minimalist Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Sticky Sidebar (TOC + Trial Card) */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {hasToc && (
                <div className="lift bg-[#FAF9F5] border border-[#E4E2DA] rounded-[22px] p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-[#E4E2DA]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0F2A26]">
                      Table of Contents
                    </p>
                  </div>
                  <nav className="max-h-[58vh] overflow-y-auto toc-scrollbar pr-3 space-y-2.5 text-[13.5px]">
                    {post.tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="group flex items-start gap-2 text-zinc-600 hover:text-[#0F2A26] transition-all duration-150 leading-[1.5] py-0.5 rounded-md"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#167c70] transition-colors shrink-0" />
                        <span className="group-hover:text-[#167c70] transition-colors font-normal">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Attractive Minimalist Trial Card */}
              <div className="lift bg-white border border-[#E4E2DA] rounded-[20px] p-6 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#167c70]/10 text-[#167c70] border border-[#167c70]/20 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#0F2A26] mb-1.5 leading-snug">
                  Modern POS for Retailers
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mb-5 font-normal">
                  Automate checkout, real-time inventory, and tax compliance with Hulm.
                </p>
                <Button asChild size="sm" className="w-full bg-[#0F2A26] hover:bg-[#167c70] text-white text-xs font-semibold h-10 rounded-full shadow-sm transition-colors">
                  <Link href="https://app.hulmsolutions.com/Register">Start Free 14-Day Trial</Link>
                </Button>
              </div>
            </aside>

            {/* Right Column: Main Article Body */}
            <div className={`${hasToc ? 'lg:col-span-8' : 'lg:col-span-12 max-w-4xl mx-auto'} min-w-0`}>
              <Link href="/blogs/" className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-[#0F2A26] transition-colors mb-6">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to all articles
              </Link>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#167c70]/10 border border-[#167c70]/20 text-[#167c70]">
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px] mb-6">
                {post.title}
              </h1>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-500 border-t border-b border-[#E4E2DA] py-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div aria-hidden="true" className="w-8 h-8 rounded-full border border-[#E4E2DA] bg-[#167c70]/10 text-[#167c70] text-[11px] font-semibold flex items-center justify-center shrink-0">
                    AK
                  </div>
                  <span>Written by</span>
                  <Link href={author.url} rel="author" className="font-semibold text-zinc-900 hover:text-[#0067ff] transition-colors">
                    {authorName}
                  </Link>
                  {reviewer && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>Reviewed by</span>
                      <Link href={reviewer.url} className="font-semibold text-zinc-900 hover:text-[#0067ff] transition-colors">
                        {reviewer.name}
                      </Link>
                    </>
                  )}
                </div>
                <span className="hidden sm:inline" aria-hidden="true">•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {publishedTime ? <time dateTime={modifiedTime || publishedTime}>{dateStr}</time> : <span>{dateStr}</span>}
                  {publishedTime && modifiedTime !== publishedTime && (
                    <span className="text-zinc-500">
                      {" "}(first published <time dateTime={publishedTime}>{fmtDate(publishedTime)}</time>)
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline" aria-hidden="true">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{readTime}</span>
                </div>
              </div>

              {/* Mobile Table of Contents */}
              {hasToc && (
                <details className="lg:hidden bg-[#FAF9F5] border border-[#E4E2DA] rounded-[20px] p-5 mb-8 text-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-bold text-[#0F2A26] cursor-pointer select-none">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#167c70]" /> Table of Contents
                    </span>
                    <span className="text-zinc-500 text-xs font-normal">Tap to expand</span>
                  </summary>
                  <nav className="max-h-[45vh] overflow-y-auto toc-scrollbar pr-2 space-y-2.5 mt-4 pt-3 border-t border-[#E4E2DA] text-[13.5px]">
                    {post.tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="group flex items-start gap-2 text-zinc-600 hover:text-[#167c70] py-1 transition-colors leading-snug"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-[#167c70] transition-colors shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </details>
              )}

              {/* Complete Article Content with Clean Editorial Typography */}
              <div
                className="blog-content mb-16"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />
              <BlogFaqEnhancer />

              {/* Author + reviewer box (E-E-A-T) */}
              <aside aria-label="About the author and review" className="p-6 sm:p-7 rounded-[20px] border border-[#E4E2DA] bg-[#FAF9F5] mb-12 space-y-5">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div aria-hidden="true" className="w-14 h-14 rounded-full border border-[#E4E2DA] bg-[#167c70]/10 text-[#167c70] font-semibold flex items-center justify-center shrink-0">
                    {author.kind === "Person" ? "AK" : "HE"}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Written by</p>
                    <p className="text-base font-bold text-[#0F2A26]">
                      <Link href={author.url} rel="author" className="hover:text-[#0067ff] transition-colors">{author.name}</Link>
                      {author.title && <span className="font-normal text-zinc-500"> · {author.title}</span>}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed mt-2 font-normal">
                      {author.kind === "Person" ? PRIMARY_AUTHOR.shortBio : EDITORIAL_TEAM.description}
                    </p>
                    {author.kind === "Person" && (
                      <a href={PRIMARY_AUTHOR.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-semibold text-[#0067ff] hover:text-[#0052cc] underline underline-offset-2 mt-3">LinkedIn profile</a>
                    )}
                  </div>
                </div>
                {reviewer && (
                  <div className="border-t border-[#E4E2DA] pt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                    <span className="font-bold text-[#0F2A26]">Reviewed by{" "}
                      <Link href={reviewer.url} className="hover:text-[#0067ff] transition-colors">{reviewer.name}</Link>
                    </span>
                    {reviewedTime && <> on <time dateTime={reviewedTime}>{fmtDate(reviewedTime)}</time></>}.{" "}
                    Every Hulm article is checked for accuracy against the current product and applicable tax rules.{" "}
                    <Link href={EDITORIAL_TEAM.url} className="font-semibold text-[#0067ff] hover:text-[#0052cc] underline underline-offset-2">Read our editorial policy</Link>.
                  </div>
                )}
              </aside>

              {/* Minimalist Bottom Upgrade Banner */}
              <div className="p-8 sm:p-10 rounded-[20px] bg-[#0F2A26] text-white text-center mb-16 shadow-xl border border-[#167c70]/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Upgrade Your Business with Hulm POS</h3>
                <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed font-normal">
                  Designed for speed, simplicity, and multi-location scalability. Start ringing up sales in minutes.
                </p>
                <Button asChild size="sm" className="bg-[#7AE582] hover:bg-[#8ef095] text-[#0F2A26] font-semibold px-6 rounded-full text-xs h-10 shadow-sm transition-colors">
                  <Link href="https://app.hulmsolutions.com/Register">Start Your Free Trial</Link>
                </Button>
              </div>

              {/* Related Articles */}
              <div className="border-t border-[#E4E2DA] pt-10">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-6">
                  Related Articles
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map((rPost, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${rPost.slug}/`}
                      className="lift p-5 rounded-[16px] border border-[#E4E2DA] hover:border-[#0067ff] transition-all flex flex-col justify-between group bg-white shadow-xs"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-800 group-hover:text-[#0067ff] transition-colors mb-3 line-clamp-2 leading-snug">
                        {rPost.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#0067ff] group-hover:text-[#0052cc] inline-flex items-center gap-1">
                        Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
