import { FC, HTMLAttributes } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import DefaultAvatar from "shared/assets/images/defaultAvatar.png";
import cls from "./Avatar.module.scss";

interface AvatarProps extends HTMLAttributes<HTMLImageElement>{
    src: string | undefined
    className?:string
    size?: number
    alt: string
}

export const Avatar:FC<AvatarProps> = (props) => {
    const {
        src,
        className,
        size,
        alt,
    } = props;

    const avatarSize = {
        width: size || 100,
        height: size || 100,
    };

    return (
        <img
            style={avatarSize}
            src={src ?? DefaultAvatar}
            alt={alt}
            className={classNames(cls.image, {}, [className])}
        />
    );
};
