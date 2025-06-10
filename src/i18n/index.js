import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fr from "./fr.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        },
        lng: "fr", // Langue par défaut ("fr" ou "en")
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React gère la sécurité XSS
        },
        // debug: true, // Active en dev seulement si tu veux voir les logs i18n
    });

export default i18n;
