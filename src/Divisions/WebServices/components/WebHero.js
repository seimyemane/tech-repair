import React from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

const WebHero = (
  {
    title = "Empower Your Business with a Modern Website",
    subtitle = "We design, build, and maintain websites that attract customers and grow your brand — all for an affordable monthly plan.",
    primaryCTA = { label: "Get Started", href: "/division/web/start" },
    onNavigate,
  },
  scrollToPlans
) => {
  const handleNav = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:py-28">
        {/* Logo / Icon */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center justify-center gap-2 text-slate-800"
        >
          <FaGlobe className="h-6 w-6 text-slate-800" />
          <span className="text-sm font-semibold tracking-wide uppercase">
            DeviceLab Web Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
        >
          {title}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {primaryCTA?.href && (
            <a
              href={primaryCTA.href}
              onClick={
                onNavigate ? (e) => handleNav(e, primaryCTA.href) : undefined
              }
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {primaryCTA.label}
            </a>
          )}
        </motion.div>
      </div>

      {/* Soft gradient accent at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-100 to-transparent" />
    </section>
  );
};

export default WebHero;
