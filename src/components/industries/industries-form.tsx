"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface IndustriesFormProps {
  heading?: string;
  image?: string;
  imageAlt?: string;
}

export function IndustriesForm({
  heading = "We’re Here to Help Your Business Thrive",
  image = "/images/uploads/2024/12/contact-hulm-e1733839029157.png",
  imageAlt = "Contact Hulm"
}: IndustriesFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column: Image */}
      <div className="flex items-center justify-center order-2 lg:order-1">
        <img
          src={image}
          alt={imageAlt}
          className="w-full max-w-lg h-auto object-contain drop-shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Right Column: Form */}
      <div className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-elevation-2 relative order-1 lg:order-2">
        <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
          {heading}
        </h3>

        {submitted ? (
          <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Thank you!</h4>
            <p className="text-text-muted">Your request has been received. Our team will contact you shortly.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your First Name"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-muted mb-1">Website URL</label>
              <input
                type="url"
                placeholder="Business website URL"
                className="w-full h-12 px-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-muted mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Say something..."
                className="w-full p-4 rounded-xl border border-border bg-background-muted/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-md transition-all"
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
