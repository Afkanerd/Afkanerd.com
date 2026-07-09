"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/lang/en.json";
import fr from "@/lang/fr.json";
import fa from "@/lang/fa.json";

const I18nContext = createContext(null);

const DICTIONARIES = { en, fr, fa };
const DEFAULT_LANG = "en";

function getByPath(target, key) {
  return key.split(".").reduce((acc, part) => acc && acc[part], target);
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}

export default function I18nProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored && DICTIONARIES[stored]) {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  }, [lang]);

  const value = useMemo(() => {
    const dictionary = DICTIONARIES[lang] || DICTIONARIES[DEFAULT_LANG];
    const t = (key, fallback = "") => getByPath(dictionary, key) || fallback || key;

    return {
      lang,
      setLang,
      dir: lang === "fa" ? "rtl" : "ltr",
      t
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
