import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const galleryItems = [
  {
    image:
      "https://www.advancedcomputers.co.nz/wp-content/uploads/2017/03/iphone-screen-repair.jpg",
    caption: "iPhone screen replacement — before & after",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    caption: "Battery replacement in progress",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    caption: "Water-damaged device recovery setup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617299516258-eb06985065ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    caption: "DeviceLab Repairs — front counter workspace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1639776739297-f7e1f21526f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    caption: "Micro-soldering board repair under microscope",
  },
  {
    image:
      "https://images.unsplash.com/photo-1746005514011-ea00280f3b6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    caption: "Our team ready with precision repair tools",
  },
];

const RepGallery = ({
  heading = "Repair Gallery",
  subtext = "A glimpse into our repair process, equipment, and results. Every device is handled with precision and care.",
  items = galleryItems,
  className = "",
}) => {
  // Slider state
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  // Scroll the slider to the active index
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth; // one slide per viewport
    el.scrollTo({ left: slideWidth * active, behavior: "smooth" });
  }, [active]);

  // Mouse wheel -> change slides
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) < 10 && Math.abs(e.deltaX) < 10) return;
    // Prevent native horizontal scroll chaining
    e.preventDefault();
    if (e.deltaY > 0 || e.deltaX > 0) next();
    else prev();
  };

  // Lightbox keyboard + wheel navigation
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + items.length) % items.length);
    };
    const onWheelLB = (e) => {
      if (e.deltaY > 0 || e.deltaX > 0)
        setLightboxIndex((i) => (i + 1) % items.length);
      else setLightboxIndex((i) => (i - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheelLB, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheelLB);
    };
  }, [isOpen, items.length]);

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subtext}</p>
        </div>

        {/* HORIZONTAL SLIDER (scroll/trackpad to change) */}
        <div
          ref={sliderRef}
          onWheel={onWheel}
          className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        >
          <div
            className="flex h-full w-full snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative h-full w-full shrink-0 snap-center"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full cursor-zoom-in object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent p-3 text-xs text-white">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>

          {/* slider controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/70"
          >
            <FaChevronRight />
          </button>

          {/* dots */}
          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === active ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* GRID (click to open lightbox) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-60 w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 p-3 text-left text-xs text-white">
                {item.caption}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
          <FaCamera className="h-4 w-4" />
          <span>Want your repair featured here? Book with us today.</span>
        </div>
      </div>

      {/* LIGHTBOX */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <FaTimes />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + items.length) % items.length);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <FaChevronLeft />
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightboxIndex].image}
              alt={items[lightboxIndex].caption}
              className="mx-auto max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
            />
            <div className="mt-3 text-center text-sm text-white/90">
              {items[lightboxIndex].caption}
            </div>
          </div>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % items.length);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default RepGallery;
