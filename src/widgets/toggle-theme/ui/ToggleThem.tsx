import { FC } from "react";
import { Button } from "shared/components/button";
import ThemeIcon from "shared/assets/icons/Theme-light 1.svg";

import { ButtonSize, ButtonTheme } from "shared/components/button/ui/Button";
import { useTheme } from "app/providers/Theme-context";
import { Icon } from "shared/components/icon/ui/Icon";
import cls from "./ToggleTheme.module.scss";

type ToggleThemProps = {
};

export const ToggleThem: FC<ToggleThemProps> = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                <Icon Svg={ThemeIcon} className={cls.icon} />
            </Button>
        </div>
    );
};
