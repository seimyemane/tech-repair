import React from "react";
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: FaNetworkWired,
    title: "Network Installation",
    desc: "Professional setup for routers, switches, and cabling — ensuring stable, high-speed connectivity throughout your business.",
  },
  {
    icon: FaServer,
    title: "POS & Device Setup",
    desc: "We configure point-of-sale systems, computers, and workstations to run efficiently and securely from day one.",
  },
  {
    icon: FaCloud,
    title: "Cloud Email & Storage",
    desc: "Setup and manage Microsoft 365, Google Workspace, or cloud file sharing — so your team stays connected anywhere.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity Basics",
    desc: "Protect sensitive data with antivirus, firewall configuration, and employee safety training for small businesses.",
  },
  {
    icon: FaLaptopCode,
    title: "Backup & Recovery",
    desc: "Automatic backups and recovery solutions for peace of mind in case of hardware failure or accidental deletion.",
  },
  {
    icon: FaTools,
    title: "Ongoing IT Support",
    desc: "Monthly plans for system maintenance, troubleshooting, and fast on-site or remote assistance.",
  },
];

const IT_Services = ({
  heading = "Our IT & Networking Services",
  subtext = "Comprehensive tech support tailored for small businesses. From setup to security, DeviceLab keeps your systems reliable and connected.",
  items = services,
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

        {/* Service Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-sm font-semibold text-slate-900">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={scrollToContact}
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Request IT Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default IT_Services;
