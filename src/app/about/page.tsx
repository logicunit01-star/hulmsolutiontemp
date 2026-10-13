import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Target, Eye, Users, ShieldCheck } from "lucide-react";
import { aboutContent } from "@content/pages/about";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, seoMetadata } from "@/lib/seo/page-seo";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/about/");

const schema = pageJsonLd({
  route: "/about/",
  pageType: "AboutPage",
  crumbs: [{ name: "About Us", path: "/about/" }],
});

const valueIcons = [Target, Users, ShieldCheck, Eye];

export default function AboutPage() {
  const whoWeAreSection = aboutContent.additionalSections?.find((s) => s.type === "split-who-we-are");
  const missionSection = aboutContent.additionalSections?.find((s) => s.type === "split-mission");
  const valuesSection = aboutContent.additionalSections?.find((s) => s.type === "four-grid");
  const visionSection = aboutContent.additionalSections?.find((s) => s.type === "split-vision");

  return (
    <div className="relative overflow-hidden bg-white">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "About Us" }]} className="border-b border-[#E4E2DA]/70 bg-white" />

      {/* Hero Section - Matching Homepage Theme */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-white pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div aria-hidden="true" className="bg-grid-fade pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="max-w-2xl lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3.5 py-1 text-xs font-semibold text-[#167c70]">
              <Sparkles className="h-3.5 w-3.5 text-[#25A18E]" />
              <span>About Hulm Solutions</span>
            </div>

            <h1 className="text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#0F2A26] text-balance sm:text-4xl lg:text-[44px]">
              Empowering businesses with seamless POS &{" "}
              <span className="mark-lime">better operations</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600">
              Hulm Solutions builds modern POS and management software that helps Pakistani retail stores, restaurants, pharmacies, and enterprises manage sales, inventory, and multi-branch operations from one reliable platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact/">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/pricing/">Explore Pricing</Link>
              </Button>
            </div>

            <ul className="mt-7 flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                Cloud-based & hardware agnostic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                Local support on WhatsApp & phone
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#167c70]" />
                FBR-integrated invoicing
              </li>
            </ul>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:col-span-5 lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#167c70]/15 via-[#7ae582]/10 to-transparent blur-2xl -z-10"
            />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-2 shadow-[0_25px_60px_-15px_rgba(21,40,37,0.22)]">
              <Image
                src={whoWeAreSection?.image || "/images/home/hero-create-sales-order.webp"}
                alt="Hulm Solutions POS platform"
                width={700}
                height={500}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      {whoWeAreSection && (
        <Section data-reveal className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
                  <span>Who We Are</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
                  {whoWeAreSection.heading}
                </h2>
                {whoWeAreSection.content?.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-[#FAF9F5] p-2 shadow-md">
                  <Image
                    src={whoWeAreSection.image || "/images/home/hero-create-sales-order.webp"}
                    alt={`${whoWeAreSection.heading} - Hulm Solutions POS`}
                    width={640}
                    height={440}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Our Mission */}
      {missionSection && (
        <Section data-reveal className="bg-[#F7F6F2] py-16 sm:py-20 lg:py-24 border-y border-[#E4E2DA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white p-2 shadow-md">
                  <Image
                    src={missionSection.image || "/images/product/hulm-apps-workspace.webp"}
                    alt={`${missionSection.heading} - Hulm Solutions POS`}
                    width={640}
                    height={440}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
                  <span>Our Purpose</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
                  {missionSection.heading}
                </h2>
                {missionSection.content?.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Core Values */}
      {valuesSection && valuesSection.items && (
        <Section data-reveal className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 mb-3 text-xs font-semibold text-[#167c70]">
                <span>Guiding Principles</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
                Our Core Values at Hulm Solutions
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                The driving principles behind everything we engineer and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuesSection.items.map((item, i) => {
                const Icon = valueIcons[i] || Target;
                return (
                  <div
                    key={i}
                    className="lift bg-[#FAF9F5] border border-[#E4E2DA] rounded-2xl p-7 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E4E2DA] text-[#167c70] flex items-center justify-center mb-5 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#167c70] mb-2">0{i + 1}</span>
                    <h3 className="text-lg font-bold text-[#0F2A26] mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Our Vision */}
      {visionSection && (
        <Section data-reveal className="bg-[#F7F6F2] py-16 sm:py-20 lg:py-24 border-t border-[#E4E2DA]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#167c70]/20 bg-[#167c70]/6 px-3 py-1 text-xs font-semibold text-[#167c70]">
                  <span>Looking Ahead</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F2A26] sm:text-3xl lg:text-4xl">
                  {visionSection.heading}
                </h2>
                {visionSection.content?.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative overflow-hidden rounded-2xl border border-[#E4E2DA] bg-white p-2 shadow-md">
                  <Image
                    src={visionSection.image || "/images/uploads/2024/12/hulm-our-vission-e1733836535286.png"}
                    alt={`${visionSection.heading} - Hulm Solutions POS`}
                    width={640}
                    height={440}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Navigation Explore Chips */}
      <Section data-reveal className="bg-white py-12">
        <Container>
          <LinkChips
            heading="Explore Hulm POS"
            centered
            items={[
              { label: "POS features", href: "/features/" },
              { label: "POS pricing", href: "/pricing/" },
              { label: "Industries", href: "/industries/" },
              { label: "FBR integrated POS", href: "/fbr-integrated-pos-pakistan/" },
              { label: "POS case studies", href: "/pos-case-studies/" },
              { label: "Contact us", href: "/contact/" },
            ]}
          />
        </Container>
      </Section>

      <GoogleReviewsSection />

      {/* Final CTA in Homepage Theme */}
      <FinalCta
        heading="Experience the difference with Hulm POS"
        subheading="Join retail, restaurant, pharmacy and manufacturing businesses across Pakistan that run on Hulm."
      />
    </div>
  );
}
