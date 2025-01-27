import { ReactElement, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/themeContext";

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem("theme") as Theme) ?? Theme.LIGHT,
    );
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    const providerValue = useMemo(() => { return { theme, toggleTheme }; }, [theme]);

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
