"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { whatsappUrl } from "@/lib/contact-info";

/** Floating WhatsApp button; the pre-filled message names the page the visitor is on. */
export function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/thank-you")) return null;
  const topic =
    pathname === "/"
      ? "Hulm POS"
      : pathname
          .replace(/^\/|\/$/g, "")
          .split("/")
          .pop()!
          .replace(/-/g, " ");
  return (
    <a
      href={whatsappUrl(`Hi Hulm, I'm interested in ${topic}. (Page: ${pathname})`)}
      target="_blank"
      rel="noopener noreferrer"
      data-track-location="whatsapp_float"
      aria-label="Chat with Hulm on WhatsApp"
      className="wa-float fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] sm:bottom-6 sm:right-6"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-14 w-14 object-contain"
        priority
      />
    </a>
  );
}
