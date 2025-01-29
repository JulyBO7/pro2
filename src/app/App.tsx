import "./styles/index.scss";

import { Suspense } from "react";
import { useTheme } from "app/providers/theme-context";
import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/Sidebar";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [`${theme}`])}>
            <Suspense fallback="">
                <Navbar />
                <div className="appContent">
                    <Sidebar />
                    <AppRouter />

                </div>
            </Suspense>
        </div>
    );
};
