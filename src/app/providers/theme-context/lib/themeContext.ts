import { createContext } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark"
}
export type ThemeContextType = {
    theme?: Theme
    toggleTheme?: ()=> void
}
// export const ThemeContext = createContext<ThemeContextType>({theme:Theme.LIGHT, toggleTheme: ()=>{}})
export const ThemeContext = createContext<ThemeContextType>({});
