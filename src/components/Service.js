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

/**
 * DeviceLab Services — Minimal & Clear
 * Aligned to DeviceLab's company structure:
 *  - Website Subscriptions (sites + hosting + maintenance)
 *  - Phone & Device Repairs
 *  - Business IT & Networking
 *  - Accessories & Add‑ons (retail)
 *  - Parts Supply (wholesale)
 */

/** ---------- Default data (editable via props) ---------- */
const WEBSITE_SUBSCRIPTION = [
  { icon: FaGlobe, label: "Website Subscription ($99/mo)" },
  { icon: FaCloud, label: "Hosting & Maintenance" },
  { icon: FaDatabase, label: "Backups & Updates" },
  { icon: MdComputer, label: "Booking & Maps" },
  { icon: FaWifi, label: "SEO & Analytics" },
  { icon: FaTools, label: "Content Changes" },
];

const REPAIRS = [
  { icon: SlScreenSmartphone, label: "Screen Replacement" },
  { icon: FaBatteryHalf, label: "Battery Replacement" },
  { icon: PiPlugChargingFill, label: "Charging Port" },
  { icon: FaCamera, label: "Cameras" },
  { icon: IoIosWater, label: "Water Damage" },
  { icon: FaMobileAlt, label: "Diagnostics" },
];

const IT_NETWORK = [
  { icon: FaWifi, label: "Wi‑Fi & Networking" },
  { icon: MdComputer, label: "POS & Device Setup" },
  { icon: FaCloud, label: "Email / 365 / Google" },
  { icon: FaDatabase, label: "Backups & Recovery" },
  { icon: FaLock, label: "Cybersecurity Basics" },
  { icon: FaTools, label: "On‑site Support" },
];

const ACCESSORIES = [
  { icon: FaShoppingBag, label: "Cases & Protectors" },
  { icon: FaBolt, label: "Cables & Adapters" },
  { icon: FaBatteryHalf, label: "Power Banks & Chargers" },
  { icon: IoGameController, label: "Gaming Controllers" },
  { icon: FaMobileAlt, label: "Headphones & Earbuds" },
  { icon: FaTools, label: "Mounts & Stands" },
];

const SUPPLY_WHOLESALE = [
  { icon: SlScreenSmartphone, label: "Screens & Digitizers" },
  { icon: FaBatteryHalf, label: "Batteries" },
  { icon: PiPlugChargingFill, label: "Charging Ports" },
  { icon: FaBolt, label: "Cables (Bulk)" },
  { icon: FaTools, label: "Tools & Adhesives" },
  { icon: FaBoxOpen, label: "Bulk Accessories" },
];

/** ---------- Motion (subtle) ---------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/** ---------- Small, accessible card ---------- */
const Card = ({ Icon, label }) => (
  <motion.div
    variants={item}
    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 hover:bg-slate-50"
    role="listitem"
  >
    <Icon aria-hidden className="h-6 w-6" />
    <span className="text-sm font-medium leading-none">{label}</span>
  </motion.div>
);

const Section = ({ id, title, items, hint }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="space-y-3">
    <motion.h3
      id={`${id}-title`}
      variants={item}
      className="text-base font-semibold tracking-tight text-slate-900"
    >
      {title}
    </motion.h3>
    {hint && (
      <motion.p variants={item} className="text-xs text-slate-500">
        {hint}
      </motion.p>
    )}
    <div
      role="list"
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
    >
      {items.map(({ icon: Icon, label }) => (
        <Card key={label} Icon={Icon} label={label} />
      ))}
    </div>
  </section>
);

/** ---------- Main component (aligned to DeviceLab) ---------- */
export default function ServicesMinimal({
  heading = "DeviceLab Services",
  showWeb = true,
  showRepairs = true,
  showIT = true,
  showAccessories = true,
  showSupply = true,
  className = "",
}) {
  return (
    <section
      aria-label="DeviceLab services"
      className={`w-full bg-white ${className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16"
      >
        <motion.h2
          variants={item}
          className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {heading}
        </motion.h2>

        <div className="space-y-10">
          {showWeb && (
            <Section
              id="web"
              title="Website Subscriptions"
              hint="Website, Hosting & Maintenance — All Included. Ask about 3 months with no payment."
              items={WEBSITE_SUBSCRIPTION}
            />
          )}

          {showRepairs && (
            <Section
              id="repairs"
              title="Phone & Device Repairs"
              items={REPAIRS}
            />
          )}

          {showIT && (
            <Section
              id="it"
              title="Business IT & Networking"
              items={IT_NETWORK}
            />
          )}

          {showAccessories && (
            <Section
              id="accessories"
              title="Accessories & Add‑ons"
              items={ACCESSORIES}
            />
          )}

          {showSupply && (
            <Section
              id="supply"
              title="Parts Supply (Wholesale)"
              items={SUPPLY_WHOLESALE}
            />
          )}
        </div>

        {/* Quiet CTA */}
        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500"
        >
          <FaMobileAlt aria-hidden className="h-4 w-4" />
          <span>Need something specific? Request a custom quote.</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
