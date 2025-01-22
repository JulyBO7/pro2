import { lazy } from "react";

export const AboutPageAsync = lazy(() => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  }).then(() => {
    return import("./AboutPage");
  });
});
