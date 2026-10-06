import { Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface IndustryData {
  slug: string;
  icon: LucideIcon;
  hero: { badge: string; headline: string; subheadline: string };
  whatIs?: { headline: string; description: string; points?: string[] };
  whyChoose?: {
    headline: string;
    items?: Array<{ title: string; description: string }>;
  };
  whoCanUse?: { headline: string; description?: string; points?: string[] };
  faq: {
    headline: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
}

export const industriesData: Record<string, IndustryData> = {
  "manufacturing-industries": {
    slug: "manufacturing-industries",
    icon: Factory,
    hero: {
      badge: "Manufacturing POS",
      headline: "Manufacturing Industry POS System",
      subheadline: "Streamline operations, track inventory, and boost efficiency with our dedicated Manufacturing POS System—perfect for production units and growing your business effortlessly.",
    },
    whatIs: {
      headline: "HULM POS: The Ultimate Manufacturing Solution",
      description: "HULM POS has developed a dedicated Manufacturing POS System. Efficiency and accuracy are important attributes in manufacturing. This proprietary system will ensure streamlining operations, managing inventory, and automating different administrative tasks into a unique focus on the requirements of manufacturers.",
      points: [
        "Smooth workflows during production",
        "Precise tracking of inventory",
        "Secure and compliant transactions",
        "Reporting on all levels to reduce inefficiencies"
      ]
    },
    whyChoose: {
      headline: "Why Choose HULM POS for Manufacturing Industry?",
      items: [
        {
          title: "Designed for Manufacturing",
          description: "Purpose-built features tailored to production units, warehouses, and supply chain management."
        },
        {
          title: "Robust Security",
          description: "Ensures compliance with industry standards to safeguard sensitive operational and financial data."
        },
        {
          title: "Intuitive Interface",
          description: "Easy-to-use system for both factory floor workers and administrative staff, minimizing training time."
        },
        {
          title: "Trusted Globally",
          description: "Preferred by manufacturing businesses worldwide to enhance operational efficiency and streamline workflows."
        }
      ]
    },
    whoCanUse: {
      headline: "Who Can Benefit from HULM POS?",
      description: "HULM POS is ideal for a wide range of facilities:",
      points: [
        "Manufacturing Plants - Streamline daily production goals",
        "Warehouses - Optimize storage and dispatching",
        "Production Units - Track real-time resource usage",
        "Supply Chain Operations - Maintain seamless logistics",
        "Assembly Lines - Avoid bottlenecks with live data",
        "Quality Control Facilities - Ensure standards are met instantly"
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      description: "Get quick answers to common questions about our services and support for manufacturing businesses.",
      items: [
        {
          question: "Is HULM POS suitable for both small and large manufacturers?",
          answer: "Absolutely. HULM POS is scalable and can be tailored to meet the needs of both small manufacturers and large enterprises with complex supply chains."
        },
        {
          question: "Can HULM POS integrate with my existing software?",
          answer: "Yes, HULM POS can seamlessly integrate with ERP, accounting software, and other manufacturing tools to ensure smooth operations and data synchronization."
        },
        {
          question: "How secure is the data stored in HULM POS?",
          answer: "HULM POS follows industry-standard security protocols to protect sensitive business and operational data, ensuring compliance and peace of mind."
        }
      ]
    }
  }
};
