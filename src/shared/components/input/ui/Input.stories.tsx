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

const Template: ComponentStory<typeof Input> = (args) => {
    return <Input {...args} />;
};

export const Default = Template.bind({}) as typeof Template;
Default.args = {
};

export const Clear = Template.bind({}) as typeof Template;
Clear.args = {
    theme: InputTheme.CLEAR,
};

// export const Outline = Template.bind({}) as typeof Template;
// Outline.args = {
//     theme: ButtonTheme.OUTLINE,
// };

// export const OutlineDark = Template.bind({}) as typeof Template;
// OutlineDark.args = {
//     ...Outline.args,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Background = Template.bind({}) as typeof Template;
// Background.args = {
//     theme: ButtonTheme.INVERTED_BACKGROUND,
// };

// export const BackgroundDark = Template.bind({}) as typeof Template;
// BackgroundDark.args = {
//     ...Background.args,
// };
// BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const SquareSizeM = Template.bind({}) as typeof Template;
// SquareSizeM.args = {
//     children: ">",
//     theme: ButtonTheme.BACKGROUND,
//     square: true,
//     size: ButtonSize.M,
// };

// export const SquareSizeL = Template.bind({}) as typeof Template;
// SquareSizeL.args = {
//     children: "<",
//     theme: ButtonTheme.BACKGROUND,
//     square: true,
//     size: ButtonSize.L,
// };
