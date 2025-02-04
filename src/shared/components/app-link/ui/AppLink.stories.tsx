import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/theme-context";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        children: "link",
        to: "#",
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => {
    return (
        <AppLink {...args} />
    );
};

export const Primary = Template.bind({}) as typeof Template;
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({}) as typeof Template;
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const NotUnderline = Template.bind({}) as typeof Template;
NotUnderline.args = {
    theme: AppLinkTheme.NOT_UNDERLINE,
};

export const PrimaryDark = Template.bind({}) as typeof Template;
PrimaryDark.args = {
    ...Primary.args,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({}) as typeof Template;
SecondaryDark.args = {
    ...Secondary.args,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NotUnderlineDark = Template.bind({}) as typeof Template;
NotUnderlineDark.args = {
    ...NotUnderline.args,
};
NotUnderlineDark.decorators = [ThemeDecorator(Theme.DARK)];
