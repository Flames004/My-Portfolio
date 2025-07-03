import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="min-h-screen pt-28 px-6 md:px-20 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto space-y-32 flex-col flex">
        {/* About Me */}
        <motion.div
          className="relative flex flex-col md:flex-row items-start gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-10 text-zinc-900 dark:text-white"
            >
              <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
                About Me
              </span>
            </motion.h1>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I'm Deepak Shukla, a frontend developer currently pursuing a
              B.Tech in Computer Science. With a passion for clean UI and
              thoughtful user experiences, I specialize in building modern,
              responsive web interfaces and websites.
            </p>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/about/hello3.png"
              alt="About Me Graphic"
              className="w-[280px] max-w-full opacity-90 object-contain"
            />
          </div>
        </motion.div>

        {/* My Philosophy */}
        <motion.div
          className="relative flex flex-col md:flex-row-reverse items-start gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-blue-500 mr-3 rounded"></span>
              My Philosophy
            </h3>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              My approach to development is shaped by a love for design systems,
              meaningful interaction, and minimal aesthetics. I believe that
              great digital products are born when functionality meets emotion —
              and I strive to bridge that gap in every line of code I write.
            </p>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/about/bulb.png"
              alt="Philosophy Graphic"
              className="w-[220px] max-w-full opacity-90 object-contain"
            />
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="relative flex flex-col md:flex-row items-start gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-green-500 mr-3 rounded"></span>
              Education
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-2">
              <span className="font-medium">
                B.Tech in Computer Science & Engineering
              </span>{" "}
              — Kamla Nehru Institute of Technology
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg">
              Over the course of my degree, I've explored key areas such as Data
              Structures & Algorithms, Operating Systems, Computer Networks,
              Database Management Systems, Software Engineering, and Artificial
              Intelligence. These subjects have helped me build a strong
              foundation in both theoretical computer science and practical
              software development.
            </p>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/about/education.png"
              alt="Education Graphic"
              className="w-[300px] max-w-full object-contain"
            />
          </div>
        </motion.div>

        {/* What I Value */}
        <motion.div
          className="relative flex flex-col md:flex-row-reverse items-start gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-purple-500 mr-3 rounded"></span>
              What I Value
            </h3>
            <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 space-y-1 text-lg">
              <li>Design-first thinking with scalable UI architecture</li>
              <li>Writing clean, maintainable and robust code</li>
              <li>Collaboration, consistency, and curiosity</li>
              <li>Balancing creative freedom with purposeful intent</li>
            </ul>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/about/value.png"
              alt="Values Graphic"
              className="w-[250px] max-w-full opacity-80 object-contain"
            />
          </div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          className="relative flex flex-col md:flex-row items-start gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-yellow-500 mr-3 rounded"></span>
              My Approach
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg">
              I believe that good solutions begin with understanding the problem
              from multiple angles. I break down complex challenges into
              manageable parts, look for underlying patterns, and build step by
              step — with clarity and intent. Whether it’s debugging a layout or
              mapping a new feature, I rely on structured thought and consistent
              execution.
            </p>
          </div>

          <div className="hidden md:flex md:w-2/5 justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/assets/about/approach.png"
              alt="Approach Graphic"
              className="w-[240px] max-w-full opacity-90 object-contain"
            />
          </div>
        </motion.div>

        {/* Inspired + Beyond */}
        <motion.div
          className="text-center w-full md:w-4/5 self-center mb-32"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-12 rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md p-8 shadow-lg shadow-zinc-500/30 dark:shadow-black/50">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
              How I Stay Inspired
            </h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Creative inspiration, for me, comes from rhythm, contrast, and
              stories — in code, in visuals, and even outside of tech.
            </p>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent blur-2xl rounded-full -z-10"></div>
          </div>

          <div className="relative rounded-2xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md p-8 shadow-lg shadow-zinc-500/30 dark:shadow-black/50">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
              Beyond the Screen
            </h3>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Outside of development, I find balance through a variety of
              passions — from sketching illustrations to clearing my mind with
              chess and anime. I also enjoy volleyball and working out.
            </p>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr from-blue-600/20 to-transparent blur-2xl rounded-full -z-10"></div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-semibold italic text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            “ Power isn’t determined by your size, but the size of your heart
            and dreams. ”
          </p>
          <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-500">
            — Monkey D. Luffy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
