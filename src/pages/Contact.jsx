import React, { useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    watchesAnime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message, watchesAnime } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !message.trim() || !watchesAnime) {
      toast.error("Please fill out all fields!");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        watchesAnime: "",
      });
    } catch (error) {
      toast.error("Failed to send message!");
      console.error("Error sending message: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen pt-28 px-6 md:px-20 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h1 className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-16 text-center text-zinc-900 dark:text-white">
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Contact Me
          </span>
        </h1>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit} netlify>
          <div>
            <label className="block mb-2 font-medium text-lg">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-lg">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              rows="5"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <div>
            <label className="block mb-3 font-medium text-lg">
              Do you watch anime?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="watchesAnime"
                  value="yes"
                  checked={formData.watchesAnime === "yes"}
                  onChange={handleChange}
                  className="accent-red-500 w-5 h-5"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="watchesAnime"
                  value="no"
                  checked={formData.watchesAnime === "no"}
                  onChange={handleChange}
                  className="accent-red-500 w-5 h-5"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 text-lg font-semibold bg-red-500 text-white rounded-md transition duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Send ➤"
              )}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <section className="mt-20">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium text-center -mb-5">
            Or connect with me
          </p>
          <SocialLinks />
        </section>
      </motion.div>
    </section>
  );
};

export default Contact;
