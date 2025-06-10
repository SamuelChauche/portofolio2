import React from "react";
import { useTranslation } from "react-i18next";
import "../styles.css"; // On va créer ce fichier CSS

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-image-container">
                    <img
                        src="/pp.jpg"
                        alt="Samuel Chauche"
                        className="about-image"
                    />
                </div>
                <div className="about-content">
                    <h2 className="about-title">{t("about.title")}</h2>
                    <p className="about-text">{t("about.text")}</p>
                </div>
            </div>
        </section>
    );
}
