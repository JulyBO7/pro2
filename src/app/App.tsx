import "./styles/index.scss";

import { useTheme } from "@/app/providers/theme-context";
import { classNames } from "@/shared/utils/classNames";
import { AppRouter } from "./providers/routes/ui/AppRoute";
import { Navbar } from "@/widgets/navbar";
import { Suspense } from "react";
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [`${theme}`])}>
      <Suspense fallback="">
        <Navbar />
        <div className="appContent">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
