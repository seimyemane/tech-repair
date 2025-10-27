import React from "react";
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const plans = [
  {
    icon: FaNetworkWired,
    name: "Network Setup",
    price: "$199",
    desc: "Complete network installation for offices, shops, or home businesses.",
    features: [
      "Router + Wi-Fi configuration",
      "Cabling & device connection",
      "Speed optimization",
      "Basic security setup",
    ],
    link: "/division/it/start?service=network-setup",
  },
  {
    icon: FaTools,
    name: "Device & POS Setup",
    price: "$149",
    desc: "We’ll configure your POS systems, printers, and connected devices for smooth operation.",
    features: [
      "POS & printer setup",
      "Software installation",
      "Account connection",
      "Performance testing",
    ],
    link: "/division/it/start?service=device-setup",
    highlight: true,
  },
  {
    icon: FaShieldAlt,
    name: "Cybersecurity & Backup",
    price: "$249",
    desc: "Protect your business with advanced threat protection and automatic backups.",
    features: [
      "Malware & threat protection",
      "Firewall & encryption setup",
      "Cloud or local backup system",
      "Data recovery plan",
    ],
    link: "/division/it/start?service=cybersecurity",
  },
];

const IT_Prices = ({
  heading = "IT Service Pricing",
  subtext = "Affordable one-time IT services designed to get your systems running securely and efficiently.",
  items = plans,
  className = "",
  scrollToContact,
}) => {
  return (
    <section className={`w-full bg-slate-50 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(
            (
              { icon: Icon, name, price, desc, features, link, highlight },
              i
            ) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`flex flex-col justify-between rounded-2xl border ${
                  highlight
                    ? "border-blue-500 bg-white shadow-lg"
                    : "border-slate-200 bg-white shadow-sm"
                } p-6 transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      className={`h-6 w-6 ${
                        highlight ? "text-blue-600" : "text-slate-700"
                      }`}
                    />
                    <h3 className="text-base font-semibold text-slate-900">
                      {name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{desc}</p>
                  <p className="text-2xl font-bold text-slate-900 mb-2">
                    {price}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <FaCheckCircle
                          className={`h-4 w-4 ${
                            highlight ? "text-blue-500" : "text-green-500"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={scrollToContact}
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition ${
                    highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Book This Service
                </button>
              </motion.div>
            )
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Need a different service?{" "}
          <a
            href="/division/it/contact"
            className="text-blue-600 hover:underline"
          >
            Contact us
          </a>{" "}
          for a custom IT quote.
        </div>
      </div>
    </section>
  );
};

export default IT_Prices;
