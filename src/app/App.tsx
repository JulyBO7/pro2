import { Suspense, useEffect } from "react";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar/ui/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInited, userActions } from "entities/user";
import { Loader } from "shared/components/loader";
import { AppRouter } from "./providers/routes/ui/AppRoute";

export const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(selectUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="appContent">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
