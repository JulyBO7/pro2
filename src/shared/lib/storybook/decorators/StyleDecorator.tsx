import "app/styles/index.scss";
import { Story } from "@storybook/react";

export const StyleDecorator = (Story:Story) => {
    return (
        <div className="app">
            <Story />
        </div>

    );
};
