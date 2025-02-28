import { Counter } from "entities/counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation("about");

    return (
        <div>
            <h1>{t("about")}</h1>
            <Counter />

        </div>
    );
};

export default AboutPage;
