import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities/user";
import { $axios } from "shared/api/api";
import { StateSchema } from "./StateSchema";
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

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                thunk: {
                    extraArgument: {
                        api: $axios,
                    },
                },
            },
        ),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
