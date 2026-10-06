import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { caseStudiesData } from "@/content/pages/caseStudiesData";

/** Which customer story each industry / module page features (slugs from caseStudiesData). */
export const caseStudyByRoute: Record<string, string> = {
  "/industries/retail-store/": "implementing-a-pos-system-for-retail-the-laptop-store",
  "/industries/electric-store/": "real-tech-pos-system-karachi",
  "/industries/clothing-store/": "implementing-a-pos-system-for-retail-the-laptop-store",
  "/industries/toys-store/": "implementing-a-pos-system-for-retail-the-laptop-store",
  "/industries/jewellery-shop/": "real-tech-pos-system-karachi",
  "/industries/furniture-store/": "real-tech-pos-system-karachi",
  "/industries/bakery-pos-system/": "cupcake-queen-bakery-pos-qatar",
  "/industries/cafe/": "cupcake-queen-bakery-pos-qatar",
  "/industries/restaurant-pos/": "farhan-caterers-pos-karachi",
  "/industries/pharmacy-store/": "implementing-pos-systems-for-medical-euquipment-industry",
  "/industries/manufacturing-industries/": "implementing-pos-systems-for-medical-euquipment-industry",
  "/inventory-management/": "real-tech-pos-system-karachi",
  "/order-management/": "farhan-caterers-pos-karachi",
  "/purchase-orders/": "implementing-pos-systems-for-medical-euquipment-industry",
  "/vendors-management/": "implementing-pos-systems-for-medical-euquipment-industry",
  "/reporting-module/": "cupcake-queen-bakery-pos-qatar",
  "/customer-management/": "implementing-a-pos-system-for-retail-the-laptop-store",
  "/fbr-integrated-pos-pakistan/": "implementing-a-pos-system-for-retail-the-laptop-store",
  "/pos-software-qatar/": "cupcake-queen-bakery-pos-qatar",
};

export function CaseStudyCard({ route }: { route: string }) {
  const slug = caseStudyByRoute[route];
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) return null;
  const topResult = study.results?.[0];
  return (
    <Section data-reveal className="bg-white py-14 md:py-16">
      <Container>
        <article className="grid overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#F7F6F2] lg:grid-cols-[1.3fr_0.7fr]">
          <div className="p-7 sm:p-10">
            <p className="text-[13px] font-bold text-[#167c70]">Customer story · {study.industry}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              How {study.client} runs on Hulm POS
            </h2>
            <blockquote className="mt-5 flex gap-3 text-base leading-7 text-zinc-700">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-[#25a18e]" aria-hidden="true" />
              <span>
                “{study.quote.text}”
                <span className="mt-2 block text-sm font-semibold text-[#0F2A26]">
                  {study.quote.author}, {study.quote.role}
                </span>
              </span>
            </blockquote>
            <Link
              href={`/pos-case-studies/${study.slug}/`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#167c70] hover:text-[#125f57]"
            >
              Read the {study.client.replace(/^The /, "")} POS case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {topResult ? (
            <div className="flex flex-col justify-center border-t border-[#E4E2DA] bg-[#0F2A26] p-7 text-white sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-4xl font-bold text-[#7AE582]">{topResult.metric}</p>
              <p className="mt-2 text-sm leading-6 text-white/80">{topResult.description}</p>
              <p className="mt-4 text-xs text-white/60">{study.location}</p>
            </div>
          ) : null}
        </article>
      </Container>
    </Section>
  );
}
