import { useTranslation } from "react-i18next";

const DescriptionPage = () => {
    const { t } = useTranslation("description");
    return <div>{t("description")}</div>;
};
export default DescriptionPage;
