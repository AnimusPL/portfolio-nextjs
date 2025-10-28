"use client";

import { createContext, useContext } from "react";
import useDictionary, { LanguageCode, Dictionary } from "../hooks/useDictionary";

type LangContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  dictionary: Dictionary;
};

const LangContext = createContext<LangContextType>({
  language: "pl",
  setLanguage: () => {},
  dictionary: {},
});

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, setLanguage, dictionary } = useDictionary();

  return (
    <LangContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);