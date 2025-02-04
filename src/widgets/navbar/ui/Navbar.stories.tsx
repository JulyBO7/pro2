import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/theme-context";
import { Navbar } from "./Navbar";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },

} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
    return <Navbar {...args} />;
};

export const Light = Template.bind({}) as typeof Template;

export const Dark = Template.bind({}) as typeof Template;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
