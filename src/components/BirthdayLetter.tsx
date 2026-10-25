"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { letterContent } from "@/data/birthdayLetter";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  onBack: () => void;
}

export function BirthdayLetter({ onBack }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const content = letterContent[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto py-16 px-4"
    >
      <button onClick={onBack} className="mb-8 text-[#94A3B8] hover:text-[#E7C77B] text-sm">
        ← {language === 'en' ? 'Back to Quiz' : 'Quiz par wapis'}
      </button>

      <div className="flex flex-col items-center">
        {!isOpen ? (
          <motion.div
            className="card-surface p-12 text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <p className="text-[#E7C77B] mb-8 font-serif italic text-lg">
              {language === 'en' ? 'A little note for you, Abdul' : 'Tumhare liye ek chhota sa note, Abdul'}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 bg-[#E7C77B] text-[#080D18] font-bold rounded-lg hover:bg-[#F0D695] transition-colors"
            >
              {language === 'en' ? 'Open Your Letter' : 'Letter kholo'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="card-surface p-8 sm:p-12 text-[#F6F3EB] font-serif leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-6 text-xl">{content.dear}</p>
            <p className="mb-6 font-bold text-2xl text-[#E7C77B]">{content.greeting}</p>
            {content.paragraphs.map((p, i) => (
              <p key={i} className="mb-6 text-lg text-[#F6F3EB]/90 font-sans">{p}</p>
            ))}
            <p className="mb-4 text-xl font-bold">{content.closing}</p>
            <p className="text-lg">{content.signature}</p>
            
            <div className="flex gap-4 mt-12">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#94A3B8] hover:text-[#E7C77B] underline"
              >
                {language === 'en' ? 'Close Letter' : 'Letter band karo'}
              </button>
              <button
                onClick={() => (window.dispatchEvent(new CustomEvent("go-to-finale")))}
                className="px-6 py-2 rounded-full bg-[#E7C77B] text-[#080D18] font-bold hover:bg-[#F0D695]"
              >
                {language === 'en' ? 'Continue to Finale' : 'Finale par jao'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
