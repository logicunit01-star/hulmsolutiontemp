"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, Loader2, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact-info";
import { submitLead } from "@/lib/submit-lead";
import { COUNTRY_CODES, DEFAULT_COUNTRY, formatPhoneWithCountryCode } from "@/lib/country-codes";
import { track } from "@/lib/track";

const inputClass =
  "w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#0F2A26] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#167c70] focus:border-transparent transition-all shadow-2xs";

const businessTypes = [
  "Clothing / Boutique / Pret",
  "Auto Parts / Hardware Wholesale",
  "Restaurant / Cafe / Food Chain",
  "Electronics / Mobile / IT",
  "Pharmacy / Medical Store",
  "Retail Store / Supermarket",
  "Bakery / Confectionery",
  "Salon / Spa / Service Counter",
  "Other Business in Lahore",
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

export function LahoreDemoForm({
  compactHeader = true,
}: {
  compactHeader?: boolean;
} = {}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "failed">("idle");
  const [hasStarted, setHasStarted] = useState(false);
  const [showOtherCountries, setShowOtherCountries] = useState(false);
  const [showOptionalStep, setShowOptionalStep] = useState(false);
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY.iso);
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const selectedCountry = COUNTRY_CODES.find((c) => c.iso === countryIso) || DEFAULT_COUNTRY;

  const handleFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      track("demo_form_start", { form: "lahore_demo_form", page_path: window.location.pathname });
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("fullName") || "").trim();
    const rawPhone = String(form.get("phone") || "").trim();
    const businessType = String(form.get("businessType") || "").trim();
    const email = String(form.get("email") || "").trim();
    const businessName = String(form.get("businessName") || "").trim();
    const branches = String(form.get("branches") || "").trim();
    const currentMethod = String(form.get("currentMethod") || "").trim();

    // Validation
    if (!name || name.length < 2) {
      setErrorMsg("Please enter your name.");
      return;
    }
    const cleanPhone = rawPhone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 7) {
      setErrorMsg("Please enter a valid WhatsApp or mobile number.");
      return;
    }
    if (!businessType) {
      setErrorMsg("Please select your business type.");
      return;
    }

    const fullPhone = formatPhoneWithCountryCode(rawPhone, selectedCountry.dial_code);

    const messageLines = [
      `City: Lahore`,
      `Business type: ${businessType}`,
    ];
    if (businessName) messageLines.push(`Business name: ${businessName}`);
    if (branches) messageLines.push(`Branches: ${branches}`);
    if (currentMethod) messageLines.push(`Current POS: ${currentMethod}`);

    setStatus("sending");
    track("demo_form_submit", {
      form: "lahore_demo_form",
      business_type: businessType,
      page_path: window.location.pathname,
    });

    const ok = await submitLead({
      name,
      phone: fullPhone,
      email: email || undefined,
      businessName: businessName || undefined,
      industry: businessType,
      message: messageLines.join("\n"),
      source: "demo",
    });

    if (ok) {
      setStatus("success");
      return;
    }

    const fallback = whatsappUrl(
      `Hi Hulm, I want to request a POS demo for my business in Lahore.\nName: ${name}\nPhone: ${fullPhone}\nType: ${businessType}${businessName ? `\nBusiness: ${businessName}` : ""}${branches ? `\nBranches: ${branches}` : ""}`
    );
    setFallbackUrl(fallback);
    setStatus("failed");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#167c70]/20 bg-[#F4F9F8] p-8 text-center sm:p-10 shadow-xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#167c70]/10 text-[#167c70]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-[#0F2A26]">Demo Request Received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          Thank you for reaching out. Our product team will connect with you promptly on WhatsApp to coordinate your remote video walkthrough and answer your workflow questions.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            variant="outline"
            className="rounded-xl border-[#167c70] text-[#167c70] hover:bg-[#167c70]/10"
          >
            <a
              href={whatsappUrl("Hi Hulm, I just submitted the Lahore demo request. Please connect with me.")}
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
    <div className="rounded-3xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-md ring-1 ring-zinc-900/5">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-0.5 text-xs font-semibold text-[#167c70] mb-2">
          <Sparkles className="h-3 w-3" />
          <span>Quick 30-Second Request</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F2A26]">
          Request a Free POS Demo for Lahore
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
          See live billing, variant matrices, stock control, and FBR/PRA compliance tailored to your shop.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Visible Field 1: Name */}
        <div>
          <label htmlFor="lahore-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="lahore-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Usman Malik"
            onFocus={handleFocus}
            className={inputClass}
          />
        </div>

        {/* Visible Field 2: WhatsApp Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="lahore-phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
              WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setShowOtherCountries(!showOtherCountries)}
              className="text-[11px] text-[#167c70] hover:underline focus:outline-none"
            >
              {showOtherCountries ? "Default (+92 PK)" : "Other country?"}
            </button>
          </div>

          <div className="flex gap-2">
            {showOtherCountries ? (
              <div className="relative w-32 shrink-0">
                <select
                  value={countryIso}
                  onChange={(e) => setCountryIso(e.target.value)}
                  aria-label="Country Dial Code"
                  className={`${inputClass} pr-7 appearance-none cursor-pointer`}
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.iso} value={c.iso}>
                      {c.iso} ({c.dial_code})
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-3.5 h-4 w-4 text-zinc-400" />
              </div>
            ) : (
              <div className="flex h-11 items-center px-3 rounded-xl border border-gray-200 bg-zinc-50 text-xs font-semibold text-zinc-700 shrink-0">
                <span>🇵🇰 +92</span>
              </div>
            )}
            <input
              id="lahore-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="300 1234567"
              onFocus={handleFocus}
              className={`${inputClass} flex-1`}
            />
          </div>
          <p className="mt-1 text-[11px] text-zinc-400">
            We will send your screen-share demo link and scheduling details via WhatsApp.
          </p>
        </div>

        {/* Visible Field 3: Business Type */}
        <div>
          <label htmlFor="lahore-type" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
            Business Type <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="lahore-type"
              name="businessType"
              required
              defaultValue=""
              onFocus={handleFocus}
              className={`${inputClass} appearance-none pr-8 cursor-pointer`}
            >
              <option value="" disabled>Select your business sector</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-zinc-400" />
          </div>
        </div>

        {/* Optional Collapsed Details */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowOptionalStep(!showOptionalStep)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-[#167c70] transition-colors"
          >
            {showOptionalStep ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            <span>{showOptionalStep ? "Hide extra details (optional)" : "Add store name or branch count (optional)"}</span>
          </button>

          {showOptionalStep && (
            <div className="mt-3 space-y-3 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
              <div>
                <label htmlFor="lahore-biz-name" className="block text-xs font-medium text-zinc-600 mb-1">
                  Business / Store Name
                </label>
                <input
                  id="lahore-biz-name"
                  name="businessName"
                  type="text"
                  placeholder="e.g. Al-Rehman Pret or Gulberg Auto Parts"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lahore-branches" className="block text-xs font-medium text-zinc-600 mb-1">
                    Number of Branches
                  </label>
                  <div className="relative">
                    <select
                      id="lahore-branches"
                      name="branches"
                      defaultValue=""
                      className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                    >
                      <option value="">Select branch count</option>
                      {branchOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-zinc-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="lahore-current-pos" className="block text-xs font-medium text-zinc-600 mb-1">
                    Current Billing Method
                  </label>
                  <div className="relative">
                    <select
                      id="lahore-current-pos"
                      name="currentMethod"
                      defaultValue=""
                      className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                    >
                      <option value="">Select current method</option>
                      {currentSystemOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-zinc-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="lahore-email" className="block text-xs font-medium text-zinc-600 mb-1">
                    Email Address (optional)
                  </label>
                  <input
                    id="lahore-email"
                    name="email"
                    type="email"
                    placeholder="e.g. store@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {errorMsg && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-600 font-medium">
            {errorMsg}
          </div>
        )}

        {status === "failed" && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
            Network delivery issue.{" "}
            {fallbackUrl && (
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#167c70] underline ml-1"
              >
                Click here to submit via WhatsApp directly.
              </a>
            )}
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full h-12 rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm shadow-md transition-all active:scale-[0.99] disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting Request...
            </>
          ) : (
            "Book My Free Lahore POS Demo"
          )}
        </Button>

        <p className="text-center text-[11px] text-zinc-400 pt-1">
          No credit card required · Free 14-day trial available · Remote onboarding from Karachi HQ
        </p>
      </form>
    </div>
  );
}
