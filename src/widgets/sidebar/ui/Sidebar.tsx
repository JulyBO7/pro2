import { FC, useState } from "react";
import { ToggleThem } from "widgets/toggle-theme";
import { LangSwitcher } from "widgets/lang-switcher";
import { Button, ButtonSize, ButtonTheme } from "shared/components/button";
import { classNames } from "shared/lib/helpers/classNames";

import { AppLink, AppLinkTheme } from "shared/components/app-link";
import { useTranslation } from "react-i18next";
import Home from "shared/assets/icons/home.svg";
import Description from "shared/assets/icons/description.svg";

import { routePath } from "shared/config/route-config/router";
import cls from "./Sidebar.module.scss";

export const Sidebar: FC = () => {
    const [collapse, setCollapse] = useState(false);
    const [t] = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsedSidebar]: collapse })}
        >
            <div className={cls.linksContainer}>
                <AppLink
                    to={routePath.about}
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    className={classNames(cls.appLink)}
                >
                    <Home className={cls.lincIcon} />
                    <span className={cls.link}>{t("aboutLink")}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    to={routePath.description}
                    className={classNames(cls.appLink)}
                >
                    <Description className={cls.lincIcon} />
                    <span className={cls.link}>
                        {t("descriptionLink")}
                    </span>
                </AppLink>

            </div>
            <Button
                data-testid="sidebarBtn"
                square
                className={cls.collapseButton}
                theme={ButtonTheme.INVERTED_BACKGROUND}
                onClick={() => { return setCollapse((prev) => { return !prev; }); }}
                size={ButtonSize.M}
            >
                {collapse ? ">" : "<"}
            </Button>
            <div className={cls.switchers}>
                <ToggleThem />
                <LangSwitcher shortLang={collapse} />
            </div>
        </div>
    );
};
