import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export const RouteDecorator = (Story: Story) => {
    return (
        <MemoryRouter>
            <Story />
        </MemoryRouter>

    );
};
