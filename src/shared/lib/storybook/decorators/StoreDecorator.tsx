import { StateSchema, StoreProvider } from "app/providers/store-provider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { loginReducer } from "features/auth-by-username";
import { articleReducer } from "entities/article";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    article: articleReducer,
};

export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={({ ...defaultAsyncReducers, ...asyncReducer } as ReducersMapObject<StateSchema>)}
    >
        <div className="app">
            <Story />
        </div>
    </StoreProvider>
);
