import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";
import { ToggleThem } from "@/widgets/toggle-theme";
import { LangSwitcher } from "@/widgets/lang-switcher";
import { Button, ButtonTheme } from "@/shared/components/button";
import { classNames } from "@/shared/utils/classNames";

export const Sidebar: React.FC = () => {
    const { t } = useTranslation();
    const [collapse, setCollapse] = useState(false);

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsedSidebar]: collapse })}>
            <Button
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
