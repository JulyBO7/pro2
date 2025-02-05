import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/theme-context";
import { Button, ButtonSize, ButtonTheme } from "./Button";

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

export const Clear = Template.bind({}) as typeof Template;
Clear.args = {
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({}) as typeof Template;
ClearDark.args = {
    ...Clear.args,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({}) as typeof Template;
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({}) as typeof Template;
OutlineDark.args = {
    ...Outline.args,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({}) as typeof Template;
Background.args = {
    theme: ButtonTheme.INVERTED_BACKGROUND,
};

export const BackgroundDark = Template.bind({}) as typeof Template;
BackgroundDark.args = {
    ...Background.args,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({}) as typeof Template;
SquareSizeM.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({}) as typeof Template;
SquareSizeL.args = {
    children: "<",
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};
