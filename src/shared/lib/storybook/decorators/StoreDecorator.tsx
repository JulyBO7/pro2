import { StateSchema, StoreProvider } from "app/providers/store-provider";
import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
    return (Story: Story) => {
        return (
            <StoreProvider initialState={state as StateSchema}>
                <div className="app">
                    <Story />
                </div>
            </StoreProvider>
        );
    };
};
