import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = [
  { text: "DEEPAK", lang: "English" },
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
  { text: "ディーパク", lang: "Japanese" },
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
      aria-label={translations[index].lang}
      className="relative w-[120px] sm:w-[140px] md:w-[160px] h-[36px] flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={translations[index].text}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className={`absolute font-bold text-center hover:text-red-500 dark:hover:text-red-400 ${
            translations[index].lang === "English"
              ? "text-3xl sm:text-4xl"
              : "text-xl sm:text-2xl"
          }`}
        >
          {translations[index].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
