"use client";

import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-[9999] px-4 py-2 bg-[#19263A]/90 border border-[#E7C77B]/50 rounded-full text-[#E7C77B] text-sm font-medium hover:border-[#E7C77B] transition-all focus:outline-none focus:ring-2 focus:ring-[#E7C77B]/50 shadow-lg"
      aria-label="Toggle language"
    >
      {language === "en" ? "اردو" : "English"}
    </button>
  );
};
