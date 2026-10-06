import { buildLlmsTxt } from "@/lib/ai/site-knowledge";

export const dynamic = "force-static";

/** llms.txt (llmstxt.org): a short, link-first map of the site for AI assistants and answer engines. */
export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
