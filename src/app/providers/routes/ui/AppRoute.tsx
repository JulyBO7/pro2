import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/router";

export const AppRouter = () => {
  return (
    <Suspense fallback={"Loading........"}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
