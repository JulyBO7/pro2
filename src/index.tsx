import { render } from "react-dom";
import { StoreProvider } from "app/providers/store-provider";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { ThemeProvider } from "./app/providers/theme-context/ui/ThemeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/error-boundary";
import "app/styles/index.scss";

const root = document.getElementById("root");

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    root,
);
