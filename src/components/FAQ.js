import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * FAQ Component
 * - Expand/collapse answers with Framer Motion
 * - Accessible accordion pattern
 * - Tailwind styling consistent with other site sections
 */

const FAQS = [
  {
    q: "What devices do you repair?",
    a: "We fix phones, tablets, laptops, consoles, and more — including iPhone, Samsung, Google, Huawei, PlayStation, and Xbox.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Most common repairs (like screen or battery replacement) are done the same day, often within 1–2 hours depending on parts availability.",
  },
  {
    q: "Do you provide warranties?",
    a: "Yes — all repairs come with a 90‑day warranty covering parts and workmanship.",
  },
  {
    q: "Can you help with IT projects too?",
    a: "Absolutely. We offer web development, WiFi cabling, small‑business IT support, cloud setup, and more.",
  },
  {
    q: "How do I get a quote?",
    a: "Text us a photo of the issue at 825‑785‑7009 or use the Contact form — we’ll send you a quick, transparent estimate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative flex w-full items-center justify-center bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-expanded={openIndex === i}
              >
                {f.q}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-4 text-slate-600"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
