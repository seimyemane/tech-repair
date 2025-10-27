import React from "react";
import { FaTools, FaPhoneAlt } from "react-icons/fa";

const RepHeader = ({
  scrollToContact,
  scrollTohome,
  scrollToPrice,
  scrollToGallery,
}) => {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-slate-200 bg-white feixed">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 text-slate-900">
          <FaTools className="h-5 w-5 text-slate-700" />
          <h1 className="text-lg font-bold tracking-tight">
            DeviceLab <span className="text-slate-500">Repairs</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          <button
            onClick={() => scrollTohome()}
            className="hover:text-slate-900 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToPrice()}
            className="hover:text-slate-900 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToGallery()}
            className="hover:text-slate-900 transition"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToContact()}
            className="hover:text-slate-900 transition"
          >
            Contact
          </button>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            href="tel:8257857009"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-700 sm:flex"
          >
            <FaPhoneAlt className="h-4 w-4 text-green-600" />
            (825) 785-7009
          </button>
          <button
            onClick={() => scrollToContact}
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Book Repair
          </button>
        </div>
      </div>
    </header>
  );
};

export default RepHeader;
