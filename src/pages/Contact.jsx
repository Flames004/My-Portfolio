import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-12 text-zinc-900 dark:text-white text-center"
        >
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Contact Me
          </span>
        </motion.h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
