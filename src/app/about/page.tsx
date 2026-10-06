import { aboutContent } from "@content/pages/about";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkChips } from "@/components/seo/link-chips";
import { pageJsonLd, seoMetadata } from "@/lib/seo/page-seo";
import { preloadHeroPattern } from "@/lib/hero-pattern";

// Live WordPress title + meta description (they carry the current rankings).
export const metadata = seoMetadata("/about/");

const schema = pageJsonLd({ route: "/about/", pageType: "AboutPage", crumbs: [{ name: "About Us", path: "/about/" }] });

export default function AboutPage() {
  preloadHeroPattern();
  return (
    <div className="relative overflow-hidden">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: "About Us" }]} className="border-b border-[#E4E2DA]/70 bg-white" />
      {/* Top Hero - Modern Brand Gradient */}
      <section className="relative w-full py-20 sm:py-28 bg-[#0F2A26] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.webp')",
            backgroundSize: "600px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#7AE582] mb-4">
            About Hulm Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {aboutContent.hero.headline}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Hulm Solutions builds POS software that helps Pakistani retail, restaurant and enterprise businesses run sales, inventory and every branch from one reliable system.
          </p>
        </div>
      </section>
      
      {/* Dynamic Sections */}
      {aboutContent.additionalSections?.map((section, index) => {
        if (section.type === "split-who-we-are") {
          return (
            <Section data-reveal key={index} className="py-20 lg:py-24 bg-white">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1 flex justify-center">
                    <img
                      src={section.image}
                      alt={`${section.heading} – Hulm Solutions POS software`}
                      className="max-w-full h-auto rounded-2xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                      Who We Are
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    {section.content?.split('\n\n').map((paragraph: string, pIdx: number) => (
                      <p key={pIdx} className="text-base text-zinc-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "split-mission") {
          return (
            <Section data-reveal key={index} className="py-20 lg:py-24 bg-[#F7F6F2] border-y border-gray-100">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                      Our purpose
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                      {section.content}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={section.image}
                      alt={`${section.heading} – Hulm Solutions POS software`}
                      className="max-w-full h-auto rounded-2xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "four-grid") {
          return (
            <Section data-reveal key={index} className="py-20 bg-white">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] mb-3 tracking-tight">
                    Our Core Values at Hulm Solutions
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600">
                    The driving principles behind everything we engineer.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.items?.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#F7F6F2] border border-gray-200/80 rounded-2xl p-7 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#146b60] flex items-center justify-center mx-auto mb-4 font-semibold text-base">
                        0{i + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-[#0F2A26] mb-2">{item.title}</h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "split-vision") {
          return (
            <Section data-reveal key={index} className="py-20 lg:py-24 bg-[#F7F6F2] border-y border-gray-100">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1 flex justify-center">
                    <img
                      src={section.image}
                      alt={`${section.heading} – Hulm Solutions POS software`}
                      className="max-w-full h-auto rounded-2xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#167C70]">
                      Looking ahead
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0F2A26] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        return null;
      })}

      {/* Google Reviews */}
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

      {/* Modern Split Final CTA */}
      <FinalCta
        heading="Experience the difference with Hulm POS"
        subheading="Join retail, restaurant, pharmacy and manufacturing businesses across Pakistan that run on Hulm."
      />
    </div>
  );
}

