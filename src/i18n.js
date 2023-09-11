import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // for React
  .init({
    resources: {
      en: {
        translation: {
          // English translations here
        },
      },
      ru: {
        translation: {
          // Russian translations here
        },
      },
      uz: {
        translation: {
          // Uzbek translations here
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
