import { lazy } from "react";

export const ProfilePageAsync = lazy(() => new Promise((res) => {
    setTimeout(res, 1500);
}).then(() => import("./ProfilePage")));
