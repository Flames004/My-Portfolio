import React from "react";

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block mb-6">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
          I'm Deepak Shukla, a frontend developer currently pursuing a Bachelor
          of Technology in Computer Science. With a passion for clean UI and
          thoughtful user experiences, I specialize in building modern,
          responsive web interfaces and websites.
        </p>

        {/* Dev Philosophy */}
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
          My approach to development is shaped by a love for design systems,
          meaningful interaction, and minimal aesthetics. I believe that great
          digital products are born when functionality meets emotion — and I
          strive to bridge that gap in every line of code I write.
        </p>

        {/* Education Summary */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="font-medium">B.Tech in Computer Science</span> —
            Kamla Nehru Institute of Technology
            <br />
            2022–2026 | CGPA: 8.0
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Over the course of my degree, I've explored key areas such as Data
            Structures & Algorithms, Operating Systems, Computer Networks,
            Database Management Systems, Software Engineering, and Artificial
            Intelligence. These subjects have helped me build a strong
            foundation in both theoretical computer science and practical
            software development.
          </p>
        </div>

        {/* Skills / Interests */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">What I Value</h3>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>Design-first thinking with scalable UI architecture</li>
            <li>Writing clean, maintainable and robust code</li>
            <li>Collaboration, consistency, and curiosity</li>
            <li>
              Balancing creative freedom with purposeful intent in every project
            </li>
          </ul>
        </div>

        {/* My Approach to Problem-Solving */}
        <div className="mb-8 mt-10">
          <h3 className="text-2xl font-semibold mb-2">
            My Approach to Problem-Solving
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            I believe that good solutions begin with understanding the problem
            from multiple angles. I break down complex challenges into
            manageable parts, look for underlying patterns, and build step by
            step — with clarity and intent. Whether it’s debugging a layout or
            mapping a new feature, I rely on structured thought and consistent
            execution.
          </p>
        </div>

        {/* How I Stay Inspired */}
        <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md shadow mt-8">
          <h3 className="text-xl font-semibold mb-2">How I Stay Inspired</h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">
            Creative inspiration, for me, comes from rhythm, contrast, and
            stories — in code, in visuals, and even outside of tech. I often
            sketch to clear my head, take long walks to untangle ideas, and
            revisit meaningful work that pushes the boundaries of form and
            function.
          </p>
        </div>

        {/* Personal Side */}
        <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md shadow mt-8">
          <h3 className="text-xl font-semibold mb-2">Beyond the Screen</h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Outside of development, I find balance through a variety of passions
            — from sketching illustrations to clearing my mind with a game of
            chess. I'm a regular at the volleyball court and the gym, where
            discipline and focus fuel both my fitness and mindset. I also watch
            anime not just for entertainment, but as a source of visual
            storytelling and creative inspiration.
          </p>
        </div>
      </div>
      {/* Inspirational Quote Highlight */}
      <div className="mt-16 text-center px-4">
        <p className="text-2xl md:text-3xl font-semibold italic text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          “Power isn’t determined by your size, but the size of your heart and
          dreams.”
        </p>
        <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-500">
          — Monkey D. Luffy
        </p>
      </div>
    </section>
  );
};

export default About;
