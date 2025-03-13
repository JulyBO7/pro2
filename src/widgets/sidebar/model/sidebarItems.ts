import { SVGProps, VFC } from "react";
import { AppRoutes, routePaths } from "shared/config/route-config/router";

import Home from "shared/assets/icons/home.svg";
import Description from "shared/assets/icons/description.svg";
import Profile from "shared/assets/icons/profile.svg";
import ArticlesList from "shared/assets/icons/articlesList.svg";

export type Item ={
    routePath: string
    Icon: VFC<SVGProps<SVGSVGElement>>
    text: string
    authOnly: boolean
}
export const sidebarItems: Item[] = [
    {
        routePath: routePaths[AppRoutes.ABOUT],
        Icon: Description,
        text: "aboutLink",
        authOnly: false,
    },
    {
        routePath: routePaths[AppRoutes.MAIN],
        Icon: Home,
        text: "main",
        authOnly: false,

    },
    {
        routePath: routePaths[AppRoutes.PROFILE],
        Icon: Profile,
        text: "profileLink",
        authOnly: true,
    },
    {
        routePath: routePaths[AppRoutes.ARTICLES],
        Icon: ArticlesList,
        text: "articles",
        authOnly: true,
    },
];
