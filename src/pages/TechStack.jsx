import React from "react";

const tech = {
  Languages: [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "C", icon: "https://cdn.simpleicons.org/c" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
    { name: "Java", icon: "https://api.iconify.design/logos:java.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
    { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
  ],
  "Tools & Platforms": [
    {
      name: "VS Code",
      icon: "https://api.iconify.design/vscode-icons:file-type-vscode.svg",
    },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    {
      name: "Android Studio",
      icon: "https://cdn.simpleicons.org/androidstudio",
    },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql",
    },
    {
      name: "Supabase",
      icon: "https://cdn.simpleicons.org/supabase",
    },
    {
      name: "Clerk",
      icon: "https://cdn.simpleicons.org/clerk",
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
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-6 py-4 rounded-md shadow hover:scale-105 transition-transform duration-200 w-36 h-24"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden text-ellipsis text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
