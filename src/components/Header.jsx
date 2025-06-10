import { Link } from "react-router-dom";
import LanguageProvider from "../contexts/LanguageProvider";
import { useTranslation } from "react-i18next";
import ThemeProvider from "../contexts/ThemeProvider";

function Header() {
    const { i18n } = useTranslation();

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
            <ThemeProvider />
        </header>
    );
}

export default Header;
