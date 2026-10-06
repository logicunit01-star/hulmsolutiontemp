import { getAttribution, track } from "@/lib/track";

export type LeadPayload = {
  name: string;
  phone: string;
  businessName?: string;
  email?: string;
  industry?: string;
  message?: string;
  plan?: string;
  source: "contact" | "demo" | "final_cta";
  company_website?: string;
};

/** POSTs a lead to /api/lead. Resolves to true when at least one delivery channel accepted it. */
export async function submitLead(payload: LeadPayload, timeoutMs = 6000): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch("/api/lead/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, page: window.location.pathname, attribution: getAttribution() }),
      signal: controller.signal,
    });
    const ok = res.ok;
    track(ok ? "generate_lead" : "lead_error", { form: payload.source, industry: payload.industry, plan: payload.plan, status: res.status });
    return ok;
  } catch {
    track("lead_error", { form: payload.source, status: "network" });
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export const industryOptions = [
  { value: "retail", label: "Retail store" },
  { value: "restaurant", label: "Restaurant / cafe" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "bakery", label: "Bakery" },
  { value: "clothing", label: "Clothing store" },
  { value: "salon", label: "Salon / spa" },
  { value: "jewellery", label: "Jewellery shop" },
  { value: "electric", label: "Electric store" },
  { value: "furniture", label: "Furniture store" },
  { value: "toys", label: "Toy store" },
  { value: "manufacturing", label: "Manufacturing / distribution" },
  { value: "other", label: "Other business" },
] as const;
