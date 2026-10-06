import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hulm Solutions – POS Software",
    short_name: "Hulm POS",
    description:
      "Cloud-based POS and business management software with FBR integration for Pakistan and e-invoicing readiness for the Gulf.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/images/author/hulm-editorial-team.png", sizes: "any", type: "image/png" }],
  };
}
