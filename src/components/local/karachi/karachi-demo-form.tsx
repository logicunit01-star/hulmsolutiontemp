"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact-info";
import { submitLead } from "@/lib/submit-lead";
import { COUNTRY_CODES, DEFAULT_COUNTRY, formatPhoneWithCountryCode } from "@/lib/country-codes";

const inputClass =
  "w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#0F2A26] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#167c70] focus:border-transparent transition-all shadow-xs";

const businessTypes = [
  "Retail Store / Supermarket",
  "Restaurant / Cafe / Takeaway",
  "Pharmacy / Medical Store",
  "Clothing Store / Boutique",
  "Bakery / Confectionery",
  "Electronics / IT / Mobile Shop",
  "Wholesale / Distribution",
  "Other Business",
];

const branchOptions = [
  "1 Branch",
  "2 - 3 Branches",
  "4 - 10 Branches",
  "10+ Branches",
];

const currentSystemOptions = [
  "Manual paper registers / Calculator",
  "Excel spreadsheets",
  "Existing POS software (switching)",
  "New business (no system yet)",
  "Other method",
];

export function KarachiDemoForm({
  compactHeader = true,
}: {
  compactHeader?: boolean;
} = {}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failed">("idle");
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY.iso);
  const [fallbackUrl, setFallbackUrl] = useState("");

  const selectedCountry = COUNTRY_CODES.find((c) => c.iso === countryIso) || DEFAULT_COUNTRY;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("fullName") || "").trim();
    const rawPhone = String(form.get("phone") || "").trim();
    const businessName = String(form.get("businessName") || "").trim();
    const businessType = String(form.get("businessType") || "").trim();
    const branches = String(form.get("branches") || "").trim();
    const currentMethod = String(form.get("currentMethod") || "").trim();

    const fullPhone = formatPhoneWithCountryCode(rawPhone, selectedCountry.dial_code);

    const message = [
      `City: Karachi`,
      `Business type: ${businessType}`,
      `Branches: ${branches}`,
      `Current POS / billing: ${currentMethod}`,
    ].join("\n");

    setStatus("sending");

    const ok = await submitLead({
      name,
      phone: fullPhone,
      businessName,
      industry: businessType,
      message,
      source: "demo",
    });

    if (ok) {
      setStatus("success");
      return;
    }

    const fallback = whatsappUrl(
      `Hi Hulm, I want to request a POS demo for my business in Karachi.\nName: ${name}\nPhone: ${fullPhone}\nBusiness: ${businessName}\nType: ${businessType}\nBranches: ${branches}\nCurrent billing: ${currentMethod}`
    );
    setFallbackUrl(fallback);
    setStatus("failed");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#167c70]/20 bg-[#F4F9F8] p-8 text-center sm:p-10 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#167c70]/10 text-[#167c70]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-[#0F2A26]">Demo Request Received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          Thank you for contacting Hulm Solutions. Our team will get in touch with you about your POS requirements.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            variant="outline"
            className="rounded-xl border-[#167c70] text-[#167c70] hover:bg-[#167c70]/10"
          >
            <a
              href={whatsappUrl("Hi Hulm, I just submitted the Karachi demo request. Please connect with me.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={16} className="mr-2" /> Connect on WhatsApp Now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div id="demo-form" className="rounded-3xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-9 shadow-lg ring-1 ring-zinc-900/5">
      <div className="mb-6">
        {compactHeader ? (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Quick Reservation
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-[#0F2A26]">
              Request Your Free Walkthrough
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-500">
              Provide your details below and our product specialist will arrange your session.
            </p>
          </div>
        ) : (
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#167c70]">
              Schedule a Walkthrough
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl">
              Get a POS Demo for Your Business in Karachi
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Tell us about your business setup. Our Karachi product team will show you checkout, stock management, and reports tailored to your workflow.
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="karachi-fullname" className="text-xs font-semibold text-zinc-700">
              Full name <span className="text-rose-600">*</span>
            </label>
            <input
              id="karachi-fullname"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Tariq Mehmood"
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="karachi-phone" className="text-xs font-semibold text-zinc-700">
              WhatsApp number <span className="text-rose-600">*</span>
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
                id="karachi-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder={selectedCountry.placeholder || "300 1234567"}
                className="h-full w-full px-3.5 bg-transparent text-sm text-[#0F2A26] placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="karachi-business-name" className="text-xs font-semibold text-zinc-700">
              Business name <span className="text-rose-600">*</span>
            </label>
            <input
              id="karachi-business-name"
              name="businessName"
              type="text"
              required
              autoComplete="organization"
              placeholder="e.g. Al-Madina Supermarket"
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="karachi-business-type" className="text-xs font-semibold text-zinc-700">
              Business type <span className="text-rose-600">*</span>
            </label>
            <select
              id="karachi-business-type"
              name="businessType"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select your business type
              </option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="karachi-branches" className="text-xs font-semibold text-zinc-700">
              Number of branches <span className="text-rose-600">*</span>
            </label>
            <select
              id="karachi-branches"
              name="branches"
              required
              defaultValue="1 Branch"
              className={inputClass}
            >
              {branchOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="karachi-current-method" className="text-xs font-semibold text-zinc-700">
              Current POS or billing method <span className="text-rose-600">*</span>
            </label>
            <select
              id="karachi-current-method"
              name="currentMethod"
              required
              defaultValue="Manual paper registers / Calculator"
              className={inputClass}
            >
              {currentSystemOptions.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>

        {status === "failed" && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800">
            <p className="font-semibold">Unable to submit directly online.</p>
            <p className="mt-1">
              Please click below to send your details directly to our Karachi team via WhatsApp:
            </p>
            {fallbackUrl && (
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 font-bold text-[#167c70] underline hover:text-[#0F2A26]"
              >
                <WhatsAppIcon size={14} /> Send details via WhatsApp
              </a>
            )}
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === "sending"}
            size="lg"
            className="w-full rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold h-12 shadow-sm text-sm"
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting request...
              </span>
            ) : (
              "Request My Free Demo"
            )}
          </Button>
          <p className="mt-2 text-center text-xs text-zinc-500">
            No credit card required. Free 14-day trial included with your onboarding consultation.
          </p>
        </div>
      </form>
    </div>
  );
}
