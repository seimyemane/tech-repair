import React from "react";
import { FaGlobe, FaUser, FaShoppingCart } from "react-icons/fa";
import { href } from "react-router-dom";

/**
 * WebHeader — Simple Header Bar for Web Services Site
 * -------------------------------------------------
 * Contains logo/title, navigation links, and utility icons.
 * No hero section — just a clean top header.
 */

const WebHeader = ({
  onNavigate,
  scrollToPortfolio,
  scrollToContact,
  scrollToPlans,
  scrollToHome,
}) => {
  const handle = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const navItems = [
    { label: "Home", href: () => scrollToHome() },
    { label: "Plans", href: () => scrollToPlans() },
    { label: "Portfolio", href: () => scrollToPortfolio() },
    { label: "Contact", href: () => scrollToContact() },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <FaGlobe className="h-5 w-5 text-slate-800" />
          <span className="text-base font-semibold text-slate-900">
            DeviceLab Web
          </span>
        </div>

        {/* Middle: Nav Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
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

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-slate-700">
          {/* <button
            className="rounded-lg p-2 hover:bg-slate-100"
            aria-label="Account"
            onClick={(e) => handle(e, "/account")}
          >
            <FaUser className="h-4 w-4" />
          </button>
          <button
            className="rounded-lg p-2 hover:bg-slate-100"
            aria-label="Cart"
            onClick={(e) => handle(e, "/cart")}
          >
            <FaShoppingCart className="h-4 w-4" />
          </button> */}
          <a
            href="/division/web/start"
            onClick={
              onNavigate ? (e) => handle(e, "/division/web/start") : undefined
            }
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow sm:inline-flex"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
};

export default WebHeader;
