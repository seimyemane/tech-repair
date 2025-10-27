import React from "react";
import {
  FaTools,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const RepFooter = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <FaTools className="h-5 w-5 text-blue-400" />
              <h2 className="text-lg font-bold tracking-tight">
                DeviceLab <span className="text-slate-400">Repairs</span>
              </h2>
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Fast, reliable phone, tablet, and laptop repairs done by
              professionals you can trust — backed by warranty and quality
              parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/division/repairs/services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/division/repairs/pricing"
                  className="hover:text-white transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/division/repairs/book"
                  className="hover:text-white transition"
                >
                  Book Repair
                </a>
              </li>
              <li>
                <a
                  href="/division/repairs/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="h-4 w-4 text-blue-400" />
                <a
                  href="tel:8257857009"
                  className="hover:text-white transition"
                >
                  (825) 785-7009
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:contact@thedevicelab.ca"
                  className="hover:text-white transition"
                >
                  contact@thedevicelab.ca
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-xs">
                  Mon–Sat: 10 AM – 7 PM
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700"></div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} DeviceLab Repairs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RepFooter;
