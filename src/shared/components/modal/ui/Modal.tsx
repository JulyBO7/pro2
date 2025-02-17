import {
    FC, ReactNode, MouseEvent,
    useEffect,
    useCallback,
    useState,

} from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { Portal } from "shared/components/portal";
import cls from "./Modal.module.scss";

type ModalProps = {
children: ReactNode
onClose?: ()=> void
isOpen: boolean,
className?: string,
lazy?: boolean
}

export const Modal:FC<ModalProps> = ({
    children, onClose, isOpen, className, lazy,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleModalClose = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const handleContentClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleModalClose();
        }
    }, [handleModalClose]);

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    // if (lazy && !isOpen) return null;
    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div
                onClick={handleModalClose}
                className={classNames(cls.modal, { [cls.open]: isOpen })}
            >
                <div
                    onClick={handleContentClick}
                    className={classNames(cls.content, {}, [className])}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
