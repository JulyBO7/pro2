import { Suspense, useEffect } from "react";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/user";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
