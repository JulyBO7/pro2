// import React from "react";
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <div>
            <button
                type="button"
                className={classNames(cls.button, {}, [cls[theme], className])}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </button>
        </div>
    );
};
