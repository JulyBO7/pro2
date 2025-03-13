import {
    ReactElement, useCallback, useMemo, useState,
} from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

type ThemeProviderProps ={
    children: ReactElement
    initialTheme?: Theme
}

const currentTheme = localStorage.getItem("theme") as Theme;

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || currentTheme || Theme.LIGHT);

    const toggleTheme = useCallback(() => {
        switch (theme) {
        case Theme.LIGHT:
            setTheme(Theme.DARK);
            break;
        case Theme.DARK:
            setTheme(Theme.GREEN);
            break;
        case Theme.GREEN:
            setTheme(Theme.LIGHT);
            break;
        default:
            setTheme(Theme.LIGHT);
        }
    }, [theme]);

    localStorage.setItem("theme", theme);

    const providerValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
    document.body.className = theme;

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
