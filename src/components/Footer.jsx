import { useTranslation } from "react-i18next";
import "../styles.css"; // à adapter selon ton nom de fichier

function Footer() {
    console.log("footer démarre !")
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>
                {t("footer_message", { year: new Date().getFullYear() })} <br />
                © {new Date().getFullYear()} - Ton Nom.
            </p>
            <a
                href="https://github.com/tonusername"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t("footer_github")}
            </a>
        </footer>
    );
}


export default Footer;
