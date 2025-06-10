// src/components/ThemeSwitcher.jsx
import { useEffect, useState } from "react";

const THEME_KEY = "theme-mode";

export default function ThemeProvider() {
    // Détecter le thème préféré du navigateur ou localStorage
    const getPreferredTheme = () => {
        if (localStorage.getItem(THEME_KEY))
            return localStorage.getItem(THEME_KEY);
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
        return "light";
    };

    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <button onClick={toggleTheme} style={{
            background: "transparent",
            border: "1px solid #aaa",
            borderRadius: "20px",
            padding: "5px 12px",
            cursor: "pointer",
            marginLeft: "1em"
        }}>
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
