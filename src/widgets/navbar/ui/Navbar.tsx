import React, { useState } from "react";

import { classNames } from "shared/lib/classNames";
import { Modal } from "shared/components/modal/ui/Modal";
import { Button, ButtonTheme } from "shared/components/button";
import cls from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
    const [isClickedLogIn, setisClickedLogIn] = useState(false);

    const onClick = () => {
        setisClickedLogIn(true);
    };
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.wrapperLink} />
            <Button
                theme={ButtonTheme.INVERTED_CLEAR}
                onClick={onClick}
            >
                log in
            </Button>

            <Modal isOpen={isClickedLogIn} onClose={() => { setisClickedLogIn(false); }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla dolor provident iure odio nisi impedit vero voluptatem reprehenderit labore? Ullam, quis debitis vero veritatis nobis quo a quidem hic.</p>
            </Modal>

        </div>
    );
};
