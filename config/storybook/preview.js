import { addDecorator } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { StyleDecorator } from "../../src/shared/lib/storybook";
import { RouteDecorator } from "../../src/shared/lib/storybook/decorators/RouteDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator("light"));
addDecorator(RouteDecorator);
