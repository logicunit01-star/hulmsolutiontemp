import Image from "next/image";

import { Container } from "@/components/ui/container";
import { clientLogos } from "@content/data/clients";

/** Logo strip of real Hulm customers. */
export function ClientLogos({
  heading = "Trusted by businesses across the world",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section className={`border-y border-[#e4efec] bg-white py-12 ${className}`} aria-labelledby="client-logos-heading">
      <Container>
        <h2 id="client-logos-heading" className="mb-8 text-center text-sm font-semibold text-zinc-600">
          {heading}
        </h2>
        <ul className="mx-auto grid max-w-5xl grid-cols-3 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <li key={logo.file} className="flex h-14 items-center justify-center">
              <Image
                src={`/images/home/trusted-clients/${logo.file}`}
                alt={`${logo.name} logo, a Hulm customer`}
                width={logo.width}
                height={logo.height}
                sizes="120px"
                loading="lazy"
                className="h-auto max-h-12 w-auto max-w-[120px] object-contain opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
