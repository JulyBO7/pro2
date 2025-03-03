import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/theme-context";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },

} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({}) as typeof Template;
Light.decorators = [ThemeDecorator(Theme.LIGHT), (Story: any) => {
    localStorage.removeItem("theme");
    return (
        <Story />
    );
}];

export const Dark = Template.bind({}) as typeof Template;
Dark.decorators = [ThemeDecorator(Theme.DARK), (Story: any) => {
    localStorage.removeItem("theme");
    return (
        <Story />
    );
}];
