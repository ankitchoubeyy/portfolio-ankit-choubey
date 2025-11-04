"use client";
import React, { useState } from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { BeatLoader } from "react-spinners";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("⚠️ Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      // Send data to getform.io
      const res = await fetch("https://getform.io/f/bxojnrla", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (res.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        console.log("Message sent successfully!");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send message. Check your connection.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="mt-20">
      {/* Section Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BiSolidMessageRoundedDetail className="w-6 h-6" /> Contact
      </motion.h2>

      {/* Contact Container */}
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white/80 shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Drop your queries — I&apos;ll get back to you soon!
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 bg-red-900/30 text-center py-2 rounded-md mb-4 text-sm">
            {error}
          </p>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-black/70 border border-white/10 rounded-xl w-full p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`transition-all duration-300 w-full py-3 rounded-xl font-semibold text-lg shadow-md flex justify-center items-center gap-2 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-white/20 hover:bg-green-500 text-white"
            }`}
          >
            {loading ? <BeatLoader size={10} color="#4ade80" /> : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
