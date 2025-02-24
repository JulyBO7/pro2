import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { StateSchema, StoreWithReduceManager } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    }) as StoreWithReduceManager;

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
