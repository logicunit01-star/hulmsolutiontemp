import { NextResponse } from "next/server";

// Retired: this endpoint used to serve placeholder reviews when the Google Places API was not
// configured. Reviews on the site now come from the real Google reviews in
// src/components/home/GoogleReviewsSection.tsx. Safe to delete this folder.
export function GET() {
  return NextResponse.json({ error: "gone" }, { status: 410 });
}
