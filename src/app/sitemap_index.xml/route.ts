import { legacySitemapIndex, xmlResponse } from "@/lib/legacy-sitemaps";

export function GET() {
  return xmlResponse(legacySitemapIndex());
}
