"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MemoryTimeline } from "./MemoryTimeline";
import { CousinChaos } from "./CousinChaos";
import { BirthdayLetter } from "./BirthdayLetter";
import { BirthdayFinale } from "./BirthdayFinale";
import { MusicControl } from "./MusicControl";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function OpeningExperience() {
  const [stage, setStage] = useState<"opening" | "welcome" | "timeline" | "quiz" | "letter" | "finale">("opening");
  const { language } = useLanguage();

  useEffect(() => {
    const handleGoToQuiz = () => setStage("quiz");
    const handleGoToLetter = () => setStage("letter");
    const handleGoToFinale = () => setStage("finale");
    
    window.addEventListener("go-to-quiz", handleGoToQuiz);
    window.addEventListener("go-to-letter", handleGoToLetter);
    window.addEventListener("go-to-finale", handleGoToFinale);
    
    return () => {
      window.removeEventListener("go-to-quiz", handleGoToQuiz);
      window.removeEventListener("go-to-letter", handleGoToLetter);
      window.removeEventListener("go-to-finale", handleGoToFinale);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen">
      <MusicControl />
      <LanguageToggle />
      <AnimatePresence mode="wait">
        {stage === "opening" && (
          <motion.div
            key="opening-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center w-full max-w-2xl px-4"
          >
            <p className="text-xs font-mono tracking-widest text-[#E7C77B] mb-6">
              {language === "en" ? "A LITTLE SOMETHING, JUST FOR YOU" : "SIRF TUMHARE LIYE EK CHHOTA SA TOHFA"}
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl font-bold gold-gradient-text leading-tight mb-8">
              {language === "en" ? "For Abdul Ahad" : "Abdul Ahad ke liye"}
            </h1>

            <p className="text-lg sm:text-xl text-[#94A3B8] font-light leading-relaxed mb-8">
              {language === "en" 
                ? "Some people are more than just family. They're part of your favourite memories, your laughter, and the stories you'll keep telling."
                : "Kuch log family se barh kar hote hain. Woh aapki pasandeeda yaadein, aapki hansi, aur un kahaniyon ka hissa hote hain jo aap hamesha sunate rahenge."}
            </p>

            <p className="text-md italic text-[#E7C77B]/80 font-serif mb-12">
              {language === "en" 
                ? "\"Abdul, yeh chhota sa surprise sirf tumhare liye.\""
                : "\"Abdul, yeh chhota sa surprise sirf tumhare liye.\""}
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setStage("welcome")}
              className="card-surface px-8 py-4 text-[#F6F3EB] text-lg font-medium hover:border-[#E7C77B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E7C77B]/50"
            >
              {language === "en" ? "Open Your Birthday Surprise" : "Birthday surprise kholo"}
            </motion.button>

            <p className="text-xs text-[#94A3B8]/60 mt-12">
              {language === "en" ? "Made with love, memories, and a little bit of code." : "Pyar, yaadon, aur thore se code ke saath banaya gaya."}
            </p>
          </motion.div>
        )}

        {stage === "welcome" && (
          <motion.div
            key="welcome-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center w-full max-w-2xl px-4"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F6F3EB] mb-6">
              {language === "en" ? "Welcome, Abdul." : " خوش آمدید، عبدل۔"}
            </h2>
            <p className="text-lg sm:text-xl text-[#94A3B8] font-light leading-relaxed mb-12">
              {language === "en" 
                ? "Let's turn a few memories into something worth keeping."
                : "Chalo kuch yaadon ko hamesha yaad rakhne wali cheez mein badalte hain."}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setStage("timeline")}
              className="card-surface px-8 py-4 text-[#E7C77B] text-lg font-medium border-[#E7C77B]/30 hover:border-[#E7C77B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E7C77B]/50"
            >
              {language === "en" ? "Explore Our Memories" : "Humari yaadein dekho"}
            </motion.button>
          </motion.div>
        )}

        {stage === "timeline" && (
          <MemoryTimeline key="timeline" onBack={() => setStage("welcome")} />
        )}

        {stage === "quiz" && (
          <CousinChaos key="quiz" onBack={() => setStage("timeline")} />
        )}

        {stage === "letter" && (
          <BirthdayLetter key="letter" onBack={() => setStage("quiz")} />
        )}

        {stage === "finale" && (
          <BirthdayFinale 
            key="finale" 
            onBack={() => setStage("letter")}
            onRestart={() => setStage("opening")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
