import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/** Util: slugify a question into a stable id */
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Default content (override via props) */
const DEFAULT_FAQS = (
  phoneDisplay = "825-785-7009",
  email = "seimyemane8@gmail.com"
) => [
  {
    q: "What devices do you repair?",
    a: "We fix phones, tablets, laptops, and consoles — including iPhone, Samsung, Google, Huawei, PlayStation, and Xbox.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Most common repairs (screen or battery) are same-day, often within 1–2 hours depending on parts availability.",
  },
  {
    q: "Do you provide warranties?",
    a: "Yes — all repairs come with a 90-day warranty covering parts and workmanship.",
  },
  {
    q: "Can you help with IT projects too?",
    a: "Absolutely. We offer web development, Wi-Fi cabling, small-business IT support, cloud setup, and more.",
  },
  {
    q: "How do I get a quote?",
    a: `Text us a photo of the issue at ${phoneDisplay} or email ${email} — we’ll send a quick, transparent estimate.`,
  },
];

export default function FAQ({
  id = "faq",
  phoneE164 = "+17802469743", // tel: link format
  phoneDisplay = "780-246-9743",
  email = "thedevicelab8@gmail.com",
  faqs, // optional override: [{ q, a }]
  heading = "Frequently Asked Questions",
}) {
  const data = useMemo(
    () => faqs || DEFAULT_FAQS(phoneDisplay, email),
    [faqs, phoneDisplay, email]
  );
  const [openIndex, setOpenIndex] = useState(null);

  // Expand item if URL hash matches a question slug
  useEffect(() => {
    const h = window.location.hash?.replace("#", "");
    if (!h) return;
    const idx = data.findIndex((f) => slug(f.q) === h);
    if (idx >= 0) setOpenIndex(idx);
  }, [data]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  // Build JSON-LD for FAQ rich results
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    [data]
  );

  return (
    <section
      id={id}
      className="relative flex w-full items-center justify-center bg-slate-50 py-16 text-slate-900"
      aria-labelledby={`${id}-title`}
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-4xl px-4">
        <h2
          id={`${id}-title`}
          className="mb-8 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl"
        >
          {heading}
        </h2>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {data.map((f, i) => {
            const isOpen = openIndex === i;
            const panelId = `${id}-panel-${slug(f.q)}`;
            const buttonId = `${id}-button-${slug(f.q)}`;

            return (
              <div key={f.q}>
                <button
                  id={buttonId}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {/* Linkable question (deep link) */}
                  <a
                    href={`#${slug(f.q)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mr-3 underline-offset-4 hover:underline"
                  >
                    {f.q}
                  </a>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-4 text-slate-600"
                    >
                      {/* Enhance the “quote” FAQ with live links if present */}
                      <AnswerWithSmartLinks
                        text={f.a}
                        phoneE164={phoneE164}
                        phoneDisplay={phoneDisplay}
                        email={email}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Optional: quick contact row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <a
            className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100"
            href={`tel:${phoneE164}`}
          >
            Call/Text: {phoneDisplay}
          </a>
          <a
            className="rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-100"
            href={`mailto:${email}`}
          >
            Email: {email}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Renders tel: and mailto: when found, keeps other text intact */
function AnswerWithSmartLinks({ text, phoneE164, phoneDisplay, email }) {
  // Light pass: replace the first phone/email mention with links
  const withPhone = text.replace(
    /(?:\+?1[-.\s]?)?\(?825\)?[-.\s]?785[-.\s]?7009|825[^\d]?785[^\d]?7009/,
    `<a href="tel:${phoneE164}" class="text-indigo-600 hover:underline">${phoneDisplay}</a>`
  );
  const withEmail = withPhone.replace(
    /[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/,
    `<a href="mailto:${email}" class="text-indigo-600 hover:underline">${email}</a>`
  );
  return <span dangerouslySetInnerHTML={{ __html: withEmail }} />;
}
