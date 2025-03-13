import { Theme, ThemeProvider } from "app/providers/Theme-context";

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <ThemeProvider initialTheme={theme}>
        <div className="app">
            <Story />
        </div>
    </ThemeProvider>
);
