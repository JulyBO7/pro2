import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/components/app-link";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
    const [t] = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink to="/about" className={classNames(cls.navbarLink)}>
                    {t("aboutLink")}
                </AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink to="/description" className={classNames(cls.navbarLink)}>
                    {t("descriptionLink")}
                </AppLink>
            </div>
        </div>
    );
};
