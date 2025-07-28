import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const techStack = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    backend: ["Node.js", "Express", "MongoDB", "SupaBase"],
    tools: ["Firebase", "Git", "Clerk", "Postman"],
  };

  return (
    <footer className="relative bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section with Logo */}
            <div className="lg:col-span-2 space-y-5">
                <Link to="/" className="flex-shrink-0 lg:absolute lg:left-20">
                  <img
                    src="/logo.svg"
                    alt="Deepak Shukla Logo"
                    className="h-40 w-40 transition-all duration-300 hover:scale-110 hover:rotate-3"
                  />
                </Link>
              <div className="flex items-center space-x-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Deepak Shukla
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-500 font-semibold">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                Crafting modern web applications with clean code and exceptional
                user experiences. Passionate about creating scalable solutions
                that make a difference.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    Available for opportunities
                  </span>
                </div>
                <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-600"></div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">
                  Remote & On-site
                </span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-5">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Quick Links
                </h4>
                <div className="w-8 h-0.5 bg-red-500 rounded-full"></div>
              </div>

              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                  >
                    <div className="w-1 h-1 bg-zinc-400 dark:bg-zinc-500 rounded-full group-hover:bg-red-500 transition-colors duration-200"></div>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Tech Stack */}
            <div className="space-y-5">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Technologies
                </h4>
                <div className="w-8 h-0.5 bg-red-500 rounded-full"></div>
              </div>

              <div className="space-y-4">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category} className="space-y-2">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:border-red-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {skills.length > 3 && (
                        <span className="px-2 py-1 text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/50 rounded border border-dashed border-zinc-300 dark:border-zinc-600">
                          +{skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left: Copyright & Social */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                © {new Date().getFullYear()} Deepak Shukla. All rights reserved.
              </p>
              <SocialLinks />
            </div>

            {/* Right: Contact & Made with */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-500">
                <span>Mail:</span>
                <span className="hover:text-red-500 transition-colors duration-200">
                  deepakshukla2442@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-2 px-3 py-1.5 border border-zinc-300 dark:border-zinc-600 rounded-full bg-zinc-50 dark:bg-zinc-800/50 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-200">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Made with
                </span>
                <span className="text-red-500 text-sm">🔥</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  by Flames
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
