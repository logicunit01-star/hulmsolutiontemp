"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/contact-info";
import { submitLead } from "@/lib/submit-lead";
import { decorateSignupUrl, track } from "@/lib/track";

interface FinalCtaFormProps {
  formHeading?: string;
  formSubheading?: string;
}

export function FinalCtaForm({
  formHeading = "Create your free account",
  formSubheading = "Takes less than 2 minutes. No credit card required.",
}: FinalCtaFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    industry: "",
  });

  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Save the lead first (so sales can follow up even if signup is abandoned), then continue to
  // workspace signup with the details, source page and campaign attached.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    await submitLead(
      {
        source: "final_cta",
        name: formData.name,
        businessName: formData.businessName,
        phone: formData.phone,
        email: formData.email,
        industry: formData.industry,
        company_website: honeypot,
      },
      3500,
    );
    track("trial_start_click", { location: "final_cta_form", industry: formData.industry });
    window.location.href = decorateSignupUrl(contactInfo.signupUrl, {
      name: formData.name,
      business: formData.businessName,
      phone: formData.phone,
      email: formData.email,
      industry: formData.industry,
    });
  };

  return (
    <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/20">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-[26px] font-semibold text-[#0F2A26] tracking-tight">
          {formHeading}
        </h3>
        <p className="text-sm text-zinc-500 mt-1 font-normal">
          {formSubheading}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-3.5">
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="final-cta-website">Company website</label>
          <input id="final-cta-website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="fcta-name" className="block text-xs font-semibold text-zinc-700 mb-1">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              id="fcta-name"
              placeholder="e.g. Ahmed Khan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="fcta-business" className="block text-xs font-semibold text-zinc-700 mb-1">
              Business Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              id="fcta-business"
              placeholder="e.g. Khan Retail"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="fcta-phone" className="block text-xs font-semibold text-zinc-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              id="fcta-phone"
              placeholder="0300 1234567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="fcta-email" className="block text-xs font-semibold text-zinc-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              id="fcta-email"
              placeholder="name@business.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fcta-industry" className="block text-xs font-semibold text-zinc-700 mb-1">
            Which industry do you belong to?
          </label>
          <div className="relative">
            <select
              id="fcta-industry"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full h-11 sm:h-12 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:bg-white focus:border-[#209f8f] focus:ring-3 focus:ring-[#209f8f]/15 outline-none transition-all appearance-none pr-10 cursor-pointer"
            >
              <option value="">Select your industry</option>
              <option value="retail">Retail Store</option>
              <option value="restaurant">Restaurant / Cafe</option>
              <option value="pharmacy">Pharmacy Store</option>
              <option value="bakery">Bakery</option>
              <option value="clothing">Clothing Store</option>
              <option value="manufacturing">Manufacturing Industry</option>
              <option value="furniture">Furniture Store</option>
              <option value="salon">Salon / Spa</option>
              <option value="jewelry">Jewelry Shop</option>
              <option value="electric">Electric Store</option>
              <option value="toys">Toys Store</option>
              <option value="other">Other Business</option>
            </select>
            <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={sending}
            className="w-full h-12 sm:h-13 rounded-xl bg-[#167c70] hover:bg-[#125f57] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{sending ? "Setting up…" : "Start today with Hulm"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="pt-1 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 font-medium">
          <span>🔒 Free 14-day trial</span>
          <span>•</span>
          <span>No credit card needed</span>
        </div>
        <p className="text-center text-xs text-zinc-500">
          By starting a trial you agree to our{" "}
          <Link href="/terms-and-conditions/" className="underline underline-offset-2 hover:text-[#167c70]">terms</Link> and{" "}
          <Link href="/privacy-policy/" className="underline underline-offset-2 hover:text-[#167c70]">privacy policy</Link>.
        </p>
      </form>
    </div>
  );
}
