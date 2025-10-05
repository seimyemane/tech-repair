import React from "react";
import { Mail, Wrench, Truck, Phone, Globe } from "lucide-react";
import terms from "../assets/DeviceLab_Terms_and_Conditions.pdf";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Branding + Info */}
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl font-bold text-white">The DeviceLab</h2>
            <p className="text-sm text-neutral-400">
              Fast repairs & IT solutions in Edmonton
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Wrench className="h-4 w-4 text-cyan-400" /> Need a fix?{" "}
                <span className="font-semibold">Book a repair now!</span>
              </p>
              {/* <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Truck className="h-4 w-4 text-cyan-400" /> Free Pickups &
                Delivery Mon–Sun: 5PM–7PM
              </p> */}
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Mail className="h-4 w-4 text-cyan-400" />{" "}
                <a
                  href="mailto:thedevicelab8@gmail.com"
                  className="hover:underline"
                >
                  thedevicelab8@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center gap-2 sm:justify-start">
                <Phone className="h-4 w-4 text-cyan-400" />{" "}
                <a href="https://wa.me/17802469743" className="hover:underline">
                  Reach us on WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-right">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
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
        <div className="mt-10 flex flex-col items-center justify-between border-t border-slate-700 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {year} The DeviceLab. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            <Globe className="h-3 w-3" /> Edmonton, AB
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
