import React from "react";

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
    { name: "C", icon: "https://cdn.simpleicons.org/c", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/cplusplus",
      link: "https://isocpp.org/",
    },
    {
      name: "Java",
      icon: "https://api.iconify.design/logos:java.svg",
      link: "https://dev.java/",
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactjs.org/",
    },
    {
      name: "React Native",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactnative.dev/",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      link: "https://tailwindcss.com/docs",
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
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
      link: "https://github.com/",
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
};

const TechStack = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-red-500 inline-block mb-12">
          Tech Arsenal
        </h2>

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
                  className="group flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-6 py-4 rounded-md shadow hover:scale-105 transition-transform duration-200 w-36 h-24 cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden text-ellipsis text-center">
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
