import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
    children: ReactNode,
    container?: Element
}

export const Portal:FC<PortalProps> = ({ children, container = document.body }) => {
    return (
        createPortal(children, container)
    );
};
