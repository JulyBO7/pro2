import React from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/components/button";

type ToggleLangProps = {
    shortLang: boolean
};

export const LangSwitcher: React.FC<ToggleLangProps> = ({ shortLang }) => {
    const { t, i18n } = useTranslation();

    const switchLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button theme={ButtonTheme.INVERTED_OUTLINE} size={ButtonSize.M} onClick={switchLang}>
            {t(shortLang ? "shortLang" : "lang")}
        </Button>
    );
};
