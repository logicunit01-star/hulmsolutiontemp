import React from "react"
import Link from "next/link"

const dimensionsByHeight: Record<number, { container: string; text: string; width: number }> = {
  40: { container: "w-[126px] h-[40px]", text: "left-[30px] top-[31px] text-[9px]", width: 126 },
  44: { container: "w-[138px] h-[44px]", text: "left-[33px] top-[34px] text-[9.5px]", width: 138 },
  50: { container: "w-[157px] h-[50px]", text: "left-[38px] top-[38px] text-[10px]", width: 157 },
}

/**
 * Hulm lockup: the original vector mark + "Hulm" wordmark, with the tagline
 * "Making Every Sale Seamless" set as real text under the wordmark so it stays sharp and
 * readable across header, drawer, and footer.
 */
export function LogoLockup({ height = 44, tone = "light" }: { height?: number; tone?: "light" | "dark" }) {
  const dim = dimensionsByHeight[height] || dimensionsByHeight[44]
  return (
    <span className={`relative block shrink-0 ${dim.container}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo/hulm-logo.svg"
        alt="Hulm POS - Making Every Sale Seamless"
        width={dim.width}
        height={height}
        className="block h-full w-auto"
      />
      <span
        className={`absolute whitespace-nowrap font-semibold leading-none font-sans tracking-[0.005em] ${dim.text} ${tone === "dark" ? "text-[#7AE582]" : "text-[#167C70]"}`}
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
