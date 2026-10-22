"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

interface EmailPrivacyLinkProps {
  className?: string;
  iconClassName?: string;
  label?: string;
}

/**
 * Obfuscated email link component.
 * Prevents plain-text email scraping and eliminates Email Privacy audit warnings
 * by rendering a contact fallback in SSR HTML and hydrating the real mailto link on the client.
 */
export function EmailPrivacyLink({
  className = "inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-[#7ae582]",
  iconClassName = "h-4 w-4 text-[#25a18e]",
  label,
}: EmailPrivacyLinkProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = "info";
    const domain = "hulmsolutions.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    return (
      <a href="/contact/" className={className}>
        <Mail className={iconClassName} aria-hidden="true" />
        <span>{label || "Contact Us"}</span>
      </a>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      <Mail className={iconClassName} aria-hidden="true" />
      <span>{label || email}</span>
    </a>
  );
}
