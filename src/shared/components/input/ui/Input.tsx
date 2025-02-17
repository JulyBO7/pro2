import React, {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Input.module.scss";

export enum InputTheme{
    CLEAR="clear"
}
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    type?: string,
    value?: string,
    onChange?: (value: string)=> void,
    className?: string,
    caret?: boolean,
    theme?: InputTheme,
    placeholder?: string
    autoFocus?: boolean
}

export const Input:React.FC<InputProps> = (props) => {
    const {
        type = "text", value, onChange, className, caret, theme, placeholder, autoFocus, ...rest
    } = props;
    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocus, setIsFocus] = useState(false);

    const symbolWidth = 9;

    const inputRef = useRef(null);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange?.(newValue);
        setCaretPosition(newValue.length);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart);
    };
    const onFocus = () => {
        setIsFocus(true);
    };
    const onBlur = () => {
        setIsFocus(false);
    };
    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);
    return (
        <div className={cls.wrapper}>
            <input
                ref={inputRef}
                onBlur={onBlur}
                onFocus={onFocus}
                onSelect={onSelect}
                placeholder={placeholder}
                className={classNames(cls.input, {}, [cls[theme], className])}
                type={type}
                value={value}
                onChange={onChangeValue}
                {...rest}
            />
            {isFocus && caret && (
                <span
                    style={{ left: `${caretPosition ? caretPosition * symbolWidth : 10}px` }}
                    className={cls.caret}
                />
            )}
        </div>
    );
};
