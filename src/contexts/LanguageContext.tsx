import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, portfolioData } from "@/lib/data/portfolio-data";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: typeof portfolioData.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const meta = {
  pt: { lang: "pt-AO", title: "Manuel Gouveia Cunga | Analista de Teste e Desenvolvedor Front-end em Angola" },
  en: { lang: "en", title: "Manuel Gouveia Cunga | Test Analyst and Front-end Developer in Angola" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const data = portfolioData[language];

  useEffect(() => {
    document.documentElement.lang = meta[language].lang;
    document.title = meta[language].title;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
