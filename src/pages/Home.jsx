import React from "react";
import { useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import { logVisit } from "../logVisit";
import { useVisitCount } from "../useVisitCount";
import VisitorCount from "../components/VisitorCount";

const Home = () => {
  const visitCount = useVisitCount();

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
            A frontend developer driven by a passion for clean, dynamic
            interfaces. I design and build responsive, high-impact user
            experiences that deliver precision, personality, and performance —
            one pixel at a time.
          </p>

          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block border-2 border-black dark:border-white px-6 py-2 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-transform duration-200 font-semibold"
            >
              🔥 Enter My World
            </Link>
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
      <VisitorCount />
    </section>
  );
};

export default Home;
