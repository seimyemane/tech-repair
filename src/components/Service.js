import React from "react";
import { motion } from "framer-motion";

// Icons
import { PiPlugChargingFill } from "react-icons/pi";
import {
  FaBatteryHalf,
  FaCamera,
  FaGlobe,
  FaWifi,
  FaDatabase,
  FaCloud,
  FaLock,
  FaBoxOpen,
  FaTools,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosWater } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

// Background asset (adjust the path to where your image actually lives)
import ServicesBg from "../images/services.jpg";

/** ---------- Default data (editable via props) ---------- */
const REPAIR_SERVICES = [
  { icon: PiPlugChargingFill, label: "Charger Replacement" },
  { icon: FaBatteryHalf, label: "Battery Replacement" },
  { icon: SlScreenSmartphone, label: "Screen Replacement" },
  { icon: IoIosWater, label: "Water Damage" },
  { icon: FaCamera, label: "Cameras" },
  { icon: IoGameController, label: "Game Controllers" },
];

const IT_SERVICES = [
  { icon: FaGlobe, label: "Web Development" },
  { icon: MdComputer, label: "IT Support & Troubleshooting" },
  { icon: FaWifi, label: "Wi-Fi Setup & Cabling" },
  { icon: FaDatabase, label: "Data Recovery & Backup" },
  { icon: FaCloud, label: "Cloud Setup & Migration" },
  { icon: FaLock, label: "Cybersecurity Basics" },
];

const PARTS_SUPPLY = [
  { icon: FaBoxOpen, label: "Wholesale Parts" },
  { icon: SlScreenSmartphone, label: "Screens & Digitizers" },
  { icon: FaBatteryHalf, label: "Batteries" },
  { icon: PiPlugChargingFill, label: "Charging Ports" },
  { icon: FaBolt, label: "Cables & Adapters" },
  { icon: FaTools, label: "Tools & Adhesives" },
];

/** ---------- Motion variants ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** ---------- Reusable pieces ---------- */
const Card = ({ Icon, label }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 text-neutral-100 shadow-md backdrop-blur transition hover:scale-[1.03] hover:bg-white/10"
  >
    <Icon className="mb-4 h-14 w-14 drop-shadow-lg sm:h-16 sm:w-16" />
    <p className="text-center text-base font-medium sm:text-lg">{label}</p>
  </motion.div>
);

const SectionGrid = ({ id, title, items }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mt-10">
    <motion.h3
      id={`${id}-title`}
      variants={itemVariants}
      className="mb-4 text-center text-2xl font-semibold sm:text-3xl"
    >
      {title}
    </motion.h3>
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
      {items.map(({ icon: Icon, label }) => (
        <Card key={label} Icon={Icon} label={label} />
      ))}
    </div>
  </section>
);

/** ---------- Main component ---------- */
export default function Services({
  backgroundSrc = ServicesBg,
  heading = "Our Services",
  parts = PARTS_SUPPLY,
  repairs = REPAIR_SERVICES,
  it = IT_SERVICES,
  showParts = true, // toggle sections if you want
  showRepairs = true,
  showIT = true,
}) {
  const bg = backgroundSrc || ServicesBg;

  return (
    <section
      className="relative flex w-full min-h-[100vh] items-center justify-center overflow-hidden bg-slate-950"
      aria-label="DeviceLab services"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Collage of device repair, IT, and parts supply services"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl px-4 py-16 text-neutral-100"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {heading}
        </motion.h2>

        {showParts && (
          <SectionGrid id="parts" title="Parts Supply" items={parts} />
        )}
        {showRepairs && (
          <SectionGrid id="repairs" title="Repairs" items={repairs} />
        )}
        {showIT && <SectionGrid id="it" title="IT Services" items={it} />}

        {/* Optional: a small note or CTA row */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center justify-center gap-3 text-sm text-white/80"
        >
          <FaMobileAlt className="h-4 w-4" />
          <span>Need something specific? Get a custom quote in minutes.</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
