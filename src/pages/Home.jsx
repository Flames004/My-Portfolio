import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import AnimatedText from "../components/AnimatedText";
import FlameEmbers from "../components/FlameEmbers";
import { logVisit } from "../logVisit";

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      logVisit();
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-28 px-4 md:px-10 pb-16 bg-transparent flex items-center justify-center overflow-hidden">
      {/* Subtle Floating Flame Embers */}
      <FlameEmbers />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left - Text Panel */}
        <div className="relative w-full md:w-2/3 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl shadow-2xl p-8 sm:p-10 text-center md:text-left overflow-hidden">
          {/* Subtle Ambient Flame Glow inside card */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-red-500/10 dark:bg-red-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-zinc-900 dark:text-white">
            <div className="flex items-center">
              I'm <AnimatedText />
            </div>
            but you can call me{" "}
            <span className="text-red-600 dark:text-red-400">Flames.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I break down complex architectures and build them back up into fast,
            reliable software. From low-latency API gateways and distributed
            caching to the interfaces people actually enjoy using — I engineer
            systems that run solid under the hood and feel effortless on the surface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/projects"
              className="group relative px-6 py-2.5 border-2 border-red-500 dark:border-red-400 rounded-lg font-semibold text-red-500 dark:text-red-400 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
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
                className="group relative px-4 py-2.5 border-2 border-zinc-900 dark:border-zinc-100 rounded-lg font-medium text-zinc-900 dark:text-zinc-100 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
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
                className="group relative px-4 py-2.5 border-2 border-blue-600 rounded-lg font-medium text-blue-600 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
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

        {/* Right - Avatar with Ambient Glow & Soft Bottom Fade */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Ambient Flame Glow Backdrop */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-red-600/25 via-orange-500/15 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse"></div>

          {/* Large screen avatar with smooth bottom fade */}
          <img
            src="/avatar4.png"
            alt="avatar"
            className="relative z-10 hidden md:block max-w-[400px] lg:max-w-[450px] w-full h-auto transition-transform duration-300 hover:scale-105 drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
          />

          {/* Small screen avatar (below md) */}
          <img
            src="/avatar4.png"
            alt="mobile avatar"
            className="relative z-10 block md:hidden max-w-[250px] sm:max-w-[260px] w-full h-auto transition-transform duration-300 hover:scale-105 rounded-full border-4 border-zinc-900 dark:border-zinc-100 p-1 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
