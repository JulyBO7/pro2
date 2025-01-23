import React from "react";
import { classNames } from "@/shared/utils/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/components/app-link";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => (
    <div className={classNames(cls.navbar)}>
        <div className={cls.wrapperLink}>
            <AppLink to="/about" className={classNames(cls.navbarLink)}>
                About
            </AppLink>
            <AppLink to="/description" className={classNames(cls.navbarLink)}>
                Description
            </AppLink>
        </div>
    </div>
);
