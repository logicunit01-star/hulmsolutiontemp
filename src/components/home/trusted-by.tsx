import { Container } from "@/components/ui/container";

const badges = [
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/thesaasdir.svg",
    alt: "Featured on TheSaaSDir",
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/top-trending.webp",
    alt: "Top Trending",
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/codehype.svg",
    alt: "Featured on CodeHype",
  },
  {
    wrapClass: "wrap-rect",
    src: "/images/home/trusted/saashub.png",
    alt: "HulmPOS Approved Badge",
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/highly-recommended.webp",
    alt: "Highly Recommended",
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/althunt.svg",
    alt: "Featured on AltHunt",
    href: "https://althunt.io/compare/hulm-pos-vs-loyverse",
  },
  {
    wrapClass: "wrap-shield",
    src: "/images/home/trusted/goodfirms-partner.png",
    alt: "GoodFirms Partner Badge",
  },
  {
    wrapClass: "wrap-text",
    src: "/images/home/trusted/trustpilot.webp",
    alt: "Trustpilot Rating",
  },
  {
    wrapClass: "wrap-pill",
    src: "/images/home/trusted/openhunts.webp",
    alt: "OpenHunts Club Member",
    title: "OpenHunts Club",
    href: "https://openhunts.com",
  },
  {
    wrapClass: "wrap-text",
    src: "/images/home/trusted/product-hunt.png",
    alt: "Product Hunt",
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
      className="border-b border-[#e6efed] bg-[#f4faf8]/60 pt-7 pb-2 sm:pt-9 sm:pb-3"
    >
      <Container>
        <h2
          id="trusted-by"
          className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-[#111E1C]"
        >
          Trusted By
        </h2>
      </Container>
      <div className="certificate-slider mt-3 sm:mt-4 !bg-transparent !py-4">
        <div className="slider-track">
          {/* First set of badges */}
          {badges.map((b, i) => renderItem(b, `badge-1-${i}`))}
          {/* Duplicate set for infinite loop */}
          {badges.map((b, i) => renderItem(b, `badge-2-${i}`))}
        </div>
      </div>
    </section>
  );
}
