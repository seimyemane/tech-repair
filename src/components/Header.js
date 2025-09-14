import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoSrc from "../images/logo.png"; // ensure this is imported so bundler resolves it

/**
 * Header — sticky, accessible, responsive
 * - Uses callbacks (onAboutClick, onServicesClick, onContactClick) like your original
 * - Also supports optional hrefs via 'links' prop if you later add routing
 * - Mobile drawer with body scroll lock and Escape to close
 */

export default function Header({
  onAboutClick,
  onServicesClick,
  onContactClick,
  links,
}) {
  const [open, setOpen] = useState(false);

  // close on resize >= md
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // lock scroll when menu is open & bind Escape
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const NavButton = ({ children, onClick, href }) =>
    href ? (
      <a
        href={href}
        className="rounded-xl border border-cyan-300/60 px-3 py-2 text-sm font-medium transition hover:scale-[1.03] hover:border-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {children}
      </a>
    ) : (
      <button
        onClick={onClick}
        className="rounded-xl border border-cyan-300/60 px-3 py-2 text-sm font-medium transition hover:scale-[1.03] hover:border-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {children}
      </button>
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src={LogoSrc}
            alt="The DeviceLab logo"
            className="h-10 w-10 rounded"
          />
          <span className="text-base font-semibold text-neutral-100">
            The DeviceLab
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 md:flex text-neutral-100">
          <NavButton onClick={onServicesClick} href={links?.services}>
            Services
          </NavButton>
          <NavButton onClick={onContactClick} href={links?.contact}>
            Contact
          </NavButton>
          <NavButton onClick={onAboutClick} href={links?.about}>
            About
          </NavButton>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center rounded-lg p-2 text-neutral-100 outline-none ring-0 md:hidden focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`origin-top overflow-hidden border-t border-white/10 bg-slate-900/95 transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-neutral-100">
            <NavButton
              onClick={() => {
                setOpen(false);
                onServicesClick && onServicesClick();
              }}
              href={links?.services}
            >
              Services
            </NavButton>
            <NavButton
              onClick={() => {
                setOpen(false);
                onContactClick && onContactClick();
              }}
              href={links?.contact}
            >
              Contact
            </NavButton>
            <NavButton
              onClick={() => {
                setOpen(false);
                onAboutClick && onAboutClick();
              }}
              href={links?.about}
            >
              About
            </NavButton>
          </div>
        </div>
      </div>
    </header>
  );
}
