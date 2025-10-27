import React from "react";
import {
  FaClock,
  FaShieldAlt,
  FaTools,
  FaMicroscope,
  FaUserShield,
  FaDollarSign,
} from "react-icons/fa";

const defaultReasons = [
  {
    icon: FaClock,
    title: "Same-Day Service",
    desc: "Most screen and battery repairs done in under 60 minutes.",
  },
  {
    icon: FaShieldAlt,
    title: "OEM-Grade Parts",
    desc: "High-quality components for durability, performance, and fit.",
  },
  {
    icon: FaTools,
    title: "90-Day Warranty",
    desc: "Repairs are covered for parts and workmanship.",
  },
  {
    icon: FaMicroscope,
    title: "Board-Level Expertise",
    desc: "Micro-soldering for complex issues other shops turn away.",
  },
  {
    icon: FaUserShield,
    title: "Data Privacy First",
    desc: "Strict handling standards—your data stays yours.",
  },
  {
    icon: FaDollarSign,
    title: "Upfront Pricing",
    desc: "Clear quotes, no surprise fees, free diagnostics.",
  },
];

const WhyChooseDLR = ({
  heading = "Why Choose DeviceLab Repairs",
  subtext = "Fast turnarounds, premium parts, and technicians who care about quality and your data.",
  items = defaultReasons,
  cta = { label: "Book a Repair", href: "/division/repairs/book" },
  className = "",
  scrollToContact,
}) => {
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200">
                <Icon className="h-5 w-5 text-slate-700" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollToContact()}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            Book a Repair
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDLR;
