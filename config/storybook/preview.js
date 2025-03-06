import { addDecorator } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { StyleDecorator, LocalStorageDecorator, RouteDecorator } from "../../src/shared/lib/storybook";
import { Theme } from "../../src/app/providers/theme-context";

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
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouteDecorator);
addDecorator(LocalStorageDecorator);
