import React from "react";

/**
 * FAQ — Frequently Asked Questions Section
 * -----------------------------------------
 * Clean, TailwindCSS‑styled FAQ component.
 * Ideal for general business or service websites.
 * Replace sample Q&A with relevant content.
 */

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
    <summary className="cursor-pointer list-none font-semibold text-slate-900">
      <span className="mr-2 text-slate-400">Q.</span>
      {q}
    </summary>
    <p className="mt-2 text-sm text-slate-700">
      <span className="mr-2 text-slate-400">A.</span>
      {a}
    </p>
  </details>
);

const FAQ = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600">
            Common questions about our services, pricing, and process — answered
            simply.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQItem
            q="What’s included with my website subscription?"
            a="Everything you need: hosting, SSL, maintenance, updates, and small content changes."
          />
          <FAQItem
            q="Can I cancel my plan anytime?"
            a="Yes. There are no long-term contracts. You can pause or cancel whenever you like."
          />
          <FAQItem
            q="Do I own my website and domain?"
            a="Yes, all content and domains are yours. We can manage them for you or transfer them anytime."
          />
          <FAQItem
            q="Is there a setup fee?"
            a="Usually no. For complex builds we’ll quote any extra setup costs upfront — no surprises."
          />
          <FAQItem
            q="Can I switch to a one-time build later?"
            a="Absolutely. You can upgrade or buy out your site at any time for full ownership."
          />
          <FAQItem
            q="How long does it take to launch?"
            a="Most sites go live within 1–3 weeks depending on revisions and content readiness."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
