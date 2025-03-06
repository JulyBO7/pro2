import { Story } from "@storybook/react";

export const LocalStorageDecorator = (Story: Story) => {
    localStorage.removeItem("theme");
    return (
        <Story />
    );
};
