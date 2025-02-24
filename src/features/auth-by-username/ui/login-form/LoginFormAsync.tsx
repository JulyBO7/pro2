import { lazy } from "react";

export const LoginFormAsync = lazy(() => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    }).then(() => { return import("./LoginForm"); });
});
