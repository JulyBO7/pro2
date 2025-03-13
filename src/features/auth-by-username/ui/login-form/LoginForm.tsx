import { Button, ButtonTheme } from "shared/components/button";
import { Input, InputTheme } from "shared/components/input";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text, TextThem } from "shared/components/text";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useMemo } from "react";
import { selectError } from "../../model/selectors/error-selector/selectError";
import { selectIsLoading } from "../../model/selectors/isloading-selector/selectIsLoading";
import { loginReducer, setPassword, setUsername } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { loginByUserName } from "../../model/services/login-by-username/loginByUserName";
import { selectUserName } from "../../model/selectors/username-selector/selectUserName";
import { selectPassword } from "../../model/selectors/password-selector/selectPassword";

type LoginFormProps = {
    autofocus?: boolean
    onSuccess?: ()=> void
}
const LoginForm = ({ autofocus, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const password = useSelector(selectPassword);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const userName = useSelector(selectUserName);
    const dispatch = useAppDispatch();

    const onChangeUserName = (value: string) => {
        dispatch(setUsername(value));
    };
    const onChangePassword = (value: string) => {
        dispatch(setPassword(value));
    };
    const onClickLoginFormButton = async () => {
        const res = await dispatch(loginByUserName({ username: userName, password }));
        if (res.meta.requestStatus === "fulfilled") {
            onSuccess?.();
        }
    };
    const asyncLoginReducer = useMemo(() => ({ loginForm: loginReducer }), []);

    return (
        <AsyncReducersLoader reducers={asyncLoginReducer}>
            <div className={cls.formContainer}>
                {error && <Text text={error} theme={TextThem.ERROR} />}
                <Text title={t("loginForm")} />
                <Input
                    autoFocus={autofocus}
                    placeholder={String(t("enterName"))}
                    value={userName}
                    onChange={onChangeUserName}
                    className={cls.input}
                    caret
                    Theme={InputTheme.CLEAR}
                />
                <Input
                    className={cls.input}
                    caret
                    placeholder={String(t("enterPassword"))}
                    value={password}
                    onChange={onChangePassword}
                    Theme={InputTheme.CLEAR}
                />
                <Button
                    disabled={isLoading}
                    onClick={onClickLoginFormButton}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.button}
                >
                    {t("signIn")}
                </Button>
            </div>
        </AsyncReducersLoader>
    );
};

export default LoginForm;
