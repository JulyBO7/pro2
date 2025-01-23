import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/utils/classNames";
import cls from "./appLink.module.scss";

enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.appLink, {}, [cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
);
