import React, { useState } from "react";
import {
  Handshake,
  Store,
  Users,
  Settings,
  Percent,
  QrCode,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/**
 * HowItWorks — DeviceLab (Repair Shops & Businesses)
 * - Toggle between flows
 * - 4-step cards with numbered markers
 * - “At a glance” guardrails so the offer stays clear & profitable
 * - CTA buttons (wire these to your forms)
 */
export default function HowItWorks({
  id = "how-it-works",
  onShopApply, // optional handlers for CTAs
  onBusinessStart,
}) {
  const [tab, setTab] = useState("shops"); // "shops" | "business"

  const steps = {
    shops: [
      {
        icon: <Handshake className="h-5 w-5" />,
        title: "Apply & Get Approved",
        text: "We vet quality (ratings, turnaround time). Approved shops join the DeviceLab network.",
      },
      {
        icon: <Store className="h-5 w-5" />,
        title: "Get Listed & Maintain",
        text: "We list your shop on the DeviceLab directory. You agree to 15% off for DeviceLab customers.",
      },
      {
        icon: <QrCode className="h-5 w-5" />,
        title: "Receive Referrals",
        text: "Customers find you via our site and use your QR/code. You fulfill and apply the discount.",
      },
      {
        icon: <ShoppingCart className="h-5 w-5" />,
        title: "Grow Wholesale with Credit",
        text: "Place your first wholesale order (≥ $300) and get a one-time $100 starter parts credit.",
      },
    ],
    business: [
      {
        icon: <Settings className="h-5 w-5" />,
        title: "Subscribe ($99/mo)",
        text: "We host & maintain your site and provide 2 support sessions per year (30 min, remote).",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Get Your Perks Wallet",
        text: "We generate a unique QR/code for perks: 5 family + 10 customers (tracked, no abuse).",
      },
      {
        icon: <Percent className="h-5 w-5" />,
        title: "Redeem Perks",
        text: "15% off repairs at partners (shop-funded), 20% off DeviceLab accessories (capped), + screen glass perk.",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "See Results",
        text: "We monitor bookings, referrals, and redemptions. You can view usage reports any time.",
      },
    ],
  };

  const AtAGlance = () => {
    return tab === "shops" ? (
      <ul className="grid gap-2 text-sm text-gray-700">
        <li>
          • $50/mo includes site maintenance + directory listing + referrals.
        </li>
        <li>
          • Shop funds the 15% repair discount (customer acquisition cost).
        </li>
        <li>
          • One-time $100 starter parts credit after first wholesale order ≥
          $300.
        </li>
        <li>• Perks & referrals tracked via QR/code. 30-day cancel anytime.</li>
      </ul>
    ) : (
      <ul className="grid gap-2 text-sm text-gray-700">
        <li>
          • $99/mo includes website, hosting, updates + 2 support sessions/year.
        </li>
        <li>
          • Perks Wallet covers 5 family + 10 customers (tracked via QR/code).
        </li>
        <li>
          • 15% off repairs at partners (shop-funded) + 20% off accessories
          (DeviceLab-funded, capped).
        </li>
        <li>• Screen glass perk (basic) for owner. Caps reset annually.</li>
      </ul>
    );
  };

  const active = steps[tab];

  return (
    <section id={id} className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How DeviceLab Works
          </h2>
          <p className="mt-2 text-gray-600">
            Two simple tracks: partner repair shops and businesses that want a
            site + perks. Clear rules, tracked with QR codes.
          </p>
        </header>

        {/* Toggle */}
        <div className="mx-auto mb-8 flex w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-1">
          <button
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tab === "shops"
                ? "bg-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setTab("shops")}
            type="button"
          >
            For Repair Shops
          </button>
          <button
            className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
              tab === "business"
                ? "bg-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setTab("business")}
            type="button"
          >
            For Businesses
          </button>
        </div>

        {/* Steps */}
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                {i + 1}
              </div>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-gray-50">
                {s.icon}
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* At a glance / guardrails */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            At a glance
          </h4>
          <AtAGlance />
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {tab === "shops" ? (
            <>
              <a
                href="/apply-shop"
                target="_blank"
                onClick={(e) =>
                  onShopApply ? (e.preventDefault(), onShopApply()) : null
                }
                className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
              >
                Apply as a Partner Shop <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#terms"
                className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                Read Partner Terms
              </a>
            </>
          ) : (
            <>
              <a
                href="/start-business"
                onClick={(e) =>
                  onBusinessStart
                    ? (e.preventDefault(), onBusinessStart())
                    : null
                }
                className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
              >
                Start My Website <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#perks"
                className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                See Perks Details
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
