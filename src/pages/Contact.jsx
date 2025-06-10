import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Ici tu peux intégrer un service d'envoi de mail ou d'API.
    };

    if (submitted) {
        return (
            <section id="contact">
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.success")}</p>
            </section>
        );
    }

    return (
        <section id="contact">
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={t("contact.form.name")}
                    required
                    name="name"
                />
                <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    required
                    name="email"
                />
                <textarea
                    placeholder={t("contact.form.message")}
                    required
                    name="message"
                />
                <button type="submit">{t("contact.form.submit")}</button>
            </form>
        </section>
    );
}
