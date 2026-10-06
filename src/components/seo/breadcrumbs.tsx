import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";

export type Crumb = { name: string; path?: string };

/**
 * Visible breadcrumb trail ("Home › Product › Inventory management"). Matches the BreadcrumbList
 * JSON-LD from pageJsonLd. The last item is the current page and is not linked.
 * `tone="dark"` is for pages whose hero has a dark background.
 */
export function Breadcrumbs({ items, tone = "light", className = "" }: { items: Crumb[]; tone?: "light" | "dark"; className?: string }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const muted = tone === "dark" ? "text-white/80 hover:text-white" : "text-zinc-600 hover:text-[#167c70]";
  const current = tone === "dark" ? "text-white" : "text-[#0F2A26]";
  return (
    <nav aria-label="Breadcrumb" className={`relative z-10 ${className}`}>
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-sm">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={`${c.name}-${i}`} className="flex items-center gap-1.5">
                {last || !c.path ? (
                  <span aria-current={last ? "page" : undefined} className={`font-semibold ${current}`}>{c.name}</span>
                ) : (
                  <Link href={c.path} className={`transition ${muted}`}>{c.name}</Link>
                )}
                {!last ? <ChevronRight className={`h-3.5 w-3.5 ${tone === "dark" ? "text-white/60" : "text-zinc-400"}`} aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
