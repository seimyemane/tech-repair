import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  Globe,
  Wrench,
  Network,
  Package,
  ShoppingBag,
} from "lucide-react";

/**
 * Contact — Minimal & Clear (DeviceLab‑aligned)
 * Sections match DeviceLab's structure and route inquiries by category:
 *  - Website Subscriptions
 *  - Phone & Device Repairs
 *  - Business IT & Networking
 *  - Accessories (Retail)
 *  - Parts Supply (Wholesale)
 *
 * Lightweight (no heavy backgrounds), accessible, and mobile‑first.
 */

/* ---------- Motion ---------- */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/* ---------- Helper ---------- */
const isValidEmail = (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test((v || "").trim());
const isValidPhone = (v) =>
  (v || "").trim() === "" || /^\+?\d[\d\s().-]{6,}$/.test((v || "").trim());

export default function ContactMinimal({
  id = "contact",
  heading = "Contact DeviceLab",
  phoneDisplay = "+1 (825) 785‑7009",
  phoneE164 = "+18257857009",
  email = "contact@thedevicelab.ca",
  whatsapp = "https://wa.me/17802469743",
  // EmailJS config (fallback to env if not provided)
  emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID,
  emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    topic: "web",
    _hp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, msg: "" });

  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!formData.email.trim()) e.email = "Please enter your email.";
    else if (!isValidEmail(formData.email)) e.email = "Enter a valid email.";
    if (!formData.message.trim())
      e.message = "Tell us briefly how we can help.";
    if (!isValidPhone(formData.number))
      e.number = "Enter a valid phone (digits only).";
    return e;
  }, [formData]);

  const tooSoon = () => {
    const last = Number(sessionStorage.getItem("dl_last_contact_ts") || 0);
    return Date.now() - last < 30_000;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, msg: "" });
    if (formData._hp) return; // bot honeypot
    if (Object.keys(errors).length)
      return setStatus({
        type: "error",
        msg: "Please fix the highlighted fields.",
      });
    if (tooSoon())
      return setStatus({
        type: "error",
        msg: "Please wait a few seconds before sending again.",
      });
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error("Missing EmailJS config");
      return setStatus({
        type: "error",
        msg: "Email service not configured. Please try again later.",
      });
    }

    setIsSubmitting(true);
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const templateParams = {
      title: "Customer Inquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.number,
      message: formData.message,
      topic: formData.topic,
      time,
    };

    try {
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, {
        publicKey: emailjsPublicKey,
      });
      sessionStorage.setItem("dl_last_contact_ts", String(Date.now()));
      setStatus({
        type: "success",
        msg: "Thanks! Your message has been sent.",
      });
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
        topic: formData.topic,
        _hp: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // JSON-LD (ContactPage / Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "DeviceLab Inc.",
      email,
      telephone: phoneE164,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: phoneE164,
          email,
          areaServed: "CA-AB",
          availableLanguage: ["en"],
        },
      ],
    },
  };

  const cards = [
    {
      key: "web",
      icon: Globe,
      title: "Website Subscriptions",
      blurb: "Sites + hosting + maintenance.",
    },
    {
      key: "repairs",
      icon: Wrench,
      title: "Phone & Device Repairs",
      blurb: "Screens, batteries, ports, more.",
    },
    {
      key: "it",
      icon: Network,
      title: "Business IT & Networking",
      blurb: "Wi‑Fi, POS, backups, support.",
    },
    {
      key: "retail",
      icon: ShoppingBag,
      title: "Accessories (Retail)",
      blurb: "Cases, cables, audio, add‑ons.",
    },
    {
      key: "supply",
      icon: Package,
      title: "Parts Supply (Wholesale)",
      blurb: "Screens, tools, bulk accessories.",
    },
  ];

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="w-full bg-white"
    >
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16"
      >
        <motion.h1
          id={`${id}-title`}
          variants={item}
          className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {heading}
        </motion.h1>

        {/* Category cards */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {cards.map(({ key, icon: Icon, title, blurb }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFormData((s) => ({ ...s, topic: key }))}
              className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition hover:bg-slate-50 ${
                formData.topic === key
                  ? "border-slate-900 bg-slate-50"
                  : "border-slate-200 bg-white"
              }`}
              aria-pressed={formData.topic === key}
            >
              <Icon className="mt-0.5 h-5 w-5 text-slate-700" />
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {title}
                </div>
                <div className="text-xs text-slate-600">{blurb}</div>
              </div>
            </button>
          ))}
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="_hp"
              value={formData._hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  htmlFor="topic"
                  className="text-xs font-medium text-slate-700"
                >
                  Inquiry Type
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="web">Website Subscriptions</option>
                  <option value="repairs">Phone & Device Repairs</option>
                  <option value="it">Business IT & Networking</option>
                  <option value="retail">Accessories (Retail)</option>
                  <option value="supply">Parts Supply (Wholesale)</option>
                </select>
              </div>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:ring-red-200"
                      : "border-slate-300 focus:ring-slate-900"
                  }`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-err" : undefined}
                />
                {errors.name && (
                  <span id="name-err" className="text-xs text-red-500">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-slate-300 focus:ring-slate-900"
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                />
                {errors.email && (
                  <span id="email-err" className="text-xs text-red-500">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-700">
                  Phone (optional)
                </span>
                <input
                  type="tel"
                  inputMode="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.number
                      ? "border-red-300 focus:ring-red-200"
                      : "border-slate-300 focus:ring-slate-900"
                  }`}
                  placeholder="+1 (825) 204-7832"
                  aria-invalid={!!errors.number}
                  aria-describedby={errors.number ? "phone-err" : undefined}
                />
                {errors.number && (
                  <span id="phone-err" className="text-xs text-red-500">
                    {errors.number}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-700">
                  Inquiry
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full resize-y rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-300 focus:ring-red-200"
                      : "border-slate-300 focus:ring-slate-900"
                  }`}
                  placeholder="Please state your inquiry here..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "msg-err" : undefined}
                />
                {errors.message && (
                  <span id="msg-err" className="text-xs text-red-500">
                    {errors.message}
                  </span>
                )}
              </label>

              <div className="mt-1 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                    isSubmitting ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Submitting…" : "Send Message"}
                </button>
                <span
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-600"
                      : status.type === "error"
                      ? "text-red-600"
                      : "text-slate-400"
                  }`}
                >
                  {status.msg || ""}
                </span>
              </div>
            </div>
          </motion.form>

          {/* Direct contacts */}
          <motion.aside
            variants={item}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Reach us directly
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Text a photo of the issue for a quick quote, or tell us about your
              web/IT project.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-700" />
                <a
                  href={`tel:${phoneE164}`}
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-700" />
                <a
                  href={`mailto:${email}`}
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-700" />
                <a
                  href={whatsapp}
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {cards.map(({ key, title }) => (
                <button
                  key={`mini-${key}`}
                  type="button"
                  onClick={() => setFormData((s) => ({ ...s, topic: key }))}
                  className={`rounded-lg border px-3 py-2 text-left text-xs transition hover:bg-slate-50 ${
                    formData.topic === key
                      ? "border-slate-900"
                      : "border-slate-200"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
