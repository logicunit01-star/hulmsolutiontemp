import { legacyUrlSet, xmlResponse } from "@/lib/legacy-sitemaps";

export function GET() {
  return xmlResponse(legacyUrlSet("post"));
}
