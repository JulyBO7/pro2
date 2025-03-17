import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/components/button";
import { Input, InputTheme } from "shared/components/input";
import { classNames } from "shared/lib/helpers/classNames";
import { AsyncReducersLoader, ReducersList } from "shared/lib/components/AsyncReducersLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from "./AddNewCommentForm.module.scss";
import { addNewCommentFormActions, addNewCommentFormReducer } from "../model/slice/addNewCommentFormSlice";
import { selectNewCommentText } from "../model/selectors/selectNewCommentText";
import { selectAddNewCommentFormIsLoading } from "../model/selectors/selectAddNewCommentFormIsLoading";

type AddNewCommentFormProps = {
    className?: string
    onSendComment: ()=> void
}
const reducer: ReducersList = {
    addNewCommentForm: addNewCommentFormReducer,
};

const AddNewCommentForm = memo((props:AddNewCommentFormProps) => {
    const { t } = useTranslation("articleDetailesPage");

    const text = useSelector(selectNewCommentText);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectAddNewCommentFormIsLoading);

    const handleChangeCommentText = useCallback((value: string) => {
        dispatch(addNewCommentFormActions.setText(value));
    }, [dispatch]);

    return (
        <AsyncReducersLoader reducers={reducer}>
            <div className={classNames(cls.container, {}, [props.className])}>
                <Input
                    theme={InputTheme.CLEAR}
                    caret
                    placeholder={t("inputComment")}
                    className={cls.input}
                    value={text || ""}
                    onChange={handleChangeCommentText}
                />
                <Button disabled={isLoading} onClick={props.onSendComment}>{t("send")}</Button>
            </div>
        </AsyncReducersLoader>
    );
});

export default AddNewCommentForm;
