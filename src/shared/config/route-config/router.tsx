import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about-page";
import { DescriptionPage } from "pages/description";
import { ErrorPage } from "pages/not-found-page/NotFoundPage";
import { MainPage } from "pages/main-page/MainPage";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  DESCRIPTION = "description",
  NOT_PAGE = "*"
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
    [AppRoutes.NOT_PAGE]: "/*",
};

export const routeConfig: RouteProps[] = [
    {
        path: routePath.main,
        element: <MainPage />,
    },
    {
        path: routePath.about,
        element: <AboutPage />,
    },
    {
        path: routePath.description,
        element: <DescriptionPage />,
    },
    {
        path: routePath[AppRoutes.NOT_PAGE],
        element: <ErrorPage />,
    },
];
