import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Emply Connect",
    description:
      "A sleek employee management system for tracking data, performance, and analytics in real-time.",
    image: "/assets/projects/project_1.gif",
    link: "https://emply-connect.netlify.app/",
  },
  {
    title: "Code Canvas",
    description:
      "A lightweight code editor like CodePen to write, preview, and share HTML, CSS, and JS.",
    image: "/assets/projects/project_2.gif",
    link: "https://codecanvas01.netlify.app/",
  },
  {
    title: "TetriSpin",
    description:
      "Modern version of Tetris using Canvas API. Rotate, stack, and clear rows in this retro-style game.",
    image: "/assets/projects/project_3.gif",
    link: "https://tetri-spin.netlify.app/",
  },
];

const moreProjects = [
  {
    title: "Score Board",
    description: "A live scoring tracker app with custom team names and timer.",
    link: "https://flames004.github.io/Score-Board/",
  },
  {
    title: "Movie Pedia",
    description: "Search movies and get instant details and ratings.",
    link: "https://moviepedia-search.netlify.app/",
  },
  {
    title: "Password Generator",
    description:
      "Generates strong passwords based on length and complexity options.",
    link: "https://give-me-password.netlify.app/",
  },
  {
    title: "To Do List App",
    description: "Minimal todo tracker with dark mode and local storage.",
    link: "https://flames004.github.io/To-Do-List-App/",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="min-h-screen pt-28 px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h1 className="relative font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-mono mb-20 text-center text-zinc-900 dark:text-white">
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Projects
          </span>
        </h1>

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
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-2 text-sm sm:text-md font-semibold border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out active:scale-95"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 text-sm sm:text-md font-medium border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
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
                  className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <h4 className="text-md sm:text-lg font-bold text-zinc-800 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-red-500 hover:text-red-600"
                  >
                    View ➤
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
