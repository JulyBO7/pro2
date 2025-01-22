import { classNames } from "@/shared/utils/classNames";
import React from "react";
import cls from "./navbar.module.scss";
import { AppLink } from "@/shared/components/app-link";
import { ToggleThem } from "@/widgets/toggle-theme";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className={classNames(cls.navbar)}>
      <ToggleThem />
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
