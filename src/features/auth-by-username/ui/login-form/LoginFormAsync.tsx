import { lazy } from "react";

export const LoginFormAsync = lazy(() => new Promise((res) => {
    setTimeout(res, 1000);
}).then(() => import("./LoginForm")));
