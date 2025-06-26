import React from "react";

const doodles = [
  { src: "/assets/doodles/cloud.png", top: "4%", left: "6%", delay: "0s", size: "w-40 h-40" },      // Top left
  { src: "/assets/doodles/cloud.png", top: "16%", right: "10%", delay: "1s", size: "w-36 h-36" },   // Near avatar
  { src: "/assets/doodles/cloud.png", bottom: "2%", right: "4%", delay: "2s", size: "w-44 h-44" }, // Subtle corner
  { src: "/assets/doodles/cloud.png", bottom: "20%", left: "25%", delay: "3s", size: "w-55 h-55" }, // Inside content
];


const BackgroundDoodles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {doodles.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt=""
          className={`${item.size} opacity-20 absolute animate-float filter`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: item.delay,
            filter: "invert(1) brightness(2)"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDoodles;
