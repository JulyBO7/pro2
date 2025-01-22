import { useTranslation } from "react-i18next";

const DescriptionPage = () => {
  const { t, i18n } = useTranslation("description");
  return <div>{t("description")}</div>;
};
export default DescriptionPage;
