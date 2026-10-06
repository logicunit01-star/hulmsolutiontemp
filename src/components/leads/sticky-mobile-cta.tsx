"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

import { contactInfo, whatsappUrl } from "@/lib/contact-info";

/**
 * Mobile-only bar with the two main actions. Appears after the visitor scrolls past the hero and
 * hides again near the footer. While it shows, the floating WhatsApp button is hidden (the bar has it).
 */
export function StickyMobileCta() {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
      setShow(window.scrollY > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.dataset.stickyCta = show ? "on" : "off";
  }, [show]);
  if (pathname.startsWith("/thank-you") || pathname.startsWith("/book-a-demo") || pathname.startsWith("/contact")) return null;
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#E4E2DA] bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex items-center gap-2">
        <a
          href={contactInfo.signupUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          data-track-location="sticky_mobile"
          className="flex h-11 flex-1 items-center justify-center rounded-lg bg-[#0F2A26] text-sm font-semibold text-white"
        >
          Start free trial
        </a>
        <a
          href={whatsappUrl(`Hi Hulm, I'm interested in Hulm POS. (Page: ${pathname})`)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          data-track-location="sticky_mobile"
          aria-label="Chat with Hulm on WhatsApp"
          className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#cfd5d2] px-4 text-sm font-semibold text-[#0F2A26]"
        >
          <WhatsAppIcon size={18} className="h-4.5 w-4.5" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
