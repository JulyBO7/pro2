import {
    ChangeEvent, FC, SelectHTMLAttributes, useMemo,
} from "react";
import { classNames } from "../../../../shared/lib/helpers/classNames";
import cls from "./Select.module.scss";

type Option = {
    value: string
    text: string
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">{
    className?:string
    options: Option []
    onChange?: (value: string) => void
    label?: string
}

export const Select:FC<SelectProps> = (props) => {
    const {
        className, options, onChange, label, ...rest
    } = props;

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    const selectOptions = useMemo(() => options.map((opt) => (
        <option
            key={opt.value}
            className={cls.options}
            value={opt.value}
        >
            {opt.text}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {label && <span className={cls.span}>{`${label}>`}</span>}
            <select
                name="select"
                onChange={handleChangeOption}
                className={classNames(cls.select)}
                {...rest}
            >
                {selectOptions}
            </select>
        </div>
    );
};
