import { SITE_URL } from "@/lib/seo/page-seo";

export const dynamic = "force-static";

/** RFC 9116 security.txt. Expires must stay in the future — renew yearly. */
export function GET() {
  const body = [
    "Contact: mailto:info@hulmsolutions.com",
    "Expires: 2027-10-01T00:00:00.000Z",
    "Preferred-Languages: en",
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    `Policy: ${SITE_URL}/privacy-policy/`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
