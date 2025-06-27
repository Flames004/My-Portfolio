import React, { useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [animeAnswer, setAnimeAnswer] = useState("");

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {/* Page Heading */}
        <h1 className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-16 text-center text-zinc-900 dark:text-white">
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Contact Me
          </span>
        </h1>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-lg">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-lg">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-lg">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-md bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                  name="anime"
                  value="yes"
                  checked={animeAnswer === "yes"}
                  onChange={() => setAnimeAnswer("yes")}
                  className="accent-red-500 w-5 h-5"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="anime"
                  value="no"
                  checked={animeAnswer === "no"}
                  onChange={() => setAnimeAnswer("no")}
                  className="accent-red-500 w-5 h-5"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              className="px-8 py-3 text-lg font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Send ➤
            </button>
          </div>
        </form>
        <section className="mt-20">
          <SocialLinks />
        </section>
      </motion.div>
    </section>
  );
};

export default Contact;
