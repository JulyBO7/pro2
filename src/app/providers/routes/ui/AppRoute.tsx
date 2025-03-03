import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route-config/router";
import { PageLoader } from "widgets/page-loader";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "entities/user";
import cls from "./AppRouter.module.scss";

export const AppRouter = () => {
    const userAuthData = useSelector(selectUserAuthData);

    const routes = useMemo(() => routeConfig.map(({ path, element, authOnly }) => {
        if (userAuthData) {
            return <Route path={path} element={element} key={path} />;
        }
        if (!authOnly) {
            return <Route path={path} element={element} key={path} />;
        }
        return null;
    }), [userAuthData]);

    return (
        <div className={cls.routesContainer}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {routes}
                </Routes>
                {/* <BagButton /> */}
            </Suspense>
        </div>

    );
};
