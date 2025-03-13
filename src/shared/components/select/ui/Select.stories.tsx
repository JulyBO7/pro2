import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/Theme-context";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        options: [
            { value: "option1", text: "option1" },
            { value: "option2", text: "option2" },
            { value: "option3", text: "option3" },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({}) as typeof Template;

export const Dark = Template.bind({}) as typeof Template;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
