import { Container } from "@/components/ui/container";

const badges = [
  {
    name: "AltHunt",
    href: "https://althunt.io/compare/hulm-pos-vs-loyverse",
    src: "/images/home/trusted/althunt.svg",
    alt: "Featured on AltHunt - Hulm POS",
    title: "AltHunt",
    width: 168,
    height: 36,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
  {
    name: "OpenHunts",
    href: "https://openhunts.com",
    src: "/images/home/trusted/openhunts.webp",
    alt: "OpenHunts Club Member - Hulm POS",
    title: "OpenHunts Club",
    width: 486,
    height: 105,
    className: "h-7 sm:h-8 w-auto object-contain",
  },
  {
    name: "Product Hunt",
    href: "https://www.producthunt.com/products/hulm-solutions-pos",
    src: "/images/home/trusted/product-hunt.webp",
    alt: "Hulm POS on Product Hunt",
    title: "Product Hunt",
    width: 260,
    height: 61,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
  {
    name: "GoodFirms",
    href: "https://www.goodfirms.co/software/hulm-pos",
    src: "/images/home/trusted/goodfirms-partner.webp",
    alt: "GoodFirms Partner Badge - Hulm POS",
    title: "GoodFirms",
    width: 200,
    height: 225,
    className: "h-11 sm:h-12 w-auto object-contain",
  },
  {
    name: "SoftwareSuggest",
    href: "https://www.softwaresuggest.com/hulm-pos",
    src: "/images/home/trusted/softwaresuggest.svg",
    alt: "SoftwareSuggest Software Review - Hulm POS",
    title: "SoftwareSuggest",
    width: 145,
    height: 46,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
  {
    name: "SaaSworthy",
    href: "https://www.saasworthy.com/product/hulm-pos",
    src: "/images/home/trusted/saasworthy.svg",
    alt: "SaaSworthy Software Review - Hulm POS",
    title: "SaaSworthy",
    width: 176,
    height: 38,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
  {
    name: "SourceForge",
    href: "https://sourceforge.net/software/product/Hulm-POS/",
    src: "/images/home/trusted/sourceforge.svg",
    alt: "SourceForge Software Review - Hulm POS",
    title: "SourceForge",
    width: 653,
    height: 103,
    className: "h-6 sm:h-7 w-auto object-contain",
  },
];

export function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by"
      className="relative overflow-hidden border-b border-[#E4E2DA] bg-[#FAF9F5] pt-8 pb-8 sm:pt-10 sm:pb-10"
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-6 sm:mb-8">
          <h2
            id="trusted-by"
            className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#0F2A26]"
          >
            Find Hulm POS on:
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-500">
            Featured across leading software review platforms & directories
          </p>
        </div>

        {/* Desktop View: Clean flex wrap row */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 py-2">
          {badges.map((b) => (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              title={b.title || b.alt}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#167c70]"
            >
              <img
                decoding="async"
                src={b.src}
                alt={b.alt}
                loading="lazy"
                width={b.width}
                height={b.height}
                className={b.className}
              />
            </a>
          ))}
        </div>

        {/* Mobile View: Infinite auto-scrolling logo slider */}
        <div className="relative -mx-4 overflow-x-auto scrollbar-none py-2 md:hidden motion-safe:overflow-hidden">
          {/* Subtle gradient fade on left edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-r from-[#FAF9F5] to-transparent"
          />

          {/* Subtle gradient fade on right edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-l from-[#FAF9F5] to-transparent"
          />

          {/* Marquee Track */}
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {/* Primary Set */}
            <div className="flex shrink-0 items-center gap-7 pr-7">
              {badges.map((b) => (
                <a
                  key={`m-${b.href}`}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={b.title || b.alt}
                  aria-label={b.title || b.alt}
                  className="flex shrink-0 items-center justify-center transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#167c70]"
                >
                  <img
                    decoding="async"
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    width={b.width}
                    height={b.height}
                    className={b.className}
                  />
                </a>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-7 pr-7"
            >
              {badges.map((b, idx) => (
                <a
                  key={`m-${b.href}-dup-${idx}`}
                  href={b.href}
                  tabIndex={-1}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={b.title || b.alt}
                  className="flex shrink-0 items-center justify-center transition-transform duration-200 active:scale-95 focus-visible:outline-none pointer-events-auto"
                >
                  <img
                    decoding="async"
                    src={b.src}
                    alt=""
                    loading="lazy"
                    width={b.width}
                    height={b.height}
                    className={b.className}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
