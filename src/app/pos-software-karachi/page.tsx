import { CityLandingPage } from "@/components/local/city-page";
import { cityPages } from "@/content/pages/citySeo";
import { newPageMetadata } from "@/lib/seo/page-seo";

const page = cityPages.karachi;

export const metadata = newPageMetadata({ path: page.path, title: page.title, description: page.description });

export default function Page() {
  return <CityLandingPage page={page} />;
}
