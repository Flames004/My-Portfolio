import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed cursor-pointer hover:scale-110 bottom-6 right-6 z-50 p-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all duration-300 dark:bg-red-400 dark:hover:bg-red-500"
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTop;
