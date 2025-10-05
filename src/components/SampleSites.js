import React from "react";
import A from "../images/a.png";
import B from "../images/b.png";
import C from "../images/c.png";
import R from "../images/r.png";

/**
 * SampleSites — responsive card grid of deployed templates
 * - Image and button both link to the live page (new tab)
 * - Feature highlights: 2 booking systems, maps, gallery, testimonials, contact page
 * - Tailwind CSS only
 */
const sites = [
  {
    title: "Accountant",
    image: A,
    href: "https://accountant-template.onrender.com/", // <-- replace with your live URL
    features: [
      "2 booking systems",
      "Maps",
      "Gallery",
      "Testimonials",
      "Contact page",
    ],
  },
  {
    title: "Beauty Salon",
    image: B,
    href: "https://pravda-hair.onrender.com/",
    features: [
      "2 booking systems",
      "Maps",
      "Gallery",
      "Testimonials",
      "Contact page",
    ],
  },
  {
    title: "Contractor",
    image: C,
    href: "https://contractor-template.onrender.com/",
    features: [
      "2 booking systems",
      "Maps",
      "Gallery",
      "Testimonials",
      "Contact page",
    ],
  },
  {
    title: "Phone Repairs",
    image: R,
    href: "https://repair-shop-b.onrender.com/",
    features: [
      "2 booking systems",
      "Maps",
      "Gallery",
      "Testimonials",
      "Contact page",
    ],
  },
];

export default function SampleSites() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Live Website Templates
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Each template includes <strong>two booking systems</strong>,
            integrated <strong>maps</strong>, a <strong>gallery</strong>, real{" "}
            <strong>testimonials</strong>, and a clean{" "}
            <strong>contact page</strong>.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sites.map((site) => (
            <article
              key={site.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Clickable image */}
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${site.title} in a new tab`}
                className="block"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <img
                    src={site.image}
                    alt={`${site.title} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </a>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{site.title}</h3>
                  <span className="inline-flex items-center whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    2 booking systems
                  </span>
                </div>

                {/* Feature chips */}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {site.features.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 active:translate-y-px"
                  >
                    View Live
                  </a>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Open in new tab →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
