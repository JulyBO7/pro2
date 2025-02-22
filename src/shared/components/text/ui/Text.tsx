import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Text.module.scss";

export enum TextThem{
    PRIMARY="primary",
    ERROR="error"
}

type TextProps={
    title?: string
    text?: string
    className?:string
    theme?: TextThem
}

export const Text: FC<TextProps> = ({
    title, text, className, theme = TextThem.PRIMARY,
}) => {
    return (
        <div className={classNames(cls[theme], {}, [className])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
