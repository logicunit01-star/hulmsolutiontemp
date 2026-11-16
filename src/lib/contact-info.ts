export const CORRECT_ADDRESS = {
  streetAddress: "C-27, Block 14, Gulistan-e-Johar",
  addressLocality: "Karachi",
  addressRegion: "Sindh",
  postalCode: "75290",
  addressCountry: "PK",
  display: "C-27, Block 14, Gulistan-e-Johar, Karachi, Pakistan",
};

/** Single source of truth for public contact details (used by forms, footer, schema). */
export const contactInfo = {
  phoneDisplay: "+92 339 111 9259",
  phoneE164: "+923391119259",
  whatsappNumber: "923391119259",
  email: "info@hulmsolutions.com",
  // Same address already published on the privacy policy and terms pages.
  address: CORRECT_ADDRESS,
  signupUrl: "https://app.hulmsolutions.com/Register",
  signinUrl: "https://app.hulmsolutions.com/",
  // Optional scheduling link (Calendly, Cal.com, Google booking page) for /book-a-demo/.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
