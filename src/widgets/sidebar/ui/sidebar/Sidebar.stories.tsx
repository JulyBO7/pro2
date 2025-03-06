import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator, ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/theme-context";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator({ user: { authData: {} } })],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({}) as typeof Template;
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({}) as typeof Template;
Dark.decorators = [
    ThemeDecorator(Theme.DARK),

];

export const NotAuth = Template.bind({}) as typeof Template;
NotAuth.decorators = [
    ThemeDecorator(Theme.LIGHT),

    StoreDecorator({ user: {} }),
];
