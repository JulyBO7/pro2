import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/Theme-context";
import { Loader } from "./Loader";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({}) as typeof Template;

export const PrimaryDark = Template.bind({}) as typeof Template;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
