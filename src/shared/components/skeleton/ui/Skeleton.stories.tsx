import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/Theme-context";
import { Skeleton, SkeletonTypes } from "./Skeleton";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },

} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({}) as typeof Template;
Default.args = {};

export const DefaultDark = Template.bind({}) as typeof Template;
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultGreenTheme = Template.bind({}) as typeof Template;
DefaultGreenTheme.decorators = [ThemeDecorator(Theme.GREEN)];

export const Curcle = Template.bind({}) as typeof Template;
Curcle.args = {
    width: "100",
    height: "100",
    type: SkeletonTypes.CURCLE,
};

export const CustomSize = Template.bind({}) as typeof Template;
CustomSize.args = {
    width: "300",
    height: "150",
};
