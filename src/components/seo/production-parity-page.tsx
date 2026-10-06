import { notFound } from "next/navigation";

import { getProductionParityPage } from "@/lib/production-parity";
import { LegacyContentEnhancer } from "@/components/seo/legacy-content-enhancer";

function prepareHtml(path: string, html: string) {
  const trimmed = html.trim();
  if (path !== "/") return trimmed;

  return trimmed
    .replaceAll("Start 14 Days Free Trail", "Start 14 Days Free Trial")
    .replaceAll(
      "https://app.hulmsolutions.com/\"",
      "https://app.hulmsolutions.com/Register\"",
    )
    .replace(
      /https:\/\/www\.youtube\.com\/watch\?v=Fd6X_TPX9EA[^\"]*/,
      "https://www.youtube.com/watch?v=Fd6X_TPX9EA",
    );
}

export function ProductionParityPage({ path }: { path: string }) {
  const page = getProductionParityPage(path);
  if (!page) notFound();

  return (
    <div className={`production-parity-page ${page.bodyClass || ""}`} data-production-source={page.path}>
      <LegacyContentEnhancer />
      {page.stylesheets?.map((href) => <link key={href} rel="stylesheet" href={href} />)}
      {page.schemas.map((schema, index) => (
        <script
          key={`${page.path}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema.replace(/</g, "\\u003c") }}
        />
      ))}
      <div dangerouslySetInnerHTML={{ __html: prepareHtml(page.path, page.mainHtml) }} />
    </div>
  );
}
