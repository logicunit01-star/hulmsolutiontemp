import type { Metadata } from "next";

import { ThankYouContent } from "@/components/leads/thank-you-content";

export const metadata: Metadata = {
  title: { absolute: "Thank You | Hulm Solutions" },
  description: "Thank you for contacting Hulm Solutions.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
