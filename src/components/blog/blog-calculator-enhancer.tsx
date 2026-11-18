"use client";

import { useEffect } from "react";

export function BlogCalculatorEnhancer() {
  useEffect(() => {
    // =========================================================================
    // 1. Food Cost Calculator (Existing)
    // =========================================================================
    const foodCalc = document.querySelector<HTMLElement>(".food-cost-calculator-widget");
    if (foodCalc && foodCalc.dataset.calcEnhanced !== "true") {
      foodCalc.dataset.calcEnhanced = "true";

      const costInput = foodCalc.querySelector<HTMLInputElement>("#calc-serving-cost");
      const priceInput = foodCalc.querySelector<HTMLInputElement>("#calc-selling-price");
      const targetInput = foodCalc.querySelector<HTMLInputElement>("#calc-target-pct");

      const outFoodCostPct = foodCalc.querySelector<HTMLElement>("#calc-out-food-cost-pct");
      const outSuggestedPrice = foodCalc.querySelector<HTMLElement>("#calc-out-suggested-price");
      const outContribution = foodCalc.querySelector<HTMLElement>("#calc-out-contribution");
      const outContributionTarget = foodCalc.querySelector<HTMLElement>("#calc-out-contribution-target");
      const outStatusBadge = foodCalc.querySelector<HTMLElement>("#calc-status-badge");

      function calculateFood() {
        const cost = parseFloat(costInput?.value || "0") || 0;
        const price = parseFloat(priceInput?.value || "0") || 0;
        const target = parseFloat(targetInput?.value || "30") || 30;

        const costPct = price > 0 ? (cost / price) * 100 : 0;
        const targetDecimal = target / 100;
        const suggestedPrice = targetDecimal > 0 ? cost / targetDecimal : 0;
        const contribution = price - cost;
        const contributionTarget = suggestedPrice - cost;

        if (outFoodCostPct) outFoodCostPct.textContent = `${costPct.toFixed(1)}%`;
        if (outSuggestedPrice) outSuggestedPrice.textContent = `Rs. ${Math.round(suggestedPrice).toLocaleString()}`;
        if (outContribution) outContribution.textContent = `Rs. ${Math.round(contribution).toLocaleString()}`;
        if (outContributionTarget) outContributionTarget.textContent = `Rs. ${Math.round(contributionTarget).toLocaleString()}`;

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

      costInput?.addEventListener("input", calculateFood);
      priceInput?.addEventListener("input", calculateFood);
      targetInput?.addEventListener("input", calculateFood);
      calculateFood();
    }

    // =========================================================================
    // 2. Cloud POS vs Desktop POS TCO Cost Calculator
    // =========================================================================
    const tcoCalc = document.querySelector<HTMLElement>(".pos-tco-calculator-widget");
    if (tcoCalc && tcoCalc.dataset.tcoEnhanced !== "true") {
      tcoCalc.dataset.tcoEnhanced = "true";

      const branchesInput = tcoCalc.querySelector<HTMLInputElement | HTMLSelectElement>("#tco-branches");
      const yearsInput = tcoCalc.querySelector<HTMLInputElement | HTMLSelectElement>("#tco-years");
      const cloudMonthlyInput = tcoCalc.querySelector<HTMLInputElement>("#tco-cloud-monthly");
      const desktopLicenseInput = tcoCalc.querySelector<HTMLInputElement>("#tco-desktop-license");
      const desktopSupportInput = tcoCalc.querySelector<HTMLInputElement>("#tco-desktop-support");
      const hardwareInput = tcoCalc.querySelector<HTMLInputElement>("#tco-hardware");

      const outCloudTotal = tcoCalc.querySelector<HTMLElement>("#tco-out-cloud-total");
      const outDesktopTotal = tcoCalc.querySelector<HTMLElement>("#tco-out-desktop-total");
      const outCloudMonthlyAvg = tcoCalc.querySelector<HTMLElement>("#tco-out-cloud-monthly-avg");
      const outDesktopMonthlyAvg = tcoCalc.querySelector<HTMLElement>("#tco-out-desktop-monthly-avg");
      const outDifferenceText = tcoCalc.querySelector<HTMLElement>("#tco-out-diff-text");
      const outVerdictCallout = tcoCalc.querySelector<HTMLElement>("#tco-verdict-callout");

      function calculateTco() {
        const branches = Math.max(1, parseInt(branchesInput?.value || "1", 10) || 1);
        const years = Math.max(1, parseInt(yearsInput?.value || "3", 10) || 3);
        const months = years * 12;

        const cloudMonthly = Math.max(0, parseFloat(cloudMonthlyInput?.value || "2500") || 2500);
        const desktopLicense = Math.max(0, parseFloat(desktopLicenseInput?.value || "30000") || 30000);
        const desktopSupportMonthly = Math.max(0, parseFloat(desktopSupportInput?.value || "1000") || 1000);
        const hardwarePerBranch = Math.max(0, parseFloat(hardwareInput?.value || "50000") || 50000);

        // Hardware cost (applies to both, per branch)
        const totalHardware = hardwarePerBranch * branches;

        // Cloud POS Total: Hardware + (Subscription per branch * months)
        const cloudSoftwareTotal = cloudMonthly * branches * months;
        const cloudGrandTotal = totalHardware + cloudSoftwareTotal;
        const cloudMonthlyPerStore = cloudGrandTotal / months / branches;

        // Desktop POS Total: Hardware + (License per branch) + (Maintenance per branch * months)
        const desktopSoftwareTotal = (desktopLicense * branches) + (desktopSupportMonthly * branches * months);
        const desktopGrandTotal = totalHardware + desktopSoftwareTotal;
        const desktopMonthlyPerStore = desktopGrandTotal / months / branches;

        const diff = Math.abs(cloudGrandTotal - desktopGrandTotal);

        if (outCloudTotal) outCloudTotal.textContent = `Rs. ${Math.round(cloudGrandTotal).toLocaleString()}`;
        if (outDesktopTotal) outDesktopTotal.textContent = `Rs. ${Math.round(desktopGrandTotal).toLocaleString()}`;
        if (outCloudMonthlyAvg) outCloudMonthlyAvg.textContent = `Rs. ${Math.round(cloudMonthlyPerStore).toLocaleString()}/mo per store`;
        if (outDesktopMonthlyAvg) outDesktopMonthlyAvg.textContent = `Rs. ${Math.round(desktopMonthlyPerStore).toLocaleString()}/mo per store`;

        if (outDifferenceText && outVerdictCallout) {
          if (desktopGrandTotal < cloudGrandTotal) {
            outDifferenceText.innerHTML = `On-paper difference: <strong class="text-zinc-900 font-bold">Rs. ${Math.round(diff).toLocaleString()}</strong> lower for desktop software license.`;
            outVerdictCallout.innerHTML = `
              <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <strong class="font-bold">Key Cost Reality Check:</strong> While desktop POS appears Rs. ${Math.round(diff).toLocaleString()} cheaper over ${years} years on software fees alone, it <em>excludes</em> local backup drives, Windows server licenses, multi-branch VPN hardware, and data recovery risk in the event of hard drive failure. Cloud POS includes automated offsite backups, zero server overhead, software updates, and mobile remote access.
              </div>
            `;
          } else {
            outDifferenceText.innerHTML = `Cost advantage: <strong class="text-[#167c70] font-bold">Cloud POS saves Rs. ${Math.round(diff).toLocaleString()}</strong> over ${years} years.`;
            outVerdictCallout.innerHTML = `
              <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm">
                <strong class="font-bold">Clear Financial Advantage:</strong> Cloud POS delivers a lower total cost of ownership by Rs. ${Math.round(diff).toLocaleString()}, while including automatic daily cloud backups, continuous software updates, multi-branch inventory tracking, and remote mobile reporting.
              </div>
            `;
          }
        }
      }

      branchesInput?.addEventListener("change", calculateTco);
      branchesInput?.addEventListener("input", calculateTco);
      yearsInput?.addEventListener("change", calculateTco);
      yearsInput?.addEventListener("input", calculateTco);
      cloudMonthlyInput?.addEventListener("input", calculateTco);
      desktopLicenseInput?.addEventListener("input", calculateTco);
      desktopSupportInput?.addEventListener("input", calculateTco);
      hardwareInput?.addEventListener("input", calculateTco);

      calculateTco();
    }

    // =========================================================================
    // 3. Interactive POS Recommendation Quiz Engine
    // =========================================================================
    const quizWidget = document.querySelector<HTMLElement>(".pos-decision-quiz-widget");
    if (quizWidget && quizWidget.dataset.quizEnhanced !== "true") {
      quizWidget.dataset.quizEnhanced = "true";

      const answers: Record<string, string> = {
        q1: "a", // 1 branch
        q2: "a", // Remote monitoring essential
        q3: "a", // Centralized inventory critical
        q4: "a", // Reliable internet
        q5: "a", // Predictable monthly SaaS
      };

      const optionButtons = Array.from(quizWidget.querySelectorAll<HTMLElement>(".quiz-option-btn"));
      const resultTitle = quizWidget.querySelector<HTMLElement>("#quiz-result-title");
      const resultBadge = quizWidget.querySelector<HTMLElement>("#quiz-result-badge");
      const resultDesc = quizWidget.querySelector<HTMLElement>("#quiz-result-desc");
      const scoreCloudEl = quizWidget.querySelector<HTMLElement>("#quiz-score-cloud");
      const scoreDesktopEl = quizWidget.querySelector<HTMLElement>("#quiz-score-desktop");

      function updateQuizResults() {
        let cloudScore = 0;
        let desktopScore = 0;

        // Q1: Branches
        if (answers.q1 === "a") {
          cloudScore += 1;
          desktopScore += 2;
        } else if (answers.q1 === "b") {
          cloudScore += 4;
          desktopScore += 1;
        } else if (answers.q1 === "c") {
          cloudScore += 5;
          desktopScore += 0;
        }

        // Q2: Remote monitoring
        if (answers.q2 === "a") {
          cloudScore += 5;
          desktopScore += 0;
        } else if (answers.q2 === "b") {
          cloudScore += 3;
          desktopScore += 1;
        } else if (answers.q2 === "c") {
          cloudScore += 1;
          desktopScore += 4;
        }

        // Q3: Centralized Inventory
        if (answers.q3 === "a") {
          cloudScore += 5;
          desktopScore += 1;
        } else if (answers.q3 === "b") {
          cloudScore += 2;
          desktopScore += 3;
        } else if (answers.q3 === "c") {
          cloudScore += 2;
          desktopScore += 3;
        }

        // Q4: Internet Reliability
        if (answers.q4 === "a") {
          cloudScore += 4;
          desktopScore += 1;
        } else if (answers.q4 === "b") {
          cloudScore += 4; // Hybrid / Offline mode cloud POS
          desktopScore += 3;
        } else if (answers.q4 === "c") {
          cloudScore += 0;
          desktopScore += 6;
        }

        // Q5: Pricing Model
        if (answers.q5 === "a") {
          cloudScore += 4;
          desktopScore += 1;
        } else if (answers.q5 === "b") {
          cloudScore += 1;
          desktopScore += 4;
        }

        const totalPoints = cloudScore + desktopScore;
        const cloudPct = Math.min(98, Math.max(15, Math.round((cloudScore / totalPoints) * 100)));
        const desktopPct = 100 - cloudPct;

        if (scoreCloudEl) scoreCloudEl.textContent = `${cloudPct}% Match`;
        if (scoreDesktopEl) scoreDesktopEl.textContent = `${desktopPct}% Match`;

        if (answers.q4 === "c" || desktopPct > 65) {
          if (resultTitle) resultTitle.textContent = "Traditional Desktop POS";
          if (resultBadge) {
            resultBadge.textContent = "Best for 100% Offline Single Counter";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "Because your store operates without stable internet and you don't require remote mobile monitoring or multi-branch synchronization, a traditional local desktop POS provides reliable standalone counter billing. Ensure you set up daily USB backups to protect against drive crashes.";
          }
        } else if (answers.q4 === "b" && (answers.q1 !== "a" || answers.q2 === "a")) {
          if (resultTitle) resultTitle.textContent = "Hybrid Cloud POS (HulmPOS with Offline Mode)";
          if (resultBadge) {
            resultBadge.textContent = "Recommended: Resilient Multi-Location Setup";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#167c70]/10 text-[#167c70] border border-[#167c70]/20";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "You need centralized inventory and remote mobile reporting, but your store experiences intermittent internet hiccups. A modern cloud POS like HulmPOS lets cashiers continue billing and printing receipts during brief drops, automatically uploading queued sales to the cloud upon reconnection.";
          }
        } else {
          if (resultTitle) resultTitle.textContent = "Cloud-Based POS (HulmPOS)";
          if (resultBadge) {
            resultBadge.textContent = "Strongest Recommendation: 95%+ Fit";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "Cloud POS is the clear winner for your operational workflow. You benefit from real-time smartphone reporting, centralized inventory across branches, zero local server maintenance, automated data backups, and a low predictable monthly investment starting at PKR 2,500/month.";
          }
        }
      }

      optionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const q = btn.dataset.q;
          const val = btn.dataset.val;
          if (!q || !val) return;

          answers[q] = val;

          // Toggle styling in same group
          const siblingButtons = quizWidget.querySelectorAll<HTMLElement>(`.quiz-option-btn[data-q="${q}"]`);
          siblingButtons.forEach((sib) => {
            if (sib.dataset.val === val) {
              sib.classList.add("border-[#167c70]", "bg-[#167c70]/10", "text-[#0F2A26]", "ring-2", "ring-[#167c70]/20");
              sib.classList.remove("border-[#E4E2DA]", "bg-white", "text-zinc-600");
              const checkDot = sib.querySelector(".quiz-radio-dot");
              if (checkDot) checkDot.classList.replace("border-zinc-300", "border-[#167c70]");
              const innerDot = sib.querySelector(".quiz-radio-inner");
              if (innerDot) innerDot.classList.remove("hidden");
            } else {
              sib.classList.remove("border-[#167c70]", "bg-[#167c70]/10", "text-[#0F2A26]", "ring-2", "ring-[#167c70]/20");
              sib.classList.add("border-[#E4E2DA]", "bg-white", "text-zinc-600");
              const checkDot = sib.querySelector(".quiz-radio-dot");
              if (checkDot) checkDot.classList.replace("border-[#167c70]", "border-zinc-300");
              const innerDot = sib.querySelector(".quiz-radio-inner");
              if (innerDot) innerDot.classList.add("hidden");
            }
          });

          updateQuizResults();
        });
      });

      // Initial score calculation
      updateQuizResults();
    }

    // =========================================================================
    // 4. Cash Drawer Shortage & Reconciliation Calculator
    // =========================================================================
    const cashCalc = document.querySelector<HTMLElement>(".cash-drawer-calculator-widget");
    if (cashCalc && cashCalc.dataset.cashEnhanced !== "true") {
      cashCalc.dataset.cashEnhanced = "true";

      const inOpening = cashCalc.querySelector<HTMLInputElement>("#cash-calc-opening");
      const inSales = cashCalc.querySelector<HTMLInputElement>("#cash-calc-sales");
      const inOtherIn = cashCalc.querySelector<HTMLInputElement>("#cash-calc-other-in");
      const inRefunds = cashCalc.querySelector<HTMLInputElement>("#cash-calc-refunds");
      const inExpenses = cashCalc.querySelector<HTMLInputElement>("#cash-calc-expenses");
      const inRemoved = cashCalc.querySelector<HTMLInputElement>("#cash-calc-removed");
      const inActual = cashCalc.querySelector<HTMLInputElement>("#cash-calc-actual");

      const outTotalIn = cashCalc.querySelector<HTMLElement>("#cash-calc-out-total-in");
      const outTotalOut = cashCalc.querySelector<HTMLElement>("#cash-calc-out-total-out");
      const outExpected = cashCalc.querySelector<HTMLElement>("#cash-calc-out-expected");
      const outActual = cashCalc.querySelector<HTMLElement>("#cash-calc-out-actual");
      const outDiff = cashCalc.querySelector<HTMLElement>("#cash-calc-out-diff");
      const outStatusBadge = cashCalc.querySelector<HTMLElement>("#cash-calc-status-badge");
      const outAnalysis = cashCalc.querySelector<HTMLElement>("#cash-calc-analysis");
      const outDiffContainer = cashCalc.querySelector<HTMLElement>("#cash-calc-diff-container");

      function calculateCashDrawer() {
        const opening = Math.max(0, parseFloat(inOpening?.value || "0") || 0);
        const sales = Math.max(0, parseFloat(inSales?.value || "0") || 0);
        const otherIn = Math.max(0, parseFloat(inOtherIn?.value || "0") || 0);
        const refunds = Math.max(0, parseFloat(inRefunds?.value || "0") || 0);
        const expenses = Math.max(0, parseFloat(inExpenses?.value || "0") || 0);
        const removed = Math.max(0, parseFloat(inRemoved?.value || "0") || 0);
        const actual = Math.max(0, parseFloat(inActual?.value || "0") || 0);

        const totalIn = opening + sales + otherIn;
        const totalOut = refunds + expenses + removed;
        const expected = totalIn - totalOut;
        const diff = actual - expected;

        if (outTotalIn) outTotalIn.textContent = `Rs. ${Math.round(totalIn).toLocaleString()}`;
        if (outTotalOut) outTotalOut.textContent = `Rs. ${Math.round(totalOut).toLocaleString()}`;
        if (outExpected) outExpected.textContent = `Rs. ${Math.round(expected).toLocaleString()}`;
        if (outActual) outActual.textContent = `Rs. ${Math.round(actual).toLocaleString()}`;

        if (outDiff) {
          if (diff < 0) {
            outDiff.textContent = `- Rs. ${Math.abs(Math.round(diff)).toLocaleString()}`;
          } else if (diff > 0) {
            outDiff.textContent = `+ Rs. ${Math.round(diff).toLocaleString()}`;
          } else {
            outDiff.textContent = `Rs. 0 (Balanced)`;
          }
        }

        if (outDiffContainer && outStatusBadge && outAnalysis && outDiff) {
          if (diff < 0) {
            // Shortage
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-rose-300 bg-rose-50/80 transition-all";
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-rose-700 font-mono";
            outStatusBadge.textContent = "Cash Shortage (Discrepancy)";
            outStatusBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-200 text-rose-900 border border-rose-300";
            outAnalysis.innerHTML = `
              <div class="text-sm text-rose-950 space-y-1.5">
                <p class="font-semibold text-rose-900">Your cash drawer is short by Rs. ${Math.abs(Math.round(diff)).toLocaleString()}.</p>
                <p class="text-xs text-rose-800 leading-relaxed font-normal">
                  Immediate checklist: (1) Check if an unrecorded petty cash expense or supplier payment was made. (2) Confirm if a customer paid via card/bank transfer but the cashier marked it as cash. (3) Verify change errors at checkout.
                </p>
              </div>
            `;
          } else if (diff > 0) {
            // Overage
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-blue-300 bg-blue-50/80 transition-all";
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono";
            outStatusBadge.textContent = "Cash Overage (Surplus)";
            outStatusBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-200 text-blue-900 border border-blue-300";
            outAnalysis.innerHTML = `
              <div class="text-sm text-blue-950 space-y-1.5">
                <p class="font-semibold text-blue-900">Your drawer has Rs. ${Math.round(diff).toLocaleString()} more cash than recorded sales.</p>
                <p class="text-xs text-blue-800 leading-relaxed font-normal">
                  Immediate checklist: (1) Check if a transaction was completed without ringing it up on the POS. (2) Confirm if a cashier forgot to enter a customer change amount. (3) Check if opening cash was higher than entered in Start Day.
                </p>
              </div>
            `;
          } else {
            // Exactly Balanced
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 transition-all";
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono";
            outStatusBadge.textContent = "Perfectly Balanced (100% Reconciled)";
            outStatusBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-200 text-emerald-900 border border-emerald-300";
            outAnalysis.innerHTML = `
              <div class="text-sm text-emerald-950 space-y-1.5">
                <p class="font-semibold text-emerald-900">Zero variance! Your drawer matches POS records completely.</p>
                <p class="text-xs text-emerald-800 leading-relaxed font-normal">
                  All physical cash counted matches your recorded opening cash, net sales, and recorded drawer disbursements exactly.
                </p>
              </div>
            `;
          }
        }
      }

      const allInputs = [inOpening, inSales, inOtherIn, inRefunds, inExpenses, inRemoved, inActual];
      allInputs.forEach((input) => {
        input?.addEventListener("input", calculateCashDrawer);
      });

      calculateCashDrawer();
    }

    // =========================================================================
    // 5. Interactive Cash Denomination Counter Tool
    // =========================================================================
    const denomWidget = document.querySelector<HTMLElement>(".cash-denomination-counter-widget");
    if (denomWidget && denomWidget.dataset.denomEnhanced !== "true") {
      denomWidget.dataset.denomEnhanced = "true";
      const widget = denomWidget;

      const denominations = [5000, 1000, 500, 100, 75, 50, 20, 10];
      const grandTotalEl = widget.querySelector<HTMLElement>("#denom-grand-total");
      const coinsInput = widget.querySelector<HTMLInputElement>("#denom-coins");
      const copyBtn = widget.querySelector<HTMLButtonElement>("#denom-copy-btn");
      const copyFeedback = widget.querySelector<HTMLElement>("#denom-copy-feedback");

      function updateDenominations() {
        let total = 0;
        denominations.forEach((d) => {
          const input = widget.querySelector<HTMLInputElement>(`#denom-count-${d}`);
          const subtotalEl = widget.querySelector<HTMLElement>(`#denom-sub-${d}`);
          const count = Math.max(0, parseInt(input?.value || "0", 10) || 0);
          const subtotal = count * d;
          total += subtotal;
          if (subtotalEl) {
            subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
          }
        });

        const coins = Math.max(0, parseFloat(coinsInput?.value || "0") || 0);
        total += coins;

        if (grandTotalEl) {
          grandTotalEl.textContent = `Rs. ${Math.round(total).toLocaleString()}`;
        }
        return total;
      }

      denominations.forEach((d) => {
        const input = widget.querySelector<HTMLInputElement>(`#denom-count-${d}`);
        input?.addEventListener("input", updateDenominations);
      });

      coinsInput?.addEventListener("input", updateDenominations);

      copyBtn?.addEventListener("click", () => {
        const total = updateDenominations();
        const mainActualInput = document.querySelector<HTMLInputElement>("#cash-calc-actual");
        if (mainActualInput) {
          mainActualInput.value = Math.round(total).toString();
          mainActualInput.dispatchEvent(new Event("input", { bubbles: true }));
          mainActualInput.scrollIntoView({ behavior: "smooth", block: "center" });

          if (copyFeedback) {
            copyFeedback.classList.remove("hidden");
            copyFeedback.textContent = `✓ Copied Rs. ${Math.round(total).toLocaleString()} to closing cash!`;
            setTimeout(() => {
              copyFeedback.classList.add("hidden");
            }, 3500);
          }
        }
      });

      updateDenominations();
    }
  }, []);

  return null;
}
