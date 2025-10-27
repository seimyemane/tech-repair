import React from "react";
import {
  FaBolt,
  FaCloud,
  FaLock,
  FaUserShield,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaBolt,
    title: "Fast & Reliable Support",
    desc: "We respond quickly with same-day solutions for most IT issues — minimizing downtime for your business.",
  },
  {
    icon: FaCloud,
    title: "Cloud Integration Experts",
    desc: "Certified setup and management of Google Workspace, Microsoft 365, and secure file sharing systems.",
  },
  {
    icon: FaLock,
    title: "Cybersecurity Focused",
    desc: "Every setup includes essential protections — firewalls, data encryption, and threat monitoring.",
  },
  {
    icon: FaUserShield,
    title: "Trusted by Local Businesses",
    desc: "We work with small and medium businesses that rely on DeviceLab to keep their systems running 24/7.",
  },
  {
    icon: FaCogs,
    title: "AI + Human Collaboration",
    desc: "Our technicians leverage AI tools for diagnostics and automation — something traditional IT teams can’t match.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Ongoing Support",
    desc: "Monthly maintenance and remote monitoring to ensure your business network never goes down.",
  },
];

const WhyChooseDLN = ({
  heading = "Why Choose DeviceLab Networking",
  subtext = "Modern IT solutions that blend automation, cloud power, and hands-on expertise for growing businesses.",
  items = reasons,
  cta = { label: "Get a Free IT Audit", href: "/division/it/start" },
  className = "",
  scrollToContact,
}) => {
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta?.href && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={scrollToContact}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              {cta.label}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseDLN;
