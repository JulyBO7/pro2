import { Button } from "@/shared/components/button";
import { ButtonTheme } from "@/shared/components/button";
import React from "react";
import { useTranslation } from "react-i18next";

type ToggleLangProps = {};

export const LangSwitcher: React.FC<ToggleLangProps> = ({}) => {
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
