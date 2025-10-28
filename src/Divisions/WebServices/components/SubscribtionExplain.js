import React from "react";

/**
 * SubscribtionExplain — Sales Section (Subscription vs One‑Time)
 * ----------------------------------------------------------------
 * Drop‑in section for your sales page. TailwindCSS.
 * - Highlights why a website subscription makes sense
 * - Still offers a clear One‑Time Build option for clients who prefer it
 * - Includes value bullets, comparison, FAQs, and CTAs
 *
 * Props (all optional):
 * - onBook: () => void — handle "Book a Call" CTA
 * - onContact: () => void — handle "Contact Sales" CTA
 * - price: { subscriptionFrom?: string; oneTimeFrom?: string; }
 */

const Check = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={"h-5 w-5 flex-none " + (props.className || "")}
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Bolt = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={"h-5 w-5 flex-none " + (props.className || "")}
  >
    <path
      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Star = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={"h-5 w-5 flex-none " + (props.className || "")}
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-slate-700">
    <Check className="mt-1 text-emerald-600" />
    <span>{children}</span>
  </li>
);

const FeatureCard = ({
  title,
  subtitle,
  price,
  period,
  bullets,
  cta,
  highlighted,
}) => (
  <div
    className={
      "relative rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur-sm " +
      (highlighted
        ? "border-emerald-500 shadow-emerald-100 ring-1 ring-emerald-200"
        : "border-slate-200")
    }
  >
    {highlighted && (
      <div className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
        Most Popular
      </div>
    )}
    <div className="mb-3 flex items-center gap-2">
      {highlighted ? (
        <Star className="text-amber-500" />
      ) : (
        <Bolt className="text-slate-400" />
      )}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mb-5 text-sm text-slate-600">{subtitle}</p>
    <div className="mb-5">
      <div className="text-3xl font-bold tracking-tight text-slate-900">
        {price}
        <span className="text-base font-medium text-slate-500">{period}</span>
      </div>
    </div>
    <ul className="mb-6 space-y-3">
      {bullets.map((b, i) => (
        <Bullet key={i}>{b}</Bullet>
      ))}
    </ul>
    <a
      href={cta?.href || "#"}
      onClick={cta?.onClick}
      className={
        "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition " +
        (highlighted
          ? "bg-emerald-600 text-white hover:bg-emerald-700"
          : "bg-slate-900 text-white hover:bg-black")
      }
    >
      {cta?.label || "Choose Plan"}
    </a>
  </div>
);

const ValueRow = ({ title, desc }) => (
  <div className="group rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:shadow-md">
    <div className="flex items-start gap-3">
      <Check className="mt-0.5 text-emerald-600" />
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ q, a }) => (
  <details className="group rounded-xl border border-slate-200 bg-white/60 p-4 shadow-sm">
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

const SubscribtionExplain = ({
  onBook,
  onContact,
  price = { subscriptionFrom: "$45/mo", oneTimeFrom: "$899" },
  scrollToContact,
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Subscription Websites that Actually Grow Your Business
          </h2>
          <p className="mt-4 text-slate-600">
            Skip the big upfront bill. Get a conversion‑focused site, continuous
            updates, and real support — or choose a one‑time build if you prefer
            to own it outright.
          </p>
        </div>

        {/* Value Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ValueRow
            title="No big upfront cost"
            desc="Launch fast with predictable monthly pricing instead of a $2–5k invoice."
          />
          <ValueRow
            title="Continuous improvements"
            desc="Content edits, promos, new sections, and optimizations are included."
          />
          <ValueRow
            title="Built‑in marketing"
            desc="SEO setup, analytics, Google Business integration, and monthly snapshots."
          />
          <ValueRow
            title="Local SEO advantage"
            desc="Speed, mobile‑first, and GBP best practices that help you rank and get calls."
          />
          <ValueRow
            title="Revenue tools"
            desc="Booking, payments, chat, and review automations available as add‑ons."
          />
          <ValueRow
            title="Human support"
            desc="Text or email us changes — consider us your on‑call web team."
          />
        </div>

        {/* Plan Comparison */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            title="Subscription Website"
            subtitle="Best for most small businesses who want ongoing updates and growth."
            price={`${price.subscriptionFrom}`}
            period=" • cancel anytime"
            highlighted
            bullets={[
              "Design, hosting, SSL, maintenance included",
              "Unlimited small edits (content & images)",
              "Performance & SEO upkeep",
              "Monthly performance snapshot",
              "Priority support",
            ]}
            cta={{
              label: "Start Subscription",
              onClick: onBook,
              href: "/division/web/start",
            }}
          />

          <FeatureCard
            title="One‑Time Build"
            subtitle="Pay once, no monthly commitment — we hand over a polished, fast site."
            price={`${price.oneTimeFrom}`}
            period=" • pay once"
            bullets={[
              "Custom design + setup",
              "Launch checklist (SEO basics, analytics, security)",
              "30 days of post‑launch fixes",
              "Optional care plan available later",
            ]}
            cta={{
              label: "Get One‑Time Quote",
              onClick: scrollToContact,
              href: "/division/web/start?plan=one-time",
            }}
          />
        </div>

        {/* Social Proof */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white/70 p-6 text-slate-700 shadow-sm">
          <p className="text-sm">
            “They handle updates and send a monthly snapshot. I finally know
            what’s working — and I didn’t have to pay thousands upfront.”
          </p>
          <div className="mt-3 text-sm font-semibold text-slate-900">
            — Local Café Owner
          </div>
        </div>

        {/* FAQ */}
        {/* <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQItem
            q="Can I switch from subscription to one‑time later?"
            a="Yes. You can convert anytime — we’ll calculate a fair buyout or rebuild as a one‑time package."
          />
          <FAQItem
            q="What counts as a ‘small edit’?"
            a="Text, images, banners, hours, promos, and simple section tweaks. New pages/complex features may be quoted."
          />
          <FAQItem
            q="Do I own my domain and content?"
            a="Always. Your domain and content are yours. We can manage them for you or hand off anytime."
          />
          <FAQItem
            q="Is hosting included?"
            a="Included on subscription. For one‑time builds, we can set up your hosting or deploy to yours."
          />
        </div> */}

        {/* CTA Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Not sure which plan fits?
            </h3>
            <p className="text-sm text-slate-300">
              Book a quick call — we’ll recommend the best option for your goals
              and budget.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Book a Call
            </button>
            <a
              href="mailto:contact@thedevicelab.ca"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribtionExplain;
