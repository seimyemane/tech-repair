import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaCloud, FaLock, FaWifi } from "react-icons/fa";

/**
 * WhyChooseUs — Separate Reusable Component
 * ---------------------------------------------
 * Use as <WhyChooseUs /> on any page.
 * Highlights why clients should choose DeviceLab.
 */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function WhyChooseUs({
  heading = "Why Choose DeviceLab",
  subtext = "All your tech needs under one trusted brand — websites, repairs, supply, and IT.",
  items = [
    {
      icon: FaGlobe,
      title: "All-in-One Partner",
      desc: "Web, repairs, parts supply, and IT — simplify your operations with a single provider.",
    },
    {
      icon: FaCloud,
      title: "Fast Launch",
      desc: "Kickoff in days, not weeks. Clear plans and predictable monthly pricing.",
    },
    {
      icon: FaLock,
      title: "Reliable Support",
      desc: "Same-day replies and proactive maintenance to keep you running.",
    },
    {
      icon: FaWifi,
      title: "Built for Growth",
      desc: "Modern stack, SEO fundamentals, and analytics to help you scale.",
    },
  ],
  stats = [
    { value: "48h", label: "Average kickoff" },
    { value: "99.9%", label: "Hosting uptime" },
    { value: "$33/mo", label: "Web plans from" },
  ],
  cta = { label: "Get a Free Quote", href: "/contact" },
  onNavigate,
  className = "",
}) {
  const handleNav = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section
      aria-label="Why choose us"
      className={`w-full bg-white ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16"
      >
        <motion.div variants={item} className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </motion.div>

        <motion.ul
          variants={container}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.li
              key={title}
              variants={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200">
                <Icon className="h-5 w-5 text-slate-700" aria-hidden />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {title}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {!!stats?.length && (
          <motion.div
            variants={container}
            className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <div className="text-xl font-bold tracking-tight text-slate-900">
                  {s.value}
                </div>
                <div className="text-xs text-slate-600">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {cta?.href && cta?.label && (
          <motion.div variants={item} className="mt-8 flex justify-center">
            <a
              href={cta.href}
              onClick={onNavigate ? (e) => handleNav(e, cta.href) : undefined}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {cta.label}
            </a>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
