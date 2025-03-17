import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/lib/storybook";
import { Theme } from "app/providers/Theme-context";
import { StoreDecorator } from "shared/lib/storybook/decorators/StoreDecorator";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import { Navbar } from "./Navbar";

const state: DeepPartial<StateSchema> = {
    user: {},
};
const stateWithAuth: DeepPartial<StateSchema> = {
    user: {
        authData: {
            username: "",
            id: "1",
        },
    },
};
export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator(state)],

} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NotAuthorized = Template.bind({}) as typeof Template;

export const NotAuthorizedDark = Template.bind({}) as typeof Template;
NotAuthorizedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Authorized = Template.bind({}) as typeof Template;
Authorized.decorators = [StoreDecorator(stateWithAuth)];

export const AuthorizedDark = Template.bind({}) as typeof Template;
AuthorizedDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(stateWithAuth)];
