import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";
import { FC } from "react";
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

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.appLink, {}, [cls[theme], className])}
        {...otherProps}
    >
        {children}
    </Link>
);
