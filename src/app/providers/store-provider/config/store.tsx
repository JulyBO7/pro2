import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { StateSchema } from "./StateSchema";

export const createAppStore = (initialState?: StateSchema) => {
    const store = configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
        devTools: __IS_DEV__,

    });
    return store;
};
