import React from "react"
import Link from "next/link"

/**
 * Hulm lockup: the original vector mark + "Hulm" wordmark, with the tagline
 * "Making Every Sale Seamless" set as real text under the wordmark so it stays sharp and
 * readable at header size (the tagline baked into the old PNG was ~8px and blurry).
 * Geometry follows the original 214x68 artwork: the wordmark starts at x=50 and ends near y=48.
 */
export function LogoLockup({ height = 44, tone = "light" }: { height?: number; tone?: "light" | "dark" }) {
  const scale = height / 68
  const width = Math.round(214 * scale)
  return (
    <span className="relative block shrink-0" style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo/hulm-logo.svg" alt="" aria-hidden="true" width={width} height={height} className="block h-full w-auto" />
      <span
        className={`absolute whitespace-nowrap font-semibold leading-none ${tone === "dark" ? "text-[#7AE582]" : "text-[#167C70]"}`}
        style={{
          left: Math.round(51 * scale),
          top: Math.round(52 * scale),
          fontSize: Math.max(9.5, Math.round(13.4 * scale * 10) / 10),
          letterSpacing: "0.005em",
          fontFamily: "var(--font-sans)",
        }}
      >
        Making Every Sale Seamless
      </span>
    </span>
  )
}

export function Logo({ height = 44 }: { height?: number }) {
  return (
    <Link
      href="/"
      aria-label="Hulm – Making Every Sale Seamless, homepage"
      className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25a18e]"
    >
      <LogoLockup height={height} />
    </Link>
  )
}
