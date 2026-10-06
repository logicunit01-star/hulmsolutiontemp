import { SITE_FEEDS } from "@/lib/seo/page-seo";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { insightsData } from "@/content/pages/insightsData";
import { FinalCta } from "@/components/home/final-cta";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insights & Blog - Hulm Solutions",
  description: "Read the latest news, guides, and insights from the Hulm POS team.",
  alternates: { canonical: "/blogs/", types: SITE_FEEDS },
};

export default function InsightsPage() {
  const featuredInsight = insightsData[0];
  const remainingInsights = insightsData.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="pt-20 lg:pt-28 pb-16 bg-[#F8FAF9] text-center border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[#209f8f] uppercase tracking-wider mb-6 shadow-xs">
              Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#152825] mb-5 tracking-tight leading-tight">
              Insights & Resources
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed">
              Stay ahead of the curve with expert POS guides, industry trends, and product updates from the Hulm team.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Insight */}
      <Section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-[#209f8f]/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={featuredInsight.imageUrl} 
                  alt={featuredInsight.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-6 text-xs sm:text-sm text-zinc-500">
                  <span className="bg-[#209f8f]/10 text-[#209f8f] px-3 py-1 rounded-full font-semibold">
                    {featuredInsight.category}
                  </span>
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredInsight.date}</div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#152825] mb-4 group-hover:text-[#209f8f] transition-colors tracking-tight">
                  {featuredInsight.title}
                </h2>
                <p className="text-base text-zinc-600 mb-8 leading-relaxed">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center shrink-0">
                        <img 
                          src="/images/author/hulm-editorial-team.png" 
                          alt={featuredInsight.author} 
                          className="w-full h-full object-contain p-0.5" 
                        />
                      </div>
                      <Link href="/author/" className="hover:text-[#209f8f] transition-colors font-medium">
                        {featuredInsight.author}
                      </Link>
                    </div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredInsight.readTime}</div>
                  </div>
                  <Link href={`/blog/${featuredInsight.slug}/`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAF9] group-hover:bg-[#209f8f] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Insights Grid */}
      <Section className="bg-[#F8FAF9] py-16 lg:py-24 border-t border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingInsights.map((insight) => (
              <div key={insight.id} className="group flex flex-col bg-white border border-gray-200/80 rounded-2xl overflow-hidden hover:shadow-md hover:border-[#209f8f]/40 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insight.imageUrl} 
                    alt={insight.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#209f8f] shadow-xs">
                    {insight.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-3 text-xs text-zinc-500">
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {insight.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {insight.readTime}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#152825] mb-2 group-hover:text-[#209f8f] transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-zinc-500 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center shrink-0">
                        <img 
                          src="/images/author/hulm-editorial-team.png" 
                          alt={insight.author} 
                          className="w-full h-full object-contain p-0.5" 
                        />
                      </div>
                      <span>{insight.author}</span>
                    </div>
                    <Link href={`/blog/${insight.slug}/`} className="inline-flex items-center text-[#209f8f] font-semibold hover:text-[#1a8578] transition-colors">
                      Read Article <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </div>
  );
}
