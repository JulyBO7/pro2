import React, { useState } from "react";

import { classNames } from "shared/lib/helpers/classNames";
import { Button, ButtonTheme } from "shared/components/button";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { AuthModal } from "../../../features/auth-by-username/ui/login-modal/LoginModal";

export const Navbar: React.FC = () => {
    const [isClickedSignIn, setisClickedSignIn] = useState(false);
    const { t } = useTranslation();

    const onOpenModal = () => {
        setisClickedSignIn(true);
    };
    const onCloseModal = () => {
        setisClickedSignIn(false);
    };
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink} />
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                onClick={onOpenModal}
            >
                {t("signIn")}
            </Button>
            <AuthModal isOpen={isClickedSignIn} onClose={onCloseModal} />
        </div>
    );
};
