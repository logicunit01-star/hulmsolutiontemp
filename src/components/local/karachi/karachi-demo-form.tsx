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
      track("demo_form_start", { form: "karachi_demo_form", page_path: window.location.pathname });
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
      `City: Karachi`,
      `Business type: ${businessType}`,
    ];
    if (businessName) messageLines.push(`Business name: ${businessName}`);
    if (branches) messageLines.push(`Branches: ${branches}`);
    if (currentMethod) messageLines.push(`Current POS: ${currentMethod}`);

    setStatus("sending");
    track("demo_form_submit", {
      form: "karachi_demo_form",
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
      `Hi Hulm, I want to request a POS demo for my business in Karachi.\nName: ${name}\nPhone: ${fullPhone}\nType: ${businessType}${businessName ? `\nBusiness: ${businessName}` : ""}${branches ? `\nBranches: ${branches}` : ""}`
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
          Thank you for reaching out. Our Karachi product team will connect with you shortly on WhatsApp to coordinate your demo walkthrough.
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
    <div className="rounded-3xl border border-[#E4E2DA] bg-white p-6 sm:p-8 lg:p-10 shadow-md ring-1 ring-zinc-900/5">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-0.5 text-xs font-semibold text-[#167c70] mb-2">
          <Sparkles className="h-3 w-3" />
          <span>Quick 30-Second Request</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0F2A26]">
          Request a Free POS Demo in Karachi
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
          See live billing, inventory tracking, and reports tailored to your store.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Visible Field 1: Name */}
        <div>
          <label htmlFor="karachi-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="karachi-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Tariq Mehmood"
            onFocus={handleFocus}
            className={inputClass}
          />
        </div>

        {/* Visible Field 2: WhatsApp Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="karachi-phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700">
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
              id="karachi-phone"
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
            We will send your demo link and schedule details via WhatsApp.
          </p>
        </div>

        {/* Visible Field 3: Business Type */}
        <div>
          <label htmlFor="karachi-type" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
            Business Type <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="karachi-type"
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

        {/* Optional Collapsible Step: Tell Us More */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowOptionalStep(!showOptionalStep)}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-[#0F2A26] transition-colors focus:outline-none"
          >
            {showOptionalStep ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            <span>{showOptionalStep ? "Hide extra details" : "Tell us more about your store (optional)"}</span>
          </button>

          {showOptionalStep && (
            <div className="mt-3 space-y-3 rounded-2xl border border-zinc-200/80 bg-[#FAF9F5] p-4 text-left">
              <div>
                <label htmlFor="karachi-biz-name" className="block text-xs font-semibold text-zinc-700 mb-1">
                  Business / Store Name
                </label>
                <input
                  id="karachi-biz-name"
                  name="businessName"
                  type="text"
                  placeholder="e.g. Al-Madina Supermarket"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="karachi-branches" className="block text-xs font-semibold text-zinc-700 mb-1">
                  Number of Branches
                </label>
                <div className="relative">
                  <select
                    id="karachi-branches"
                    name="branches"
                    defaultValue={branchOptions[0]}
                    className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                  >
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
                <label htmlFor="karachi-current-method" className="block text-xs font-semibold text-zinc-700 mb-1">
                  Current Billing Method
                </label>
                <div className="relative">
                  <select
                    id="karachi-current-method"
                    name="currentMethod"
                    defaultValue={currentSystemOptions[0]}
                    className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                  >
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
                <label htmlFor="karachi-email" className="block text-xs font-semibold text-zinc-700 mb-1">
                  Email Address (optional)
                </label>
                <input
                  id="karachi-email"
                  name="email"
                  type="email"
                  placeholder="e.g. store@example.com"
                  className={inputClass}
                />
              </div>
            </div>
          )}
        </div>

        {errorMsg && (
          <p className="text-xs font-medium text-rose-600 bg-rose-50 border border-rose-200 rounded-lg p-2.5">
            {errorMsg}
          </p>
        )}

        {status === "failed" && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <p className="font-semibold">Unable to submit right now.</p>
            <p className="mt-1">
              Please connect directly via WhatsApp:{" "}
              <a
                href={fallbackUrl || whatsappUrl("Hi Hulm, I want to book a POS demo for my Karachi business.")}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline text-[#167c70]"
              >
                Click here to chat on WhatsApp
              </a>
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full h-12 rounded-xl bg-[#0F2A26] hover:bg-[#167c70] text-white font-semibold text-sm shadow-sm transition-colors"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Request Free Demo Walkthrough"
          )}
        </Button>

        <p className="text-center text-[11px] text-zinc-500">
          🔒 No spam. 14-day free trial, no credit card required. Onboarding support provided in Urdu and English.
        </p>
      </form>
    </div>
  );
}
