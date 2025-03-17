import { lazy } from "react";

export const AddNewCommentFormAsync = lazy(() => new Promise((res) => {
    setTimeout(res, 1000);
}).then(() => import("./AddNewCommentForm")));
