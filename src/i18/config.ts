import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "./en.json";
import translation_ja from "./ja.json";
import { getLanguage } from "@/utils/lang";

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(),
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
