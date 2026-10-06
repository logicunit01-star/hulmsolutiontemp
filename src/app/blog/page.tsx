import InsightsPage, { metadata as insightsMetadata } from "@/app/insights/page";

export const metadata = {
  ...insightsMetadata,
  alternates: { canonical: "/blogs" },
};

export default function BlogPage() {
  return <InsightsPage />;
}
