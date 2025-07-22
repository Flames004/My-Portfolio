import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-t border-zinc-200 dark:border-zinc-700 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Deepak Shukla
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <span>📍</span>
              <span>India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#home" className="block text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                Projects
              </a>
              <a href="#techstack" className="block text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                Tech Stack
              </a>
              <a href="#contact" className="block text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                © {currentYear} Deepak Shukla. All rights reserved.
              </p>
              <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1">
                Made with ❤️ by Deepak • Powered by React & Passion
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <span>🚀</span>
              <span>Built with React, Tailwind CSS & Framer Motion</span>
            </div>
          </div>
        </div>

        {/* Fun Quote */}
        <div className="text-center mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-xs text-zinc-400 dark:text-zinc-600 italic">
            "The future belongs to those who believe in the beauty of their dreams" ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
