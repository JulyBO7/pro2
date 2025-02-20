import React, { useState } from "react";

import { classNames } from "shared/lib/helpers/classNames";
import { Button, ButtonTheme } from "shared/components/button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAuthData, userActions } from "entities/user";
import cls from "./Navbar.module.scss";
import { LoginModal } from "../../../features/auth-by-username/ui/login-modal/LoginModal";

export const Navbar: React.FC = () => {
    const [isClickedSignIn, setisClickedSignIn] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(selectUserAuthData);

    const onOpenModal = () => {
        setisClickedSignIn(true);
    };
    const onCloseModal = () => {
        setisClickedSignIn(false);
    };
    const onLogout = () => {
        dispatch(userActions.logout());
    };
    if (userAuthData) {
        return (
            <div className={classNames(cls.navbar)}>
                <div className={cls.wrapperLink} />
                <Button
                    theme={ButtonTheme.INVERTED_CLEAR}
                    onClick={onLogout}
                >
                    {t("signOut")}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink} />
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                onClick={onOpenModal}
            >
                {t("signIn") }
            </Button>
            <LoginModal isOpen={isClickedSignIn} onClose={onCloseModal} />
        </div>
    );
};
