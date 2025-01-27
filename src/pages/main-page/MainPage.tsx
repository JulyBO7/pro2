import { FC } from "react";
import { useTranslation } from "react-i18next";

type MainPageProps = {

}

export const MainPage:FC<MainPageProps> = () => {
    const [t] = useTranslation();

    return (
        <div>{t("main")}</div>
    );
};
