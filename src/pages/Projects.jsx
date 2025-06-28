import React, { useState } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const mainProjects = [
  {
    title: "Emply Connect",
    description:
      "This Employee Management System is a sleek, user-friendly tool for managing employee data, tracking performance, and streamlining HR tasks. Designed for modern workplaces, it boosts efficiency with real-time updates and smart analytics.",
    image: "/assets/projects/project_1.gif",
    link: "https://emply-connect.netlify.app/",
  },
  {
    title: "Code Canvas",
    description:
      "It is a lightweight CodePen clone that lets users write and preview HTML, CSS, and JavaScript code live in the browser. Built for developers, students, and hobbyists to prototype, experiment, and share code snippets with ease.",
    image: "/assets/projects/project_2.gif",
    link: "https://codecanvas01.netlify.app/",
  },
  {
    title: "TetriSpin",
    description:
      "It is a modern version of Tetris built using HTML, CSS, JavaScript, and the Canvas API. Rotate, move, and stack pieces to clear rows and score points in this fast-paced, dynamic game.",
    image: "/assets/projects/project_3.gif",
    link: "https://tetri-spin.netlify.app/",
  },
];

const moreProjects = [
  "Score Board",
  "Movie Pedia",
  "To Do List App",
  "Password Generator",
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="min-h-screen pt-28 px-6 md:px-20 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h1 className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-20 text-center text-zinc-900 dark:text-white">
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Projects
          </span>
        </h1>

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
              <div className="relative overflow-hidden rounded-lg shadow-lg md:w-1/2 hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover border-zinc-300 dark:border-zinc-700 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 mt-2 text-md font-semibold border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out active:scale-95"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-28 text-center">
          <h3 className="text-2xl font-semibold mb-6">More Projects</h3>
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {moreProjects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-md shadow text-center hover:scale-105 transition-transform duration-200"
                >
                  <h4 className="text-lg font-medium text-zinc-800 dark:text-white">
                    {proj}
                  </h4>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition duration-300 cursor-pointer"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
