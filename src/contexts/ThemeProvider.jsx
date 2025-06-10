import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const THEME_KEY = "theme-mode";

export default function ThemeProvider({ children }) {
    const getPreferredTheme = () => {
        if (localStorage.getItem(THEME_KEY))
            return localStorage.getItem(THEME_KEY);
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
        return "light";
    };

    const [theme, setTheme] = useState(getPreferredTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
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
        </ThemeContext.Provider>
    );
}
