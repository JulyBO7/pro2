import React from "react";
import { Button } from "shared/components/button";
import LightThemeIcon from "shared/assets/icons/theme-light 1.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark 1.svg";

import { Theme, useTheme } from "app/providers/theme-context";
import { ButtonSize, ButtonTheme } from "shared/components/button/ui/Button";

type ToggleThemProps = {
};

export const ToggleThem: React.FC<ToggleThemProps> = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
            </Button>
        </div>
    );
};
