"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  onBack: () => void;
}

export function CousinChaos({ onBack }: Props) {
  const { language } = useLanguage();
  
  // Stages: 0 = Intro, 1 = Tapping Game (10s), 2 = Scanning, 3 = Final Result
  const [stage, setStage] = useState(0);
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isScanning, setIsScanning] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Audio refs
  const laughRef = useRef<HTMLAudioElement>(null);
  const shabashRef = useRef<HTMLAudioElement>(null);

  const playSound = (ref: React.RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.play().catch(() => {});
    }
  };

  // Timer logic for Stage 1
  useEffect(() => {
    if (stage !== 1) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setStage(2);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, timeLeft]);

  // Handle tap on the fleeing emoji
  const handleEmojiTap = () => {
    setTaps((t) => t + 1);
    playSound(laughRef);
    // Move emoji randomly within box
    const randomX = (Math.random() - 0.5) * 220;
    const randomY = (Math.random() - 0.5) * 120;
    setPos({ x: randomX, y: randomY });
  };

  const startGame = () => {
    setTaps(0);
    setTimeLeft(10);
    setStage(1);
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
      <audio ref={laughRef} src="/audio/laugh_1.mp3" />
      <audio ref={shabashRef} src="/audio/shabash_1.mp3" />

      <button onClick={onBack} className="mb-8 text-[#94A3B8] hover:text-[#E7C77B] text-sm">
        ← {language === "en" ? "Back" : "Wapis"}
      </button>

      <h2 className="font-serif text-4xl font-bold gold-gradient-text mb-4">
        Cousin Chaos
      </h2>

      <div className="card-surface p-8 min-h-[350px] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Stage 0: Intro */}
        {stage === 0 && (
          <div className="space-y-6 max-w-md">
            <span className="text-6xl block mb-2">😎</span>
            <p className="text-lg text-[#F6F3EB]">
              {language === "en"
                ? "Bhai, 10 seconds hain tumhare paas! Moving Emoji par jitni jaldi ho sake tap karo!"
                : "Bhai, 10 seconds hain tumhare paas! Moving Emoji par jitni jaldi ho sake tap karo!"}
            </p>
            <button
              onClick={startGame}
              className="px-8 py-3 bg-[#E7C77B] text-[#080D18] font-bold rounded-lg hover:bg-[#F0D695] transition-all text-lg shadow-lg"
            >
              {language === "en" ? "Start Challenge!" : "Challenge Shuru Karo!"}
            </button>
          </div>
        )}

        {/* Stage 1: Tapping Game (10s Countdown) */}
        {stage === 1 && (
          <div className="w-full h-full flex flex-col items-center justify-between space-y-6">
            <div className="flex justify-between w-full px-4 text-sm font-mono text-[#E7C77B]">
              <span>⏱️ {language === "en" ? "Time" : "Waqt"}: {timeLeft}s</span>
              <span>🎯 {language === "en" ? "Taps" : "Taps"}: {taps}</span>
            </div>

            <div className="h-44 w-full flex items-center justify-center relative">
              <motion.button
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={handleEmojiTap}
                onTouchStart={handleEmojiTap}
                className="text-6xl p-4 cursor-pointer select-none focus:outline-none active:scale-125 transition-transform"
                aria-label="Tap Emoji"
              >
                🤪
              </motion.button>
            </div>

            <p className="text-xs text-[#94A3B8]">
              {language === "en" ? "Tap as fast as you can!" : "Jitni jaldi ho sake tap karo!"}
            </p>
          </div>
        )}

        {/* Stage 2: Bhai Detector Scanning */}
        {stage === 2 && (
          <div className="space-y-6 w-full max-w-md">
            <p className="text-lg text-[#F6F3EB]">
              {language === "en" ? "Bhai Detector: Analyzing Taps..." : "Bhai Detector: Taps analyze ho rahe hain..."}
            </p>

            <motion.div className="h-3 bg-[#E7C77B]/30 rounded-full overflow-hidden w-full">
              <motion.div
                className="h-full bg-[#E7C77B]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5 }}
                onAnimationComplete={() => {
                  setIsScanning(true);
                  playSound(shabashRef);
                }}
              />
            </motion.div>

            {isScanning && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 pt-4">
                <p className="text-3xl font-bold text-[#E7C77B]">
                  {taps >= 8 ? "Result: 100% Ultimate Legend!" : taps >= 4 ? "Result: 95% Pro Bhai!" : "Result: 100% Legend (Great Effort!)"}
                </p>
                <p className="text-[#94A3B8] text-sm">
                  {language === "en"
                    ? `Total Score: ${taps} taps in 10 seconds!`
                    : `Total Score: 10 seconds mein ${taps} taps!`}
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("go-to-letter"))}
                  className="mt-6 px-8 py-3 bg-[#E7C77B] text-[#080D18] font-bold rounded-lg hover:bg-[#F0D695] transition-all"
                >
                  {language === "en" ? "Read Birthday Letter →" : "Birthday Letter Parho →"}
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
