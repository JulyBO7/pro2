import "./styles/index.scss";

import { useTheme } from "@/app/providers/theme-context";
import { classNames as cn } from "@/shared/utils/classNames";
import { AppRouter } from "./providers/routes/ui/AppRoute";
import { Navbar } from "@/widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  const classNames = cn("app", {}, [`${theme}`]);

  // console.log("CLASSES: ", cn);
  return (
    <div className={classNames}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
