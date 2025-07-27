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
    frontend: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Next.js", "Express", "FastAPI"],
    database: ["MongoDB", "Firebase", "Supabase"],
  };

  return (
    <footer className="relative bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Main Footer Grid */}
        <div className="py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand & Bio Section - Takes more space */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-4 -ml-8">
                  <div className="flex-shrink-0">
                    <Link to="/" className="block">
                      <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-32 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white">
                      Deepak Shukla
                    </h2>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-lg text-red-500 font-semibold">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base max-w-lg">
                  Crafting digital experiences with modern technologies and creative solutions. 
                  Passionate about clean code, exceptional user experiences, and turning 
                  complex problems into elegant, scalable solutions.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      Available for opportunities
                    </span>
                  </div>
                  <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-600"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">🌍</span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Remote & On-site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Navigation
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              </div>
              
              <nav className="space-y-5">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center space-x-3 text-zinc-600 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Technologies */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Tech Arsenal
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 w-50">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:border-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-300 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                      {skills.length > 3 && (
                        <span className="px-3 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-600">
                          +{skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Let's Build Together
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Have an exciting project in mind? Let's collaborate and bring your innovative 
                  ideas to life with cutting-edge technology and creative solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-zinc-600 dark:text-zinc-300">
                    <span className="text-red-500">📧</span>
                    <span className="font-medium">deepakshukla2442@gmail.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-2">
                  <div className="transform scale-90 origin-left -ml-4 w-3/4">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left space-y-2">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                © {new Date().getFullYear()} Deepak Shukla. All rights reserved.
              </p>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Crafted with passion and precision.
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Built with React, Tailwind CSS & modern web technologies
              </p>
            </div>

            {/* Fun Elements */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Made with</span>
                <span className="text-red-500 animate-pulse text-sm">❤️</span>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">& lots of</span>
                <span className="text-sm">☕</span>
              </div>
              
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-full border border-red-200 dark:border-red-800">
                <span className="text-xs font-medium text-red-600 dark:text-red-400">🎌 Anime enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
