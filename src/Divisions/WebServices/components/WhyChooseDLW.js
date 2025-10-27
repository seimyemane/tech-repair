import React from "react";
import {
  FaBolt,
  FaHandshake,
  FaShieldAlt,
  FaSearch,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaLaptopCode,
    title: "Human-Maintainable, AI-Assisted Code",
    desc: "Many dev shops won’t touch AI-generated code. We design AI-assisted code that’s clean, documented, and easy for human developers to work on long-term.",
  },
  {
    icon: FaBolt,
    title: "Fast Kickoff & Delivery",
    desc: "Discovery in days, not weeks. We ship a usable first version quickly so you can start seeing results sooner.",
  },
  {
    icon: FaTools,
    title: "All-In-One Service",
    desc: "Design, build, hosting, updates, and support — handled end-to-end by one accountable team.",
  },
  {
    icon: FaSearch,
    title: "SEO-Ready from Day One",
    desc: "Performance, accessibility, and metadata best practices baked in to help customers find you.",
  },
  {
    icon: FaShieldAlt,
    title: "Reliability & Security",
    desc: "Monitored hosting, backups, and patching so your site stays online and protected.",
  },
  {
    icon: FaHandshake,
    title: "Transparent Pricing",
    desc: "Clear monthly plans (from $33/mo) with no surprise invoices — scale up only when you’re ready.",
  },
];

const WhyChooseDLW = ({
  heading = "Why Choose DeviceLab Web",
  subtext = "Real developers, AI-assisted workflows, and a business-first approach that keeps your site fast, secure, and easy to maintain.",
  items = reasons,
  className = "",
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
      </div>
    </section>
  );
};

export default WhyChooseDLW;
