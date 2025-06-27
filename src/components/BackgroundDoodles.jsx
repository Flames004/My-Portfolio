import React from "react";
import { motion } from "framer-motion";

const doodlesByRoute = {
  "/": [
    { id: "c1", top: "10%", left: "8%", size: "w-20 h-20" },
    { id: "c2", bottom: "9%", left: "30%", size: "w-36 h-36" },
    { id: "c3", top: "30%", right: "10%", size: "w-44 h-44" },
  ],
  "/about": [
    { id: "c1", top: "5%", right: "10%", size: "w-22 h-22" },
    { id: "c2", top: "45%", left: "5%", size: "w-36 h-36" },
    { id: "c3", bottom: "3%", right: "7%", size: "w-40 h-40" },
  ],
  "/projects": [
    { id: "c1", top: "8%", left: "20%", size: "w-36 h-36" },
    { id: "c2", bottom: "10%", left: "5%", size: "w-20 h-20" },
    { id: "c3", top: "40%", right: "3%", size: "w-18 h-18" },
  ],
  "/techstack": [
    { id: "c1", top: "15%", left: "10%", size: "w-16 h-16" },
    { id: "c2", bottom: "5%", right: "5%", size: "w-36 h-36" },
    { id: "c3", top: "10%", right: "30%", size: "w-24 h-24" },
  ],
  "/contact": [
    { id: "c1", top: "15%", right: "20%", size: "w-22 h-22" },
    { id: "c2", bottom: "12%", right: "10%", size: "w-20 h-20" },
    { id: "c3", top: "40%", left: "5%", size: "w-44 h-44" },
  ],
};

const BackgroundDoodles = ({ route }) => {
  const doodles = doodlesByRoute[route] || [];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {doodles.map((item) => (
        <motion.img
          key={item.id}
          layoutId={item.id}
          src="/assets/doodles/cloud.png"
          alt=""
          className={`absolute opacity-30 pointer-events-none select-none transition-opacity duration-1000 animate-float dark:invert dark:brightness-200 ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default BackgroundDoodles;
