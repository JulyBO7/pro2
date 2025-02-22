import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
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
  square?: boolean,
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    square,
    size,
    disabled,
    theme = ButtonTheme.BACKGROUND,
    ...otherProps
}) => {
    const buttonClasses = classNames(
        cls.button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [cls[theme], cls[size], className],
    );
    return (
        <button
            disabled={disabled}
            type="button"
            className={buttonClasses}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>

    );
};
