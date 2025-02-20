import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { loginReducer } from "features/auth-by-username";
import { userReducer } from "entities/user";
import { StateSchema } from "./StateSchema";

export const createAppStore = (initialState?: StateSchema) => {
    const rootReducer = combineReducers({
        counter: counterReducer,
        loginForm: loginReducer,
        user: userReducer,
    });
    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: __IS_DEV__,

    });
    return store;
};
