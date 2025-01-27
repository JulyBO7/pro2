import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/components/button";

type ToggleLangProps = {};

export const LangSwitcher: React.FC<ToggleLangProps> = () => {
    const { t, i18n } = useTranslation();

    const switchLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={switchLang}>
            {t("lang")}
        </Button>
    );
};
