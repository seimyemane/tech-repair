import React, { useState, useMemo } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import ContactBG from "../images/contact.jpg"; // fallback / default background

/**
 * Contact — polished, accessible form
 * - Matches visual style (background image + gradient overlay)
 * - Inline validation + disabled state
 * - ARIA live region for success/error
 * - Keeps your EmailJS service/template/public key (consider env vars)
 */

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, msg: "" }); // {type: 'success'|'error'|null, msg: string}

  const isValidEmail = (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v.trim());
  const isValidPhone = (v) =>
    v.trim() === "" || /^(\+?\d[\d\s-]{6,})$/.test(v.trim());

  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!formData.email.trim()) e.email = "Please enter your email.";
    else if (!isValidEmail(formData.email))
      e.email = "Enter a valid email (e.g., name@example.com).";
    if (!formData.message.trim())
      e.message = "Tell us briefly how we can help.";
    if (!isValidPhone(formData.number))
      e.number = "Enter a valid phone (digits only).";
    return e;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, msg: "" });

    // final client-side validation
    if (Object.keys(errors).length) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields." });
      return;
    }

    setIsSubmitting(true);

    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const templateParams = {
      title: "Customer Inquiry",
      name: formData.name,
      time: `${hh}:${mm}`,
      message:
        formData.message +
        (formData.number ? ` | Phone: ${formData.number}` : ""),
      email: formData.email,
    };

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: "success",
        msg: "Your message has been sent! We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "", number: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again later.",
      });
      console.error("EmailJS error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${ContactBG})` }}
      >
        <img
          src={ContactBG}
          alt="Abstract tech contact background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 w-full max-w-5xl px-4 py-8 text-neutral-100"
      >
        <motion.h1
          variants={item}
          className="mb-6 text-center text-4xl font-bold sm:text-5xl"
        >
          Contact Us
        </motion.h1>

        <div className="mx-auto grid gap-8 md:grid-cols-2">
          {/* Form */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm">Name</span>
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                    errors.name ? "border-red-400" : "border-white/15"
                  }`}
                >
                  <User className="h-4 w-4 opacity-70" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-err" : undefined}
                  />
                </div>
                {errors.name && (
                  <span id="name-err" className="text-xs text-red-300">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm">Email</span>
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                    errors.email ? "border-red-400" : "border-white/15"
                  }`}
                >
                  <Mail className="h-4 w-4 opacity-70" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-err" : undefined}
                  />
                </div>
                {errors.email && (
                  <span id="email-err" className="text-xs text-red-300">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm">Phone (optional)</span>
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                    errors.number ? "border-red-400" : "border-white/15"
                  }`}
                >
                  <Phone className="h-4 w-4 opacity-70" />
                  <input
                    type="tel"
                    inputMode="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                    placeholder="+1 (555) 123-4567"
                    aria-invalid={!!errors.number}
                    aria-describedby={errors.number ? "phone-err" : undefined}
                  />
                </div>
                {errors.number && (
                  <span id="phone-err" className="text-xs text-red-300">
                    {errors.number}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm">Inquiry</span>
                <div
                  className={`rounded-lg border ${
                    errors.message ? "border-red-400" : "border-white/15"
                  }`}
                >
                  <div className="flex items-start gap-2 px-3 py-2">
                    <MessageSquare className="mt-2 h-4 w-4 opacity-70" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-y bg-transparent outline-none placeholder:text-neutral-400"
                      placeholder="Please state your inquiry here..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "msg-err" : undefined}
                    />
                  </div>
                </div>
                {errors.message && (
                  <span id="msg-err" className="text-xs text-red-300">
                    {errors.message}
                  </span>
                )}
              </label>

              <div className="mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 rounded-2xl border border-cyan-300/60 bg-slate-900/70 px-5 py-2.5 font-medium backdrop-blur transition hover:scale-[1.02] hover:border-cyan-300 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <Send className="h-4 w-4" />{" "}
                  {isSubmitting ? "Submitting…" : "Send Message"}
                </button>
                <span
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-300"
                      : status.type === "error"
                      ? "text-red-300"
                      : "text-transparent"
                  }`}
                >
                  {status.msg || "placeholder"}
                </span>
              </div>
            </div>
          </motion.form>

          {/* Contact details / blurb */}
          <motion.aside
            variants={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h2 className="text-2xl font-semibold">Reach us directly</h2>
            <p className="mt-2 text-sm text-neutral-200">
              Text a photo of the issue for a quick quote, or tell us about your
              web/IT project.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/17802469743" className="hover:underline">
                  Call / Text
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:seimyemane8@gmail.com"
                  className="hover:underline"
                >
                  thedevicelab8@gmail.com
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
