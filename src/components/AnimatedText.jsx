import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = [
  { text: "Deepak Shukla", lang: "English" },
  { text: "दीपक शुक्ला", lang: "Hindi" },
  { text: "দীপক শুক্লা", lang: "Bengali" },
  { text: "દીપક શુક્લા", lang: "Gujarati" },
  { text: "ದೀಪಕ್ ಶುಕ್ಲಾ", lang: "Kannada" },
  { text: "ദീപക് ശുക്ല", lang: "Malayalam" },
  { text: "ଦୀପକ ଶୁକ୍ଲା", lang: "Oriya" },
  { text: "ਦੀਪਕ ਸ਼ੁਕਲਾ", lang: "Punjabi" },
  { text: "தீபக் சுக்லா", lang: "Tamil" },
  { text: "దీపక్ శుక్లా", lang: "Telugu" },
  { text: "دیپک شکلا", lang: "Urdu" },
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
      className="h-[44px] sm:h-[52px] w-64 flex items-center justify-start ml-5 md:ml-7"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={translations[index].text}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className={`absolute font-bold text-left hover:text-red-500 dark:hover:text-red-400
        ${
          translations[index].lang === "English"
            ? "text-3xl sm:text-5xl"
            : "text-2xl sm:text-4xl"
        }`}
        >
          {translations[index].text + ","}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
