/**
 * Blog SEO helpers (server-only).
 *
 * - liveArticleDates(): datePublished / dateModified from the live Yoast Article schema
 *   (allBlogsData has no dates for most posts, so the local Article schema had none).
 * - extractFaq(): builds FAQPage items from the FAQ that is actually visible in the post HTML.
 *   Handles the three markups the WordPress posts use: Yoast `.schema-faq-section` blocks,
 *   "<strong>Q?</strong> + <p>answer</p>" pairs, and "<p><strong>Q1. …?</strong><br>Ans. …</p>" /
 *   "<h4>Q1. …</h4><p>Ans. …</p>" pairs under a FAQ heading.
 * - prepareArticleHtml(): link/image hygiene for legacy post HTML.
 */
import * as cheerio from "cheerio";

import { getProductionParityPage } from "@/lib/production-parity";
import { BLOG_CONTENT_UPDATED, BLOG_LAST_REVIEWED, BLOG_LAST_REVIEWED_DEFAULT } from "@/content/content-dates";

export type FaqItem = { question: string; answer: string };

const clean = (s: string) =>
  s
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .trim();

const stripQuestionPrefix = (s: string) => clean(s).replace(/^(Q\s*\d*\s*[.:)]|\d+\s*[.)])\s*/i, "").trim();
const stripAnswerPrefix = (s: string) => clean(s).replace(/^Ans(wer)?\s*[.:]\s*/i, "").trim();

export function liveArticleDates(route: string): { published?: string; modified?: string } {
  const live = getProductionParityPage(route);
  if (!live) return {};
  const published = live.publishedTime || undefined;
  const modified = live.modifiedTime || undefined;
  if (published) return { published, modified: modified || published };
  for (const raw of live.schemas || []) {
    const p = raw.match(/"datePublished":"([^"]+)"/);
    const m = raw.match(/"dateModified":"([^"]+)"/);
    if (p) return { published: p[1], modified: m?.[1] || p[1] };
  }
  return {};
}

const later = (a?: string, b?: string) => (!a ? b : !b ? a : new Date(a) >= new Date(b) ? a : b);

/**
 * Crawler-facing dates for a post: original publish date (never changes), last substantive update
 * (later of live WordPress modified date and our own content update), and last editorial review.
 */
export function blogDates(slug: string, post?: { publishedTime?: string; modifiedTime?: string }) {
  const live = liveArticleDates(`/blog/${slug}/`);
  const published = post?.publishedTime || live.published;
  const modified = later(later(post?.modifiedTime, live.modified), BLOG_CONTENT_UPDATED[slug]) || published;
  const reviewed = BLOG_LAST_REVIEWED[slug] || BLOG_LAST_REVIEWED_DEFAULT;
  return { published, modified, reviewed };
}

export function extractFaq(html: string): FaqItem[] {
  const $ = cheerio.load(`<div id="__root">${html}</div>`, null, false);
  const items: FaqItem[] = [];

  // 1) Yoast FAQ blocks
  $(".schema-faq-section").each((_, el) => {
    const q = stripQuestionPrefix($(el).find(".schema-faq-question").first().text());
    const a = stripAnswerPrefix($(el).find(".schema-faq-answer").first().text());
    if (q && a) items.push({ question: q, answer: a });
  });
  if (items.length) return items;

  // 2) Plain FAQ under a "FAQ / Frequently Asked" heading
  const nodes = $("#__root").children().toArray();
  const start = nodes.findIndex((n) => /^h[2-4]$/i.test(n.tagName) && /(faq|frequently asked)/i.test($(n).text()));
  if (start < 0) return items;
  const headingLevel = Number(nodes[start].tagName.slice(1));

  let current: FaqItem | null = null;
  const push = () => {
    if (current && current.question && current.answer) items.push({ question: current.question, answer: clean(current.answer) });
    current = null;
  };

  for (const node of nodes.slice(start + 1)) {
    const tag = node.tagName.toLowerCase();
    const $n = $(node);
    const text = clean($n.text());
    const level = /^h[1-6]$/.test(tag) ? Number(tag.slice(1)) : 99;
    const looksLikeQuestion = /\?\s*$/.test(text) || /^Q\s*\d/i.test(text);

    if (level <= headingLevel && !looksLikeQuestion) break; // next section

    if ((level < 99 || tag === "strong") && looksLikeQuestion) {
      push();
      current = { question: stripQuestionPrefix(text), answer: "" };
      continue;
    }

    if (tag === "p") {
      const strong = $n.children("strong, b").first();
      const strongText = clean(strong.text());
      if (strong.length && /\?\s*$/.test(strongText) && text.startsWith(strongText.slice(0, 10))) {
        push();
        current = { question: stripQuestionPrefix(strongText), answer: stripAnswerPrefix(text.slice(strongText.length)) };
        continue;
      }
      if (current) current.answer = `${current.answer} ${stripAnswerPrefix(text)}`.trim();
      continue;
    }

    if (current && (tag === "ul" || tag === "ol")) current.answer = `${current.answer} ${text}`.trim();
  }
  push();
  return items;
}

function altFromSrc(src: string) {
  const file = decodeURIComponent(src.split("?")[0].split("/").pop() || "");
  return file
    .replace(/\.(webp|png|jpe?g|gif|svg|avif)$/i, "")
    .replace(/-\d+x\d+$/, "")
    .replace(/-e\d{9,}$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\d+\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function prepareArticleHtml(html: string): string {
  return (
    html
      // drop the leftover SEO-vendor link (smr1.azadseo.pro) but keep its anchor text
      .replace(/<a\b[^>]*href="https?:\/\/[^"]*azadseo\.pro[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, "$1")
      // images: add alt text where missing/empty, lazy-load
      .replace(/<img\b([^>]*?)\/?>/gi, (tag, attrs: string) => {
        const src = attrs.match(/\ssrc="([^"]+)"/)?.[1] || "";
        let out = attrs;
        if (!/\salt="[^"]+"/i.test(out)) {
          const alt = altFromSrc(src).replace(/"/g, "&quot;");
          out = /\salt="/i.test(out) ? out.replace(/\salt="[^"]*"/i, ` alt="${alt}"`) : `${out} alt="${alt}"`;
        }
        if (!/\sloading=/i.test(out)) out = `${out} loading="lazy"`;
        if (!/\sdecoding=/i.test(out)) out = `${out} decoding="async"`;
        return `<img${out} />`;
      })
  );
}

