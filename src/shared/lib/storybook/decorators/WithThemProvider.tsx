import { Story } from "@storybook/react";

import { useMemo, useState } from "react";
import { Theme, ThemeContext } from "../../../../app/providers/theme-context/lib/themeContext";

export const WithThemProviderDecorator = (Story: Story) => {
    const [theme, setTheme] = useState(Theme.LIGHT);
    const context = useMemo(() => ({
        theme,
        toggleTheme: () => {
            setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
        },
    }), [theme]);
    return (
        <ThemeContext.Provider value={context}>
            <Story />
        </ThemeContext.Provider>
    );
};
