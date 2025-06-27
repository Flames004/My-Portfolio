import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    
      <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-12 text-zinc-900 dark:text-white text-left"
          >
            <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
              Projects
            </span>
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow hover:scale-[1.02] transition"
              >
                <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  This is a sample description for project {i}. It's placed here just to test layout and page transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Projects;
