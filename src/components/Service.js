import React from "react";
import { motion } from "framer-motion";
import { PiPlugChargingFill } from "react-icons/pi";
import {
  FaBatteryHalf,
  FaCamera,
  FaGlobe,
  FaWifi,
  FaDatabase,
  FaCloud,
  FaLock,
} from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosWater } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

// Service items data
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
  { icon: FaWifi, label: "WiFi Setup & Cabling" },
  { icon: FaDatabase, label: "Data Recovery & Backup" },
  { icon: FaCloud, label: "Cloud Setup & Migration" },
  { icon: FaLock, label: "Cybersecurity Basics" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Service() {
  const REPAIRS = [
    { icon: PiPlugChargingFill, label: "Charger Replacement" },
    { icon: FaBatteryHalf, label: "Battery Replacement" },
    { icon: SlScreenSmartphone, label: "Screen Replacement" },
    { icon: IoIosWater, label: "Water Damage" },
    { icon: FaCamera, label: "Cameras" },
    { icon: IoGameController, label: "Game Controllers" },
  ];

  const IT_SERVICES = [
    { icon: require("react-icons/fa").FaGlobe, label: "Web Development" },
    {
      icon: require("react-icons/md").MdComputer,
      label: "IT Support & Troubleshooting",
    },
    { icon: require("react-icons/fa").FaWifi, label: "WiFi Setup & Cabling" },
    {
      icon: require("react-icons/fa").FaDatabase,
      label: "Data Recovery & Backup",
    },
    {
      icon: require("react-icons/fa").FaCloud,
      label: "Cloud Setup & Migration",
    },
    { icon: require("react-icons/fa").FaLock, label: "Cybersecurity Basics" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const Card = ({ Icon, label }) => (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 text-black shadow-md backdrop-blur transition hover:scale-[1.03] hover:bg-white/10"
    >
      <Icon className="mb-4 h-20 w-20 text-cyan-400 drop-shadow-lg sm:h-24 sm:w-24" />
      <p className="text-center text-base font-medium text-neutral-100 sm:text-lg">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="relative flex w-full min-h-[100vh] items-center justify-center overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/src/images/services.jpg"
          alt="Device repair services background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl px-4 text-neutral-100"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Our Services
        </motion.h2>

        {/* Repairs */}
        <motion.h3
          variants={itemVariants}
          className="mb-4 text-center text-2xl font-semibold sm:text-3xl"
        >
          Repairs
        </motion.h3>
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 mb-10">
          {REPAIRS.map(({ icon: Icon, label }) => (
            <Card key={label} Icon={Icon} label={label} />
          ))}
        </div>

        {/* IT Services */}
        <motion.h3
          variants={itemVariants}
          className="mb-4 text-center text-2xl font-semibold sm:text-3xl"
        >
          IT Services
        </motion.h3>
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
          {IT_SERVICES.map(({ icon: Icon, label }) => (
            <Card key={label} Icon={Icon} label={label} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
