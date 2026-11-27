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

    // =========================================================================
    // 6. Payment Breakdown & Daily Reconciliation Calculator
    // =========================================================================
    const payReconcile = document.querySelector<HTMLElement>(".payment-reconciliation-calculator-widget");
    if (payReconcile && payReconcile.dataset.payEnhanced !== "true") {
      payReconcile.dataset.payEnhanced = "true";
      const widget = payReconcile;

      const inCash = widget.querySelector<HTMLInputElement>("#pay-calc-cash");
      const inCard = widget.querySelector<HTMLInputElement>("#pay-calc-card");
      const inBank = widget.querySelector<HTMLInputElement>("#pay-calc-bank");
      const inTotalBill = widget.querySelector<HTMLInputElement>("#pay-calc-total-bill");

      const outTotalPaid = widget.querySelector<HTMLElement>("#pay-calc-out-total-paid");
      const outTotalBill = widget.querySelector<HTMLElement>("#pay-calc-out-total-bill");
      const outDiff = widget.querySelector<HTMLElement>("#pay-calc-out-diff");
      const outDiffContainer = widget.querySelector<HTMLElement>("#pay-calc-diff-container");
      const outBadge = widget.querySelector<HTMLElement>("#pay-calc-out-badge");
      const outAnalysis = widget.querySelector<HTMLElement>("#pay-calc-out-analysis");

      const barCash = widget.querySelector<HTMLElement>("#pay-calc-bar-cash");
      const barCard = widget.querySelector<HTMLElement>("#pay-calc-bar-card");
      const barBank = widget.querySelector<HTMLElement>("#pay-calc-bar-bank");
      const txtCashPct = widget.querySelector<HTMLElement>("#pay-calc-pct-cash");
      const txtCardPct = widget.querySelector<HTMLElement>("#pay-calc-pct-card");
      const txtBankPct = widget.querySelector<HTMLElement>("#pay-calc-pct-bank");

      const presetBtn = widget.querySelector<HTMLButtonElement>("#pay-calc-preset-btn");
      const clearBtn = widget.querySelector<HTMLButtonElement>("#pay-calc-clear-btn");

      function calculatePaymentReconciliation() {
        const cash = Math.max(0, parseFloat(inCash?.value || "0") || 0);
        const card = Math.max(0, parseFloat(inCard?.value || "0") || 0);
        const bank = Math.max(0, parseFloat(inBank?.value || "0") || 0);
        const bill = Math.max(0, parseFloat(inTotalBill?.value || "0") || 0);

        const totalPaid = cash + card + bank;
        const diff = totalPaid - bill;

        if (outTotalPaid) outTotalPaid.textContent = `Rs. ${Math.round(totalPaid).toLocaleString()}`;
        if (outTotalBill) outTotalBill.textContent = `Rs. ${Math.round(bill).toLocaleString()}`;

        // Percentage calculations
        if (totalPaid > 0) {
          const pctCash = ((cash / totalPaid) * 100).toFixed(1);
          const pctCard = ((card / totalPaid) * 100).toFixed(1);
          const pctBank = ((bank / totalPaid) * 100).toFixed(1);

          if (txtCashPct) txtCashPct.textContent = `${pctCash}% (Rs. ${Math.round(cash).toLocaleString()})`;
          if (txtCardPct) txtCardPct.textContent = `${pctCard}% (Rs. ${Math.round(card).toLocaleString()})`;
          if (txtBankPct) txtBankPct.textContent = `${pctBank}% (Rs. ${Math.round(bank).toLocaleString()})`;

          if (barCash) barCash.style.width = `${pctCash}%`;
          if (barCard) barCard.style.width = `${pctCard}%`;
          if (barBank) barBank.style.width = `${pctBank}%`;
        } else {
          if (txtCashPct) txtCashPct.textContent = `0%`;
          if (txtCardPct) txtCardPct.textContent = `0%`;
          if (txtBankPct) txtBankPct.textContent = `0%`;
          if (barCash) barCash.style.width = `0%`;
          if (barCard) barCard.style.width = `0%`;
          if (barBank) barBank.style.width = `0%`;
        }

        if (outDiff && outDiffContainer && outBadge && outAnalysis) {
          if (Math.abs(diff) < 0.01) {
            // Balanced
            outDiff.textContent = "Rs. 0 (Fully Reconciled)";
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono";
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 transition-all";
            outBadge.textContent = "Payments Match Total Sales Perfectly";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-200 text-emerald-900 border border-emerald-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-emerald-900 text-sm m-0">All payment channels add up exactly to Rs. ${Math.round(bill).toLocaleString()}.</p>
              <p class="text-xs text-emerald-800 leading-relaxed font-normal mt-1 m-0">
                Next steps: (1) Verify physical drawer has Rs. ${Math.round(cash).toLocaleString()} plus opening float. (2) Match Rs. ${Math.round(card).toLocaleString()} with POS card terminal batch slips. (3) Verify Rs. ${Math.round(bank).toLocaleString()} in actual bank credits.
              </p>
            `;
          } else if (diff < 0) {
            // Shortfall
            const missing = Math.abs(diff);
            outDiff.textContent = `- Rs. ${Math.round(missing).toLocaleString()} (Uncollected / Unrecorded)`;
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-rose-700 font-mono";
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-rose-300 bg-rose-50/80 transition-all";
            outBadge.textContent = "Payment Shortfall Detected";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-200 text-rose-900 border border-rose-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-rose-900 text-sm m-0">Recorded payments are Rs. ${Math.round(missing).toLocaleString()} less than total sales.</p>
              <p class="text-xs text-rose-800 leading-relaxed font-normal mt-1 m-0">
                Action required: Check if a sale was rung up on credit (Khata), if an unrecorded discount was given, or if a cashier forgot to enter a portion of a split payment.
              </p>
            `;
          } else {
            // Excess
            outDiff.textContent = `+ Rs. ${Math.round(diff).toLocaleString()} (Surplus Payments)`;
            outDiff.className = "text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono";
            outDiffContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-blue-300 bg-blue-50/80 transition-all";
            outBadge.textContent = "Payments Exceed Recorded Sales";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-200 text-blue-900 border border-blue-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-blue-900 text-sm m-0">Tendered payments exceed total sales by Rs. ${Math.round(diff).toLocaleString()}.</p>
              <p class="text-xs text-blue-800 leading-relaxed font-normal mt-1 m-0">
                Action required: Check if a transaction was double-counted, or if extra customer change was kept, or if an unrecorded transaction occurred.
              </p>
            `;
          }
        }
      }

      [inCash, inCard, inBank, inTotalBill].forEach((el) => {
        el?.addEventListener("input", calculatePaymentReconciliation);
      });

      presetBtn?.addEventListener("click", () => {
        if (inCash) inCash.value = "12500";
        if (inCard) inCard.value = "8200";
        if (inBank) inBank.value = "6300";
        if (inTotalBill) inTotalBill.value = "27000";
        calculatePaymentReconciliation();
      });

      clearBtn?.addEventListener("click", () => {
        if (inCash) inCash.value = "0";
        if (inCard) inCard.value = "0";
        if (inBank) inBank.value = "0";
        if (inTotalBill) inTotalBill.value = "0";
        calculatePaymentReconciliation();
      });

      calculatePaymentReconciliation();
    }

    // =========================================================================
    // 7. Split Payment Tender Splitter Tool
    // =========================================================================
    const splitWidget = document.querySelector<HTMLElement>(".split-payment-calculator-widget");
    if (splitWidget && splitWidget.dataset.splitEnhanced !== "true") {
      splitWidget.dataset.splitEnhanced = "true";
      const widget = splitWidget;

      const inBill = widget.querySelector<HTMLInputElement>("#split-bill-total");
      const inCash = widget.querySelector<HTMLInputElement>("#split-tender-cash");
      const inCard = widget.querySelector<HTMLInputElement>("#split-tender-card");
      const inBank = widget.querySelector<HTMLInputElement>("#split-tender-bank");

      const outPaid = widget.querySelector<HTMLElement>("#split-out-total-paid");
      const outRemaining = widget.querySelector<HTMLElement>("#split-out-remaining");
      const outBadge = widget.querySelector<HTMLElement>("#split-out-badge");
      const outStatusText = widget.querySelector<HTMLElement>("#split-out-status-text");
      const outBox = widget.querySelector<HTMLElement>("#split-out-box");

      const preset15k = widget.querySelector<HTMLButtonElement>("#split-preset-15k");
      const preset50k = widget.querySelector<HTMLButtonElement>("#split-preset-50k");

      function updateSplitTender() {
        const bill = Math.max(0, parseFloat(inBill?.value || "0") || 0);
        const cash = Math.max(0, parseFloat(inCash?.value || "0") || 0);
        const card = Math.max(0, parseFloat(inCard?.value || "0") || 0);
        const bank = Math.max(0, parseFloat(inBank?.value || "0") || 0);

        const totalPaid = cash + card + bank;
        const diff = bill - totalPaid;

        if (outPaid) outPaid.textContent = `Rs. ${Math.round(totalPaid).toLocaleString()}`;

        if (outRemaining && outBadge && outStatusText && outBox) {
          if (bill === 0 && totalPaid === 0) {
            outRemaining.textContent = "Rs. 0";
            outBadge.textContent = "Enter Bill Amount";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-200 text-zinc-800";
            outStatusText.textContent = "Enter bill and customer payment allocations above.";
            outBox.className = "p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white transition-all";
          } else if (Math.abs(diff) < 0.01) {
            outRemaining.textContent = "Rs. 0 (Fully Paid)";
            outRemaining.className = "text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono";
            outBadge.textContent = "Split Payment Complete & Balanced";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-200 text-emerald-900 border border-emerald-300";
            outStatusText.innerHTML = `Customer has completely settled the Rs. ${Math.round(bill).toLocaleString()} bill using 3 separate payment channels. The cashier can finalize checkout and issue the receipt.`;
            outBox.className = "p-4 sm:p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 transition-all";
          } else if (diff > 0) {
            outRemaining.textContent = `Rs. ${Math.round(diff).toLocaleString()} Still Due`;
            outRemaining.className = "text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono";
            outBadge.textContent = "Partial Payment (Amount Due)";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-200 text-amber-900 border border-amber-300";
            outStatusText.innerHTML = `Customer still owes <strong>Rs. ${Math.round(diff).toLocaleString()}</strong> to complete this purchase. Collect remaining amount via cash, card, or bank transfer before completing checkout.`;
            outBox.className = "p-4 sm:p-5 rounded-2xl border-2 border-amber-300 bg-amber-50/80 transition-all";
          } else {
            const change = Math.abs(diff);
            outRemaining.textContent = `Rs. ${Math.round(change).toLocaleString()} Change Due`;
            outRemaining.className = "text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono";
            outBadge.textContent = "Overpayment / Return Cash Change";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-200 text-blue-900 border border-blue-300";
            outStatusText.innerHTML = `Customer has overpaid by <strong>Rs. ${Math.round(change).toLocaleString()}</strong>. Cashier must return this change amount from the cash drawer.`;
            outBox.className = "p-4 sm:p-5 rounded-2xl border-2 border-blue-300 bg-blue-50/80 transition-all";
          }
        }
      }

      [inBill, inCash, inCard, inBank].forEach((el) => {
        el?.addEventListener("input", updateSplitTender);
      });

      preset15k?.addEventListener("click", () => {
        if (inBill) inBill.value = "15000";
        if (inCash) inCash.value = "5000";
        if (inCard) inCard.value = "4000";
        if (inBank) inBank.value = "6000";
        updateSplitTender();
      });

      preset50k?.addEventListener("click", () => {
        if (inBill) inBill.value = "50000";
        if (inCash) inCash.value = "20000";
        if (inCard) inCard.value = "15000";
        if (inBank) inBank.value = "15000";
        updateSplitTender();
      });

      updateSplitTender();
    }

    // =========================================================================
    // 8. Stock Discrepancy & Inventory Confusion Cost Calculator
    // =========================================================================
    const stockCalc = document.querySelector<HTMLElement>(".stock-discrepancy-calculator-widget");
    if (stockCalc && stockCalc.dataset.stockEnhanced !== "true") {
      stockCalc.dataset.stockEnhanced = "true";
      const widget = stockCalc;

      const inAvgPrice = widget.querySelector<HTMLInputElement>("#stock-calc-avg-price");
      const inDailySales = widget.querySelector<HTMLInputElement>("#stock-calc-daily-sales");
      const inForgottenRate = widget.querySelector<HTMLInputElement>("#stock-calc-forgotten-rate");
      const inLostSales = widget.querySelector<HTMLInputElement>("#stock-calc-lost-sales");
      const inAuditHours = widget.querySelector<HTMLInputElement>("#stock-calc-audit-hours");
      const inHourlyRate = widget.querySelector<HTMLInputElement>("#stock-calc-hourly-rate");

      const outMonthlyDiscrepancy = widget.querySelector<HTMLElement>("#stock-calc-out-monthly-discrepancy");
      const outMonthlyLostSales = widget.querySelector<HTMLElement>("#stock-calc-out-monthly-lost-sales");
      const outMonthlyAuditCost = widget.querySelector<HTMLElement>("#stock-calc-out-monthly-audit-cost");
      const outTotalLoss = widget.querySelector<HTMLElement>("#stock-calc-out-total-loss");
      const outNetSavings = widget.querySelector<HTMLElement>("#stock-calc-out-net-savings");
      const outRoiBadge = widget.querySelector<HTMLElement>("#stock-calc-out-roi-badge");
      const outAnalysis = widget.querySelector<HTMLElement>("#stock-calc-out-analysis");

      const btnBoutique = widget.querySelector<HTMLButtonElement>("#stock-preset-boutique");
      const btnGrocery = widget.querySelector<HTMLButtonElement>("#stock-preset-grocery");
      const btnPharmacy = widget.querySelector<HTMLButtonElement>("#stock-preset-pharmacy");

      function calculateStockLoss() {
        const avgPrice = Math.max(0, parseFloat(inAvgPrice?.value || "0") || 0);
        const forgottenPerWeek = Math.max(0, parseFloat(inForgottenRate?.value || "0") || 0);
        const lostSalesPerWeek = Math.max(0, parseFloat(inLostSales?.value || "0") || 0);
        const auditHoursMonth = Math.max(0, parseFloat(inAuditHours?.value || "0") || 0);
        const hourlyRate = Math.max(0, parseFloat(inHourlyRate?.value || "0") || 0);

        // 4.33 weeks per month
        const monthlyForgottenItems = forgottenPerWeek * 4.33;
        const monthlyDiscrepancyCost = monthlyForgottenItems * avgPrice;

        const monthlyLostSalesItems = lostSalesPerWeek * 4.33;
        const monthlyLostSalesCost = monthlyLostSalesItems * avgPrice;

        const monthlyLaborCost = auditHoursMonth * hourlyRate;

        const totalMonthlyLoss = monthlyDiscrepancyCost + monthlyLostSalesCost + monthlyLaborCost;
        const hulmCost = 2500; // Rs. 2,500/month
        const netMonthlyBenefit = Math.max(0, totalMonthlyLoss - hulmCost);
        const roiMultiple = totalMonthlyLoss > 0 ? (totalMonthlyLoss / hulmCost).toFixed(1) : "0";

        if (outMonthlyDiscrepancy) outMonthlyDiscrepancy.textContent = `Rs. ${Math.round(monthlyDiscrepancyCost).toLocaleString()}`;
        if (outMonthlyLostSales) outMonthlyLostSales.textContent = `Rs. ${Math.round(monthlyLostSalesCost).toLocaleString()}`;
        if (outMonthlyAuditCost) outMonthlyAuditCost.textContent = `Rs. ${Math.round(monthlyLaborCost).toLocaleString()}`;
        if (outTotalLoss) outTotalLoss.textContent = `Rs. ${Math.round(totalMonthlyLoss).toLocaleString()}`;
        if (outNetSavings) outNetSavings.textContent = `Rs. ${Math.round(netMonthlyBenefit).toLocaleString()}/month`;

        if (outRoiBadge && outAnalysis) {
          if (totalMonthlyLoss <= 2500) {
            outRoiBadge.textContent = "Low Friction (1.0x Break-even)";
            outRoiBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-200 text-zinc-800";
            outAnalysis.innerHTML = `
              <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal m-0">
                Even at minimal stock variance, connecting checkout to inventory guarantees clean daily audit trails and eliminates hours spent in year-end manual inventory recounts.
              </p>
            `;
          } else if (totalMonthlyLoss <= 15000) {
            outRoiBadge.textContent = `High Value: ${roiMultiple}x Return on Investment`;
            outRoiBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-300";
            outAnalysis.innerHTML = `
              <p class="text-xs sm:text-sm text-blue-950 leading-relaxed font-normal m-0">
                You are currently losing approx. <strong class="text-blue-900 font-bold">Rs. ${Math.round(totalMonthlyLoss).toLocaleString()}</strong> every month to untracked stock sales and manual recounts. HulmPOS (Rs. 2,500/mo) pays for itself in just <strong>${Math.max(1, Math.round(30 / parseFloat(roiMultiple)))} days</strong>!
              </p>
            `;
          } else {
            outRoiBadge.textContent = `Critical Leakage: ${roiMultiple}x ROI with HulmPOS`;
            outRoiBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300";
            outAnalysis.innerHTML = `
              <p class="text-xs sm:text-sm text-rose-950 leading-relaxed font-normal m-0">
                Critical financial drain! Disconnected registers are costing your retail business an estimated <strong class="text-rose-900 font-bold">Rs. ${Math.round(totalMonthlyLoss).toLocaleString()} per month</strong>. Moving to HulmPOS puts Rs. ${Math.round(netMonthlyBenefit).toLocaleString()} back into your business profit every single month.
              </p>
            `;
          }
        }
      }

      [inAvgPrice, inDailySales, inForgottenRate, inLostSales, inAuditHours, inHourlyRate].forEach((el) => {
        el?.addEventListener("input", calculateStockLoss);
      });

      btnBoutique?.addEventListener("click", () => {
        if (inAvgPrice) inAvgPrice.value = "2800";
        if (inDailySales) inDailySales.value = "25";
        if (inForgottenRate) inForgottenRate.value = "4";
        if (inLostSales) inLostSales.value = "3";
        if (inAuditHours) inAuditHours.value = "10";
        if (inHourlyRate) inHourlyRate.value = "500";
        calculateStockLoss();
      });

      btnGrocery?.addEventListener("click", () => {
        if (inAvgPrice) inAvgPrice.value = "450";
        if (inDailySales) inDailySales.value = "180";
        if (inForgottenRate) inForgottenRate.value = "15";
        if (inLostSales) inLostSales.value = "8";
        if (inAuditHours) inAuditHours.value = "20";
        if (inHourlyRate) inHourlyRate.value = "400";
        calculateStockLoss();
      });

      btnPharmacy?.addEventListener("click", () => {
        if (inAvgPrice) inAvgPrice.value = "1200";
        if (inDailySales) inDailySales.value = "60";
        if (inForgottenRate) inForgottenRate.value = "6";
        if (inLostSales) inLostSales.value = "4";
        if (inAuditHours) inAuditHours.value = "14";
        if (inHourlyRate) inHourlyRate.value = "500";
        calculateStockLoss();
      });

      calculateStockLoss();
    }

    // =========================================================================
    // 9. Stock Reconciliation Balance Simulator (Expected vs Shelf Count)
    // =========================================================================
    const reconWidget = document.querySelector<HTMLElement>(".stock-reconciliation-simulator-widget");
    if (reconWidget && reconWidget.dataset.reconEnhanced !== "true") {
      reconWidget.dataset.reconEnhanced = "true";
      const widget = reconWidget;

      const inOpening = widget.querySelector<HTMLInputElement>("#recon-opening");
      const inPurchases = widget.querySelector<HTMLInputElement>("#recon-purchases");
      const inSales = widget.querySelector<HTMLInputElement>("#recon-sales");
      const inReturns = widget.querySelector<HTMLInputElement>("#recon-returns");
      const inDamage = widget.querySelector<HTMLInputElement>("#recon-damage");
      const inActual = widget.querySelector<HTMLInputElement>("#recon-actual");

      const outExpected = widget.querySelector<HTMLElement>("#recon-out-expected");
      const outActual = widget.querySelector<HTMLElement>("#recon-out-actual");
      const outVariance = widget.querySelector<HTMLElement>("#recon-out-variance");
      const outContainer = widget.querySelector<HTMLElement>("#recon-out-container");
      const outBadge = widget.querySelector<HTMLElement>("#recon-out-badge");
      const outAnalysis = widget.querySelector<HTMLElement>("#recon-out-analysis");

      const btnReset = widget.querySelector<HTMLButtonElement>("#recon-btn-reset");
      const btnExample = widget.querySelector<HTMLButtonElement>("#recon-btn-example");

      function updateRecon() {
        const opening = Math.max(0, parseInt(inOpening?.value || "0", 10) || 0);
        const purchases = Math.max(0, parseInt(inPurchases?.value || "0", 10) || 0);
        const sales = Math.max(0, parseInt(inSales?.value || "0", 10) || 0);
        const returns = Math.max(0, parseInt(inReturns?.value || "0", 10) || 0);
        const damage = Math.max(0, parseInt(inDamage?.value || "0", 10) || 0);
        const actual = Math.max(0, parseInt(inActual?.value || "0", 10) || 0);

        // Expected = Opening + Purchases - Sales + Returns - Damage
        const expected = opening + purchases - sales + returns - damage;
        const variance = actual - expected;

        if (outExpected) outExpected.textContent = `${expected} Pcs`;
        if (outActual) outActual.textContent = `${actual} Pcs`;

        if (outVariance) {
          if (variance === 0) {
            outVariance.textContent = `0 Pcs (Balanced)`;
          } else if (variance > 0) {
            outVariance.textContent = `+${variance} Pcs (Surplus)`;
          } else {
            outVariance.textContent = `${variance} Pcs (Missing / Shortage)`;
          }
        }

        if (outContainer && outBadge && outAnalysis) {
          if (variance === 0) {
            outContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 transition-all";
            if (outVariance) outVariance.className = "text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono";
            outBadge.textContent = "100% Balanced & Reconciled";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-200 text-emerald-900 border border-emerald-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-emerald-900 text-sm m-0">Zero Inventory Variance!</p>
              <p class="text-xs text-emerald-800 leading-relaxed font-normal mt-1 m-0">
                Your physical shelf count (${actual} pcs) matches expected inventory exactly. All sales, incoming supplier batches, and customer returns have been recorded accurately.
              </p>
            `;
          } else if (variance < 0) {
            const missing = Math.abs(variance);
            outContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-rose-300 bg-rose-50/80 transition-all";
            if (outVariance) outVariance.className = "text-2xl sm:text-3xl font-extrabold text-rose-700 font-mono";
            outBadge.textContent = "Inventory Shortage / Phantom Stock";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-200 text-rose-900 border border-rose-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-rose-900 text-sm m-0">${missing} units missing from shelves!</p>
              <p class="text-xs text-rose-800 leading-relaxed font-normal mt-1 m-0">
                <strong>Probable Causes:</strong> (1) Staff sold ${missing} units at counter but forgot to ring them up on POS/register. (2) Damaged items were discarded without logging write-offs. (3) Stock shrinkage or theft.
              </p>
            `;
          } else {
            outContainer.className = "p-4 sm:p-5 rounded-2xl border-2 border-blue-300 bg-blue-50/80 transition-all";
            if (outVariance) outVariance.className = "text-2xl sm:text-3xl font-extrabold text-blue-700 font-mono";
            outBadge.textContent = "Inventory Surplus / Unrecorded Inward";
            outBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-200 text-blue-900 border border-blue-300";
            outAnalysis.innerHTML = `
              <p class="font-semibold text-blue-900 text-sm m-0">${variance} extra units counted on shelf.</p>
              <p class="text-xs text-blue-800 leading-relaxed font-normal mt-1 m-0">
                <strong>Probable Causes:</strong> (1) Supplier delivered new carton but staff forgot to log the Goods Received Note (GRN). (2) Customer returned items that were placed back on shelves without a digital POS return.
              </p>
            `;
          }
        }
      }

      [inOpening, inPurchases, inSales, inReturns, inDamage, inActual].forEach((el) => {
        el?.addEventListener("input", updateRecon);
      });

      btnReset?.addEventListener("click", () => {
        if (inOpening) inOpening.value = "100";
        if (inPurchases) inPurchases.value = "0";
        if (inSales) inSales.value = "0";
        if (inReturns) inReturns.value = "0";
        if (inDamage) inDamage.value = "0";
        if (inActual) inActual.value = "100";
        updateRecon();
      });

      btnExample?.addEventListener("click", () => {
        if (inOpening) inOpening.value = "100";
        if (inPurchases) inPurchases.value = "20";
        if (inSales) inSales.value = "35";
        if (inReturns) inReturns.value = "0";
        if (inDamage) inDamage.value = "0";
        if (inActual) inActual.value = "75";
        updateRecon();
      });

      updateRecon();
    }

    // =========================================================================
    // 10. Interactive Stock Management Health Quiz
    // =========================================================================
    const stockQuiz = document.querySelector<HTMLElement>(".stock-audit-quiz-widget");
    if (stockQuiz && stockQuiz.dataset.stockQuizEnhanced !== "true") {
      stockQuiz.dataset.stockQuizEnhanced = "true";
      const widget = stockQuiz;

      const answers: Record<string, string> = {
        sq1: "a",
        sq2: "a",
        sq3: "a",
        sq4: "a",
        sq5: "a",
      };

      const optionButtons = Array.from(widget.querySelectorAll<HTMLElement>(".stock-quiz-btn"));
      const resultTitle = widget.querySelector<HTMLElement>("#stock-quiz-result-title");
      const resultBadge = widget.querySelector<HTMLElement>("#stock-quiz-result-badge");
      const resultDesc = widget.querySelector<HTMLElement>("#stock-quiz-result-desc");
      const riskScoreEl = widget.querySelector<HTMLElement>("#stock-quiz-score");

      function updateStockQuiz() {
        let riskScore = 0;

        // Q1: Sales & Stock Records
        if (answers.sq1 === "a") riskScore += 25;
        else if (answers.sq1 === "b") riskScore += 25;
        else if (answers.sq1 === "c") riskScore += 0;

        // Q2: When Discovered
        if (answers.sq2 === "a") riskScore += 20;
        else if (answers.sq2 === "b") riskScore += 15;
        else if (answers.sq2 === "c") riskScore += 0;

        // Q3: Multiple Counters / Branches
        if (answers.sq3 === "a") riskScore += 20;
        else if (answers.sq3 === "b") riskScore += 15;
        else if (answers.sq3 === "c") riskScore += 0;

        // Q4: Inward Supplier Shipments
        if (answers.sq4 === "a") riskScore += 20;
        else if (answers.sq4 === "b") riskScore += 10;
        else if (answers.sq4 === "c") riskScore += 0;

        // Q5: Returns & Damages
        if (answers.sq5 === "a") riskScore += 15;
        else if (answers.sq5 === "b") riskScore += 10;
        else if (answers.sq5 === "c") riskScore += 0;

        if (riskScoreEl) riskScoreEl.textContent = `${riskScore}% Confusion Risk`;

        if (riskScore >= 60) {
          if (resultTitle) resultTitle.textContent = "High Inventory Confusion Risk (Critical Action Required)";
          if (resultBadge) {
            resultBadge.textContent = "High Risk • Disconnected Systems";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "Your retail store is heavily reliant on manual human memory to update stock registers. This leads directly to duplicate supplier orders, embarrassing customer stockouts, and phantom inventory. Deploying HulmPOS to automate checkout stock deductions will immediately eliminate 90%+ of these errors.";
          }
        } else if (riskScore >= 30) {
          if (resultTitle) resultTitle.textContent = "Moderate Inventory Risk (Partial Blindspots)";
          if (resultBadge) {
            resultBadge.textContent = "Moderate Risk • Needs Unification";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "While some transactions are tracked, gaps around supplier inward receiving, returns, or branch transfers are creating stock creep. Moving to a cloud POS system with native multi-location inventory will protect your profit margins.";
          }
        } else {
          if (resultTitle) resultTitle.textContent = "Low Inventory Confusion Risk (Best Practice)";
          if (resultBadge) {
            resultBadge.textContent = "Optimized & Reconciled";
            resultBadge.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
          }
          if (resultDesc) {
            resultDesc.textContent =
              "Your processes are well-structured. Continuing with digital barcode scanning and automated cloud inventory management ensures your shelves and reports stay perfectly in sync.";
          }
        }
      }

      optionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const q = btn.dataset.sq;
          const val = btn.dataset.val;
          if (!q || !val) return;

          answers[q] = val;

          const siblings = widget.querySelectorAll<HTMLElement>(`.stock-quiz-btn[data-sq="${q}"]`);
          siblings.forEach((sib) => {
            if (sib.dataset.val === val) {
              sib.classList.add("border-[#167c70]", "bg-[#167c70]/10", "text-[#0F2A26]", "ring-2", "ring-[#167c70]/20");
              sib.classList.remove("border-[#E4E2DA]", "bg-white", "text-zinc-600");
              const dot = sib.querySelector(".quiz-radio-dot");
              if (dot) dot.classList.replace("border-zinc-300", "border-[#167c70]");
              const inner = sib.querySelector(".quiz-radio-inner");
              if (inner) inner.classList.remove("hidden");
            } else {
              sib.classList.remove("border-[#167c70]", "bg-[#167c70]/10", "text-[#0F2A26]", "ring-2", "ring-[#167c70]/20");
              sib.classList.add("border-[#E4E2DA]", "bg-white", "text-zinc-600");
              const dot = sib.querySelector(".quiz-radio-dot");
              if (dot) dot.classList.replace("border-[#167c70]", "border-zinc-300");
              const inner = sib.querySelector(".quiz-radio-inner");
              if (inner) inner.classList.add("hidden");
            }
          });

          updateStockQuiz();
        });
      });

      updateStockQuiz();
    }
  }, []);

  return null;
}
