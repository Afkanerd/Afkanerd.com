import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const RTL_LANGS = ["fa", "ar", "he", "ur"];

export function isRTL(lang) {
  return RTL_LANGS.includes(lang);
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = isRTL(lng) ? "rtl" : "ltr";
});

export default i18n;
