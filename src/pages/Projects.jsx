import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
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
    title: "TraceOps API",
    description:
      "A high-performance, self-hosted API Gateway and Real-Time Telemetry Platform featuring distributed Redis sliding-window rate limiting, SSRF defense engine, and sub-millisecond reverse proxying.",
    image: "/assets/projects/traceops.png",
    link: "https://traceops-api.vercel.app/",
    github: "https://github.com/Flames004/traceops-api",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Next.js 14",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tutonar",
    description:
      "A modern full-stack educational platform connecting tutors with students, featuring dynamic tutor profiles, student inquiry workflows, interactive analytics, and Razorpay payment integration.",
    image: "/assets/projects/tutonar.png",
    link: "https://tutonar.com",
    github: null,
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Recharts",
    ],
  },
  {
    title: "EduGenie",
    description:
      "An AI-powered learning platform to transform your documents into interactive learning experiences for smarter study.",
    image: "/assets/projects/project_5.gif",
    link: "https://edu-genie-ai.vercel.app/",
    github: "https://github.com/Flames004/Edu-Genie",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
    ],
  },
];

const moreProjects = [
  {
    title: "Eco Pulse",
    description:
      "A carbon footprint tracking application that helps users monitor and reduce emissions from travel and electronics with AI-powered recommendations.",
    link: null,
    github: "https://github.com/Flames004/EcoPulse",
    tech: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Maps API",
      "OpenAI",
    ],
    status: "New",
  },
  {
    title: "Algo Pulse",
    description:
      "An interactive platform for learning algorithms through visualizations and coding challenges.",
    link: "https://algo-pulse-beta.vercel.app/",
    github: "https://github.com/Flames004/algo-pulse",
    tech: ["React", "TypeScript", "Tailwind CSS", "Canvas"],
    status: "Interactive",
  },
  {
    title: "Post Pilot",
    description:
      "AI-powered social media content generation platform to create engaging posts effortlessly.",
    link: "https://post-pilot-sable.vercel.app/",
    github: "https://github.com/Flames004/Post-Pilot",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini AI",
    ],
    status: "AI",
  },
  {
    title: "Code Canvas",
    description:
      "A lightweight code editor like CodePen to write, preview, and share HTML, CSS, and JS.",
    link: "https://codecanvas01.netlify.app/",
    github: "https://github.com/Flames004/Code-Canvas",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    status: "Featured",
  },
];

const ProjectMedia = ({ src, title }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full aspect-video min-h-[220px] sm:min-h-[260px] bg-gradient-to-br from-zinc-100 via-zinc-200/60 to-zinc-100 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-500 dark:text-red-400 flex items-center justify-center mb-3 shadow-inner">
          <FaLaptopCode className="text-2xl" />
        </div>
        <span className="text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-200">
          {title}
        </span>
        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200/80 dark:bg-zinc-700/80 text-zinc-600 dark:text-zinc-300">
          Media Preview Coming Soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      onError={() => setHasError(true)}
      className="w-full h-auto object-cover border border-zinc-300 dark:border-zinc-700 rounded-md"
    />
  );
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Featured":
      return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Popular":
      return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
    case "Interactive":
    case "Updated":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
    case "New":
      return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "AI":
      return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
    default:
      return "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400";
  }
};

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
                <ProjectMedia src={project.image} title={project.title} />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
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
                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 text-sm sm:text-md font-semibold border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out active:scale-95"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 text-sm sm:text-md font-semibold border-2 border-zinc-600 dark:border-zinc-300 text-zinc-700 dark:text-zinc-300 rounded-md hover:bg-zinc-600 hover:text-white dark:hover:bg-zinc-300 dark:hover:text-black transition-all duration-300 ease-in-out active:scale-95"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </a>
                  )}
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
            className="px-8 py-3 text-sm sm:text-md font-medium border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
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
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(
                        project.status
                      )}`}
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
                    {(project.link || project.github) && (
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-700">
                        <div className="flex gap-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 transition-colors duration-200"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                              Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200"
                            >
                              <FaGithub className="text-xs" />
                              Source
                            </a>
                          )}
                        </div>
                      </div>
                    )}
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
            href="https://github.com/Flames004"
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
