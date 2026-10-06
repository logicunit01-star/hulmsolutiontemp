"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { track } from "@/lib/track";

/**
 * Click-to-load YouTube player: shows the thumbnail only, so the iframe (≈1 MB of JS) loads
 * only when the visitor presses play. Uses youtube-nocookie.com.
 */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#0F2A26] shadow-[0_24px_60px_-40px_rgba(21,63,57,0.55)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            track("video_play", { video_id: id, title });
          }}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            width={480}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[#167c70] shadow-lg transition group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left text-sm font-semibold text-white">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}

