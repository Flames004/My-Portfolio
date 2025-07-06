import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [theme, setTheme] = useState("light");

  const cursorSize = 32;

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPos({ x: clientX, y: clientY });
      setTrail((prev) => [...prev.slice(-10), { x: clientX, y: clientY, id: crypto.randomUUID() }]);
    };

    const handleHover = (e) => {
      setIsHovering(!!e.target.closest("a, button, input, textarea, select, label"));
    };

    updateTheme();
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHover);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHover);
      observer.disconnect();
    };
  }, []);

  const cursorImage = isHovering
    ? `/assets/cursor_2/katana-hand-${theme}.png`
    : `/assets/cursor_2/katana-${theme}.png`;

  return (
    <>
      {/* Custom cursor */}
      <img
        src={cursorImage}
        alt="cursor"
        style={{
          position: "fixed",
          top: pos.y - cursorSize / 2,
          left: pos.x - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          pointerEvents: "none",
          zIndex: 9999,
          // mixBlendMode:"lighten",
        }}
      />

      {/* Trailing particles */}
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          style={{
            position: "fixed",
            top: dot.y,
            left: dot.x,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: theme === "dark" ? "#fff" : "#000",
            opacity: (index + 1) / trail.length,
            transform: "translate(-50%, -50%)",
            zIndex: 9998,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
