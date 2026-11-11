"use client";

import { useEffect } from "react";

export function BlogCalculatorEnhancer() {
  useEffect(() => {
    const calcContainer = document.querySelector<HTMLElement>(".food-cost-calculator-widget");
    if (!calcContainer || calcContainer.dataset.calcEnhanced === "true") return;
    calcContainer.dataset.calcEnhanced = "true";

    const costInput = calcContainer.querySelector<HTMLInputElement>("#calc-serving-cost");
    const priceInput = calcContainer.querySelector<HTMLInputElement>("#calc-selling-price");
    const targetInput = calcContainer.querySelector<HTMLInputElement>("#calc-target-pct");

    const outFoodCostPct = calcContainer.querySelector<HTMLElement>("#calc-out-food-cost-pct");
    const outSuggestedPrice = calcContainer.querySelector<HTMLElement>("#calc-out-suggested-price");
    const outContribution = calcContainer.querySelector<HTMLElement>("#calc-out-contribution");
    const outContributionTarget = calcContainer.querySelector<HTMLElement>("#calc-out-contribution-target");
    const outStatusBadge = calcContainer.querySelector<HTMLElement>("#calc-status-badge");

    function calculate() {
      const cost = parseFloat(costInput?.value || "0") || 0;
      const price = parseFloat(priceInput?.value || "0") || 0;
      const target = parseFloat(targetInput?.value || "30") || 30;

      // Food Cost %
      const costPct = price > 0 ? (cost / price) * 100 : 0;
      // Recommended Price
      const targetDecimal = target / 100;
      const suggestedPrice = targetDecimal > 0 ? cost / targetDecimal : 0;
      // Contribution Margin
      const contribution = price - cost;
      const contributionTarget = suggestedPrice - cost;

      if (outFoodCostPct) {
        outFoodCostPct.textContent = `${costPct.toFixed(1)}%`;
      }
      if (outSuggestedPrice) {
        outSuggestedPrice.textContent = `Rs. ${Math.round(suggestedPrice).toLocaleString()}`;
      }
      if (outContribution) {
        outContribution.textContent = `Rs. ${Math.round(contribution).toLocaleString()}`;
      }
      if (outContributionTarget) {
        outContributionTarget.textContent = `Rs. ${Math.round(contributionTarget).toLocaleString()}`;
      }

      if (outStatusBadge) {
        if (costPct === 0) {
          outStatusBadge.textContent = "Enter recipe details";
          outStatusBadge.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-600";
        } else if (costPct <= 28) {
          outStatusBadge.textContent = "High Margin (Under 28%)";
          outStatusBadge.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800";
        } else if (costPct <= 35) {
          outStatusBadge.textContent = "Healthy Planning Range (28%–35%)";
          outStatusBadge.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#167c70]/10 text-[#167c70] border border-[#167c70]/20";
        } else {
          outStatusBadge.textContent = "Above Benchmark (>35%)";
          outStatusBadge.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800";
        }
      }
    }

    costInput?.addEventListener("input", calculate);
    priceInput?.addEventListener("input", calculate);
    targetInput?.addEventListener("input", calculate);

    // Initial calculation
    calculate();
  }, []);

  return null;
}
