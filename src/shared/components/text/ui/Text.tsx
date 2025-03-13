import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Text.module.scss";

export enum TextThem{
    PRIMARY="primary",
    ERROR="error"
}
export enum TextAlign{
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center"
}
export enum TextSize{
    M = "size_m",
    L = "size_l",
    XL = "size_xl"
}

type TextProps={
    title?: string
    text?: string
    className?:string
    theme?: TextThem
    align?: TextAlign
    size?: TextSize
}

export const Text: FC<TextProps> = (props) => {
    const {
        title,
        text,
        className,
        theme = TextThem.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cls[theme], {}, [className, cls[align], cls[size]])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {text && <p className={cls.text}>{text}</p>}
        </div>

    );
};
