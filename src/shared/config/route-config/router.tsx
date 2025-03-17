import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about-page";
import { ErrorPage } from "pages/not-found-page";
import { MainPage } from "pages/main-page";
import { ProfilePage } from "pages/profile";
import { ArticlesPage } from "pages/articles-page";
import { ArticleDetailsPage } from "pages/atricle-details-page";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  DESCRIPTION = "description",
  PROFILE = "profile",
  ARTICLES = "articles",
  NOT_PAGE = "not_page"
}
export type RoutePaths = {
    [name in AppRoutes]: string
}
export type RouteConfig = RouteProps & {
    authOnly: boolean
}

export const routePaths: RoutePaths = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.NOT_PAGE]: "/*",
};

export const routeConfig: RouteConfig[] = [
    {
        path: routePaths[AppRoutes.MAIN],
        element: <MainPage />,
        authOnly: false,
    },
    {
        path: routePaths[AppRoutes.ABOUT],
        element: <AboutPage />,
        authOnly: false,
    },
    {
        path: `${routePaths[AppRoutes.PROFILE]}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: routePaths[AppRoutes.NOT_PAGE],
        element: <ErrorPage />,
        authOnly: false,
    },
    {
        path: routePaths[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true
        ,
    },
    {
        path: `${routePaths[AppRoutes.ARTICLES]}/:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
];
