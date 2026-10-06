import { NextResponse } from "next/server";

/**
 * Lead capture endpoint used by the contact form, the book-a-demo form and the final CTA form.
 *
 * Delivery (configure at least one in Netlify environment variables):
 *   LEAD_WEBHOOK_URL  - receives the lead as JSON (Zapier, Make, n8n, Google Apps Script, CRM)
 *   RESEND_API_KEY + SALES_EMAIL (+ LEAD_FROM_EMAIL) - emails the lead to sales via Resend
 * If neither is configured the endpoint returns 503 and the form falls back to WhatsApp,
 * so a lead is never silently lost.
 */
export const dynamic = "force-dynamic";

type LeadInput = {
  name?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  industry?: string;
  message?: string;
  plan?: string;
  source?: string;
  page?: string;
  attribution?: Record<string, string>;
  company_website?: string; // honeypot
};

const clean = (value: unknown, max = 200) =>
  typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: LeadInput;
  try {
    body = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend success so they do not retry.
  if (clean(body.company_website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    businessName: clean(body.businessName, 160),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    industry: clean(body.industry, 60),
    message: clean(body.message, 2000),
    plan: clean(body.plan, 40),
    source: clean(body.source, 40) || "website",
    page: clean(body.page, 200),
    attribution: Object.fromEntries(
      Object.entries(body.attribution || {}).slice(0, 12).map(([k, v]) => [clean(k, 40), clean(v, 160)]),
    ),
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !/^\+?[\d\s()-]{9,20}$/.test(lead.phone)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const deliveries: Promise<boolean>[] = [];

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    deliveries.push(
      fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) })
        .then((r) => r.ok)
        .catch(() => false),
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const salesEmail = process.env.SALES_EMAIL;
  if (resendKey && salesEmail) {
    const lines = Object.entries({ ...lead, attribution: JSON.stringify(lead.attribution) })
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    deliveries.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Hulm Website <website@hulmsolutions.com>",
          to: salesEmail.split(",").map((s) => s.trim()),
          reply_to: lead.email || undefined,
          subject: `New ${lead.source} lead: ${lead.name}${lead.businessName ? ` (${lead.businessName})` : ""}`,
          text: lines,
        }),
      })
        .then((r) => r.ok)
        .catch(() => false),
    );
  }

  if (!deliveries.length) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const results = await Promise.all(deliveries);
  if (!results.some(Boolean)) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
