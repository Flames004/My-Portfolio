import React, { useMemo } from "react";
import { motion } from "framer-motion";

const FlameEmbers = () => {
  // Generate a fixed set of randomized particles once
  const embers = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 3) + 2, // 2px to 5px
      left: `${Math.floor(Math.random() * 100)}%`,
      duration: Math.random() * 5 + 6, // 6s to 11s
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 50, // -25px to +25px horizontal drift
      color:
        i % 3 === 0
          ? "rgba(239, 68, 68, 0.9)" // Red
          : i % 3 === 1
          ? "rgba(249, 115, 22, 0.95)" // Orange
          : "rgba(251, 191, 36, 0.85)", // Amber
      glow:
        i % 2 === 0
          ? "0 0 8px rgba(239, 68, 68, 0.9)"
          : "0 0 10px rgba(249, 115, 22, 0.9)",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full"
          style={{
            width: ember.size,
            height: ember.size,
            left: ember.left,
            bottom: "-20px",
            backgroundColor: ember.color,
            boxShadow: ember.glow,
          }}
          animate={{
            y: [0, -900],
            x: [0, ember.drift, -ember.drift, ember.drift * 0.5],
            opacity: [0, 0.9, 0.4, 0.85, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.3],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FlameEmbers;

