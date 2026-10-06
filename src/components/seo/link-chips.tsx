import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ChipLink = { label: string; href: string };

/**
 * Compact row of internal links (overlay method): keeps every product / industry page linked
 * with its keyword anchor, without adding a full section.
 */
export function LinkChips({
  heading,
  items,
  tone = "light",
  className = "",
  centered = false,
}: {
  heading?: string;
  items: readonly ChipLink[];
  tone?: "light" | "dark";
  className?: string;
  centered?: boolean;
}) {
  const chip =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-[#E4E2DA] bg-white text-[#167c70] hover:border-[#25a18e] hover:bg-[#f2fbf9]";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {heading ? (
        <p className={`mb-3 text-sm font-semibold ${tone === "dark" ? "text-white/70" : "text-zinc-500"}`}>{heading}</p>
      ) : null}
      <ul className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${chip}`}>
              {item.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
