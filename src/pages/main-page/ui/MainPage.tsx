import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Skeleton, SkeletonTypes } from "../../../shared/components/skeleton/ui/Skeleton";

type MainPageProps = {

}
export const MainPage:FC<MainPageProps> = () => {
    const [t] = useTranslation();
    return (
        <div style={{ height: "100%" }}>
            {t("mainPage")}
        </div>
    );
};
