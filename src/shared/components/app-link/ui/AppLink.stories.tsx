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
export const PrimaryDark = Template.bind({}) as typeof Template;
PrimaryDark.args = {
    ...Primary.args,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({}) as typeof Template;
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({}) as typeof Template;
SecondaryDark.args = {
    ...Secondary.args,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedPrimary = Template.bind({}) as typeof Template;
InvertedPrimary.args = {
    theme: AppLinkTheme.INVERTED_PRIMARY,
};

export const InvertedSecondary = Template.bind({}) as typeof Template;
InvertedSecondary.args = {
    theme: AppLinkTheme.INVERTED_SECONDARY,
};
