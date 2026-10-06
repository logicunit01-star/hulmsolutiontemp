import { Metadata } from "next";
import AuthorPage from "@/app/author/[author]/page";

export const metadata: Metadata = {
  title: "Hulm Solutions Editorial Team | Hulm",
  description: "Read all posts by the Hulm Solutions Editorial Team.",
  alternates: { canonical: "/author/hulm-solutions-editorial-team" },
  openGraph: {
    title: "Hulm Solutions Editorial Team | Hulm",
    description: "Read all posts by the Hulm Solutions Editorial Team.",
    type: "profile",
    url: "https://hulmsolutions.com/author/hulm-solutions-editorial-team",
  }
};

export default function EditorialTeamPage() {
  return AuthorPage({
    params: Promise.resolve({ author: "hulm-solutions-editorial-team" }),
  });
}
