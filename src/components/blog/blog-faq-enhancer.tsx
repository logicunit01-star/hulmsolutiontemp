"use client";

import { useEffect } from "react";

export function BlogFaqEnhancer() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".blog-content .schema-faq-section")
    );

    if (sections.length === 0) return;

    const updaters: ((open: boolean) => void)[] = [];

    sections.forEach((section, idx) => {
      if (section.dataset.faqEnhanced === "true") return;
      section.dataset.faqEnhanced = "true";

      const questionEl = section.querySelector<HTMLElement>(".schema-faq-question");
      const answerEl = section.querySelector<HTMLElement>(".schema-faq-answer");

      if (!questionEl || !answerEl) return;

      // Extract raw question text & clean leading numbers or Q prefixes
      const rawText = questionEl.textContent?.trim() || "";
      const cleanQuestion = rawText
        .replace(/^(\d+[\.\)]|Q\d*[:.])\s*/i, "")
        .replace(/^Q:\s*/i, "")
        .trim();

      // Clear questionEl content and structure it cleanly like SiteFaqAccordion
      questionEl.innerHTML = "";
      questionEl.className =
        "schema-faq-question flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-[#152825] cursor-pointer select-none";

      const leftSpan = document.createElement("span");
      leftSpan.className = "flex items-start sm:items-center gap-3";
      leftSpan.innerHTML = `<span class="text-[#25a18e] font-semibold text-base sm:text-lg shrink-0">Q:</span><span class="leading-snug">${cleanQuestion}</span>`;
      questionEl.appendChild(leftSpan);

      // Add animated Chevron icon
      const chevronWrapper = document.createElement("span");
      chevronWrapper.className =
        "faq-chevron-icon shrink-0 ml-auto transition-transform duration-200";
      chevronWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m6 9 6 6 6-6"/></svg>`;
      questionEl.appendChild(chevronWrapper);

      // Clean answer text & ensure standard "Ans:" prefix
      const rawAnswerHtml = answerEl.innerHTML.trim();
      const cleanedAnswerHtml = rawAnswerHtml
        .replace(/^<strong[^>]*>Ans[\.:]?\s*<\/strong>\s*/i, "")
        .replace(/^Ans[\.:]?\s*/i, "")
        .trim();

      answerEl.className =
        "schema-faq-answer text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-3";
      answerEl.innerHTML = `<strong class="text-[#152825] font-semibold mr-2">Ans:</strong><span>${cleanedAnswerHtml}</span>`;

      function updateState(open: boolean) {
        if (open) {
          section.classList.add("is-open");
          answerEl!.style.display = "block";
          chevronWrapper.style.transform = "rotate(180deg)";
          chevronWrapper.style.color = "#25a18e";
        } else {
          section.classList.remove("is-open");
          answerEl!.style.display = "none";
          chevronWrapper.style.transform = "rotate(0deg)";
          chevronWrapper.style.color = "#a1a1aa";
        }
      }

      updaters.push(updateState);

      // Initial state: first item open, rest closed
      updateState(idx === 0);

      questionEl.addEventListener("click", () => {
        const currentlyOpen = section.classList.contains("is-open");
        if (currentlyOpen) {
          // If clicked on currently open item, collapse it
          updateState(false);
        } else {
          // When opening a second item, close all other items first
          updaters.forEach((update, otherIdx) => {
            if (otherIdx !== idx) {
              update(false);
            }
          });
          // Open the clicked item
          updateState(true);
        }
      });
    });
  }, []);

  return null;
}
