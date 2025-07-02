import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = [
  { text: "Deepak", lang: "English" },
  { text: "दीपक", lang: "Hindi" },
  { text: "দীপক", lang: "Bengali" },
  { text: "દીપક", lang: "Gujarati" },
  { text: "ದೀಪಕ್", lang: "Kannada" },
  { text: "ദീപക്", lang: "Malayalam" },
  { text: "ଦୀପକ", lang: "Oriya" },
  { text: "ਦੀਪਕ", lang: "Punjabi" },
  { text: "தீபக்", lang: "Tamil" },
  { text: "దీపక్", lang: "Telugu" },
  { text: "دیپک", lang: "Urdu" },
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % translations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      title={translations[index].lang}
      className="relative text-2xl w-[120px] h-[35px]"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={translations[index].text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 w-full text-center font-bold hover:text-red-500"
        >
          {translations[index].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
