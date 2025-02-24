import { Button, ButtonTheme } from "shared/components/button";
import { Input, InputTheme } from "shared/components/input";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextThem } from "shared/components/text";
import { AsyncReducersLoader } from "shared/additional-components/AsyncReducersLoader";
import { selectError } from "../../model/selectors/error-selector/selectError";
import { selectIsLoading } from "../../model/selectors/isloading-selector/selectIsLoading";
import { loginReducer, setPassword, setUsername } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { loginByUserName } from "../../model/services/login-by-username/loginByUserName";
import { selectUserName } from "../../model/selectors/username-selector/selectUserName";
import { selectPassword } from "../../model/selectors/password-selector/selectPassword";

const LoginForm = ({ autofocus }: {autofocus?: boolean }) => {
    const { t } = useTranslation();

    const password = useSelector(selectPassword);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const onChangeUserName = (value: string) => {
        dispatch(setUsername(value));
    };
    const onChangePassword = (value: string) => {
        dispatch(setPassword(value));
    };
    const onClickLoginFormButton = () => {
        dispatch(loginByUserName({ username: userName, password }));
    };
    const asyncLoginReducer = { loginForm: loginReducer };
    return (
        <AsyncReducersLoader reducers={asyncLoginReducer} removeAfterUnmount={false}>
            <div className={cls.formContainer}>
                {error && <Text text={error} theme={TextThem.ERROR} />}
                <Text title={t("loginForm")} />
                <Input
                    autoFocus={autofocus}
                    placeholder={t("enterName")}
                    value={userName}
                    onChange={onChangeUserName}
                    className={cls.input}
                    caret
                    theme={InputTheme.CLEAR}
                />
                <Input
                    className={cls.input}
                    caret
                    placeholder={t("enterPassword")}
                    value={password}
                    onChange={onChangePassword}
                    theme={InputTheme.CLEAR}
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
