import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator, ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/theme-context";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { LoginForm } from "./LoginForm";

const state: DeepPartial<StateSchema> = {
    loginForm:
    {
        userName: "",
        isLoading: false,
        password: "",
    },
};
const stateWithError: DeepPartial<StateSchema> = {
    loginForm: { ...state.loginForm, error: "ERROR" },
};
export default {
    title: "features/LoginForm",
    component: LoginForm,
    decorators: [StoreDecorator(state)],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
    return <LoginForm {...args} />;
};

export const Default = Template.bind({}) as typeof Template;

export const DefaultDark = Template.bind({}) as typeof Template;
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({}) as typeof Template;
WithError.decorators = [StoreDecorator(stateWithError)];

export const WithErrorDark = Template.bind({}) as typeof Template;
WithErrorDark.decorators = [StoreDecorator(stateWithError), ThemeDecorator(Theme.DARK)];
