import React from "react";
import { Mail, Wrench, Phone, Globe, Layers } from "lucide-react";
import terms from "../assets/DeviceLab_Terms_and_Conditions.pdf";

/**
 * Footer — Minimal & Aligned with DeviceLab structure
 * Matches the company’s core divisions:
 *  - Website Subscriptions
 *  - Phone & Device Repairs
 *  - Business IT & Networking
 *  - Accessories (Retail)
 *  - Parts Supply (Wholesale)
 *
 * Lighter tone, same layout clarity. Option for light/dark theme background.
 */

export default function FooterMinimal({
  dark = true,
  location = "Edmonton, AB",
}) {
  const year = new Date().getFullYear();
  const bg = dark
    ? "bg-slate-900 text-neutral-300"
    : "bg-slate-50 text-slate-700";
  const border = dark ? "border-slate-700" : "border-slate-200";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const divisions = [
    { icon: Globe, name: "Website Subscriptions" },
    { icon: Wrench, name: "Phone & Device Repairs" },
    { icon: Layers, name: "Business IT & Networking" },
    { icon: Mail, name: "Accessories (Retail)" },
    { icon: Phone, name: "Parts Supply (Wholesale)" },
  ];

  return (
    <footer className={`${bg}`}>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Branding */}
          <div className="space-y-3 text-center sm:text-left">
            <h2
              className={`text-xl font-bold ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              DeviceLab Inc.
            </h2>
            <p className="text-sm opacity-70">
              Web, IT & Repair Solutions in Edmonton
            </p>

            {/* Divisions */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 md:grid-cols-5">
              {divisions.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      dark ? "text-cyan-400" : "text-slate-700"
                    }`}
                  />
                  <span className="truncate">{name}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Mail
                  className={`h-4 w-4 ${
                    dark ? "text-cyan-400" : "text-slate-700"
                  }`}
                />
                <a
                  href="mailto:contact@thedevicelab.ca"
                  className="hover:underline"
                >
                  contact@thedevicelab.ca
                </a>
              </p>
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Phone
                  className={`h-4 w-4 ${
                    dark ? "text-cyan-400" : "text-slate-700"
                  }`}
                />
                <a href="https://wa.me/17802469743" className="hover:underline">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-right">
            <h3
              className={`mb-3 text-sm font-semibold uppercase tracking-wide ${
                dark ? "text-neutral-400" : "text-slate-500"
              }`}
            >
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 flex flex-col items-center justify-between border-t ${border} pt-6 text-xs opacity-80 sm:flex-row`}
        >
          <p>© {year} The DeviceLab. All rights reserved.</p>
          <p className="mt-2 flex items-center gap-1 sm:mt-0">
            <Globe className="h-3 w-3" /> {location}
          </p>
          <a
            href={terms}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
