import React, { Suspense } from "react";
import { Modal } from "shared/components/modal";
import { Loader } from "shared/components/loader";
import cls from "./LoginModal.module.scss";
import { LoginFormAsync } from "../login-form/LoginFormAsync";

type AuthModalProps = {
    isOpen: boolean
    onClose: ()=> void
}

export const LoginModal:React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cls.modal} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync autofocus={isOpen} />
            </Suspense>
        </Modal>
    );
};
