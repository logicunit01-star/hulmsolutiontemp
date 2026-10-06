import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { ProductScreen } from "@content/data/product-screens";

/**
 * "See it in Hulm" block: one large screenshot plus up to three smaller ones, all real product UI.
 * Each image carries alt text that names the page topic.
 */
export function ProductScreens({
  screens,
  heading,
  description = "Real screens from the Hulm POS workspace.",
  topic,
}: {
  screens: ProductScreen[];
  heading: string;
  description?: string;
  topic?: string;
}) {
  if (!screens.length) return null;
  const [main, ...rest] = screens;
  const altFor = (s: ProductScreen) => (topic ? `${s.alt} (${topic})` : s.alt);
  return (
    <Section data-reveal className="border-b border-gray-100 bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">{heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">{description}</p>
        </div>
        <figure className={`overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#f8fbfa] shadow-[0_24px_60px_-40px_rgba(21,63,57,0.55)] ${main.height > main.width ? "mx-auto max-w-sm" : ""}`}>
          <Image
            src={main.src}
            alt={altFor(main)}
            width={main.width}
            height={main.height}
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-[#E4E2DA] bg-white px-5 py-3 text-sm text-zinc-600">{main.caption}</figcaption>
        </figure>
        {rest.length ? (
          <div className={`mt-6 grid gap-6 ${rest.length === 1 ? "sm:grid-cols-1 lg:mx-auto lg:max-w-2xl" : rest.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {rest.map((s) => (
              <figure key={s.src} className="overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#f8fbfa]">
                <Image src={s.src} alt={altFor(s)} width={s.width} height={s.height} sizes="(max-width: 640px) 100vw, 360px" loading="lazy" className="h-auto w-full" />
                <figcaption className="border-t border-[#E4E2DA] bg-white px-4 py-3 text-xs leading-5 text-zinc-600">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
