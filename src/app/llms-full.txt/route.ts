import { buildLlmsFullTxt } from "@/lib/ai/site-knowledge";

export const dynamic = "force-static";

/** llms-full.txt: the same map plus FAQs, pricing and full article text in plain text. */
export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
