import { FC, ReactElement, useState } from "react";
import { Theme, ThemeContext } from "../lib/themeContext";

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? Theme.LIGHT
  );

  // let clientTheme = localStorage.getItem("theme");

  // if (clientTheme && clientTheme !== theme) {
  //   setTheme(clientTheme as Theme);
  // } else {
  //   localStorage.setItem("theme", theme);
  // }

  const toggleTheme = () => {
    let newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
