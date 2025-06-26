import React from "react";


const Contact = () => {
  return (
    
      <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block mb-10">
            Contact Me
          </h2>
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
