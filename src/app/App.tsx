import { Suspense, useEffect } from "react";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/user";
import { Loader } from "shared/components/loader";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="appContent">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
