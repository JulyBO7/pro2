import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/components/button";

// компонент нужен для тестирования Error Boundary

export const BagButton = () => {
    const [t] = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error("Error!!!");
        }
    }, [error]);
    return (
        <div>
            <Button onClick={() => {
                setError((prev) => !prev);
            }}
            >
                {t("bugButton")}
            </Button>
        </div>
    );
};
