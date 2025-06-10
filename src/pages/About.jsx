import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <h2>{t("about.title")}</h2>
            <p>{t("about.text")}</p>
        </section>
    );
}
