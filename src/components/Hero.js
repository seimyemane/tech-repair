import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Assets
import HeroPng from "../images/hero3.jpg"; // fallback / default background
import AppleLogo from "../assets/apple.svg";
import GoogleLogo from "../assets/google.svg";
import SamsungLogo from "../assets/samsung.svg";
import OneplusLogo from "../assets/oneplus.svg";
import LgLogo from "../assets/lg.svg";
import HuaweiLogo from "../assets/huawei.svg";
import SonyLogo from "../assets/sony.svg";

const LOGOS = [
  { src: AppleLogo, alt: "Apple" },
  { src: SamsungLogo, alt: "Samsung" },
  { src: GoogleLogo, alt: "Google" },
  { src: LgLogo, alt: "LG" },
  { src: HuaweiLogo, alt: "Huawei" },
  { src: SonyLogo, alt: "Sony" },
  { src: OneplusLogo, alt: "OnePlus" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero({
  // Backwards-compat: accept both spellings + a modern prop
  onGetQouteClick,
  onGetQuoteClick,
  onPrimaryClick, // preferred
  onSecondaryClick, // preferred
  headline = "DeviceLab — Tech Solutions for Supply, Repairs & IT",
  sublineA = "Wholesale phone parts • iPhone & Samsung repairs • Websites & IT support",
  sublineB = "Serving Alberta businesses with faster delivery and one-stop service.",
  backgroundSrc,
  primaryCtaLabel = "Get a Free Quote",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "#services",
  serviceLinks = [
    { label: "Parts Supply", href: "#parts" },
    { label: "Phone Repairs", href: "#repairs" },
    { label: "Business Websites", href: "#web" },
    { label: "IT Support", href: "#it" },
    { label: "Repairly", href: "#repairly" },
  ],
}) {
  const bg = backgroundSrc || HeroPng;

  // unify old/new handler names
  const handlePrimary =
    onPrimaryClick || onGetQuoteClick || onGetQouteClick || (() => {});
  const handleSecondary =
    onSecondaryClick ||
    (secondaryCtaHref ? undefined : () => {}) || // if href provided, render as link
    (() => {});

  return (
    <section className="relative flex w-full min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={bg}
          alt="Technician repairing devices and providing IT services"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center text-neutral-100"
      >
        <motion.h1
          variants={itemVariants}
          className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-3xl text-pretty text-lg/7 sm:text-xl/8 text-neutral-200"
        >
          {sublineA}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-1 max-w-3xl text-pretty text-lg/7 sm:text-xl/8 text-neutral-200"
        >
          {sublineB}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={handlePrimary}
            className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-300/60 bg-slate-900/70 px-6 py-3 text-lg font-medium backdrop-blur transition hover:scale-[1.03] hover:border-cyan-300 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {primaryCtaLabel}
            <ArrowRight
              className="transition group-hover:translate-x-0.5"
              size={20}
              aria-hidden="true"
            />
          </button>
        </motion.div>

        {/* Service Quick-Links (highlights what you do) */}
        <motion.nav
          variants={itemVariants}
          aria-label="DeviceLab services"
          className="mt-8 max-w-4xl"
        >
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {serviceLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Brand Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full"
          aria-label="Brands we service"
        >
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            {LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-10 shrink-0 rounded-md border border-white/10 p-2 shadow-sm sm:h-12 sm:w-12"
                loading="lazy"
                height={48}
                width={48}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
