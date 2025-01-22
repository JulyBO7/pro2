import { classNames } from "@/shared/utils/classNames";
import React from "react";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/components/app-link";
import { ToggleThem } from "@/widgets/toggle-theme";
import { LangSwitcher } from "@/widgets/lang-switcher/ui/LangSwitcher";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.wrapperLink}>
        <AppLink to={"/about"} className={classNames(cls.navbarLink)}>
          About
        </AppLink>
        <AppLink to={"/description"} className={classNames(cls.navbarLink)}>
          Description
        </AppLink>
      </div>
    </div>
  );
};
