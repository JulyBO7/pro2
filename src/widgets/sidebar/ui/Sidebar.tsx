import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToggleThem } from "widgets/toggle-theme";
import { LangSwitcher } from "widgets/lang-switcher";
import { Button, ButtonTheme } from "shared/components/button";
import { classNames } from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
    const { t } = useTranslation();
    const [collapse, setCollapse] = useState(false);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsedSidebar]: collapse })}
        >
            <Button
                data-testid="sidebarBtn"
                className={cls.switcherButton}
                theme={ButtonTheme.PRIMARY}
                onClick={() => { return setCollapse((prev) => { return !prev; }); }}
            >
                {t("collapseSidebar")}
            </Button>
            <div className={cls.switchers}>
                <ToggleThem />
                <LangSwitcher />
            </div>
        </div>
    );
};
