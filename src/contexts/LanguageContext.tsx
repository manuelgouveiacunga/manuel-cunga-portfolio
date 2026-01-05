import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language, portfolioData } from "@/lib/data/portfolio-data";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: typeof portfolioData.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const data = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
