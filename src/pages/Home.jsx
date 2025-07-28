import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import AnimatedText from "../components/AnimatedText";
import { logVisit } from "../logVisit";

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      logVisit();
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <section className="min-h-screen pt-28 px-4 md:px-10 pb-16 bg-transparent flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left - Text Panel */}
        <div className="w-full md:w-2/3 bg-gradient-to-br from-white via-zinc-100 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 border-4 border-black dark:border-white rounded-xl shadow-xl p-8 sm:p-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-zinc-900 dark:text-white">
            <div className="flex items-center">
              I'm <AnimatedText />
            </div>
            but you can call me{" "}
            <span className="text-red-600 dark:text-red-400">Flames.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
            A full-stack developer driven by a passion for clean, dynamic
            interfaces. I design and build responsive, high-impact user
            experiences that deliver precision, personality, and performance —
            one pixel at a time.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/projects"
              className="group relative px-6 py-2 border-2 border-red-500 dark:border-red-400 rounded font-semibold text-red-500 dark:text-red-400 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-red-500 dark:bg-red-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                Enter My World
              </span>
            </Link>
            
            <div className="flex items-center gap-3">
              {/* GitHub Button */}
              <a
                href="https://github.com/Flames004"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 border-2 border-zinc-900 dark:border-zinc-100 rounded font-medium text-zinc-900 dark:text-zinc-100 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                title="Visit My GitHub"
              >
                <span className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300">
                  <FaGithub className="text-lg" />
                  GitHub
                </span>
              </a>
              
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/deepak004"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 border-2 border-blue-600 rounded font-medium text-blue-600 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                title="Connect on LinkedIn"
              >
                <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right - Avatar */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Large screen avatar (md and up) */}
          <img
            src="/avatar2.png"
            alt="avatar"
            className="hidden md:block max-w-[400px] lg:max-w-[450px] w-full h-auto transition-transform duration-300 hover:scale-105"
          />

          {/* Small screen avatar (below md) */}
          <img
            src="/avatar3.png"
            alt="mobile avatar"
            className="block md:hidden max-w-[250px] sm:max-w-[260px] w-full h-auto transition-transform duration-300 hover:scale-105 rounded-full border-5 border-black dark:border-white p-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
