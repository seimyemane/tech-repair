import React from "react";
import { FaFacebookF, FaInstagram, FaGlobe, FaEnvelope } from "react-icons/fa";

const WebFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-slate-700">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaGlobe className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">DeviceLab Web</h3>
          </div>
          <p className="text-sm text-slate-400">
            Professional websites, hosting, and maintenance — all in one
            subscription. Human-built, AI-assisted, future-ready.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/division/web" className="hover:text-white transition">
                Plans
              </a>
            </li>
            <li>
              <a
                href="/web/live-templates"
                className="hover:text-white transition"
              >
                Live Templates
              </a>
            </li>
            <li>
              <a href="/web/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@thedevicelab.ca"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaEnvelope className="h-4 w-4" /> contact@thedevicelab.ca
              </a>
            </li>
            <li>Edmonton, Alberta</li>
            <li className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
              >
                <FaFacebookF className="h-3 w-3 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
              >
                <FaInstagram className="h-3 w-3 text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-xs text-slate-500">
        © {year} DeviceLab Web — All rights reserved.
      </div>
    </footer>
  );
};

export default WebFooter;
