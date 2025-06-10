import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
    const { i18n } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <div className="lang-switcher">
                <button onClick={() => i18n.changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
                <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">À propos</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
            <button
                onClick={toggleTheme}
                style={{
                    background: "transparent",
                    border: "1px solid #aaa",
                    borderRadius: "20px",
                    padding: "5px 12px",
                    cursor: "pointer",
                    marginLeft: "1em"
                }}
            >
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </header>
    );
}

export default Header;
