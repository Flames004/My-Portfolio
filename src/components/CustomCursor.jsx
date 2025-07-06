import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext"; // optional if using custom theme context

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, input, .cursor-hover");
    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      <img
        src={
          isHovering
            ? theme === "dark"
              ? "/assets/cursor/katana-hover-dark.ani"
              : "/assets/cursor/katana_hover.png"
            : theme === "dark"
            ? "/assets/cursor/katana-dark.cur"
            : "/assets/cursor/katana-extra.png"
        }
        alt="cursor"
        className="pointer-events-none fixed z-[9999] w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
