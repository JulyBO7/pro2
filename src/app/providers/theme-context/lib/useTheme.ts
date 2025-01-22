import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const useTheme = ()=> {
    let { theme, toggleTheme } = useContext(ThemeContext);


    return {
        theme,
        toggleTheme
    }


}