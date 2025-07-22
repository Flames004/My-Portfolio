import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        className={`fixed bottom-20 right-5 z-50 p-3 rounded-full transition-all duration-300 shadow-lg focus:outline-none
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }
        bg-red-500 text-white hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500
        sm:p-2 sm:bottom-16 sm:right-4`}
      >
        <FaArrowUp className="md:text-2xl sm:text-base" />
      </button>
    </div>
  );
};

export default ScrollToTop;
