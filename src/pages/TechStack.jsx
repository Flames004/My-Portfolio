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
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
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
  "Frontend, CMS & Mobile": [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs",
      link: "https://nextjs.org/",
    },
    {
      name: "React Native",
      icon: "https://cdn.simpleicons.org/react",
      link: "https://reactnative.dev/",
    },
    {
      name: "Expo",
      icon: "https://cdn.simpleicons.org/expo",
      link: "https://expo.dev/",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      link: "https://tailwindcss.com/",
    },
    {
      name: "WordPress",
      icon: "https://cdn.simpleicons.org/wordpress",
      link: "https://wordpress.org/",
    },
    {
      name: "Shopify",
      icon: "https://cdn.simpleicons.org/shopify",
      link: "https://www.shopify.com/",
    },
  ],
  "Backend & Databases": [
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: "https://cdn.simpleicons.org/express",
      link: "https://expressjs.com/",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Redis",
      icon: "https://cdn.simpleicons.org/redis",
      link: "https://redis.io/",
    },
    {
      name: "Neon Database",
      icon: "https://cdn.simpleicons.org/neon",
      link: "https://neon.tech/",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb",
      link: "https://www.mongodb.com/",
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
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase",
      link: "https://firebase.google.com/",
    },
  ],
  "Cloud, DevOps & Services": [
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker",
      link: "https://www.docker.com/",
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.simpleicons.org/githubactions",
      link: "https://github.com/features/actions",
    },
    {
      name: "Cloudflare",
      icon: "https://cdn.simpleicons.org/cloudflare",
      link: "https://www.cloudflare.com/",
    },
    {
      name: "Hostinger",
      icon: "https://cdn.simpleicons.org/hostinger",
      link: "https://www.hostinger.com/",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      link: "https://git-scm.com/",
    },
    {
      name: "Razorpay",
      icon: "https://cdn.simpleicons.org/razorpay",
      link: "https://razorpay.com/",
    },
    {
      name: "Zapier",
      icon: "https://cdn.simpleicons.org/zapier",
      link: "https://zapier.com/",
    },
    {
      name: "n8n",
      icon: "https://cdn.simpleicons.org/n8n",
      link: "https://n8n.io/",
    },
    {
      name: "Clerk",
      icon: "https://cdn.simpleicons.org/clerk",
      link: "https://clerk.dev/",
    },
  ],
  "Developer Tools & Design": [
    {
      name: "Postman",
      icon: "https://cdn.simpleicons.org/postman",
      link: "https://www.postman.com/",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Android Studio",
      icon: "https://cdn.simpleicons.org/androidstudio",
      link: "https://developer.android.com/studio",
    },
    {
      name: "Figma",
      icon: "https://cdn.simpleicons.org/figma",
      link: "https://www.figma.com/",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      link: "https://www.canva.com/",
    },
    {
      name: "Notion",
      icon: "https://cdn.simpleicons.org/notion",
      link: "https://www.notion.so/",
    },
    {
      name: "VAPI",
      icon: "https://vapi.ai/favicon.ico",
      link: "https://vapi.ai/",
    },
    {
      name: "Replit",
      icon: "https://cdn.simpleicons.org/replit",
      link: "https://replit.com/",
    },
  ],
};

const TechStack = () => {
  return (
    <section className="min-h-screen pt-28 px-6 md:px-16 py-20 bg-transparent text-black dark:text-white">
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
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-6 bg-red-500 rounded"></span>
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center bg-neutral-100 dark:bg-zinc-800 px-6 py-4 rounded-md shadow-md hover:scale-105 transition-transform duration-200 w-full min-h-[96px] cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-2 text-center break-words leading-tight">
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
