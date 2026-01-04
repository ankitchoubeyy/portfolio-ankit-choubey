"use client";
import React, { useState } from "react";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let { fullName, email, phone, message } = formData;

    // Trim values
    fullName = fullName.trim();
    email = email.trim().toLowerCase();
    phone = phone.trim();
    message = message.trim();

    // Required fields
    if (!fullName || !email || !phone || !message) {
      toast.error("Please fill out all fields.");
      return false;
    }

    // Full name validation (at least 2 characters)
    if (fullName.length < 2) {
      toast.error("Please enter a valid full name.");
      return false;
    }

    // Email validation (stronger)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    // Phone validation (international support)
    const cleanedPhone = phone.replace(/[\s()-]/g, "");
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;

    if (!phoneRegex.test(cleanedPhone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    // Prevent fake numbers like 0000000000
    if (/^(\+?)(\d)\2{9,}$/.test(cleanedPhone)) {
      toast.error("Please enter a real phone number.");
      return false;
    }

    // Message length validation
    if (message.length < 10) {
      toast.error("Message should be at least 10 characters long.");
      return false;
    }

    if (message.length > 500) {
      toast.error("Message cannot exceed 500 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🚀");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="mt-20">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BiSolidMessageRoundedDetail className="w-6 h-6" /> Contact
      </motion.h2>

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

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
          {/* Access key (Hidden) */}
          <input
            type="hidden"
            name="access_key"
            value="f0d0ed47-2103-42ba-8e94-add3a6b000fb"
          />

          {/* Full Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Mobile No */}
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="your@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/70 border border-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-black/70 border border-white/10 rounded-xl w-full p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-lg flex justify-center items-center gap-2 transition-all ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-white/20 hover:bg-green-500"
            }`}
          >
            {loading ? (
              <BeatLoader size={10} color="#4ade80" />
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
