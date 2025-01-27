import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/route-config/router";
import cls from "./AppRouter.module.scss";
import { PageLoader } from "@/widgets/page-loader";
import { BagButton } from "@/app/providers/error-boundary";

export const AppRouter = () => {
    return (
        <div className={cls.routesContainer}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {routeConfig.map(({ path, element }) => {
                        return (
                            <Route path={path} element={element} key={path} />
                        );
                    })}
                </Routes>
                <BagButton />
            </Suspense>
        </div>
    );
};
