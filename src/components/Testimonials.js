import React from "react";
import { motion } from "framer-motion";
// Testimonials assets
import Face1 from "../images/face1.jpg";
import Face2 from "../images/face2.jpg";
import Face3 from "../images/face3.jpg";
import Face4 from "../images/face4.jpg";

const TESTIMONIALS = [
  {
    text: "This service was amazing and super fast!",
    img: Face1,
    rating: 4,
    name: "Sarah L., Edmonton",
  },
  {
    text: "Great customer service. They explained everything clearly and were honest about what needed to be fixed. 10/10 experience.",
    img: Face2,
    rating: 5,
    name: "James M., Local Business Owner",
  },
  {
    text: "They even stayed a bit late just to get my screen fixed before my trip. That level of service is rare these days.",
    img: Face3,
    rating: 5,
    name: "Bianca C.",
  },
  {
    text: "Saved me from buying a new phone! Battery replacement was quick, affordable, and done right.",
    img: Face4,
    rating: 4,
    name: "Kevin T.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonial() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[100vh] overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/images/testimonialBG.jpg"
          alt="Happy customers background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl px-4 py-12 text-neutral-100"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Our Customers
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map(({ text, img, rating, name }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-neutral-200 shadow-md backdrop-blur hover:scale-[1.02] transition"
            >
              <p className="mb-4 italic">“{text}”</p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={img}
                  alt={`Customer ${name}`}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-yellow-400">{"★".repeat(rating)}</span>
                  <p className="text-sm text-neutral-300">— {name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// =============================
// Testimonials (polished)
// =============================
export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const TESTIMONIALS = [
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

  const StarRow = ({ count }) => (
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

  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/images/testimonialBG.jpg"
          alt="Abstract tech pattern background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 text-neutral-100"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-center text-4xl font-bold tracking-tight sm:mb-12 sm:text-5xl"
        >
          Our Customers
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={idx}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-neutral-100 backdrop-blur"
            >
              <blockquote className="text-pretty text-lg italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
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
                  <span className="text-sm text-neutral-300">{t.title}</span>
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
