"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { LanguageCode } from "../hooks/useDictionary";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLang();
  const [open, setOpen] = useState(false);
  const langs: LanguageCode[] = ["pl", "en", "de"];

  const changeLang = (newLang: LanguageCode) => {
    setLanguage(newLang);
    setOpen(false);
  };

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
