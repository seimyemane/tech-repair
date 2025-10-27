import React from "react";
import { motion } from "framer-motion";

// Icons
import { PiPlugChargingFill } from "react-icons/pi";
import {
  FaBatteryHalf,
  FaCamera,
  FaWifi,
  FaDatabase,
  FaCloud,
  FaLock,
  FaBoxOpen,
  FaTools,
  FaBolt,
  FaMobileAlt,
  FaShoppingBag,
  FaGlobe,
} from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosWater } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { div } from "framer-motion/client";

/**
 * DeviceLab Divisions — Service Selector
 * - Bigger cards + real "Select Service" button.
 */

const divisions = [
  {
    id: "web",
    title: "Web Services",
    href: "/division/web",
    icon: FaGlobe,
    tagline: "Professional websites built for your business",
    points: [
      "Custom design & hosting",
      "SEO optimization",
      "Online booking & forms",
      "$33/mo subscription",
    ],
  },
  {
    id: "repairs",
    title: "Device Repairs",
    href: "/division/repairs",
    icon: SlScreenSmartphone,
    tagline: "Fast, reliable phone & laptop repair",
    points: [
      "Screen & battery replacement",
      "Charging ports & cameras",
      "Water damage recovery",
      "Free diagnostics",
    ],
  },
  {
    id: "it",
    title: "IT & Networking",
    href: "/division/it",
    icon: MdComputer,
    tagline: "Set up, secure & maintain your business tech",
    points: [
      "POS & device setup",
      "Wi-Fi & cabling",
      "M365/Google email",
      "Backup & cybersecurity",
    ],
  },
  // {
  //   id: "accessories",
  //   title: "Accessories Store",
  //   href: "/division/accessories",
  //   icon: FaShoppingBag,
  //   tagline: "Shop quality accessories & gadgets",
  //   points: [
  //     "Phone cases & protectors",
  //     "Chargers & cables",
  //     "Headphones",
  //     "Gaming add-ons",
  //   ],
  // },
  // {
  //   id: "supply",
  //   title: "Parts Supply",
  //   href: "/division/supply",
  //   icon: FaBoxOpen,
  //   tagline: "Wholesale parts for technicians & shops",
  //   points: [
  //     "LCDs, batteries & tools",
  //     "Bulk cables & adhesives",
  //     "OEM & aftermarket parts",
  //     "Fast nationwide delivery",
  //   ],
  // },
];

/** ---------- Motion ---------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

/** ---------- Card (Selectable Service) ---------- */
function ServiceCard({ title, Icon, tagline, points, href, onNavigate }) {
  const go = (e) => {
    if (onNavigate) {
      e?.preventDefault?.();
      onNavigate(href);
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      variants={item}
      role="group"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go(e);
      }}
      className=" relative flex cursor-pointer flex-col justify-between rounded-2xl border  w-full lg:w-[60%] md:w-[60%] sm:w-full border-slate-200   bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 md:p-7 "
      aria-label={`${title} — select to view more`}
    >
      <div className="mb-2 flex items-center gap-3">
        <Icon className="h-7 w-7 text-slate-700" aria-hidden />
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>

      <p className="mb-3 text-sm text-slate-600">{tagline}</p>

      <ul className="mb-4 grid list-disc pl-5 text-xs leading-relaxed text-slate-600">
        {points.map((p) => (
          <li key={p} className="marker:text-slate-400">
            {p}
          </li>
        ))}
      </ul>

      {/* Primary action button */}
      <div className="mt-auto">
        <a
          href={href}
          onClick={
            onNavigate
              ? (e) => {
                  e.preventDefault();
                  onNavigate(href);
                }
              : undefined
          }
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition group-hover:-translate-y-0.5 group-hover:shadow"
        >
          Select Service
        </a>
      </div>

      <span className="absolute inset-0 rounded-2xl" aria-hidden />
    </motion.div>
  );
}

/** ---------- Main component ---------- */
export default function DeviceLabServiceSelector({
  heading = "Select the Service You Need",
  intro = "Choose the service that best fits what you're looking for. Each division specializes in a different area of DeviceLab.",
  items = divisions,
  onNavigate,
  className = "",
}) {
  return (
    <section
      aria-label="DeviceLab service selector"
      className={`w-full bg-white ${className} `}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 flex justify-center items-center flex-col"
      >
        <motion.h2
          variants={item}
          className=" mb-2 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {heading}
        </motion.h2>
        <motion.p
          variants={item}
          className="mb-10 text-center text-sm text-slate-600 max-w-2xl mx-auto"
        >
          {intro}
        </motion.p>

        <motion.div
          variants={container}
          className="w-full flex flex-col justify-around items-center sm:flex-col  md:flex-col   lg:flex-row gap-6  lg:w-full"
        >
          {items.map((d) => (
            <ServiceCard
              key={d.id}
              title={d.title}
              Icon={d.icon}
              tagline={d.tagline}
              points={d.points}
              href={d.href}
              onNavigate={onNavigate}
            />
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500"
        >
          <FaMobileAlt aria-hidden className="h-4 w-4" />
          <span>
            Need help choosing? Contact us — we’ll match you with the right
            service.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
