import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(() => new Promise((res) => { setTimeout(res, 1000); })
    .then(() => import("./ArticleDetailsPage")));
