"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe2, Menu, X } from "lucide-react"
import { mainNav, type NavItem } from "@/lib/navigation"
import { REGIONAL_LOCATIONS } from "@/lib/countries/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogoLockup } from "@/components/layout/logo"

function normalizePath(path: string) {
  return path.replace(/\/$/, "") || "/"
}

function MobileNavItem({ item, pathname, onClick }: { item: NavItem, pathname: string, onClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const normalizedPathname = normalizePath(pathname)
  const normalizedHref = normalizePath(item.href)
  const hasChildren = Boolean(item.children?.length)
  const isActive = normalizedPathname === normalizedHref ||
    normalizedPathname.startsWith(`${normalizedHref}/`) ||
    (item.children?.some((child) => normalizePath(child.href) === normalizedPathname) ?? false)
  const submenuId = `mobile-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-submenu`

  if (hasChildren) {
    return (
      <div className="flex flex-col space-y-1">
        <div className={cn(
          "flex items-center rounded-xl transition-colors",
          isActive ? "bg-[#25a18e]/10" : "hover:bg-zinc-50"
        )}>
          <Link
            href={item.href}
            onClick={onClick}
            className={cn(
              "flex-1 px-4 py-3 text-sm font-semibold",
              isActive ? "text-[#168779]" : "text-zinc-700"
            )}
          >
            {item.title}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="mr-2 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-white hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
            aria-label={`${isOpen ? "Hide" : "Show"} ${item.title} links`}
            aria-expanded={isOpen}
            aria-controls={submenuId}
            style={{ backgroundColor: "transparent", color: "#71717a" }}
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
              style={{ width: 16, minWidth: 16, height: 16, color: "#71717a" }}
            />
          </button>
        </div>

        {isOpen && (
          <div id={submenuId} className="ml-4 flex flex-col space-y-1 border-l-2 border-[#25a18e]/20 py-1 pl-4">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClick}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-xs font-medium transition-colors",
                  normalizePath(child.href) === normalizedPathname
                    ? "bg-[#25a18e]/10 font-semibold text-[#168779]"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                )}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all",
        isActive ? "bg-[#25a18e]/10 text-[#168779]" : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
      )}
    >
      <span>{item.title}</span>
      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#25a18e]" aria-hidden="true" />}
    </Link>
  )
}

function MobileRegionSelector({ pathname, onNavigate }: { pathname: string, onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const normalizedPathname = normalizePath(pathname)
  const pakistan = REGIONAL_LOCATIONS.find((location) => location.code === "PK") ?? REGIONAL_LOCATIONS[0]
  const activeLocation = REGIONAL_LOCATIONS.find((location) => normalizePath(location.href) === normalizedPathname) ?? pakistan

  return (
    <div className="border-t border-zinc-100 pt-4">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-left transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
        aria-expanded={isOpen}
        aria-controls="mobile-region-options"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#168779] shadow-xs" aria-hidden="true">
            <Globe2 className="h-4 w-4" style={{ width: 16, minWidth: 16, height: 16, color: "#168779" }} />
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Region</span>
            <span className="block text-sm font-semibold text-zinc-800">{activeLocation.country}</span>
          </span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-zinc-400 transition-transform", isOpen && "rotate-180")}
          style={{ width: 16, minWidth: 16, height: 16, color: "#a1a1aa" }}
        />
      </button>

      {isOpen && (
        <div id="mobile-region-options" className="mt-2 grid grid-cols-2 gap-2">
          {REGIONAL_LOCATIONS.map((location) => {
            const isActive = location.code === activeLocation.code
            return (
              <Link
                key={location.code}
                href={location.href}
                onClick={onNavigate}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors",
                  isActive
                    ? "border-[#25a18e]/40 bg-[#25a18e]/10 text-[#168779]"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
                )}
              >
                <span className="mr-1.5" aria-hidden="true">{location.flag}</span>
                {location.country}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const trigger = triggerRef.current
    const previousOverflow = document.body.style.overflow
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")
    document.body.style.overflow = "hidden"
    main?.setAttribute("inert", "")
    footer?.setAttribute("inert", "")
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(false)
        return
      }

      if (event.key !== "Tab" || !panelRef.current) return

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => !element.hasAttribute("hidden"))

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
      trigger?.focus()
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-[#0F2A26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        style={{ backgroundColor: "#fff", color: "#3f3f46" }}
      >
        <Menu className="h-5 w-5" style={{ width: 20, minWidth: 20, height: 20, color: "#3f3f46" }} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[80]">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/45 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <div
            ref={panelRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-zinc-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
              <Link href="/" onClick={closeMenu} aria-label="Hulm homepage">
                <LogoLockup height={40} />
              </Link>
              <h2 id="mobile-navigation-title" className="sr-only">Site navigation</h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
                aria-label="Close menu"
                style={{ backgroundColor: "transparent", color: "#52525b" }}
              >
                <X className="h-5 w-5" style={{ width: 20, minWidth: 20, height: 20, color: "#52525b" }} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-5">
              <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
                {mainNav.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    pathname={pathname}
                    onClick={closeMenu}
                  />
                ))}
              </nav>

            </div>

            <div className="border-t border-zinc-100 bg-zinc-50/70 p-5">
              <div className="grid grid-cols-2 gap-2.5">
                <Button variant="outline" className="h-11 rounded-xl text-xs" asChild>
                  <Link href="https://app.hulmsolutions.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Sign in
                  </Link>
                </Button>
                <Button className="h-11 rounded-xl bg-[#0F2A26] text-xs text-white hover:bg-[#25a18e]" asChild>
                  <Link
                    href="https://app.hulmsolutions.com/Register"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    style={{ backgroundColor: "#152825", color: "#fff" }}
                  >
                    Start free trial
                  </Link>
                </Button>
              </div>
              <Link href="/book-a-demo/" onClick={closeMenu} className="mt-3 block text-center text-xs font-semibold text-[#168779] hover:underline">
                Prefer a guided setup? Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
