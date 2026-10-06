import Image from "next/image";
import { Star } from "lucide-react";

import { googleReviewItems } from "@content/data/reviews";

/** Real Google reviews shown on the live site (single source: content/pages/home.ts). */
export function ReviewGrid({ limit, names }: { limit?: number; names?: readonly string[] }) {
  const pool = names ? googleReviewItems.filter((review) => names.includes(review.name)) : googleReviewItems;
  const items = limit ? pool.slice(0, limit) : pool;
  return (
    <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((review) => (
        <li key={review.name} className="mb-5 break-inside-avoid">
          <figure className="rounded-2xl border border-[#E4E2DA] bg-white p-6 shadow-sm">
            <div className="flex" role="img" aria-label={`${review.stars} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-[#f2b84b] text-[#f2b84b]" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-base leading-7 text-zinc-700">“{review.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4">
              <Image src={review.avatar} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="font-bold text-[#0F2A26]">{review.name}</p>
                <p className="text-xs text-zinc-500">Google review</p>
              </div>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
