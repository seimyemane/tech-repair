import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import beatyPic from "../images/b.png";
import accountantPic from "../images/a.png";
import contractorPic from "../images/c.png";
import repairPic from "../images/r.png";

const demoSites = [
  {
    title: "Salon Booking Site",
    industry: "Beauty & Wellness",
    image: beatyPic, // replace with real image or thumbnail
    url: "https://pravda-hair.onrender.com/",
  },
  {
    title: "Repair Shop Website",
    industry: "Phone & Tech Repairs",
    image: repairPic,
    url: "https://repair-shop-b.onrender.com/",
  },
  {
    title: "Accountant Landing Page",
    industry: "Finance & Consulting",
    image: accountantPic,
    url: "https://accountant-template.onrender.com/",
  },
  {
    title: "Construction Company",
    industry: "Trades & Contractors",
    image: contractorPic,
    url: "https://contractor-template.onrender.com/",
  },
];

const WebLiveTemplates = ({
  heading = "Live Website Templates",
  subtext = "Explore our ready-to-launch websites — fully built and customizable for your brand.",
  items = demoSites,
  className = "",
}) => {
  return (
    <section className={`w-full bg-slate-50 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((site, i) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {site.title}
                </h3>
                <p className="text-xs text-slate-500">{site.industry}</p>

                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-600 group-hover:underline">
                  <FaExternalLinkAlt className="h-3 w-3" />
                  <span>View Live</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quiet CTA */}
        <div className="mt-10 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <FaGlobe className="h-4 w-4" />
          <span>
            Want a custom version of one of these sites? Let’s build it for your
            brand.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WebLiveTemplates;
