import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/theme-context";
import { Button, ButtonTheme } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        children: "Text",
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} />;
};

export const Primary = Template.bind({}) as typeof Template;

export const Clear = Template.bind({}) as typeof Template;
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({}) as typeof Template;
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({}) as typeof Template;
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
