"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { mainNav } from "@/lib/navigation"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

/**
 * Single-row header: logo, six flat links, sign in and two CTAs. No utility bar and no dropdowns.
 * Phone, email, social and regional editions live in the footer and the WhatsApp button.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const current = (pathname || "/").replace(/\/$/, "") || "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white transition-colors duration-200",
        isScrolled ? "border-zinc-200" : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {mainNav.map((item) => {
              const href = item.href.replace(/\/$/, "") || "/";
              const active = current === href || (href !== "/" && current.startsWith(`${href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[14px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:rounded-full after:transition-colors",
                    active ? "text-[#0F2A26] after:bg-[#25a18e]" : "text-[#475467] hover:text-[#0F2A26] after:bg-transparent"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-5 lg:flex">
            <a href="https://app.hulmsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-[#475467] transition-colors hover:text-[#0F2A26]">
              Sign in
            </a>
            <Link
              href="/book-a-demo/"
              className="inline-flex h-10 items-center rounded-lg border border-zinc-300 px-4 text-[14px] font-semibold text-[#0F2A26] transition-colors hover:border-[#152825]"
            >
              Book a demo
            </Link>
            <a
              href="https://app.hulmsolutions.com/Register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-lg bg-[#0F2A26] px-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#167c70]"
            >
              Start free trial
            </a>
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
