import React from "react";
import {
  FaNetworkWired,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const IT_Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <FaNetworkWired className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-bold tracking-tight">
                DeviceLab <span className="text-blue-400">IT & Networking</span>
              </h2>
            </div>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Reliable IT infrastructure, business networking, and managed
              support — backed by security and automation expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/division/it" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/division/it/services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/division/it/book"
                  className="hover:text-white transition"
                >
                  Book Support
                </a>
              </li>
              <li>
                <a
                  href="/division/it/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
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
                  href="mailto:support@thedevicelab.ca"
                  className="hover:text-white transition"
                >
                  contact@thedevicelab.ca
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-xs">
                  Mon–Sat: 9 AM – 7 PM
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-700" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} DeviceLab IT & Networking. All rights
            reserved.
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

export default IT_Footer;
