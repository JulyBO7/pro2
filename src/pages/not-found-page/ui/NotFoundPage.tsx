import { FC } from "react";
import { useTranslation } from "react-i18next";

type ErrorPageProps = {
}

export const ErrorPage:FC<ErrorPageProps> = () => {
    const [t] = useTranslation();
    return (
        <div>
            {t("pageNotFound")}
        </div>
    );
};
