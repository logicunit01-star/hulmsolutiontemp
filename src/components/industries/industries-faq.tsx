"use client"

import React from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is a POS system?",
    answer:
      "A POS system is a combination of hardware and software that allows businesses to complete sales transactions, manage inventory, and track customer data.",
  },
  {
    question: "How does a POS system improve efficiency?",
    answer:
      "A POS system streamlines the checkout process, reduces manual errors, and speeds up transactions, allowing staff to serve customers faster.",
  },
  {
    question: "Can I integrate my POS with other systems?",
    answer:
      "Yes, many POS systems can integrate with accounting software, e-commerce platforms, and inventory management systems for seamless operations.",
  },
  {
    question: "Is customer support available for the POS system?",
    answer:
      "Yes, we offer dedicated customer support to assist you with any questions or issues you may encounter while using the POS system.",
  },
];

import { SiteFaqAccordion } from "@/components/common/site-faq";

export function IndustriesFaq() {
  return (
    <div className="max-w-3xl mx-auto">
      <SiteFaqAccordion items={faqs} defaultOpenIndex={0} />
    </div>
  );
}
