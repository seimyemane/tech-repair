import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaServer,
} from "react-icons/fa";

const defaultItems = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/07/31/16/18/engineer-2558705_960_720.jpg",
    caption: "Rack-mounted servers — tidy cable management",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2021/04/29/21/25/server-6217525_960_720.jpg",
    caption: "Switch stack & PoE for APs and cameras",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/02/15/10/03/server-7014602_960_720.jpg",
    caption: "Firewall setup with VLAN segmentation",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/09/27/15/52/network-cabling-installation-7483084_960_720.jpg",
    caption: "Business Wi-Fi heatmap & AP placement",
  },
  {
    image:
      "https://images.unsplash.com/photo-1726065235239-b20b88d43eea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    caption: "POS terminals provisioned & secured",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg",
    caption: "365 / Google Workspace migration",
  },
];

const IT_Gallery = ({
  heading = "IT & Networking Gallery",
  subtext = "Snapshots from recent deployments — networks, Wi-Fi, security, and business workstations.",
  items = defaultItems,
  className = "",
}) => {
  // Slider
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  const next = () => setActive((i) => (i + 1) % items.length);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: w * active, behavior: "smooth" });
  }, [active]);

  const onWheel = (e) => {
    if (Math.abs(e.deltaY) < 10 && Math.abs(e.deltaX) < 10) return;
    e.preventDefault();
    if (e.deltaY > 0 || e.deltaX > 0) next();
    else prev();
  };

  // Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const openLB = (i) => {
    setLbIndex(i);
    setIsOpen(true);
  };
  const closeLB = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowRight") setLbIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setLbIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, items.length]);

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-2 flex max-w-3xl items-center justify-center gap-2 text-slate-800">
            <FaServer className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {heading}
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-sm text-slate-600">{subtext}</p>
        </div>

        {/* Horizontal slider (scroll/trackpad to change) */}
        <div
          ref={sliderRef}
          onWheel={onWheel}
          className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        >
          <div className="flex h-full w-full">
            {items.map((it, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openLB(i)}
                className="relative h-full w-full shrink-0"
                style={{ minWidth: "100%" }}
              >
                <img
                  src={it.image}
                  alt={it.caption}
                  className="h-full w-full cursor-zoom-in object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-transparent p-3 text-left text-xs text-white">
                  {it.caption}
                </div>
              </button>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
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

        {/* Grid (click-to-open) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLB(i)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md"
            >
              <img
                src={it.image}
                alt={it.caption}
                className="h-56 w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 p-3 text-left text-xs text-white">
                {it.caption}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLB}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            onClick={closeLB}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <FaTimes />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLbIndex((i) => (i - 1 + items.length) % items.length);
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
              src={items[lbIndex].image}
              alt={items[lbIndex].caption}
              className="mx-auto max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
            />
            <div className="mt-3 text-center text-sm text-white/90">
              {items[lbIndex].caption}
            </div>
          </div>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLbIndex((i) => (i + 1) % items.length);
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

export default IT_Gallery;
