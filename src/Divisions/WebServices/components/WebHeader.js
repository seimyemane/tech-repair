import React, { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

const WebHeader = ({
  onNavigate,
  scrollToPortfolio,
  scrollToContact,
  scrollToPlans,
  scrollToHome,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handle = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const payments = () => {
    window.location.href = "/division/web/payments";
  };

  const navItems = [
    { label: "Home", href: () => scrollToHome() },
    { label: "Plans", href: () => scrollToPlans() },
    { label: "Contact", href: () => scrollToContact() },
    { label: "Payments", href: () => payments() },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaGlobe className="h-5 w-5 text-slate-800" />
          <span className="text-base font-semibold text-slate-900">
            DeviceLab Web
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((n) => (
            <button
              key={n.label}
              onClick={() => n.href()}
              className="transition hover:text-slate-900"
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-slate-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>

        {/* CTA */}
        <a
          href="/division/web/start"
          onClick={
            onNavigate ? (e) => handle(e, "/division/web/start") : undefined
          }
          className="hidden sm:inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow"
        >
          Start a Project
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white shadow-md">
          <div className="flex flex-col items-start p-4 space-y-2">
            {navItems.map((n) => (
              <button
                key={n.label}
                onClick={() => {
                  n.href();
                  setMenuOpen(false);
                }}
                className="w-full text-left text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {n.label}
              </button>
            ))}
            <a
              href="/division/web/start"
              onClick={
                onNavigate ? (e) => handle(e, "/division/web/start") : undefined
              }
              className="mt-2 inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default WebHeader;
