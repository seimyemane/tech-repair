import React, { useEffect, useRef, useState } from "react";
import { FaNetworkWired, FaBars, FaTimes } from "react-icons/fa";

const IT_Header = ({
  scrollToContact,
  scrollToServices,
  scrollToPrices,
  scrollToHome,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Helper to run action then close menu (mobile)
  const runAndClose = (fn) => {
    fn?.();
    setOpen(false);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <FaNetworkWired className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            DeviceLab <span className="text-blue-600">IT &amp; Networking</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          <button
            onClick={scrollToHome}
            className="hover:text-blue-600 transition"
          >
            Home
          </button>
          <button
            onClick={scrollToServices}
            className="hover:text-blue-600 transition"
          >
            Services
          </button>
          <button
            onClick={scrollToPrices}
            className="hover:text-blue-600 transition"
          >
            Prices
          </button>
          <button
            onClick={scrollToContact}
            className="hover:text-blue-600 transition"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={scrollToContact}
          className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Get Support
        </button>

        {/* Mobile Menu Button */}
        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden text-slate-700 hover:text-blue-600"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden transition-all duration-200 overflow-hidden border-t border-slate-200 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-2 bg-white">
          <button
            onClick={() => runAndClose(scrollToHome)}
            className="w-full text-left py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => runAndClose(scrollToServices)}
            className="w-full text-left py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Services
          </button>
          <button
            onClick={() => runAndClose(scrollToPrices)}
            className="w-full text-left py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Prices
          </button>
          <button
            onClick={() => runAndClose(scrollToContact)}
            className="w-full text-left py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Contact
          </button>

          <div className="pt-2 pb-3">
            <button
              onClick={() => runAndClose(scrollToContact)}
              className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Support
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default IT_Header;
