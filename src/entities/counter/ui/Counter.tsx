import { Button } from "shared/components/button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../model/slice/counterSlice";
import { selectCounterValue } from "../model/selectors/counter-value-selector/selectCounterValue";

export const Counter = () => {
    const value = useSelector(selectCounterValue);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    const onDecrementClick = () => {
        dispatch(decrement());
    };
    const onIncrementClick = () => {
        dispatch(increment());
    };
    return (
        <div data-testid="counter">
            <h1 data-testid="title-counter">{value}</h1>
            <Button onClick={onDecrementClick} data-testid="btn-decrement">
                {t("decrement")}
            </Button>
            <Button onClick={onIncrementClick} data-testid="btn-increment">{t("increment")}</Button>
        </div>
    );
};
