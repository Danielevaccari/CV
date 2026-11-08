import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// index.html sets data-theme before first paint, so we start from that.
const readInitialTheme = (): Theme =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(readInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Storage can be unavailable (private mode); the theme still applies for this visit.
        }
    }, [theme]);

    const toggleTheme = useCallback(
        () => setTheme(current => (current === "dark" ? "light" : "dark")),
        []
    );

    return { theme, toggleTheme };
};
