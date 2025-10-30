import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

/**
 * WebPayments — Tier + Billing selector that redirects to Stripe (JavaScript version)
 * ----------------------------------------------------------------
 * - 3 dropdowns: Tier, Billing type, Variant
 * - Disabled until a full selection is made
 * - On submit, redirects to the mapped Stripe Payment Link URL
 * - Replace PLACEHOLDER URLs in LINK_MAP with your real Stripe links
 */

const TIERS = [
  { id: "starter", label: "Starter" },
  { id: "growth", label: "Growth" },
  { id: "premium", label: "Premium" },
];

const BILLING = [
  { id: "recurring", label: "Recurring (monthly)" },
  { id: "onetime", label: "One‑time setup" },
];

// For recurring you can offer a Trial or No‑trial version. For one‑time there’s only Standard.
const VARIANTS = {
  recurring: [
    { id: "trial30", label: "30‑day trial" },
    { id: "standard", label: "Start billing immediately" },
  ],
  onetime: [{ id: "standard", label: "Standard" }],
};

/**
 * LINK_MAP — map every (tier, billing, variant) to a Stripe Payment Link
 * ----------------------------------------------------------------------------
 * Paste your real links from Stripe (Payment Links). Example:
 *   "starter.recurring.trial30": "https://buy.stripe.com/abc123",
 * If a combination isn’t available, leave it as null and the UI will show it disabled.
 */
const LINK_MAP = {
  // Starter — recurring
  "starter.recurring.trial30": "https://buy.stripe.com/cNiaEX1R44oU3ic2su2wU02",
  "starter.recurring.standard":
    "https://buy.stripe.com/cNiaEX1R44oU3ic2su2wU02",
  // Starter — one‑time
  "starter.onetime.standard": "https://buy.stripe.com/eVqcN5brEf3y2e87MO2wU04",

  // Growth — recurring
  "growth.recurring.trial30": "https://buy.stripe.com/14A00jfHU2gM2e8aZ02wU00",
  "growth.recurring.standard": "https://buy.stripe.com/aFa00jdzMcVqaKE9UW2wU05",
  // Growth — one‑time
  "growth.onetime.standard": "https://buy.stripe.com/aFa00jdzMcVqaKE9UW2wU05",

  // Premium — recurring
  "premium.recurring.trial30": "https://buy.stripe.com/aFa00jdzMcVqaKE9UW2wU05",
  "premium.recurring.standard":
    "https://buy.stripe.com/5kQ14nanAf3yg4Y7MO2wU01",
  // Premium — one‑time
  "premium.onetime.standard": "https://buy.stripe.com/14AdR9brEdZuaKE1oq2wU06",
};

function HelpRow({ children }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Check className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

export default function WebPayments() {
  const [tier, setTier] = useState("");
  const [billing, setBilling] = useState("");
  const [variant, setVariant] = useState("");
  const [error, setError] = useState("");

  // Compute the target link for the current selection
  const link = useMemo(() => {
    if (!tier || !billing || !variant) return null;
    const key = `${tier}.${billing}.${variant}`;
    return LINK_MAP[key] || null;
  }, [tier, billing, variant]);

  const variantsForBilling = useMemo(() => {
    return billing ? VARIANTS[billing] : [];
  }, [billing]);

  const handleProceed = () => {
    setError("");
    if (!tier || !billing || !variant) {
      setError("Please select tier, billing, and variant.");
      return;
    }
    if (!link) {
      setError(
        "This selection isn’t available yet. Please pick another option or contact us."
      );
      return;
    }
    window.location.href = link;
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Start Your DeviceLab Website
        </h2>
        <p className="mt-2 text-gray-600">
          Choose your plan and billing option. You’ll be redirected to a secure
          Stripe checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Tier */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Tier</span>
          <select
            className="rounded-xl border border-gray-200 bg-white p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            value={tier}
            onChange={(e) => {
              setTier(e.target.value);
            }}
            aria-label="Select tier"
          >
            <option value="">Select…</option>
            {TIERS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        {/* Billing */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Billing</span>
          <select
            className="rounded-xl border border-gray-200 bg-white p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            value={billing}
            onChange={(e) => {
              setBilling(e.target.value);
              setVariant("");
            }}
            aria-label="Select billing"
          >
            <option value="">Select…</option>
            {BILLING.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </label>

        {/* Variant */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Variant</span>
          <select
            className="rounded-xl border border-gray-200 bg-white p-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            disabled={!billing}
            aria-label="Select variant"
          >
            <option value="">
              {billing ? "Select…" : "Pick billing first"}
            </option>
            {variantsForBilling.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Helper bullets */}
      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <HelpRow>Secure checkout via Stripe</HelpRow>
        <HelpRow>Cancel or change plan anytime</HelpRow>
        <HelpRow>GST calculated at checkout (if enabled)</HelpRow>
        <HelpRow>Need help? contact@thedevicelab.ca</HelpRow>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <a
          href="https://buy.stripe.com/14A14n9jwf3yaKEgjk2wU03"
          className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
          target="_blank"
          rel="noreferrer"
        >
          Pay $50 onboarding fee <ExternalLink className="ml-2 h-4 w-4" />
        </a>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleProceed}
          disabled={!tier || !billing || !variant}
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Continue to secure payment
        </motion.button>
      </div>

      <p className="mt-3 text-center text-xs text-gray-500">
        By continuing, you agree to DeviceLab’s Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
}
