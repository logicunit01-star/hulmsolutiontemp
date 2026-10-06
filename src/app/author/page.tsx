import AuthorPage from "@/app/author/[author]/page";
import { JsonLd } from "@/components/seo/json-ld";
import { pageJsonLd, seoMetadata } from "@/lib/seo/page-seo";
import { authorPersonSchema } from "@/lib/authors";

const route = "/author/";

// Live title + meta description, plus a default og:image (the live page had none).
export const metadata = seoMetadata(route);

const schema = pageJsonLd({
  route,
  pageType: "ProfilePage",
  crumbs: [{ name: "Author", path: route }],
  extra: [authorPersonSchema()],
});
// ProfilePage is about the author: point it at the Person node.
(schema["@graph"][0] as Record<string, unknown>).mainEntity = { "@id": authorPersonSchema()["@id"] };

export default async function Page() {
  const content = await AuthorPage({ params: Promise.resolve({ author: "hulm-solutions-editorial-team" }) });
  return (
    <>
      <JsonLd data={schema} />
      {content}
    </>
  );
}
