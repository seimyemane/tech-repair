import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const WebContact = ({
  emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID,
  emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (emailjsPublicKey) emailjs.init(emailjsPublicKey);
  }, [emailjsPublicKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setMessage("Please fill out your name, email, and message.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Get current time/date
    const now = new Date();
    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const currentDate = now.toLocaleDateString();

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      time: currentTime,
      date: currentDate,
    };

    try {
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);
      setStatus("success");
      setMessage("Your message has been sent! We’ll get back to you soon.");

      // reset
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-700">
            <FaEnvelope className="h-5 w-5" />
            <h1 className="text-xl font-bold text-slate-900">
              Contact DeviceLab Web
            </h1>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* Status message */}
        {status !== "idle" && (
          <div
            role="status"
            className={`mb-4 rounded-xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            {status === "loading" ? "Sending message..." : message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
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
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="">Select service</option>
              <option value="Web Design">Web Design</option>
              <option value="Website Maintenance">Website Maintenance</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="eCommerce Setup">eCommerce Setup</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
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
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Footer note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <FaUser className="h-4 w-4" />
          <span>
            Messages go directly to DeviceLab Web’s inbox via EmailJS.
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default WebContact;
