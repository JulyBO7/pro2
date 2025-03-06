import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook/decorators/ThemeDecorator";
import { Theme } from "app/providers/theme-context";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        children: "Text",
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({}) as typeof Template;
Primary.args = {
    isOpen: true,
};

export const Dark = Template.bind({}) as typeof Template;
Dark.args = {
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
