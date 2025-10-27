import React from "react";
import {
  Star,
  Shield,
  Wrench,
  PhoneCall,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About({
  phone = "+18257857009",
  displayPhone = "+18257857009",
  email = "contact@thedevicelab.ca",
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <main id="about" className="bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-6xl px-4 py-20"
        >
          <motion.div variants={item} className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              About The DeviceLab
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Fast phone & console repairs plus modern IT solutions in Edmonton.
              We keep people connected and businesses moving forward.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/17802469743`}
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:scale-[1.02] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <PhoneCall className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-sm md:grid-cols-4"
        >
          {[
            { Icon: Wrench, text: "Same-day repairs" },
            { Icon: Shield, text: "90-day warranty" },
            { Icon: MapPin, text: "Edmonton & area" },
            { Icon: Clock, text: "By appointment" },
          ].map(({ Icon, text }) => (
            <motion.div
              key={text}
              variants={item}
              className="flex items-center gap-3"
            >
              <Icon className="h-5 w-5 text-indigo-600" />
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STORY + PHOTO */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={item}
              className="text-2xl font-bold tracking-tight md:text-3xl"
            >
              Our Story
            </motion.h3>
            <motion.p variants={item} className="mt-4 text-slate-700">
              The DeviceLab began with years of hands-on device repair—screens,
              batteries, charging ports and more. As our customers grew, so did
              their tech needs. Today, we’re a one-stop hub that pairs practical
              repair expertise with modern software skills to deliver dependable
              results fast.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-slate-700">
              From cracked iPhones to Shopify stores, we’re here to help you
              stay productive, connected, and confident with your tech.
            </motion.p>
          </motion.article>
          <figure className="relative">
            <img
              src="https://images.unsplash.com/photo-1588515603068-adb330f26e92?q=80&w=870&auto=format&fit=crop"
              alt="Technician workspace with tools"
              className="h-80 w-full rounded-2xl border border-slate-200 object-cover shadow-lg"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              Edmonton, AB — bench setup
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-xl font-bold md:text-2xl">
            What Makes Us Different
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Experience that counts",
                body: "Years of repair work + modern dev skills for practical, reliable outcomes.",
              },
              {
                title: "Transparency first",
                body: "Clear diagnostics, no surprises. You approve everything before we proceed.",
              },
              {
                title: "Local & mobile",
                body: "Edmonton-based with by-appointment mobile service for your convenience.",
              },
              {
                title: "Beyond repairs",
                body: "Web development, e-commerce setup and small-business IT consulting.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold">{card.title}</div>
                <p className="mt-2 text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-indigo-600">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Ready to get started?
            </h3>
            <p className="mt-3 text-indigo-100">
              Text a photo of the issue for a quick quote, or tell us about your
              web/IT project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href={`https://wa.me/17802469743`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-900 shadow-sm transition hover:scale-[1.02] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <PhoneCall className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-3 font-medium text-white shadow-sm transition hover:scale-[1.02] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
