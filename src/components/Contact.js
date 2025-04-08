import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    const templateParams = {
      title: "Customer Inquiry",
      name: formData.name,
      time: formattedTime,
      message: formData.message,
      email: formData.email,
    };

    try {
      await emailjs.send(
        "service_iaadcta",
        "template_b8qarsq",
        templateParams,
        "BFv-BLiNAd_2iwZch"
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError("something went wrong. Please try again late");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" flex justify-center items-center lg:h-[100vh] md:h-[100vh] h-full  w-full flex-col">
      <span className="  lg:w-[80%] md:w-[80%] h-fit  w-full  flex justify-around bg-slate-300 bg-opacity-25 p-4 lg:p-6 md:p-6  lg:text-6xl md:text-6xl text-4xl text-slate-800 ">
        <h1>Contact Us</h1>
      </span>
      <div className="lg:w-[80%] md:w-[80%] h-[100vh] w-full  flex items-center justify-center bg-no-repeat bg-cover  bg-[url('/src/images/contact.jpg')] flex-col ">
        <form
          onSubmit={handleSubmit}
          className=" lg:w-1/2 h-1/2 md:w-1/2 w-full flex justify-evenly items-center flex-col  bg-slate-900 bg-opacity-30 rounded-3xl"
        >
          <div>
            <label htmlFor="name" className="text-white">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 rounded-lg"
              placeholder="Please leave us your phone number too."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-fit p-3 bg-blue-500 text-white font-semibold rounded-md ${
              isSubmitting ? "opacity-50" : ""
            }`}
          >
            {" "}
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
        {/* Success Message */}
        {success && (
          <p className="text-green-500">
            Your message has been sent successfully!
          </p>
        )}
        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
