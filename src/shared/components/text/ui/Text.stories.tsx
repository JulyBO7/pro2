import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/theme-context";
import { Text, TextThem } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
    return <Text {...args} />;
};

export const Primary = Template.bind({}) as typeof Template;
Primary.args = {
    title: "Title",
    text: "Text",
};

export const PrimaryDark = Template.bind({}) as typeof Template;
PrimaryDark.args = {
    title: "Title",
    text: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({}) as typeof Template;
Error.args = {
    title: "Title",
    text: "Text",
    theme: TextThem.ERROR,
};

export const ErrorDark = Template.bind({}) as typeof Template;
ErrorDark.args = {
    title: "Title",
    text: "Text",
    theme: TextThem.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({}) as typeof Template;
OnlyText.args = {
    text: "Text",
};

export const OnlyTitle = Template.bind({}) as typeof Template;
OnlyTitle.args = {
    title: "Title",
};
