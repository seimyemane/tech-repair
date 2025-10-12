import React from "react";
import { motion } from "framer-motion";

/**
 * Testimonials — Minimal & Clear (DeviceLab-aligned)
 * Sections match DeviceLab structure:
 *  - Website Subscriptions
 *  - Phone & Device Repairs
 *  - Business IT & Networking
 *  - Accessories & Add-ons (Retail)
 *  - Parts Supply (Wholesale)
 *
 * Keep it lightweight: no background images, subtle motion, readable cards.
 */

/* ---------- Motion ---------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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

const Card = ({ quote, name, title, stars = 5 }) => (
  <motion.figure
    variants={item}
    className="rounded-xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm hover:bg-slate-50"
  >
    <blockquote className="text-sm leading-relaxed text-slate-700">
      “{quote}”
    </blockquote>
    <figcaption className="mt-4 flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900">{name}</span>
        {title ? <span className="text-xs text-slate-500">{title}</span> : null}
      </div>
      <div className="ml-auto text-amber-400">
        <StarRow count={stars} />
      </div>
    </figcaption>
  </motion.figure>
);

const Section = ({ id, title, items }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="space-y-4">
    <motion.h3
      id={`${id}-title`}
      variants={item}
      className="text-base font-semibold tracking-tight text-slate-900"
    >
      {title}
    </motion.h3>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((t, i) => (
        <Card key={`${t.name}-${i}`} {...t} />
      ))}
    </div>
  </section>
);

/* ---------- Defaults (DeviceLab-aligned) ---------- */
const T_WEB = [
  {
    quote:
      "They launched our site and handle updates and hosting, so we can focus on sales. Bookings doubled in 6 weeks.",
    name: "Maya S.",
    title: "Owner — Salon & Spa",
    stars: 5,
  },
  {
    quote:
      "The $99/month plan was perfect to start. Clean design, fast load times, and edits are included.",
    name: "Andre P.",
    title: "Café Manager",
    stars: 5,
  },
  {
    quote:
      "They migrated us from Wix and fixed our SEO basics. We show up on Maps now.",
    name: "Colin R.",
    title: "Contractor",
    stars: 5,
  },
];

const T_REPAIRS = [
  {
    quote:
      "Screen was replaced the same day and they transferred my data. Looks brand new.",
    name: "Sarah L.",
    title: "Student",
    stars: 5,
  },
  {
    quote:
      "Battery swap and charging port fix took under an hour. Honest pricing.",
    name: "Naveen K.",
    title: "Rideshare Driver",
    stars: 5,
  },
  {
    quote: "They recovered photos from a water-damaged phone — lifesavers!",
    name: "Lauren D.",
    title: "Photographer",
    stars: 5,
  },
];

const T_IT = [
  {
    quote:
      "They set up our POS, Wi‑Fi, and backups. Month-end is finally smooth.",
    name: "James M.",
    title: "Retail & Repair Shop",
    stars: 5,
  },
  {
    quote:
      "Microsoft 365 migration overnight, trained our team next morning. Zero downtime.",
    name: "Bianca C.",
    title: "Construction Ops",
    stars: 5,
  },
  {
    quote: "Quick response SLAs. Most tickets solved same day.",
    name: "Aiden F.",
    title: "Dental Clinic",
    stars: 5,
  },
];

const T_ACCESSORIES = [
  {
    quote:
      "Bundle pricing on cases and tempered glass for our staff — simple perks that our team loves.",
    name: "Leah M.",
    title: "Practice Manager",
    stars: 5,
  },
  {
    quote: "Picked up chargers and headsets with the repair — one stop.",
    name: "Marco R.",
    title: "Courier",
    stars: 5,
  },
];

const T_SUPPLY = [
  {
    quote:
      "Consistent screen quality and fair terms. We switched most of our parts orders to them.",
    name: "Kevin T.",
    title: "Regional Manager — Repair Chain",
    stars: 4,
  },
  {
    quote: "Bulk cables and adhesives delivered fast. Reliable vendor.",
    name: "Omar H.",
    title: "Independent Tech",
    stars: 5,
  },
];

/**
 * Main component
 */
export default function TestimonialsMinimal({
  id = "testimonials",
  heading = "What Clients Say",
  web = T_WEB,
  repairs = T_REPAIRS,
  it = T_IT,
  accessories = T_ACCESSORIES,
  supply = T_SUPPLY,
  showWeb = true,
  showRepairs = true,
  showIT = true,
  showAccessories = true,
  showSupply = true,
  className = "",
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
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
          id={`${id}-title`}
          variants={item}
          className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {heading}
        </motion.h2>

        <div className="space-y-10">
          {showWeb && (
            <Section id="web" title="Website Subscriptions" items={web} />
          )}
          {showRepairs && (
            <Section
              id="repairs"
              title="Phone & Device Repairs"
              items={repairs}
            />
          )}
          {showIT && (
            <Section id="it" title="Business IT & Networking" items={it} />
          )}
          {showAccessories && (
            <Section
              id="accessories"
              title="Accessories & Add‑ons"
              items={accessories}
            />
          )}
          {showSupply && (
            <Section
              id="supply"
              title="Parts Supply (Wholesale)"
              items={supply}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
