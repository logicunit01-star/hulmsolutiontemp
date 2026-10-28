import { Container } from "@/components/ui/container";

const badges = [
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/thesaasdir.svg",
    alt: "Featured on TheSaaSDir",
    width: 182,
    height: 46,
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/top-trending.webp",
    alt: "Top Trending",
    width: 170,
    height: 194,
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/codehype.svg",
    alt: "Featured on CodeHype",
    width: 180,
    height: 65,
  },
  {
    wrapClass: "wrap-rect",
    src: "/images/home/trusted/saashub.webp",
    alt: "HulmPOS Approved Badge",
    width: 280,
    height: 93,
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/highly-recommended.webp",
    alt: "Highly Recommended",
    width: 170,
    height: 194,
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/althunt.svg",
    alt: "Featured on AltHunt",
    href: "https://althunt.io/compare/hulm-pos-vs-loyverse",
    width: 168,
    height: 36,
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/goodfirms-partner.webp",
    alt: "GoodFirms Partner Badge",
    width: 200,
    height: 225,
  },
  {
    wrapClass: "wrap-text",
    src: "/images/home/trusted/trustpilot.webp",
    alt: "Trustpilot Rating",
    width: 260,
    height: 142,
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/openhunts.webp",
    alt: "OpenHunts Club Member",
    title: "OpenHunts Club",
    href: "https://openhunts.com",
    width: 486,
    height: 105,
  },
  {
    wrapClass: "wrap-text",
    src: "/images/home/trusted/product-hunt.webp",
    alt: "Product Hunt",
    width: 260,
    height: 61,
  },
];

export function TrustedBy() {
  const renderItem = (b: (typeof badges)[number], key: string) => {
    const imgContent = (
      <img
        decoding="async"
        src={b.src}
        alt={b.alt}
        loading="lazy"
        width={b.width}
        height={b.height}
      />
    );

    if (b.href) {
      return (
        <a
          key={key}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          title={b.title || b.alt}
          className={`slider-item ${b.wrapClass}`}
        >
          {imgContent}
        </a>
      );
    }

    return (
      <div key={key} className={`slider-item ${b.wrapClass}`}>
        {imgContent}
      </div>
    );
  };

  return (
    <section
      aria-labelledby="trusted-by"
      className="relative overflow-hidden border-b border-[#E4E2DA] bg-[#FAF9F5] pt-8 pb-8 sm:pt-10 sm:pb-10"
    >
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
          <h2
            id="trusted-by"
            className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#0F2A26]"
          >
            Trusted By
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-500">
            Featured across leading software review platforms & directories
          </p>
        </div>
      </Container>
      <div className="relative overflow-hidden mt-3 sm:mt-4">
        {/* Soft edge fade masks for seamless infinite scroll */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10"
        />
        <div className="certificate-slider !bg-transparent !py-2 sm:!py-3">
          <div className="slider-track">
            {/* First set of badges */}
            {badges.map((b, i) => renderItem(b, `badge-1-${i}`))}
            {/* Duplicate set for infinite loop */}
            {badges.map((b, i) => renderItem(b, `badge-2-${i}`))}
          </div>
        </div>
      </div>
    </section>
  );
}
