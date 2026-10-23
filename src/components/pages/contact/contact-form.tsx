"use client";

import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LeadForm } from "@/components/leads/lead-form";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { StandardPageContent } from "@content/types";

const IconMap: Record<string, React.ElementType> = {
  Phone: WhatsAppIcon,
  WhatsApp: WhatsAppIcon,
  Mail,
  Clock,
  Address: MapPin,
};

interface ContactFormProps {
  contact: StandardPageContent;
}

export function ContactForm({ contact }: ContactFormProps) {
  const contactInfoSection = contact.additionalSections?.find(s => s.type === "contact-info");
  const formSection = contact.additionalSections?.find(s => s.type === "form-fields");

  return (
    <Section data-reveal className="relative overflow-hidden py-14 sm:py-18 lg:py-22 bg-white">
      <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
      <Container className="relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
            <span>Contact Support & Sales</span>
          </div>
          <h1 className="text-3xl font-bold leading-[1.18] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px] mb-4">
            We are here to help your{" "}
            <span className="mark-lime">business thrive</span>
          </h1>
          {contact.hero.subheadline && (
            <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto">
              {contact.hero.subheadline}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0F2A26] mb-3 tracking-tight">
                {contactInfoSection?.heading || "Need Assistance?"}
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Call, WhatsApp, or email us, or fill in the quick form. Our local team in Pakistan is available to assist with onboarding, demos, setup, and support.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfoSection?.items?.map((item, index) => {
                const isPhoneOrWhatsApp = item.label === "Phone" || item.label === "WhatsApp";
                const iconName = isPhoneOrWhatsApp ? "WhatsApp" : item.label === "Email" ? "Mail" : item.label === "Address" ? "Address" : "Clock";
                const Icon = IconMap[iconName] || Mail;
                return (
                  <div key={index} className="lift flex items-start bg-[#FAF9F5] p-5 rounded-2xl border border-[#E4E2DA] transition-all hover:border-[#167c70]/40 hover:bg-white hover:shadow-xs">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E4E2DA] flex items-center justify-center shrink-0 mr-4 text-[#167c70] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#167c70] mb-1">{item.label}</h3>
                      {isPhoneOrWhatsApp ? (
                        <a
                          href={whatsappUrl("Hi Hulm, I have a question about Hulm POS.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base sm:text-lg font-bold text-[#0F2A26] hover:text-[#167c70] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : item.label === "Email" ? (
                        <a href={`mailto:${contactInfo.email}`} className="text-base sm:text-lg font-bold text-[#0F2A26] hover:text-[#167c70] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-base sm:text-lg font-bold text-[#0F2A26]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <a
                href={whatsappUrl("Hi Hulm, I have a question about Hulm POS.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#167c70] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125f57] shadow-xs transition-colors"
              >
                <WhatsAppIcon size={18} className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500">
              New to Hulm? Read <Link href="/about/" className="font-semibold text-[#167c70] underline underline-offset-2">about Hulm Solutions</Link> or see{" "}
              <Link href="/pos-case-studies/" className="font-semibold text-[#167c70] underline underline-offset-2">customer stories</Link>.
            </p>
          </div>
          
          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-6 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
            />
            <div className="bg-white p-7 sm:p-9 rounded-2xl sm:rounded-3xl border border-[#E4E2DA] shadow-[0_20px_50px_-20px_rgba(21,40,37,0.18)] relative overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0F2A26] mb-1 tracking-tight">
                  {formSection?.heading || "Send us a message"}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Fill in your details and our team will get back to you promptly.
                </p>
              </div>
              
              <LeadForm source="contact" submitLabel="Send Message" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
