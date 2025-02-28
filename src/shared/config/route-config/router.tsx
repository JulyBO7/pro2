import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about-page";
import { DescriptionPage } from "pages/description";
import { ErrorPage } from "pages/not-found-page/ui/NotFoundPage";
import { MainPage } from "pages/main-page/ui/MainPage";
import { ProfilePage } from "pages/profile";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  DESCRIPTION = "description",
  PROFILE = "profile",
  NOT_PAGE = "*"
}
export type RoutePaths = {
    [name in AppRoutes]: string
}

export const routePaths: RoutePaths = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_PAGE]: "/*",
};

export const routeConfig: RouteProps[] = [
    {
        path: routePaths.main,
        element: <MainPage />,
    },
    {
        path: routePaths.about,
        element: <AboutPage />,
    },
    {
        path: routePaths.description,
        element: <DescriptionPage />,
    },
    {
        path: routePaths.profile,
        element: <ProfilePage />,
    },
    {
        path: routePaths[AppRoutes.NOT_PAGE],
        element: <ErrorPage />,
    },
];
