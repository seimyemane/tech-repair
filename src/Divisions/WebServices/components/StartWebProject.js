import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGlobe, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const StartWebProject = ({
  emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID,
  emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_SHOP,
  emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
}) => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "starter";

  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    shopName: "",
    phone: "",
    city: "",
    website: "",
    services: "",
    turnaround: "",
    notes: "",
    plan,
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (emailjsPublicKey) {
      emailjs.init(emailjsPublicKey);
    }
  }, [emailjsPublicKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (value) => {
    const current = formData.services
      ? formData.services.split(", ").filter(Boolean)
      : [];
    const exists = current.includes(value);
    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFormData((s) => ({ ...s, services: next.join(", ") }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setStatus("error");
      setMessage("Email service not configured. Please check EmailJS keys.");
      return;
    }

    if (!formData.ownerName || !formData.email) {
      setStatus("error");
      setMessage("Please fill out both Owner Name and Email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const templateParams = {
        ownerName: formData.ownerName,
        email: formData.email,
        shopName: formData.shopName,
        phone: formData.phone,
        city: formData.city,
        website: formData.website,
        services: formData.services,
        turnaround: formData.turnaround,
        notes: formData.notes,
        plan: formData.plan, // ✅ includes selected plan
      };

      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);

      setStatus("success");
      setMessage(
        "Thank you! Your website project request has been submitted successfully."
      );

      // reset except plan
      setFormData({
        ownerName: "",
        email: "",
        shopName: "",
        phone: "",
        city: "",
        website: "",
        services: "",
        turnaround: "",
        notes: "",
        plan,
      });
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send your request. Please try again later.");
    }
  };

  const planDetails = {
    starter: {
      name: "Starter",
      price: "$33/mo",
      desc: "Clean and simple site",
    },
    business: {
      name: "Business",
      price: "$45/mo",
      desc: "For growing businesses",
    },
    pro: { name: "Pro", price: "$99/mo", desc: "Feature-rich and scalable" },
  };

  const selectedPlan = planDetails[plan] || planDetails.starter;

  return (
    <section className="min-h-screen w-full bg-slate-50 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-700">
            <FaGlobe className="h-5 w-5" />
            <h1 className="text-xl font-bold text-slate-900">
              Start Your Website Project
            </h1>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Fill out the form below and we’ll reach out to begin your website
            setup.
          </p>
        </div>

        {/* Selected Plan Summary */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            {selectedPlan.name} Plan
          </h2>
          <p className="text-sm text-slate-600">{selectedPlan.desc}</p>
          <p className="mt-1 text-base font-bold text-slate-900">
            {selectedPlan.price}
          </p>
        </div>

        {/* Status Message */}
        {status !== "idle" && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-4 rounded-xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            {status === "loading" ? "Sending your request..." : message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Owner Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ownerName"
              required
              value={formData.ownerName}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Optional fields */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Shop Name
            </label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Website (if any)
            </label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-700 mb-1">
              Services
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Website",
                "SEO",
                "eCommerce",
                "Booking System",
                "Branding",
              ].map((srv) => {
                const selected = (formData.services || "")
                  .split(", ")
                  .includes(srv);
                return (
                  <label
                    key={srv}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => handleServiceToggle(srv)}
                      className="h-4 w-4"
                    />
                    <span>{srv}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Turnaround
            </label>
            <select
              name="turnaround"
              value={formData.turnaround}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="">Select turnaround time</option>
              <option value="Same-day">Same-day</option>
              <option value="24-48 hours">24–48 hours</option>
              <option value="3-5 days">3–5 days</option>
              <option value="1 week+">1 week+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional details or requests..."
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition ${
              status === "loading"
                ? "bg-slate-400 text-white"
                : "bg-slate-900 text-white hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            <FaPaperPlane className="h-4 w-4" />
            {status === "loading" ? "Sending..." : "Start My Project"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default StartWebProject;
