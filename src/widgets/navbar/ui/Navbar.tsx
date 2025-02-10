import React, { useState } from "react";

import { classNames } from "shared/lib/classNames";
import { Modal } from "shared/components/modal/ui/Modal";
import { Button, ButtonTheme } from "shared/components/button";
import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
    const [isClickedSignIn, setisClickedSignIn] = useState(false);
    const { t } = useTranslation();

    const onClick = () => {
        setisClickedSignIn(true);
    };
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink} />
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                onClick={onClick}
            >
                {t("signIn")}
            </Button>

            <Modal isOpen={isClickedSignIn} onClose={() => { setisClickedSignIn(false); }}>
                <p>
                    {t("signIn")}
                </p>
            </Modal>

        </div>
    );
};
