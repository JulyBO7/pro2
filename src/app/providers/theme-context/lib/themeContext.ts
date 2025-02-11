import { createContext } from "react";

export enum Theme {
    LIGHT = "app_light_theme",
    DARK = "app_dark_theme"
}
export type ThemeContextType = {
    theme?: Theme
    toggleTheme?: ()=> void
}
// export const ThemeContext = createContext<ThemeContextType>({theme:Theme.LIGHT, toggleTheme: ()=>{}})
export const ThemeContext = createContext<ThemeContextType>({});
