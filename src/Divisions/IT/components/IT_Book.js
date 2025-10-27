import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaNetworkWired } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const IT_Book = ({
  emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID,
  emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (emailjsPublicKey) emailjs.init(emailjsPublicKey);
  }, [emailjsPublicKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setStatus("error");
      setFeedback(
        "Please fill all required fields (Name, Email, Service, Message)."
      );
      return;
    }

    setStatus("loading");
    setFeedback("");

    const now = new Date();
    const currentDate = now.toLocaleDateString();

    const templateParams = {
      date: currentDate,
      service: formData.service,
      message: formData.message,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };

    try {
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);
      setStatus("success");
      setFeedback(
        "Your IT support request has been sent successfully. We'll contact you soon!"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Failed to send your request. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-slate-50 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-700">
            <FaNetworkWired className="h-5 w-5 text-blue-500" />
            <h1 className="text-xl font-bold text-slate-900">
              Book IT Support or Consultation
            </h1>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Fill in your details and we’ll schedule your IT service or visit.
          </p>
        </div>

        {/* Feedback Message */}
        {status !== "idle" && (
          <div
            className={`mb-4 rounded-xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }`}
          >
            {status === "loading" ? "Sending your request..." : feedback}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@business.com"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(825) 785-7009"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Service <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="">Select a service</option>
              <option value="Network Setup">Network Setup</option>
              <option value="POS / Device Setup">POS / Device Setup</option>
              <option value="Cloud Email / 365 / Google Workspace">
                Cloud Email / 365 / Google Workspace
              </option>
              <option value="Cybersecurity & Backup">
                Cybersecurity & Backup
              </option>
              <option value="Ongoing IT Support">Ongoing IT Support</option>
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
              placeholder="Describe your IT issue or what kind of setup you need..."
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
                : "bg-blue-600 text-white hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-700"
            }`}
          >
            <FaPaperPlane className="h-4 w-4" />
            {status === "loading" ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default IT_Book;
