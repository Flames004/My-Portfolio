import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const mainProjects = [
  {
    title: "Algo Pulse",
    description:
      "An interactive platform for learning algorithms through visualizations and coding challenges.",
    image: "/assets/projects/project_4.gif",
    link: "https://algo-pulse-beta.vercel.app/",
    github: "https://github.com/Flames004/algo-pulse",
    tech: ["React", "TypeScript", "Tailwind CSS", "Canvas"],
  },
  {
    title: "Emply Connect",
    description:
      "A sleek employee management system for tracking data, performance, and analytics in real-time.",
    image: "/assets/projects/project_1.gif",
    link: "https://emply-connect.netlify.app/",
    github: "https://github.com/Flames004/Emply-Connect",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Code Canvas",
    description:
      "A lightweight code editor like CodePen to write, preview, and share HTML, CSS, and JS.",
    image: "/assets/projects/project_2.gif",
    link: "https://codecanvas01.netlify.app/",
    github: "https://github.com/Flames004/Code-Canvas",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
  },
];

const moreProjects = [
  {
    title: "TetriSpin",
    description:
      "A modern take on the classic Tetris game with smooth animations and responsive design.",
    link: "https://tetri-spin.netlify.app/",
    github: "https://github.com/Flames004/TetriSpin",
    tech: ["JavaScript", "Canvas API", "Local Storage", "HTML5", "CSS3"],
    status: "Featured",
  },
  {
    title: "Movie Pedia",
    description:
      "Search movies and get instant details and ratings using TMDB API.",
    link: "https://moviepedia-search.netlify.app/",
    github: "https://github.com/Flames004/Movie-Pedia",
    tech: ["JavaScript", "Tailwind CSS", "Movie Database API", "HTML5"],
    status: "Popular",
  },
  {
    title: "Password Generator",
    description:
      "Generates strong passwords based on length and complexity options with security features.",
    link: "https://give-me-password.netlify.app/",
    github: "https://github.com/Flames004/give-me-password",
    tech: ["JavaScript", "Tailwind CSS", "HTML5", "Clipboard API"],
    status: "Updated",
  },
  {
    title: "To Do List App",
    description:
      "Minimal todo tracker with dark mode, categories, and local storage persistence.",
    link: "https://flames004.github.io/To-Do-List-App/",
    github: "https://github.com/Flames004/To-Do-List-App",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Responsive"],
    status: "Classic",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="min-h-screen pt-28 px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-transparent text-black dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="relative font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-mono mb-8 text-zinc-900 dark:text-white">
            <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
              Projects
            </span>
          </h1>
        </div>

        {/* Main Projects */}
        <div className="space-y-16">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover border border-zinc-300 dark:border-zinc-700 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 text-sm sm:text-md font-semibold border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out active:scale-95"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 text-sm sm:text-md font-semibold border-2 border-zinc-600 dark:border-zinc-300 text-zinc-700 dark:text-zinc-300 rounded-md hover:bg-zinc-600 hover:text-white dark:hover:bg-zinc-300 dark:hover:text-black transition-all duration-300 ease-in-out active:scale-95"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-20">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 text-sm sm:text-md font-medium border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </div>

        {/* More Projects Grid */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {moreProjects.map((project, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  className="group relative bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        project.status === "Featured"
                          ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : project.status === "Popular"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : project.status === "Updated"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-2 pr-16">
                        {project.title}
                      </h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 transition-colors duration-200"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200"
                        >
                          <FaGithub className="text-xs" />
                          Source
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Profile Button - Centrally Aligned at Bottom */}
        <div className="text-center mt-16">
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-lg font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            <span>View All Projects</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
