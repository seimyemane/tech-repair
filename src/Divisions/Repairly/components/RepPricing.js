import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaBatteryHalf,
  FaPlug,
  FaWater,
  FaCamera,
  FaWrench,
} from "react-icons/fa";

const repairs = [
  {
    icon: FaMobileAlt,
    title: "Screen Replacement",
    desc: "OEM-grade display replacement for phones and tablets.",
    price: "from $79",
  },
  {
    icon: FaBatteryHalf,
    title: "Battery Replacement",
    desc: "Restore your battery life with brand-new, high-quality cells.",
    price: "from $49",
  },
  {
    icon: FaPlug,
    title: "Charging Port Repair",
    desc: "Fix slow or dead charging ports — fast turnaround guaranteed.",
    price: "from $59",
  },
  {
    icon: FaCamera,
    title: "Camera Repair",
    desc: "Front or rear camera replacements and lens cleaning.",
    price: "from $69",
  },
  {
    icon: FaWater,
    title: "Water Damage Treatment",
    desc: "Thorough cleaning, board inspection, and corrosion removal.",
    price: "from $89",
  },
  {
    icon: FaWrench,
    title: "Diagnostics & Other Repairs",
    desc: "Not sure what's wrong? We'll inspect it and provide a quote.",
    price: "Free",
  },
];

const RepPricing = ({
  heading = "Popular Repairs & Pricing",
  subtext = "Transparent rates, no surprise fees. All repairs include diagnostics and a 90-day warranty.",
  items = repairs,
  className = "",
  scrollToContact,
}) => {
  return (
    <section className={`w-full bg-slate-50 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, price }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="h-6 w-6 text-blue-500" />
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">{desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  {price}
                </span>
                <button
                  onClick={scrollToContact}
                  className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Prices vary by model — ask for a quote for your specific device.
        </div>
      </div>
    </section>
  );
};

export default RepPricing;
