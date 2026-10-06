import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function DashboardPreview() {
  const tabs = [
    { label: "POS Terminal", active: true },
    { label: "Product Catalog", active: false },
    { label: "Category Setup", active: false },
    { label: "Customer Management", active: false },
    { label: "Inventory & Stock", active: false }
  ];

  return (
    <Section data-reveal className="py-12 md:py-16 bg-white overflow-hidden relative z-0">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F5A4D] mb-4 text-balance leading-tight">
            Powerful POS Dashboard with Easy to Use Interface
          </h2>
          <p className="text-[14px] md:text-[15px] text-text-muted max-w-3xl mx-auto text-balance leading-relaxed">
            Run everything from one simple dashboard in Hulm Point of Sale Software. This cloud based POS software gives you a clear view to manage daily operations with speed and confidence across the Pakistan.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tabs.map((tab, index) => (
            <button 
              key={index}
              className={`px-5 py-2 rounded-full text-[14px] transition-colors duration-200 ${
                tab.active 
                  ? "bg-[#0F5A4D] text-white font-semibold" 
                  : "bg-[#E6F4F1] text-[#0F5A4D] font-medium hover:bg-[#D5EFE9]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Outer glowing/soft border container */}
          <div className="bg-[#F8FCFA] p-3 md:p-4 rounded-2xl border border-[#E6F4F1] shadow-[0_20px_50px_rgba(15,90,77,0.05)]">
            <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-sm border border-border/40">
              
              <div className="relative aspect-[16/10] w-full bg-white">
                <Image 
                  src="/images/uploads/2026/06/hero-image-hulm.webp" 
                  alt="Hulm POS Dashboard Interface" 
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1200px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
