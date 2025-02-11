import {
    FC, ReactNode, MouseEvent,
    useEffect,
    useCallback,

} from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { Portal } from "shared/components/portal";
import { useTheme } from "app/providers/theme-context";
import cls from "./Modal.module.scss";

type ModalProps = {
children: ReactNode
onClose?: ()=> void
isOpen: boolean

}

export const Modal:FC<ModalProps> = ({ children, onClose, isOpen }) => {
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const onContentClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onKeyDown]);

    return (
        <Portal>
            <div
                onClick={closeHandler}
                className={classNames(cls.modal, { [cls.open]: isOpen }, [cls[theme]])}
            >
                <div
                    onClick={onContentClick}
                    className={classNames(cls.content, { [cls.openContent]: isOpen })}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
