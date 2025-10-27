import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired, FaCloud, FaShieldAlt, FaServer } from "react-icons/fa";

const IT_Hero = ({ scrollToContact, scrollToServices }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
        {/* Icon + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <FaNetworkWired className="h-7 w-7 text-blue-400" />
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Smarter IT & Networking Solutions
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-sm text-slate-300 sm:text-base"
        >
          Empower your business with secure networks, cloud setups, and managed
          IT support. DeviceLab keeps your systems connected, protected, and
          running smoothly.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={scrollToContact}
            className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Request IT Support
          </button>
          <button
            onClick={scrollToServices}
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            View Services
          </button>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-6 text-slate-300 sm:grid-cols-3"
        >
          <div className="flex flex-col items-center p-3">
            <FaServer className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">Network Setup</p>
            <p className="text-xs text-slate-400">
              Secure routers, cabling, and POS configurations
            </p>
          </div>
          <div className="flex flex-col items-center p-3">
            <FaCloud className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">Cloud Integration</p>
            <p className="text-xs text-slate-400">
              M365, Google Workspace, and data migration
            </p>
          </div>
          <div className="flex flex-col items-center p-3">
            <FaShieldAlt className="h-6 w-6 text-blue-400 mb-2" />
            <p className="text-sm font-semibold">Cybersecurity</p>
            <p className="text-xs text-slate-400">
              Protect your business from online threats
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-500/10 via-transparent"></div>
    </section>
  );
};

export default IT_Hero;
