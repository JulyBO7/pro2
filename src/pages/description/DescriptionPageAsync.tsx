import { lazy } from "react";

export const DescriptionPageAsync = lazy(() => new Promise((res) => {
    setTimeout(res, 3000);
}).then(() => import("./DescriptionPage")));
