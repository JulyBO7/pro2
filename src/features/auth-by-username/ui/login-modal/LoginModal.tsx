import React from "react";
import { Modal } from "shared/components/modal";
import cls from "./LoginModal.module.scss";
import { AuthForm } from "../login-form/LoginForm";

type AuthModalProps = {
    isOpen: boolean
    onClose: ()=> void
}

export const AuthModal:React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={cls.modal} lazy>
            <AuthForm reset={!isOpen} autofocus={isOpen} />
        </Modal>
    );
};
