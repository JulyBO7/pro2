import { Button } from "@/shared/components/button";
import React from "react";
import LightThemeIcon from "@/shared/assets/icons/theme-light 1.svg";
import DarkThemeIcon from "@/shared/assets/icons/theme-dark 1.svg";

import { useTheme } from "@/app/providers/theme-context";
import { ButtonTheme } from "@/shared/components/button/ui/Button";

type ToggleThemProps = {
  className?: string;
};

export const ToggleThem: React.FC<ToggleThemProps> = ({
  className,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
        {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
      </Button>
    </div>
  );
};
