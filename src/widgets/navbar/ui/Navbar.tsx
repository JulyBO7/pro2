import React from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink} />
        </div>
    );
};
