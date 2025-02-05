import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/components/app-link";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
    const [t] = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink}>
                {/* <AppLink
                    to="/about"
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    className={classNames(cls.navbarLink)}
                >
                    {t("aboutLink")}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    to="/description"
                    className={classNames(cls.navbarLink)}
                >
                    {t("descriptionLink")}
                </AppLink> */}
            </div>
        </div>
    );
};
