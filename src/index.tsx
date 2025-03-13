import { render } from "react-dom";
import { ThemeProvider } from "app/providers/Theme-context";
import { StoreProvider } from "app/providers/store-provider";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/error-boundary";
import "app/styles/index.scss";

const root = document.getElementById("root");

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    root,
);
