import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig, routeConfig } from "shared/config/route-config/router";
import { PageLoader } from "widgets/page-loader";
import cls from "./AppRouter.module.scss";
import { AuthRequired } from "./AuthRequired";

export const AppRouter = () => {
    const getRouteElements = useCallback((route: RouteConfig) => (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly
                ? <AuthRequired>{route.element}</AuthRequired>
                : route.element}
        />
    ), []);

    const routes = routeConfig.map(getRouteElements);

    return (
        <div className="pageWrapper">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {routes}
                </Routes>
                {/* <BagButton /> */}
            </Suspense>
        </div>

    );
};
