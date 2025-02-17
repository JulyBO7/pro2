import { useEffect, useState } from "react";
import { Button, ButtonTheme } from "shared/components/button";
import { Input, InputTheme } from "shared/components/input";
import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";

export const AuthForm = ({ reset, autofocus }: {reset: boolean, autofocus: boolean }) => {
    const { t } = useTranslation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (value: string) => {
        setUserName(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    useEffect(() => {
        if (reset) {
            setUserName("");
            setPassword("");
        }
    }, [reset]);

    return (
        <div className={cls.formContainer}>
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
                theme={ButtonTheme.OUTLINE}
                className={cls.button}
            >
                {t("signIn")}
            </Button>
        </div>
    );
};
