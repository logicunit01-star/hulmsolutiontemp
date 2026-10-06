import { buildRss } from "@/lib/ai/site-knowledge";

export const dynamic = "force-static";

/** RSS 2.0 feed of /blog/ articles (WordPress served the same at /feed/). */
export function GET() {
  return new Response(buildRss(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
