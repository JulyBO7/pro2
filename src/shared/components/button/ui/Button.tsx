// import React from "react";
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  INVERTED_CLEAR = "invertedClear",
  OUTLINE = "outline",
  INVERTED_OUTLINE = "invertedOutline",
  BACKGROUND = "background",
  INVERTED_BACKGROUND = "invertedBackground"
}
export enum ButtonSize {
    M = "sizeM",
    L = "sizeL",
  }
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize,
  square?: boolean
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    square,
    size,
    theme = ButtonTheme.BACKGROUND,
    ...otherProps
}) => {
    const buttonClasses = classNames(
        cls.button,
        { [cls.square]: square },
        [cls[theme], cls[size], className],
    );
    return (
        <div>
            <button
                type="button"
                className={buttonClasses}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </button>
        </div>
    );
};
