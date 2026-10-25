"use client";

import { memories } from "@/data/memories";
import { MemoryCard } from "./MemoryCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface MemoryTimelineProps {
  onBack: () => void;
}

export function MemoryTimeline({ onBack }: MemoryTimelineProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <button
        onClick={onBack}
        className="mb-12 text-[#94A3B8] hover:text-[#E7C77B] transition-colors flex items-center gap-2 text-sm font-medium"
      >
        ← {language === 'en' ? 'Back to Welcome' : 'Wapis Welcome par'}
      </button>

      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text mb-6">
          {language === 'en' ? 'Little Moments, Big Memories' : 'Chhoti yaadein, bari kahaniyan'}
        </h2>
        <p className="text-lg text-[#94A3B8] max-w-xl mx-auto font-light mb-8">
          {language === 'en' 
            ? "Some of the best memories aren't planned. They're simply the moments we share."
            : "Kuch sab se achi yaadein plan nahi ki jati. Woh bas woh pal hote hain jo hum share karte hain."}
        </p>
        <button
          onClick={() => (window.dispatchEvent(new CustomEvent("go-to-quiz")))}
          className="card-surface px-6 py-3 text-[#E7C77B] hover:text-[#F6F3EB] transition-colors"
        >
          {language === 'en' ? 'Play the Cousin Chronicles' : 'Cousin Chronicles khelo'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </motion.div>
  );
}
