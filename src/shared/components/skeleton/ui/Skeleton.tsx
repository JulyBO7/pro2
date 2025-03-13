import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Skeleton.module.scss";

export enum SkeletonTypes{
    CURCLE = "curcle",
    RECTANGLE = "rectangle"
}
type SkeletonProps = {
    className?: string
    type?: SkeletonTypes
    width?: string
    height?: string
}

export const Skeleton:FC<SkeletonProps> = ({
    className, width, height, type = SkeletonTypes.RECTANGLE,
}) => {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
    };
    return (
        <div style={style} className={classNames(cls.skeleton, {}, [className, cls[type]])} />
    );
};
