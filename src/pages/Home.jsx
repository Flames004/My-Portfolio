import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white dark:bg-zinc-900">
      {/* Text Comic Panel */}
      <div className="w-full md:w-1/2 p-6 border-4 border-black dark:border-white shadow-xl bg-white dark:bg-zinc-800 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          I'm <span className="">Deepak Shukla</span>
          ,<br />
          but you can call me{" "}
          <span className="text-red-600 dark:text-red-400">Flames.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
          A frontend developer driven by a passion for clean, dynamic
          interfaces. I design and build responsive, high-impact user
          experiences that deliver precision, personality, and performance — one
          pixel at a time.
        </p>
        <div className="mt-6">
          <a
            href="/projects"
            className="inline-block border-2 border-black dark:border-white px-6 py-2 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200"
          >
            🔥 Enter My World
          </a>
        </div>
      </div>

      {/* Avatar */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
        <img
          src="/avatar2.png"
          alt="avatar"
          className="max-w-[450px] h-auto hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
