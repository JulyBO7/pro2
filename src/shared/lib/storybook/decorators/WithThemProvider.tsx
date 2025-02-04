import { Story } from "@storybook/react";

import { useState } from "react";
import { Theme, ThemeContext } from "../../../../app/providers/theme-context/lib/themeContext";

export const WithThemProviderDecorator = (Story: Story) => {
    const [theme, setTheme] = useState(Theme.LIGHT);
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => {
                    setTheme((prev) => { return (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT); });
                },
            }}
        >
            <Story />
        </ThemeContext.Provider>
    );
};
