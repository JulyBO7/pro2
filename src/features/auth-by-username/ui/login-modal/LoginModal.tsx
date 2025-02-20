import React from "react";
import { Modal } from "shared/components/modal";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../login-form/LoginForm";

type AuthModalProps = {
    isOpen: boolean
    onClose: ()=> void
}

export const LoginModal:React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cls.modal} lazy>
            <LoginForm autofocus={isOpen} />
        </Modal>
    );
};
