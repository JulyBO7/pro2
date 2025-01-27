import { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/about-page";
import { DescriptionPage } from "@/pages/description";
import { ErrorPage } from "../../../pages/error-page/ErrorPage";
import { MainPage } from "../../../pages/main-page/MainPage";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  DESCRIPTION = "description",
  NOT_PAGE = "*"
}

const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
    [AppRoutes.NOT_PAGE]: "/*",
};

export const routeConfig: RouteProps[] = [
    {
        path: routePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: routePath[AppRoutes.DESCRIPTION],
        element: <DescriptionPage />,
    },
    {
        path: routePath[AppRoutes.NOT_PAGE],
        element: <ErrorPage />,
    },
];
