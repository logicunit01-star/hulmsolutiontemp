import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type FaqDetailsItem = {
  q: string;
  a: string;
  link?: { label: string; href: string };
};

/**
 * Server-rendered FAQ list. Every answer is in the initial HTML (unlike an
 * accordion that only renders the open item), so search engines and AI
 * crawlers can read all of them. Build FAQPage JSON-LD from the SAME array.
 */
export function FaqDetails({ items, openFirst = true }: { items: readonly FaqDetailsItem[]; openFirst?: boolean }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.q}
          open={openFirst && index === 0}
          className="group rounded-2xl border border-zinc-200/80 bg-white open:border-[#25a18e] open:shadow-sm open:ring-1 open:ring-[#25a18e]/15"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e] [&::-webkit-details-marker]:hidden">
            <h3 className="text-base font-bold leading-snug text-[#0F2A26] sm:text-lg">{item.q}</h3>
            <ArrowRight
              className="h-5 w-5 shrink-0 rotate-90 text-zinc-400 transition group-open:-rotate-90 group-open:text-[#25a18e]"
              aria-hidden="true"
            />
          </summary>
          <div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            <p>{item.a}</p>
            {item.link ? (
              <Link href={item.link.href} className="mt-3 inline-flex items-center gap-1.5 font-semibold text-[#167c70] hover:text-[#125f57]">
                Read: {item.link.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqPageSchema(items: readonly FaqDetailsItem[], id: string) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
