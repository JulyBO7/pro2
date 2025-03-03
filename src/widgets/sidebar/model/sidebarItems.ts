import { SVGProps, VFC } from "react";
import { routePaths } from "shared/config/route-config/router";

import Home from "shared/assets/icons/home.svg";
import Description from "shared/assets/icons/description.svg";
import Profile from "shared/assets/icons/profile.svg";

export type Item ={
    routePath: string
    Icon: VFC<SVGProps<SVGSVGElement>>
    text: string
    authOnly: boolean
}
export const sidebarItems: Item[] = [
    {
        routePath: routePaths.about,
        Icon: Description,
        text: "aboutLink",
        authOnly: false,
    },
    {
        routePath: routePaths.main,
        Icon: Home,
        text: "main",
        authOnly: false,

    },
    {
        routePath: routePaths.profile,
        Icon: Profile,
        text: "profileLink",
        authOnly: true,
    },
];
