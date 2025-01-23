import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise((res) => {
    setTimeout(res, 2000);
}).then(() => import("./AboutPage")));
