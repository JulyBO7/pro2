import { Suspense } from "react";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/Sidebar";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    return (
        <div className="app">
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
