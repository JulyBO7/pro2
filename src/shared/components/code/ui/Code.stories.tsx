import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/Theme-context";
import { Code } from "./Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        text: "export default {\ntitle: \"shared/Code\",\ncomponent: Code,\nargTypes: {\nbackgroundColor: { control: \"color\" },\n} as ComponentMeta<typeof Code>;",
    },

} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({}) as typeof Template;

export const Dark = Template.bind({}) as typeof Template;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({}) as typeof Template;
Green.decorators = [ThemeDecorator(Theme.GREEN)];
