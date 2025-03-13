import { FC, SVGAttributes, VFC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Icon.module.scss";

interface IconProps extends SVGAttributes<SVGElement>{
    Svg: VFC<SVGAttributes<SVGElement>>
    className?:string
}

export const Icon:FC<IconProps> = ({ className, Svg, ...rest }: IconProps) => {
    const styles = classNames(cls.icon, {}, [className]);
    return (
        <Svg className={styles} {...rest} />
    );
};
