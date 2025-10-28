"use client";

import { useState, useEffect } from "react";
import useDictionary, { LanguageCode } from "../hooks/useDictionary";

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false); // <- nowa flaga
  const [storedLang, setStoredLang] = useState<LanguageCode>("pl");
  const { language, setLanguage } = useDictionary(storedLang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // zaznaczamy, że komponent jest zamontowany na kliencie
    setMounted(true);

    const savedLang = (localStorage.getItem("lang") as LanguageCode) || "pl";
    setStoredLang(savedLang);
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", language);
  }, [language, mounted]);

  const changeLang = (newLang: LanguageCode) => {
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setStoredLang(newLang);
    setOpen(false);
    window.location.reload();
  };

  if (!mounted) return null; // <- nie renderujemy nic dopóki SSR nie zakończy

  const langs: LanguageCode[] = ["pl", "en", "de"];

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center text-black w-8 h-8 cursor-pointer select-none border border-gray-400 rounded-md"
        onClick={() => setOpen(!open)}
      >
        {language.toUpperCase()}
      </div>

      {open && (
        <div className="absolute top-10 left-0 flex flex-col bg-white rounded-md shadow-lg p-1 space-y-1">
          {langs.map((l) => (
            <div
              key={l}
              onClick={() => changeLang(l)}
              className={`flex justify-center items-center w-8 h-8 cursor-pointer hover:bg-gray-200 ${
                l === language ? "font-bold text-blue-600" : ""
              }`}
            >
              {l.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
