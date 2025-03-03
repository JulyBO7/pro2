import {
    ReactElement, useCallback, useMemo, useState,
} from "react";
import { Theme, ThemeContext } from "../lib/themeContext";

type ThemeProviderProps ={
    children: ReactElement
    initialTheme?: Theme
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const currentTheme = localStorage.getItem("theme") as Theme;
    const [theme, setTheme] = useState<Theme>(currentTheme || initialTheme || Theme.LIGHT);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }, [theme]);

    const providerValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
    document.body.className = theme;

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
