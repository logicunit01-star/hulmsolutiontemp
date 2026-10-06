/**
 * Which pricing plan includes each module, taken from the plan feature lists in
 * content/pages/pricing.ts. Keep the two in sync when plans change.
 */
export const planAvailability: Record<string, { label: string; note?: string }> = {
  "inventory-management": { label: "Included in every plan", note: "Basic inventory on Starter; multi-branch stock on Growth and Business." },
  "customer-management": { label: "Included in every plan", note: "Customer records on Starter; CRM and loyalty from Growth." },
  "reporting-module": { label: "Included in every plan", note: "Sales reports on Starter; advanced reporting from Growth." },
  "purchase-orders": { label: "Included from the Growth plan", note: "Vendor and purchase management." },
  "vendors-management": { label: "Included from the Growth plan", note: "Vendor and purchase management." },
  "order-management": { label: "Included from the Growth plan" },
  "mobile-pos": { label: "Runs on your Hulm plan", note: "Ask the team which devices and plan fit your setup." },
  "logistics-management-software": { label: "Available as a Hulm app", note: "Ask the team for pricing for your fleet size." },
  "cattle-management-software": { label: "Available as a Hulm app", note: "Ask the team for pricing for your farm." },
  website: { label: "Available as a Hulm app", note: "Ask the team for ecommerce store pricing." },
};
