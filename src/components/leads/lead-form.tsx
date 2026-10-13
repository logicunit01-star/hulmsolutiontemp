"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact-info";
import { industryOptions, submitLead, type LeadPayload } from "@/lib/submit-lead";
import { COUNTRY_CODES, DEFAULT_COUNTRY, formatPhoneWithCountryCode } from "@/lib/country-codes";

const inputClass =
  "w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#0F2A26] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#167c70] focus:border-transparent transition-all shadow-xs";

/**
 * Lead form for /contact/ and /book-a-demo/. Sends to /api/lead, then goes to /thank-you/.
 * If delivery fails, the visitor gets a WhatsApp link pre-filled with their details.
 */
export function LeadForm({
  source,
  submitLabel = "Send message",
  showMessage = true,
  plan,
}: {
  source: LeadPayload["source"];
  submitLabel?: string;
  showMessage?: boolean;
  plan?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");
  const [fallback, setFallback] = useState("");
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY.iso);

  const selectedCountry = COUNTRY_CODES.find((c) => c.iso === countryIso) || DEFAULT_COUNTRY;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const rawPhone = String(form.get("phone") || "");
    const fullPhone = formatPhoneWithCountryCode(rawPhone, selectedCountry.dial_code);

    const payload: LeadPayload = {
      source,
      plan,
      name: String(form.get("name") || ""),
      phone: fullPhone,
      email: String(form.get("email") || ""),
      businessName: String(form.get("businessName") || ""),
      industry: String(form.get("industry") || ""),
      message: String(form.get("message") || ""),
      company_website: String(form.get("company_website") || ""),
    };
    setStatus("sending");
    const ok = await submitLead(payload);
    if (ok) {
      router.push(`/thank-you/?type=${source}`);
      return;
    }
    setFallback(
      whatsappUrl(
        `Hi Hulm, I'd like ${source === "demo" ? "to book a demo" : "some help"}.\nName: ${payload.name}\nBusiness: ${payload.businessName}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nIndustry: ${payload.industry}\n${payload.message}`,
      ),
    );
    setStatus("failed");
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate={false}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={`${source}-name`} className="text-xs font-semibold text-zinc-700">
            Your name <span className="text-rose-600">*</span>
          </label>
          <input id={`${source}-name`} name="name" type="text" required autoComplete="name" className={inputClass} placeholder="e.g. Ahmed Khan" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${source}-business`} className="text-xs font-semibold text-zinc-700">Business name</label>
          <input id={`${source}-business`} name="businessName" type="text" autoComplete="organization" className={inputClass} placeholder="e.g. Khan Retail" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={`${source}-phone`} className="text-xs font-semibold text-zinc-700">
            Phone / WhatsApp <span className="text-rose-600">*</span>
          </label>
          <div className="flex h-11 w-full rounded-xl border border-gray-200 bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#167c70] focus-within:border-transparent transition-all overflow-hidden">
            <div className="relative flex items-center shrink-0 border-r border-gray-200 bg-zinc-50/70 hover:bg-zinc-100/70 transition-colors px-2.5 sm:px-3 cursor-pointer">
              <span className="text-xs sm:text-sm font-medium text-[#0F2A26] flex items-center gap-1.5 pointer-events-none select-none">
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span>{selectedCountry.dial_code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </span>
              <select
                aria-label="Country Code"
                value={countryIso}
                onChange={(e) => setCountryIso(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-sm"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.iso} value={c.iso}>
                    {c.flag} {c.dial_code} — {c.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              id={`${source}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="h-full w-full px-3.5 bg-transparent text-sm text-[#0F2A26] placeholder:text-zinc-400 focus:outline-none"
              placeholder={selectedCountry.placeholder}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${source}-email`} className="text-xs font-semibold text-zinc-700">
            Email <span className="text-rose-600">*</span>
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="name@business.com"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor={`${source}-industry`} className="text-xs font-semibold text-zinc-700">Industry</label>
        <select id={`${source}-industry`} name="industry" className={inputClass} defaultValue="">
          <option value="">Select your industry</option>
          {industryOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      {showMessage ? (
        <div className="space-y-1.5">
          <label htmlFor={`${source}-message`} className="text-xs font-semibold text-zinc-700">
            {source === "demo" ? "What would you like to see? (branches, FBR, inventory…)" : "Your message"}
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            rows={4}
            className="w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm text-[#0F2A26] shadow-xs transition-all placeholder:text-zinc-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#167c70]"
            placeholder="Tell us about your business and what you need"
          />
        </div>
      ) : null}
      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${source}-website`}>Company website</label>
        <input id={`${source}-website`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" disabled={status === "sending"} className="h-12 w-full rounded-xl text-base">
        {status === "sending" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {status === "sending" ? "Sending…" : submitLabel}
        {status === "sending" ? null : <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      {status === "failed" ? (
        <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          We couldn&apos;t send the form just now. Please send the same details on WhatsApp and the team will reply there.
          <a
            href={fallback}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-[#125f57] underline underline-offset-2"
          >
            <WhatsAppIcon size={16} className="h-4 w-4" /> Send on WhatsApp
          </a>
        </div>
      ) : null}
      <p className="text-xs leading-5 text-zinc-500">
        We use these details only to reply to your request. See our{" "}
        <Link href="/privacy-policy/" className="underline underline-offset-2 hover:text-[#167c70]">privacy policy</Link> and{" "}
        <Link href="/terms-and-conditions/" className="underline underline-offset-2 hover:text-[#167c70]">terms and conditions</Link>.
      </p>
    </form>
  );
}
