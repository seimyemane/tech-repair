import React from "react";
import { motion } from "framer-motion";

// Assets (use imports instead of /src/... paths)
import Face1 from "../images/face1.jpg";
import Face2 from "../images/face2.jpg";
import Face3 from "../images/face3.jpg";
import Face4 from "../images/face4.jpg";
import TestimonialBg from "../images/testimonialBG.jpg";

/* ---------- Defaults (override via props) ---------- */
const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "My phone screen was fixed in under 30 minutes and it looks brand new. They also helped me back up my data and clean up my storage — excellent service!",
    name: "Sarah L.",
    title: "Student — Edmonton",
    img: Face1,
    stars: 5,
  },
  {
    quote:
      "They built our business website and connected it with our online store. Everything from product uploads to payments works perfectly. Orders come straight to my phone.",
    name: "James M.",
    title: "Owner, TechZone Mobile Repairs",
    img: Face2,
    stars: 5,
  },
  {
    quote:
      "We needed an online store that looked professional but didn’t break the bank. Their e-commerce setup and hosting are fast and reliable — sales are up 40%!",
    name: "Bianca C.",
    title: "Founder, Luxe Accessories",
    img: Face3,
    stars: 5,
  },
  {
    quote:
      "I manage multiple phone repair shops. They created a single website with booking, maps, and live chat for all our locations. It boosted walk-ins immediately.",
    name: "Kevin T.",
    title: "Regional Manager, FixPro Group",
    img: Face4,
    stars: 4,
  },
  {
    quote:
      "They designed our website and set up a repair request form that integrates directly with our CRM. It saves me hours every week.",
    name: "Ava R.",
    title: "Owner, SmartCell Repairs",
    img: Face2,
    stars: 5,
  },
  {
    quote:
      "From web design to SEO and online ads, they helped me grow my repair business. I now get consistent bookings through my site every day.",
    name: "Omar H.",
    title: "Freelance Technician — Alberta",
    img: Face1,
    stars: 5,
  },
];
/* ---------- Motion ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ---------- UI ---------- */
const StarRow = ({ count = 5 }) => (
  <div
    className="flex items-center gap-1"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "opacity-100" : "opacity-30"}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials({
  id = "testimonials",
  heading = "What Clients Say About Our IT Services",
  testimonials = DEFAULT_TESTIMONIALS,
  backgroundSrc = TestimonialBg,
}) {
  const bg = backgroundSrc || TestimonialBg;

  return (
    <section
      id={id}
      className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-slate-950"
      aria-labelledby={`${id}-title`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Abstract background with subtle tech texture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 text-neutral-100"
      >
        <motion.h2
          id={`${id}-title`}
          variants={itemVariants}
          className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={`${t.name}-${idx}`}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-neutral-100 shadow-md backdrop-blur transition hover:scale-[1.02]"
            >
              <blockquote className="text-pretty text-lg italic leading-relaxed">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-semibold">{t.name}</span>
                  {t.title ? (
                    <span className="text-sm text-neutral-300">{t.title}</span>
                  ) : null}
                </div>
                <div className="ml-auto text-yellow-400">
                  <StarRow count={t.stars} />
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
