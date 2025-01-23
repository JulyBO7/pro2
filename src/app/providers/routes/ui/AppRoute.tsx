import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/route-config/router";
import cls from "./AppRouter.module.scss";

export const AppRouter = () => (
    <div className={cls.routesContainer}>
        <Suspense fallback="Loading........">
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route path={path} element={element} key={path} />
                ))}
            </Routes>
        </Suspense>
    </div>
);
