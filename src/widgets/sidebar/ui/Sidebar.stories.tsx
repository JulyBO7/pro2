import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WithThemProviderDecorator } from "shared/lib/storybook/decorators/WithThemProvider";
// import { Theme } from "app/providers/theme-context";
// import { ThemeDecorator } from "shared/lib/storybook";
// import { Theme } from "app/providers/theme-context";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [WithThemProviderDecorator],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return (
        <Sidebar {...args} />
    );
};

export const Light = Template.bind({}) as typeof Template;

export const Dark = Template.bind({}) as typeof Template;
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
