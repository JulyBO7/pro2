import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVERTED_PRIMARY = "invertedPrimary",
  INVERTED_SECONDARY = "invertedSecondary"

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
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
