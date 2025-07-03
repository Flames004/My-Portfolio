import React from "react";
import { motion } from "framer-motion";

const doodlesByRoute = {
  "/": [
    { id: "c1", top: "10%", left: "8%", size: "w-16 sm:w-20 md:w-24" },
    { id: "c2", bottom: "0%", left: "40%", size: "w-28 sm:w-36" },
    { id: "c3", top: "30%", right: "10%", size: "w-32 sm:w-44" },
  ],
  "/about": [
    { id: "c1", top: "5%", right: "10%", size: "w-18 sm:w-22" },
    { id: "c2", top: "45%", left: "5%", size: "w-28 sm:w-36" },
    { id: "c3", bottom: "3%", right: "7%", size: "w-32 sm:w-40" },
  ],
  "/projects": [
    { id: "c1", top: "8%", left: "20%", size: "w-28 sm:w-36" },
    { id: "c2", bottom: "10%", left: "5%", size: "w-16 sm:w-20" },
    { id: "c3", top: "40%", right: "3%", size: "w-14 sm:w-18" },
  ],
  "/techstack": [
    { id: "c1", top: "15%", left: "10%", size: "w-12 sm:w-16" },
    { id: "c2", bottom: "5%", right: "5%", size: "w-28 sm:w-36" },
    { id: "c3", top: "10%", right: "30%", size: "w-20 sm:w-24" },
  ],
  "/contact": [
    { id: "c1", top: "15%", right: "20%", size: "w-18 sm:w-22" },
    { id: "c2", bottom: "12%", right: "10%", size: "w-16 sm:w-20" },
    { id: "c3", top: "40%", left: "5%", size: "w-32 sm:w-44" },
  ],
};

const BackgroundDoodles = ({ route }) => {
  const doodles = doodlesByRoute[route] || [];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {doodles.map((item) => (
        <motion.img
          key={item.id}
          layoutId={item.id}
          src="/assets/doodles/cloud.png"
          alt=""
          className={`absolute pointer-events-none select-none animate-float dark:invert dark:brightness-200 ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            opacity: 0.3,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default BackgroundDoodles;
