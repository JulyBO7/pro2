import React from "react";
import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";
import { Button } from "@/shared/components/button";

type PageErrorProps = {}

export const PageError:React.FC<PageErrorProps> = () => {
    const [t] = useTranslation();
    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cls.pageError}>
            <h1>{t("pageError")}</h1>
            <Button onClick={handleClick}>
                {t("reload")}
            </Button>
        </div>
    );
};
