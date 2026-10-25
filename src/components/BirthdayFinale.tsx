"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  onBack: () => void;
  onRestart: () => void;
}

export function BirthdayFinale({ onBack, onRestart }: Props) {
  const [wishMade, setWishMade] = useState(false);
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto py-16 px-4 text-center"
    >
      <button onClick={onBack} className="mb-8 text-[#94A3B8] hover:text-[#E7C77B] text-sm">
        ← {language === 'en' ? 'Back to Letter' : 'Letter par wapis'}
      </button>

      <h2 className="font-serif text-4xl sm:text-5xl font-bold gold-gradient-text mb-6">
        {language === 'en' ? 'One More Chapter Begins' : 'Ek aur naya chapter shuru'}
      </h2>
      <p className="text-lg text-[#94A3B8] font-light leading-relaxed mb-12">
        {language === 'en' 
          ? "We've already made so many memories, Abdul, and this is only the beginning."
          : "Humne pehle hi itni saari yaadein bana li hain, Abdul, aur yeh toh bas shuruat hai."}
      </p>

      {/* Simplified Cake SVG */}
      <motion.div className="relative w-48 h-48 mx-auto mb-12">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#19263A] stroke-[#E7C77B] stroke-2">
          <rect x="20" y="50" width="60" height="30" rx="5" />
          <rect x="15" y="40" width="70" height="10" rx="2" />
        </svg>
        {!wishMade && (
          <motion.div
            className="absolute -top-10 left-1/2 w-4 h-8 bg-[#E7C77B] rounded-full blur-[1px]"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
      </motion.div>

      {!wishMade ? (
        <button
          onClick={() => setWishMade(true)}
          className="px-8 py-3 bg-[#E7C77B] text-[#080D18] font-bold rounded-lg hover:bg-[#F0D695] transition-colors"
        >
          {language === 'en' ? 'Make a Birthday Wish' : 'Birthday wish karo'}
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-2xl font-serif text-[#F6F3EB]">
            {language === 'en' ? 'Happy Birthday, Abdul Ahad!' : 'Saalgirah Mubarak, Abdul Ahad!'}
          </p>
          <p className="text-lg text-[#94A3B8]">
            {language === 'en' 
              ? "Abhi toh bohat si memories banani baqi hain, bhai."
              : "Abhi toh bohat si yaadein banani baqi hain, bhai."}
          </p>
          <p className="text-lg text-[#94A3B8]">
            {language === 'en' 
              ? "Here's to more adventures, more laughs, and more stories together."
              : "Aur adventures, aur hansi, aur kahaniyan saath banate rahenge."}
          </p>
          <p className="text-xs text-[#94A3B8]/60 pt-8">
            {language === 'en' 
              ? "Made with love, memories, and a little bit of code." 
              : "Pyar, yaadon, aur thore se code ke saath banaya gaya."}
          </p>
          
          <div className="pt-8">
            <button
              onClick={onRestart}
              className="px-8 py-3 bg-transparent border border-[#E7C77B] text-[#E7C77B] font-bold rounded-lg hover:bg-[#E7C77B] hover:text-[#080D18] transition-all"
            >
              {language === 'en' ? 'Start the Journey Again' : 'Safar dobara shuru karo'}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
