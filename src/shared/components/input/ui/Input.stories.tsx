import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, InputTheme } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        placeholder: "input text",
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({}) as typeof Template;
Primary.args = {};

export const Clear = Template.bind({}) as typeof Template;
Clear.args = {
    theme: InputTheme.CLEAR,
};
