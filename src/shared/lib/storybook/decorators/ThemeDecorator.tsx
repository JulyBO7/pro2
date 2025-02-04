import React from "react";
import { Theme } from "../../../../app/providers/theme-context";

export const ThemeDecorator = (theme: Theme) => {
    return (Story: any) => {
        return (
            <div className={`app ${theme}`}>
                <Story />
            </div>
        );
    };
};
