import { Button, ButtonTheme } from "shared/components/button";
import { Input, InputTheme } from "shared/components/input";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setPassword, setUsername } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { selectLoginForm } from "../../model/selectors/login-form-selector/selectLoginForm";
import { loginByUserName } from "../../model/services/login-by-username/loginByUserName";

export const LoginForm = ({ autofocus }: {autofocus: boolean }) => {
    const { t } = useTranslation();
    const { userName, password, error } = useSelector(selectLoginForm);
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
    // useEffect(() => {
    //     if (reset) {
    //         setUserName("");
    //         setPassword("");
    //     }
    // }, [reset]);

    return (
        <div className={cls.formContainer}>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
                onClick={onClickLoginFormButton}
                theme={ButtonTheme.OUTLINE}
                className={cls.button}
            >
                {t("signIn")}
            </Button>
        </div>
    );
};

// () => {
//     fetch("http://localhost:3000/posts")
//         .then((response) => { return response.json(); })
//         .then((res) => { return console.log(res); });
// }
