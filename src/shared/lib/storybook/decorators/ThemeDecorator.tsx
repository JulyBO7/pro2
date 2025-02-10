import { Theme, ThemeProvider } from "../../../../app/providers/theme-context";

export const ThemeDecorator = (theme: Theme) => {
    return (Story: any) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>

        );
    };
};
