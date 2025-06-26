import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SKILLS", path: "/techstack" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="shadow-md sticky top-0 bg-white dark:bg-zinc-900 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center uppercase font-bold tracking-widest">
        <Link
          to="/"
          className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
        >
          deepak.dev
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:underline underline-offset-4 decoration-2 ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-blue-400"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf" // Place your resume in /public folder as 'resume.pdf'
            download
            className="hidden md:block border-2 border-black dark:border-white px-3 py-1 rounded shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200 text-sm"
          >
            📜 Take My Resume, Senpai!
          </a>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 border-t-2 border-black dark:border-white">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block hover:underline uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Resume Button */}
          <div className="text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-block animate-bounce border-2 border-black dark:border-white px-4 py-2 rounded text-sm shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              📜 Take My Resume, Senpai!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
