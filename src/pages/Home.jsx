import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
    const { t } = useTranslation();

    return (
        <section id="home">
            <h1>{t("home.welcome")}</h1>
            <p>{t("home.intro")}</p>
            <Link to="/ProjectCard" className="button">{t("home.cta")}</Link>
        </section>
    );
}
