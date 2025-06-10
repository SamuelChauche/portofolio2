import { useTranslation } from "react-i18next";
import "../style.css";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    return (
        <div className="lang-switcher">
            <button
                className={i18n.language === "fr" ? "active" : ""}
                onClick={() => changeLanguage("fr")}
                aria-label="Français"
            >
                FR
            </button>
            <button
                className={i18n.language === "en" ? "active" : ""}
                onClick={() => changeLanguage("en")}
                aria-label="English"
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
