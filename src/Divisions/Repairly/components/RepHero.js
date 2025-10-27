import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaClock, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

const RepHero = ({ scrollToContact }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
        {/* Icon + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <FaTools className="h-6 w-6 text-blue-400" />
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Fast, Reliable Device Repairs
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-sm text-slate-300 sm:text-base"
        >
          Cracked screens, dead batteries, or water damage — we fix it all.
          DeviceLab Repairs brings expert service and quality parts together to
          get your phone, tablet, or laptop back in your hands faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToContact()}
            className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Book a Repair
          </button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-4 text-slate-300 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center p-3">
            <FaClock className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">Same-Day Service</p>
            <p className="text-xs text-slate-400">
              Most repairs done in under 60 minutes
            </p>
          </div>
          <div className="flex flex-col items-center p-3">
            <FaShieldAlt className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">Premium Parts</p>
            <p className="text-xs text-slate-400">
              OEM-grade components, no cheap knockoffs
            </p>
          </div>
          <div className="flex flex-col items-center p-3">
            <FaThumbsUp className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">90-Day Warranty</p>
            <p className="text-xs text-slate-400">
              Guaranteed quality and customer satisfaction
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-500/10 via-transparent"></div>
    </section>
  );
};

export default RepHero;
