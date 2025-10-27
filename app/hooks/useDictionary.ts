"use client";

import { useEffect, useState } from "react";

export type LanguageCode = "pl" | "en" | "de";
export type Dictionary = Record<string, string>;

export default function useDictionary(initialLang: LanguageCode = "pl") {
  const [language, setLanguage] = useState<LanguageCode>(initialLang);
  const [dictionary, setDictionary] = useState<Dictionary>({});

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const res = await fetch(`/data/languages/lang_${language}.json`);
        const data: Dictionary = await res.json();
        setDictionary(data);
      } catch (err) {
        console.error("Błąd ładowania tłumaczenia:", err);
      }
    };

    loadLanguage();
  }, [language]);

  return { dictionary, language, setLanguage };
}