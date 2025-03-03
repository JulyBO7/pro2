import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about-page";
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
type RouteConfig = RouteProps & {
    authOnly: boolean
}

export const routePaths: RoutePaths = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_PAGE]: "/*",
};

export const routeConfig: RouteConfig[] = [
    {
        path: routePaths.main,
        element: <MainPage />,
        authOnly: false,
    },
    {
        path: routePaths.about,
        element: <AboutPage />,
        authOnly: false,
    },
    {
        path: routePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: routePaths[AppRoutes.NOT_PAGE],
        element: <ErrorPage />,
        authOnly: false,
    },
];
