import React from "react";
import { classNames } from "@/shared/utils/classNames";
import cls from "./button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  INVERTED = "inverted",
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  theme = ButtonTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <div>
      <button
        className={classNames(cls.button, {}, [cls[theme], className])}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
