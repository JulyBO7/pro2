import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Avatar.module.scss";

export enum AvatarSize {
    SMALL = "small",
    MIDDLE = "middle",
    LARGE = "large"
}
type AvatarProps = {
    src: string | undefined
    className?:string
    size?: AvatarSize
    text: string
}

export const Avatar:FC<AvatarProps> = (props) => {
    const {
        src,
        className,
        size = AvatarSize.MIDDLE,
        text,
    } = props;

    return (
        <div className={className}>
            <img src={src} alt={text} className={classNames(cls.image, {}, [cls[size]])} />
        </div>
    );
};
