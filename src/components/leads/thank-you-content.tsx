"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { track } from "@/lib/track";

const copy = {
  demo: {
    eyebrow: "Demo request received",
    heading: "Thanks, your demo request is in",
    body: "The Hulm team will contact you on the phone or WhatsApp number you shared to confirm a time. To speed things up, have your product list, number of branches and FBR registration details handy.",
  },
  contact: {
    eyebrow: "Message received",
    heading: "Thank you for contacting Hulm",
    body: "The team will review your message and get back to you on the phone, WhatsApp or email you shared.",
  },
  default: {
    eyebrow: "Thank you",
    heading: "Thanks, we have your details",
    body: "The Hulm team will get back to you shortly.",
  },
};

function Content() {
  const params = useSearchParams();
  const type = (params.get("type") as keyof typeof copy) || "default";
  const c = copy[type] ?? copy.default;

  useEffect(() => {
    track("generate_lead_confirmed", { type });
  }, [type]);

  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <CheckCircle2 className="h-12 w-12 text-[#167c70]" aria-hidden="true" />
      <p className="mt-4 text-sm font-semibold text-[#167c70]">{c.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0F2A26] sm:text-5xl">{c.heading}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">{c.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {contactInfo.bookingUrl && type === "demo" ? (
          <a className="inline-flex items-center gap-2 rounded-full bg-[#167c70] px-6 py-3 font-semibold text-white" href={contactInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
            <CalendarCheck className="h-4 w-4" /> Pick a demo time
          </a>
        ) : null}
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#1f9d55] px-6 py-3 font-semibold text-white"
          href={whatsappUrl("Hi Hulm, I just submitted a request on your website.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} className="h-4 w-4" /> Message us on WhatsApp
        </a>
        <a className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-semibold text-[#0F2A26]" href={contactInfo.signupUrl}>
          Start the 14-day free trial <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        While you wait: <Link href="/features/" className="font-semibold text-[#167c70] underline underline-offset-2">see POS features</Link>,{" "}
        <Link href="/pricing/" className="font-semibold text-[#167c70] underline underline-offset-2">compare pricing</Link> or{" "}
        <Link href="/pos-case-studies/" className="font-semibold text-[#167c70] underline underline-offset-2">read customer stories</Link>.
      </p>
    </section>
  );
}

export function ThankYouContent() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
