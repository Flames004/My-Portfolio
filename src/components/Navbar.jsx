import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-zinc-900 shadow-md dark:shadow-neutral-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300 w-[160px] sm:w-[180px] md:w-[200px]"
        >
          <AnimatedText />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-7 text-sm lg:text-base">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative group transition-all duration-300 ease-in-out px-1
                    ${
                      isActive
                        ? "text-red-500 dark:text-red-400"
                        : "text-zinc-800 dark:text-zinc-200"
                    }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {!isActive && (
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-red-500 dark:bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                      style={{ transformOrigin: "center" }}
                    ></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block border-2 border-black dark:border-white px-3 py-1 rounded shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200 text-xs lg:text-sm"
          >
            📜 Take My Resume, Senpai!
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`text-xl transition-transform duration-400 hover:-rotate-45 cursor-pointer ${
              isDark ? "text-yellow-400" : "text-gray-800"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-xl text-zinc-800 dark:text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 border-t border-zinc-300 dark:border-zinc-700">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`uppercase block py-1 px-2 text-base font-bold transition duration-200 ${
                      isActive
                        ? "text-red-500 dark:text-red-400"
                        : "text-zinc-800 dark:text-zinc-200 hover:text-red-500 dark:hover:text-red-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="text-center mt-4">
            <a
              href="/resume.pdf"
              download
              className="inline-block border-2 border-black dark:border-white px-4 py-2 rounded text-sm shadow hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
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
