import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, AvatarSize } from "./Avatar";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        src: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
        alt: "user",
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({}) as typeof Template;
Small.args = {
    size: AvatarSize.SMALL,
};
export const Middle = Template.bind({}) as typeof Template;
Middle.args = {
    size: AvatarSize.MIDDLE,
};
export const Large = Template.bind({}) as typeof Template;
Large.args = {
    size: AvatarSize.LARGE,
};
