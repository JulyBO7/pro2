import { ComponentStory, ComponentMeta } from "@storybook/react";
import image from "shared/assets/images/defaultAvatar.png";
import { Avatar } from "./Avatar";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        src: image,
        alt: "user",
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({}) as typeof Template;
Small.args = {
    size: 30,
};
export const Middle = Template.bind({}) as typeof Template;
Middle.args = {
    size: 60,
};
export const Large = Template.bind({}) as typeof Template;
Large.args = {
    size: 100,
};
