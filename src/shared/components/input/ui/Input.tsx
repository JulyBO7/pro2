import {
    ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef, useState,
} from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Input.module.scss";

export enum InputTheme{
    CLEAR="clear",
    PRIMARY="primary"
}
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "placeholder"> {
    type?: string,
    onChange?: (value: string)=> void,
    className?: string,
    caret?: boolean,
    theme?: InputTheme,
    placeholder?: string | number
    autoFocus?: boolean
}

export const Input:FC<InputProps> = (props) => {
    const {
        type = "text",
        value,
        onChange,
        className,
        readOnly,
        caret,
        theme = InputTheme.PRIMARY,
        placeholder,
        autoFocus, ...rest
    } = props;
    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocus, setIsFocus] = useState(false);

    const symbolWidth = 9;

    const inputRef = useRef<null | HTMLInputElement>(null);

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
            inputRef.current?.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <div className={cls.inputWithPlaceholder}>
                {placeholder && (
                    <span>
                        {`${placeholder}>`}
                    </span>
                )}
                <div className={cls.wrapInput}>
                    <input
                        ref={inputRef}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onSelect={onSelect}
                        className={classNames(cls.input, {}, [cls[theme]])}
                        type={type}
                        value={value}
                        onChange={onChangeValue}
                        readOnly={readOnly}
                        {...rest}
                    />
                    {isFocus && !readOnly && caret && (
                        <span
                            style={{ left: `${caretPosition ? caretPosition * symbolWidth : 10}px` }}
                            className={cls.caret}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
