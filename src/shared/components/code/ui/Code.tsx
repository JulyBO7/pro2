import {
    FC, useCallback, useEffect, useRef, useState,
} from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { Button, ButtonTheme } from "shared/components/button";
import { Icon } from "shared/components/icon/ui/Icon";
import Copy from "shared/assets/icons/vector.svg";
import CheckMark from "shared/assets/icons/arrow.svg";
import cls from "./Code.module.scss";

type CodeProps = {
    text:string
    className?:string

}

export const Code:FC<CodeProps> = (props) => {
    const { text, className } = props;
    const [isClicked, setIsClicked] = useState(false);

    const timerId = useRef<number>();

    const handleCopyClick = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => setIsClicked(true));
        timerId.current = window.setTimeout(() => { setIsClicked(false); }, 1000);
    }, [text]);

    useEffect(() => () => {
        clearTimeout(timerId.current);
    }, []);

    return (
        <pre className={classNames(cls.container, {}, [className])}>
            <code>{text}</code>
            <Button theme={ButtonTheme.CLEAR} onClick={handleCopyClick} className={cls.copyButton}>
                {isClicked
                    ? <Icon Svg={CheckMark} />
                    : <Icon Svg={Copy} className={cls.icon} />}
            </Button>
        </pre>
    );
};
