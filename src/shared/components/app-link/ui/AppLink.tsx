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
  Theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    children,
    Theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.link, {}, [cls[Theme], className])}
        {...otherProps}
    >
        {children}
    </Link>
);
