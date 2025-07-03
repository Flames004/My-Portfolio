import React from "react";
import { motion } from "framer-motion";

const tech = {
  Languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python",
      link: "https://www.python.org/",
    },
    {
      name: "C",
      icon: "https://cdn.simpleicons.org/c",
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/cplusplus",
      link: "https://en.cppreference.com/w/",
    },
    {
      name: "Java",
      icon: "https://api.iconify.design/logos:java.svg",
      link: "https://www.java.com/",
    },
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactjs.org/",
    },
    {
      name: "React Native",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactnative.dev/",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs",
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.simpleicons.org/bootstrap",
      link: "https://getbootstrap.com/",
    },
  ],
  "Tools & Platforms": [
    {
      name: "VS Code",
      icon: "https://api.iconify.design/vscode-icons:file-type-vscode.svg",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      link: "https://git-scm.com/",
    },
    {
      name: "Figma",
      icon: "https://cdn.simpleicons.org/figma",
      link: "https://www.figma.com/",
    },
    {
      name: "Android Studio",
      icon: "https://cdn.simpleicons.org/androidstudio",
      link: "https://developer.android.com/studio",
    },
    {
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql",
      link: "https://www.mysql.com/",
    },
    {
      name: "Supabase",
      icon: "https://cdn.simpleicons.org/supabase",
      link: "https://supabase.com/",
    },
    {
      name: "Clerk",
      icon: "https://cdn.simpleicons.org/clerk",
      link: "https://clerk.dev/",
    },
  ],
  "AI & Productivity Tools": [
    {
      name: "ChatGPT / OpenAI",
      icon: "https://cdn.simpleicons.org/openai",
      link: "https://openai.com/chatgpt",
    },
    {
      name: "GitHub Copilot",
      icon: "https://cdn.simpleicons.org/githubcopilot",
      link: "https://github.com/features/copilot",
    },
    {
      name: "Replit",
      icon: "https://cdn.simpleicons.org/replit",
      link: "https://replit.com/",
    },
    {
      name: "Canva",
      icon: "https://cdn.simpleicons.org/canva",
      link: "https://www.canva.com/",
    },
    {
      name: "Notion",
      icon: "https://cdn.simpleicons.org/notion",
      link: "https://www.notion.so/",
    },
    {
      name: "Google Gemini",
      icon: "https://cdn.simpleicons.org/googlegemini",
      link: "https://deepmind.google/technologies/gemini/",
    },
  ],
};

const TechStack = () => {
  return (
    <section className="min-h-screen pt-28 px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight font-mono mb-12 text-zinc-900 dark:text-white text-left"
        >
          <span className="relative inline-block px-4 py-2 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:h-1 before:bg-red-500 before:rounded">
            Tech Arsenal
          </span>
        </motion.h1>

        {Object.entries(tech).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center bg-neutral-100 dark:bg-zinc-800 px-6 py-4 rounded-md shadow-md hover:scale-105 transition-transform duration-200 w-36 h-24 cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <span className="text-sm sm:opacity-100 text-zinc-700 dark:text-zinc-300 mt-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden text-ellipsis text-center">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
