import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { insightsData } from "@/content/pages/insightsData";
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";
import { PRIMARY_AUTHOR } from "@/lib/authors";

export async function generateStaticParams() {
  const extraSlugs = ["hulm-editorial-team", "hulm-solutions-editorial-team", "hulm-team", "aamir-khan"];
  const uniqueAuthors = Array.from(new Set([...insightsData.map(post => post.authorSlug), ...extraSlugs]));
  return uniqueAuthors.map((authorSlug) => ({
    author: authorSlug,
  }));
}

type AuthorProps = {
  params: Promise<{ author: string }>;
};

export async function generateMetadata({ params }: AuthorProps): Promise<Metadata> {
  const { author } = await params;
  const authorPosts = insightsData.filter((p) => p.authorSlug === author);
  const name = authorPosts[0]?.author || "Hulm Editorial Team";

  return {
    title: `${name} - Hulm Insights`,
    description: `Articles written by ${name}`,
  };
}

export default async function AuthorPage({ params }: AuthorProps) {
  const { author } = await params;
  let authorPosts = insightsData.filter((p) => p.authorSlug === author);

  if (authorPosts.length === 0) {
    authorPosts = insightsData;
  }

  const authorName = authorPosts[0]?.author || "Hulm Editorial Team";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-[#E4E2DA] bg-white pt-14 lg:pt-20 pb-16 text-center">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {authorName === PRIMARY_AUTHOR.name ? (
              <>
                <div aria-hidden="true" className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-[#167c70]/10 text-[#167c70] text-3xl font-bold flex items-center justify-center mb-6 ring-1 ring-[#167c70]/20">
                  AK
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-4">
                  Author Profile
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F2A26] mb-2">{PRIMARY_AUTHOR.name}</h1>
                <p className="text-base font-semibold text-[#167c70] mb-6">
                  {PRIMARY_AUTHOR.jobTitle}, {PRIMARY_AUTHOR.worksFor} · {PRIMARY_AUTHOR.location}
                </p>
                <div className="text-left space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
                  {PRIMARY_AUTHOR.summary.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <dl className="mt-8 grid sm:grid-cols-2 gap-4 w-full text-left text-sm">
                  <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-xs transition hover:-translate-y-0.5">
                    <dt className="font-bold text-[#0F2A26] mb-1">Education</dt>
                    <dd className="text-zinc-600">{PRIMARY_AUTHOR.education}</dd>
                  </div>
                  <div className="rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-5 shadow-xs transition hover:-translate-y-0.5">
                    <dt className="font-bold text-[#0F2A26] mb-1">Expertise</dt>
                    <dd className="text-zinc-600">{PRIMARY_AUTHOR.expertise.join(", ")}</dd>
                  </div>
                </dl>
                <a
                  href={PRIMARY_AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#167c70]/25 bg-[#167c70]/6 px-4 py-2 text-xs font-semibold text-[#167c70] hover:bg-[#167c70]/12 transition-colors"
                >
                  LinkedIn Profile <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <div className="mt-14 pt-8 border-t border-[#E4E2DA] w-full text-center">
                  <h2 className="text-2xl font-bold text-[#0F2A26]">Articles by {PRIMARY_AUTHOR.name} on POS software and business operations</h2>
                  <p className="mt-2 text-sm text-zinc-500">{authorPosts.length} published articles</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-[#FAF9F5] overflow-hidden flex items-center justify-center mb-6 ring-1 ring-[#E4E2DA]">
                  <Image
                    src="/images/author/hulm-editorial-team.png"
                    alt={authorName}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] tracking-wide mb-4">
                  Editorial Team
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F2A26] mb-4">
                  {authorName}
                </h1>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Read all {authorPosts.length} insights and articles written by {authorName}.
                </p>
              </>
            )}
          </div>
        </Container>
      </section>

      <Section className="bg-[#FAF9F5] py-16 lg:py-24 border-b border-[#E4E2DA]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((insight) => (
              <article key={insight.id} className="group flex flex-col bg-white border border-[#E4E2DA] rounded-2xl overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-zinc-100">
                  <Image 
                    src={insight.imageUrl} 
                    alt={insight.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#167c70] shadow-xs">
                    {insight.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {insight.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {insight.readTime}</div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A26] mb-3 group-hover:text-[#167c70] transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <Link href={`/blog/${insight.slug}/`} className="inline-flex items-center text-[#167c70] font-semibold text-sm hover:text-[#125f57] transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </div>
  );
}
