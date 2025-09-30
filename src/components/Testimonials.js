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
    quote: "This service was amazing and super fast!",
    name: "Sarah L.",
    title: "Edmonton",
    img: Face1,
    stars: 4,
  },
  {
    quote:
      "Great customer service. They explained everything clearly and were honest about what needed to be fixed. 10/10 experience.",
    name: "James M.",
    title: "Local Business Owner",
    img: Face2,
    stars: 5,
  },
  {
    quote:
      "They even stayed a bit late just to get my screen fixed before my trip. That level of service is rare these days.",
    name: "Bianca C.",
    title: "",
    img: Face3,
    stars: 5,
  },
  {
    quote:
      "Saved me from buying a new phone! Battery replacement was quick, affordable, and done right.",
    name: "Kevin T.",
    title: "",
    img: Face4,
    stars: 4,
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
  heading = "Our Customers",
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
                <img
                  src={t.img}
                  alt={`${t.name} portrait`}
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  width={48}
                  loading="lazy"
                />
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
