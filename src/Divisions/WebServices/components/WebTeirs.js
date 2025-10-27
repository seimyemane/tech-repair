import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaCheck } from "react-icons/fa";

const WebTeirs = ({
  title = "Simple Plans. Powerful Websites.",
  subtitle = "Choose a plan that fits your business. Every package includes 30 days trial, hosting, updates, and ongoing support from DeviceLab.",
  onNavigate,
}) => {
  const handleNav = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const tiers = [
    {
      name: "Starter",
      price: 33,
      desc: "Perfect for individuals or startups who need a clean and functional site.",
      features: [
        "1–3 pages",
        "Basic SEO",
        "Hosting & maintenance",
        "Email support",
      ],
      href: "/division/web/start?plan=starter",
    },
    {
      name: "Business",
      price: 45,
      desc: "Best for growing businesses looking for a more customized and scalable website.",
      features: [
        "Up to 6 pages",
        "SEO + Analytics",
        "Maps integration",
        "Google Business Profile setup",
        "Booking & contact forms",
        "Priority support",
      ],
      href: "/division/web/start?plan=business",
    },
    {
      name: "Pro",
      price: 99,
      desc: "Advanced websites built for companies that need performance and reliability.",
      features: [
        "Unlimited pages",
        "Custom Features",
        "Maps integration",
        "Full SEO suite",
        "Testimonials & Gallery",
      ],
      href: "/division/web/start?plan=pro",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 text-slate-700">
            <FaGlobe className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              DeviceLab Web Services
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              className={`flex flex-col justify-between rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                idx === 2 ? "border-slate-900" : "border-slate-200"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{tier.desc}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-bold text-slate-900">
                    ${tier.price}
                  </span>
                  <span className="text-xs text-slate-600">/month</span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <FaCheck className="mt-1 h-3 w-3 text-green-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href={tier.href}
                  onClick={
                    onNavigate ? (e) => handleNav(e, tier.href) : undefined
                  }
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition ${
                    idx === 2
                      ? "bg-slate-900 text-white hover:-translate-y-0.5 hover:shadow-md"
                      : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:shadow"
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebTeirs;
