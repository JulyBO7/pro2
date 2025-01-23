import { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/about-page";
import { DescriptionPage } from "@/pages/description";

enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  DESCRIPTION = "description",
}

const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.DESCRIPTION]: "/description",
};

export const routeConfig: RouteProps[] = [
    // {
    //   path: routePath[AppRoutes.MAIN],
    //   element: <Component />,
    // },
    {
        path: routePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: routePath[AppRoutes.DESCRIPTION],
        element: <DescriptionPage />,
    },
];
