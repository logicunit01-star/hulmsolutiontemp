"use client";

import Link from "next/link";
import { Phone, Mail, Clock, MapPin, CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LeadForm } from "@/components/leads/lead-form";
import { contactInfo, whatsappUrl } from "@/lib/contact-info";
import { StandardPageContent } from "@content/types";

const IconMap: Record<string, React.ElementType> = {
  Phone,
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
    <Section data-reveal className="py-20 bg-white relative">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70] mb-4">
            Contact Support & Sales
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F2A26] mb-4 tracking-tight">
            {contact.hero.headline}
          </h1>
          {contact.hero.subheadline && (
            <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto">
              {contact.hero.subheadline}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F2A26] mb-3 tracking-tight">
                {contactInfoSection?.heading || "Need Assistance?"}
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Call, WhatsApp or email us, or fill in the form. The Hulm team replies to sales and support requests on WhatsApp, phone and email.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfoSection?.items?.map((item, index) => {
                const iconName = item.label === "Phone" ? "Phone" : item.label === "Email" ? "Mail" : item.label === "Address" ? "Address" : "Clock";
                const Icon = IconMap[iconName] || Mail;
                return (
                  <div key={index} className="flex items-start group bg-[#F7F6F2] p-5 rounded-2xl border border-gray-200/80 transition-all hover:border-[#209f8f]/40 hover:shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 flex items-center justify-center shrink-0 mr-5 text-[#146b60] group-hover:bg-[#209f8f] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-500 mb-1">{item.label}</h3>
                      {item.label === "Phone" ? (
                        <a href={`tel:${contactInfo.phoneE164}`} className="text-base sm:text-lg font-semibold text-[#0F2A26] hover:text-[#167c70]">{item.value}</a>
                      ) : item.label === "Email" ? (
                        <a href={`mailto:${contactInfo.email}`} className="text-base sm:text-lg font-semibold text-[#0F2A26] hover:text-[#167c70]">{item.value}</a>
                      ) : (
                        <p className="text-base sm:text-lg font-semibold text-[#0F2A26]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl("Hi Hulm, I have a question about Hulm POS.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#167c70] px-5 py-3 text-sm font-semibold text-white hover:bg-[#125f57]"
              >
                <WhatsAppIcon size={18} className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <Link
                href="/book-a-demo/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#167c70]/40 px-5 py-3 text-sm font-semibold text-[#167c70] hover:bg-[#f2fbf9]"
              >
                <CalendarCheck className="h-4 w-4" /> Book a free demo
              </Link>
            </div>
            <p className="text-sm text-zinc-500">
              New to Hulm? Read <Link href="/about/" className="font-semibold text-[#167c70] underline underline-offset-2">about Hulm Solutions</Link> or see{" "}
              <Link href="/pos-case-studies/" className="font-semibold text-[#167c70] underline underline-offset-2">customer stories</Link>.
            </p>
          </div>
          
          {/* Right Column: Modern Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <h2 className="text-2xl font-semibold text-[#0F2A26] mb-2 tracking-tight">
              {formSection?.heading || "Send us a message"}
            </h2>
            <p className="text-sm text-zinc-500 mb-6">
              Fill in your details and the team will get back to you.
            </p>
            
            <LeadForm source="contact" submitLabel="Send message" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
